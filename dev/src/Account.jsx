
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-96 rounded-xl shadow-md p-6">
        <div className="flex col span-2 justify-between mb-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Account Settings</h2>
            <Link to="/"><h2 className="text-lg text-blue-600 pb-2 mb-4 cursor-pointer">Home</h2></Link>
        </div>
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16">
            <img
              src=""
              alt="Profile"
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs cursor-pointer">
              <span className="material-icons text-xs">edit</span>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="font-bold text-sm">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-sm text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
    </div>
  )
}

export default Account
