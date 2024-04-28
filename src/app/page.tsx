"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fragment } from "react";
import { useChat } from "ai/react";
import SubmitButton from "./SubmitButton";

type TQuiz = {
  title: string;
  content: string | null;
};

const Home = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });

  return (
    <main className="bg-[#F0F0F0] p-10 h-screen">
      <div className="bg-[#FFFFFF] rounded-lg h-full max-w-4xl mx-auto px-8 py-4">
        <div className="flex flex-col gap-8 h-full">
          <ScrollArea className="rounded-lg border border-[#777474] border-opacity-20 grow px-4 py-9">
            <div className="flex gap-4 flex-col">
              {messages.map((message, i) => {
                return (
                  <Fragment key={i}>
                    {message.role === "user" ? (
                      <div className="flex justify-end">
                        <p className="px-4 py-2 w-2/3 bg-[#D9FDD3] rounded-lg">
                          {message.content}
                        </p>
                      </div>
                    ) : (
                      <p className="px-4 py-2 w-2/3 bg-[#F0F0F0] rounded-lg">
                        {message.content}
                      </p>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </ScrollArea>
          <form onSubmit={handleSubmit} className="flex gap-8">
            <Input
              name="prompt"
              value={input}
              placeholder="Enter prompt here..."
              onChange={handleInputChange}
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
