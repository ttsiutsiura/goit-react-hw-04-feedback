import PropTypes from 'prop-types';
import { Button, ButtonList } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        );
      })}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
