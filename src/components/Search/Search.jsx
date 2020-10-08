import React, { useState } from "react";
import "./Search.css";

export default function Search() {

  const languages = ["Java", "C", "Javascript", "Swift", "Python", "C#"];

  const [known, setKnown] = useState(false);

  let handleValue = (e) => {

    setKnown(false);
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
        setKnown(true);
        break;
      }
    }
  }

  return (
    <input 
      type="search" 
      name="search" 
      className={(known) ? "green" : "red"}
      onChange={handleValue}
      placeholder="Search..." 
    />
  );
}