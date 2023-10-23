import axios from "axios";

const api = "https://pesu-vl-backend.vercel.app/api";

export const getCount = async () => {
    return await axios.get(`${api}/get-count`);
};

export const updateCount = async (count) => {
    return await axios.post(`${api}/update-count`, count);
};
