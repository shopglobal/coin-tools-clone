import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SuspenseWithChunkError from 'components/SuspenseWithChunkError';
import { routes } from './routes';

const renderRouters = (): JSX.Element[] => {
  return routes.map((route) => <Route {...route} />);
};

const MainRouter = () => {
  return (
    <BrowserRouter>
      <SuspenseWithChunkError fallback={<p>Loading...</p>}>
        <Switch>{renderRouters()}</Switch>
      </SuspenseWithChunkError>
    </BrowserRouter>
  );
};

export default MainRouter;
