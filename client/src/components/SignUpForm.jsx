import React from 'react';

const SignUpForm = () => {
  return (
    <form className="space-y-7 w-full mt-4 p-3">
      <div>
        <label className="block text-2xl font-medium text-card-foreground mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border border-border rounded bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary md:text-sm md:font-light"
        />
      </div>

      <div>
        <label className="block text-2xl font-medium text-card-foreground mb-1">Email</label>
        <input
          type="email"
          placeholder="your@example.com"
          required
          className="w-full border border-border rounded bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary md:text-sm md:font-light"
        />
      </div>

      <div>
        <label className="block text-2xl font-medium text-card-foreground mb-1">Password</label>
        <input
          type="password"
          placeholder="********"
          className="w-full border border-border rounded bg-background px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary md:text-sm md:font-light"
        />
      </div>

      <button
        type="submit"
        className="w-full items-center p-3 mt-7 font-medium rounded-3xl bg-primary text-primary-foreground text-2xl focus:ring-2 focus:ring-primary-light md:font-medium transition-colors hover:bg-primary-light"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
