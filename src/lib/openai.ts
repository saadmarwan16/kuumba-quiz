import OpenAI from "openai";
import { environment } from "../environment";

export const openai = new OpenAI({
  apiKey: environment.OPENAI_API_KEY,
});
