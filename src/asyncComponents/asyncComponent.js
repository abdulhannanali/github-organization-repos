import React, { Component } from 'react';

/**
 * Higher Order Component with Asynchronous Importing
 * capabilities
 */
function asyncComponent(
  getComponent,
  loaderComponent = DefaultLoader,
  errorComponent = DefaultError,
) {
  return class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component, error: false };
    
    /**
     * Loads the given component here asynchronously
     */
    componentWillMount() {
      this.fetchComponent();
    }

    async fetchComponent() {
      try {
        const Component = await getComponent(); 
        this.setState({ Component });
      } catch (error) {
        this.setState({ error: true });
        console.error('Error occured while lazy loading component');
        console.error(error);
      }
    }

    render() {
      const { Component, error } = this.state;

      if (error) {
        return <errorComponent />;
      }

      if (Component === null) {
        return <loaderComponent />;
      } else {
        return <Component {...this.props} />;
      }
    }
  };
}

/**
 * Imports the module asynchronously using asyncComponent
 */
function importAsync(getModule, prop = 'default') {
  return asyncComponent(() => getModule().then(mod => mod[prop]));
}


/**
 * Default Loader and Error components for AsyncComponent 
 */

const DefaultLoader = () => {
  return null;
};

const DefaultError = () => {
  return null;
};

export { importAsync, asyncComponent };