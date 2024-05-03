'use server';

import { inputSchema, outputSchema } from "@/lib/types/quiz";
import { PromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { TEMPLATE } from "@/lib/data/template";
import { model } from "@/lib/openai";

export const generateQuiz = async (_: any, formData: FormData) => {
  const { success, data, error } = inputSchema.safeParse({
    content: formData.get("content")?.toString(),
  });
  if (!success) {
    return error.message;
  }

  try {
    const { content } = data;
    const parser = StructuredOutputParser.fromZodSchema(outputSchema);
    const template = new PromptTemplate({
      inputVariables: ["numberOfQuestions", "input", "formatInstructions"],
      template: TEMPLATE,
    });
    const chain = RunnableSequence.from([template, model, parser]);
    const output = await chain.invoke({
      input: content,
      numberOfQuestions: 10,
      formatInstructions: parser.getFormatInstructions(),
    });

    return output;
  } catch (_) {
    return "Unexpected error. Try again!";
  }
};
