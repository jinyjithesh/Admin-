import React from "react";
import { useAuth } from "../hooks/useAuth";

export const Content = () => {
  const { onLogout } = useAuth();
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
