import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'dora-ui';
import {
  RootState,
  Dispatch,
  RouteComponentProps,
  GetUserParams,
  PostUserParams,
  DemoModelState
} from '@/typings';
import styles from './index.module.scss';

const mapState = (store: RootState) => ({
  demo: store.demo as DemoModelState,
  demoModelLoading: store.loading.models.demo, // models/demo 中只有要异步请求正在进行 该值便为true 作用域为model
  demoEffectsLoading: store.loading.effects.demo // 该值为object，键名为effects键名 键值为loading状态
});

const mapDispatch = (dispatch: Dispatch) => ({
  getUser: (params: GetUserParams) => {
    dispatch.demo.getUserAsync(params);
  },
  postUser: (data: PostUserParams) => {
    dispatch.demo.postUserAsync(data);
  }
});

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  RouteComponentProps<{}> & {};

class TSDemoWithRematch extends Component<Props, {}> {
  async componentDidMount() {
    this.props.getUser({ id: '1' });
    this.props.postUser({ username: 'admin', password: '888888' });
  }

  render() {
    const { demo, demoModelLoading, demoEffectsLoading } = this.props;
    const { getUserAsync: getLoading, postUserAsync: postLoading } = demoEffectsLoading;
    const { userDataGet, userDataPost } = demo;
    if (userDataGet) {
      console.log(userDataGet.id);
    }
    console.log('本页面全局接口 model loading', demoModelLoading);
    console.log('接口 1 effect loading', getLoading);
    console.log('接口 2 effect loading', postLoading);

    return (
      <Spin spinning={demoModelLoading} fullScreen>
        <div className={styles.demoWrapper}>
          <div className={styles.demo}>
            <h2 className={styles.subtitle}>welcome to Iris</h2>
          </div>
          <p className={styles.content}>get:{JSON.stringify(userDataGet)}</p>
          <p className={styles.content}>post:{JSON.stringify(userDataPost)}</p>
        </div>
      </Spin>
    );
  }
}

export default connect(
  mapState as any,
  mapDispatch as any
)(TSDemoWithRematch);
