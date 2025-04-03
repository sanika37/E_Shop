import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        fontSize: '1.3rem', // Increase font size for the entire navbar
        height: '65px', // Increase navbar height
        display: 'flex',
        alignItems: 'center', // Center content vertically
        padding: '0 20px', // Add padding to the left and right of the navbar
      }}
    >
      <Link
        className="navbar-brand"
        to="/"
        style={{
          fontSize: '1.8rem', // Larger font size for the brand
          marginRight: '20px', // Add spacing to the right of the brand
        }}
      >
        ShopEase
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              className="nav-link"
              to="/"
              style={{
                fontSize: '1.5rem',
                transition: '0.3s', // Smooth transition for hover effect
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px #fff')}
              onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
              style={{
                fontSize: '1.5rem',
                transition: '0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px #fff')}
              onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/products"
              style={{
                fontSize: '1.5rem',
                transition: '0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px #fff')}
              onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
            >
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              style={{
                fontSize: '1.5rem',
                transition: '0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px #fff')}
              onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
            >
              Contact
            </Link>
          </li>
        </ul>
        <form
          className="form-inline"
          style={{
            marginLeft: 'auto', // Push the search bar to the right
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{
              fontSize: '1.2rem', // Adjust font size for the search input
              marginRight: '10px', // Add spacing between input and button
              height: '40px', // Adjust height of the search input
            }}
          />
          <button
            className="btn"
            type="submit"
            style={{
              fontSize: '1.2rem', // Adjust font size for the button
              height: '40px', // Adjust height of the button
              backgroundColor: 'black',
              color: 'white', // Change text color to black
              border: '1px solid yellow', // Add a border
              transition: '0.3s', // Smooth transition for hover effect
              marginRight: '20px', // Add spacing to the right of the button
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 15px yellow')}
            onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
          >
            Search
          </button>
        </form>
        <div className="form-inline my-2 my-lg-0">
          {!isLoggedIn ? (
            <Link className="btn btn-primary" to={"/login"} style={{ fontSize: '1.2rem', marginLeft: '10px' }}>
              Login
            </Link>
          ) : (
            <button
              className="btn btn-danger"
              onClick={onLogoutHandler}
              style={{ fontSize: '1.2rem', marginLeft: '10px' }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;