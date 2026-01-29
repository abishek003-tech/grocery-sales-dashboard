import React from "react"
import { AlertTriangle, ShoppingCart, TrendingUp } from 'lucide-react';

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

function SummaryCard({ title, value, icon, bgColor, textColor }: CardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            {title}
          </p>
          <p className={`text-2xl md:text-3xl font-bold ${textColor}`}>
            {value}
          </p>
        </div>
        <div className={`${textColor} opacity-20`}>{icon}</div>
      </div>
    </div>
  );
}

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      <SummaryCard
        title="Total Sales"
        value="$12,450"
        icon={<ShoppingCart size={40} />}
        bgColor="bg-blue-50"
        textColor="text-blue-600"
      />
      <SummaryCard
        title="Products Sold"
        value="1,842"
        icon={<TrendingUp size={40} />}
        bgColor="bg-green-50"
        textColor="text-green-600"
      />
      <SummaryCard
        title="Low Stock Alerts"
        value="12"
        icon={<AlertTriangle size={40} />}
        bgColor="bg-orange-50"
        textColor="text-orange-600"
      />
    </div>
  );
}
