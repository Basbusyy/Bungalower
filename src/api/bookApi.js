import axios from '../config/axios';

export const createBooking = (data) => axios.post('/book', data);
export const getBookingByUserId = (id) => axios.get(`/profile/${id}`);
