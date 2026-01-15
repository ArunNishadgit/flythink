"use client";
import React, { useState, useMemo } from "react";
import { Eye, Pencil, Trash2, Plus, Search, Filter, X } from "lucide-react";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPriceMin, setFilterPriceMin] = useState("");
  const [filterPriceMax, setFilterPriceMax] = useState("");

const allProducts = [
  
    { id: '#7712309', name: 'Neptune Longsleeve', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop', price: 1452.50, quantity: 1638, sale: 20, stock: 'Out of stock', category: 'T-Shirts' },
    { id: '#7712310', name: 'Corduroy slim-fit', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop', price: 1452.50, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712311', name: 'Turtleneck knitted T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=100&h=100&fit=crop', price: 1350.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712312', name: 'Wool oversized T-shirt', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop', price: 1200.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712313', name: 'Oversized poplin shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop', price: 1800.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712314', name: 'Oversized Motif T-shirt', image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=100&h=100&fit=crop', price: 950.00, quantity: 1638, sale: 20, stock: 'Out of stock', category: 'T-Shirts' },
    { id: '#7712315', name: 'Classic-fit micro-corduroy', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=100&h=100&fit=crop', price: 2100.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712316', name: 'Corduroy overshirt with pockets', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=100&h=100&fit=crop', price: 1650.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712317', name: 'Classic-fit micro-corduroy shirt', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=100&h=100&fit=crop', price: 1550.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712318', name: 'Water-repellent quilted', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop', price: 2500.00, quantity: 1638, sale: 20, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712319', name: 'Striped Cotton T-shirt', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=100&h=100&fit=crop', price: 890.00, quantity: 850, sale: 15, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712320', name: 'Vintage Denim Jacket', image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=100&h=100&fit=crop', price: 3200.00, quantity: 420, sale: 10, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712321', name: 'Polo Collar T-shirt', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=100&h=100&fit=crop', price: 1150.00, quantity: 980, sale: 25, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712322', name: 'Linen Casual Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=100&h=100&fit=crop', price: 1750.00, quantity: 670, sale: 18, stock: 'Out of stock', category: 'Shirts' },
    { id: '#7712323', name: 'Graphic Print T-shirt', image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=100&h=100&fit=crop', price: 799.00, quantity: 1250, sale: 30, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712324', name: 'Bomber Jacket Black', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop', price: 2800.00, quantity: 390, sale: 12, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712325', name: 'Oxford Button Down Shirt', image: 'https://images.unsplash.com/photo-1598032895397-b9f0c769f677?w=100&h=100&fit=crop', price: 1680.00, quantity: 720, sale: 22, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712326', name: 'V-Neck Cotton T-shirt', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=100&h=100&fit=crop', price: 920.00, quantity: 1100, sale: 20, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712327', name: 'Leather Biker Jacket', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=100&h=100&fit=crop', price: 4500.00, quantity: 180, sale: 8, stock: 'Out of stock', category: 'Jackets' },
    { id: '#7712328', name: 'Flannel Checked Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop', price: 1420.00, quantity: 890, sale: 19, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712329', name: 'Crew Neck Basic T-shirt', image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=100&h=100&fit=crop', price: 699.00, quantity: 1520, sale: 28, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712330', name: 'Suede Trucker Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop', price: 3100.00, quantity: 290, sale: 11, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712331', name: 'Hawaiian Print Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=100&h=100&fit=crop', price: 1590.00, quantity: 540, sale: 24, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712332', name: 'Athletic Fit T-shirt', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=100&h=100&fit=crop', price: 1050.00, quantity: 960, sale: 21, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712333', name: 'Windbreaker Jacket', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop', price: 2200.00, quantity: 410, sale: 14, stock: 'Out of stock', category: 'Jackets' },
    { id: '#7712334', name: 'Chambray Work Shirt', image: 'https://images.unsplash.com/photo-1598032895397-b9f0c769f677?w=100&h=100&fit=crop', price: 1380.00, quantity: 780, sale: 17, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712335', name: 'Long Sleeve Henley', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=100&h=100&fit=crop', price: 1120.00, quantity: 820, sale: 23, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712336', name: 'Puffer Jacket Navy', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=100&h=100&fit=crop', price: 2900.00, quantity: 330, sale: 13, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712337', name: 'Slim Fit Dress Shirt', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop', price: 1890.00, quantity: 650, sale: 16, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712338', name: 'Pocket T-shirt White', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=100&h=100&fit=crop', price: 750.00, quantity: 1380, sale: 26, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712339', name: 'Field Jacket Olive', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop', price: 2600.00, quantity: 270, sale: 9, stock: 'Out of stock', category: 'Jackets' },
    { id: '#7712340', name: 'Western Snap Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop', price: 1620.00, quantity: 590, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712341', name: 'Muscle Fit T-shirt', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=100&h=100&fit=crop', price: 980.00, quantity: 1050, sale: 27, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712342', name: 'Harrington Jacket', image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=100&h=100&fit=crop', price: 2400.00, quantity: 350, sale: 15, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712343', name: 'Band Collar Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=100&h=100&fit=crop', price: 1480.00, quantity: 710, sale: 18, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712344', name: 'Raglan T-shirt', image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=100&h=100&fit=crop', price: 850.00, quantity: 1200, sale: 24, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712345', name: 'Varsity Jacket', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop', price: 3300.00, quantity: 240, sale: 10, stock: 'Out of stock', category: 'Jackets' },
    { id: '#7712346', name: 'Cuban Collar Shirt', image: 'https://images.unsplash.com/photo-1598032895397-b9f0c769f677?w=100&h=100&fit=crop', price: 1720.00, quantity: 630, sale: 21, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712347', name: 'Ringer T-shirt', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=100&h=100&fit=crop', price: 920.00, quantity: 1140, sale: 25, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712348', name: 'Coach Jacket', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=100&h=100&fit=crop', price: 2150.00, quantity: 380, sale: 12, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712349', name: 'Denim Western Shirt', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop', price: 1580.00, quantity: 690, sale: 19, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712350', name: 'Scoop Neck T-shirt', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=100&h=100&fit=crop', price: 780.00, quantity: 1290, sale: 29, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712351', name: 'Parka Jacket Green', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop', price: 3400.00, quantity: 210, sale: 8, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712352', name: 'Poplin Short Sleeve Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&h=100&fit=crop', price: 1290.00, quantity: 830, sale: 22, stock: 'Out of stock', category: 'Shirts' },
    { id: '#7712353', name: 'Baseball T-shirt', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=100&h=100&fit=crop', price: 890.00, quantity: 1180, sale: 26, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712354', name: 'MA-1 Bomber Jacket', image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=100&h=100&fit=crop', price: 2750.00, quantity: 310, sale: 11, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712355', name: 'Madras Check Shirt', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=100&h=100&fit=crop', price: 1520.00, quantity: 740, sale: 20, stock: 'In Stock', category: 'Shirts' },
    { id: '#7712356', name: 'Tank Top Cotton', image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=100&h=100&fit=crop', price: 650.00, quantity: 1450, sale: 31, stock: 'In Stock', category: 'T-Shirts' },
    { id: '#7712357', name: 'Safari Jacket Beige', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=100&h=100&fit=crop', price: 2450.00, quantity: 280, sale: 13, stock: 'In Stock', category: 'Jackets' },
    { id: '#7712358', name: 'Utility Pocket Shirt', image: 'https://images.unsplash.com/photo-1598032895397-b9f0c769f677?w=100&h=100&fit=crop', price: 1640.00, quantity: 670, sale: 17, stock: 'In Stock', category: 'Shirts' }
  ];

  const categories = ["all", "Shirts" , "T-Shirts", "Jackets" ];

  // Filtering
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterName) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    if (filterCategory !== "all") {
      result = result.filter((p) => p.category === filterCategory);
    }

    if (filterPriceMin) {
      result = result.filter((p) => p.price >= parseFloat(filterPriceMin));
    }

    if (filterPriceMax) {
      result = result.filter((p) => p.price <= parseFloat(filterPriceMax));
    }

    return result;
  }, [searchTerm, filterName, filterCategory, filterPriceMin, filterPriceMax]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page : any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const clearFilters = () => {
    setFilterName("");
    setFilterCategory("all");
    setFilterPriceMin("");
    setFilterPriceMax("");
  };

  const activeFiltersCount = [
    filterName,
    filterCategory !== "all",
    filterPriceMin,
    filterPriceMax
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen p-6 transition-colors
      bg-gray-100 text-zinc-900
      dark:bg-zinc-950 dark:text-white">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Showing</span>
            <select
              className="rounded px-3 py-1.5 text-sm focus:outline-none
                bg-white border border-gray-300 text-zinc-900
                dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">entries</span>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="pl-10 pr-4 py-2 rounded w-full focus:outline-none
                bg-white border border-gray-300 text-zinc-900
                dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 rounded-lg flex items-center gap-2 transition
              bg-white border border-gray-300 hover:bg-gray-200
              dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 bg-orange-600 text-white text-xs px-2 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add new
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="rounded-lg p-6 mb-6
          bg-white border border-gray-300
          dark:bg-zinc-900 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Filter Products</h3>
            <button onClick={() => setShowFilters(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              placeholder="Product name..."
              className="rounded px-3 py-2
                bg-white border border-gray-300
                dark:bg-zinc-800 dark:border-zinc-700"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />

            <select
              className="rounded px-3 py-2
                bg-white border border-gray-300
                dark:bg-zinc-800 dark:border-zinc-700"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Min price..."
              className="rounded px-3 py-2
                bg-white border border-gray-300
                dark:bg-zinc-800 dark:border-zinc-700"
              value={filterPriceMin}
              onChange={(e) => setFilterPriceMin(e.target.value)}
            />

            <input
              type="number"
              placeholder="Max price..."
              className="rounded px-3 py-2
                bg-white border border-gray-300
                dark:bg-zinc-800 dark:border-zinc-700"
              value={filterPriceMax}
              onChange={(e) => setFilterPriceMax(e.target.value)}
            />
          </div>

          {activeFiltersCount > 0 && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="text-sm text-orange-500 hover:text-orange-400 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results Info */}
      <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        Showing {startIndex + 1} to {Math.min(endIndex, filteredProducts.length)} of{" "}
        {filteredProducts.length} products
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden border
        bg-white border-gray-300
        dark:bg-zinc-900 dark:border-zinc-800">
        <table className="w-full">
          <thead>
            <tr className="text-sm
              bg-gray-100 dark:bg-zinc-900">
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Product ID</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-left">Sale</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, i) => (
              <tr
                key={i}
                className="border-t transition
                  border-gray-200 hover:bg-gray-100
                  dark:border-zinc-800 dark:hover:bg-zinc-800/50"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={product.image}
                    className="w-10 h-10 rounded object-cover"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.sale}%</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      product.stock === "In Stock"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-orange-500/20 text-orange-500"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-500">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-8">
                  <Eye className="w-4 h-4" />
                  <Pencil className="w-4 h-4 text-green-500" />
                  <Trash2 className="w-4 h-4 text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="px-6 py-4 flex items-center justify-between border-t
            border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded border
                  border-gray-300 hover:bg-gray-200
                  dark:border-zinc-700 dark:hover:bg-zinc-800
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ‹
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) pageNum = i + 1;
                else if (currentPage <= 3) pageNum = i + 1;
                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                else pageNum = currentPage - 2 + i;

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 flex items-center justify-center rounded transition
                      ${
                        currentPage === pageNum
                          ? "bg-orange-600 text-white"
                          : "border border-gray-300 hover:bg-gray-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded border
                  border-gray-300 hover:bg-gray-200
                  dark:border-zinc-700 dark:hover:bg-zinc-800
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
