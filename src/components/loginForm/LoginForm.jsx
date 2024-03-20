'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [submitData, setSubmitData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitData({ ...submitData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      email: '',
      password: '',
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submitData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!submitData.password) {
      newErrors.password = 'Please enter a valid password';
    }
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log(submitData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="min-w-[400px] p-6 flex flex-col shadow-inner-xl bg-white"
    >
      <Image
        className="mb-6 self-center"
        src={'/web-logo.png'}
        alt="Ifcares image logo"
        width={200}
        height={200}
        priority
      />
      <h2 className="text-xl font-medium mb-10 ml-3">Sign in to your account</h2>
      <div className="mb-10 relative">
        <motion.label
          htmlFor="email"
          className="absolute mt-2.5 ml-3 block text-sm font-medium text-gray-900"
          initial={{ y: 0, scale: 1, rotate: 0, x: 0 }}
          animate={
            emailFocused || submitData.email
              ? {
                  y: -35,
                  scale: 1,
                  rotate: [0, 10, -5, 0],
                  x: [-5, 5, -5, 0],
                }
              : { y: 0, scale: 1, rotate: 0, x: 0 }
          }
          transition={{
            y: { duration: 0.4, type: 'spring', stiffness: 300 },
            rotate: { duration: 0.6, type: 'spring', stiffness: 200 },
            x: { duration: 0.6, type: 'spring', stiffness: 200 },
          }}
        >
          Email
        </motion.label>

        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          className={`border-t border-b shadow-inner text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none ${
            errors.email ? 'border border-red-600' : ''
          }`}
        />
        {errors.email && (
          <span className="text-xs text-red-600 ml-3 mt-1">{errors.email}</span>
        )}
      </div>
      <div className="mb-10 relative">
        <motion.label
          htmlFor="password"
          className="block absolute mt-2.5 ml-3 text-sm font-medium text-gray-900"
          initial={{ y: 0, scale: 1 }}
          animate={
            passwordFocused || submitData.password
              ? {
                  y: -35,
                  scale: 1,
                  rotate: [0, 10, -5, 0],
                  x: [-5, 5, -5, 0],
                }
              : { y: 0, scale: 1, rotate: 0, x: 0 }
          }
          transition={{
            y: { duration: 0.4, type: 'spring', stiffness: 300 },
            rotate: { duration: 0.6, type: 'spring', stiffness: 200 },
            x: { duration: 0.6, type: 'spring', stiffness: 200 },
          }}
        >
          Password
        </motion.label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          className={`border-t border-b shadow-inner text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none ${
            errors.password ? 'border border-red-600' : ''
          }`}
        />
        {errors.password && (
          <span className="text-xs text-red-600 ml-3 mt-1">
            {errors.password}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="text-white font-semibold rounded-lg text-base w-full px-5 py-2.5 text-center border bg-gradient-to-l from-green-500 to-blue-500"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
