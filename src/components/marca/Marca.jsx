import Crucial from "/assets/videos/impacto/crucial.mp4";
import ImpactoNecesario from "/assets/videos/impacto/impacto.mp4";

const Marca = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl  py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center text-center rounded bg-[#854782] p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-anchor-placement="center-bottom"
              >
                <h2 className="text-4xl font-bold text-center text-white sm:text-3xl">
                  ¡Desata el poder de tu marca en el mundo digital con nosotros!
                </h2>

                <p className="mt-3 text-gray-300 text-center text-2xl">
                  En Blooming Ideas, no solo creamos contenido, ¡creamos
                  impacto!
                </p>
              </header>
            </div>
          </div>

          <div
            className="lg:col-span-2 lg:py-8 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          >
            <ul className="grid justify-center items-center grid-cols-1 xl:grid-cols-2 mx-auto">
              <li className="mx-2">
                <div
                  className=" mx-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="center-bottom"
                >
                    <video
                    autoPlay
                    muted
                    loop
                    className="aspect-square w-full rounded object-covet"
                  >
                    <source src={Crucial} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
             
                  <div className="mt-1">
                    <p className="text-xl text-center text-gray-900 mx-auto">
                      Nuestro compromiso es claro: ofrecerte soluciones
                      creativas y resultados tangibles que impulsen tu
                      crecimiento. No solo hablamos de números, ¡los generamos!
                      Con un enfoque centrado en tus objetivos, trabajamos
                      incansablemente para garantizar que cada paso que damos
                      juntos te acerque más a tus metas.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div
                  href="#"
                  className="group block"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="center-bottom"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    className="aspect-square w-full rounded object-contain"
                  >
                    <source src={ImpactoNecesario} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="mt-1">
                    <p className="text-xl text-center text-gray-900">
                      Estamos comprometidos en ofrecer soluciones innovadoras y
                      resultados medibles que impulsen tu crecimiento
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marca;
