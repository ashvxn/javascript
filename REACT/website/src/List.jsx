const qualities  = ["Kind" , "caring" , "loving" , "cute"]

function List(){
   const l = qualities.map((x)=> <li>{x}</li>)

   return( <ul>{l}</ul> );

}
export default List