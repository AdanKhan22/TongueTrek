import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <>
      <div>
        <nav className="navbar" style={{ backgroundColor: "#000000" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
                alt="Bootstrap"
                style={{ position: "relative", top: "20px", left: "30px" }}
              />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

// NavBar.propTypes = {
//   title: PropTypes.string,
// };
