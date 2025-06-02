import React from "react";
import Chat from "./components/Chat";
import SolarDesignForm from "./components/SolarDesignForm";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🔆 Solar AI Assistant</h1>
      <Chat />
      <SolarDesignForm />
    </div>
  );
}

export default App;
