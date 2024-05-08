import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  errorMessage: string;
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
};

export default function FeedbackList({
  errorMessage,
  isLoading,
  feedbackItems,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem["id"]} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
