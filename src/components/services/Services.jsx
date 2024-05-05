import Title from "../titles/Title.jsx";

const Services = () => {
  return (
    <section id="Servicios">
      <div className="mx-auto max-w-screen-xl  py-8  sm:py-12">
        <header className="text-center">
         <Title Titulo="Nuestros Servicios">

         </Title>

          <p className="mx-auto mt-4   text-purple-900">
          Con nuestra combinación de servicios, llevamos tu presencia digital al siguiente nivel, asegurando que tu marca se destaque y se mantenga en la mente de tu audiencia. 
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <div className="group relative block"  data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_analisis.webp"
                alt="Personas analizando información de un conjunto de papeles"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end   p-6">
                <h3 className="text-4xl font-medium text-black ">
                Analisis de Datos
                </h3>
              
      
              </div>
            </div>
          </li>
          <li>
            <div className="group relative block"  data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_foto.webp"
                alt="Persona tomando una foto con una camara profesional"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-4xl font-medium text-white">
                  Toma de fotografías y video
                </h3>
              </div>
            </div>
          </li>
     

          <li>
            <div  className="group relative block"  data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_mail.webp"
                alt="Imagen de persona administrando un correo electronico"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end   p-6">
                <h3 className="text-4xl font-medium text-white">
               Email Marketing
                </h3>

      
              </div>
            </div>
          </li>
          <li>
            <div className="group relative block" data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_web.webp"
                alt="Imagen de un setup de desarrollo web"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-4xl font-medium text-white">
                 Diseño y desarrollo web
                </h3>

    
              </div>
            </div>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="group relative block"  data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_social.webp"
                alt="Imagen de persona gestionando una red social"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-4xl font-medium text-white">
                  Gestión Redes Sociales
                </h3>

              </div>
            </div>
          </li>
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-3">
            <div className="group relative block"  data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_plan.webp"
                alt="Imagen que muestra un hombre haciendo un plan de marketing"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-4xl font-medium text-white">
                  Plan de Marketing
                </h3>
              </div>
            </div>
          </li>
         
          
        </ul>
      </div>
    </section>
  );
};

export default Services;
