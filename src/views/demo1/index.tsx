import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { FCCounter, ClassCounter, HocCounter } from '@/components';

interface State {
  count: number;
}

/**
 * RouteComponentProps
 * 路由组件会被 react-router 注入一些Props，如常见的 history、match 等（非页面组件使用withRouter同理）
 * 总而言之，使用的任何Props，都需要查找来源类型定义
 * 譬如第三方类库的高阶组件或其他组件偷偷注入的Props
 */
type Props = RouteComponentProps<{}> & {};

class TSDemoWithReact extends Component<Props, State> {
  state: State = {
    count: 0
  };

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <Fragment>
        <FCCounter
          label="Function 计数器"
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          count={this.state.count}
        />
        <ClassCounter label="Class 计数器" />
        <HocCounter label="HOC 计数器" />
      </Fragment>
    );
  }
}

export default TSDemoWithReact;
