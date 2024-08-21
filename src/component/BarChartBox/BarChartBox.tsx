import "./barChartBox.scss"
import { BarChart,ResponsiveContainer,Bar,Tooltip } from "recharts";

type Props = {
    title:string;
    color:string;
    dataKey:string;
    chartData:object[];
}
export const BarChartBox = (props:Props) => {
  return (
    <div className="barChartbox">
        <h3>{props.title}</h3>
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
            <Tooltip
            contentStyle={{background: "#2a3447", borderRadius:"5px"}}
            labelStyle={{display: "none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}
export default BarChartBox
