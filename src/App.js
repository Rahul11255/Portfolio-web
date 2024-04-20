import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/footer/Footer";
// import ClipLoader from "react-spinners/ClipLoader";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true); // Setting initial state to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Setting loading to false after 4 seconds
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? ( // Checking if loading state is true
        <div className="loader-container">
          <ClipLoader
            color={"red"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
