import React from 'react';
import classnames from 'classnames';

const DevIcon = ({ language, colored, wikiLink }) => {
  if (!language) {
    throw new Error('`language` option is required for `DevIcon` component');
  }
  
  const devIconClasses = getDevIcon(language, colored);
  let iTag = (<i className={devIconClasses}></i>);
  let devIconTag = iTag;
  
  if (wikiLink) {
    const wikiHref = `https://rosettacode.org/wiki/${language}`;
    devIconTag = (
      <a href={wikiHref} style={{ textDecoration: 'none' }}>{iTag}</a>
    );
  }

  return (
    <div className="DevIcon">
      {devIconTag}
    </div>
  );
};

/**
 * Gets the DevIcon for the given text
 */
function getDevIcon(language, colored = false) {
  if (!language) {
    return '';
  }
  
  language = language.toLowerCase();
  
  /** Some languages that don't map well by default
   *  TODO: This should be ideally replaced with a better mechanism
   *  to better map languages to their correct representation.
   */
  switch (language) {
    case 'c#':
      language = 'csharp';
      break;
    case 'c++':
      language = 'cplusplus';
      break;
    default:
      break;
  }
  
  return (
    classnames('devicon-' + language + '-plain', {
      colored,
    })
  );
}


export default DevIcon;