"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ChevronDown, ChevronRight, Search, Package, FolderTree, Eye, EyeOff } from 'lucide-react';

interface CategoryCount {
  products: number;
  children: number;
}

interface CategoryParent {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  isActive: boolean;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  parent?: CategoryParent | null;
  _count?: CategoryCount;
  children?: Category[];
}

interface CategoryFormData {
  name: string;
  description: string;
  image: string;
  parentId: string;
  isActive: boolean;
}

interface ApiResponse {
  success: boolean;
  data?: Category[];
  error?: string;
  message?: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isDark, setIsDark] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    description: '',
    image: '',
    parentId: '',
    isActive: true
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter(cat => 
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, categories]);

  const fetchCategories = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('/api/categories');
      const result: ApiResponse = await response.json();
      if (result.success && result.data) {
        setCategories(result.data);
        setFilteredCategories(result.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Please enter category name');
      return;
    }

    try {
      const url = editingCategory 
        ? `/api/categories/${editingCategory.id}`
        : '/api/categories';
      
      const response = await fetch(url, {
        method: editingCategory ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result: ApiResponse = await response.json();
      if (result.success) {
        fetchCategories();
        closeModal();
      } else {
        alert(result.error || 'Failed to save category');
      }
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Failed to save category');
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    
    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: 'DELETE'
      });
      const result: ApiResponse = await response.json();
      if (result.success) {
        fetchCategories();
      } else {
        alert(result.error || 'Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category');
    }
  };

  const openModal = (category: Category | null = null): void => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        description: category.description || '',
        image: category.image || '',
        parentId: category.parentId || '',
        isActive: category.isActive
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        description: '',
        image: '',
        parentId: '',
        isActive: true
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      description: '',
      image: '',
      parentId: '',
      isActive: true
    });
  };

  const toggleExpand = (id: string): void => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCategories(newExpanded);
  };

  const buildCategoryTree = (categories: Category[], parentId: string | null = null): Category[] => {
    return categories
      .filter(cat => cat.parentId === parentId)
      .map(cat => ({
        ...cat,
        children: buildCategoryTree(categories, cat.id)
      }));
  };

  const renderCategoryRow = (category: Category, level: number = 0): React.ReactNode => {
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedCategories.has(category.id);

    return (
      <React.Fragment key={category.id}>
        <div 
          className={`flex items-center gap-3 p-4 border-b transition-colors ${
            isDark 
              ? 'border-gray-800 hover:bg-gray-800/50' 
              : 'border-gray-200 hover:bg-gray-50'
          }`}
          style={{ paddingLeft: `${level * 2 + 1}rem` }}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {hasChildren && (
              <button
                onClick={() => toggleExpand(category.id)}
                className={`p-1 rounded hover:bg-gray-700/50 transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
            )}
            {!hasChildren && <div className="w-7" />}
            
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-purple-400 to-blue-400'
            }`}>
              {category.image ? (
                <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <FolderTree className="text-white" size={20} />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className={`font-semibold truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.name}
                </h3>
                {!category.isActive && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-red-500/20 text-red-400">
                    Inactive
                  </span>
                )}
              </div>
              {category.description && (
                <p className={`text-sm truncate ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {category.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10">
              <Package size={16} className="text-blue-400" />
              <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {category._count?.products || 0}
              </span>
            </div>

            {hasChildren && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10">
                <FolderTree size={16} className="text-purple-400" />
                <span className={`text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  {category._count?.children || 0}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={() => openModal(category)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'hover:bg-blue-500/20 text-blue-400' 
                    : 'hover:bg-blue-100 text-blue-600'
                }`}
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'hover:bg-red-500/20 text-red-400' 
                    : 'hover:bg-red-100 text-red-600'
                }`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {isExpanded && hasChildren && category.children!.map(child => 
          renderCategoryRow(child, level + 1)
        )}
      </React.Fragment>
    );
  };

  const categoryTree = buildCategoryTree(filteredCategories);

  return (
    <div className={`min-h-screen transition-colors ${
      isDark ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Categories Management
            </h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Manage your product categories and subcategories
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {isDark ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            <button
              onClick={() => openModal()}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 font-medium"
            >
              <Plus size={20} />
              Add Category
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`p-6 rounded-xl border ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                <FolderTree className="text-white" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Categories
                </p>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {categories.length}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600">
                <Eye className="text-white" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Active
                </p>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {categories.filter(c => c.isActive).length}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-600 to-red-600">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total Products
                </p>
                <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {categories.reduce((sum, cat) => sum + (cat._count?.products || 0), 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`} size={20} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:border-purple-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
              } outline-none`}
            />
          </div>
        </div>

        <div className={`rounded-xl border overflow-hidden ${
          isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {loading ? (
            <div className="p-12 text-center">
              <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Loading categories...
              </div>
            </div>
          ) : categoryTree.length === 0 ? (
            <div className="p-12 text-center">
              <FolderTree className={`mx-auto mb-4 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} size={48} />
              <div className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No categories found
              </div>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Create your first category to get started
              </p>
            </div>
          ) : (
            <div>
              {categoryTree.map(category => renderCategoryRow(category))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div 
            className={`w-full max-w-md rounded-xl p-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {editingCategory ? 'Edit Category' : 'Add New Category'}
            </h2>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } outline-none focus:border-purple-500`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } outline-none focus:border-purple-500`}
                  rows={3}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Parent Category
                </label>
                <select
                  value={formData.parentId}
                  onChange={(e) => setFormData({...formData, parentId: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } outline-none focus:border-purple-500`}
                >
                  <option value="">No Parent (Root Category)</option>
                  {categories
                    .filter(c => c.id !== editingCategory?.id)
                    .map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } outline-none focus:border-purple-500`}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="isActive" className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Active
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeModal}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    isDark 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
                >
                  {editingCategory ? 'Update' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}