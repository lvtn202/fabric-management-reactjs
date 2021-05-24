import React from "react";
import {
  ResponsiveContainer,
  Cell,
  Tooltip,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#6495ED", "#C67171", "#00CD00"];

export default function ChartFabricType(props) {
  const { data } = props;
  data.map(function (e) {
    e.completedLength = Number(e.completedLength);
    e.name = e.dyehouseName;
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
            // label={(entry) => `${entry.dyehouseName}: ${entry.completedLength}`}
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
