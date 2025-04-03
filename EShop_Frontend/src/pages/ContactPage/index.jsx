import Navbar from "../../components/Navbar";

const ContactPage = () => {
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
          Contact Us
        </div>
        <p className="lead">
          Have questions or need assistance? We're here to help!
        </p>
      </div>
      <div
        className="container"
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          marginBottom: "2rem",
        }}
      >
        <section style={{ marginBottom: "2rem" }}>
          <h2>How to Reach Us</h2>
          <p>
            Whether you have questions about our products, need help with an
            order, or just want to share feedback, our team is ready to assist
            you.
          </p>
          <p>
            <strong>Email:</strong> support@eshop.com <br />
            <strong>Phone:</strong> +1 (123) 456-7890 <br />
            <strong>Address:</strong> 123 E-Shop Lane, Commerce City, CA 90210
          </p>
          <p>
            <strong>Support Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
            (PST). We strive to respond to all inquiries within 24 hours.
          </p>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Stay Connected</h2>
          <p>
            Subscribe to our newsletter for the latest updates, exclusive deals,
            and more.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "0.5rem",
                fontSize: "1rem",
                width: "100%",
                maxWidth: "400px",
                marginBottom: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "black",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
          <p>Follow us on social media to stay in the loop!</p>
        </section>
      </div>
    </>
  );
};

export default ContactPage;