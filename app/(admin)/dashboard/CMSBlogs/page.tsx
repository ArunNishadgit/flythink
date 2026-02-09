"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type BlogStatus = "Published" | "Draft";

type Blog = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  createdAt: string;
  views: number;
  status: BlogStatus;
};

const initialBlogs: Blog[] = [
  {
    id: "BLOG-001",
    title: "Top 10 Fashion Trends in 2026",
    slug: "top-10-fashion-trends-2026",
    author: "Admin",
    category: "Fashion",
    createdAt: "2026-01-05",
    views: 1250,
    status: "Published",
  },
  {
    id: "BLOG-002",
    title: "How to Choose the Perfect T-Shirt",
    slug: "choose-perfect-tshirt",
    author: "Editor",
    category: "Guides",
    createdAt: "2026-01-08",
    views: 860,
    status: "Published",
  },
  {
    id: "BLOG-003",
    title: "Winter Collection Sneak Peek",
    slug: "winter-collection-sneak-peek",
    author: "Admin",
    category: "Collection",
    createdAt: "2026-01-10",
    views: 0,
    status: "Draft",
  },
  {
    id: "BLOG-004",
    title: "Why Quality Fabric Matters",
    slug: "quality-fabric-matters",
    author: "Editor",
    category: "Education",
    createdAt: "2026-01-12",
    views: 420,
    status: "Published",
  },
  {
    id: "BLOG-005",
    title: "Streetwear Style Guide",
    slug: "streetwear-style-guide",
    author: "Admin",
    category: "Style",
    createdAt: "2026-01-14",
    views: 95,
    status: "Draft",
  },
];

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Search Filter
  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogs;

    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, blogs]);

  // 📄 Pagination (SAFE)
  const totalPages =
    entriesPerPage > 0
      ? Math.max(1, Math.ceil(filteredBlogs.length / entriesPerPage))
      : 1;

  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // 🎨 Status Badge
  const statusStyle = (status: BlogStatus) => {
    if (status === "Published")
      return "bg-green-500/20 text-green-500";
    if (status === "Draft")
      return "bg-yellow-500/20 text-yellow-500";
    return "bg-gray-500/20 text-gray-500";
  };

  // 🔁 Change Status
  const handleStatusChange = (id: string, status: BlogStatus) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  // 🗑 Delete Blog (VERCEL SAFE)
  const handleDelete = (id: string) => {
    if (typeof window === "undefined") return;

    const ok = window.confirm("Are you sure you want to delete this blog?");
    if (!ok) return;

    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Blogs</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Manage all blog posts
          </p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16} /> Add Blog
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Show</span>
          <select
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded px-3 py-1.5 text-sm bg-white border dark:bg-zinc-900 dark:border-zinc-800"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            entries
          </span>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by title, author, category..."
            className="pl-10 pr-4 py-2 rounded w-full bg-white border dark:bg-zinc-900 dark:border-zinc-800"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden border bg-white dark:bg-zinc-900 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-zinc-900">
              {["TITLE", "AUTHOR", "CATEGORY", "DATE", "VIEWS", "STATUS", "ACTION"].map(
                (h) => (
                  <th key={h} className="px-4 py-3 text-left">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {currentBlogs.length ? (
              currentBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-t border-gray-200 hover:bg-gray-100 dark:border-zinc-800 dark:hover:bg-zinc-800/50"
                >
                  <td className="px-4 py-3 font-medium">{blog.title}</td>
                  <td className="px-4 py-3">{blog.author}</td>
                  <td className="px-4 py-3">{blog.category}</td>
                  <td className="px-4 py-3">{blog.createdAt}</td>
                  <td className="px-4 py-3">{blog.views}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        blog.status
                      )}`}
                    >
                      {blog.status}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-zinc-500" />
                      <Pencil className="w-4 h-4 text-green-500" />
                      <button onClick={() => handleDelete(blog.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                      <select
                        value={blog.status}
                        onChange={(e) =>
                          handleStatusChange(
                            blog.id,
                            e.target.value as BlogStatus
                          )
                        }
                        className="rounded px-2 py-1 text-xs bg-white border dark:bg-zinc-900 dark:border-zinc-700"
                      >
                        <option value="Published">Published</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-zinc-500">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-4 py-3 flex justify-between border-t dark:border-zinc-800">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from(
              { length: Math.min(totalPages, 10) },
              (_, i) => i + 1
            ).map((n) => (
              <button
                key={n}
                onClick={() => handlePageChange(n)}
                className={`w-8 h-8 rounded ${
                  currentPage === n
                    ? "bg-orange-600 text-white"
                    : "border dark:border-zinc-700"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
