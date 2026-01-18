import { useContext, createContext, useState, useEffect } from 'react';
import { registerUser, loginUser, logoutUser, checkAuth } from '../services/authService';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isloading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const data = await checkAuth();
        if (data.success) {
          setUser(data.user);
        }
      } catch (err) {
        console.log(err);

        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, []);

  const signUp = async (formData) => {
    try {
      if (isloading) {
        return setIsLoading(true);
      }
      const data = await loginUser(formData);
      console.log(data);
      if (data.success) {
        setUser(data.user);
        toast.success('Welcome back!');
        return true;
      }
      setError(true);
    } catch (err) {
      toast.error(err.message || 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
      setError(false);
    }
  };

  const signin = async (formData) => {
    try {
      if (isloading) {
        return setIsLoading(true);
      }
      const data = await registerUser(formData);
      console.log(data);
      if (data.success) {
        setUser(data.user);
        toast.success('Registered Succesfully!');
        return true;
      }
      return false;
    } catch (err) {
      toast.error(err.message || 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signout = async () => {
    try {
      await logoutUser();
      setUser(null);
      toast.success('Logged out');
    } catch (err) {
      toast.error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ signin, signout, signUp }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
