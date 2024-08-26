import { useState } from "react";

function App() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message);
        },
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location.latitude && location.longitude ? (
        <div>
          <h3>Your Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Click the button to get your location.</p>
      )}
    </div>
  );
}

export default App;
