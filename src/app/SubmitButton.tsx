import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { FunctionComponent } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {}

const SubmitButton: FunctionComponent<SubmitButtonProps> = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      className="min-w-10 min-h-10"
      disabled={pending}
    >
      <Send className="h-5 w-5" />
      <span className="sr-only">Submit Todo</span>
    </Button>
  );
};

export default SubmitButton;
