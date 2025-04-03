import { useEffect } from "react";
import { useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1
        style={{
          color: color,
          width: "200px",
          padding: "10px",
          paddingLeft: "20px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;
