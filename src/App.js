import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Vidoes from "./components/Vidoes/Vidoes";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <div className="app__page">
        <Sidebar />
        <Vidoes />
      </div>
      {/* sidebar */}
      {/* recomended video section */}
    </div>
  );
}

export default App;
