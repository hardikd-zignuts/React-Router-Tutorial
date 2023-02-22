import React from "react";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const auth = useAuth();

  return (
    <>
      <div>Profile page for {auth.userName}</div>
      <div>
        <button onClick={auth.Logout}>Log out</button>
      </div>
    </>
  );
};

export default Profile;
