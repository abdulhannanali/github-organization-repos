import React from 'react';
import DevIcon from './DevIcon';
import { Link } from 'react-router-dom';

import '../styles/RepoCard.css';

const RepoCard = ({ repo }) => {
  return (
    <div className="RepoCard thumbnail">
      <div className="row">
        <div className="col-sm-10">
          <h2>
            <Link to={'repo/' + repo.full_name}>{repo.name}</Link>
          </h2>
          <span className="RepoCard--website">
            <a href={repo.homepage}>
              <span className="glyphicon glyphicon-globe"></span>
            </a>
          </span>
          <h4>{repo.description}</h4>
        </div>
        {
          repo.language &&
          (
            <div className="col-sm-2">
              <DevIcon language={repo.language} colored={true} wikiLink={true} />
            </div>
          )
        }
      </div>
      <div className="RepoCard--footer">
        <div className="row">
          <div className="col-sm-12">
            <span className="RepoCard--stars">
              <span className="glyphicon glyphicon-star"></span> {repo.stars}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;