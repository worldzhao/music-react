import '@/common/styles/anim.scss';
import Layout from '@/layouts';
import React, { Attributes } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routerConfig from './routerConfig';

// 路由转场动画 https://juejin.im/post/5cb1e4275188251ace1feee9

type Props = RouteComponentProps & {};
type location = RouteComponentProps['location'];

const DEFAULT_SCENE_CONFIG: { [key: string]: string } = {
  enter: 'from-right',
  exit: 'to-right'
};

const getSceneConfig = (location: location) => {
  const matchedRoute = routerConfig.find(config =>
    new RegExp(`^${config.path}$`).test(location.pathname)
  );
  return (matchedRoute && matchedRoute.animConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation: Props['location'];

function Routes(props: Props) {
  const { location, history } = props;

  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if (history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;

  return (
    <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: classNames })}>
      <CSSTransition timeout={500} key={location.pathname}>
        <Layout {...props}>
          <Switch location={location}>
            {routerConfig.map(r => (
              <Route {...r} key={r.path as Attributes['key']} />
            ))}
          </Switch>
        </Layout>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Routes);
