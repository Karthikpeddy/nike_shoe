import React, { useState } from "react";
const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(isDropdownOpen);
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <main className="home bg-white">
      <div className="home-content">
        <h1>
          YOUR FEET <br /> DESERVE THE <br />
          BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <br />
        <div className="home-button">
          <div>
            <button className="shopnow ">SHOP NOW</button>
          </div>
          <div class="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="z-10 inline-flex flex-shrink-0 items-center rounded-lg border border-gray-500 bg-gray-50 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Categories
              <svg
                class="ml-2.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      New & Featured
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Men
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Women
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Kids
                    </a>
                  </li>
                </ul>
              </div>
            )}
            ;
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
