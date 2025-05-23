import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-96 rounded-xl shadow-md p-6">
        <h1 className="text-xl font-semibold mb-4">Create your PopX account</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-purple-700 font-medium mb-1">Full Name*</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Marry Doe"/>
          </div>

          <div>
            <label className="block text-sm text-purple-700 font-medium mb-1">Phone number*</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Marry Doe"/>
          </div>

          <div>
            <label className="block text-sm text-purple-700 font-medium mb-1">Email address*</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Marry Doe"/>
          </div>

          <div>
            <label className="block text-sm text-purple-700 font-medium mb-1">Password*</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="********"/>
          </div>

          <div>
            <label className="block text-sm text-purple-700 font-medium mb-1">Company name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Marry Doe"/>
          </div>

          <div className="mt-4">
            <label className="block text-sm text-purple-700 font-medium mb-1">
              Are you an Agency?*
            </label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} className="text-purple-600"/>
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} className="text-purple-600"/>
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 mt-6 rounded-md font-semibold hover:bg-purple-700 transition" onClick={() => navigate('/account')}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
