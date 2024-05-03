import FeedbackItem from "./FeedbackItem";

const feedBackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "G",
    companyName: "GreeenWorks",
    text: "This company is awesome, although they left a lot of fur around the house afterwards.",
    daysAgo: 4,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedBackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
