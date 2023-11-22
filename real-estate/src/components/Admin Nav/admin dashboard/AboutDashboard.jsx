import React from 'react';
import './aboutDashboard.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function AboutDashboard() {
  return (
  <>
             <div className="aboutHeader">
             <h4>About Page Image and Paragraph</h4>
             </div>
        <div className="about">
          
            <div className="img1">

            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Image</Card.Title>
                    <input type="file" /><br />
                    <Button variant="primary">Save</Button>
                </Card.Body>
            </Card>

            </div>

            <div className="writeup">

            <Card>
                <Card.Body>
                <Card.Title>Paragraph</Card.Title>
                <form action="" method="post">
                    <textarea type='text'/>
                    <div className="form-buttons">
                        <Button>Edit</Button>
                        <Button variant='success'>Save</Button>
                    </div>
                </form>
                </Card.Body>
            </Card>
            </div>
        </div>
  </>
  )
}
