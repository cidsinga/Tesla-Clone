import React from 'react';
import { Link } from 'react-router-dom';
function Cars(){
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
    backgroundColor: 'rgba(0, 0, 0, 0)',
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
const mainText = {
  color: 'white',
  marginLeft: '-20%',
  marginTop: '30%'
}
const orderNow = {
  color: 'black',
  border: '1px solid black',
  width: '100px',
  height: '25px',
  paddingBottom: '20px',
  borderRadius: "40%",
  marginTop: "95%",
  marginLeft: '70%'
}
const orderText = {
  color: 'black',
}

  return (
    <div>
      <div style={navbar}>

      <Link to='/'><h1 style={header} className="headerClass">TESLA</h1></Link>
      <div style={divstyle}>
        <Link to='/cars'><h3 style={h3}> MODEL S </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL 2 </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL X </h3></Link> <Link to='/cars'><h3 style={h3}> MODEL Y </h3></Link> <Link to='/cars'><h3 style={h3}> CYBERTRUCK </h3></Link> <Link to='/cars'><h3 style={h3}> ROADSTER </h3></Link><Link to='/cars'><h3 style={h3}> ENERGY </h3></Link>
          <style jsx>{`
            a{
              text-decoration: none;
            }
              a:visited {
              color: white;
              text-decoration: none;
              }
              body{
                background-image: url("https://www.tesla.com/sites/tesla/files/curatedmedia/model-s-portrait%402x.jpg");
                 background-size: cover;
              }

          `}</style>
        <div style={rightsidenav}>
          <h3 style={righth3}> SIGN IN </h3> <h3 style={righth3}> SHOP </h3> <h3 style={menubars}> &#9776;</h3>
        </div>
        <div style={mainText}>
        <h4 className="topText"> Tesla </h4>
        <h2 className="bottomText"> Model S </h2>
        <style jsx>{`
            .bottomText {
              color: white;
              font-size: 40px;
              margin-top: -13px;
              animation: fade_in 1s 1, slide_up 0.3s 1;

            }
            .topText{
              color: white;
              font-size: 25px;
              margin-top: -13px;
              animation: fade_in 1s 1, slide_up 0.3s 1;
            }

            @keyframes fade_in{
              0%   { opacity: 0;}
              100% { opacity: 1; }
            }
            @keyframes slide_up{
              0%   { margin-top: 40px;}
              100% { margin-top: -13px; }
            }

        `}</style>
        </div>

        <div style={orderNow}>
        <a href="https://www.youtube.com/watch?v=PLxPAwIeL0w"><h4 style={orderText}> Order Now </h4></a>
        </div>


    </div>
    </div>
    </div>
  );
}




export default Cars;
