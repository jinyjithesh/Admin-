import React from "react";
import { useAuth } from "../hooks/useAuth";
import { StaffList } from "../Views/Staff/StaffList";

export const Content = () => {
  const { onLogout } = useAuth();
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <StaffList />
    </div>
  );
};
