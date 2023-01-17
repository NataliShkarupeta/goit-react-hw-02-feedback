import React from "react";
import { ButtonBlock, BaseStyles } from 'components/Reviews/Reviews.styled';


export const FeedbackOptions = ({reviewGoo, reviewNeutral, reviewBad}) => {
  return (
    <ButtonBlock>
      <button type="button" onClick={reviewGoo}>
        Good
      </button>
      <button type="button" onClick={reviewNeutral}>
        Neutral
      </button>
      <button type="button" onClick={reviewBad}>
        Bad
      </button>
    </ButtonBlock>
  );
};

export const TitlFeedback =()=>{
 return  <BaseStyles>Please leave feedback</BaseStyles>;
}