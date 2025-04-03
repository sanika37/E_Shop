const Header = () => {
  return (
    <div
      className="jumbotron text-center"
      style={{
        marginTop: '20px', // Add space between the navbar and header
      }}
    >
      <h1 className="display-4">Welcome to ShopEase!</h1>
      <p className="lead">
        Discover a world of amazing products at unbeatable prices. Your one-stop shop for all your needs!
      </p>
      <hr className="my-4" />
      <p
        style={{
          fontSize: '1.25rem', // Increase font size for the second paragraph
        }}
      >
        Explore a curated selection of top-quality products designed to meet your every need. From the latest tech gadgets to stylish fashion, home essentials, and more, ShopEase is your trusted partner for a seamless shopping experience. Enjoy exclusive deals, fast delivery, and exceptional customer service—all in one place!
      </p>
      <a
        className="btn btn-lg"
        href="/"
        role="button"
        style={{
          backgroundColor: '#007BFF', // Blue button for contrast
          color: 'white', // White text for readability
          border: 'none', // Remove border for a clean look
          marginTop: '20px', // Add space between paragraph and button
          transition: '0.3s', // Smooth transition for hover effect
        }}
        onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 15px #007BFF')} // Glow effect on hover
        onMouseLeave={(e) => (e.target.style.boxShadow = 'none')} // Remove glow effect on hover out
      >
        Start Shopping
      </a>
    </div>
  );
};

export default Header;