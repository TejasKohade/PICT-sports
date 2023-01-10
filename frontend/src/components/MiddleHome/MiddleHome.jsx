import React from "react";
import "./middlehome.css";
import badminton from "./badminton.jpg";
import basketball from "./basketball.jpg";
import chess from "./chess.jpg";
import tt from "./tt.jpg";
import vollyball from "./vollyball.jpg";
import cricket from "./cricket.jpg";

function MiddleHome() {
  return (
    <div className="middlehome">
      <div className="heading">
        <p>SPORTS IN PICT</p>
        <div class="row">
          <div class="column">
            <a href="/">
              <img src={cricket} alt="/" />
            </a>
            <a href="/">CRICKET</a>
          </div>
          {/* <!-- <div class="column">
            <a href="/"><img src="./football.jpg" alt="/"/></a>
            <a href="/">FOOTBALL</a>
         </div> --> */}
          <div class="column">
            <a href="/">
              <img src={basketball} alt="/" />
            </a>
            <a href="/">BASKETBALL</a>
          </div>
          <div class="column">
            <a href="/">
              <img src={vollyball} alt="/" />
            </a>
            <a href="/">VOLLYBALL</a>
          </div>
          <div class="column">
            <a href="/">
              <img src={badminton} alt="/" />
            </a>
            <a href="hello.html">BADMINTON</a>
          </div>
          <div class="column">
            <a href="/">
              <img src={tt} alt="/" />
            </a>
            <a href="/">TABLE TENNIS</a>
          </div>
          <div class="column">
            <a href="/">
              <img src={chess} alt="/" />
            </a>
            <a href="/">CHESS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleHome;
