import { Link } from "react-router-dom";

const Category = (props) => {
  const { name, image } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card" style={{ textAlign: "center" }}> {/* Center-align content */}
        <img
          src={image}
          alt=""
          className="card-top-img"
          style={{
            width: "100%", // Ensure the image fits the card
            height: "200px", // Set a fixed height for consistency
            objectFit: "cover", // Maintain aspect ratio
          }}
        />
        <div
          className="card-body"
          style={{
            display: "flex", // Use flexbox for layout
            flexDirection: "row", // Align items in a row
            justifyContent: "center", // Center items horizontally
            alignItems: "center", // Align items vertically
            gap: "20px", // Add spacing between the title and button
          }}
        >
          <h5
            className="card-title"
            style={{
              fontWeight: "bold", // Make the title bold
              fontSize: "1.5rem", // Increase font size for the title
              marginBottom: "0", // Remove bottom margin for alignment
            }}
          >
            {name}
          </h5>
          <Link
            to="/products"
            className="btn btn-primary"
            style={{
              backgroundColor: "#007BFF", // Button color
              color: "white", // Text color
              border: "none", // Remove border
              transition: "0.3s", // Smooth transition for hover effect
              padding: "10px 20px", // Adjust padding for a larger button
              fontSize: "1.2rem", // Increase font size for the button
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 15px #007BFF")} // Glow effect on hover
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")} // Remove glow effect on hover out
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;