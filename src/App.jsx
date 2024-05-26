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
import LearnMoreModal from "./components/learnMoreModal/LearnMoreModal.jsx";

function App() {
 

  return (
    <main className="bg-neutral-200 text-xl">
      <MainNavbar />
      <section className="hero h-screen w-full my-auto mx-auto bg-gradient-to-r from-[#854782]  to-purple-600 text-white text-xl flex flex-col ">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="center-bottom"
          className=" backdrop-blur-sm mx-auto py-32 lg:flex flex-col my-auto items-center justify-center lg:h-screen lg:items-center"
        >
          <div className="my-auto mx-auto max-w-4xl text-center ">
            <h1 className="animate-pulse bg-gradient-to-r from-[#854782] via-[#b156ac] to-orange-400 bg-clip-text text-[4rem] font-extrabold text-transparent text-balance">
              ¡Aumenta tu presencia digital!
              <span className="sm:block my-2"> Atrae más clientes. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black text-xl">
              Desde la creación de contenido cautivador hasta la gestión de
              campañas estratégicas, nos dedicamos a potenciar tu presencia en
              todas tus plataformas digitales.
            </p>

            <div className="flex flex-wrap justify-center gap-7">
              <a
                href="https://wa.me/+50431597965"
                className="rounded-xl bg-[#854782] p-4 flex items-center text-center items-center"
              >
                Contacto
              </a>
              <a
                href="#Nosotros"
                className="rounded-xl p-4 bg-transparent border border-[#854782] text-[#854782]"
              >
                Aprender Más
              </a>
            </div>
          </div>
        </div>
      </section>
     
      <Nosotros />
      <Title Titulo="¿Lista para llevar tu marca al siguiente nivel?"></Title>
      <div>
        <VideoPortada />
      </div>
      <Title Titulo="Porqué somos diferentes"></Title>

      <AboutUs />
      <Title Titulo="¡Impacta y destaca!"></Title>

      <Marca />

      <Services />

      <Title Titulo="Nuestros Paquetes"></Title>

      <section
        className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
      <Title Titulo="Conoce a nuestro equipo"></Title>
      <div className=" w-1/2 items-center justify-center mx-auto z-5 lg:py-16 flex flex-col ">
        <div
          className="h-full"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-anchor-placement="center-bottom"
        >
          <h3 className="uppercase text-center text-4xl text-[#85478] ">
            La mente detrás de Blooming Ideas
          </h3>
          <a
            href="https://www.instagram.com/bloomingideashn?igsh=ZmExaWdvNDFvazk="
            className="group block"
          >
            <img
              src="/public/Profile/main.webp"
              alt=""
              className="h-[400px] aspect-square w-full rounded object-contain"
            />

            <div className="mt-3">
              <p className="text-center text-2xl">
                Una figura fundamental que te respaldará en la mejora de tu
                negocio. Su compromiso con la excelencia y su capacidad para
                generar ideas frescas y creativas hacen de ella un recurso
                invaluable para cualquier emprendedor o empresario que busque
                llevar su negocio al siguiente nivel.
              </p>
            </div>
          </a>
        </div>
      </div>
      <Title Titulo="¿Lista para trabajar juntos?"></Title>
      <ContactForm />

      <Footer></Footer>
    </main>
  );
}

export default App;
