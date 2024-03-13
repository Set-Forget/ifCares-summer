import React, { useState } from 'react';

const CountersSection = ({
  sectionDisabled,
  firstCounter,
  setFirstCounter,
  secondCounter,
  setSecondCounter,
  programCounter,
  setProgramCounter,
  noProgramCounter,
  setNoProgramCounter,
  errors,
}) => {
  const handleFirstMealDecrease = () => {
    if (firstCounter == 0) return;
    setFirstCounter(firstCounter - 1);
  };

  const handleFirstMealIncrease = () => {
    if (firstCounter == 150) return;
    setFirstCounter(firstCounter + 1);
  };

  const handleSecondMealDecrease = () => {
    if (secondCounter == 0) return;
    setSecondCounter(secondCounter - 1);
  };

  const handleSecondMealIncrease = () => {
    if (secondCounter == 10) return;
    setSecondCounter(secondCounter + 1);
  };

  const handleProgramMealDecrease = () => {
    if (programCounter == 0) return;
    setProgramCounter(programCounter - 1);
  };

  const handleProgramMealIncrease = () => {
    if (programCounter == 10) return;
    setProgramCounter(programCounter + 1);
  };

  const handleNoProgramMealDecrease = () => {
    if (noProgramCounter == 0) return;
    setNoProgramCounter(noProgramCounter - 1);
  };

  const handleNoProgramMealIncrease = () => {
    if (noProgramCounter == 10) return;
    setNoProgramCounter(noProgramCounter + 1);
  };

  return (
    <>
      <div className="my-16 w-[350px] lg:w-[400px] xl:w-[500px]">
        <h4 className="text-center mb-4 hidden md:block">
          First Meals Served to Children
        </h4>
        <div className="w-80 mx-auto flex items-center justify-between">
          <button
            onClick={handleFirstMealDecrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-l-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="w-full bg-white border text-base md:text-xl flex flex-col items-center justify-center p-0 md:py-2">
            {firstCounter}
            <h5 className="text-xs text-stone-500 md:hidden">
              First Meals Served to Children
            </h5>
          </span>

          <button
            onClick={handleFirstMealIncrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-r-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        {errors.firstCounter && (
          <h4 className="text-center text-xs text-red-600 mt-1">
            {errors.firstCounter}
          </h4>
        )}

        <h4 className="text-center mb-4 mt-10 hidden md:block">
          Second Meals Served to Children
        </h4>
        <div className="w-80 mx-auto flex items-center justify-between mt-10 md:mt-0">
          <button
            onClick={handleSecondMealDecrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-l-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <span className="w-full bg-white border text-base md:text-xl flex flex-col items-center justify-center p-0 md:py-2">
            {secondCounter}
            <h5 className="text-xs text-stone-500 md:hidden">
              Second Meals Served to Children
            </h5>
          </span>

          <button
            onClick={handleSecondMealIncrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-r-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <h4 className="text-center mb-4 mt-10 hidden md:block">
          Meals Served to Program Adults
        </h4>
        <div className="w-80 mx-auto flex items-center justify-between mt-10 md:mt-0">
          <button
            onClick={handleProgramMealDecrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-l-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <span className="w-full bg-white border text-base md:text-xl flex flex-col items-center justify-center p-0 md:py-2">
            {programCounter}
            <h5 className="text-xs text-stone-500 md:hidden">
              Meals Served to Program Adults
            </h5>
          </span>

          <button
            onClick={handleProgramMealIncrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-r-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <h4 className="text-center mb-4 mt-10 hidden md:block">
          Meals Served To Non Program Adults
        </h4>
        <div className="w-80 mx-auto flex items-center justify-between mt-10 md:mt-0">
          <button
            onClick={handleNoProgramMealDecrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-l-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <span className="w-full bg-white border text-base md:text-xl flex flex-col items-center justify-center p-0 md:py-2">
            {noProgramCounter}
            <h5 className="text-xs text-stone-500 md:hidden">
              Meals Served To Non Program Adults
            </h5>
          </span>

          <button
            onClick={handleNoProgramMealIncrease}
            className="flex items-center justify-center border p-2 bg-stone-100 rounded-r-lg hover:bg-stone-200"
            // disabled={sectionDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CountersSection;
