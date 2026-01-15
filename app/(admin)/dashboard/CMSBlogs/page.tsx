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

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [blogs, setBlogs] = useState<Blog[]>([
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
  ]);

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

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / entriesPerPage) || 1;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 🎨 Status Badge Style
  const statusStyle = (status: BlogStatus) => {
    switch (status) {
      case "Published":
        return "bg-green-500/20 text-green-500";
      case "Draft":
        return "bg-yellow-500/20 text-yellow-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  // 🔁 Change Blog Status
  const handleStatusChange = (id: string, newStatus: BlogStatus) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id ? { ...blog, status: newStatus } : blog
      )
    );
  };

  // 🗑 Delete Blog
  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div
      className="min-h-screen p-6 transition-colors
      bg-gray-100 text-zinc-900
      dark:bg-zinc-950 dark:text-white"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Blogs</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Manage all blog posts
          </p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16} />
          Add Blog
        </button>
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
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            entries
          </span>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by title, author, category..."
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
              <th className="px-4 py-3 text-left">TITLE</th>
              <th className="px-4 py-3 text-left">AUTHOR</th>
              <th className="px-4 py-3 text-left">CATEGORY</th>
              <th className="px-4 py-3 text-left">DATE</th>
              <th className="px-4 py-3 text-left">VIEWS</th>
              <th className="px-4 py-3 text-left">STATUS</th>
              <th className="px-4 py-3 text-left">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-t
                    border-gray-200 hover:bg-gray-100
                    dark:border-zinc-800 dark:hover:bg-zinc-800/50"
                >
                  <td className="px-4 py-3 font-medium">{blog.title}</td>
                  <td className="px-4 py-3">{blog.author}</td>
                  <td className="px-4 py-3">{blog.category}</td>
                  <td className="px-4 py-3">{blog.createdAt}</td>
                  <td className="px-4 py-3">{blog.views}</td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                        blog.status
                      )}`}
                    >
                      {blog.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button title="View">
                        <Eye className="w-4 h-4 text-zinc-500 hover:text-white" />
                      </button>
                      <button title="Edit">
                        <Pencil className="w-4 h-4 text-green-500" />
                      </button>
                      <button
                        title="Delete"
                        onClick={() => handleDelete(blog.id)}
                      >
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
                        className="rounded px-2 py-1 text-xs
                          bg-white border border-gray-300
                          dark:bg-zinc-900 dark:border-zinc-700"
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
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-zinc-500"
                >
                  No blogs found.
                </td>
              </tr>
            )}
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

export default BlogsPage;
