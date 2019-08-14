import Layout from '@/layouts';
import React, { Attributes, Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '@/components/Spin/spinner';
import routerConfig from './routerConfig';

// 路由转场动画 https://juejin.im/post/5cb1e4275188251ace1feee9

type Props = RouteComponentProps & {};
type location = RouteComponentProps['location'];

const DEFAULT_SCENE_CONFIG: { [key: string]: string } = {
  enter: 'from-right',
  exit: 'to-right'
};

const routes = routerConfig.map(r => r.path);

const getAnimConfig = (location: location) => {
  const matchedRoute = routerConfig.find(config =>
    new RegExp(`^${config.path}$`).test(location.pathname)
  );
  return (matchedRoute && matchedRoute.animConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation: Props['location'];

function Routes(props: Props) {
  const { location, history } = props;

  // 转场动画应该都是采用当前页面的animConfig，所以：
  // push操作时，用新location匹配的路由animConfig
  // pop操作时，用旧location匹配的路由animConfig
  let classNames = '';
  if (history.action === 'PUSH') {
    if (routes.indexOf(location.pathname) < routes.indexOf(oldLocation.pathname)) {
      classNames = 'back-' + getAnimConfig(oldLocation).exit;
    } else {
      classNames = 'forward-' + getAnimConfig(location).enter;
    }
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getAnimConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;

  if (location.pathname === '/') {
    return <Redirect to="/recommend" />;
  }

  return (
    <Layout {...props}>
      <TransitionGroup
        className="router-wrapper"
        childFactory={child => React.cloneElement(child, { classNames: classNames })}
      >
        <CSSTransition timeout={500} key={location.pathname}>
          <Suspense fallback={<Spinner />}>
            <Switch location={location}>
              {routerConfig.map(r => (
                <Route {...r} key={r.path as Attributes['key']} />
              ))}
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}

export default withRouter(Routes);
