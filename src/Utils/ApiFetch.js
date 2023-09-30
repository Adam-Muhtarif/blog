import axios from "axios";
const baseUrl = "http://localhost:8000/api";

// User
export async function signup(body) {
  return await axios.post(`${baseUrl}/user/signup`, body);
}

export async function login(body) {
  return await axios.post(`${baseUrl}/user/login`, body);
}

export async function getUser(userId) {
  return await axios.get(`${baseUrl}/user/${userId}`);
}

export async function updateProfile(body) {
  return await axios.put(`${baseUrl}/user/update`, body);
}

export async function changePassword(body) {
  return await axios.put(`${baseUrl}/user/change-password`, body);
}

// Blog
export async function getAllBlogs() {
  return await axios.get(`${baseUrl}/blog`);
}

export async function getBlog(titleUrl) {
  return await axios.get(`${baseUrl}/blog/${titleUrl}`);
}

export async function postBlog(body) {
  return await axios.post(`${baseUrl}/blog/create`, body);
}

export async function getUserBlogs(userId) {
  return await axios.get(`${baseUrl}/blog/${userId}/blogs`);
}

export async function deleteBlog(userId, blogId) {
  return await axios.delete(`${baseUrl}/blog/delete/${userId}/${blogId}`);
}

export async function updateBlog(body) {
  return await axios.put(`${baseUrl}/blog/update`, body);
}
