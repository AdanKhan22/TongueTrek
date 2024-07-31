import React from "react";
import countriesData from "../../countries-by-languages.json";

export default function Table({ data }) {
  /*For caching data*/
  // const [fetchedData, setFetchedData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  //   function displayDetails() {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=India",
  //           {
  //             mode: "no-cors",
  //           }
  //         );
  //         // Response handling will be limited due to no-cors mode
  //         const result = await response.json();
  //         setFetchedData(result);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     // Call the fetchData function
  //     fetchData();
  //   }

  function displayCountries() {
    console.log("button clicked");
    for (let i = 0; i < countriesData.length; i++) {
      for (let j = 0; j < countriesData[i].languages.length; j++) {
        for (let k = 0; k < data.length; k++) {
          if (countriesData[i].languages[j] == data[k]) {
            console.log(countriesData[i].country);
          }
        }
      }
    }
  }

  return (
    <>
      <div className="container-sec2">
        <p>It goes under</p>
        {data.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <button onClick={displayCountries}>Click</button>
    </>
  );
}
