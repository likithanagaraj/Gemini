import { GoogleGenerativeAI } from "@google/generative-ai";

async function getDataFromGemini(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text; // Return the text as the resolved value of the promise
  } catch (error) {
    console.error("Error fetching data from Gemini:", error);
    throw error; // Re-throw the error to propagate it up the call chain
  }
}

export { getDataFromGemini };
