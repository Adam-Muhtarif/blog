import axios from "axios";
const baseUrl = "http://localhost:8000/api";

export async function getAllBlogs() {
  return await axios.get(`${baseUrl}/blog`);
}

export async function getBlog(titleUrl) {
  return await axios.get(`${baseUrl}/blog/${titleUrl}`);
}

export async function signup(body) {
  return await axios.post(`${baseUrl}/user/signup`, body);
}

export async function login(body) {
  return await axios.post(`${baseUrl}/user/login`, body);
}
