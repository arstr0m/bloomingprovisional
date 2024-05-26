import React, { useState } from 'react';

const LearnMoreModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section>
        {isModalOpen && ( 
          <div
            id="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
              <div className="px-6 py-4">
                <h2 className="text-2xl uppercase font-semibold text-[#b156ac]">
                  ¿Por qué es importante?
                </h2>
                <p className="mt-2 text-[#854782]">
                  Al mejorar tu presencia en plataformas digitales, puedes llegar
                  a más personas, mantener interesados a tus clientes actuales,
                  comunicarte mejor con ellos, y promocionar tus productos de
                  manera más efectiva, todo lo cual puede aumentar tus ventas.
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-100 text-right">
                <button
                  id="closeModalBtn"
                  className="px-4 py-2 bg-[#854782] text-white rounded"
                  onClick={closeModal} 
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LearnMoreModal;

