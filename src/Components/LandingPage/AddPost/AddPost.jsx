import React, { useState } from "react";
import End from "../End";
import Navbar from "../Navbar";

const AddPost = () => {
  const [gpu, setGpu] = useState("");
  const [nfc, setNfc] = useState("");
  const [ram, setRam] = useState("");
  const [name, setName] = useState("");
  const [wifi, setWifi] = useState("");
  const [fourG, setFourG] = useState("");
  const [price, setPrice] = useState("");
  const [FiveG, setFiveG] = useState("");
  const [radio, setRadio] = useState("");
  const [threeg, setThreeG] = useState("");
  const [memory, setMemory] = useState("");
  const [backvd, setBackVd] = useState("");
  const [frontvd, setFrontVd] = useState("");
  const [battery, setBattery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cardSlot, setCardSlot] = useState("");
  const [backFlash, setBackFlash] = useState("");
  const [processor, setProcessor] = useState("");
  const [bluetooth, setBlueTooth] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [frontFlash, setFrontFlash] = useState("");
  const [simsupport, setSimSupport] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [screenType, setScreenType] = useState("");
  const [backCamera, setBackCamera] = useState("");
  const [frontCamera, setFrontCamera] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [phoneWeight, setPhoneWeight] = useState("");
  const [phoneDimension, setPhoneDimension] = useState("");
  const [internalMemory, setInternalMemory] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [screenResolution, setScreenResolution] = useState("");
  const [screenProtection, setScreenProtection] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let item = { name,
        gpu,
        nfc,
        wifi,
        fourG,
        FiveG,
        radio,
        threeg,
        memory,
        backvd,
        cardSlot,
        backFlash,
        processor,
        frontvd, price, battery, ram, imageUrl, operatingSystem, screenResolution,screenProtection,
        internalMemory,
        bluetooth,
        newMobile,
        frontFlash,
        simsupport,
        screenSize,
        phoneDimension,
        phoneWeight,
        releaseDate,
        frontCamera,
        backCamera,
        screenType,
       };

      console.log(item);

      const tokenData = localStorage.getItem("token");
      if (!tokenData) {
        return;
      }
      const token = JSON.parse(tokenData);
      let url = `http://127.0.0.1:8000/api/mobile/used/store`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();
      if (result.success === true) {
        console.log(result);
        alert("Mobile Added Successfully");
        window.location.reload();
      } else {
        alert("Mobile not added");
      }
      console.log("Post successful:", result);

      // Reset form fields and close the modal
      setName("");
      setPrice("");
      setBattery("");
      setMemory("");
      setRam("");
      setImageUrl("");
      setGpu("");
      setNfc(""),
      setWifi(""),
      setFourG(""),
      setFiveG(""),
      setRadio(""),
      setThreeG(""),
      setInternalMemory(""),
      setBackVd(""),
      setCardSlot(""),
      setBackFlash(""),
      setProcessor(""),
      setFrontVd(""), 
      setOperatingSystem(""), 
      setScreenResolution(""),
      screenProtection(""),
      setBlueTooth(""),
      setNewMobile(""),
      setFrontFlash(""),
      setSimSupport(""),
      setScreenSize(""),
      setPhoneDimension(""),
      setPhoneWeight(""),
      setReleaseDate(""),
      setFrontCamera(""),
      setBackCamera(""),
      setScreenType(""),
      setShowModal(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="greyColor p-5">
        <div className="bg-white p-5">
          <h4> Post Your Ad Now</h4>
          <div class="container-fluid">
            <form onClick={handleSubmit}>
              <div class="row">
                <div class="col-md-6">
                  <label for="">Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="col-md-6">
                  <label for="">Image</label>
                  <input
                    type="text"
                    class="form-control"
                    name="image"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Price</label>
                  <input type="text" class="form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Release Date</label>
                  <input type="text" class="form-control" name="release_date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Sim Support</label>
                  <input type="text" class="form-control" name="sim_support" value={simsupport} onChange={(e) => setSimSupport(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Operating System</label>
                  <input
                    type="text"
                    class="form-control"
                    name="operating_system"
                    value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Phone Wieght</label>
                  <input type="text" class="form-control" name="phone_weight" value={phoneWeight} onChange={(e) => setPhoneWeight(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Phone Dimensions</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone_dimensions"
                    value={phoneDimension} onChange={(e) => setPhoneDimension(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Screen Size</label>
                  <input type="text" class="form-control" name="screen_size" value={screenSize} onChange={(e) => setScreenSize(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Screen Type</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_resolution"
                    value={screenResolution} onChange={(e) => setScreenResolution(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Screen Resolution</label>
                  <input type="text" class="form-control" name="screen_type" value={screenType} onChange={(e) => setScreenType(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Screen Protection</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_protection"
                    value={screenProtection} onChange={(e) => setScreenProtection(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Internal Memory</label>
                  <input
                    type="text"
                    class="form-control"
                    name="internal_memory"
                    value={internalMemory} onChange={(e) => setInternalMemory(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Ram</label>
                  <input type="text" class="form-control" name="ram" value={ram} onChange={(e) => setRam(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Card Slot</label>
                  <input type="text" class="form-control" name="card_slot" value={cardSlot} onChange={(e) => setCardSlot(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">Processor</label>
                  <input type="text" class="form-control" name="processor" value={processor} onChange={(e) => setProcessor(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">GPU</label>
                  <input type="text" class="form-control" name="gpu" value={gpu} onChange={(e) => setGpu(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">Battery</label>
                  <input type="text" class="form-control" name="battery" value={battery} onChange={(e) => setBattery(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Front Camera</label>
                  <input type="text" class="form-control" name="front_camera" value={frontCamera} onChange={(e) => setFrontCamera(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Front Flash</label>
                  <input type="text" class="form-control" name="front_flash" value={frontFlash} onChange={(e) => setFrontFlash(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Front Video Recording</label>
                  <input
                    type="text"
                    class="form-control"
                    name="front_video_recording"
                    value={frontvd} onChange={(e) => setFrontVd(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Back Camera</label>
                  <input type="text" class="form-control" name="back_camera" value={backCamera} onChange={(e) => setBackCamera(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Back Flash</label>
                  <input type="text" class="form-control" name="back_flash" value={backFlash} onChange={(e) => setBackFlash(e.target.value)}/>
                </div>
                <div class="col-md-4">
                  <label for="">Back Video Recording</label>
                  <input
                    type="text"
                    class="form-control"
                    name="back_video_recording"
                    value={backvd} onChange={(e) => setBackVd(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Bluetooth</label>
                  <input type="text" class="form-control" name="bluetooth" value={bluetooth} onChange={(e) => setBlueTooth(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">3G</label>
                  <input type="text" class="form-control" name="3G" value={threeg} onChange={(e) => setThreeG(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">4G/LTE</label>
                  <input type="text" class="form-control" name="4G/LTE" value={fourG} onChange={(e) => setFourG(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">5G</label>
                  <input type="text" class="form-control" name="5G" value={FiveG} onChange={(e) => setFiveG(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Radio</label>
                  <input type="text" class="form-control" name="radio" value={radio} onChange={(e) => setRadio(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">Wi-Fi</label>
                  <input type="text" class="form-control" name="wifi" value={wifi} onChange={(e) => setWifi(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">NFC</label>
                  <input type="text" class="form-control" name="nfc" value={nfc} onChange={(e) => setNfc(e.target.value)}/>
                </div>
                <div class="col-md-3">
                  <label for="">Is this a new mobile?</label>
                  <select name="is_new" class="form-control" value={newMobile} onChange={(e) => setNewMobile(e.target.value)}>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <button className="btn greenColor mt-3 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <End />
    </>
  );
};

export default AddPost;
