import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart(props) {
  const theme = useTheme();
  const { data } = props;
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            scale="band"
            stroke={theme.palette.text.secondary}
          />
          <YAxis yAxisId="left" stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Số lượng (m)
            </Label>
          </YAxis>
          <YAxis yAxisId="right" orientation="right">
            <Label
              angle={90}
              position="right"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Số cây
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar
            name="Độ dài thành phẩm"
            yAxisId="left"
            dataKey="completedLength"
            barSize={20}
            fill={theme.palette.info.light}
          />
          <Line
            name="Số cây thành phẩm"
            yAxisId="right"
            type="monotone"
            dataKey="completedNumber"
            stroke={theme.palette.error.light}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
