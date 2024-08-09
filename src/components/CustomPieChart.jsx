import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#0088FE"];

const CustomPieChart = ({ annualSalary, totalTax }) => {
  const data = [
    { name: "Annual Salary", value: annualSalary },
    { name: "Annual Tax", value: totalTax },
  ];
  const placeholderData = [{ name: "No Data", value: 1 }];
  const chartData = data[1].value === undefined ? placeholderData : data;

  return (
    <PieChart width={320} height={300}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        labelLine={true}
        label={({ percent }) => ` ${(percent * 100).toFixed(0)}%`}
        paddingAngle={5}
        fill="#8884d8"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="horizontal" verticalAlign="bottom" align="center" />
    </PieChart>
  );
};

export default CustomPieChart;
