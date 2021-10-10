import React from "react";
import "./all.css";
import { useState } from "react";

export default function Button() {
  const [button, setButton] = useState("");
  return (
    <div>
      <button onClick={setButton}>
        Need help deciding what to play? Click the button!
      </button>
    </div>
  );
}
