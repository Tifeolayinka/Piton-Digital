import { GoogleGenAI, Type, Schema } from "@google/genai";
import { VibeAnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeVibe = async (idea: string): Promise<VibeAnalysisResult> => {
  const prompt = `
    You are PITON, a high-performance "Ascent Architect" for an elite digital agency.
    Your tone is precise, rugged, and ambitious.
    Analyze the following startup idea or concept: "${idea}".
    
    Create a strategic brand identity for it. 
    1. Give it a solid, scalable name.
    2. A powerful slogan (short, punchy).
    3. An "Ascent Score" from 1-100 based on market viability and technical feasibility.
    4. A color palette of 3 hex codes (high contrast, modern).
    5. A recommended Tech Stack (reliable, scalable tools).
    6. A short "Strategic Analysis" (2 sentences max) describing the route to market.
  `;

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      appName: { type: Type.STRING, description: "The name of the app/startup" },
      slogan: { type: Type.STRING, description: "A catchy slogan" },
      vibeScore: { type: Type.INTEGER, description: "Score from 0 to 100" },
      colorPalette: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "Array of 3 hex color codes"
      },
      techStack: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Recommended tech stack items"
      },
      analysis: { type: Type.STRING, description: "Short strategic description" }
    },
    required: ["appName", "slogan", "vibeScore", "colorPalette", "techStack", "analysis"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text) as VibeAnalysisResult;
  } catch (error) {
    console.error("Error analyzing vibe:", error);
    throw error;
  }
};