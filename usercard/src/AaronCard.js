import React from "react"
import Card from 'react-bootstrap/Card'
import img1 from "../src/images/aaron.jpg"

function AaronCard(props){

  return(
    <div className="AaronCard">
        <img src={props.userCard.avatar_url}/>
      <div className="cardInfo">
        <h2>{props.name}</h2>
        <div>
          <p><b>Type:</b>{props.userCard.type}</p>
          <p><b>Name:</b>{props.userCard.name}</p>
          <p><b>login:</b>{props.userCard.login}</p>
          <p><b>Location:</b>{props.userCard.location}</p>
          <p><b>followers:</b>{props.userCard.followers}</p>
        </div>
      </div>
    </div>
  )




//     {/* <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
    
//   </Card.Body>
// </Card>  */}
     

    

  

}


export default AaronCard