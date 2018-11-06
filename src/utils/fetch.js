/* global fetch */
import apiUrl from '../../app-secrets/urls';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const api = (body, method, route) =>
  new Promise((resolve, reject) => {
    fetch(`${apiUrl.nodeServer}${route}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      body: body ? JSON.stringify(body) : null
    })
      .then(res => resolve(res.json()))
      .catch(error => reject(error));
  });

// basic APIs
const postApi = (body, route) => api(body, 'POST', route);

const getApi = route => api(null, 'GET', route);

const putApi = (body, route) => api(body, 'PUT', route);

const deleteApi = (body, route) => api(body, 'DELETE', route);

// implementations for use cases
export const publishFile = (body, type) => postApi(body, `/${type}/publish`);

export const editFile = (body, type) => putApi(body, `/${type}/edit`);

export const fetchAll = type => getApi(`/${type}/all`);

export const deleteFile = (body, type) => deleteApi(body, `/${type}/delete`);

export const createNewAdmin = body => postApi(body, '/auth/create');
