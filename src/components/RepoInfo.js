/**
 * RepoInfo
 * Component to display the information about the given repo
 */
import React, { Component } from 'react';
import { fetchRepoInfo } from '../helpers/github';

class RepoInfo extends Component {
  state = { loaded: false, error: false, repoInfo: undefined };

  /**
   * Lifecycle hook to load information about the repo
   */
  componentDidMount() {
    const { organization, repo } = this.props.match.params;
    fetchRepoInfo(organization, repo)
      .then(repo => {
        if (repo) {
          this.setState({ repoInfo: repo, loaded: true, error: false });
        }
      })
      .catch(error => {
        this.setState({ repoInfo: undefined, error: true, loaded: true });
      });
  }

  render() {
    const { loaded, error, repoInfo } = this.state;

    if (!loaded) {
      return (
        <h2>Loading the information about repository currently</h2>
      );
    } else if (error) {
      return (
        <h2>Error occured</h2>
      );
    }

    return (
      <div className="RepoInfo">
        <h1>Information about the given Repository</h1>
        <h2><a href={repoInfo.html_url}>{ repoInfo.full_name }</a></h2>
        <h3>{ repoInfo.description }</h3>
        <h3>Language {repoInfo.language}</h3>
        <h3>Stars: {repoInfo.stargazers_count}</h3>
        <h3>Watchers: {repoInfo.watchers_count}</h3>
        <h3>Forks: {repoInfo.forks_count}</h3>
        <h3>Open Issues: {repoInfo.open_issues}</h3>
        <div className="RepoInfo-apiResponse">
          <h4>Raw API Response</h4>
          <code name="apiResponse" disabled cols="30" rows="10">
            {JSON.stringify(repoInfo, null, 4)}
          </code>
        </div>
      </div>
    );
  }
}

export default RepoInfo;