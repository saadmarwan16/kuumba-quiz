import Typography from "@/components/ui/typography";
import { FunctionComponent, useMemo } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { useDrop } from "react-dnd";
import { TQuestionState } from "@/lib/types/questionState";

interface DroppableProps {
  questionState: TQuestionState;
}

const Droppable: FunctionComponent<DroppableProps> = ({ questionState }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = useMemo(() => {
    return canDrop && isOver;
  }, [canDrop, isOver]);

  return (
    <div
      // @ts-ignore
      ref={drop}
      className="flex justify-center items-center relative"
      data-testid="droppable"
    >
      <div className="w-[200px] h-[200px] border border-[rgba(15,23,42,0.20)] rounded-full"></div>
      <div className="flex w-[105.882px] h-[105.882px] justify-center items-center gap-[4.202px] absolute right-[46.218px] top-[40.756px]">
        {typeof questionState === "undefined" && (
          <>
            <div
              className={`flex-[1_0_0] self-stretch bg-slate-900 rounded-full bg-opacity-90 transition-all ${
                isActive && "scale-125 bg-opacity-100"
              }`}
            ></div>
            <div className="absolute left-1 bottom-6 text-2xl">
              <Typography
                variant="p"
                className="text-white text-center font-medium"
              >
                {isActive ? "DROP" : "DRAG"} HERE
              </Typography>
            </div>
          </>
        )}

        {questionState === "correct" && (
          <div
            className={`flex-[1_0_0] self-stretch bg-[#188351] rounded-full`}
          >
            <div className="absolute left-7 bottom-7 text-2xl">
              <IoMdCheckmark className="text-5xl text-white" />
            </div>
          </div>
        )}

        {questionState === "wrong" && (
          <div
            className={`flex-[1_0_0] self-stretch bg-[#EC4034] rounded-full`}
          >
            <div className="absolute left-7 bottom-7 text-2xl">
              <IoMdClose className="text-5xl text-white" />
            </div>
          </div>
        )}
      </div>
      <div className="w-[133.613px] h-[133.613px] absolute border border-dashed border-slate-900 right-[32.773px] top-[30.672px] rounded-full"></div>
      <div className="w-[161.765px] h-[161.765px] absolute border border-[rgba(15,23,42,0.40)] left-[18.067px] top-[18.067px] rounded-full"></div>
    </div>
  );
};

export default Droppable;
