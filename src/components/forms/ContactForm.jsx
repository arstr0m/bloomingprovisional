const ContactForm = () => {
  return (
    <>
      <section className=" pt-2">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
              Estamos profundamente comprometidos en ofrecerte el mejor servicio posible en cada paso del camino. Tu satisfacción es nuestra máxima prioridad, y estamos aquí para responder a todas tus preguntas y preocupaciones. No dudes en comunicarte con nosotros a través del siguiente formulario de contacto. Ya sea que necesites ayuda con un pedido, tengas preguntas sobre nuestros productos o simplemente desees obtener más información sobre nuestros servicios, estamos aquí para ayudarte en todo lo que podamos. Tu confianza en nosotros es invaluable, y haremos todo lo posible para garantizar que tu experiencia con nosotros sea lo más fluida y satisfactoria posible.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                 +504 33552026{" "}
                </a>

                <address className="mt-2 not-italic">
                  Tegucigalpa, Honduras
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Maria Perez"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="bloomingIdeas@gmail.com"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Numero Telefonico
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="99223344"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

              

                <div>
                  <label className="sr-only" htmlFor="message">
                    Mensaje
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#854782] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
