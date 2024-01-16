import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface UserDetails {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const ViewComponent: React.FC = () => {
  const location = useLocation<{ userDetails: UserDetails }>();
  const userDetails = location.state?.userDetails;

  // Redirect to the login page if userDetails is not present
  if (!userDetails) {
    return <Navigate to="/login" />;
  }

  return (
    
    <div>
      <h2>Welcome, {userDetails.fullName}!</h2>
      <h2>{userDetails.email}!</h2>
      <h2>role:{userDetails.roles}! </h2>
      {/* Display other user details as needed */}
    </div>
  );
};

export default ViewComponent;
