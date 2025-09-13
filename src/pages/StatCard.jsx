import React from "react";

export default function StatCard({ title, value, subtext, subtextColor = "#7c40ff" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow p-4 flex flex-col items-center justify-center">
      <div className="text-sm font-semibold text-gray-400 mb-2">{title}</div>
      <div className="text-2xl font-bold text-[#252C44]">{value}</div>
      {subtext && (
        <div className="text-xs mt-1 font-semibold" style={{ color: subtextColor }}>
          {subtext}
        </div>
      )}
    </div>
  );
}
