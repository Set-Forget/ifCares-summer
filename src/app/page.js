'use client';
import CountersSection from '@/components/CountersSection/CountersSection';
import TotalsSection from '@/components/TotalsSection/TotalsSection';
import Footer from '@/components/footer/Footer';
import MealForm from '@/components/mealForm/MealForm';
import Modal from '@/components/modal/Modal';
import RequestCounter from '@/components/requestCounter/RequestCounter';
import SiteInfo from '@/components/siteInfo/SiteInfo';
import SitesSelect from '@/components/siteSelect/SitesSelect';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [siteSelected, setSiteSelected] = useState('');
  const [mealForm, setMealForm] = useState({
    mealType: '',
    deliveryTime: null,
    date: null,
    mealsReceived: '',
    mealsFromPreviousDays: '',
  });
  const [errors, setErrors] = useState({
    mealType: null,
    deliveryTime: null,
    date: null,
    mealsReceived: null,
    mealsFromPreviousDays: null,
  });
  const [sectionDisabled, setSectionDisabled] = useState(true);
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [programCounter, setProgramCounter] = useState(0);
  const [noProgramCounter, setNoProgramCounter] = useState(0);

  const [reimbursableMeals, setReimbursableMeals] = useState(0);
  const [leftoverMeals, setLeftoverMeals] = useState(0);

  const [additionalMeals, setAdditionalMeals] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const submitData = {
    mealType: mealForm.mealType,
    deliveryTime: mealForm.deliveryTime,
    date: mealForm.date,
    mealsReceived: mealForm.mealsReceived,
    mealsFromPreviousDays: mealForm.mealsFromPreviousDays,
    firstCounter,
    secondCounter,
    programCounter,
    noProgramCounter,
    reimbursableMeals,
    leftoverMeals,
    additionalMeals,
  };

  useEffect(() => {
    if (
      mealForm.mealType != '' &&
      mealForm.deliveryTime != null &&
      mealForm.date != null &&
      mealForm.mealsReceived != '' &&
      mealForm.mealsFromPreviousDays != ''
    ) {
      setSectionDisabled(false);
    }
  }, [mealForm]);

  const isValid = () => {
    const {
      mealType,
      deliveryTime,
      date,
      mealsReceived,
      mealsFromPreviousDays,
    } = mealForm;

    const newErrors = {
      siteSelected: siteSelected ? null : 'Please select a Site',
      mealType: mealType ? null : 'Meal type is required',
      deliveryTime: deliveryTime ? null : 'Delivery time is required',
      date: date ? null : 'Date is required',
      mealsReceived:
        mealsReceived !== '' &&
        !isNaN(mealsReceived) &&
        Number(mealsReceived) >= 0
          ? null
          : 'Meals received must be a non-negative number',
      mealsFromPreviousDays:
        mealsFromPreviousDays !== '' &&
        !isNaN(mealsFromPreviousDays) &&
        Number(mealsFromPreviousDays) >= 0
          ? null
          : 'Meals from previous days must be a non-negative number',
      firstCounter:
        firstCounter > 0 ? null : 'At least 1 meal needs to be served',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === null);
  };

  const siteSelectRef = useRef(null);
  const mealFormRef = useRef(null);
  const countersSectionRef = useRef(null);

  const handleNext = () => {
    if (!isValid()) {
      if (errors.siteSelected) {
        siteSelectRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      } else if (errors.firstCounter) {
        countersSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      } else {
        mealFormRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <Footer />
      <section
        ref={siteSelectRef}
        className="flex flex-col md:flex-row items-center justify-between px-6"
      >
        <h2 className="text-2xl text-center text-bold my-10">
          Daily Meal Count Form
        </h2>
        <span className="min-w-56">
          <SitesSelect
            errors={errors}
            siteSelected={siteSelected}
            setSiteSelected={setSiteSelected}
          />
          {errors.siteSelected && (
            <span className="text-xs text-red-600 ml-4">
              {errors.siteSelected}
            </span>
          )}
        </span>
      </section>
      <main className="my-4 flex flex-col md:flex-row items-center justify-evenly">
        <SiteInfo siteSelected={siteSelected} />
        <div ref={mealFormRef}>
          <MealForm
            mealForm={mealForm}
            setMealForm={setMealForm}
            errors={errors}
          />
        </div>
      </main>
      <div
        ref={countersSectionRef}
        className="my-4 flex flex-col md:flex-row items-center justify-evenly"
      >
        <CountersSection
          sectionDisabled={sectionDisabled}
          firstCounter={firstCounter}
          setFirstCounter={setFirstCounter}
          secondCounter={secondCounter}
          setSecondCounter={setSecondCounter}
          programCounter={programCounter}
          setProgramCounter={setProgramCounter}
          noProgramCounter={noProgramCounter}
          setNoProgramCounter={setNoProgramCounter}
          errors={errors}
        />
        <div className="flex flex-col items-center gap-10">
          <TotalsSection
            firstCounter={firstCounter}
            secondCounter={secondCounter}
            programCounter={programCounter}
            noProgramCounter={noProgramCounter}
            reimbursableMeals={reimbursableMeals}
            setReimbursableMeals={setReimbursableMeals}
            leftoverMeals={leftoverMeals}
            setLeftoverMeals={setLeftoverMeals}
          />
          <RequestCounter
            additionalMeals={additionalMeals}
            setAdditionalMeals={setAdditionalMeals}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-20 mt-10 md:mt-0">
        <button
          className="border border-black rounded-xl px-6 py-2  hover:bg-black hover:text-white"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          submitData={submitData}
          siteSelected={siteSelected}
        />
      )}
    </>
  );
}
