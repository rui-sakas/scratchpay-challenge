export const USERS_LIST_ENDPOINT = (page) =>
    `/api/users?page=${page}&per_page=3`;
export const USER_BY_ID_ENDPOINT = (userId) => `/api/users/${userId}`;
export const USER_CREATE_ENDPOINT = '/api/users';
