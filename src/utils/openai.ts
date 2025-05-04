export async function getOpenAISuggestion(prompt: string): Promise<string> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const json = await response.json();
    return json.choices?.[0]?.message?.content || "";
  } catch (err) {
    console.error("OpenAI fetch error:", err);
    throw new Error("Failed to fetch suggestion from OpenAI.");
  }
}
