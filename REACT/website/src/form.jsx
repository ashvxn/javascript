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
        <div className='innerbox'>
          <div className='firstbox'><svg width="154" height="40" viewBox="0 0 154 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-120.079 40L-154 1.52588e-05L154 1.79568e-06L120.079 40L-120.079 40Z" fill="black"/>
          </svg></div>
          
            <br />
            
            <div className='content'>
              <br />
            <h3 className="center">Your true identity, should <br /> you choose to reveal it</h3>
            
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
              <label htmlFor="year4">4th Year</label><br/><br/><br />
              <input type="submit" value="Submit" className="submit"/>
            </form>
            </div>
            <div className='secondbox'><svg width="154" height="40" viewBox="0 0 154 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9207 1.48272e-06L-1.74845e-06 40L308 40L274.079 1.19804e-05L33.9207 1.48272e-06Z" fill="black"/>
</svg>



</div>
        </div>
      </div>
    );
  }
}

export default food;
