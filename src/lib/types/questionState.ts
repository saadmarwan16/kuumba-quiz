export type TQuestionState =
  | {
      state: "correct" | "wrong";
      choice: string;
    }
  | undefined;
