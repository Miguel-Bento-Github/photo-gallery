import React from "react";
import Loading from "./Loading";
import "./Photo.scss";

export default function Photo({ photoId }) {
  const photo = {
    backgroundImage: `url(${photoId})`
  };
  return (
    <div className="photo" style={photo}>
      {!photoId && <Loading />}
    </div>
  );
}
