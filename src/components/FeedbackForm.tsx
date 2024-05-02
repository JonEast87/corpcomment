import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const charCount = 150 - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
