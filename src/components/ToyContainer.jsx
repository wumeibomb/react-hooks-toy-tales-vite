import React, {useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([])
  const URL = "http://localhost:3001/toys"

     function fetchToyData() {
      fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then (data => {setToys(data);})
      .catch(error => { console.log(error) })
  }

  useEffect(()=> {
    fetchToyData()
  }, [])

  return (
    <div id="toy-collection">{
      <ToyCard />
    }</div>
  );
}

export default ToyContainer;
