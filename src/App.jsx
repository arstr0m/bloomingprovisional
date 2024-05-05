import MainNavbar from "./components/mainNav/MainNavbar.jsx";
import MainHero from "./components/heros/MainHero.jsx";
import Title from "./components/titles/Title.jsx";
import Footer from "./components/foooter/Footer.jsx";
import ContactButton from "./components/contactButton/ContactButton.jsx";
import Servicios_Productos from "/src/const/Servicios.js";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Services from "./components/services/Services.jsx";
import Marca from "./components/marca/Marca.jsx";
import VideoPortada from "./components/Video/VideoPortada.jsx";
import Product from "./components/products/Product.jsx";
import Nosotros from "./components/nosotros/Nosotros.jsx";
import ContactForm from "./components/forms/ContactForm.jsx";

function App() {
  return (
    <>
      <MainNavbar />
      <section className="hero bg-gradient-to-r from-[#854782]  to-purple-600 text-white text-xl ">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className=" backdrop-blur-sm mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
        
          <div className=" mx-auto max-w-4xl text-center ">
            <h1 className="animate-pulse bg-gradient-to-r from-[#854782] via-[#b156ac] to-orange-400 bg-clip-text text-[4em] font-extrabold text-transparent text-balance">
              ¡Aumenta tu presencia digital!
              <span className="sm:block my-2"> Atrae más clientes. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black text-xl">
              Desde la creación de contenido cautivador hasta la gestión de
              campañas estratégicas, nos dedicamos a potenciar tu presencia en
              todas tus plataformas digitales.-sm
            </p>

            <div className="flex flex-wrap justify-center gap-7">
            <button className="rounded-xl">Contacto</button>
            <button className="rounded-xl bg-transparent border border-[#854782] text-[#854782]">Aprender Más</button>
          </div>
          </div>
        
        </div>
      </section>
      <Nosotros />
      <AboutUs />
      <Marca />
      <MainHero />

      <Services />
      <Title Titulo="¿Listo para llevar tu marca al siguiente nivel?"></Title>
      <div>
        <VideoPortada />
      </div>
      <Title Titulo="Nuestros Paquetes"></Title>

      <section
        className="w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8"
        id="Paquetes"
      >
        {Object.values(Servicios_Productos).map((servicio, index) => (
          <Product
            key={index}
            Imagen={servicio.imagen}
            Nombre={servicio.nombre}
            Precio={servicio.precio}
            Descripcion={servicio.descripcion}
          />
        ))}
      </section>

      <ContactForm/>

   
      <Footer></Footer>
    </>
  );
}

export default App;
