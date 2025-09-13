import React, { useEffect, useState, useMemo } from "react";
import taghash from "../assets/taghash.png";
import calculateAge from "../utils/calculateAge";
import { AGE_GROUPS } from "../utils/constants";

import StatCard from "./StatCard";
import AgeLineChart from "./AgeLineChart";
import GenderBarChart from "./GenderBarChart";
import PeopleTable from "./PeopleTable";

export default function Dashboard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/people")
      .then((res) => res.json())
      .then((res) => {
        if (res.success !== false) setPeople(res.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const lineData = useMemo(() => {
    const counts = AGE_GROUPS.reduce((acc, group) => {
      acc[group.label] = 0;
      return acc;
    }, {});
    people.forEach(({ birthdate }) => {
      const age = calculateAge(birthdate);
      if (age !== null) {
        const group = AGE_GROUPS.find((g) => age >= g.min && age <= g.max);
        if (group) counts[group.label]++;
      }
    });
    return [{ year: new Date().getFullYear(), ...counts }];
  }, [people]);

  const barData = useMemo(() => {
    let male = 0,
      female = 0;
    people.forEach(({ gender }) => {
      const g = gender?.toLowerCase();
      if (g === "male") male++;
      else if (g === "female") female++;
    });
    return [{ year: new Date().getFullYear(), Male: male, Female: female }];
  }, [people]);

  const totalVaccinated = useMemo(() => people.filter((p) => p.is_vaccinated).length, [people]);

  const maleCount = barData[0]?.Male || 0;
  const femaleCount = barData[0]?.Female || 0;
  const totalMembers = people.length;

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-row font-sans">
      <aside className="bg-white w-64 min-h-screen border-r border-gray-200 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <img src={taghash} alt="TagHash Logo" className="h-10 w-auto" />
        </div>
        <nav>
          <div className="mb-2 text-xs text-gray-400 font-semibold">MENU</div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-lg bg-[#F3F6FF] text-[#7c40ff] font-semibold"
              >
                <span className="mr-2">
                  <svg width="18" height="18" fill="#7c40ff">
                    <rect width="18" height="6" rx="3" />
                    <rect y="12" width="18" height="6" rx="3" />
                  </svg>
                </span>
                Dashboard
              </a>
            </li>
            <li>
              <span className="flex items-center">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
                >
                  Graph
                </a>
                <span className="ml-2 bg-green-50 text-green-500 text-xs rounded px-2 py-0.5 font-semibold">
                  NEW
                </span>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
                >
                  Hire Me
                </a>
                <span className="ml-2 bg-green-50 text-green-500 text-xs rounded px-2 py-0.5 font-semibold">
                  NEW
                </span>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
                >
                  My Portfolio
                </a>
                <span className="ml-2 bg-green-50 text-green-500 text-xs rounded px-2 py-0.5 font-semibold">
                  NEW
                </span>
              </span>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
              >
                User Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg text-[#252C44] hover:bg-[#F3F6FF] font-medium"
              >
                Task
              </a>
            </li>
          </ul>
        </nav>

     
        <div className="mt-auto pt-6 border-t border-gray-200 text-gray-500 text-sm">
          <p className="mb-2 font-semibold text-gray-700">About</p>
          <p className="mb-4">
            This dashboard provides demographic and vaccination data insights.
          </p>
          <p className="mb-2 font-semibold text-gray-700">Help & Support</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="ghyanesh42" className="hover:underline text-[#7c40ff]">ghyanesh.co@gmail.com</a></li>
            <li><a href="" className="hover:underline text-[#7c40ff]">+91 9108591464</a></li>
            <li><a href="#" className="hover:underline text-[#7c40ff]">Mangalore</a></li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md bg-white border border-gray-200">
              <svg width="24" height="24" fill="none">
                <rect x="6" y="6" width="12" height="2" rx="1" fill="#7c40ff" />
                <rect x="6" y="12" width="12" height="2" rx="1" fill="#7c40ff" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search or type command..."
              className="ml-4 px-4 py-2 w-72 bg-white border border-gray-200 rounded-lg outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-4 ">
            <button className="p-2 rounded-full bg-white border border-gray-200">
              <svg width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="8" fill="#7c40ff" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 max-w-full mx-auto mb-10">
          <StatCard title="Total Survey Members" value={totalMembers} subtext="+5.4%" subtextColor="green" />
          <StatCard title="Male" value={maleCount} subtext="Stats" />
          <StatCard title="Female" value={femaleCount} subtext="Stats" />
          <StatCard title="Total Vaccinated" value={totalVaccinated} subtext="Stats" />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <AgeLineChart data={lineData} />
          <GenderBarChart data={barData} />
        </div>

        <PeopleTable people={people} />
      </main>
    </div>
  );
}
