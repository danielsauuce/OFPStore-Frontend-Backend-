import axiosInstance from './axiosInstance';

export async function registerUser(registerFormData) {
  try {
    const { fullName, email, password } = registerFormData;

    const { data } = await axiosInstance.post('/api/auth/register', {
      fullName,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(loginFormData) {
  try {
    const { email, password } = loginFormData;

    const { data } = await axiosInstance.post('/api/auth/login', {
      email,
      password,
    });

    //save token to sessionStorage
    if (data.success && data.accessToken) {
      sessionStorage.setItem('accesstoken', data.accessToken);
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function logoutUser() {
  try {
    const { data } = await axiosInstance.post('/api/auth/logout');
    sessionStorage.removeItem('accesstoken');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function checkAuth() {
  try {
    const data = await axiosInstance.get('/api/auth/check-auth');
    return data;
  } catch (error) {
    console.log(error);
  }
}
