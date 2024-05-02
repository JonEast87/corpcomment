import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />          
          <span>593</span>
        </button>
        <div>
          <p>G</p>
        </div>
        <div>
          <p>GreenWorks</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            saepe excepturi dolore ipsam distinctio, reprehenderit nulla, magni
            alias, expedita commodi laboriosam vitae voluptatem eius assumenda
            vero dolorum delectus porro consectetur?
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
