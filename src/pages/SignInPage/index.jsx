import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { SignIn } from "components";
import { LoginLayout } from "layouts";
import { auth, signInWithGoogle } from "services/firebase";

function App() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }, [user]);

  return (
    <LoginLayout>
      <div className="flex items-center text-center justify-between h-[10%]">
        <h1 className="text-[2rem]">⚛️🔥💬 Super App</h1>
      </div>
      <div className="flex flex-col h-[90%] mx-10 justify-around">
        <SignIn
          signInWith={() => {
            signInWithGoogle();
          }}
          method="Google"
        />
        <p>
          Do not violate the community guidelines or you will be banned for
          life!
        </p>
      </div>
    </LoginLayout>
  );
}

export default App;
