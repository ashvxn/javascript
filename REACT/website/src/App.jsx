import Card from './card.jsx'
import List from './List.jsx'
import profile from './assets/WhatsApp Image 2024-02-25 at 21.07.46_26f4386f.jpg'
import profile1 from './assets/MY PHOTO 2.jpg'

const yumiko = {
    profile : profile,
    name :"Yumiko kawai",
    phrase : "I am a doctor"
}
const ashvin = {
    profile : profile1,
    name :"Ashvin P Kumar",
    phrase : "I am an Engineer"
}


function App ()
{
 return (
    <>
    <Card name = {yumiko.name} profile = {yumiko.profile} phrase = {yumiko.phrase}/>
    <Card name = {ashvin.name} profile = {ashvin.profile} phrase = {ashvin.phrase}/>
    <Card name = {yumiko.name} profile = {yumiko.profile} phrase = {yumiko.phrase}/>
    <Card name = {ashvin.name} profile = {ashvin.profile} phrase = {ashvin.phrase}/>

  
    </>
 )
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
