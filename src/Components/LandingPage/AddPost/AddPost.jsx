import React, { useState } from 'react';

const AddPost = ({ showModal, setShowModal }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [battery, setBattery] = useState('');
  const [memory, setMemory] = useState('');
  const [ram, setRam] = useState('');
  const [camera, setCamera] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const handleAddImageUrl = () => {
    const urlInput = document.getElementById('imageUrl');
    if (urlInput.value) {
      setImageUrls((prevUrls) => [...prevUrls, urlInput.value]);
      urlInput.value = ''; // Clear the input field
    }
  };

 

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        let item = {  name,
          price,
          battery,
          memory,
          ram,
          camera,
          images: imageUrls, };  
          
        const tokenData = localStorage.getItem("token");
        if (!tokenData) {
          return;
        }
        const token = JSON.parse(tokenData);
        let url = `http://127.0.0.1:8000/api/mobile/used/store`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(item),
        });

        const result = await response.json();
        console.log('Post successful:', result);
    
        // Reset form fields and close the modal
        setName('');
        setPrice('');
        setBattery('');
        setMemory('');
        setRam('');
        setCamera('');
        setImageUrls([]);
        setShowModal(false);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    
  return (
    <div className={`modal fade ${showModal ? 'show d-block' : ''}`} style={{ paddingRight: showModal ? '16px' : '0' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Post</h5>
            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="battery" className="form-label">Battery</label>
                <input
                  type="text"
                  className="form-control"
                  id="battery"
                  placeholder="Enter battery"
                  value={battery}
                  onChange={(e) => setBattery(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="memory" className="form-label">Memory</label>
                <input
                  type="text"
                  className="form-control"
                  id="memory"
                  placeholder="Enter memory"
                  value={memory}
                  onChange={(e) => setMemory(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ram" className="form-label">Ram</label>
                <input
                  type="text"
                  className="form-control"
                  id="ram"
                  placeholder="Enter ram"
                  value={ram}
                  onChange={(e) => setRam(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="camera" className="form-label">Camera</label>
                <input
                  type="text"
                  className="form-control"
                  id="camera"
                  placeholder="Enter camera"
                  value={camera}
                  onChange={(e) => setCamera(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imageUrl" className="form-label">Image</label>
                <input
                  type="url"
                  className="form-control"
                  id="imageUrl"
                  placeholder="Enter image URL"
                />
                <button type="button" className="btn text-white mt-2" style={{ backgroundColor: "#518ecb"}} onClick={handleAddImageUrl}>
                  Add Image URL
                </button>
                {imageUrls.length > 0 && (
                  <div className="mt-2">
                    <small className="text-muted">{imageUrls.length} URLs added</small>
                    <ul>
                      {imageUrls.map((url, index) => (
                        <li key={index}>{url}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button type="submit" className="btn text-white" style={{backgroundColor: "#52AB98"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;


