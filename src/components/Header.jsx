import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

function Header(){
  const header = {


    fontSize: "22px",
  }
  const h3 = {
display: "inline-block",
    padding: "5px",
    textAlign: "center",
  }
  const divstyle = {
    marginLeft: "25%",
    fontSize: "12px",
    textAlign: 'center',
  }
  const navbar = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: "100vw",
    height: "52px",
    color: "white",
    marginLeft: "-8px",
    marginTop: '-10px',
    textAlign: 'center',
    paddingLeft: '10px',



  }
  const righth3 = {
    display: "inline-block",
    padding: '5px',
  }
  const menubars = {
    display: "inline-block",
    padding: '5px',
    marginTop: '10px',
    fontSize: '16px',
  }

  const videostyle = {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
    width: "100vw",

  }
  const rightsidenav = {
      display: "inline-block",
      marginLeft: '10vw'

  }
  return (
    <div>
    <div style={navbar}>

    <h1 style={header} className="headerClass">TESLA</h1>
    <div style={divstyle}>
    <h3 style={h3}> MODEL S </h3> <h3 style={h3}> MODEL 2 </h3> <h3 style={h3}> MODEL X </h3> <h3 style={h3}> MODEL Y </h3> <h3 style={h3}> CYBERTRUCK </h3> <h3 style={h3}> ROADSTER </h3><h3 style={h3}> ENERGY </h3>
    <div style={rightsidenav}>
     <h3 style={righth3}> SIGN IN </h3> <h3 style={righth3}> SHOP </h3> <h3 style={menubars}> &#9776;</h3>
     </div>
    </div>


    </div>
    <video  autoPlay muted loop style={videostyle}>
    <source src="https://www.tesla.com/ns_videos/careers-video-071017.webm" type="video/webm" media="(min-width: 640px)"/>
    </video>
    </div>
  );
}

export default Header;
