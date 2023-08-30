import NIKE01 from "../assests/nikeair_01.png";
import NIKE02 from "../assests/nikeair_02.png";
const Shopnow = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-center">Nike products</h1>
      </div>
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="rounded-xl shadow-md bg-[#f6f6f6] shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <img src={NIKE01} alt="" />
            <div className="flex space-x-4 p-6">
              <p>$99.99</p>
              <p>Add to cart</p>
            </div>
          </div>
          <div className="rounded-xl shadow-md bg-[#f6f6f6] shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <img src={NIKE02} alt="" />
            <div className="flex space-x-4 p-6">
              <p>$79.99</p>
              <p>Add to cart</p>
            </div>
          </div>
          <div className="rounded-xl shadow-md bg-[#f6f6f6] shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <img src={NIKE02} alt="" />
            <div className="flex space-x-4 p-6">
              <p>$79.99</p>
              <p>Add to cart</p>
            </div>
          </div>
          <div className="rounded-xl shadow-md bg-[#f6f6f6] shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <img src={NIKE02} alt="" />
            <div className="flex space-x-4 p-6">
              <p>$84.99</p>
              <p>Add to cart</p>
            </div>
          </div>
          <div className="rounded-xl shadow-md bg-[#f6f6f6] shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <img src={NIKE02} alt="" />
            <div className="flex space-x-4 p-6">
              <p>$69.99</p>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shopnow;
