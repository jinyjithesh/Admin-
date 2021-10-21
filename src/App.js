import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { AdminLayout } from "./Layout/AdminLayout";
import { Login } from "./Views/Login";

function App() {
  const { user } = useAuth();
  if (!user) {
    return <Login />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <AdminLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
