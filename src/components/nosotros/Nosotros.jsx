const Nosotros = () => {
  return (
    <section className=" bg-neutral-200 "  >
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="relative flex items-center my-auto" data-aos="fade-down"
    data-aos-duration="1200"
    data-aos-anchor-placement="center-bottom">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-[5em] text-[#854782] font-bold mt-6">
                Sobre Nosotros
              </h2>

              <p className="mt-4 text-balance">
                Somos una empresa de marketing fundada en 2020. Nuestro objetivo
                es ofrecer soluciones creativas y efectivas para impulsar la
                presencia en línea de nuestros clientes.
              </p>
              <p className="mt-4 text-balance">
                Con un enfoque en redes sociales y estrategias digitales,
                estamos comprometidos a ayudar a nuestros clientes a alcanzar
                sus metas de marketing de manera innovadora y orientada al
                resultado.
              </p>

             
            </div>
          </div>
          <div className=" z-5 lg:py-16">
            <div className="h-64 sm:h-80 lg:h-full" data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-anchor-placement="center-bottom">
              <a href="https://www.instagram.com/bloomingideashn?igsh=ZmExaWdvNDFvazk=" className="group block">
                <img
                  src="/public/Profile/main.jpeg"
                  alt=""
                  className="h-[500px] aspect-square w-full rounded object-contain"
                />

                <div className="mt-3">
                  <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Ms. Andrea Alvarenga
                  </h3>
<p>Ella es la mente detrás de Blooming Ideas, una figura fundamental que te respaldará en la mejora de tu negocio. Su compromiso con la excelencia y su capacidad para generar ideas frescas y creativas hacen de ella un recurso invaluable para cualquier emprendedor o empresario que busque llevar su negocio al siguiente nivel. 
</p>


                
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
