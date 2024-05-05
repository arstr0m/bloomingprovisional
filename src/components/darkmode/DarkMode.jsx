import DarkModeImg from "/public/darkmode/darkmode.svg";
const DarkMode = () => {
  return (
    <div className="darkmode">
      <img className="max-w-[30px]" src={DarkModeImg} alt="DarkMode Button" />
    </div>
  );
};

export default DarkMode;
