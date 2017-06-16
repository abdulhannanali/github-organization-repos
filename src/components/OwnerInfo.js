import React from 'react';
import '../styles/OwnerInfo.css';

const OwnerInfo = ({ ownerInfo }) => {
  return (
    <div className="OwnerInfo">
      <a href={ownerInfo.html_url}>
        <img src={ownerInfo.avatar_url} alt={ownerInfo.login + ' avatar'} />
      </a>
    </div>
  );
};

export default OwnerInfo;