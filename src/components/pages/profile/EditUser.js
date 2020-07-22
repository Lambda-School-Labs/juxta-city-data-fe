import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";
import { editProfile } from "../../../functions";
import "../../css/neumorphism.css";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const profileId = props.profileData[0].id;

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    editProfile(profileId, user).then(() => window.location.reload());
  };

  return props.editing ? (
    <div>
      <h2> Edit User</h2>
      <EditForm
        handleEditChange={handleEditChange}
        handleEditSubmit={handleEditSubmit}
      />
    </div>
  ) : null;
};

export default EditUser;
