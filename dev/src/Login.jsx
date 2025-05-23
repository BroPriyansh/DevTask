import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-80 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-1">Signin to your PopX account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <legend className=" text-sm font-medium text-purple-600 mb-1">
            Password
          </legend>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>


        <button className="w-full bg-gray-300 text-white py-2 my-4 rounded-md font-semibold" onClick={() => navigate('/account')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
