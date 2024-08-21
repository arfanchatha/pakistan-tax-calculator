import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  ResponsiveContainer,
  Label,
} from "recharts";

const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#0088FE"];

const CustomPieChart = ({ annualSalaryAfterTax, totalTax }) => {
  const data = [
    { name: "Annual Salary", value: annualSalaryAfterTax },
    { name: "Annual Tax", value: totalTax },
  ];

  const placeholderData = [{ name: "No Salary", value: 1 }];
  const chartData = data[0].value === 0 ? placeholderData : data;

  const labelContent = data[0].value
    ? ({ percent }) => ` ${(percent * 100).toFixed(0)}%`
    : ``;

  return (
    <ResponsiveContainer height={320} width="100%">
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          labelLine={true}
          // {data[0].value &&

          label={labelContent}
          // }
          paddingAngle={0.01}
          fill="#8884d8"
          startAngle={-90}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {data[0].value && (
          <Tooltip formatter={(value) => value && value.toLocaleString()} />
        )}
        <Label />

        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
