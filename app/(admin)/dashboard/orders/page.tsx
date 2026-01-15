"use client";
import { useState, useMemo } from "react";
import { Search, Eye, Printer, ChevronLeft, ChevronRight } from "lucide-react";

type Order = {
  id: string;
  time: string;
  customer: string;
  method: string;
  amount: number;
  status: "Processing" | "Delivered" | "Pending" | "Cancel";
};

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const [orders, setOrders] = useState<Order[]>([
    { id: "18586", time: "Dec 10, 2023 3:26 AM", customer: "Sharon Tremblay", method: "Cash", amount: 2511.73, status: "Processing" },
  { id: "10666", time: "Dec 10, 2023 3:33 AM", customer: "Sean Rowe", method: "Credit", amount: 4629.95, status: "Delivered" },
  { id: "15030", time: "Dec 10, 2023 11:17 AM", customer: "Agnes Walter", method: "Credit", amount: 4360.36, status: "Delivered" },
  { id: "13015", time: "Dec 9, 2023 8:59 PM", customer: "Guy Weimann", method: "Card", amount: 5199.53, status: "Pending" },
  { id: "10254", time: "Dec 9, 2023 8:20 PM", customer: "Wilson Braun", method: "Credit", amount: 6617.66, status: "Cancel" },
  { id: "10868", time: "Dec 9, 2023 7:30 PM", customer: "Gayle Braun-Mante", method: "Credit", amount: 4546.01, status: "Delivered" },
  { id: "17454", time: "Dec 10, 2023 10:27 AM", customer: "Geneva Wintheimer", method: "Cash", amount: 3300.58, status: "Pending" },
  { id: "10673", time: "Dec 10, 2023 3:54 AM", customer: "Ruth Murazik", method: "Credit", amount: 3892.30, status: "Pending" },
  { id: "18790", time: "Dec 11, 2023 12:30 PM", customer: "David Clark", method: "Cash", amount: 2740.25, status: "Processing" },
  { id: "19021", time: "Dec 11, 2023 2:10 PM", customer: "Emily Stone", method: "Credit", amount: 6180.10, status: "Delivered" },

  { id: "19022", time: "Dec 11, 2023 2:25 PM", customer: "Michael Scott", method: "Card", amount: 3450.00, status: "Pending" },
  { id: "19023", time: "Dec 11, 2023 3:40 PM", customer: "Pam Beesly", method: "Cash", amount: 1850.40, status: "Delivered" },
  { id: "19024", time: "Dec 11, 2023 4:05 PM", customer: "Jim Halpert", method: "Credit", amount: 5200.75, status: "Processing" },
  { id: "19025", time: "Dec 11, 2023 4:50 PM", customer: "Dwight Schrute", method: "Card", amount: 8999.99, status: "Pending" },
  { id: "19026", time: "Dec 11, 2023 5:10 PM", customer: "Stanley Hudson", method: "Cash", amount: 2100.00, status: "Delivered" },
  { id: "19027", time: "Dec 11, 2023 5:45 PM", customer: "Kevin Malone", method: "Credit", amount: 4700.60, status: "Cancel" },
  { id: "19028", time: "Dec 11, 2023 6:30 PM", customer: "Angela Martin", method: "Card", amount: 6400.25, status: "Delivered" },
  { id: "19029", time: "Dec 11, 2023 6:55 PM", customer: "Oscar Martinez", method: "Credit", amount: 5800.10, status: "Processing" },
  { id: "19030", time: "Dec 11, 2023 7:20 PM", customer: "Toby Flenderson", method: "Cash", amount: 1999.99, status: "Pending" },
  { id: "19031", time: "Dec 11, 2023 7:45 PM", customer: "Kelly Kapoor", method: "Credit", amount: 7600.45, status: "Delivered" },

  { id: "19032", time: "Dec 12, 2023 9:10 AM", customer: "Ryan Howard", method: "Card", amount: 2890.00, status: "Processing" },
  { id: "19033", time: "Dec 12, 2023 9:30 AM", customer: "Creed Bratton", method: "Cash", amount: 1500.50, status: "Delivered" },
  { id: "19034", time: "Dec 12, 2023 10:00 AM", customer: "Meredith Palmer", method: "Credit", amount: 4100.90, status: "Pending" },
  { id: "19035", time: "Dec 12, 2023 10:40 AM", customer: "Phyllis Lapin", method: "Card", amount: 5400.00, status: "Delivered" },
  { id: "19036", time: "Dec 12, 2023 11:15 AM", customer: "Andy Bernard", method: "Cash", amount: 3100.25, status: "Processing" },
  { id: "19037", time: "Dec 12, 2023 11:45 AM", customer: "Darryl Philbin", method: "Credit", amount: 6700.80, status: "Delivered" },
  { id: "19038", time: "Dec 12, 2023 12:30 PM", customer: "Holly Flax", method: "Card", amount: 4600.35, status: "Pending" },
  { id: "19039", time: "Dec 12, 2023 1:10 PM", customer: "Jan Levinson", method: "Cash", amount: 7200.90, status: "Cancel" },
  { id: "19040", time: "Dec 12, 2023 1:45 PM", customer: "David Wallace", method: "Credit", amount: 9900.00, status: "Delivered" },
  { id: "19041", time: "Dec 12, 2023 2:15 PM", customer: "Charles Miner", method: "Card", amount: 5600.40, status: "Processing" },

  { id: "19042", time: "Dec 13, 2023 9:20 AM", customer: "Robert California", method: "Cash", amount: 4300.00, status: "Pending" },
  { id: "19043", time: "Dec 13, 2023 9:45 AM", customer: "Nellie Bertram", method: "Credit", amount: 3900.55, status: "Delivered" },
  { id: "19044", time: "Dec 13, 2023 10:15 AM", customer: "Jo Bennett", method: "Card", amount: 8800.90, status: "Processing" },
  { id: "19045", time: "Dec 13, 2023 10:45 AM", customer: "Clark Green", method: "Cash", amount: 2100.10, status: "Delivered" },
  { id: "19046", time: "Dec 13, 2023 11:10 AM", customer: "Pete Miller", method: "Credit", amount: 3300.75, status: "Pending" },
  { id: "19047", time: "Dec 13, 2023 11:35 AM", customer: "Erin Hannon", method: "Card", amount: 2750.30, status: "Delivered" },
  { id: "19048", time: "Dec 13, 2023 12:00 PM", customer: "Karen Filippelli", method: "Cash", amount: 6150.80, status: "Processing" },
  { id: "19049", time: "Dec 13, 2023 12:40 PM", customer: "Roy Anderson", method: "Credit", amount: 4500.00, status: "Cancel" },
  { id: "19050", time: "Dec 13, 2023 1:15 PM", customer: "Val Johnson", method: "Card", amount: 5200.20, status: "Delivered" },

  { id: "19051", time: "Dec 14, 2023 9:00 AM", customer: "Chris Evans", method: "Cash", amount: 2700.10, status: "Pending" },
  { id: "19052", time: "Dec 14, 2023 9:30 AM", customer: "Scarlett Johansson", method: "Credit", amount: 6900.50, status: "Delivered" },
  { id: "19053", time: "Dec 14, 2023 10:00 AM", customer: "Robert Downey Jr.", method: "Card", amount: 8900.90, status: "Processing" },
  { id: "19054", time: "Dec 14, 2023 10:30 AM", customer: "Chris Hemsworth", method: "Cash", amount: 3500.60, status: "Pending" },
  { id: "19055", time: "Dec 14, 2023 11:00 AM", customer: "Mark Ruffalo", method: "Credit", amount: 4100.80, status: "Delivered" },
  { id: "19056", time: "Dec 14, 2023 11:30 AM", customer: "Jeremy Renner", method: "Card", amount: 2950.40, status: "Cancel" },
  { id: "19057", time: "Dec 14, 2023 12:00 PM", customer: "Tom Holland", method: "Cash", amount: 3800.00, status: "Delivered" },
  { id: "19058", time: "Dec 14, 2023 12:30 PM", customer: "Zendaya", method: "Credit", amount: 6200.90, status: "Processing" },
  { id: "19059", time: "Dec 14, 2023 1:00 PM", customer: "Benedict Cumberbatch", method: "Card", amount: 7400.30, status: "Pending" },
  { id: "19060", time: "Dec 14, 2023 1:30 PM", customer: "Samuel L. Jackson", method: "Cash", amount: 8100.75, status: "Delivered" },

  ]);

  // ✅ Status Change Handler
  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // 🔍 Search Filter (FIXED: orders dependency added)
  const filteredOrders = useMemo(() => {
    if (!searchTerm) return orders;
    return orders.filter(
      (o) =>
        o.id.includes(searchTerm) ||
        o.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, orders]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredOrders.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // 🎨 Status Badge Style
  const statusStyle = (status: Order["status"]) => {
    switch (status) {
      case "Processing":
        return "bg-blue-500/20 text-blue-500";
      case "Delivered":
        return "bg-green-500/20 text-green-500";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-500";
      case "Cancel":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen p-6 transition-colors
      bg-gray-100 text-zinc-900
      dark:bg-zinc-950 dark:text-white">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Recent Orders</h1>
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
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">entries</span>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by ID or customer..."
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
              <th className="px-4 py-3 text-left">INVOICE NO</th>
              <th className="px-4 py-3 text-left">ORDER TIME</th>
              <th className="px-4 py-3 text-left">CUSTOMER NAME</th>
              <th className="px-4 py-3 text-left">METHOD</th>
              <th className="px-4 py-3 text-left">AMOUNT</th>
              <th className="px-4 py-3 text-left">STATUS</th>
              <th className="px-4 py-3 text-left">ACTION</th>
              <th className="px-4 py-3 text-left">INVOICE</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t
                  border-gray-200 hover:bg-gray-100
                  dark:border-zinc-800 dark:hover:bg-zinc-800/50"
              >
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.time}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.method}</td>
                <td className="px-4 py-3">₹{order.amount.toLocaleString()}</td>

                {/* ✅ Status Badge */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* ✅ Action Dropdown (अब status change होगा) */}
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value as Order["status"])
                    }
                    className="rounded px-2 py-1 text-sm focus:outline-none
                      bg-white text-zinc-900 border border-gray-300
                      dark:bg-zinc-900 dark:text-white dark:border-zinc-700"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancel">Cancel</option>
                  </select>
                </td>

                <td className="px-4 py-3 flex items-center gap-3">
                  <Printer className="w-4 h-4 text-zinc-500 cursor-pointer" />
                  <Eye className="w-4 h-4 text-zinc-500 cursor-pointer" />
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

export default OrdersPage;
