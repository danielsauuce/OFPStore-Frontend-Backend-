import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-foreground px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary mb-1">
            Olayinka Furniture Palace
          </h1>
          <p className="text-muted-foreground">Welcome to luxury furniture shopping</p>
        </div>

        <div className="bg-foreground border border-border rounded-lg shadow-lg p-8">
          <div className="flex items-center w-full rounded-lg bg-muted mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 rounded-lg font-medium transition-all
                ${
                  isLogin
                    ? 'bg-card text-primary border border-border shadow-sm'
                    : 'text-muted-foreground hover:text-primary'
                }
              `}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 rounded-lg font-medium transition-all
                ${
                  !isLogin
                    ? 'bg-card text-primary border border-border shadow-sm'
                    : 'text-muted-foreground hover:text-primary'
                }
              `}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
