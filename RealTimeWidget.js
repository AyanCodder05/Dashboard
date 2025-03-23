import { useEffect, useState } from "react";

const RealTimeWidget = ({ title, endpoint }) => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:5000/${endpoint}`);

    socket.onmessage = (event) => {
      try {
        const jsonData = JSON.parse(event.data);
        setData(jsonData.value);
      } catch (error) {
        console.error("Invalid WebSocket data:", error);
      }
    };

    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket closed");

    return () => socket.close(); // Cleanup on unmount
  }, [endpoint]);

  return <div className="widget">{title}: {data}</div>;
};

export default RealTimeWidget;
