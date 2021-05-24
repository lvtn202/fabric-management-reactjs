import React from "react";
import {
  ResponsiveContainer,
  Cell,
  Tooltip,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ChartDyeplant(props) {
  const { data } = props;
  data.map(function (e) {
    e.completedLength = Number(e.completedLength);
    e.name = e.fabricType;
    return null;
  });
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <PieChart width={600} height={600}>
          <Pie
            dataKey="completedLength"
            data={data}
            fill="#8884d8"
            // label={(entry) => `${entry.fabricType}: ${entry.completedLength}`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
