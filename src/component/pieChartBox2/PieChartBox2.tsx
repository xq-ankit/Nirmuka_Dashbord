import "./piechartbox2.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';; 

const data2 = [
    { name: "Naltrexone", value: 200, color: "#0088FE" },
    { name: "Buprenorphine", value: 400, color: "#00C49F" },
    { name: "Acamprosate", value: 100, color: "#FFBB28" },
    { name: "modafinil", value: 50, color: "#FF8042" },
  ];
  
const PieChartBox2 = () => {
  return (
    <div className="pieChartBox2">
        <h3>Medicines Used</h3>
        <div className="chart2">
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip
          contentStyle={{background:"white", borderRadius:"5px"}}
          />
            <Pie
              data={data2}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data2.map((item) => (
                <Cell 
                key={item.name} 
                fill={item.color} 
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
    </div>
    <div className="options2">
        {data2.map((item) => (
          <div className="option2" key={item.name}>
            <div className="title2">
              <div className="dot2" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
  </div>
  );
};

export default PieChartBox2