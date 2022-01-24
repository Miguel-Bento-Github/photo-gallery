import React, { lazy, Suspense } from "react";
import Button from "./Button";
import Loading from "./Loading";
import "./PhotoContainer.scss";
const Photo = lazy(() => import("./Photo"));

function Container({ theme, photoAmount, photoData, onAdd, onRemove }) {
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
      <Button
        action="remove"
        isDisabled={photoAmount < 5 ? true : false}
        onClick={onRemove}
      />
      <Button
        action="add"
        isDisabled={photoAmount > 30 ? true : false}
        onClick={onAdd}
      />
    </div>
  );
}

export default Container;
