import Card from './card.jsx'
import RegistrationForm from './form.jsx'
import List from './List.jsx'
import profile from './assets/WhatsApp Image 2024-02-25 at 21.07.46_26f4386f.jpg'
import profile1 from './assets/MY PHOTO 2.jpg'
import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import RegistrationForm from './form.jsx'

// const yumiko = {
//     profile : profile,
//     name :"Yumiko kawai",
//     phrase : "I am a doctor"
// }




// function App ()
// {
// //     const [rname, setName] = useState("Gowri Chandhana");
// // const Gowri = {
// //     profile : profile,
// //     name :[rname, setName ],
// //     phrase : "I am a Doctor"
// // }
  
//  return (
//     // <>
//     // {/* <Card name = {yumiko.name} profile = {yumiko.profile} phrase = {yumiko.phrase} /> */}
//     // {/* <Card name = {Gowri.name[0]} profile = {Gowri.profile} phrase = {Gowri.phrase} modify_name = {Gowri.name[1]}/> */}
 
//     // {/* <Card name = {ashvin.name[0]} profile = {ashvin.profile} phrase = {ashvin.phrase} modify_name = {ashvin.name[1]}/> */}

 
//     // </>
//     {RegistrationForm}
//  )
// }


function App() {
    return (
      <div className="App">
        <RegistrationForm />
      </div>
    );
  }
export default App




// #git init
// # git commit -m "first commit"
// # git branch -M main
// # git push -u origin main


// #####
// # git init
// # git add README.md
// # git commit -m "first commit"
// # git branch -M main
// # git remote add origin https://github.com/ashvxn/Project1.git
// # git push -u origin main
