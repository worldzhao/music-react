import React, { Component } from 'react';
import makeCounter, { InjectedCounterProps } from '../../hoc/makeCounter';

interface Props extends InjectedCounterProps {
  label: string;
}

class HocCounter extends Component<Props> {
  render() {
    const { label, count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <span>
          {label}: {count}
        </span>
        <button type="button" onClick={onIncrement}>{`Increment`}</button>
        <button type="button" onClick={onDecrement}>{`Decrement`}</button>
      </div>
    );
  }
}

export default makeCounter(HocCounter);
