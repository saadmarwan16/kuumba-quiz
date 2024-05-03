import { FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import CheckMarks from "../quiz/components/CheckMarks";
import { Output } from "@/lib/types/quiz";
import Draggable from "./Draggable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Droppable from "../components/Droppable";
import { TQuestionState } from "@/lib/types/questionState";

interface AnswerProps {
  quiz: Output;
  question: number;
  setQuestion: () => void;
}

const Answer: FunctionComponent<AnswerProps> = ({
  question,
  quiz,
  setQuestion,
}) => {
  const [questionState, setQuestionState] = useState<TQuestionState>(undefined);

  return (
    <section className="flex flex-col items-center gap-9 flex-[1_0_0] self-stretch bg-[#F2F2F2] px-4 py-5 lg:justify-center lg:gap-20 lg:px-12 lg:py-10">
      <DndProvider backend={HTML5Backend}>
        <Droppable questionState={questionState} />
        <div className="flex items-center gap-[1.5rem_1rem] flex-wrap justify-center">
          {quiz.questions[question].options.map((option, i) => (
            <Draggable
              key={i}
              name={option}
              answer={quiz.questions[question].answer}
              setAnswer={(val) => setQuestionState(val)}
              questionState={questionState}
            />
          ))}
        </div>
      </DndProvider>
      <div className="flex lg:hidden justify-center items-start gap-3 flex-wrap">
        <CheckMarks />
      </div>
      <Button
        className="max-w-[350px] min-w-[200px] w-full"
        disabled={!questionState}
        onClick={() => {
          setQuestion();
          setQuestionState(undefined);
        }}
      >
        Next
      </Button>
    </section>
  );
};

export default Answer;
