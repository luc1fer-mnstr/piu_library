import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({ idError: '', passwordError: '' });
  const navigate = useNavigate(); // useNavigate here

  const users = [
    { id: "2300240", password: "1234", role: "student" },
    { id: "2300241", password: "1234", role: "student" },
    { id: "2300242", password: "1234", role: "admin" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(user => user.id === studentId);
    if (!foundUser) {
      setErrorMessage({ idError: 'ID is incorrect', passwordError: '' });
      return;
    }

    if (foundUser.password !== password) {
      setErrorMessage({ idError: '', passwordError: 'Password is incorrect' });
      return;
    }

    // Clear any previous error messages on successful login
    setErrorMessage({ idError: '', passwordError: '' });

    // Redirect based on role
    if (foundUser.role === 'student') {
      navigate('/books');
    } else if (foundUser.role === 'admin') {
      navigate('/admin');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-neutral-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
          <h2 className="text-center text-xl mb-6">Login</h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="studentId">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorMessage.idError && <p className="text-red-500 text-xs italic">{errorMessage.idError}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorMessage.passwordError && <p className="text-red-500 text-xs italic">{errorMessage.passwordError}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;