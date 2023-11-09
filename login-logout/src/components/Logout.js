import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  document.title = 'Logout Page';
  const description = 'This is the logout page . You Can logout ater clicking on logout button';
  const imageURL = 'https://previews.123rf.com/images/sarahdesign/sarahdesign1410/sarahdesign141000851/32210992-logout-icon.jpg'; 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-green-600">You have Successfully LoggedIn</h1>
      <p className="mb-4">Are you sure you want to log out?</p>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded focus:outline-none focus:bg-red-600"
      >
        Logout
      </button>
    </div>
  </div>

  );
};

export default Logout;
