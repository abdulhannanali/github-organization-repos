import { get } from 'axios';

const API_ENDPOINT = 'https://api.github.com';

/**
 * Fetch the repositories in the organization
 * specified by the parameter `organization`
 */
export function fetchOrganizationRepos(organization, perPage = 10) {
  const orgUrl = API_ENDPOINT + '/orgs/' + organization + '/repos';
  return get(orgUrl, { per_page: perPage }).then(response => response && response.data);
}

/**
 * Fetch the information about a repo by it's fullName
 */
export function fetchRepoInfo(organization, repo, perPage = 10) {
  const repoUrl = API_ENDPOINT + '/repos/' + organization + '/' + repo;
  return get(repoUrl, { per_page: perPage }).then(response => response && response.data);
}