import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import "./App.css";
import { useAuth } from "./hooks/useAuth";

import { AdminLayout } from "./Layout/AdminLayout";
import { Login } from "./Views/Login";

function App() {
  const { user } = useAuth();

  useEffect(() => {
    console.log("AAAuser", user);
  }, [user]);

  console.log("4", user);
  // if (!user) {
  //   return <Login />;
  // }
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
