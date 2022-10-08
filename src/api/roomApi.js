import axios from '../config/axios';

export const bookingRoom = (roomId) => axios.post(`/post/${roomId}`);
