import React from "react";

export default function PeopleTable({ people }) {
  return (
    <div className="mb-12 max-w-7xl mx-auto bg-white rounded-2xl border border-gray-100 shadow p-6 overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 rounded-t-2xl">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Birth Date</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Vaccinated</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {people.map(({ id, name, gender, birthdate, is_vaccinated }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(birthdate).toLocaleDateString()}</td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                  is_vaccinated ? "text-green-600" : "text-red-600"
                }`}
              >
                {is_vaccinated ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
