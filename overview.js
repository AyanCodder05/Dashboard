import { useState, useEffect } from "react";

const OverviewCard = ({ title, endpoint }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/${endpoint}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((result) => {
        setData(result.value);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setData("Error loading data");
        setLoading(false);
      });
  }, [endpoint]);

  return (
    <div className="overview-card">
      <h3>{title}</h3>
      {loading ? <div className="loading-skeleton"></div> : <p>{data}</p>}
    </div>
  );
};
