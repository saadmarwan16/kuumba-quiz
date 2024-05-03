import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { environment } from "@/environment";
import { inputSchema, outputSchema } from "@/lib/types/quiz";
import { TEMPLATE } from "@/lib/data/template";

export async function POST(req: NextRequest) {
  const body = inputSchema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json(
      {
        error: "Invalid input format",
      },
      { status: 400 }
    );
  }

  const content = body.data.content;
  const model = new ChatOpenAI({
    apiKey: environment.OPENAI_API_KEY,
    temperature: 0.8,
  });
  const parser = StructuredOutputParser.fromZodSchema(outputSchema);
  const template = new PromptTemplate({
    inputVariables: ["numberOfQuestions", "input", "formatInstructions"],
    template: TEMPLATE,
  });
  const chain = RunnableSequence.from([template, model, parser]);
  const res = await chain.invoke({
    input: content,
    numberOfQuestions: 10,
    formatInstructions: parser.getFormatInstructions(),
  });
  const output = outputSchema.safeParse(res);
  if (!output.success) {
    return NextResponse.json(
      {
        error: "Invalid output format",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    data: output.data,
  });
}
