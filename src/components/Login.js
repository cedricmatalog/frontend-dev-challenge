import { useEffect, useState } from 'react';

export default function Login({ setView }) {
  const STATUS = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    RESOLVED: 'RESOLVED',
    REJECTED: 'REJECTED',
  };

  const { IDLE, LOADING, RESOLVED, REJECTED } = STATUS;

  const [status, setStatus] = useState(IDLE);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    return () => {
      setStatus(IDLE);
    };
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  }

  function handleSubmit(event) {
    setStatus(LOADING);

    const { email, password } = formValues;

    if (email === 'admin' && password === 'admin') {
      setTimeout(() => {
        setStatus(RESOLVED);
        setView('pokemon');
      }, 500);
    } else {
      setTimeout(() => {
        setStatus(REJECTED);
      }, 500);
    }

    event.preventDefault();
  }

  const { email = '', password = '' } = formValues;

  return (
    <div className="min-h-screen flex items-center justify-center bg-1C1D1F py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-2D2F36 px-10 py-16">
        {status === REJECTED && (
          <p class="text-red-500 text-center">Incorrect email or password.</p>
        )}

        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pb-5">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                onChange={handleChange}
                className={`appearance-none bg-3F414B text-white rounded-none relative block w-full px-3 py-2 border ${
                  status === REJECTED && email === ''
                    ? 'border-red-500'
                    : 'border-3F414B'
                } placeholder-gray-500 rounded-md focus:outline-none focus:ring-F2C94C focus:border-F2C94C focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                className={`appearance-none bg-3F414B text-8B8B8B rounded-none relative block w-full px-3 py-2 border ${
                  status === REJECTED && password === ''
                    ? 'border-red-500'
                    : 'border-3F414B'
                } placeholder-gray-500  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-F2C94C focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-F2C94C hover:bg-F2C94C"
            >
              {status === LOADING ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'LOGIN'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
