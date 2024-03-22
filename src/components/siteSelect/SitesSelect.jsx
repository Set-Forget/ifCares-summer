'use client';
import { API_URL_ENDPOINT, ROLES } from '@/constants/constants';
import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';

const SitesSelect = ({
  siteSelected,
  setSiteSelected,
  errors,
  isLoadingSiteData,
}) => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(API_URL_ENDPOINT + '?type=sitesList')
      .then((res) => res.json())
      .then((data) => {
        const userData = JSON.parse(localStorage.getItem('ifcaresSummer'));
        if (userData && userData.role == ROLES.admin) {
          setSites(data);
        } else {
          const userSites = data.filter(
            (site) => site[0] == userData.assignedSite
          );
          setSites(userSites);
        }
      })
      .catch((e) => {
        console.error('Error:', e);
      });
  }, []);

  return (
    <div className="flex items-center justify-end gap-5">
      {isLoadingSiteData && <Spinner />}
      <div className={`rounded-full p-[0.5px] bg-gradient-to-r from-indigo-100 via-indigo-600 to-indigo-100 hover:from-indigo-400 hover:via-indigo-100 hover:to-indigo-400 ${
            errors.siteSelected ? 'bg-none' : ''
          }`}>
        <select
          id="sites"
          className={`py-3 px-4 pe-9 block rounded-full text-sm min-w-[250px] focus:outline-none ${
            errors.siteSelected ? 'border border-red-600' : ''
          }`}
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
    </div>
  );
};

export default SitesSelect;
