import { Feedback } from 'components/Feedback/Feedback';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(good + 1);
        break;

      case 'Neutral':
        setNeutral(neutral + 1);
        break;

      case 'Bad':
        setBad(bad + 1);
        break;

      default:
        console.log('Smth is wrong with handling feedback');
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        options={['Good', 'Neutral', 'Bad']}
        positivePercentage={countPositiveFeedbackPercentage()}
        onLeaveFeedback={handleFeedback}
      />
    </div>
  );
}
