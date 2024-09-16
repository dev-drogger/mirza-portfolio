function Heading({ title1, title2 }) {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div
        id="heading"
        className={` bg-black-gradient-2 w-[1000px] max-sm:w-[340px] h-[200px] max-sm:h-[125px] items-center justify-center flex rounded-[20px] box-shadow`}
      >
        <div className="flex justify-center items-center w-full">
          <h1 className="font-outfit font-semibold ss:text-[72px] max-sm:text-[32px] max-sm:leading-[3rem] max-sm:text-center text-[52px] text-white ss-leading-[100px] leading-[75px]">
            {title1}
            <span className="text-gradient"> {title2}</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Heading;
