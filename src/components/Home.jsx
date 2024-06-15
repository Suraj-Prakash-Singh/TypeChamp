const Home = () => {
  return (
    <div className="w-screen h-screen bg-black flex-row font-jetbrains items-center justify-between">
      <div className="w-full h-max mt-10 ml-8">
        <p className="text-white text-3xl w-full h-max font-bold">
          <span className="text-[#854091]">Finger</span>Bolt
        </p>
      </div>
      <div className="text-[#854091] w-full h-max items-center flex justify-center">
        <p className="text-white bg-[#854091] px-8 py-1 rounded-md font-bold cursor-pointer">Type the text below</p>
      </div>
    </div>
  );
};

export default Home;
