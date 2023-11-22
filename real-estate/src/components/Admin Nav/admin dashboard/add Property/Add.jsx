import React, { useState } from 'react'
import './add.css';
import Card from 'react-bootstrap/Card';
import FileUploader from '../../../file Upload/FileUpload';



export default function Add() {
  
    const currencyMask = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(\d{2})$/, "$1. $2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
        e.target.value = value;
        // You may want to use the state to store the formatted value
        // setState(value);
      };

      // Checkbox Function
      const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false
      });
    
      const handleCheckboxChange = (checkboxName) => {
        setCheckboxes({
          ...checkboxes,
          [checkboxName]: !checkboxes[checkboxName],
        });
      };

  return (
    <>
      <div className="addproperty">
        <h2>Add Property</h2>
        <form action="" method="post">
            <div className="basicInfo">
            <Card>
                <Card.Header><span>Basic</span> information</Card.Header>
                <Card.Body>
                   <input type='text' placeholder='Property Name'/>
                   <select name="Property type" id="">
                    <option value="0">Property Type</option>
                    <option value="1">Appartment</option>
                    <option value="2">Villa</option>
                    <option value="3">Short Let</option>
                    <option value="4">Land</option>
                    <option value="5">Shop</option>
                    <option value="6">Home</option>
                    <option value="7">Office</option>
                    <option value="8">Hall</option>
                   </select>
                   <input type='text' placeholder='Location / address'/>
                   <textarea name="Property Description" placeholder='Property Description' id="" cols="50" rows="5"></textarea>
                </Card.Body>
            </Card>
            </div>
            <div className="propertyFor">
            <Card>
                <Card.Header><span>Property</span> For</Card.Header>
                <Card.Body>
                    <select name="status">
                        <option value="0">Property Status</option>
                        <option value="1">For Sale</option>
                        <option value="2">For Rent</option>
                    </select>
                    
                   <input type="text" className='price' placeholder='Price ₦' name='price' onChange={currencyMask} />
                   <textarea name="Property Description" placeholder='Property Address' id="" cols="50" rows="5"></textarea>
                   <br />
                   <input style={{width: '100px'}} type="number" placeholder='Bedrooms'/>
                   <input style={{width: '100px'}} type="number" placeholder='Square ft' />
                   <input type="text" placeholder='Car Parking' />

                </Card.Body>
            </Card>
            </div>
            <div className="dimensions">
            <Card>
                <Card.Header><span>Dimensions</span></Card.Header>
                <Card.Body>
                   <input type="text" placeholder='Dining Room' />
                    
                   <input type="text" placeholder='Kitchen' />
                   <input type="text" placeholder='Living Room' />
                   <input type="text" placeholder='Monster Bedroom'/>
                   <input type="text" placeholder='Bedroom' />
                   <input type="text" placeholder='Toilet' />

                </Card.Body>
            </Card>
            </div>
            <div className="generalAmenities">
            <Card>
                <Card.Header><span>General</span>Amenities</Card.Header>
                <Card.Body>
                <div className="checkbox-list">
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox1}
                    onChange={() => handleCheckboxChange('checkbox1')}
                    />
                    Swimming pool
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox2}
                    onChange={() => handleCheckboxChange('checkbox2')}
                    />
                    Air conditioning
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox3}
                    onChange={() => handleCheckboxChange('checkbox3')}
                    />
                   Internet
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox4}
                    onChange={() => handleCheckboxChange('checkbox4')}
                    />
                    Balcony
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox5}
                    onChange={() => handleCheckboxChange('checkbox5')}
                    />
                    Cable TV
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox6}
                    onChange={() => handleCheckboxChange('checkbox6')}
                    />
                   Computer
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox7}
                    onChange={() => handleCheckboxChange('checkbox7')}
                    />
                    Dishwasher
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={checkboxes.checkbox8}
                    onChange={() => handleCheckboxChange('checkbox8')}
                    />
                    Gym
                </label>
                </div>
                <div className="fileUpload">
                    <FileUploader/>
                </div>

                </Card.Body>
            </Card>
            </div>
            <button className='submitbtn'>Submit</button> <button className='cancelbtn'>Cancel</button>
        </form>
      </div>
    </>
  )
}
