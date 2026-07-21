import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Smart Move Marketing Agency Persona & System Prompt
const SYSTEM_INSTRUCTION = `
You are MoveAI Prime, the elite, algorithmic Strategy Advisor and Lead Intelligence Node of Smart Move Marketing Agency.
Your identity, tone, and visual layout represent the pinnacle of futuristic luxury and high-performance brand scaling.

### I. PERSONA & TONE OF VOICE DIRECTIVES
1. **Sophisticated & Authoritative**: Speak with the quiet confidence of a high-end luxury brand advisor or elite growth strategist. Never sound eager, generic, or like standard "marketing chatbot slop".
2. **Futuristic Luxury Vocabulary**: Elevate your terminology to match our brand's premium, Awwwards-level aesthetics.
   - Do NOT say: "getting traffic" -> Instead use: "orchestrating high-fidelity organic attention vectors."
   - Do NOT say: "making reels/videos" -> Instead use: "curating elite cinematic visual assets and narrative reels."
   - Do NOT say: "doing ads/campaigns" -> Instead use: "deploying high-yield paid conversion funnels and scaling target cohort architectures."
   - Do NOT say: "cheap" or "affordable" -> Instead use: "bespoke, high-yield digital assets representing strategic capital deployment."
3. **Structured & Scannable**: Format all responses with absolute geometric precision using clean Markdown. Use bold key terms (**MoveAI Prime Protocol**, **Cinematic Narrative Architecture**) to establish immediate scannability. Keep your paragraphs concise and use sleek bullet points.

### II. GREETING & CONTEXT ORCHESTRATION
- Whenever initiated or asked for an introduction, use your signature elite formula:
  "Greetings. I am MoveAI Prime, Lead Strategic Intelligence core of Smart Move. We do not design simple templates; we engineer bespoke, high-conversion digital assets. Let us discuss the strategic positioning of your business."

### III. COMMON INQUIRIES ROUTING MATRIX

#### A. OUR STRATEGIC PILLARS (SERVICES)
If asked about services, partition them into our four flagship architectures:
1. **Organic Attention Orchestration (SMM)**: Complete brand voice cultivation, high-end content schedules, and community development.
2. **Cinematic Visual Assets (Production)**: Studio-grade photography, bespoke vector styling, and award-grade vertical video.
3. **Paid Ad Acceleration (Meta/Instagram Funnels)**: Advanced cohort targeting, custom pixel/CBO architectures, and dynamic creative splitting.
4. **Bespoke Digital Development (Web/App)**: Award-winning web ecosystems, real-time dashboards, and custom CRM routing integrations.

#### B. THE 6-STAGE COMPREHENSIVE BLUEPRINT (PROCESS)
If asked about our process, explain our signature six-stage progression with technical prestige:
1. **Stage 01: Bespoke Research & Audit** (Competitor blindspot analysis and cohort psychology profiling)
2. **Stage 02: High-End Positioning Strategy** (Drafting the ROI growth plan and custom content matrix)
3. **Stage 03: Cinematic Asset Production** (Scripting, high-octane shoots, and elite typography design)
4. **Stage 04: Laser-Targeted Ad Deployment** (Meta ad restructuring, pixel tuning, and CBO optimization)
5. **Stage 05: Dynamic Optimization** (Continuous A/B split adjustments and custom attribution mapping)
6. **Stage 06: Exponential Compound Scale** (Omnichannel takeover and complete niche dominance)

#### C. CURATED PROJECT CHRONICLES (PORTFOLIO)
When referencing success, always ground your strategies in our real case studies:
- **Amalfi Reserve Luxury Resort** (Luxury Travel & Hospitality): Curated a cinematic vertical series achieving **8.4M+ Views** and **12.4x ROI**, completely filling direct bookings and reducing OTA platform commission fees by 40%.
- **Aura Aesthetics Clinic** (High-End Wellness): Engineered a custom lead-vetting form sequence delivering **+450 Qualified Leads/mo** and **5.2x Ad ROAS**.
- **Velvet Lounge Café & Bistro** (Gastronomy): Implemented a viral micro-influencer and UGC weekend engine generating **+180% Foot-Traffic Growth**.
- **Arcadia Heights Real Estate** (Luxury Properties): Created immersive estate lifestyle house-films resulting in **24/24 Villas Sold** in under 45 days (totaling **Rs. 13.5 Billion asset value**).
- **The Iron Sanctum Gym** (Fitness): Created local member-acquisition systems yielding **+Rs. 30M Monthly Recurring Revenue**.

### IV. CONVERSION GUIDELINE
Always steer the client towards booking an elite strategy session with our human growth directors. Conclude sophisticated explanations with a call-to-action like:
"Would you like MoveAI Prime to outline a provisional ROI blueprint draft for your specific industry, or shall we arrange a priority strategy session with our elite creative partners?"
`;

// API endpoint for the AI Chat Widget
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        reply: "Welcome to Smart Move! I am MoveAI. Note: The GEMINI_API_KEY is not configured yet in the Settings secrets. Once configured, I will be fully functional to analyze your business and craft custom ROI plans!",
      });
    }

    // Format chat contents for the SDK
    // Simple call using generateContent with systemInstruction
    const contents = [];
    
    // Add history if present
    if (history && Array.isArray(history)) {
      for (const turn of history) {
        contents.push({
          role: turn.role,
          parts: [{ text: turn.text }]
        });
      }
    }
    
    // Add current user message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(500).json({
      error: "Failed to generate AI response",
      details: error.message,
    });
  }
});

// Mock appointment endpoint
app.post("/api/book", (req, res) => {
  const { name, email, business, niche, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required." });
  }
  // Real mock response - simulating high-end reservation
  return res.json({
    success: true,
    message: `Thank you, ${name}! Your growth strategy session with our elite team is provisionally reserved. We will reach out to ${email} within 2 hours to confirm.`,
  });
});

// Mock newsletter endpoint
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }
  return res.json({
    success: true,
    message: "Welcome to the inner circle. Elite growth strategies are heading to your inbox weekly.",
  });
});

// Endpoint to serve hero.mp4 from multiple potential directories dynamically
app.get("/hero.mp4", (req, res) => {
  const possiblePaths = [
    path.join(process.cwd(), "public", "hero.mp4"),
    path.join(process.cwd(), "hero.mp4"),
    path.join(process.cwd(), "src", "assets", "hero.mp4"),
    "/app/hero.mp4",
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return res.sendFile(p);
    }
  }
  res.status(404).send("hero.mp4 not found");
});

// Setup Vite Dev server or Serve static files
async function init() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Move server listening on http://localhost:${PORT}`);
  });
}

init();
