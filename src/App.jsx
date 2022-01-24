import React, { useEffect, useState } from "react";
import "./App.scss";
import { ReactComponent as Search } from "./assets/search.svg";
import Button from "./components/Button";
import Input from "./components/Input";
import PhotoContainer from "./components/PhotoContainer";
import useKeyPress from "./helpers/useKeyPress";

function App() {
  document.title = "David's Gallery";

  const [photoTheme, setPhotoTheme] = useState("netherlands");
  const [photoAmount, setPhotoAmount] = useState(4);
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    /**
     * Fetch data and check for duplicates
     */
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://source.unsplash.com/random/?${photoTheme}`
        );
        if (photoData.includes(response.url)) return;
        if (!cancel) setPhotoData((oldData) => [...oldData, response.url]);
      } catch (error) {
        throw new Error(error);
      }
    };

    const callInterval = setInterval(() => {
      if (photoData.length <= photoAmount + 2) fetchData();
    }, 50);

    if (!(photoData.length <= photoAmount + 2)) {
      clearInterval(callInterval);
      cancel = true;
      return;
    }

    return () => {
      cancel = true;
    };
  }, [photoAmount, photoData, photoData.length, photoTheme]);

  const removePhoto = () => setPhotoAmount(photoAmount - 2);
  const addPhoto = () => setPhotoAmount(photoAmount + 2);

  const updateTheme = (value) => {
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
      <PhotoContainer
        onAdd={addPhoto}
        onRemove={removePhoto}
        theme={photoTheme}
        photoAmount={photoAmount}
        photoData={photoData}
      />
      <form
        className="form"
        onSubmit={(e) => {
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
