import axios from '../config/axios';

export const getRoom = () => axios.get('/rooms');
export const getRoomById = (id) => axios.get(`/rooms/id/${id}`);
