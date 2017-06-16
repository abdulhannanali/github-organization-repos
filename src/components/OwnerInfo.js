import React from 'react';
import '../styles/OwnerInfo.css';

const OwnerInfo = ({ login }) => {
  const avatarUrl = `https://github.com/${login}.png`;
  const htmlUrl = `https://github.com/${login}`;

  return (
    <div className="OwnerInfo">
      <a href={htmlUrl}>
        <img src={avatarUrl} alt={login + ' avatar'} />
      </a>
    </div>
  );
};

export default OwnerInfo;