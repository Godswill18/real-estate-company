import React, { useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './homeDashboard.css'
import AboutDashboard from './AboutDashboard';
import CardGroup from 'react-bootstrap/CardGroup';

export default function HomeDashboard() {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const imgname = event.target.files[0].name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            img,
            (maxSize - img.width) / 2,
            (maxSize - img.height) / 2
          );
          canvas.toBlob(
            (blob) => {
              const file = new File([blob], imgname, {
                type: "image/png",
                lastModified: Date.now(),
              });
  
              console.log(file);
              setImage(file);
            },
            "image/jpeg",
            0.8
          );
        };
      };
    };
  
    const handleUploadButtonClick = (file) => {
      var myHeaders = new Headers();
      const token = "adhgsdaksdhk938742937423";
      myHeaders.append("Authorization", `Bearer ${token}`);
  
      var formdata = new FormData();
      formdata.append("file", file);
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
  
      fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(JSON.parse(result));
          const profileurl = JSON.parse(result);
          setImage(profileurl.img_url);
        })
        .catch((error) => console.log("error", error));
    };
  
    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };
    
  return (
    <div className='homeDash'>
        <h2>Home Page</h2>
        <div className="first">
            <div className="h1Home">
                
            <Card>
                <Card.Body>
                <form action="" method="post">
                <Card.Title>Welcome Header</Card.Title>
                    <textarea type='text' maxLength={'20'}/>
                    <div className="form-buttons">
                        <Button>Edit</Button>
                        <Button variant='success'>Save</Button>
                    </div>
                </form>
                </Card.Body>
            </Card>
            </div>

            <div className="h1Home">
                
                <Card>
                    <Card.Body>
                    <form action="" method="post">
                    <Card.Title>Welcome Paragraph</Card.Title>
                        <textarea type='text' maxLength={'30'}/>
                        <div className="form-buttons">
                            <Button>Edit</Button>
                            <Button variant='success'>Save</Button>
                        </div>
                    </form>
                    </Card.Body>
                </Card>
                </div>

            <div className="slideHeader">
            <h4>Slides</h4>
            </div>
            <div className="sliderHome">
                
                <div className="slide1">
                <Card  >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>First slide</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text> */}
                        <input type="file" /><br />
                        <Button variant="success">Save</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="slide2">
                <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Second Slide</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text> */}
                        <input type="file" /> <br />
                        <Button variant="success">Save</Button>
                    </Card.Body>
                </Card>
                </div>
                
            </div>
        </div>
        
        <AboutDashboard/>
  
        <div className="video">
            <h4>Video Upload</h4>
            <div className="videoupload">
                <Card>
                    <Card.Body>
                    <Card.Title>Video</Card.Title>
                    <form action="" method="post">
                        <label htmlFor="">Video url: </label>
                        <input type='text'/>
                        <div className="form-buttons">
                           <input type="file" />
                            <Button variant='success'>Save</Button>
                        </div>
                    </form>
                    </Card.Body>
                </Card>
                
            </div>

        </div>
        <h3 className='ca'>Contact Agent</h3>
        <div className="agentContact">
          
            <div className="contactPicture">
            <label htmlFor="image-upload-input" className="image-upload-label">
                {image ? image.name : "Choose an image"}
            </label>
            <Card onClick={handleClick} style={{ cursor: "pointer"  }}>
                  {image ? (
                    <Card.Img variant="top" src={URL.createObjectURL(image)}  alt='upload image'  className=""/>
                  ) : (
                 <img src="./photo.png" alt=".jpeg" className="img-display-before" />
                  )}  
                    <Card.Body>
                        <Card.Title>Contact agent</Card.Title>
                        <input id="image-upload-input"
                         type="file"
                         onChange={handleImageChange}
                         ref={hiddenFileInput}
                        /> <br />
                        <Button variant="success"
                         onClick={handleUploadButtonClick}>
                         Save
                         </Button>
                    </Card.Body>
                </Card>
            </div>

            
            <div className="conAgent">
                
                <Card >
                    <Card.Body>
                    <form action="" method="post">
                    <Card.Title>Contact Agent Paragraph</Card.Title>
                        <textarea type='text' maxLength={'50'}/>
                        <div className="form-buttons">
                            <Button>Edit</Button>
                            <Button variant='success'>Save</Button>
                        </div>
                    </form>
                    </Card.Body>
                </Card>
                </div>
            </div>

{/* <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src="./photo.png" alt="upload image" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
    */}
        <div className="agents">
            <h3>Our Agents</h3>
            <div className="card">
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Agent 1</Card.Title>
                <Card.Text>
                    <input type='text' placeholder='Agent Name'/>
                </Card.Text>
                </Card.Body>
            <input type='file'/> <Button variant='success'>Save</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Agent 2</Card.Title>
                <Card.Text>
                    <input type='text' placeholder='Agent Name'/>
                </Card.Text>
                </Card.Body>
            <input type='file'/> <Button variant='success'>Save</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Agent 3</Card.Title>
                <Card.Text>
                    <input type='text' placeholder='Agent Name'/>
                </Card.Text>
                </Card.Body>
            <input type='file'/> <Button variant='success'>Save</Button>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Agent 4</Card.Title>
                <Card.Text>
                    <input type='text' placeholder='Agent Name'/>
                </Card.Text>
                </Card.Body>
            <input type='file'/> <Button variant='success'>Save</Button>
            </Card>
            </CardGroup>
    
            </div>
        </div>
      
    </div> 
  )
}
