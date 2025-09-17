/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/HungryDevLogo.png"
const Header= () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div className="nav-items"> 
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
const Rescard=()=>{
  return (
    <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/b537f9cd-5a6a-45dd-b88a-167641488c06_27739.jpg" alt="ResPhoto" />
      <h3>Cafe Niloufer</h3>
      <h4>Indian ,Chinese, Tea ,cofee</h4>
      <h4>4.6</h4>
      <h4>20min</h4>
    </div>
  );
}
const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
        <Rescard/>
      </div>
    </div>
  );
}
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);