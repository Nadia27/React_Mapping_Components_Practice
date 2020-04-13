import React from "react";
import Term from "./Term";
import Description from "./Description";

function Dictionary(props) {
  console.log(props);
  return (
    <div className="term">
      <Term emojiImage={props.emoji} emojiTitle={props.name} />
      <Description emojiDescription={props.meaning} />
    </div>
  );
}

export default Dictionary;
