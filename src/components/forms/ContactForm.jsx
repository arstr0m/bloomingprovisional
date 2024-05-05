import { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:someone@example.com?subject=Consulta&body=Nombre:${name}%0AEmail:${email}%0ATeléfono:${phone}%0AMensaje:${message}`;
    window.location.href = mailtoLink;
  };
  return (

    <>
      <section className=" pt-2" id="Contacto">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-balance">
              Estamos profundamente comprometidos en ofrecerte el mejor servicio posible en cada paso del camino. Tu satisfacción es nuestra máxima prioridad, y estamos aquí para responder a todas tus preguntas y preocupaciones. No dudes en comunicarte con nosotros a través del siguiente formulario de contacto. Ya sea que necesites ayuda con un pedido, tengas preguntas sobre nuestros productos o simplemente desees obtener más información sobre nuestros servicios, estamos aquí para ayudarte en todo lo que podamos. Tu confianza en nosotros es invaluable, y haremos todo lo posible para garantizar que tu experiencia con nosotros sea lo más fluida y satisfactoria posible.
              </p>

              <div className="mt-8">
                <a href="https://wa.me/+50431597965" className="text-2xl font-bold text-pink-600">
                  {" "}
                  +504 31597965{" "}
                </a>
                <p className="text-2xl my-2 font-bold text-pink-600">bloomingIdeas@gmail.com</p>
                <address className="mt-2 not-italic">
                  Tegucigalpa, Honduras
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Maria Perez"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
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
