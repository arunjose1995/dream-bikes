import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import "./AdminHomePage.css";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";
import { Card } from "react-bootstrap";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AdminHomePage = () => {
  // ----slidebar open & close usestate------//
  const [slideBar, setSlideBar] = useState(false);

  // -----add new bike popup open & close----//
  const [lgShow, setLgShow] = useState(false);

  // -----alert usestate-----//
  const [AlertField, setAlertField] = useState(false);

  // ---data are valide success----//
  const [success, setSuccess] = useState(false);

  //-------get database data and store in state----//
  const [getDatabase, setGetDatabase] = useState([]);
console.log(getDatabase.get_data);
  //------set edit model popup-----//
  const [editPopup, setEditPopup] = useState(false);
  const [editId, setEditId] = useState("");

  // ----edit alert fields is empty-----//
  const [editAlertField, setEditAlertField] = useState(false);

  // -----set delete confirm modal-----//

  const [delertConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  // ---set state for morinformation details click-----------//
  const [moreDetail, setMoreDetail] = useState("");
  const [moreModalDetails, setMoreModalDetails] = useState(false);

  //  -----search method------//
  const [search, setSearch] = useState("");

  // ------collect add bike details-----//
  const [bikeImage, setBikeImage] = useState("ajay");
  const [modelName, setModelName] = useState("");
  const [modelPrice, setModelPrice] = useState("");
  const [engine, setEngine] = useState("");
  const [power, setPower] = useState("");
  const [torque, setTorque] = useState("");
  const [color, setColor] = useState("");
  const [tyreType, setTyreType] = useState("Tube");
  const [breaks, setBreaks] = useState("Double Disc");
  const [mileage, setMilege] = useState("");
  const [fuelCapacity, setFuelCapacity] = useState("");
  const [gearBox, setGearBox] = useState("No Gear");
  const [bodyType, setBodyType] = useState("Standard");

  // ------collect Edit onchange bike details-----//
  const [newBikeImage, setNewBikeImage] = useState("ajay");
  const [newModelName, setNewModelName] = useState("");
  const [newModelPrice, setNewModelPrice] = useState("");
  const [newEngine, setNewEngine] = useState("");
  const [newPower, setNewPower] = useState("");
  const [newTorque, setNewTorque] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newTyreType, setNewTyreType] = useState("Tube");
  const [newBreaks, setNewBreaks] = useState("Double Disc");
  const [newMileage, setNewMilege] = useState("");
  const [newFuelCapacity, setNewFuelCapacity] = useState("");
  const [newGearBox, setNewGearBox] = useState("No Gear");
  const [newBodyType, setNewBodyType] = useState("Standard");

  // ------collect default value edit bike details-----//
  const [defaultBikeImage, setDefaultBikeImage] = useState("ajay");
  const [defaultModelName, setDefaultModelName] = useState("");
  const [defaultModelPrice, setDefaultModelPrice] = useState("");
  const [defaultEngine, setDefaultEngine] = useState("");
  const [defaultPower, setDefaultPower] = useState("");
  const [defaultTorque, setDefaultTorque] = useState("");
  const [defaultColor, setDefaultColor] = useState("");
  const [defaultTyreType, setDefaultTyreType] = useState("Tube");
  const [defaultBreaks, setDefaultBreaks] = useState("Double Disc");
  const [defaultMileage, setDefaultMileage] = useState("");
  const [defaultFuelCapacity, setDefaultFuelCapacity] = useState("");
  const [defaultGearBox, setDefaultGearBox] = useState("No Gear");
  const [defaultBodyType, setDefaultBodyType] = useState("Standard");

  const handleSlideBar = () => {
    setSlideBar((s) => !s);
  };

  const ChangeImgUrl = (img) => {
    const reader = new FileReader();

    reader.readAsDataURL(img[0]);

    reader.addEventListener("load", () => {
      console.log(reader.result);
      setBikeImage(reader.result);
    });
  };

  const modalClose = () => {
    setLgShow(false);
    setSuccess(false);
    setBikeImage("ajay");
    setModelName("");
    setModelPrice("");
    setEngine("");
    setPower("");
    setTorque("");
    setColor("");
    setTyreType("Tube");
    setBreaks("Double Disc");
    setMilege("");
    setFuelCapacity("");
    setGearBox("No Gear");
    setBodyType("Standard");
  };
  useEffect(() => {
    const GetUrl = "http://localhost:5000/admin/get/data";
    const Addurl = "http://localhost:5000/admin/add/data";
    const BikeDetails = {
      Bike_image: bikeImage,
      Model_Name: modelName,
      Model_Price: modelPrice,
      Engine: engine,
      Power: power,
      Torque: torque,
      Color: color,
      Tyre_type: tyreType,
      Bracks: breaks,
      Milleage: mileage,
      Fuel_Capacity: fuelCapacity,
      Gear_Box: gearBox,
      Body_Type: bodyType,
    };
    axios
      .get(GetUrl)
      .then((res) => setGetDatabase(res.data.get_data))
      .catch((err) => console.log(err));

    if (success) {
      axios
        .post(Addurl, BikeDetails)
        .then((res) => {
          setSuccess(false);
          setLgShow(false);
          setBikeImage("ajay");
          setModelName("");
          setModelPrice("");
          setEngine("");
          setPower("");
          setTorque("");
          setColor("");
          setTyreType("Tube");
          setBreaks("Double Disc");
          setMilege("");
          setFuelCapacity("");
          setGearBox("No Gear");
          setBodyType("Standard");
          console.log(res);
        })
        .catch((err) => {
          setSuccess(false);
          console.log(err);
        });
    }
  }, [editPopup, success, search, delertConfirmation]);

  //----- store all datas in database------//

  const handleNewBike = () => {
    if (
      bikeImage !== "" &&
      modelName !== "" &&
      modelPrice !== "" &&
      engine !== "" &&
      power !== "" &&
      torque !== "" &&
      color !== "" &&
      tyreType !== "" &&
      breaks !== "" &&
      mileage !== "" &&
      fuelCapacity !== "" &&
      gearBox !== "" &&
      bodyType !== ""
    ) {
      setAlertField(false);
      setSuccess(true);
    } else {
      console.log("hiii");
      setAlertField(true);
    }
  };

  const MoreDetails = (index) => {
    setMoreDetail(index);
    setMoreModalDetails(true);
  };

  const EditBike = (index1) => {
    console.log(index1);
    setEditPopup(true);
    setEditId(index1);

    // ----set previus value in  edit input box is empty.?----//
    getDatabase.map((item, index) => {
      if (index === index1) {
        setDefaultBikeImage(item.Bike_image);
        setDefaultModelName(item.Model_Name);
        setDefaultModelPrice(item.Model_Price);
        setDefaultEngine(item.Engine);
        setDefaultPower(item.Power);
        setDefaultTorque(item.Torque);
        setDefaultColor(item.Color);
        setDefaultTyreType(item.Tyre_type);
        setDefaultBreaks(item.Bracks);
        setDefaultMileage(item.Milleage);
        setDefaultFuelCapacity(item.Fuel_Capacity);
        setDefaultGearBox(item.Gear_Box);
        setDefaultBodyType(item.Body_Type);
      }
    });
  };

  const UpdatedDetails = () => {
    // ----if onchange input state is empty..? set defaultvalue-----//
    console.log(
      defaultFuelCapacity,
      defaultMileage,
      defaultColor,
      defaultBikeImage,
      defaultEngine,
      defaultGearBox,
      defaultTorque,
      defaultTyreType
    );

    console.log(
      newBikeImage,
      newModelName,
      newModelPrice,
      newEngine,
      newPower,
      newTorque,
      newColor,
      newTyreType,
      newBreaks,
      newMileage,
      newFuelCapacity,
      newGearBox,
      newBodyType
    );

    newBikeImage === "" && setNewBikeImage(defaultBikeImage);
    newModelName === "" && setNewModelName(defaultModelName);
    newModelPrice === "" && setNewModelPrice(defaultModelPrice);
    newEngine === "" && setNewEngine(defaultEngine);
    newPower === "" && setNewPower(defaultPower);
    newTorque === "" && setNewTorque(defaultTorque);
    newColor === "" && setNewColor(defaultColor);
    newTyreType === "" && setNewTyreType(defaultTyreType);
    newBreaks === "" && setNewBreaks(defaultBreaks);
    newMileage === "" && setNewMilege(defaultMileage);
    newFuelCapacity === "" && setNewFuelCapacity(defaultFuelCapacity);
    newGearBox === "" && setNewGearBox(defaultGearBox);
    newBodyType === "" && setNewBodyType(defaultBodyType);

    console.log(
      newBikeImage,
      newModelName,
      newModelPrice,
      newEngine,
      newPower,
      newTorque,
      newColor,
      newTyreType,
      newBreaks,
      newMileage,
      newFuelCapacity,
      newGearBox,
      newBodyType
    );

    // ------update values in database-----//
    if (
      newBikeImage !== "" &&
      newModelName !== "" &&
      newModelPrice !== "" &&
      newEngine !== "" &&
      newPower !== "" &&
      newTorque !== "" &&
      newColor !== "" &&
      newTyreType !== "" &&
      newBreaks !== "" &&
      newMileage !== "" &&
      newFuelCapacity !== "" &&
      newGearBox !== "" &&
      newBodyType !== ""
    ) {
      setEditAlertField(false);
      // setEditPopup(false)
      let checkId = "";

      getDatabase.map((item, index) => {
        return editId === index && (checkId = item._id);
      });
      const UpdateUrl = `http://localhost:5000/admin/edit/${checkId}`;
      const ChangedData = {
        Bike_image: newBikeImage,
        Model_Name: newModelName,
        Model_Price: newModelPrice,
        Engine: newEngine,
        Power: newPower,
        Torque: newTorque,
        Color: newColor,
        Tyre_type: newTyreType,
        Bracks: newBreaks,
        Milleage: newMileage,
        Fuel_Capacity: newFuelCapacity,
        Gear_Box: newGearBox,
        Body_Type: newBodyType,
      };

      axios
        .put(UpdateUrl, ChangedData)
        .then((res) => {
          console.log(res);
          setEditPopup(false);
          setDefaultBikeImage("ajay");
          setDefaultModelName("");
          setDefaultModelPrice("");
          setDefaultEngine("");
          setDefaultPower("");
          setDefaultTorque("");
          setDefaultColor("");
          setDefaultTyreType("Tube");
          setDefaultBreaks("Double Disc");
          setDefaultMileage("");
          setDefaultFuelCapacity("");
          setDefaultGearBox("No Gear");
          setDefaultBodyType("Standard");
          setNewBikeImage("ajay");
          setNewModelName("");
          setNewModelPrice("");
          setNewEngine("");
          setNewPower("");
          setNewTorque("");
          setNewColor("");
          setTyreType("Tube");
          setBreaks("Double Disc");
          setMilege("");
          setFuelCapacity("");
          setGearBox("No Gear");
          setBodyType("Standard");
        })
        .catch((err) => console.log(err), setEditPopup(false));
    } else {
      // setEditAlertField(true);
      console.log("not change");
    }
  };

  const editPopupClose = () => {
    setEditPopup(false);
    setEditId("");
  };

  const DeleteBike = (id) => {
    setDeleteConfirmation(true);
    setDeleteId(id);
    console.log(id);
  };
  const FinalDelete = () => {
    setDeleteConfirmation(false);
    const deleteUrl = `http://localhost:5000/admin/delete/${deleteId}`;
    {
      deleteId !== "" &&
        axios
          .delete(deleteUrl)
          .then((res) => res)
          .catch((err) => console.log(err));
    }
  };

  // search filter for bike
  const bySearch = (user, search) => {
    if (search) {
      console.log(user.Model_Name);
      return user.Model_Name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (Asset, search) => {
    return Asset.filter((user) => bySearch(user, search));
  };

  return (
    <>
      {/* ------Nav Bar Properties */}
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand className="ms-3">
          <Button onClick={handleSlideBar}>
            {" "}
            <i className="fa-solid fa-house"></i>{" "}
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Bike Online Booking App</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link>
              {" "}
              <Button onClick={() => setLgShow(true)}>Add New Bike</Button>{" "}
            </Nav.Link>
            <Nav.Link className="me-2">
              <Button>
                {" "}
                <i className="fa-solid fa-gear"></i>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas
        show={slideBar}
        onHide={() => setSlideBar(false)}
        scroll={true}
        style={{ width: "300px" }}
        backdrop={true}
      >
        <Offcanvas.Header closeButton className="bg-info">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          <ListGroup>
            <ListGroup.Item className="mb-2 bg-dark text-light" as="button">
              Home
            </ListGroup.Item>
            <ListGroup.Item className=" mb-2 bg-dark text-light" as="button">
              Number Of Bikes
            </ListGroup.Item>
            <ListGroup.Item className="mb-2  bg-dark text-light" as="button">
              Setting
            </ListGroup.Item>
            <ListGroup.Item className=" mb-2 bg-dark text-light" as="button">
              About
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {/* search method ------ */}
      {search !== "" && (
        <div className="row gap-3">
          {filteredList(getDatabase, search).map((item, index) => {
            console.log(item, index);
            return (
              <Card className="search" key={index} style={{ width: "18rem" }}>
                <Card.Img
                  style={{
                    margin: "auto",
                    marginTop: "5px",
                    height: "200px",
                    width: "250px",
                  }}
                  src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    {item.Model_Name}
                    <DropdownButton
                      variant="link"
                      drop="end"
                      title={<i className="fa-solid fa-gear"></i>}
                    >
                      <Dropdown.Item
                        onClick={() => EditBike(index)}
                        as="button"
                      >
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => DeleteBike(item._id)}
                        as="button"
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <i className="fa-solid fa-circle-left"></i> Cancel
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Title>
                  <Card.Text>
                    Modal Price : {item.Model_Price}
                    <br />
                    Color : {item.Color} <br />
                    Body Type : {item.Body_Type}
                    <br />
                    <Card.Link
                      style={{ cursor: "pointer" }}
                      onClick={() => MoreDetails(index)}
                    >
                      MoreInfo...
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
      {/* ---add bike MOdal propertiess */}
      <Modal
        // style={{width:'100px'}}
        scrollable
        size="md"
        backdrop="static"
        show={lgShow}
        onHide={modalClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className="Add-Bike-Head" closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Bike Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Add-Bike-Body">
          <Form>
            <Form.Group as={Row} className="mb-1">
              <Form.Label column sm="6">
                Bike Image :
              </Form.Label>
              <Col sm="6">
                {bikeImage !== "" && (
                  <Card
                    className="mb-2"
                    style={{
                      height: "100px",
                      width: "150px",
                      background: "none",
                    }}
                  >
                    <Image
                      style={{ height: "100px", width: "150px" }}
                      src={bikeImage}
                      alt="bike Img"
                    />
                  </Card>
                )}
                <Form.Control
                  onChange={(e) => ChangeImgUrl(e.target.files)}
                  accept="image/png,image/jpeg,image/jpg "
                  type="file"
                ></Form.Control>
              </Col>
            </Form.Group>
            <Row className="mb-1">
              <Col>
                <Form.Label>Model Name :</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  onChange={(e) => setModelName(e.target.value)}
                  type="text"
                  placeholder="Model Name"
                ></Form.Control>
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <Form.Label>Model Price :</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  onChange={(e) => setModelPrice(e.target.value)}
                  type="number"
                  placeholder="Price"
                ></Form.Control>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Key Specification :</Form.Label>
              <Col className="mb-1">
                <Row>
                  <Col>
                    <Form.Label>Engine :</Form.Label>
                    <Form.Control
                      onChange={(e) => setEngine(e.target.value)}
                      type="text"
                      placeholder="Engine"
                    ></Form.Control>
                  </Col>

                  <Col>
                    <Form.Label>Power :</Form.Label>
                    <Form.Control
                      onChange={(e) => setPower(e.target.value)}
                      type="text"
                      placeholder="Power"
                    ></Form.Control>
                  </Col>
                </Row>
              </Col>
              <Col className="mb-1">
                <Row>
                  <Col>
                    <Form.Label>Torque :</Form.Label>
                    <Form.Control
                      onChange={(e) => setTorque(e.target.value)}
                      type="text"
                      placeholder="Torque"
                    ></Form.Control>
                  </Col>

                  <Col>
                    <Form.Label>Color :</Form.Label>
                    <Form.Control
                      onChange={(e) => setColor(e.target.value)}
                      type="text"
                      placeholder="Color"
                    ></Form.Control>
                  </Col>
                </Row>
              </Col>
              <Col className="mb-1">
                <Row>
                  <Col>
                    <Form.Label>Tyre Type :</Form.Label>
                    <Form.Select onChange={(e) => setTyreType(e.target.value)}>
                      <option>Tube</option>
                      <option>TubeLess</option>
                    </Form.Select>
                  </Col>

                  <Col>
                    <Form.Label>Breaks :</Form.Label>
                    <Form.Select onChange={(e) => setBreaks(e.target.value)}>
                      <option>Double Disc</option>
                      <option>Single Disc</option>
                      <option>Rim Brakes</option>
                      <option>V-Brakes</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col className="mb-1">
                <Row>
                  <Col>
                    <Form.Label>Mileage :</Form.Label>
                    <Form.Control
                      onChange={(e) => setMilege(e.target.value)}
                      type="text"
                      placeholder="Mileage"
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Fuel Capacity :</Form.Label>
                    <Form.Control
                      onChange={(e) => setFuelCapacity(e.target.value)}
                      type="text"
                      placeholder="Fuel Capacity"
                    ></Form.Control>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Form.Label>Gear Box :</Form.Label>
                    <Form.Select onChange={(e) => setGearBox(e.target.value)}>
                      <option>No Gear</option>
                      <option>4-Speed</option>
                      <option>5-Speed</option>
                      <option>6-Speed</option>
                      <option>7-Speed</option>
                    </Form.Select>
                  </Col>

                  <Col>
                    <Form.Label> Body Type :</Form.Label>
                    <Form.Select onChange={(e) => setBodyType(e.target.value)}>
                      <option>Standard</option>
                      <option>Cruiser</option>
                      <option>Touring</option>
                      <option>Sport</option>
                      <option>Dual-purpose</option>
                      <option>Off-Road</option>
                      <option>Sport touring</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        {AlertField && (
          <Alert variant="danger">
            Please Fill All Field's{" "}
            <CloseButton onClick={() => setAlertField(false)} />
          </Alert>
        )}
        <Modal.Footer className="row  Add-Bike-Foot justify-content-center">
          <Button onClick={handleNewBike} type="button">
            Add Bike{" "}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Body Of content properties */}
      {getDatabase.length > 0 && (
        <div className="row gap-3">
          {getDatabase.map((data, index) => {
            return (
              <Card
                className="body-content"
                key={index}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  style={{
                    margin: "auto",
                    marginTop: "5px",
                    height: "200px",
                    width: "250px",
                  }}
                  src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    {data.Model_Name}
                    <DropdownButton
                      variant="link"
                      drop="end"
                      title={<i className="fa-solid fa-gear"></i>}
                    >
                      <Dropdown.Item
                        onClick={() => EditBike(index)}
                        as="button"
                      >
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => DeleteBike(data._id)}
                        as="button"
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <i className="fa-solid fa-circle-left"></i> Cancel
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Title>
                  <Card.Text>
                    Modal Price : {data.Model_Price}
                    <br />
                    Color : {data.Color} <br />
                    Body Type : {data.Body_Type}
                    <br />
                    <Card.Link
                      style={{ cursor: "pointer" }}
                      onClick={() => MoreDetails(index)}
                    >
                      MoreInfo...
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}

      {/* ---click moreinformation---- */}

      {moreDetail !== "" && (
        <Modal
          scrollable
          size="md"
          backdrop="static"
          show={moreModalDetails}
          onHide={() => setMoreModalDetails(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header className="Add-Bike-Head" closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Bike Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Add-Bike-Body">
            <Form>
              <Form.Group as={Row} className="mb-1">
                <Form.Label column sm="6">
                  Bike Image :
                </Form.Label>
                <Col sm="6">
                  <Card
                    className="mb-2"
                    style={{
                      height: "100px",
                      width: "150px",
                      background: "none",
                    }}
                  >
                    <Image
                      style={{ height: "100px", width: "150px" }}
                      src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt="bike Img"
                    />
                  </Card>
                </Col>
              </Form.Group>
              <Row className="mb-1">
                <Col>
                  <Form.Label>Model Name :</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={getDatabase[moreDetail].Model_Name}
                    type="text"
                    placeholder="Model Name"
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Form.Label>Model Price :</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    value={getDatabase[moreDetail].Model_Price}
                    type="number"
                    placeholder="Price"
                  ></Form.Control>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Key Specification :</Form.Label>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Engine :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Engine}
                        type="text"
                        placeholder="Engine"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label>Power :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Power}
                        type="text"
                        placeholder="Power"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Torque :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Torque}
                        type="text"
                        placeholder="Torque"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label>Color :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Color}
                        type="text"
                        placeholder="Color"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Tyre Type :</Form.Label>

                      <Form.Control
                        value={getDatabase[moreDetail].Tyre_type}
                        type="text"
                        placeholder="Mileage"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label>Breaks :</Form.Label>

                      <Form.Control
                        value={getDatabase[moreDetail].Bracks}
                        type="text"
                        placeholder="Mileage"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Mileage :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Milleage}
                        type="text"
                        placeholder="Mileage"
                      ></Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>Fuel Capacity :</Form.Label>
                      <Form.Control
                        value={getDatabase[moreDetail].Fuel_Capacity}
                        type="text"
                        placeholder="Fuel Capacity"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Gear Box :</Form.Label>

                      <Form.Control
                        value={getDatabase[moreDetail].Gear_Box}
                        type="text"
                        placeholder="Fuel Capacity"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label> Body Type :</Form.Label>

                      <Form.Control
                        value={getDatabase[moreDetail].Body_Type}
                        type="text"
                        placeholder="Fuel Capacity"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      )}

      {/* set model of edit function */}
      {editId !== "" && (
        <Modal
          scrollable
          size="md"
          backdrop="static"
          show={editPopup}
          onHide={editPopupClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header className="Add-Bike-Head" closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Bike Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="Add-Bike-Body">
            <Form>
              <Form.Group as={Row} className="mb-1">
                <Form.Label column sm="6">
                  Bike Image :
                </Form.Label>
                <Col sm="6">
                  {/* {bikeImage !== "" && ( */}
                  <Card
                    className="mb-2"
                    style={{
                      height: "100px",
                      width: "150px",
                      background: "none",
                    }}
                  >
                    <Image
                      style={{ height: "100px", width: "150px" }}
                      src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt="bike Img"
                    />
                  </Card>

                  <Form.Control
                    // defaultValue={getDatabase[editId].Bike_image}
                    onChange={(e) => setNewBikeImage(e.target.files)}
                    accept="image/png,image/jpeg,image/jpg "
                    type="file"
                  ></Form.Control>
                </Col>
              </Form.Group>
              <Row className="mb-1">
                <Col>
                  <Form.Label>Model Name :</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    defaultValue={getDatabase[editId].Model_Name}
                    onChange={(e) => setNewModelName(e.target.value)}
                    type="text"
                    placeholder="Model Name"
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <Form.Label>Model Price :</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    defaultValue={getDatabase[editId].Model_Price}
                    onChange={(e) => setNewModelPrice(e.target.value)}
                    type="number"
                    placeholder="Price"
                  ></Form.Control>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Key Specification :</Form.Label>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Engine :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Engine}
                        onChange={(e) => setNewEngine(e.target.value)}
                        type="text"
                        placeholder="Engine"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label>Power :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Power}
                        onChange={(e) => setNewPower(e.target.value)}
                        type="text"
                        placeholder="Power"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Torque :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Torque}
                        onChange={(e) => setNewTorque(e.target.value)}
                        type="text"
                        placeholder="Torque"
                      ></Form.Control>
                    </Col>

                    <Col>
                      <Form.Label>Color :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Color}
                        onChange={(e) => setNewColor(e.target.value)}
                        type="text"
                        placeholder="Color"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Tyre Type :</Form.Label>
                      <Form.Select
                        defaultValue={getDatabase[editId].Tyre_type}
                        onChange={(e) => setNewTyreType(e.target.value)}
                      >
                        <option>Tube</option>
                        <option>TubeLess</option>
                      </Form.Select>
                    </Col>

                    <Col>
                      <Form.Label>Breaks :</Form.Label>
                      <Form.Select
                        defaultValue={getDatabase[editId].Bracks}
                        onChange={(e) => setNewBreaks(e.target.value)}
                      >
                        <option>Double Disc</option>
                        <option>Single Disc</option>
                        <option>Rim Brakes</option>
                        <option>V-Brakes</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-1">
                  <Row>
                    <Col>
                      <Form.Label>Mileage :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Milleage}
                        onChange={(e) => setNewMilege(e.target.value)}
                        type="text"
                        placeholder="Mileage"
                      ></Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>Fuel Capacity :</Form.Label>
                      <Form.Control
                        defaultValue={getDatabase[editId].Fuel_Capacity}
                        onChange={(e) => setNewFuelCapacity(e.target.value)}
                        type="text"
                        placeholder="Fuel Capacity"
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Label>Gear Box :</Form.Label>
                      <Form.Select
                        defaultValue={getDatabase[editId].Gear_Box}
                        onChange={(e) => setNewGearBox(e.target.value)}
                      >
                        <option>No Gear</option>
                        <option>4-Speed</option>
                        <option>5-Speed</option>
                        <option>6-Speed</option>
                        <option>7-Speed</option>
                      </Form.Select>
                    </Col>

                    <Col>
                      <Form.Label> Body Type :</Form.Label>
                      <Form.Select
                        defaultValue={getDatabase[editId].Body_Type}
                        onChange={(e) => setNewBodyType(e.target.value)}
                      >
                        <option>Standard</option>
                        <option>Cruiser</option>
                        <option>Touring</option>
                        <option>Sport</option>
                        <option>Dual-purpose</option>
                        <option>Off-Road</option>
                        <option>Sport touring</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          {editAlertField && (
            <Alert variant="danger">
              Please Fill All Field's <CloseButton />
            </Alert>
          )}
          <Modal.Footer className="row  Add-Bike-Foot justify-content-center">
            <Button
              onClick={UpdatedDetails}
              variant="success"
              style={{ width: "100px" }}
              type="button"
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* ---alert for delete confirmation */}
      <Modal
        show={delertConfirmation}
        onHide={() => setDeleteConfirmation(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5">Sure? you Want to Delete This..? </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setDeleteConfirmation(false)}
          >
            No
          </Button>
          <Button variant="primary" onClick={FinalDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AdminHomePage;