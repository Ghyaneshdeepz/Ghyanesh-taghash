import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { AGE_GROUPS } from "../utils/constants";

export default function AgeLineChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-bold text-lg text-[#252C44] mb-3">Age Groups Over Time</h3>
      <ResponsiveContainer width="100%" height={230}>
        <LineChart data={data}>
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
          {AGE_GROUPS.map(({ label }, index) => (
            <Line
              key={label}
              type="monotone"
              dataKey={label}
              stroke="#7c40ff"
              strokeOpacity={1 - index * 0.3}
              strokeWidth={index === 0 ? 4 : 3}
              dot={{ r: 7, fill: "#7c40ff", opacity: 1 - index * 0.3 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
