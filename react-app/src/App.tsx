import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Grid from "./components/Grid";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <NavBar></NavBar>
      <Carousel></Carousel>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span> World </span>
        </Alert>
      )}
      <Card></Card>
      <Button onClick={() => setAlertVisibility(true)}>Click me pls</Button>
      <Grid></Grid>
    </div>
  );
}

export default App;
