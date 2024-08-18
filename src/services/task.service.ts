import { axiosInstance } from '@/common';

const createTask = (data: any) => {
    return axiosInstance.post('/todo', data);
};
const getTask = (params: any) => {
    return axiosInstance.get('/todo', { params });
};
const editTask = (id: string, params: any) => {
    return axiosInstance.put('/todo/' + id, params );
};
const deleteTask = (id: string) => {
    return axiosInstance.delete('/todo/' + id);
};

export { createTask, getTask, editTask, deleteTask };
