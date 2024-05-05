import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-neutral-200 dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4"  data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-anchor-placement="center-bottom">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-3xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-3xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className=" my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rrounded-3xl"
                    />
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0"    data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-anchor-placement="center-bottom">
                <span className="block mb-4 text-[5rem] font-semibold text-[#854782] ">
                  Porque nosotros
                </span>
                <h2 className="mb-5 text-3xl uppercase font-bold text-[#854782]  sm:text-[40px]/[48px]">
                 Te queremos ver <img src="/src/assets/imgs/florecer/FLORECER.png" className="mx-2 w-[300px] "/>
                </h2>
                <p className="mb-5 text-[1.5rem] text-balance">
                Porque somos una empresa comprometida en verte triunfar, nuestro personal cuenta con una amplia trayectoria en el campo del marketing. 
                </p>
                <p className="mb-8 text-[1.5rem] text-balance">
                Cada miembro de nuestro equipo aporta una combinación única de experiencia y creatividad, respaldada por años de trabajo en la industria. Desde estrategas de redes sociales hasta expertos en análisis de datos, estamos equipados con las habilidades necesarias para impulsar tu marca hacia el éxito. Tu triunfo es nuestra prioridad, y trabajaremos incansablemente para asegurarnos de que alcances tus metas y superes tus expectativas en el mundo digital. 
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
