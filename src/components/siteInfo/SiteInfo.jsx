'use client';
import { API_URL_ENDPOINT } from '@/constants/constants';
import React, { useEffect, useState } from 'react';

const SiteInfo = ({ siteSelected }) => {
  const [siteData, setSiteData] = useState({});
  const { name, address, telephone, supervisor, foodTemp, milkTemp } = siteData;

  // deberia usar useMemo?
  useEffect(() => {
    if (siteSelected == '') return;
    fetch(API_URL_ENDPOINT + `?type=siteInfo&siteName=${siteSelected}`)
      .then((res) => res.json())
      .then((data) => setSiteData(data))
      .catch((e) => console.error('Error: ', e));
  }, [siteSelected]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
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
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Site Name
            </th>
            <td className="px-6 py-4">{name}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Address
            </th>
            <td className="px-6 py-4">{address}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Telephone
            </th>
            <td className="px-6 py-4">{telephone}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Supervisor
            </th>
            <td className="px-6 py-4">{supervisor}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Food Temp
            </th>
            <td className="px-6 py-4">{foodTemp}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
            >
              Milk Temp
            </th>
            <td className="px-6 py-4">{milkTemp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SiteInfo;
