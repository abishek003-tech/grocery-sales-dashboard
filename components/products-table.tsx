'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  salesStatus: 'High' | 'Medium' | 'Low';
}

const products: Product[] = [
  {
    id: 1,
    name: 'Organic Bananas',
    category: 'Fruits',
    stock: 145,
    salesStatus: 'High',
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    category: 'Bakery',
    stock: 32,
    salesStatus: 'High',
  },
  {
    id: 3,
    name: 'Fresh Milk (1L)',
    category: 'Dairy',
    stock: 78,
    salesStatus: 'High',
  },
  {
    id: 4,
    name: 'Tomatoes (kg)',
    category: 'Vegetables',
    stock: 52,
    salesStatus: 'High',
  },
  {
    id: 5,
    name: 'Specialty Cheese',
    category: 'Dairy',
    stock: 18,
    salesStatus: 'Low',
  },
  {
    id: 6,
    name: 'Organic Kale',
    category: 'Vegetables',
    stock: 24,
    salesStatus: 'Low',
  },
  {
    id: 7,
    name: 'Frozen Berries',
    category: 'Frozen',
    stock: 56,
    salesStatus: 'Medium',
  },
  {
    id: 8,
    name: 'Almond Milk (1L)',
    category: 'Dairy',
    stock: 41,
    salesStatus: 'Medium',
  },
];

function StockIndicator({ stock }: { stock: number }) {
  let color = 'bg-green-100 text-green-700';
  if (stock < 25) color = 'bg-red-100 text-red-700';
  else if (stock < 50) color = 'bg-orange-100 text-orange-700';

  return (
    <span
      className={`${color} px-3 py-1 rounded-full text-sm font-medium inline-block`}
    >
      {stock} units
    </span>
  );
}

function SalesStatusBadge({ status }: { status: 'High' | 'Medium' | 'Low' }) {
  const colors = {
    High: 'bg-green-100 text-green-700',
    Medium: 'bg-blue-100 text-blue-700',
    Low: 'bg-orange-100 text-orange-700',
  };

  return (
    <span className={`${colors[status]} px-3 py-1 rounded-full text-sm font-medium`}>
      {status}
    </span>
  );
}

export default function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
          Products & Stock
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr className="text-left text-sm font-semibold text-muted-foreground">
              <th className="pb-3 px-2">Product Name</th>
              <th className="pb-3 px-2">Category</th>
              <th className="pb-3 px-2">Stock Level</th>
              <th className="pb-3 px-2">Sales Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b border-border hover:bg-secondary transition-colors"
              >
                <td className="py-4 px-2 font-medium text-foreground">
                  {product.name}
                </td>
                <td className="py-4 px-2 text-muted-foreground text-sm">
                  {product.category}
                </td>
                <td className="py-4 px-2">
                  <StockIndicator stock={product.stock} />
                </td>
                <td className="py-4 px-2">
                  <SalesStatusBadge status={product.salesStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  );
}
