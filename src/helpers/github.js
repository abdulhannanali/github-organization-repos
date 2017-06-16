import { get } from 'axios';

const API_ENDPOINT = 'https://api.github.com';

/**
 * Fetch the repositories in the organization
 * specified by the parameter `organization`
 */
export function fetchOrganizationRepos(organization, perPage = 10) {
  const orgUrl = API_ENDPOINT + '/orgs/' + organization + '/repos';
  return get(orgUrl, { per_page: perPage })
    .then(response => response && response.data);
}