import React from "react";
import Rajesh from "../asset/images/Rajesh.jpg";

function Profile() {
  return <img src={Rajesh} style={{ width: 100 }} alt="" />;
}

function Gallery() {
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

export default Gallery;
