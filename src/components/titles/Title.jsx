const Title = ({ Titulo = "Componente" }) => {
  return (
    <div
      className="text-center text-3xl my-2 py-4 animate-pulse"
      data-aos="fade-up"
    >
      <p className="my-2">
        {Titulo} <span>↓</span>
      </p>
    </div>
  );
};

export default Title;
