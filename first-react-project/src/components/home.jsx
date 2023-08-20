const Home = () => {
  return (
    <main className="home bg-white">
      <div className="home-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <br />
        <div className="home-button">
          <div>
            <button className="shopnow rounded-full">SHOP NOW</button>
          </div>
          <div>
            <button className="category rounded-full">Category</button>
          </div>
        </div>
        <br />
        <div className="shopping">
          <p>Also Available On</p>

          <div className="shopping-images">
            <img src="/amazon.png" alt="amazon" />
            <img src="/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="home-image ">
        <img src="/shoe_image.png" alt="brand-image" />
      </div>
    </main>
  );
};
export default Home;
