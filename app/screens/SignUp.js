import React from "react";
import { ImageBackground } from "react-native";
import image from "../assets/signup.jpg";

function SignUp() {
  return <ImageBackground source={image} style={{ flex: 1 }} />;
}

export default SignUp;
