'use client';
import CountersSection from '@/components/CountersSection/CountersSection';
import TotalsSection from '@/components/TotalsSection/TotalsSection';
import Footer from '@/components/footer/Footer';
import MealForm from '@/components/mealForm/MealForm';
import SiteInfo from '@/components/siteInfo/SiteInfo';
import SitesSelect from '@/components/siteSelect/SitesSelect';
import { useEffect, useState } from 'react';

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

  const handleNext = () => {
    if (isValid()) {
      console.log(mealForm);
      console.log('counter 1: ', firstCounter);
      console.log('counter 2: ', secondCounter);
      console.log('counter 3: ', programCounter);
      console.log('counter 4: ', noProgramCounter);
    } else {
      console.error('Form is not valid');
    }
  };

  return (
    <>
      <Footer />
      <section className="flex flex-col md:flex-row items-center justify-between px-6">
        <h2 className="text-2xl text-center text-bold my-10">
          Daily Meal Count Form
        </h2>
        <span className="min-w-56">
          <SitesSelect
            siteSelected={siteSelected}
            setSiteSelected={setSiteSelected}
          />
        </span>
      </section>
      <main className="w-full flex items-center justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-4/5 gap-8">
          <SiteInfo siteSelected={siteSelected} />
          <MealForm
            mealForm={mealForm}
            setMealForm={setMealForm}
            errors={errors}
          />
        </div>
      </main>
      <div className="my-20">
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
      </div>

      {/* Seguir con la seccion 4 de los totales */}
      <div className="my-20">
        <TotalsSection />
      </div>

      <button
        className="border border-black rounded-xl p-4 mb-20"
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
}
