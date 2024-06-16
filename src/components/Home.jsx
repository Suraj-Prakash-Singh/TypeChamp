import Test from "./Test";

const Home = () => {
  return (
    <div className="font-jetbrains relative">
      <div className="mt-10 ml-8">
        <p className="text-white text-3xl w-full h-max font-bold">
          <span className="text-[#854091]">Finger</span>Bolt
        </p>
      </div>
      <div className="text-[#854091] items-center flex justify-center absolute left-[40%] top-[250%]">
        <p className="text-white bg-[#854091] px-8 py-1 rounded-md font-bold cursor-pointer">Type the text below</p>
      </div>
      <div className="w-full">
        <Test/>
      </div>
    </div>
  );
};

export default Home;
