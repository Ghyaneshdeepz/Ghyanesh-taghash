import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GenderBarChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-bold text-lg text-[#252C44] mb-3">Gender Distribution Over Time</h3>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data}>
          <CartesianGrid stroke="#e6e6e6" vertical={false} />
          <XAxis dataKey="year" stroke="#7c8597" fontSize={14} />
          <YAxis stroke="#7c8597" fontSize={14} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "14px",
              border: "none",
              boxShadow: "0 2px 12px #7c40ff19",
            }}
            itemStyle={{
              color: "#7c40ff",
              fontWeight: 600,
            }}
          />
          <Legend iconType="circle" />
          <Bar dataKey="Male" fill="#7c40ff" barSize={28} radius={[8, 8, 0, 0]} />
          <Bar dataKey="Female" fill="#7c40ff" fillOpacity={0.5} barSize={28} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
