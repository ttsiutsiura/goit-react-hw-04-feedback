import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function Feedback({
  good,
  neutral,
  bad,
  total,
  options,
  positivePercentage,
  onLeaveFeedback,
}) {
  return (
    <Section title="Please, leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="Bruh, there is no feedback yet ):" />
      )}
    </Section>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  positivePercentage: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
