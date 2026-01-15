"use client";
import { useState, useMemo } from "react";
import { Search, Eye, Pencil, ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react";

type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: "INV-1001", name: "Corduroy Slim-Fit Shirt", sku: "SHIRT-001", category: "Shirts", quantity: 120, minStock: 30, price: 1450, status: "In Stock" },
    { id: "INV-1002", name: "Oversized Poplin Shirt", sku: "SHIRT-002", category: "Shirts", quantity: 25, minStock: 30, price: 1800, status: "Low Stock" },
    { id: "INV-1003", name: "Graphic Print T-Shirt", sku: "TSHIRT-010", category: "T-Shirts", quantity: 0, minStock: 20, price: 799, status: "Out of Stock" },
    { id: "INV-1004", name: "Denim Jacket", sku: "JACKET-004", category: "Jackets", quantity: 60, minStock: 15, price: 3200, status: "In Stock" },
    { id: "INV-1005", name: "Oxford Button Down", sku: "SHIRT-005", category: "Shirts", quantity: 18, minStock: 25, price: 1680, status: "Low Stock" },
    { id: "INV-1006", name: "Bomber Jacket Black", sku: "JACKET-006", category: "Jackets", quantity: 0, minStock: 10, price: 2800, status: "Out of Stock" },
    { id: "INV-1007", name: "Basic Crew Neck T-Shirt", sku: "TSHIRT-015", category: "T-Shirts", quantity: 240, minStock: 50, price: 699, status: "In Stock" },
    { id: "INV-1008", name: "Flannel Checked Shirt", sku: "SHIRT-009", category: "Shirts", quantity: 14, minStock: 20, price: 1420, status: "Low Stock" },
    { id: "INV-1009", name: "Leather Biker Jacket", sku: "JACKET-011", category: "Jackets", quantity: 4, minStock: 8, price: 4500, status: "Low Stock" },
    { id: "INV-1010", name: "Polo Collar T-Shirt", sku: "TSHIRT-020", category: "T-Shirts", quantity: 90, minStock: 25, price: 1150, status: "In Stock" },
  ]);

  // 🔍 Search Filter
  const filteredInventory = useMemo(() => {
    if (!searchTerm) return inventory;
    return inventory.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, inventory]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredInventory.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentItems = filteredInventory.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // 🎨 Status Badge
  const statusStyle = (status: InventoryItem["status"]) => {
    switch (status) {
      case "In Stock":
        return "bg-green-500/20 text-green-500";
      case "Low Stock":
        return "bg-yellow-500/20 text-yellow-500";
      case "Out of Stock":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen p-6 transition-colors
      bg-gray-100 text-zinc-900
      dark:bg-zinc-950 dark:text-white">

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Manage stock, low inventory alerts & product availability
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Show</span>
          <select
            className="rounded px-3 py-1.5 text-sm
              bg-white border border-gray-300
              dark:bg-zinc-900 dark:border-zinc-800"
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">entries</span>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by product or SKU..."
            className="pl-10 pr-4 py-2 rounded w-full
              bg-white border border-gray-300
              dark:bg-zinc-900 dark:border-zinc-800"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden border
        bg-white border-gray-300
        dark:bg-zinc-900 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-zinc-900">
              <th className="px-4 py-3 text-left">PRODUCT</th>
              <th className="px-4 py-3 text-left">SKU</th>
              <th className="px-4 py-3 text-left">CATEGORY</th>
              <th className="px-4 py-3 text-left">PRICE</th>
              <th className="px-4 py-3 text-left">QUANTITY</th>
              <th className="px-4 py-3 text-left">MIN STOCK</th>
              <th className="px-4 py-3 text-left">STATUS</th>
              <th className="px-4 py-3 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="border-t
                  border-gray-200 hover:bg-gray-100
                  dark:border-zinc-800 dark:hover:bg-zinc-800/50"
              >
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.sku}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">₹{item.price.toLocaleString()}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{item.minStock}</td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      item.status
                    )}`}
                  >
                    {item.status === "Low Stock" && <AlertTriangle size={12} />}
                    {item.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-3 flex items-center gap-3">
                  <Eye className="w-4 h-4 text-zinc-500 cursor-pointer" />
                  <Pencil className="w-4 h-4 text-zinc-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-4 py-3 flex items-center justify-between border-t
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
                disabled:opacity-50"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`w-8 h-8 rounded ${
                  currentPage === num
                    ? "bg-orange-600 text-white"
                    : "border border-gray-300 hover:bg-gray-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded border
                border-gray-300 hover:bg-gray-200
                dark:border-zinc-700 dark:hover:bg-zinc-800
                disabled:opacity-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
