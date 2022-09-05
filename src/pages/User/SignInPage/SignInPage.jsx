import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { LoginLayout } from "layouts";
import { auth } from "services/firebase";

import { SignInSection } from "./components";

function App() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [user]);

  return (
    <LoginLayout
      left={<SignInSection mode="light" />}
      right={<SignInSection mode="dark" />}
    />
  );
}

export default App;
