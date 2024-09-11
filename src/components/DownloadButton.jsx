function DownloadButton({ title1, title2 }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "RESUME_MIRZAWAHYU.pdf";
    link.download = "RESUME_MIRZAWAHYU.pdf";
    link.click();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <button
        id="heading"
        className={` bg-black-gradient-2 w-[1000px] h-[200px] items-center justify-center flex rounded-[20px] box-shadow`}
        onClick={handleDownload}
      >
        <div className="flex justify-center items-center w-full">
          <h1 className="font-outfit font-semibold ss:text-[72px] text-[52px] text-white ss-leading-[100px] leading-[75px]">
            {title1}
            <span className="text-gradient"> {title2}</span>{" "}
          </h1>
        </div>
      </button>
    </div>
  );
}

export default DownloadButton;
