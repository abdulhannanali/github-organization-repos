import React, { Component } from 'react';
import Input from './Input';
import RepoCards from './RepoCards';
import OwnerInfo from './OwnerInfo';
import Loader from './Loader';

import { fetchOrganizationRepos } from '../helpers/github';

class App extends Component {
  state = {
    searchTerm: '',
    loaded: false,
    loading: false,
    error: false,
    login: '',
    reposList: [],
  }

  fetchRepoList = (searchTerm) => {
    this.setState({ 
      loading: true, login: '', loaded: false, reposList: [], error: false, 
    });
    return fetchOrganizationRepos(searchTerm, 100)
      .then(repos => {
        if (!repos) { return; }
        const parsedRepos = repos.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            full_name: repo.full_name,
            homepage: repo.homepage,
            description: repo.description,
            stars: repo.stargazers_count,
            language: repo.language,
          };
        });

        this.setState({ 
          loaded: true, loading: false, reposList: parsedRepos, login: searchTerm, error: false, 
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  }

  /**
   * Called on the `onChange` event of `SearchInput`
   */
  onSearchChange = (event) => {
    const trimmedValue = event.target.value.trim();
    this.setState({ searchTerm: trimmedValue });
  }

  /**
   * Called on the `onBlur` event of `SearchInput`
   */
  onSearchBlur = (event) => {
    const { searchTerm, login } = this.state;
    const { fetchRepoList } = this;

    if (searchTerm && searchTerm !== login) {
      fetchRepoList(searchTerm);
    }
  }

  render() {
    const { searchTerm, reposList, login, loaded, loading } = this.state;
    const { onSearchChange, onSearchBlur } = this;


    const SearchInput = (
      <Input 
        placeholder="facebook"
        name="organizationName" 
        value={searchTerm}
        onChange={onSearchChange}
        onBlur={onSearchBlur}
      />
    );

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-offset-3 col-md-6"> 
              <h2 style={{ textAlign: 'center' }}>Organization name</h2>
              {SearchInput}
            </div>
          </div>
          {/* A great place for the RepoCards to go */}
          <div className="row">
            <div className="col-sm-12 col-md-offset-2 col-md-8">
              { loading && <Loader />}
              { login && <OwnerInfo login={login} />}
              { loaded && <RepoCards repos={reposList} /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;