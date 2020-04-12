import React from "react";

function Term(props) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label={props.emojiTitle}>
        {props.emojiImage}
      </span>
      <span>{props.emojiTitle}</span>
    </dt>
  );
}

export default Term;
