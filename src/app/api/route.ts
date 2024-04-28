import { openai } from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    stream: true,
    messages: messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
