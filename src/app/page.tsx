"use client";

import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import Typography from "@/components/ui/typography";
import { useFormState } from "react-dom";
import { generateQuiz } from "./actions";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import { useEffect, useState } from "react";
import { TQuestionState } from "@/lib/types/questionState";

const Home = () => {
  const [question, setQuestion] = useState(0);
  const [questionState, setQuestionState] = useState<TQuestionState>(undefined);
  const [answerState, setAnswerState] = useState<TQuestionState[]>([]);
  const [state, action] = useFormState(generateQuiz, undefined);
  console.log(state)

  useEffect(() => {
    if (typeof questionState !== "undefined")
      setAnswerState((prev) => [...prev, questionState]);
  }, [questionState]);

  if (state && typeof state !== "string") {
    if (question >= state.questions.length) {
      return <Results quiz={state} results={answerState} />;
    } else {
      return (
        <Quiz
          quiz={state}
          question={question}
          questionState={questionState}
          answerState={answerState}
          setQuestion={() => setQuestion((val) => val + 1)}
          setAnswer={(val) => setQuestionState(val)}
        />
      );
    }
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
