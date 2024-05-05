import Title from "../titles/Title.jsx";

const Services = () => {
  return (
    <section id="Servicios">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
         <Title Titulo="Nuestros Servicios">

         </Title>

          <p className="mx-auto mt-4  text-purple-900">
          Con nuestra combinación de servicios, llevamos tu presencia digital al siguiente nivel, asegurando que tu marca se destaque y se mantenga en la mente de tu audiencia. 
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <div className="group relative block"  data-aos="fade-left"
        data-aos-duration="1400"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_analisis.jpg"
                alt="Analisis de datos"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end   p-6">
                <h3 className="text-4xl font-medium text-white ">
                Analisis de Datos
                </h3>
              
      
              </div>
            </div>
          </li>
          <li>
            <div className="group relative block"  data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_foto.jpg"
                alt=""
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
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_mail.jpg"
                alt="Analisis de datos"
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
        data-aos-duration="1400"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_web.jpg"
                alt=""
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
        data-aos-duration="1400"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_social.jpg"
                alt=""
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
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom">
              <img
                src="/src/assets/imgs/bloom_servicios/ser_plan.jpg"
                alt=""
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
