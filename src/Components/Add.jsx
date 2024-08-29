import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';



function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""})
  console.log(uploadVideo);

  const getYoutubeLink=(e)=>{
    const{value}=e.target
    if(value.includes("v=")){

      let VID= value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${VID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
    
  }

  const handleAdd= async()=>{

    const{id,name,url,link}=uploadVideo

    if(!id || !name || !url || !link){
      alert("please fill the missing fields")
    }else{

      // video upload to json server

      const result=await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<=300){
        alert("video upload")
        handleClose()

        // empty field

        setUploadVideo({

          id:"",name:"",url:"",link:""

        })
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
      
    }

  }
  
// https://www.youtube.com/embed/rOw8fKZ2rps?si=Qpvfq_qlfpMES9Db
// https://www.youtube.com/watch?v=rOw8fKZ2rps&list=RDMy_S68DAAPg&index=2
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      
      <div className="d-flex mb-5 mt-5 align-items-center">
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2"></i></button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>
          <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id"  onChange={(e)=>setUploadVideo(
          {...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Name" className='mb-3'>
        <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideo(
          {...uploadVideo,name:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Image Url" className='mb-3' >
        <Form.Control type="text" placeholder="Image Url"onChange={(e)=>setUploadVideo(
          {...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Video Url" className='mb-3'>
        <Form.Control type="text" placeholder=" Video Url" onChange={getYoutubeLink} />
      </FloatingLabel>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  )
}

export default Add
