import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    switch (option) {
      case 'Good':
        this.setState(state => ({ good: state.good + 1 }));
        break;

      case 'Neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;

      case 'Bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;

      default:
        console.log('Smth wrong with handling feedback');
        break;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
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
          total={this.countTotalFeedback()}
          options={Object.keys(this.state).map(el =>
            el.replace(el[0], el[0].toUpperCase())
          )}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          onLeaveFeedback={this.handleFeedback}
        />
      </div>
    );
  }
}

