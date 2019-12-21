import React, { useState, useEffect } from "react";
import "./App.scss";
import PhotoContainer from "./components/PhotoContainer";
import Button from "./components/Button";
import Input from "./components/Input";
import useKeyPress from "./helpers/useKeyPress";
import { ReactComponent as Search } from "./assets/search.svg";

function App() {
  document.title = "David's Gallery";

  const [photoTheme, setPhotoTheme] = useState("netherlands");
  const [photoAmount, setPhotoAmount] = useState(4);
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    let cancel = false;
    /**
     * Fetch data and check for duplicates
     */
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://source.unsplash.com/random/?${photoTheme}`
        );
        if (!cancel) setPhotoData(oldData => [...oldData, response.url]);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    if (photoData.length <= photoAmount + 2) fetchData();

    return () => {
      setPhotoData(photoData => [...new Set(photoData)]);
      if (photoData.length <= photoAmount + 2) fetchData();
      cancel = true;
    };
  }, [photoAmount, photoData.length, photoTheme]);

  const removePhoto = () => setPhotoAmount(photoAmount - 2);
  const addPhoto = () => setPhotoAmount(photoAmount + 2);

  const updateTheme = value => {
    if (value.length > 2) {
      setPhotoData([]);
      return setPhotoTheme(value);
    }
    return;
  };

  const isFocused = () => {};

  const isEnterPressed = useKeyPress("enter") ? updateTheme : null;

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Gallery</h1>
      </header>
      <div className="buttons">
        <Button
          action="remove"
          isDisabled={photoAmount < 5 ? true : false}
          onClick={removePhoto}
        />
        <Button
          action="add"
          isDisabled={photoAmount > 30 ? true : false}
          onClick={addPhoto}
        />
      </div>
      <PhotoContainer
        theme={photoTheme}
        photoAmount={photoAmount}
        photoData={photoData}
      />
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          return updateTheme(photoTheme);
        }}
        onKeyPress={isEnterPressed}
      >
        <Input
          placeholder="theme"
          action={"set-theme"}
          type="text"
          onFocus={isFocused}
          setUserInput={setPhotoTheme}
        />
        <Button
          type="submit"
          action="submit"
          onClick={() => updateTheme(photoTheme)}
          className={"focus"}
        >
          <Search />
        </Button>
      </form>
    </div>
  );
}

export default App;
