const Shopnow = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-center">Nike products</h1>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="rounded-xl shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Nike AIR</p>
            <p>$4.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shopnow;
