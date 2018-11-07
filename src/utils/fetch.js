/* global fetch */
import apiUrl from '../../app-secrets/urls';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

const createHeaderToken = token => ({
  ...DEFAULT_HEADERS,
  Authorization: `Token ${token}`
});

export const api = (body, method, route, headers = DEFAULT_HEADERS) =>
  new Promise((resolve, reject) => {
    fetch(`${apiUrl.nodeServer}${route}`, {
      headers: new global.Headers(headers),
      method,
      body: body ? JSON.stringify(body) : null
    })
      .then(res => resolve(res.json()))
      .catch(error => reject(error));
  });

// basic APIs
const postApi = (body, route, headers) => api(body, 'POST', route, headers);

const getApi = (route, headers) => api(null, 'GET', route, headers);

const putApi = (body, route, headers) => api(body, 'PUT', route, headers);

const deleteApi = (body, route, headers) => api(body, 'DELETE', route, headers);

// implementations for use cases
export const publishFile = (body, type, token) =>
  postApi(body, `/${type}/publish`, createHeaderToken(token));

export const editFile = (body, type, token) =>
  putApi(body, `/${type}/edit`, createHeaderToken(token));

export const fetchAll = type => getApi(`/${type}/all`);

export const deleteFile = (body, type, token) =>
  deleteApi(body, `/${type}/delete`, createHeaderToken(token));

export const createNewAdmin = body => postApi(body, '/auth/create');

export const loginAsAdmin = body => postApi(body, '/auth/login');
