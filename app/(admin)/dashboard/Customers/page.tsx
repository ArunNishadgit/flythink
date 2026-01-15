"use client";
import { useState, useMemo } from "react";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  status: "Active" | "Inactive";
};

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

const [customers] = useState<Customer[]>([
  { id: "CUST-001", name: "Sharon Tremblay", email: "sharon@mail.com", phone: "9876543210", totalOrders: 5, totalSpent: 18500, status: "Active" },
  { id: "CUST-002", name: "Sean Rowe", email: "sean@mail.com", phone: "9876543222", totalOrders: 2, totalSpent: 9200, status: "Active" },
  { id: "CUST-003", name: "Agnes Walter", email: "agnes@mail.com", phone: "9876543333", totalOrders: 7, totalSpent: 26500, status: "Active" },
  { id: "CUST-004", name: "Guy Weimann", email: "guy@mail.com", phone: "9876543444", totalOrders: 1, totalSpent: 5200, status: "Inactive" },
  { id: "CUST-005", name: "Wilson Braun", email: "wilson@mail.com", phone: "9876543555", totalOrders: 4, totalSpent: 19200, status: "Active" },
  { id: "CUST-006", name: "Emily Stone", email: "emily@mail.com", phone: "9876543666", totalOrders: 9, totalSpent: 38700, status: "Active" },
  { id: "CUST-007", name: "Michael Scott", email: "michael@mail.com", phone: "9876543777", totalOrders: 3, totalSpent: 11400, status: "Active" },
  { id: "CUST-008", name: "Pam Beesly", email: "pam@mail.com", phone: "9876543888", totalOrders: 6, totalSpent: 22900, status: "Active" },
  { id: "CUST-009", name: "Dwight Schrute", email: "dwight@mail.com", phone: "9876543999", totalOrders: 8, totalSpent: 31400, status: "Active" },
  { id: "CUST-010", name: "Kelly Kapoor", email: "kelly@mail.com", phone: "9876544000", totalOrders: 2, totalSpent: 7400, status: "Inactive" },

  { id: "CUST-011", name: "David Clark", email: "david@mail.com", phone: "9876544011", totalOrders: 6, totalSpent: 21400, status: "Active" },
  { id: "CUST-012", name: "Emma Watson", email: "emma@mail.com", phone: "9876544012", totalOrders: 4, totalSpent: 15800, status: "Active" },
  { id: "CUST-013", name: "Robert Brown", email: "robert@mail.com", phone: "9876544013", totalOrders: 1, totalSpent: 3600, status: "Inactive" },
  { id: "CUST-014", name: "Sophia Miller", email: "sophia@mail.com", phone: "9876544014", totalOrders: 7, totalSpent: 27800, status: "Active" },
  { id: "CUST-015", name: "James Wilson", email: "james@mail.com", phone: "9876544015", totalOrders: 9, totalSpent: 40200, status: "Active" },
  { id: "CUST-016", name: "Olivia Davis", email: "olivia@mail.com", phone: "9876544016", totalOrders: 3, totalSpent: 9800, status: "Active" },
  { id: "CUST-017", name: "Liam Johnson", email: "liam@mail.com", phone: "9876544017", totalOrders: 5, totalSpent: 18600, status: "Active" },
  { id: "CUST-018", name: "Ava Martinez", email: "ava@mail.com", phone: "9876544018", totalOrders: 8, totalSpent: 31500, status: "Active" },
  { id: "CUST-019", name: "Noah Anderson", email: "noah@mail.com", phone: "9876544019", totalOrders: 2, totalSpent: 6400, status: "Inactive" },
  { id: "CUST-020", name: "Isabella Taylor", email: "isabella@mail.com", phone: "9876544020", totalOrders: 6, totalSpent: 22100, status: "Active" },

  { id: "CUST-021", name: "Ethan Moore", email: "ethan@mail.com", phone: "9876544021", totalOrders: 4, totalSpent: 13400, status: "Active" },
  { id: "CUST-022", name: "Mia Jackson", email: "mia@mail.com", phone: "9876544022", totalOrders: 10, totalSpent: 45600, status: "Active" },
  { id: "CUST-023", name: "Lucas White", email: "lucas@mail.com", phone: "9876544023", totalOrders: 3, totalSpent: 10200, status: "Active" },
  { id: "CUST-024", name: "Charlotte Harris", email: "charlotte@mail.com", phone: "9876544024", totalOrders: 5, totalSpent: 18700, status: "Active" },
  { id: "CUST-025", name: "Benjamin Martin", email: "benjamin@mail.com", phone: "9876544025", totalOrders: 7, totalSpent: 26400, status: "Active" },
  { id: "CUST-026", name: "Amelia Thompson", email: "amelia@mail.com", phone: "9876544026", totalOrders: 2, totalSpent: 7600, status: "Inactive" },
  { id: "CUST-027", name: "Henry Garcia", email: "henry@mail.com", phone: "9876544027", totalOrders: 6, totalSpent: 21000, status: "Active" },
  { id: "CUST-028", name: "Evelyn Martinez", email: "evelyn@mail.com", phone: "9876544028", totalOrders: 9, totalSpent: 38400, status: "Active" },
  { id: "CUST-029", name: "Alexander Rodriguez", email: "alex@mail.com", phone: "9876544029", totalOrders: 1, totalSpent: 2900, status: "Inactive" },
  { id: "CUST-030", name: "Harper Lee", email: "harper@mail.com", phone: "9876544030", totalOrders: 4, totalSpent: 14500, status: "Active" },

  { id: "CUST-031", name: "Daniel Walker", email: "daniel@mail.com", phone: "9876544031", totalOrders: 8, totalSpent: 31200, status: "Active" },
  { id: "CUST-032", name: "Abigail Hall", email: "abigail@mail.com", phone: "9876544032", totalOrders: 5, totalSpent: 19800, status: "Active" },
  { id: "CUST-033", name: "Matthew Allen", email: "matthew@mail.com", phone: "9876544033", totalOrders: 2, totalSpent: 7200, status: "Inactive" },
  { id: "CUST-034", name: "Emily Young", email: "emilyy@mail.com", phone: "9876544034", totalOrders: 7, totalSpent: 27900, status: "Active" },
  { id: "CUST-035", name: "Joseph King", email: "joseph@mail.com", phone: "9876544035", totalOrders: 6, totalSpent: 22300, status: "Active" },
  { id: "CUST-036", name: "Ella Wright", email: "ella@mail.com", phone: "9876544036", totalOrders: 3, totalSpent: 9800, status: "Active" },
  { id: "CUST-037", name: "Samuel Lopez", email: "samuel@mail.com", phone: "9876544037", totalOrders: 9, totalSpent: 40100, status: "Active" },
  { id: "CUST-038", name: "Grace Hill", email: "grace@mail.com", phone: "9876544038", totalOrders: 4, totalSpent: 15200, status: "Active" },
  { id: "CUST-039", name: "Andrew Scott", email: "andrew@mail.com", phone: "9876544039", totalOrders: 1, totalSpent: 3400, status: "Inactive" },
  { id: "CUST-040", name: "Victoria Green", email: "victoria@mail.com", phone: "9876544040", totalOrders: 6, totalSpent: 24500, status: "Active" },
]);


  // 🏷️ Customer Level Logic
  const getCustomerLevel = (totalSpent: number) => {
    if (totalSpent > 30000) return "Extra Super";
    if (totalSpent > 20000) return "Excellent";
    if (totalSpent > 10000) return "Super";
    return "Regular";
  };

  const levelStyle = (level: string) => {
    switch (level) {
      case "Extra Super":
        return "bg-purple-500/20 text-purple-500";
      case "Excellent":
        return "bg-blue-500/20 text-blue-500";
      case "Super":
        return "bg-green-500/20 text-green-500";
      default:
        return "bg-zinc-500/20 text-zinc-500";
    }
  };

  // 🔍 Search Filter
  const filteredCustomers = useMemo(() => {
    if (!searchTerm) return customers;
    return customers.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm)
    );
  }, [searchTerm, customers]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredCustomers.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // 🎨 Status Badge
  const statusStyle = (status: Customer["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-500";
      case "Inactive":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div
      className="min-h-screen p-6 transition-colors
      bg-gray-100 text-zinc-900
      dark:bg-zinc-950 dark:text-white"
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          View customers, their orders and spending level
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
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">entries</span>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name, email or phone..."
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
      <div
        className="rounded-lg overflow-hidden border
        bg-white border-gray-300
        dark:bg-zinc-900 dark:border-zinc-800"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-zinc-900">
              <th className="px-4 py-3 text-left">NAME</th>
              <th className="px-4 py-3 text-left">EMAIL</th>
              <th className="px-4 py-3 text-left">PHONE</th>
              <th className="px-4 py-3 text-left">TOTAL ORDERS</th>
              <th className="px-4 py-3 text-left">TOTAL SPENT</th>
              <th className="px-4 py-3 text-left">STATUS</th>
              <th className="px-4 py-3 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {currentCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t
                  border-gray-200 hover:bg-gray-100
                  dark:border-zinc-800 dark:hover:bg-zinc-800/50"
              >
                <td className="px-4 py-3 font-medium">{customer.name}</td>
                <td className="px-4 py-3">{customer.email}</td>
                <td className="px-4 py-3">{customer.phone}</td>
                <td className="px-4 py-3">{customer.totalOrders}</td>

                {/* 💰 Total Spent + Level Badge */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span>₹{customer.totalSpent.toLocaleString()}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelStyle(
                        getCustomerLevel(customer.totalSpent)
                      )}`}
                    >
                      {getCustomerLevel(customer.totalSpent)}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-3">
                  <Eye className="w-4 h-4 text-zinc-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div
          className="px-4 py-3 flex items-center justify-between border-t
          border-gray-200 dark:border-zinc-800"
        >
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

export default CustomersPage;
