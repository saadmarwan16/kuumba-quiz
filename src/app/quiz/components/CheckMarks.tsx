import { TQuestionState } from "@/lib/types/questionState";
import { FunctionComponent } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

interface CheckMarksProps {
  answerState: TQuestionState[];
}

const CheckMarks: FunctionComponent<CheckMarksProps> = ({ answerState }) => {
  return (
    <>
      {answerState.map((val, i) => {
        if (val?.state === "correct")
          return <IoMdCheckmark key={i} className="text-3xl text-[#188351]" />;
        else if (val?.state === "wrong")
          return <IoMdClose key={i} className="text-3xl text-[#EC4034]" />;
        else return null;
      })}
    </>
  );
};

export default CheckMarks;
