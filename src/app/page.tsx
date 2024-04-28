"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getQuiz } from "./actions";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";

type TQuiz = {
  title: string;
  content: string | null;
};

const Home = () => {
  const [quiz, setQuiz] = useState<TQuiz | undefined>(undefined);
  const ref = useRef<HTMLFormElement | null>(null);
  const [state, action] = useFormState(getQuiz, undefined);

  useEffect(() => {
    if (state?.title && state.content) {
      ref.current?.reset();
      setQuiz(state);
    }
  }, [state]);

  return (
    <main className="bg-[#F0F0F0] p-10 h-screen">
      <div className="bg-[#FFFFFF] rounded-lg h-full max-w-4xl mx-auto px-8 py-4">
        <div className="flex flex-col gap-8 h-full">
          <ScrollArea className="rounded-lg border border-[#777474] border-opacity-20 grow px-4 py-9">
            <div className="flex gap-9 flex-col">
              {quiz?.title && <h1 className="text-3xl">{quiz.title}</h1>}
              {quiz?.content && <p className="text-lg">{quiz.content}</p>}
            </div>
          </ScrollArea>
          <form action={action} ref={ref} className="flex gap-8">
            <Input name="prompt" placeholder="Enter prompt here..." />
            <SubmitButton />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
