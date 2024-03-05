import profile from './assets/WhatsApp Image 2024-02-25 at 21.07.46_26f4386f.jpg'
import List from './List.jsx'


function Card(object){
    return(
        <div className="card">
            <img src={object.profile} alt="No image" className='i'/>
            <h2 className="h">{object.name}</h2>
            <p>{object.phrase}</p>
            <List/>
            

        </div>

    )
}
export default Card