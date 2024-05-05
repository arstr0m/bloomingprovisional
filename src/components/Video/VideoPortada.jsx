import VideoExito from "/public/videos/exito/exito.mp4";
const VideoPortada = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-anchor-placement="center-bottom"
            >
              <video
                src={VideoExito}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div
              className="lg:py-24"
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-anchor-placement="center-bottom"
            >
              <h2 className="text-[3rem] font-bold uppercase sm:text-4xl">
                Queremos verte triunfar
              </h2>

              <p className="mt-4 text-gray-600">
                En Blooming Ideas, no solo tenemos objetivos, ¡tenemos una
                misión! Estamos aquí para llevar tu presencia digital a nuevas
                alturas, aumentar tu visibilidad en cada rincón de la web y
                atraer a clientes potenciales como nunca antes.
              </p>
              <span className="text-[3rem] font-bold uppercase my-2 sm:text-4xl">
                Ya sea
              </span>
              <ul>
                <li>Incrementar tu presencia digital</li>
                <li>Aumentar tu visibilidad en tus plataformas dgitales</li>
                <li>Atracción de clientes</li>
                <li>Construir e impulsar tu marca</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPortada;
