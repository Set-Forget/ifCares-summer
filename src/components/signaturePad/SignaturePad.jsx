import React, { useRef, useState } from 'react';

const SignaturePad = ({ setSignature, signatureError }) => {
  const canvasRef = useRef(null);
  const [isSigning, setIsSigning] = useState(false);

  const startSigning = (event) => {
    setIsSigning(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopSigning = () => {
    setIsSigning(false);
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL('image/png');
    setSignature(dataURL);
  };

  const draw = (event) => {
    if (!isSigning) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignature('');
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        onMouseDown={startSigning}
        onMouseUp={stopSigning}
        onMouseMove={draw}
        className="border-2 border-stone-500"
      ></canvas>
      <div className="flex flex-col items-center justify-center  mb-4">
        <button
          onClick={clear}
          className="mt-2 py-1 px-3 rounded border border-red-600 hover:bg-red-600 hover:text-white"
        >
          Clear
        </button>
        {signatureError && (
          <span className="mt-1 text-red-600 text-xs">{signatureError}</span>
        )}
      </div>
    </div>
  );
};

export default SignaturePad;
