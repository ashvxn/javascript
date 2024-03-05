const qualities  = ["Kind" , "caring" , "loving" , "sexy"]

function List(){
   const l = qualities.map((x)=> <li>{x}</li>)

   return( <ul>{l}</ul> );

}
export default List