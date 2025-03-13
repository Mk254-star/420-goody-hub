import React from "react";
import AboutUs from "./components/AboutUs";  // Importing the component

function App() {
  return (
    <div className="App">
      <h1>Welcome to 420-Goody-Hub!</h1>
      <p>Your hub for campus goodies and services.</p>
      <AboutUs />  {/* Using the component */}
    </div>
  );
}

export default App;
