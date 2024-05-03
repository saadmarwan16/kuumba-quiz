"use client";

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { FunctionComponent, useState } from "react";
import CheckMarks from "./components/CheckMarks";
import Draggable from "../components/Draggable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Droppable from "../components/Droppable";

interface QuizPageProps {}

const QuizPage: FunctionComponent<QuizPageProps> = () => {
  const [questionState, setQuestionState] = useState<
    "correct" | "wrong" | undefined
  >(undefined);

  return (
    <main className="flex flex-col items-start gap-6 bg-white min-h-screen lg:flex-row lg:gap-0">
      <section className="flex flex-col gap-4 p-4 lg:justify-center lg:items-start lg:gap-14 lg:flex-[1_0_0] lg:self-stretch lg:px-12 lg:py-10">
        <Typography variant="h3" className="font-medium">
          The Richest Man in Babylon
        </Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="p" affects="lead">
            Question 5
          </Typography>
          <Typography variant="p" affects="removePMargin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ratione dolorum quaerat amet omnis, incidunt illum a tempora,
            repudiandae harum, similique sed ullam earum. Debitis quod iste
            tenetur numquam consequatur!
          </Typography>
        </div>
      </section>

      <section className="flex flex-col items-center gap-9 flex-[1_0_0] self-stretch bg-[#F2F2F2] px-4 py-5 lg:justify-center lg:gap-20 lg:px-12 lg:py-10">
        <DndProvider backend={HTML5Backend}>
          <Droppable questionState={undefined} />
          {/* <div className="flex items-center gap-[1.5rem_1rem] flex-wrap justify-center">
            <Draggable name="Benjamin Franklin" />
            <Draggable name="Barack Obama" />
            <Draggable name="George Washington" />
            <Draggable name="Michael Jackson" />
          </div> */}
        </DndProvider>
        <div className="flex justify-center items-start gap-3 flex-wrap">
          <CheckMarks />
        </div>
        <Button className="max-w-[350px] min-w-[200px] w-full">Next</Button>
      </section>

      <section className="hidden lg:flex w-16 justify-center items-center shrink-0 self-stretch [background:#FFF] p-4 flex-col gap-6">
        <CheckMarks />
      </section>
    </main>
  );
};

export default QuizPage;
