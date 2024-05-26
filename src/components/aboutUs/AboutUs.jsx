
const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12 hidden lg:block">
              <div className="flex items-center -mx-3 sm:-mx-4"  data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-anchor-placement="center-bottom">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="/src/assets/abouts/about_2.webp"
                      alt="Personas haciendo contacto con Blooming Ideas"
                      className="w-full rounded-3xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="src/assets/abouts/about_1.webp"
                      alt="Mujer utilizando una computadora"
                      className="w-full rounded-3xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className=" my-4">
                    <img
                      src="src/assets/abouts/about_3.webp"
                      alt="Personas sonriendo"
                      className="w-full rounded-3xl"
                    />
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 md:mx-auto">
              <div className="mt-10 lg:mt-0 md:justify-center md:text-center md:mx-auto"    data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-anchor-placement="center-bottom">
                <span className="block mb-4 text-center sm:mx-auto xl:text-[2em] md:text-center md:mx-auto text-4xl font-semibold text-[#854782] ">
                  Porque nosotros
                </span>
                <h2 className="md:mx-auto text-center sm:mx-auto md:text-center mb-5 xl:text-[text-3em] text-3xl uppercase font-bold text-[#854782]  sm:text-[40px]/[48px]">
                 Te queremos ver <img src="/src/assets/imgs/florecer/FLORECER.png" className="mx-auto w-[300px] "/>
                </h2>
                <p className="mb-5 mx-2 text-[1.5rem] text-center">
                Porque somos una empresa comprometida en verte triunfar, nuestro personal cuenta con una amplia trayectoria en el campo del marketing. 
                </p>
                <p className="mb-8 mx-2 h-3/2 text-[1.5rem] text-center">
                Cada miembro de nuestro equipo aporta una combinación única de experiencia y creatividad, respaldada por años de trabajo en la industria. Desde estrategas de redes sociales hasta expertos en análisis de datos, estamos equipados con las habilidades necesarias para impulsar tu marca hacia el éxito. 
                </p>
                <p className="mb-8 mx-2 h-3/2 text-[1.5rem] text-center">
                Tu triunfo es nuestra prioridad, y trabajaremos incansablemente para asegurarnos de que alcances tus metas y superes tus expectativas en el mundo digital. 
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
