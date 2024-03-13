import React from 'react';

const RequestCounter = ({ additionalMeals, setAdditionalMeals }) => {
  const handleRequestDecrease = () => {
    if (additionalMeals == 0) return;
    setAdditionalMeals(additionalMeals - 1);
  };

  const handleRequestIncrease = () => {
    if (additionalMeals == 15) return;
    setAdditionalMeals(additionalMeals + 1);
  };

  return (
    <div>
      <h4 className=" text-center mb-4 hidden md:block">
        Meals requested after all available meals were served
      </h4>
      <div className="w-80 mx-auto flex items-center justify-between mt-10 md:mt-0">
        <button
          onClick={handleRequestDecrease}
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
          {additionalMeals}
          <h5 className="text-xs text-stone-500 md:hidden">
            Additional Meals Requested
          </h5>
        </span>

        <button
          onClick={handleRequestIncrease}
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
  );
};

export default RequestCounter;
