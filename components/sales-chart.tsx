'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { week: 'Week 1', sales: 2400 },
  { week: 'Week 2', sales: 2210 },
  { week: 'Week 3', sales: 2290 },
  { week: 'Week 4', sales: 2000 },
  { week: 'Week 5', sales: 2181 },
  { week: 'Week 6', sales: 2500 },
  { week: 'Week 7', sales: 2100 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-foreground">
          Monthly Sales Trend
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Weekly sales performance
        </p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
              formatter={(value) => [`$${value}`, 'Sales']}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#72c92e"
              strokeWidth={3}
              dot={{ fill: '#72c92e', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
