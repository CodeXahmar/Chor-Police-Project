import Arrowr from "./Images/Arrow right.jpg";
import Arrowl from "./Images/Arrow left.jpg";
import Kem from "./Images/1.jpg";
import Marry from "./Images/2.jpg";
import Daniel from "./Images/3.jpg";
import Joe from "./Images/4.jpg";
import Robe from "./Images/5.jpg";
import Ron from "./Images/6.jpg";
import Stephnie from "./Images/7.jpg";
import React from "react";
import "./Voter.css";
let Array = [
  [
    { url: Kem, name: "Talha" },
    [
      { url: Joe, name: "Alyan" },
      { url: Marry, name: "Marry" },
      { url: Ron, name: "Hashir" },
    ],
  ],
  [
    [
      { url: Marry, name: "Marry" },
      [
        { url: Robe, name: "sabir" },
        { url: Stephnie, name: "Ahmar" },
        { url: Ron, name: "Talha" },
        { url: Kem, name: "Hashir" },
      ],
    ],
    [
      { url: Robe, name: "Hashir" },
      [
        { url: Daniel, name: "Alyan" },
        { url: Stephnie, name: "Ahmar" },
        { url: Marry, name: "Marry" },
        { url: Marry, name: "Marry" },
      ],
    ],
    [
      { url: Joe, name: "Alyan" },
      [
        { url: Stephnie, name: "Ahmar" },
        { url: Kem, name: "Hashir" },
        { url: Marry, name: "Marry" },
      ],
    ],
    [
      { url: Joe, name: "Alyan" },
      [
        { url: Stephnie, name: "Ahmar" },
        { url: Kem, name: "Hashir" },
        { url: Marry, name: "Marry" },
      ],
    ],
  ],
  [
    [
      { url: Marry, name: "Marry" },
      [
        { url: Robe, name: "sabir" },
        { url: Stephnie, name: "Ahmar" },
        { url: Ron, name: "Talha" },
        { url: Kem, name: "Hashir" },
      ],
    ],
    [
      { url: Joe, name: "Alyan" },
      [
        { url: Stephnie, name: "Ahmar" },
        { url: Kem, name: "Hashir" },
        { url: Marry, name: "Marry" },
      ],
    ],
    [
      { url: Joe, name: "Alyan" },
      [
        { url: Stephnie, name: "Ahmar" },
        { url: Kem, name: "Hashir" },
        { url: Marry, name: "Marry" },
      ],
    ],
    [
      { url: Robe, name: "Hashir" },
      [
        { url: Daniel, name: "Alyan" },
        { url: Stephnie, name: "Ahmar" },
        { url: Marry, name: "Marry" },
        { url: Marry, name: "Marry" },
      ],
    ],
  ],
];
let Voter = () => {
  let [down1, setdown1] = React.useState(true);
  let Down1 = () => {
    setdown1(true);
  };
  let Down2 = () => {
    setdown1(false);
  };
  return (
    <div className="container">
      <div className="upper">
        <div className="left">
          <div className="img">
            <img src={Array[0][0].url} alt="Pic" />
          </div>
          <div className="name">
            <h3>You</h3>
          </div>
        </div>
        <div className="right">
          <div>
            <h4>Your Votes</h4>
          </div>
          <div className="votes">
            {Array[0][1].map((value) => {
              return (
                <div className="box">
                  <div className="image">
                    <img src={value.url} alt="Pic" />
                  </div>
                  <div className="Name">
                    <p>{value.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="voter">
          <h4 onClick={Down1}>Voter View</h4>
        </div>
        <div className="Target">
          <h4 onClick={Down2}>Target View</h4>
        </div>
      </div>
      {down1 ? (
        <div className="down1">
          {Array[1].map((value) => {
            return (
              <div className="roww">
                <div className="rleft">
                  <div className="pic">
                    <img src={value[0].url} alt="Pic" />
                  </div>
                  <div className="namee">
                    <h6>{value[0].name}</h6>
                  </div>
                </div>
                <div className="rmid">
                  <img src={Arrowr} alt="Pic" />
                </div>
                <div className="rright">
                  {value[1].map((subvalue) => {
                    return (
                      <div className="rbox">
                        <div className="Pic">
                          <img src={subvalue.url} alt="pics" />
                        </div>
                        <div className="Namee">
                          <p>{subvalue.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="down2">
          {Array[2].map((value) => {
            return (
              <div className="roww">
                <div className="rleft">
                  <div className="pic">
                    <img src={value[0].url} alt="Pic" />
                  </div>
                  <div className="namee">
                    <h6>{value[0].name}</h6>
                  </div>
                </div>
                <div className="rmid">
                  <img src={Arrowl} alt="Pic" />
                </div>
                <div className="rright">
                  {value[1].map((subvalue) => {
                    return (
                      <div className="rbox">
                        <div className="Pic">
                          <img src={subvalue.url} alt="pics" />
                        </div>
                        <div className="Namee">
                          <p>{subvalue.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Voter;
