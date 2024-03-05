'use client'
import Footer from '@/components/footer/Footer';
import SiteInfo from '@/components/siteInfo/SiteInfo';
import SitesSelect from '@/components/siteSelect/SitesSelect';
import { useState } from 'react';

export default function Home() {
  const [siteSelected, setSiteSelected] = useState('');
  return (
    <>
      <Footer />
      <section className="flex flex-col md:flex-row items-center justify-between px-6">
        <h2 className="text-2xl text-center text-bold my-10">
          Daily Meal Count Form
        </h2>
        <span className="min-w-56">
          <SitesSelect siteSelected={siteSelected} setSiteSelected={setSiteSelected}/>
        </span>
      </section>
      <main >
      <SiteInfo siteSelected={siteSelected}/>
      
      </main>
    </>
  );
}
