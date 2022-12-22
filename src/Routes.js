/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import BasicLayout from 'src/layouts/BasicLayout';
import AuthGuard from 'src/components/AuthGuard';
import GuestGuard from 'src/components/GuestGuard';

const routesConfig = [
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/pages/Error404View'))
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: BasicLayout,
    routes: [
      {
        exact: true,
        path: '/app/users',
        component: lazy(() => import('src/views/users'))
      }
    ]
  },
  {
    path: '*',
    routes: [
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;
        const Layout = route.layout || Fragment;
        const Guard = route.guard || Fragment;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
