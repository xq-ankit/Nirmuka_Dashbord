import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';; 
import "./pieChartBox.scss";
const data = [
    { name: "LSD", value: 200, color: "#0088FE" },
    { name: "Cocain", value: 400, color: "#00C49F" },
    { name: "Morphine", value: 100, color: "#FFBB28" },
    { name: "Hallucinogens", value: 50, color: "#FF8042" },
  ];
  
const PieChartBox = () => {
  return (
    <div className="pieChartBox">
        <h2>Addition Stats</h2>
        <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Tooltip
          contentStyle={{background:"white", borderRadius:"5px"}}
          />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell 
                key={item.name} 
                fill={item.color} 
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
    </div>
    <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
  </div>
  );
};

export default PieChartBox