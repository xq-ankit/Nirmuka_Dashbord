import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import "./bigChartBox.scss";
  
  const data = [
    {
      name: "Sun",
      events: 4000,
      medicines: 2400,
      maintainence: 2400,
    },
    {
      name: "Mon",
      events: 3000,
      medicines: 1398,
      maintainence: 2210,
    },
    {
      name: "Tue",
      events: 2000,
      medicines: 9800,
      maintainence: 2290,
    },
    {
      name: "Wed",
      events: 2780,
      medicines: 3908,
      maintainence: 2000,
    },
    {
      name: "Thu",
      events: 1890,
      medicines: 4800,
      maintainence: 2181,
    },
    {
      name: "Fri",
      events: 2390,
      medicines: 3800,
      maintainence: 2500,
    },
    {
      name: "Sat",
      events: 3490,
      medicines: 4300,
      maintainence: 2100,
    },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="events"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="medicines"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="maintainence"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;