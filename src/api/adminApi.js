import axios from '../config/axios';

export const createRoom = (input) => axios.post('/admin/room/create', input);
export const getAllBooking = () => axios.get('/admin/getAllBooking');
export const getAllRoom = () => axios.get('/admin/getAllRoom');
export const deleteBooking = (bookingId) =>
  axios.delete(`/admin/deleteBooking/${bookingId}`);
export const updateRoom = (input, id) =>
  axios.patch(`/admin/edit/${id}`, input);
