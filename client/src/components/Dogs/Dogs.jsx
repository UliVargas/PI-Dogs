import React from "react";
import { connect } from "react-redux";
import Dog from "./DogCard/Dog";

export function Dogs(breed) {
 
  return (<div>
    
  
    <div id="dogsBox">
      {breed.breed.map(dog =>(
          <Dog 
          name = {dog.name}
          img = {dog.img}
          temperaments = {dog.temperaments?.split(", ")}
          id = {dog.id}
          key = {dog.id}
          />
          
          ))
        }
      
    </div>
    
  </div>)
};


function mapStateToprops(state){
    return{
        breed: state,
    };
};


export default connect(mapStateToprops, null)(Dogs);