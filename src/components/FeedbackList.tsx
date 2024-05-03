import { useEffect, useState } from "react";

import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(
      // make request to api for data
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      // receeived the data in json format
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        // converting that data to javascript to be used in realtime
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch(() => {
        // network error, not 2xx response, or JSON parsing error
        setErrorMessage("Something went wrong");
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem["id"]} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
