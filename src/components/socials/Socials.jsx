import Instagram from "/public/socials/instagram.svg";
import Contact from "/public/socials/mail.svg";

const Socials = () => {
  return (
    <div className="flex flex-wrap space-around">
      <img src={Instagram} className="max-w-[30px]" alt="instagram logo" />
      <img src={Contact} className="max-w-[30px]" alt="Mail button" />
    </div>
  );
};

export default Socials;
