import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useImmer } from "use-immer";
import axios from "axios";
export const useStaff = (load) => {
  const history = useHistory();
  const token = getToken();
  const [isBusy, setBusy] = useState(false);
  const [staff, setStaff] = useImmer();
  const [state, setState] = useImmer({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const onLoad = () => {
    setBusy(true);
    axios
      .get("https://vowbiz.com/api/admin/Staff", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("state", res.data);
        setStaff((draft) => res.data);
        setState((draft) => res.data);
        // history.push("/Staff");
        setBusy(false);
      })
      .catch((err) => {
        console.log(err);
        setBusy(false);
      });
  };

  useEffect(() => {
    if (load) {
      onLoad();
    }
  }, []);
  return { isBusy, setBusy, state, setState };
};
export const getToken = () => {
  return localStorage.getItem("token") || null;
};
