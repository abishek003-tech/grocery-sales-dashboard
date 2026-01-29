'use client';

import Header from '@/components/header';
import SummaryCards from '@/components/summary-cards';
import HighSellingProducts from '@/components/high-selling-products';
import LowSellingProducts from '@/components/low-selling-products';
import SalesChart from '@/components/sales-chart';
import ProductsTable from '@/components/products-table';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
        <SummaryCards />
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <HighSellingProducts />
          <LowSellingProducts />
        </div>

        <div className="mb-8">
          <SalesChart />
        </div>

        <div>
          <ProductsTable />
        </div>
      </main>
    </div>
  );
}
