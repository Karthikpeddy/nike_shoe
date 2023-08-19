import React from "react";

const Stores = () => {
  return (
    <div className="stores">
      <div className="stores-content">
        <div className="stores-heading">
          <h1 className="text-2xl font-bold">Stores</h1>
        </div>
        <div className="stores-pic">
          <img src="./store_pic.jpeg" alt="stores-pic" />
        </div>
        <div className="stores-matter">
          <ul>
            <li>Hyderabad</li>
            <li>Chennai</li>
            <li>Goa</li>
            <li>Mumbai</li>
            <li>New Delhi</li>
            <li>Banglore</li>
            <li>Kolkata</li>
            <li>Ahmedhabad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Stores;
