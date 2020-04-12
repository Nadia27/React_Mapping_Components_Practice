import React from "react";
import Term from "./Term";
import Description from "./Description";

function Dictionary(props) {
  console.log(props);
  return (
    <dl className="dictionary">
      <div className="term">
        <Term emojiImage={props.emoji} emojiTitle={props.name} />
        <Description emojiDescription={props.meaning} />
      </div>
      {/* <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🙏
          </span>
          <span>Person With Folded Hands</span>
        </dt>
        <dd>
          Two hands pressed together. Is currently very introverted, saying a
          prayer, or hoping for enlightenment. Is also used as a “high five” or
          to say thank you.
        </dd>
      </div>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            🤣
          </span>
          <span>Rolling On The Floor, Laughing</span>
        </dt>
        <dd>
          This is funny! A smiley face, rolling on the floor, laughing. The face
          is laughing boundlessly. The emoji version of “rofl“. Stands for
          „rolling on the floor, laughing“.
        </dd>
      </div>*/}
    </dl>
  );
}

export default Dictionary;
