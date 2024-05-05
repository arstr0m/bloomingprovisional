

const Title = ({ Titulo = 'Componente' }) => {
  return (
    <div className="text-center text-5xl py-2 animate-pulse">
      <p className="my-2">{Titulo} <span>↓</span></p>
    </div>
  );
};

export default Title;
