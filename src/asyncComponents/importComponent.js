import React from 'react';
import { asyncComponent } from './asyncComponent';

const Loader = () => {
  return (
    <div className="Loader">
      <h1>View currently loading. Please wait...</h1>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div className="Error">
      <h1>Error occured while loading</h1>
    </div>
  );
};

const importComponent = (getComponent) => {
  const getDefault = () => (getComponent().then(component => component.default));
  return asyncComponent(getDefault, Loader, ErrorComponent);
};


export default importComponent;
