import axiosInstance from './axiosInstance';

export async function registerUser(fullname, email, password) {
  const data = await axiosInstance.post('/auth/register', {
    fullname,
    email,
    password,
    role: 'user',
  });
  console.log(data);

  return data;
}

export async function loginUser(email, password) {
  const data = await axiosInstance.get('/auth/login', { email, password, role: 'user' });
  console.log(data);

  return data;
}

export async function logoutUser() {}
