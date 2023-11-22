import React from 'react';
import './dashboard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    // <!-- ======================= Cards ================== -->
    <>
    
    <div className="head"><h1>Dashboard</h1></div>
    <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">16</div>
                        <div class="cardName">PROPERTIES</div>
                        <span>Available properties</span>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">8</div>
                        <div class="cardName">AGENTS</div>
                        <span>Available Agents</span>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">6</div>
                        <div class="cardName">CATEGORIES</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                {/* <div class="card">
                    <div>
                        <div class="numbers">$7,842</div>
                        <div class="cardName">Earning</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> */}
    </div>

            <div className="dashboardPages">
               <h2 className='pages'>Pages</h2>
              <div className="cardBox">
                
              <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Home Page</Card.Title>
                        <Link to={'homeDashBoard'}>
                        <Button variant="primary">View Home</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>About Page</Card.Title>
                        <Link to={'aboutDashboard'}>
                        <Button variant="primary">View About</Button>
                        </Link>
                        
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Property Page</Card.Title>
                        <Link to={'addProperty'}>
                        <Button variant="primary">Add Property</Button>
                        </Link>
                       
                    </Card.Body>
                </Card>
{/* 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Contacts Page</Card.Title>
                        <Button variant="primary">View Contact Page</Button>
                    </Card.Body>
                </Card> */}
              </div>
            </div>
    
    
    
    </>
            
  )
}
