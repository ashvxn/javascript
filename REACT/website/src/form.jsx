import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/database'; 

class RegistrationForm extends React.Component {
  componentDidMount() {
    // Initialize Firebase with your configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBo6P8bIgC8LMWxrgzRGXQsx0039HVqxcY",
        authDomain: "ledebut-a29ff.firebaseapp.com",
        databaseURL: "https://ledebut-a29ff-default-rtdb.firebaseio.com",
        projectId: "ledebut-a29ff",
        storageBucket: "ledebut-a29ff.appspot.com",
        messagingSenderId: "204040384341",
        appId: "1:204040384341:web:d337fa31dca2f1b1efc9dc",
        measurementId: "G-CHCXC1C0FN"
    };
    firebase.initializeApp(firebaseConfig);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const database = firebase.database().ref('registrations');
    const name = this.getElementVal("name");
    const college = this.getElementVal("college");
    const year = document.querySelector('input[name="year"]:checked').value;
    this.saveMessages(name, college, year);
  };

  saveMessages = (name, college, year) => {
    const newdatabase = firebase.database().ref('registrations').push();
    newdatabase.set({ name: name, college: college, year: year });
  };

  getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  render() {
    return (
      <div className="primary">
        <h2 className="center">Your true identity, should <br /> you choose to reveal it</h2>
        <br />
        <br />
        <form id="registration_form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label><br/><br/>
          <input type="text" id="name" name="name"/><br/><br/>
          <label htmlFor="college">College:</label><br/><br/>
          <input type="text" id="college" name="college"/><br/><br/>
          <input type="radio" id="year1" name="year" value="1"/>
          <label htmlFor="year1">1st Year</label><br/><br/>
          <input type="radio" id="year2" name="year" value="2"/>
          <label htmlFor="year2">2nd Year</label><br/><br/>
          <input type="radio" id="year3" name="year" value="3"/>
          <label htmlFor="year3">3rd Year</label><br/><br/>
          <input type="radio" id="year4" name="year" value="4"/>
          <label htmlFor="year4">4th Year</label><br/><br/>
          <input type="submit" value="Submit" className="submit"/>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
