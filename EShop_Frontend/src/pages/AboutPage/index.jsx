import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="jumbotron text-center"
        style={{
          fontSize: "1.5rem",
          marginTop: "2rem", // Added margin-top to create space below the Navbar
          marginBottom: "2rem",
        }}
      >
        <div
          className="display-4"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold", // Made the "Contact Us" text bold
          }}
        >
          About Us
        </div>
        <p className="lead">
          Discover who we are and what drives us to deliver excellence.
        </p>
      </div>

      <div className="container">
        {/* Section 1 */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div style={{ flex: "1", paddingRight: "20px" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Our Mission</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              Welcome to <strong>ShopEase</strong>, your trusted partner in online shopping.
              Our mission is to provide a seamless shopping experience by offering a curated
              selection of high-quality products at unbeatable prices. From the latest tech
              gadgets to stylish fashion, home essentials, and more, we are committed to
              bringing you the best of everything under one roof.
            </p>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/tt.jpg"
              alt="Our Mission"
              style={{
                width: "80%", // Adjusted width for better scaling
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better aesthetics
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Slightly enlarge the image
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Enhance shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Reset shadow
              }}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexDirection: "row-reverse", // Reverse the order for text on the right
          }}
        >
          <div style={{ flex: "1", paddingLeft: "20px" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Why Choose Us?</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              At <strong>ShopEase</strong>, we believe in creating value for our customers.
              Our team works tirelessly to ensure that every product meets the highest standards
              of quality and affordability. With a focus on innovation and customer satisfaction,
              we strive to make your shopping journey enjoyable and hassle-free.
            </p>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/dd.jpg"
              alt="Why Choose Us"
              style={{
                width: "80%", // Adjusted width for better scaling
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for better aesthetics
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Slightly enlarge the image
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Enhance shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Reset shadow
              }}

            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;