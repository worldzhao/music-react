import React from 'react';

interface Props {
  label: string;
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

const FCCounter: React.FC<Props> = props => {
  const { label, count, onIncrement, onDecrement } = props;

  return (
    <div>
      <span>
        {label}:{count}
      </span>
      <button type="button" onClick={onIncrement}>
        {`Increment`}
      </button>
      <button type="button" onClick={onDecrement}>
        {`Decrement`}
      </button>
    </div>
  );
};

export default FCCounter;
