import React, { Component } from 'react';
import { Statistics, NameStatistics } from 'components/Statistics/Statistics';
import { Container } from './Reviews.styled';
import {
  FeedbackOptions,
  TitlFeedback,
} from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export default class Reviews extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad);
    return Math.round(positivePercentage);
  };

  leaveReviewGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  leaveReviewNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  leaveReviewBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section>
          <TitlFeedback />
          <FeedbackOptions
            reviewGoo={this.leaveReviewGood}
            reviewNeutral={this.leaveReviewNeutral}
            reviewBad={this.leaveReviewBad}
          />
        </Section>
        <Section>
          <NameStatistics />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
