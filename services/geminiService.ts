import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
  // In a real app, this key would be securely managed and not hardcoded.
  // For this example, we throw an error if it's not set in the environment.
  console.warn(
    "API_KEY environment variable not set. Using a placeholder. AI features will not work."
  );
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Gets a daily rental price suggestion for an item using the Gemini API.
 * @param itemTitle The title of the item.
 * @param itemDescription The description of the item.
 * @returns A suggested price as a number, or null if an error occurs.
 */
export async function getPricingSuggestion(
  itemTitle: string,
  itemDescription: string
): Promise<number | null> {
  try {
    const prompt = `Based on the following item, suggest a fair daily rental price in USD.
    
    Item Title: "${itemTitle}"
    Item Description: "${itemDescription}"
    
    Consider factors like the item's value, category, and potential demand. Provide only a single numerical value representing the price.`;
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              price: {
                type: Type.NUMBER,
                description: "The suggested daily rental price in USD.",
              },
            },
            required: ["price"],
          },
        },
    });

    const jsonText = response.text.trim();
    if (jsonText) {
        const result = JSON.parse(jsonText);
        if (result && typeof result.price === 'number') {
            return Math.round(result.price); // Return a rounded integer
        }
    }
    
    return null;

  } catch (error) {
    console.error("Error fetching pricing suggestion from Gemini API:", error);
    return null;
  }
}
