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
    const { good, neutral, bad } = this.state;
    const total = good +neutral +bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage =
      (good * 100) /
      (good + neutral + bad);
    return Math.round(positivePercentage);
  };

  leaveReview = event => {
    const key = event.target.name;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    return (
      <Container>
        <Section>
          <TitlFeedback />
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveReview}
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
