import React, { Attributes } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@/layouts';
import { routerConfig } from './router';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routerConfig.map(props => (
            <Route {...props} key={props.path as Attributes['key']} />
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
