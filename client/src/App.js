import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>84 D'Arcy Wifi</h1>
      <div className="checkinbox">
        Welcome to 84 D'Arcy! I will be handling the wifi in this building. 
        We are using Bell Fibe 150 which has an upload and download speed of 150 Mbps with unlimited usage, this can change however upon request. 
        For any questions, be sure to text me at 6478645896 or knock on my door #1. 
        Shrey
        <div className="check-in">
          <h3>Check in</h3>
          Please enter your payment details below and you will be charged 14 CAD which will be billed monthly.
          Along with that you will get a reciept which will be sent to your email address.
          <form>
            <input type="text" id="name" placeholder="Name"/>
            Room:
            <select id="room">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </form>
        </div>
        <div className="check-out">
          <h3>Check out</h3>
            <label>Room:</label>
            <select id="room">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
        </div>
      </div>
    </div>
  );
}

export default App;
