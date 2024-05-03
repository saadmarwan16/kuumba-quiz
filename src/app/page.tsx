"use client";

import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import Typography from "@/components/ui/typography";
import { useFormState } from "react-dom";
import { generateQuiz } from "./actions";
import Quiz from "./components/Quiz";

const Home = () => {
  const [state, action] = useFormState(generateQuiz, undefined);

  if (state && typeof state !== "string") {
    return <Quiz quiz={state} />;
  } else {
    return (
      <main className="bg-[#F0F0F0] p-10 h-screen">
        <div className="bg-[#FFFFFF] rounded-lg h-full max-w-4xl mx-auto px-8 py-4">
          <div className="flex flex-col gap-8 h-full">
            <form action={action} className="flex gap-8">
              <Input name="content" placeholder="Enter book title here..." />
              <SubmitButton />
            </form>
            <div className="flex gap-4 justify-center items-center rounded-lg border border-[#777474] border-opacity-20 grow px-4 py-9">
              <Typography variant="h2" className="font-medium">
                This will take a while!
              </Typography>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Home;
