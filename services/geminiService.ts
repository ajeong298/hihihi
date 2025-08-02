
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable not set.");
  }
  return apiKey;
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const getEncouragementForTeacher = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "지친 교사를 위한 따뜻하고 힘이 되는 명언이나 응원 문구를 짧게 하나만 만들어줘. 학생들에게 이야기하듯 친근한 말투로 부탁해.",
      config: {
        systemInstruction: "당신은 지친 교사들에게 따뜻한 위로와 응원을 건네는 상담가입니다. 문장은 친근하고 다정한 말투로 작성해주세요.",
        temperature: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to fetch encouragement from Gemini API.");
  }
};
