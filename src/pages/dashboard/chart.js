import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Page G",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Page H",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Page I",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Page J",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Page K",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Hôm nay
      </Typography>
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
            dataKey="name"
            scale="band"
            stroke={theme.palette.text.secondary}
          />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Số lượng (m)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={20} fill={theme.palette.success.light} />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={theme.palette.primary.light}
          />
          <Bar dataKey="cnt" barSize={20} fill={theme.palette.info.light} />
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
