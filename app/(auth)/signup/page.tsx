'use client';
import React from 'react';
import { useState,} from 'react';
import Link from 'next/link'
import styles from "@/app/css/additional-styles/themes.module.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Perform form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className="h1">Begin creating. Sign up below.</h1>
        </div>

        <div className="max-w-sm mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Sign up with Discord button */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <button className="btn px-0 text-white bg-blue-100 hover:bg-blue-700 w-full relative flex items-center">
                  <svg className="w-4 h-4 fill-current text-white shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                  </svg>
                  <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                  <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Discord</span>
                </button>
              </div>
            </div>

            {/* Username input */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="username">Username <span className="text-red-600">*</span></label>
                <input
                    id="username"
                    type="text"
                    className="form-input w-full text-gray-300 px-4 py-3 rounded-lg border border-gray-400 bg-transparent placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your username"
                    required
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
              </div>
            </div>

            {/* Email input */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300 px-4 py-3 rounded-lg border border-gray-400 bg-transparent placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
            </div>

            {/* Password input */}
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300 px-4 py-3 rounded-lg border border-gray-400 bg-transparent placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className={`${styles.regGradient} btn px-0 text-white-100 w-full relative flex items-center`}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          {/* Sign-in link */}
          <div className="text-gray-400 text-center mt-6">
            Already using Fooocus AI? <Link href="/signin" className="text-orange-300 hover:text-orange-100 transition duration-150 ease-in-out">Sign in</Link>
          </div>
        </div>
      </section>
  )
}
