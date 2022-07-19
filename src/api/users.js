import httpClient from '../config/http.client';
import {
    USERS_LIST_ENDPOINT,
    USER_CREATE_ENDPOINT,
    USER_BY_ID_ENDPOINT
} from '../constants/api.endpoints';

const axiosInstance = httpClient();

export const requestUsersInfo = async (page) => {
    try {
        const response = await axiosInstance.get(USERS_LIST_ENDPOINT(page));
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUserRequest = async (userId) => {
    try {
        const response = await axiosInstance.delete(
            USER_BY_ID_ENDPOINT(userId)
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUserRequest = async (values) => {
    try {
        const response = await axiosInstance.post(USER_CREATE_ENDPOINT, values);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const editUserRequest = async (values, userId) => {
    try {
        const response = await axiosInstance.put(
            USER_BY_ID_ENDPOINT(userId),
            values
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
