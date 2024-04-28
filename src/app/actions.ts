"use server";

import { openai } from "@/lib/openai";

export const getQuiz = async (_: any, form: FormData) => {
  const prompt = form.get("prompt")?.toString();
  if (!prompt) {
    return;
  }

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Can you generate a 10 multiple choice quiz from the book ${prompt} with the correct answers?`,
      },
    ],
    model: "gpt-4",
  });
  console.log(completion.choices[0].message.content);

  return {
    title: prompt,
    content: completion.choices[0].message.content,
  };
};
