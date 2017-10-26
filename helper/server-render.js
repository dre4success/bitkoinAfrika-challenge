import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import reducers from '../client/reducers';

const store = createStore(reducers);

export default (req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
      <html>
        <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="client-bundle.js"></script>
        </body>
      </html>
    `;
};
