import OpenAI from "openai";
import { ChatOpenAI } from "@langchain/openai";
import { environment } from "../environment";

export const openai = new OpenAI({
  apiKey: environment.OPENAI_API_KEY,
});

export const model = new ChatOpenAI({
  apiKey: environment.OPENAI_API_KEY,
  temperature: 0.8,
});
