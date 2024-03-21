'use client';
import { API_URL_ENDPOINT } from '@/constants/constants';
import React, { useEffect, useState } from 'react';

const SiteInfo = ({ siteSelected, setIsLoadingSiteData }) => {
  const [siteData, setSiteData] = useState({});
  const { name, address, telephone, supervisor, foodTemp, milkTemp } = siteData;

  useEffect(() => {
    if (siteSelected == '') return;
    setIsLoadingSiteData(true);
    fetch(API_URL_ENDPOINT + `?type=siteInfo&siteName=${siteSelected}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingSiteData(false);
        setSiteData(data);
      })
      .catch((e) => {
        setIsLoadingSiteData(false);
        console.error('Error: ', e);
      });
  }, [siteSelected]);

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg my-16 w-[350px] lg:w-[400px] xl:w-[500px] md:h-[396px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        {/* <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
          </tr>
        </thead> */}
        <tbody>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Site Name
            </th>
            <td className="px-6 py-4 w-1/2">{name}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Address
            </th>
            <td className="px-6 py-4 w-1/2">{address}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Telephone
            </th>
            <td className="px-6 py-4 w-1/2">{telephone}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Supervisor
            </th>
            <td className="px-6 py-4 w-1/2">{supervisor}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Food Temp
            </th>
            <td className="px-6 py-4 w-1/2">{foodTemp}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 md:h-[66px]"
            >
              Milk Temp
            </th>
            <td className="px-6 py-4  w-1/2">{milkTemp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SiteInfo;
