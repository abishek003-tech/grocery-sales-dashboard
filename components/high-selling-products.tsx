import { TrendingUp } from 'lucide-react';

interface Product {
  name: string;
  sales: number;
  trend: string;
}

const products: Product[] = [
  { name: 'Organic Bananas', sales: 1240, trend: '+24%' },
  { name: 'Whole Wheat Bread', sales: 980, trend: '+18%' },
  { name: 'Fresh Milk (1L)', sales: 875, trend: '+15%' },
  { name: 'Tomatoes (kg)', sales: 720, trend: '+12%' },
];

export default function HighSellingProducts() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-green-500 rounded-full"></div>
        <h2 className="text-lg md:text-xl font-bold text-foreground">
          High-Selling Products
        </h2>
      </div>

      <div className="space-y-3">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100"
          >
            <div className="flex-1">
              <p className="font-medium text-foreground">{product.name}</p>
              <p className="text-sm text-muted-foreground">{product.sales} units</p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TrendingUp size={20} className="text-green-600" />
              <span className="font-bold text-green-600 text-sm">{product.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
