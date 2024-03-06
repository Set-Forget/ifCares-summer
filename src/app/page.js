'use client';
import Footer from '@/components/footer/Footer';
import MealForm from '@/components/mealForm/MealForm';
import SiteInfo from '@/components/siteInfo/SiteInfo';
import SitesSelect from '@/components/siteSelect/SitesSelect';
import { useState } from 'react';

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
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === null);
  };

  const handleNext = () => {
    if (isValid()) {
      console.log(mealForm);
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
      <main className='w-full flex items-center justify-center my-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-4/5 gap-8">
          <SiteInfo siteSelected={siteSelected} />
          <MealForm
            mealForm={mealForm}
            setMealForm={setMealForm}
            errors={errors}
          />
        </div>
      </main>
      {/* Seguir con la seccion 3 de los contadores */}
      <button
        className="border border-black rounded-xl p-4"
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
}
