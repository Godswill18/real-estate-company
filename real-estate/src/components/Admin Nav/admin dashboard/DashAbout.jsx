import React from 'react'
import AboutDashboard from './AboutDashboard'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './dashAbout.css'

export default function DashAbout() {
  return (
    <>
      <div className="aboutPage">
        <h1>About Us Dashboard</h1>
        <div className="abParagraph1">
            <Card>
                <Card.Body>
                <Card.Title>About Us</Card.Title>
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
        
        <div className="aim">
          <h3>Goals</h3>
        <div className="abGoal">
            <div className="goal1">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Vision</Card.Title>
                    <Card.Text>
                    <textarea maxLength={'50'}/>
                    </Card.Text>
                    <input type="file" />
                    <Button variant="success">Save</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="goal2">
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Mission</Card.Title>
                    <Card.Text>
                  <textarea maxLength={'50'}/>
                    </Card.Text>
                    <input type="file" />
                    <Button variant="success">Save</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="goal3">
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Our Core Values</Card.Title>
                    <Card.Text>
                    <textarea maxLength={'50'}/>
                    </Card.Text>
                    <input type="file" />
                    <Button variant="success">Save</Button>
                </Card.Body>
            </Card>
            </div>

        </div>
        </div>
        <div className="abParagraph2">
            <AboutDashboard/>
        </div>
        
      </div>
    </>
  )
}
