import React, { lazy, Suspense } from "react";
import "./PhotoContainer.scss";
import Loading from "./Loading";
const Photo = lazy(() => import("./Photo"));

function Container({ theme, photoAmount, photoData }) {
  const totalPhotos = () => {
    let totalComponents = [];

    for (let i = 0; i < photoAmount; i++) {
      totalComponents.push(
        <Photo theme={theme} key={i} photoId={photoData[i]} />
      );
    }

    return totalComponents;
  };

  return (
    <div className="container" id="container">
      <Suspense fallback={<Loading />}>{totalPhotos()}</Suspense>
    </div>
  );
}

export default Container;
