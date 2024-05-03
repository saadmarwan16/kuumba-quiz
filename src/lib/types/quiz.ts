import z from "zod";

export const inputSchema = z.object({
  content: z.string().min(1, "Input cannot be empty"),
});

export const outputSchema = z.object({
  title: z.string().describe("The title of the book (capitalized)"),
  questions: z
    .array(
      z.object({
        question: z.string().describe("The question"),
        options: z.array(z.string()).describe("The options"),
        answer: z.string().describe("The answer"),
      })
    )
    .describe("A list of the multiple choice questions"),
});

export type Output = z.infer<typeof outputSchema>;
