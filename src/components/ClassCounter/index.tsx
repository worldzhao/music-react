import React, { Component } from 'react';

interface Props {
  label: string;
}

interface State {
  count: number;
}

class ClassCounter extends Component<Props, State> {
  readonly state: State = {
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
    const { increment, decrement } = this;
    const { label } = this.props;
    const { count } = this.state;
    return (
      <div>
        <span>
          {label}: {count}
        </span>
        <button type="button" onClick={increment}>{`Increment`}</button>
        <button type="button" onClick={decrement}>{`Decrement`}</button>
      </div>
    );
  }
}

export default ClassCounter;
