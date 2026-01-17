import axiosInstance from './axiosInstance';

export async function registerUser(formData) {
  const formData = {
    fullname,
    email,
    password,
    role: 'user',
  };
  const data = await axiosInstance.post('/auth/register', formData);
  console.log(data);

  return data;
}

export async function loginUser(formData) {
  const formData = { email, password, role: 'user' };
  const data = await axiosInstance.get('/auth/login', formData);
  console.log(data);

  return data;
}

export async function logoutUser() {}
