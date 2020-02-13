
import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import Body from './Body';

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
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: "400",
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

  const rightsidenav = {
    display: "inline-block",
    marginLeft: '10vw'
  }
  const videostyle = {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
    width: "100vw",
  }


  const careers = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    marginLeft: "-25%",
    opacity: "80%",
    fontSize: "30px",
    fontWeight: "200",
  }

  const videoText = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    marginTop: "4%",
    fontFamily: "'Gothic A1', sans-serif",
  }

  const h4div = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    fontSize: "14px",
    marginLeft: "60%",
    opacity: "50%",
  }

  const h4 = {
    padding: "5px",
  }

const line = {
      borderBottom: "1px solid white",
      marginLeft: "-25%",
      width: "120%",
      opacity: "50%",
}

const headerDivWrap={
  width: "100vw",
  height: "50vh"


}

const HoverText = styled.h4`
  padding: 5px;
  :hover{
    color: grey;
    cursor: pointer;
  }`

  return (
    <div>
    <div style={headerDivWrap}>
    <div style={navbar}>

    <h1 style={header} className="headerClass">TESLA</h1>
    <div style={divstyle}>
    <Link to='/cars'><h3 style={h3}> MODEL S </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL 2 </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL X </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL Y </h3></Link> <Link to='/cars'><h3 style={h3}> CYBERTRUCK </h3></Link> <Link to='/cars'><h3 style={h3}> ROADSTER </h3></Link><Link to='/cars'><h3 style={h3}> ENERGY </h3></Link>
    <style jsx>{`
      a:visited {
        color:white
      }
      `}</style>
    <div style={rightsidenav}>
    <h3 style={righth3}> SIGN IN </h3> <h3 style={righth3}> SHOP </h3> <h3 style={menubars}> &#9776;</h3>
    </div>
      <div style={videoText}>
      <h1 style={careers}>Careers</h1>
      <div style={h4div}>
      <HoverText>About</HoverText><HoverText>Careers</HoverText><HoverText>Contact</HoverText><HoverText>Legal</HoverText><HoverText>Investors</HoverText><HoverText>Suppliers</HoverText>
      </div>
      </div>
      <div style={line}>

      </div>
    </div>


    </div>
    <video  autoPlay muted loop style={videostyle}>
    <source src="https://www.tesla.com/ns_videos/careers-video-071017.webm" type="video/webm" media="(min-width: 640px)"/>
    </video>
    </div>
    <Body/>
    </div>
  );
}

export default Header;
