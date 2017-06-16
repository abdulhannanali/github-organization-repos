import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <a href="./">
            <h1 className="Header">Repos List</h1>
          </a>
        </div>
      </div>
    );
  }
}