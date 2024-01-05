import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page_background">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full max-w-screen-xl">
        {/* Login Section */}
        <div className="bg-peach1 p-8 rounded shadow-md w-full md:w-1/2 md:h-72">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-4">LOGIN</h2>
          <form className="flex flex-col h-full">
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex-grow"></div>
            <div className="flex items-start justify-start">
              <button
                className="bg-dark_blue hover:bg-nf_blue text-peach1 hover:text-dark_blue font-bold font-serif py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        {/* Signup Section */}
        <div className="bg-peach1 p-8 rounded shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-4">SIGN UP</h2>
          <form>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="surname">
                Surname
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="surname"
                type="text"
                placeholder="Enter your surname"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="emailSignup">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="emailSignup"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="passwordSignup">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="passwordSignup"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-dark_blue text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-nf_blue leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-dark_blue hover:bg-nf_blue text-peach1 hover:text-dark_blue font-bold font-serif py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
