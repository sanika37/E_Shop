import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, category, images } = props.data;

  const styles = {
    priceAndButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    glowButtonHover: {
      backgroundColor: "#0056b3",
      boxShadow: "0 0 10px #0056b3, 0 0 20px #0056b3",
      color: "#fff",
    },
  };

  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={images} alt="" className="card-top-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">
            <span className="badge badge-secondary">{category?.name}</span>
          </p>
          <div style={styles.priceAndButton}>
            <h2>
              <span>&#8377;</span> {price}
            </h2>
            <Link
              to={"/products/detail/" + id}
              className="btn btn-primary btn-block"
              style={styles.glowButton}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, styles.glowButtonHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, styles.glowButton)
              }
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;