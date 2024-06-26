import Typography from "@/components/ui/typography";
import { TQuestionState } from "@/lib/types/questionState";
import { FunctionComponent } from "react";
import { useDrag } from "react-dnd";

interface DraggableProps {
  name: string;
  answer: string;
  setAnswer: (questionState: TQuestionState) => void;
  questionState: TQuestionState;
}

const Draggable: FunctionComponent<DraggableProps> = ({
  name,
  answer,
  setAnswer,
  questionState,
}) => {
  const [_, drag] = useDrag(() => ({
    type: answer,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ name: string }>();
      if (item && dropResult) {
        alert(
          `The chosen answer is: ${item.name} and the correct answer is ${dropResult.name}`
        );
        if (item.name === dropResult.name) {
          setAnswer({
            choice: item.name,
            state: "correct",
          });
        } else {
          setAnswer({
            choice: item.name,
            state: "wrong",
          });
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      //   @ts-ignore
      ref={!questionState ? drag : undefined}
      className={`flex justify-center items-center gap-[6.192px] bg-white px-3 lg:px-4 py-2 lg:py-3 rounded-[7.43px] ${
        !questionState ? "cursor-move" : "cursor-not-allowed"
      } ${!questionState ? "opacity-100" : "opacity-30"}`}
      data-testid="draggable"
    >
      <Typography variant="p">{name}</Typography>
    </div>
  );
};

export default Draggable;
