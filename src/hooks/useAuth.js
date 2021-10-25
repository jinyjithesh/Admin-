import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useImmer } from "use-immer";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useImmer({
    isBusy: false,
    message: "",
    isSuccess: false,
  });
  const [user, setUser] = useState();
  console.log("dd", user);
  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault();
    removeUserLocalStorage();
    setUser();
    history.push("/login");
  };
  const onLogin = (e, username, Password) => {
    if (e) e.preventDefault();
    setState((draft) => {
      draft.isBusy = true;
    });
    axios
      .post("https://vowbiz.com/api/Auth/login", {
        username: username,
        password: Password,
      })
      .then((res) => {
        console.log("log", res);

        if (res.status === 200) {
          console.log("login");
          console.log("3", res.data.user);
          setUserLocalStorage(res.data.token, res.data.user);
          setUser(res.data);
          setState((draft) => {
            draft.isBusy = false;
            draft.isSuccess = true;
          });
        } else {
          setState((draft) => {
            draft.message = res.data.message;
            draft.isBusy = false;
            draft.isSuccess = false;
          });
        }
      })
      .catch((err) => {
        setState((draft) => {
          draft.message = err.res ? err.res.data.message : "Login failed!";
          draft.isBusy = false;
        });
      });
  };

  return {
    state,
    onLogin,
    onLogout,
    user,
    setState,
    setUser,
    loading,
    setLoading,
  };
};
export const setUserLocalStorage = (token, user) => {
  console.log("222", user);
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
};
export const removeUserLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
