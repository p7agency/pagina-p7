
import { GoogleGenAI } from "@google/genai";

export const generateTagline = async (context: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Gere uma frase de impacto curta e brutalista em português para uma agência de IA de elite. Contexto: ${context}. Use apenas letras maiúsculas.`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 50,
      }
    });
    return response.text.trim();
  } catch (error) {
    console.error("Erro ao gerar tagline:", error);
    return "INOVAÇÃO. RESULTADO. FUTURO.";
  }
};
