import React from "react";
import { ButtonBlock, BaseStyles } from 'components/Reviews/Reviews.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <ButtonBlock>
      {options.map(item => {
       return (
         <button key={item} onClick={onLeaveFeedback} name={item}>
           {item}{' '}
         </button>
       );
      })}
    </ButtonBlock>
  );
};

export const TitlFeedback =()=>{
 return  <BaseStyles>Please leave feedback</BaseStyles>;
}

