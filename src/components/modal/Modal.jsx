import React, { useState } from 'react';
import SignaturePad from '../signaturePad/SignaturePad';

const Modal = ({ showModal, setShowModal, submitData, siteSelected }) => {
  const [signature, setSignature] = useState('');
  const [signatureError, setSignatureError] = useState('');

  const handleModalClose = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  if (showModal) {
    document.body.style.overflow = 'hidden';
  }

  const handleSubmit = () => {
    let newError;
    if (signature == '') {
      newError = 'Please Sign Above';
    } else {
      submitData.signature = signature;
      submitData.deliveryTime = submitData.deliveryTime.format('hh:mm A');
      submitData.date = submitData.date.format('MM/DD/YYYY');
      submitData.site = siteSelected;
      submitData.type = 'mealCountForm';
      console.log(submitData);
    }

    setSignatureError(newError);
  };
  return (
    <div
      id="select-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        showModal ? 'flex' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center bg-gray-500 bg-opacity-50`}
    >
      <div className="relative px-4 py-2 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between px-4 pt-4 rounded-t">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="select-modal"
              onClick={handleModalClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="px-4 py-2 md:p-5 flex flex-col items-center justify-center">
            <p className="text-stone-500 mb-4">
              By signing below, I certify that the previous information is true
              and accurate:
            </p>

            <span className="my-2">
              <SignaturePad
                setSignature={setSignature}
                signatureError={signatureError}
              />
            </span>

            <button
              onClick={handleSubmit}
              className="text-black inline-flex w-full justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-black hover:text-white hover:bg-black"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
