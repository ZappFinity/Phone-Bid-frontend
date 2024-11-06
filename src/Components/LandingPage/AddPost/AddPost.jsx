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
  const [back_video_recording, setBackVd] = useState("");
  const [front_video_recording, setFrontVd] = useState("");
  const [battery, setBattery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [card_slot, setCardSlot] = useState("");
  const [back_flash, setBackFlash] = useState("");
  const [processor, setProcessor] = useState("");
  const [bluetooth, setBlueTooth] = useState("");
  const [is_new, setNewMobile] = useState("");
  const [front_flash, setFrontFlash] = useState("");
  const [sim_support, setSimSupport] = useState("");
  const [screen_size, setScreenSize] = useState("");
  const [screen_type, setScreenType] = useState("");
  const [backCamera, setBackCamera] = useState("");
  const [front_camera, setFrontCamera] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [phone_weight, setPhoneWeight] = useState("");
  const [phone_dimensions, setPhoneDimension] = useState("");
  const [internal_memory, setInternalMemory] = useState("");
  const [operating_system, setOperatingSystem] = useState("");
  const [screen_resolution, setScreenResolution] = useState("");
  const [screen_protection, setScreenProtection] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [warning, setWarning] = useState(false);
  const [is_for_bid, setIsForBid] = useState(false);
  const [bid_starting_price, setBidStartingPrice] = useState("");

  const handleCheckboxChange = (e) => {
    setIsForBid(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^-?\d*\.?\d*$/.test(lat) || lat === "") {
      setWarning(true);
      return;
    }
    if (!/^-?\d*\.?\d*$/.test(lng) || lng === "") {
      setWarning(true);
      return;
    }

    try {
      let item = {
        name,
        gpu,
        nfc,
        wifi,
        fourG,
        FiveG,
        radio,
        threeg,
        memory,
        back_video_recording,
        card_slot,
        back_flash,
        processor,
        front_video_recording,
        price,
        battery,
        ram,
        imageUrl,
        operating_system,
        screen_resolution,
        screen_protection,
        internal_memory,
        bluetooth,
        is_new,
        front_flash,
        sim_support,
        screen_size,
        phone_dimensions,
        phone_weight,
        release_date,
        front_camera,
        backCamera,
        screen_type,
        lat,
        lng,
        is_for_bid,
        bid_starting_price,
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
        setScreenProtection(""),
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
      setLat("");
      setLng("");
      setBidStartingPrice("");
      setIsForBid(false);
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
            <form onSubmit={handleSubmit}>
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
                  <input
                    type="number"
                    class="form-control"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Release Date</label>
                  <input
                    type="date"
                    class="form-control"
                    name="release_date"
                    value={release_date}
                    onChange={(e) => setReleaseDate(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Sim Support</label>
                  <input
                    type="text"
                    class="form-control"
                    name="sim_support"
                    value={sim_support}
                    onChange={(e) => setSimSupport(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Operating System</label>
                  <input
                    type="text"
                    class="form-control"
                    name="operating_system"
                    value={operating_system}
                    onChange={(e) => setOperatingSystem(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Phone Wieght</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone_weight"
                    value={phone_weight}
                    onChange={(e) => setPhoneWeight(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Phone Dimensions</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone_dimensions"
                    value={phone_dimensions}
                    onChange={(e) => setPhoneDimension(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Screen Size</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_size"
                    value={screen_size}
                    onChange={(e) => setScreenSize(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Screen Type</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_resolution"
                    value={screen_resolution}
                    onChange={(e) => setScreenResolution(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Screen Resolution</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_type"
                    value={screen_type}
                    onChange={(e) => setScreenType(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Screen Protection</label>
                  <input
                    type="text"
                    class="form-control"
                    name="screen_protection"
                    value={screen_protection}
                    onChange={(e) => setScreenProtection(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Internal Memory</label>
                  <input
                    type="text"
                    class="form-control"
                    name="internal_memory"
                    value={internal_memory}
                    onChange={(e) => setInternalMemory(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Ram</label>
                  <input
                    type="text"
                    class="form-control"
                    name="ram"
                    value={ram}
                    onChange={(e) => setRam(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Card Slot</label>
                  <input
                    type="text"
                    class="form-control"
                    name="card_slot"
                    value={card_slot}
                    onChange={(e) => setCardSlot(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">Processor</label>
                  <input
                    type="text"
                    class="form-control"
                    name="processor"
                    value={processor}
                    onChange={(e) => setProcessor(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">GPU</label>
                  <input
                    type="text"
                    class="form-control"
                    name="gpu"
                    value={gpu}
                    onChange={(e) => setGpu(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">Battery</label>
                  <input
                    type="number"
                    class="form-control"
                    name="battery"
                    value={battery}
                    onChange={(e) => setBattery(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Front Camera</label>
                  <input
                    type="text"
                    class="form-control"
                    name="front_camera"
                    value={front_camera}
                    onChange={(e) => setFrontCamera(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Front Flash</label>
                  <input
                    type="text"
                    class="form-control"
                    name="front_flash"
                    value={front_flash}
                    onChange={(e) => setFrontFlash(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Front Video Recording</label>
                  <input
                    type="text"
                    class="form-control"
                    name="front_video_recording"
                    value={front_video_recording}
                    onChange={(e) => setFrontVd(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label for="">Back Camera</label>
                  <input
                    type="text"
                    class="form-control"
                    name="back_camera"
                    value={backCamera}
                    onChange={(e) => setBackCamera(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Back Flash</label>
                  <input
                    type="text"
                    class="form-control"
                    name="back_flash"
                    value={back_flash}
                    onChange={(e) => setBackFlash(e.target.value)}
                  />
                </div>
                <div class="col-md-4">
                  <label for="">Back Video Recording</label>
                  <input
                    type="text"
                    class="form-control"
                    name="back_video_recording"
                    value={back_video_recording}
                    onChange={(e) => setBackVd(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Bluetooth</label>
                  <input
                    type="text"
                    class="form-control"
                    name="bluetooth"
                    value={bluetooth}
                    onChange={(e) => setBlueTooth(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">3G</label>
                  <input
                    type="text"
                    class="form-control"
                    name="3G"
                    value={threeg}
                    onChange={(e) => setThreeG(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">4G/LTE</label>
                  <input
                    type="text"
                    class="form-control"
                    name="4G/LTE"
                    value={fourG}
                    onChange={(e) => setFourG(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">5G</label>
                  <input
                    type="text"
                    class="form-control"
                    name="5G"
                    value={FiveG}
                    onChange={(e) => setFiveG(e.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="">Radio</label>
                  <input
                    type="text"
                    class="form-control"
                    name="radio"
                    value={radio}
                    onChange={(e) => setRadio(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">Wi-Fi</label>
                  <input
                    type="text"
                    class="form-control"
                    name="wifi"
                    value={wifi}
                    onChange={(e) => setWifi(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">NFC</label>
                  <input
                    type="text"
                    class="form-control"
                    name="nfc"
                    value={nfc}
                    onChange={(e) => setNfc(e.target.value)}
                  />
                </div>
                <div class="col-md-3">
                  <label for="">Is this a new mobile?</label>
                  <select
                    name="is_new"
                    class="form-control"
                    value={is_new}
                    onChange={(e) => setNewMobile(e.target.value)}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="">Latitude</label>
                  <input
                    type="number"
                    class="form-control"
                    name="latitude"
                    placeholder="12.3435"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                  />
                  {warning && (
                    <p style={{ color: "red" }}>
                      Please enter a valid number for latitude.
                    </p>
                  )}
                </div>
                <div class="col-md-6">
                  <label for="">Longitude</label>
                  <input
                    type="number"
                    class="form-control"
                    name="longitude"
                    placeholder="12.3435"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                  />
                  {warning && (
                    <p style={{ color: "red" }}>
                      Please enter a valid number for{" "}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center mt-3">
                  <label className="me-2">Is this for Bidding</label>
                  <input type="checkbox" onChange={handleCheckboxChange} />
                </div>

                {is_for_bid && (
                  <div className="col-md-6">
                    <label>Bidding Starting</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setBidStartingPrice(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div class="col-md-3">
                <button className="btn greenColor mt-3 text-white">
                  Submit
                </button>
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
