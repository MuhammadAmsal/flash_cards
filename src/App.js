import { useState } from "react";
import './App.css'

function App() {
  const allCardsData = [
    {
      defaultShow: "What language is React  based on",
      hoverText: "Javascript"
    },
    {
      defaultShow:"How to give components memory?",
      hoverText:  "useState Hook"
    },
    {
      defaultShow: "what's is the name of the syntax we used to describe a UI in React?",
      hoverText: "JSX"
    }, {
      defaultShow: "How to pass data from parent to child components?",
      hoverText: "Through Props"
    }, {
      defaultShow: "Which Language is called Object-Oriented Language?",
      hoverText: "Javascript"
    }, {
      defaultShow: "Why so Javascript and Java have similar name?",
      hoverText: "Javascript's syntax is loosely based on Java's"
    } 
  ];

  const [cardsData,setCardsData]=useState(allCardsData)


  function mouseOverHandler(index){
     
    const updatedData=[...cardsData]
    updatedData[index].defaultShow=allCardsData[index].hoverText
    setCardsData(updatedData)
  }
  function mouseLeaveHandler(){
     
    setCardsData(allCardsData)
  }

return (
<>
<div className="container" >
<div className="wrapper" >

{
  cardsData.map((data,index)=>(
    <div className="cards" key={index} onMouseOver={()=>{
      mouseOverHandler(index)
    }} onMouseLeave={()=>{
      mouseLeaveHandler(index)
    }} > <p>  {data.defaultShow}  </p> </div> 
  ))
}

</div>


</div>


</>


)



}

 

export default App;