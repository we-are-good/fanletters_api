import axios from "axios";

export const lettersClient = axios.create({
  baseURL: "http://localhost:5001/fanLetters_api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLetters = async () => {
  const response = await lettersClient.get(`/home`);
  return response.data;
};

export const getSingleLetter = async (id) => {
  const { data } = await lettersClient.get(`/${id}`);
  return data;
};

export const createLetter = async (letter) => {
  await lettersClient.post("/", letter);
  return letter;
};

export const deleteLetter = async (id) => {
  await lettersClient.delete(`/${id}`);
  return id;
};

export const changeContentLetter = async (id, editingText, letter) => {
  await lettersClient.patch(`/${id}`, letter);
  return id;
};
