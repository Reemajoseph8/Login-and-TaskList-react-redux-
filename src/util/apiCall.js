import axios from "axios";
import { API_URL } from "../constants/constants";

export async function postData(path, postData) {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const url = `${API_URL}/${path}`;
    return await axios.post(url, postData, config);
  } else {
    const url = `${API_URL}/${path}`;
    return await axios.post(url, postData);
  }
}

export async function getData(path) {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const url = `${API_URL}/${path}`;
    return await axios.get(url, config);
  } else {
    const url = `${API_URL}/${path}`;
    return await axios.get(url);
  }
}

export async function putData(path, postData) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const url = `${API_URL}/${path}`;
  return await axios.put(url, postData, config);
}

export async function deleteData(path, postData) {
  const url = `${API_URL}/${path}`;
  return await axios({
    url: url,
    method: "DELETE",
    data: postData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}
