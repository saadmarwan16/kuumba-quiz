"use client";

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { FunctionComponent, useState } from "react";
import CheckMarks from "../quiz/components/CheckMarks";
import { Output } from "@/lib/types/quiz";
import Answer from "./Answer";

interface QuizProps {
  quiz: Output;
}

const Quiz: FunctionComponent<QuizProps> = ({ quiz }) => {
  const [question, setQuestion] = useState(0);

  return (
    <main className="flex flex-col items-start gap-6 bg-white min-h-screen lg:flex-row lg:gap-0">
      <section className="flex flex-col gap-4 p-4 lg:justify-center lg:items-start lg:gap-14 lg:flex-[1_0_0] lg:self-stretch lg:px-12 lg:py-10">
        <Typography variant="h3" className="font-medium">
          {quiz.title}
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="p" affects="lead">
            Question {question + 1}
          </Typography>
          <Typography variant="p" affects="removePMargin">
            {quiz.questions[question].question}
          </Typography>
        </div>
      </section>

      <Answer
        quiz={quiz}
        question={question}
        setQuestion={() => setQuestion((val) => val + 1)}
      />

      <section className="hidden lg:flex w-16 justify-center items-center shrink-0 self-stretch [background:#FFF] p-4 flex-col gap-6">
        <CheckMarks />
      </section>
    </main>
  );
};

export default Quiz;
