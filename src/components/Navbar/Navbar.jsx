import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Emeka Ezike</h1>
        <div className="info-bar">
          <p className="info-item">eezike@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/eezike" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/emeka-ezike-a752951a9/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.youtube.com/channel/UC6_HIUK5pNgpXigVF8MIXoA" }}
            target="_blank"
          >
            YouTube
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}

//<li><a href="https://www.virushelp.shop">Virus Help Website</a></li>
//<li><a href="ezics729.github.io">Tutoring Website</a></li>
//<li><a href="https://expo.io/@ezike_labs/projects/doctor-phone">Dr. Phone App</a></li>
//<li><a href="https://expo.io/@ezike_labs/projects/stack-calculator">Stack Calc App</a></li>
//<li><a href="http://ezics.pythonanywhere.com/">Reimann Sum Calc</a></li>

