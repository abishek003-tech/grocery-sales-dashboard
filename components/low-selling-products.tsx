import { TrendingDown, AlertCircle } from 'lucide-react';

interface Product {
  name: string;
  sales: number;
  trend: string;
}

const products: Product[] = [
  { name: 'Specialty Cheese', sales: 45, trend: '-8%' },
  { name: 'Organic Kale', sales: 38, trend: '-12%' },
  { name: 'Frozen Berries', sales: 52, trend: '-5%' },
  { name: 'Almond Milk (1L)', sales: 61, trend: '-6%' },
];

export default function LowSellingProducts() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
        <h2 className="text-lg md:text-xl font-bold text-foreground">
          Low-Selling Products
        </h2>
      </div>

      <div className="space-y-3">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-100"
          >
            <div className="flex-1 flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.sales} units</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <TrendingDown size={20} className="text-orange-600" />
              <span className="font-bold text-orange-600 text-sm">{product.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
