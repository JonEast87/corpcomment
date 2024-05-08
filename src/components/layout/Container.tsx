import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";
import { TFeedbackItem } from "../../lib/types";

type ContainerProps = {
  errorMessage: string;
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

export default function Container({
  errorMessage,
  isLoading,
  feedbackItems,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}
