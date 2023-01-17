import { Position, PositionBlock } from './Statistics.slyled';
import { Massage } from 'components/Default/DefaultMassage';
import {Name} from './Statistics.slyled'

export const Statistics = props => {
  const { good, neutral, bad, positivePercentage, total } = props;
  return (
    <>
      {total !== 0 ? (
        <PositionBlock>
          <Position>Good: {good}</Position>
          <Position>Neutral: {neutral}</Position>
          <Position>Bad: {bad}</Position>
          <Position>Total: {total}</Position>
          <Position>Positive feedback:{positivePercentage}%</Position>
        </PositionBlock>
      ) : (
        <Massage />
      )}
    </>
  );
};

export const NameStatistics =()=>{
  return <Name>Statistics</Name>;
}