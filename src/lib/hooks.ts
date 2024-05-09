import { useContext } from "react";
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider";

// creating custom hook to consume context
export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);

  // in order to use our custom context api we need to check that it is not null
  if (!context) {
    throw new Error("FeedbackItemsContext is not defined!");
  }

  return context;
}
