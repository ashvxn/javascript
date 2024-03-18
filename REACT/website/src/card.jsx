import profile from './assets/WhatsApp Image 2024-02-25 at 21.07.46_26f4386f.jpg'
import List from './List.jsx'
import React from 'react';


function Card(object){
    const button_funtion = ()=>{if (object.name === "Gowri Chandhana" )
    { object.modify_name("Yumiko Kawai");}
    else if( (object.name === "Yumiko Kawai" )){
        { object.modify_name("Gowri Chandhana");}}
    console.log(object.name)
    }
    return(
        <button onClick={() => button_funtion()} >
        <div className="card">
            <img src={object.profile} alt="No image" className='i'/>
            <h2 className="h">{object.name}</h2>
            <p className='p'>{object.phrase}</p>
            <List/>
            

        </div>
        </button>

        

    )
}
export default Card