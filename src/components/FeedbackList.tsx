import { useEffect, useState } from "react";

import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      // make request to api for data
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        // receeived the data in json format
        return response.json();
        // converting that data to javascript to be used in realtime
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem["id"]} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
