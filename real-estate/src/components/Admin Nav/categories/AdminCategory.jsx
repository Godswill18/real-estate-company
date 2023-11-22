import React from 'react';
import Card from 'react-bootstrap/Card';
import './adminCategory.css'

export default function AdminCategory() {
  return (
    <>
     <div className="cHead">
          <h3>All </h3>
      </div>

     <div className="category">
     <div className="categoryCards">
       
       <div className="card1">
       <Card style={{ width: '15rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
             {/* <button></button> */}
         </Card.Body>
       </Card>
       </div>
       <div className="card2">
       <Card style={{ width: '15rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           {/* <Button variant="primary">Go somewhere</Button> */}
         </Card.Body>
       </Card>
       </div>
       <div className="card3">
       <Card style={{ width: '15rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           {/* <Button variant="primary">Go somewhere</Button> */}
         </Card.Body>
       </Card>
       </div>
       <div className="card4">
       <Card style={{ width: '15rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           {/* <Button variant="primary">Go somewhere</Button> */}
         </Card.Body>
       </Card>
       </div>
       <div className="card5">
       <Card style={{ width: '15rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           {/* <Button variant="primary">Go somewhere</Button> */}
         </Card.Body>
       </Card>
       </div>
      
       
          
     </div>
     </div>
      
    </>
  )
}
