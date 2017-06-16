/**
 * Creates a root element in the DOM
 * This is used as a root by the React Components
 */
function createRoot(document, id = 'root') {
  const rootElem = document.createElement('div');
  rootElem.id = id;
  return rootElem;
}

export default createRoot;