import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Login.css";
import { useImmer } from "use-immer";

export const Login = () => {
  const [user, setUser] = useState();

  const history = useHistory();
  const { state, onLogin } = useAuth();
  const [localState, setlocalState] = useImmer({
    username: "",
    password: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    if (e) {
      setlocalState((draft) => {
        draft[name] = value;
      });
    }
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);
  useEffect(() => {
    if (state.isSuccess) {
      history.push("/");
    }
  }, [state.isSuccess]);

  return (
    <div className="loginParentDiv">
      <h1>Login</h1>
      <p>Sign In to your account </p>

      <form
        onSubmit={(e) => onLogin(e, localState.username, localState.password)}
      >
        <input
          className="input"
          onChange={onChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <br />

        <br />

        <input
          name="password"
          type="password"
          placeholder="**********"
          onChange={onChange}
          className="input"
        />
        <br />
        <br />
        <button type="submit" value="LOGIN" disabled={state.isBusy}>
          {state.isBusy ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};
