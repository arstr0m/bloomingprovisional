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
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-pulse bg-gradient-to-r from-[#854782] via-[#b156ac] to-orange-400 bg-clip-text text-[4em] font-extrabold text-transparent text-balance">
              ¡Aumenta tu presencia digital!
              <span className="sm:block my-2"> Atrae más clientes. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black text-[5em]">
              Desde la creación de contenido cautivador hasta la gestión de
              campañas estratégicas, nos dedicamos a potenciar tu presencia en
              todas tus plataformas digitales.-sm
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-white">
              <a
                className="block w-full bg-[#854782] rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-transparent  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Contacto📱
              </a>

              <a
                className="block w-full rounded border border-white px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Aprender Mas😎
              </a>
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

      <ContactButton />
      <Footer></Footer>
    </>
  );
}

export default App;
