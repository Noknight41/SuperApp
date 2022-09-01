import React from "react";

import { Headline } from "components";
import { AppLayout } from "layouts";
import { auth, firestore } from "services/firebase";

import { PassForm, PassGen } from "./components";
import passGen from "./passGen";

class PassGenPage extends React.Component {
  passRef = firestore.collection("pass");

  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  addPass = async (name) => {
    const { uid } = auth.currentUser;
    const { password } = this.state;
    if (password && name) {
      await this.passRef.add({
        uid,
        password,
        name,
      });
    }
  };

  passGenerate = (mode, length, hasUpper, hasLower, hasNumber, hasSpecial) => {
    switch (mode) {
      case "Say":
        this.setState({
          password: passGen.easySayPassGenerator(length, hasUpper, hasLower),
        });
        break;
      default:
        this.setState({
          password: passGen.allPassGenerator(
            length,
            hasUpper,
            hasLower,
            hasNumber,
            hasSpecial
          ),
        });
        break;
    }
  };

  render() {
    const { password } = this.state;
    return (
      <AppLayout pageName="PassSavior">
        <div className="max-w-screen-xl px-4 py-16 mx-auto lg:h-[90%] lg:max-h-[90vh] lg:items-center lg:flex">
          <div className="max-w-[900px] mx-auto text-center">
            <Headline
              first="Generate a secure password"
              second="Use our online password generator to instantly create a secure, random password"
            />
            <PassGen password={password} />
            <PassForm passGen={this.passGenerate} passAdd={this.addPass} />
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default PassGenPage;
