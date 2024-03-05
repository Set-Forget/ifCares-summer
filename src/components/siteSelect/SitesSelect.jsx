'use client';
import { API_URL_ENDPOINT } from '@/constants/constants';
import React, { useEffect, useState } from 'react';

const SitesSelect = ({ siteSelected, setSiteSelected }) => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(API_URL_ENDPOINT + '?type=sitesList')
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((e) => console.error('Error:', e));
  }, []);

  return (
    <div>
      <select
        id="sites"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
        onChange={(e) => setSiteSelected(e.target.value)}
      >
        {siteSelected == '' && <option value="">Select Site</option>}

        {sites.map((site) => (
          <option key={site} value={site}>
            {site}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SitesSelect;
