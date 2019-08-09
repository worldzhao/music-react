import React from 'react';
import { Subtract } from 'utility-types';

// 需要注入的props
export interface InjectedCounterProps {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface MakeCounterState {
  count: number;
}

function makeCounter<P extends InjectedCounterProps>(Component: React.ComponentType<P>) {
  class Hoc extends React.Component<Subtract<P, InjectedCounterProps>, MakeCounterState> {
    static displayName = `makeCounter(${Component.name})`;

    state: MakeCounterState = {
      count: 0
    };

    increment = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };

    decrement = () => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    };

    render() {
      const { count } = this.state;
      return (
        <Component
          {...(this.props as P)}
          count={count}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      );
    }
  }
  return Hoc;
}

export default makeCounter;
