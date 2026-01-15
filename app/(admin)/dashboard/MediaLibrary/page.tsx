'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Upload, Search, X, Eye, Download, Share2, Star, Trash2, Edit, ZoomIn, ZoomOut, RotateCw, ChevronLeft, ChevronRight, Grid3x3, Columns2, Maximize2, Filter, SortDesc, Calendar, Image, Video, FileText, Music, File, Check, Copy, FolderPlus, Tag, Heart } from 'lucide-react';

interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'video' | 'document' | 'audio';
  size: string;
  uploadDate: string;
  dimensions?: string;
  duration?: string;
  pages?: number;
  url: string;
  thumbnail: string;
  favorite: boolean;
  tags: string[];
}

type GridSize = 'small' | 'medium' | 'large';
type FilterType = 'all' | 'image' | 'video' | 'document' | 'audio';
type SortBy = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc' | 'size-desc' | 'size-asc';

const MediaLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<number[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortBy>('date-desc');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [gridSize, setGridSize] = useState<GridSize>('medium');

  useEffect(() => {
    setMediaFiles([
      {
        id: 1,
        name: 'product-banner-1.jpg',
        type: 'image',
        size: '2.4 MB',
        uploadDate: '2026-01-15',
        dimensions: '1920x1080',
        url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        favorite: true,
        tags: ['banner', 'product', 'featured']
      },
      {
        id: 2,
        name: 'hero-image-2.jpg',
        type: 'image',
        size: '3.1 MB',
        uploadDate: '2026-01-14',
        dimensions: '2560x1440',
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
        favorite: false,
        tags: ['hero', 'banner']
      },
      {
        id: 3,
        name: 'product-showcase-3.jpg',
        type: 'image',
        size: '1.8 MB',
        uploadDate: '2026-01-13',
        dimensions: '1600x900',
        url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
        favorite: true,
        tags: ['product', 'showcase']
      },
      {
        id: 4,
        name: 'lifestyle-4.jpg',
        type: 'image',
        size: '2.9 MB',
        uploadDate: '2026-01-12',
        dimensions: '1920x1280',
        url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
        favorite: false,
        tags: ['lifestyle', 'photography']
      },
      {
        id: 5,
        name: 'category-banner-5.jpg',
        type: 'image',
        size: '2.2 MB',
        uploadDate: '2026-01-11',
        dimensions: '1920x1080',
        url: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400',
        favorite: false,
        tags: ['category', 'banner']
      },
      {
        id: 6,
        name: 'promotional-6.jpg',
        type: 'image',
        size: '1.9 MB',
        uploadDate: '2026-01-10',
        dimensions: '1600x1200',
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        favorite: true,
        tags: ['promotional', 'sale']
      },
      {
        id: 7,
        name: 'product-detail-7.jpg',
        type: 'image',
        size: '2.7 MB',
        uploadDate: '2026-01-09',
        dimensions: '2048x1365',
        url: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400',
        favorite: false,
        tags: ['product', 'detail']
      },
      {
        id: 8,
        name: 'background-8.jpg',
        type: 'image',
        size: '3.3 MB',
        uploadDate: '2026-01-08',
        dimensions: '2560x1707',
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
        favorite: false,
        tags: ['background', 'texture']
      },
      {
        id: 9,
        name: 'promo-video.mp4',
        type: 'video',
        size: '15.8 MB',
        uploadDate: '2026-01-07',
        duration: '0:45',
        url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400',
        favorite: false,
        tags: ['video', 'promotional']
      },
      {
        id: 10,
        name: 'catalog.pdf',
        type: 'document',
        size: '5.2 MB',
        uploadDate: '2026-01-06',
        pages: 24,
        url: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400',
        favorite: true,
        tags: ['document', 'catalog']
      },
      {
        id: 11,
        name: 'hero-banner-11.jpg',
        type: 'image',
        size: '2.5 MB',
        uploadDate: '2026-01-05',
        dimensions: '1920x1080',
        url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        favorite: false,
        tags: ['hero', 'banner', 'featured']
      },
      {
        id: 12,
        name: 'product-grid-12.jpg',
        type: 'image',
        size: '2.1 MB',
        uploadDate: '2026-01-04',
        dimensions: '1800x1200',
        url: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200',
        thumbnail: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400',
        favorite: false,
        tags: ['product', 'grid']
      }
    ]);
  }, []);

  const filteredFiles = mediaFiles
    .filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'all' || file.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      if (sortBy === 'date-asc') return new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime();
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'size-desc') return parseFloat(b.size) - parseFloat(a.size);
      if (sortBy === 'size-asc') return parseFloat(a.size) - parseFloat(b.size);
      return 0;
    });

  const imageFiles = filteredFiles.filter(f => f.type === 'image');

  const openLightbox = (index: number): void => {
    const imageIndex = imageFiles.findIndex(f => f.id === filteredFiles[index].id);
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex);
      setLightboxOpen(true);
      setZoom(1);
    }
  };

  const nextImage = (): void => {
    setCurrentImageIndex((prev) => (prev + 1) % imageFiles.length);
    setZoom(1);
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prev) => (prev - 1 + imageFiles.length) % imageFiles.length);
    setZoom(1);
  };

  const toggleFavorite = (id: number): void => {
    setMediaFiles(files => files.map(f => 
      f.id === id ? { ...f, favorite: !f.favorite } : f
    ));
  };

  const toggleSelect = (id: number): void => {
    setSelectedFiles(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;
    
    const files = Array.from(e.target.files);
    const newFiles: MediaFile[] = files.map((file, index) => {
      let fileType: MediaFile['type'] = 'document';
      if (file.type.startsWith('image')) fileType = 'image';
      else if (file.type.startsWith('video')) fileType = 'video';
      else if (file.type.startsWith('audio')) fileType = 'audio';

      return {
        id: mediaFiles.length + index + 1,
        name: file.name,
        type: fileType,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        uploadDate: new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file),
        thumbnail: URL.createObjectURL(file),
        favorite: false,
        tags: []
      };
    });
    setMediaFiles([...mediaFiles, ...newFiles]);
    setShowUploadModal(false);
  };

  const getGridClass = (): string => {
    if (gridSize === 'small') return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8';
    if (gridSize === 'large') return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
  };

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-900 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search media files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Grid Size */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 rounded-lg p-1">
              <button
                onClick={() => setGridSize('small')}
                className={`p-2 rounded ${gridSize === 'small' ? 'bg-white dark:bg-slate-800 shadow-sm' : ''}`}
                title="Small Grid"
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridSize('medium')}
                className={`p-2 rounded ${gridSize === 'medium' ? 'bg-white dark:bg-slate-800 shadow-sm' : ''}`}
                title="Medium Grid"
              >
                <Columns2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridSize('large')}
                className={`p-2 rounded ${gridSize === 'large' ? 'bg-white dark:bg-slate-800 shadow-sm' : ''}`}
                title="Large Grid"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Filters */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-lg border ${showFilters ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700'}`}
            >
              <Filter className="w-5 h-5" />
            </button>

            {/* Upload */}
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 shadow-sm"
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        {showFilters && (
          <div className="mt-4 flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as FilterType)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
            >
              <option value="all">All Types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="document">Documents</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="size-desc">Largest First</option>
              <option value="size-asc">Smallest First</option>
            </select>

            <div className="text-sm text-slate-600 dark:text-slate-400">
              {filteredFiles.length} files
              {selectedFiles.length > 0 && ` • ${selectedFiles.length} selected`}
            </div>
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className={`grid ${getGridClass()} gap-4`}>
          {filteredFiles.map((file, index) => (
            <div
              key={file.id}
              className="group relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => file.type === 'image' && openLightbox(index)}
            >
              {/* Image */}
              <img
                src={file.thumbnail}
                alt={file.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Top Actions */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelect(file.id);
                    }}
                    className={`p-1.5 rounded ${selectedFiles.includes(file.id) ? 'bg-blue-500 text-white' : 'bg-white/90 text-slate-700'}`}
                  >
                    <Check className="w-3 h-3" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(file.id);
                    }}
                    className={`p-1.5 rounded ${file.favorite ? 'bg-red-500 text-white' : 'bg-white/90 text-slate-700'}`}
                  >
                    <Heart className="w-3 h-3" fill={file.favorite ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium truncate mb-1">{file.name}</p>
                  <div className="flex items-center justify-between text-white/80 text-xs">
                    <span>{file.size}</span>
                    {file.type === 'image' && <span>{file.dimensions}</span>}
                  </div>
                </div>
              </div>

              {/* Type Badge */}
              {file.type !== 'image' && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded backdrop-blur-sm">
                  {file.type === 'video' && <Video className="w-3 h-3" />}
                  {file.type === 'document' && <FileText className="w-3 h-3" />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && imageFiles[currentImageIndex] && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="text-white">
                <p className="font-medium">{imageFiles[currentImageIndex]?.name}</p>
                <p className="text-sm text-white/60">
                  {currentImageIndex + 1} / {imageFiles.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                className="p-2 hover:bg-white/10 rounded-lg text-white"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white text-sm min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom(Math.min(3, zoom + 0.25))}
                className="p-2 hover:bg-white/10 rounded-lg text-white"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => toggleFavorite(imageFiles[currentImageIndex].id)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <Heart
                  className="w-5 h-5 text-white"
                  fill={imageFiles[currentImageIndex]?.favorite ? 'currentColor' : 'none'}
                />
              </button>
              <a
                href={imageFiles[currentImageIndex]?.url}
                download
                className="p-2 hover:bg-white/10 rounded-lg text-white"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={imageFiles[currentImageIndex]?.url}
              alt={imageFiles[currentImageIndex]?.name}
              style={{ transform: `scale(${zoom})` }}
              className="max-w-full max-h-full object-contain transition-transform"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="p-4 bg-black/50 backdrop-blur-sm overflow-x-auto">
            <div className="flex gap-2">
              {imageFiles.map((file, index) => (
                <button
                  key={file.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={file.thumbnail}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-lg w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold dark:text-white">Upload Files</h2>
              <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <label className="block border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*,video/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p className="text-lg mb-2 dark:text-white">Drop files here or click to browse</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Images, videos, and documents supported</p>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;