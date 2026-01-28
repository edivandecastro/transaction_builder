import { baseURL } from './api_service';
import axios from 'axios';

const API_URL = baseURL.gateway_service;

export const getTransactionFields = async () => {
  const response = await axios.get(`${API_URL}/transaction_fields`);
  return response.data;
};

export const createTransactionField = async (payload) => {
  const response = await axios.post(`${API_URL}/transaction_fields`, payload);
  return response.data;
};

export const updateTransactionField = async (id, payload) => {
  const response = await axios.put(`${API_URL}/transaction_fields/${id}`, payload);
  return response.data;
};

export const deleteTransactionField = async (id) => {
  const response = await axios.delete(`${API_URL}/transaction_fields/${id}`);
  return response.data;
};

export const getTransactionField = async (id) => {
  const response = await axios.get(`${API_URL}/transaction_fields/${id}`);
  return response.data;
};
