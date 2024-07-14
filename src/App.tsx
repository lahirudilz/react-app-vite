import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "London",
    "Sydney",
    "Berlin",
    "Tokyo",
    "Paris",
    "Colombo",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <div id="alert-v2">
          <Alert onClose={() => setAlertVisibility(false)}>
            You should check in on some of those fields below.
          </Alert>
        </div>
      )}
      <br />
      <div>
        <Button
          children={"Click Me"}
          color="dark"
          onClick={function (): void {
            setAlertVisibility(true);
          }}
        />
      </div>
      <br />
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
