import Typography from "@/components/ui/typography";
import { FunctionComponent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TQuestionState } from "@/lib/types/questionState";
import { Output } from "@/lib/types/quiz";

interface ResultsProps {
  quiz: Output;
  results: TQuestionState[];
}

const Results: FunctionComponent<ResultsProps> = ({ quiz, results }) => {
  return (
    <main className="flex flex-col items-center gap-9 bg-[#F2F2F2] px-8 py-9 min-h-screen">
      <Typography variant="h2">{quiz.title}</Typography>

      <Accordion
        type="single"
        collapsible
        className="w-full flex max-w-[900px] flex-col items-start bg-white p-6 rounded-lg shadow-lg"
      >
        {quiz.questions.map(({ question, options, answer }, i) => (
          <AccordionItem key={i} value={i.toString()} className="w-full">
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                {options.map((option, idx) => (
                  <Typography
                    key={idx}
                    variant="p"
                    affects="small"
                    className={`!mt-0 ${
                      option === answer ? "text-[#188351]" : "text-[#EC4034]"
                    }`}
                  >
                    {option}
                  </Typography>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <Typography variant="p" className="font-normal">
                  You chose:
                </Typography>
                <Typography
                  variant="p"
                  affects="removePMargin"
                  className={`font-medium ${
                    results[i]?.state === "correct"
                      ? "text-[#188351]"
                      : "text-[#EC4034]"
                  }`}
                >
                  {results[i]?.choice}
                </Typography>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default Results;
