import React from "react";
import styles from "./search.module.css";
import btnstyles from "./searchbtn.module.css";

export default function SearchBtn() {
  const windowHeight = window.innerHeight;
  const scrollStep = Math.round(windowHeight / 15); // Adjust scroll step for smoothness
  let scrollCount = 0;

  const storeInput = () => {
    scrollCount += scrollStep;
    window.scrollTo(0, scrollCount);

    if (scrollCount < document.body.scrollHeight - windowHeight) {
      requestAnimationFrame(scrollStepHandler);
    }
    requestAnimationFrame(scrollStepHandler);
  };

  return (
    <>
      <div className={styles.main} style={{ backgroundColor: "black" }}>
        <div>
          <h3>Become fluent in any language</h3>
          <div className="d-flex flex-row" style={{ backgroundColor: "black" }}>
            <input
              className={styles.input}
              placeholder="Search the internet..."
              type="text"
              name="text"
            />
          </div>

          <div>
            <button
              className={`${btnstyles.button} ${btnstyles.svgIcon}`}
              onClick={storeInput}
            >
              <svg
                className={btnstyles.svgIcon}
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              Discover
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
