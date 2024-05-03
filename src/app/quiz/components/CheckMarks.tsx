import { FunctionComponent } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

interface CheckMarksProps {}

const CheckMarks: FunctionComponent<CheckMarksProps> = () => {
  return (
    <>
      <IoMdCheckmark className="text-3xl text-[#188351]" />
      <IoMdCheckmark className="text-3xl text-[#188351]" />
      <IoMdClose className="text-3xl text-[#EC4034]" />
      <IoMdCheckmark className="text-3xl text-[#188351]" />
      <IoMdCheckmark className="text-3xl text-[#188351]" />
    </>
  );
};

export default CheckMarks;
