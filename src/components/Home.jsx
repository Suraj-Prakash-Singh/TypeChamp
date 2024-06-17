import Test from "./TextArea";

const Home = () => {
  return (
    <div className="font-jetbrains flex-row bg-black min-h-screen w-full">
      <div className="pt-10 pl-8">
        <p className="text-white text-3xl w-full h-max font-bold">
          <span className="text-[#854091]">Finger</span>Bolt
        </p>
      </div>
      <div className="text-[#854091] items-center flex justify-center mt-10">
        <p className="text-white bg-[#854091] px-8 py-[3px] rounded-md font-bold cursor-pointer">Type the text below</p>
      </div>
      <div className="w-full">
        <Test/>
      </div>
    </div>
  );
};

export default Home;
