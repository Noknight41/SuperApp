import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "services/firebase";

function Auth(props) {
  const { children } = props;
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate("/home");
      } else {
        navigate("/signin");
      }
    }
  }, [user, loading]);

  return <div className="h-full">{children}</div>;
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
