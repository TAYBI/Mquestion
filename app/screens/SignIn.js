import React from "react";
import { ImageBackground } from "react-native";
import image from "../assets/signin.jpg";

function SignIn() {
  return <ImageBackground source={image} style={{ flex: 1 }} />;
}

export default SignIn;
