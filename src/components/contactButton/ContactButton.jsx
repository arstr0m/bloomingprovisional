
import Whatsapp from "./whatsapp.svg";

const ContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 w-[40px] h-[40px] rounded-full">
      <a href="https://wa.me/+50431597965">
        <img src={Whatsapp} alt="Boton de contacto hacia whatsapp" />
      </a>
    </div>
  );
};

export default ContactButton;
