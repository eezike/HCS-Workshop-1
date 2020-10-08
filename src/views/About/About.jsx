import React, { useState } from "react";
import "./About.css";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import MePic from "../../assets/profile.JPG";


export default function AboutScreen() {
  const quickFacts = [
    {
      title: "High School Education",
      desc: "I attended Saint Ignatius College Prep in Chicago, IL. I was a student there from 2016-2020"
    }, 
    {
      title: "College Education",
      desc: "I attend Harvard College in Cambridge, MA. I am a member of the class of 2024. I plan to major in Computer Science or Economics."
    },
    {
      title: "Family Background",
      desc: "I grew up in the suburbs of Chicago. I am the oldest of four. My family is 100% Igbo-Nigerian."
    },
  ];

  const [index, setIndex] = useState(0);

  var nextIndex = () => {
    if ((index + 1) > (quickFacts.length - 1)){
      setIndex(0);
    } else {
      setIndex( index + 1 );
    }
  }


  return (
    <div className="screen-background">
      <div className="intro-background">

        <div className="grid-container intro-item">

          <div className="grid-child">
            <img src={MePic} className="intro-picture" />
          </div>

          <div className="grid-child">
            <h2>Quick Facts</h2>
            <Card fact={ quickFacts[index] } ></Card>
            <p className="button" onClick = {() => nextIndex()}>Next</p>

            <h2>Known Languages</h2>
            <p>Search to see if I know a specific programming language:</p>
            <Search></Search>
          </div>

        </div>


      </div>
    </div>
  );
}
