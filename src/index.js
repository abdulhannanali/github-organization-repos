import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import createRoot from './helpers/createRoot';

const root = createRoot(document);
document.body.appendChild(root);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);