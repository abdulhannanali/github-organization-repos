import React from 'react';
import RepoCard from './RepoCard';

const RepoCards = ({ repos = [] }) => {
  const repoCards = repos.map(repo => {
    return (
      <RepoCard repo={repo} key={repo.id} />
    );
  });

  return (
    <div className="RepoCards">
      {repoCards}
    </div>
  );
};

export default RepoCards;