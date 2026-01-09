import React, { useState } from 'react';
import { Plus, Edit2, Trash2, ChevronRight, ChevronDown, GripVertical, Search, ImageIcon } from 'lucide-react';

const ProductCategoryManager = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'All Clothing Products',
      slug: 'all-clothing-products',
      description: 'Complete clothing collection for men and women',
      parent: null,
      image: null,
      count: 0,
      children: [
        {
          id: 2,
          name: 'Clothing',
          slug: 'clothing',
          description: 'All clothing items',
          parent: 1,
          image: null,
          count: 0,
          children: [
            {
              id: 3,
              name: 'Men',
              slug: 'men',
              description: "Men's clothing collection",
              parent: 2,
              image: null,
              count: 0,
              children: [
                {
                  id: 4,
                  name: 'Activewear',
                  slug: 'men-activewear',
                  description: 'Active and sports wear for men',
                  parent: 3,
                  image: null,
                  count: 0,
                  children: [
                    {
                      id: 5,
                      name: 'Gym Wear',
                      slug: 'gym-wear',
                      parent: 4,
                      count: 0,
                      children: [
                        { id: 6, name: 'Gym T-Shirts', slug: 'gym-tshirts', parent: 5, count: 12, children: [] },
                        { id: 7, name: 'Gym Vests', slug: 'gym-vests', parent: 5, count: 8, children: [] },
                        { id: 8, name: 'Gym Shorts', slug: 'gym-shorts', parent: 5, count: 10, children: [] }
                      ]
                    },
                    {
                      id: 9,
                      name: 'Sportswear',
                      slug: 'sportswear',
                      parent: 4,
                      count: 0,
                      children: [
                        { id: 10, name: 'Football Wear', slug: 'football-wear', parent: 9, count: 15, children: [] },
                        { id: 11, name: 'Cricket Wear', slug: 'cricket-wear', parent: 9, count: 18, children: [] },
                        { id: 12, name: 'Running Wear', slug: 'running-wear', parent: 9, count: 14, children: [] },
                        { id: 13, name: 'Training Wear', slug: 'training-wear', parent: 9, count: 16, children: [] }
                      ]
                    },
                    {
                      id: 14,
                      name: 'Trackwear',
                      slug: 'trackwear',
                      parent: 4,
                      count: 0,
                      children: [
                        { id: 15, name: 'Track Jackets', slug: 'track-jackets', parent: 14, count: 20, children: [] },
                        { id: 16, name: 'Track Pants', slug: 'track-pants', parent: 14, count: 22, children: [] },
                        { id: 17, name: 'Track Suits', slug: 'track-suits', parent: 14, count: 18, children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: 18,
                  name: 'Bottoms',
                  slug: 'men-bottoms',
                  parent: 3,
                  count: 0,
                  children: [
                    {
                      id: 19,
                      name: 'Jeans',
                      slug: 'jeans',
                      parent: 18,
                      count: 0,
                      children: [
                        { id: 20, name: 'Slim Fit', slug: 'slim-fit-jeans', parent: 19, count: 35, children: [] },
                        { id: 21, name: 'Regular Fit', slug: 'regular-fit-jeans', parent: 19, count: 40, children: [] },
                        { id: 22, name: 'Skinny Fit', slug: 'skinny-fit-jeans', parent: 19, count: 28, children: [] },
                        { id: 23, name: 'Tapered Fit', slug: 'tapered-fit-jeans', parent: 19, count: 25, children: [] }
                      ]
                    },
                    {
                      id: 24,
                      name: 'Trousers',
                      slug: 'trousers',
                      parent: 18,
                      count: 0,
                      children: [
                        { id: 25, name: 'Formal Trousers', slug: 'formal-trousers', parent: 24, count: 45, children: [] },
                        { id: 26, name: 'Casual Trousers', slug: 'casual-trousers', parent: 24, count: 38, children: [] },
                        { id: 27, name: 'Chinos', slug: 'chinos', parent: 24, count: 42, children: [] },
                        { id: 28, name: 'Pleated Trousers', slug: 'pleated-trousers', parent: 24, count: 20, children: [] }
                      ]
                    },
                    {
                      id: 29,
                      name: 'Shorts',
                      slug: 'men-shorts',
                      parent: 18,
                      count: 0,
                      children: [
                        { id: 30, name: 'Casual Shorts', slug: 'casual-shorts', parent: 29, count: 30, children: [] },
                        { id: 31, name: 'Cargo Shorts', slug: 'cargo-shorts', parent: 29, count: 25, children: [] },
                        { id: 32, name: 'Sports Shorts', slug: 'sports-shorts', parent: 29, count: 28, children: [] }
                      ]
                    },
                    {
                      id: 33,
                      name: 'Track Pants & Joggers',
                      slug: 'track-pants-joggers',
                      parent: 18,
                      count: 0,
                      children: [
                        { id: 34, name: 'Joggers', slug: 'joggers', parent: 33, count: 35, children: [] },
                        { id: 35, name: 'Track Pants', slug: 'men-track-pants', parent: 33, count: 32, children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: 36,
                  name: 'Ethnic Wear',
                  slug: 'men-ethnic-wear',
                  parent: 3,
                  count: 0,
                  children: [
                    {
                      id: 37,
                      name: 'Kurtas',
                      slug: 'kurtas',
                      parent: 36,
                      count: 0,
                      children: [
                        { id: 38, name: 'Short Kurtas', slug: 'short-kurtas', parent: 37, count: 25, children: [] },
                        { id: 39, name: 'Long Kurtas', slug: 'long-kurtas', parent: 37, count: 30, children: [] },
                        { id: 40, name: 'Printed Kurtas', slug: 'printed-kurtas', parent: 37, count: 28, children: [] }
                      ]
                    },
                    {
                      id: 41,
                      name: 'Kurta Sets',
                      slug: 'kurta-sets',
                      parent: 36,
                      count: 0,
                      children: [
                        { id: 42, name: 'Kurta Pajama', slug: 'kurta-pajama', parent: 41, count: 35, children: [] },
                        { id: 43, name: 'Kurta Churidar', slug: 'kurta-churidar', parent: 41, count: 28, children: [] },
                        { id: 44, name: 'Kurta Dhoti', slug: 'kurta-dhoti', parent: 41, count: 22, children: [] }
                      ]
                    },
                    {
                      id: 45,
                      name: 'Sherwani',
                      slug: 'sherwani',
                      parent: 36,
                      count: 0,
                      children: [
                        { id: 46, name: 'Wedding Sherwani', slug: 'wedding-sherwani', parent: 45, count: 15, children: [] },
                        { id: 47, name: 'Festive Sherwani', slug: 'festive-sherwani', parent: 45, count: 12, children: [] }
                      ]
                    },
                    { id: 48, name: 'Nehru Jackets', slug: 'nehru-jackets', parent: 36, count: 20, children: [] },
                    { id: 49, name: 'Pathani Suits', slug: 'pathani-suits', parent: 36, count: 18, children: [] }
                  ]
                },
                {
                  id: 50,
                  name: 'Footwear',
                  slug: 'men-footwear',
                  parent: 3,
                  count: 0,
                  children: [
                    {
                      id: 51,
                      name: 'Casual Shoes',
                      slug: 'casual-shoes',
                      parent: 50,
                      count: 0,
                      children: [
                        { id: 52, name: 'Sneakers', slug: 'sneakers', parent: 51, count: 45, children: [] },
                        { id: 53, name: 'Loafers', slug: 'loafers', parent: 51, count: 35, children: [] },
                        { id: 54, name: 'Slip-Ons', slug: 'slip-ons', parent: 51, count: 30, children: [] }
                      ]
                    },
                    {
                      id: 55,
                      name: 'Formal Shoes',
                      slug: 'formal-shoes',
                      parent: 50,
                      count: 0,
                      children: [
                        { id: 56, name: 'Oxfords', slug: 'oxfords', parent: 55, count: 28, children: [] },
                        { id: 57, name: 'Derbies', slug: 'derbies', parent: 55, count: 25, children: [] },
                        { id: 58, name: 'Monk Straps', slug: 'monk-straps', parent: 55, count: 20, children: [] }
                      ]
                    },
                    {
                      id: 59,
                      name: 'Sports Shoes',
                      slug: 'men-sports-shoes',
                      parent: 50,
                      count: 0,
                      children: [
                        { id: 60, name: 'Running Shoes', slug: 'running-shoes', parent: 59, count: 40, children: [] },
                        { id: 61, name: 'Training Shoes', slug: 'training-shoes', parent: 59, count: 35, children: [] },
                        { id: 62, name: 'Walking Shoes', slug: 'walking-shoes', parent: 59, count: 32, children: [] }
                      ]
                    },
                    {
                      id: 63,
                      name: 'Sandals & Floaters',
                      slug: 'sandals-floaters',
                      parent: 50,
                      count: 0,
                      children: [
                        { id: 64, name: 'Sandals', slug: 'men-sandals', parent: 63, count: 25, children: [] },
                        { id: 65, name: 'Floaters', slug: 'floaters', parent: 63, count: 22, children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: 66,
                  name: 'Innerwear',
                  slug: 'men-innerwear',
                  parent: 3,
                  count: 0,
                  children: [
                    { id: 67, name: 'Briefs', slug: 'briefs', parent: 66, count: 50, children: [] },
                    { id: 68, name: 'Boxers', slug: 'boxers', parent: 66, count: 45, children: [] },
                    { id: 69, name: 'Vests', slug: 'vests', parent: 66, count: 40, children: [] },
                    { id: 70, name: 'Thermal Wear', slug: 'men-thermal-wear', parent: 66, count: 30, children: [] },
                    { id: 71, name: 'Shapewear', slug: 'men-shapewear', parent: 66, count: 15, children: [] }
                  ]
                },
                {
                  id: 72,
                  name: 'Loungewear',
                  slug: 'men-loungewear',
                  parent: 3,
                  count: 0,
                  children: [
                    { id: 73, name: 'Lounge T-Shirts', slug: 'men-lounge-tshirts', parent: 72, count: 35, children: [] },
                    { id: 74, name: 'Lounge Pants', slug: 'men-lounge-pants', parent: 72, count: 30, children: [] },
                    { id: 75, name: 'Lounge Shorts', slug: 'men-lounge-shorts', parent: 72, count: 28, children: [] },
                    { id: 76, name: 'Co-ord Sets', slug: 'men-coord-sets', parent: 72, count: 25, children: [] }
                  ]
                },
                {
                  id: 77,
                  name: 'Seasonal Wear',
                  slug: 'men-seasonal-wear',
                  parent: 3,
                  count: 0,
                  children: [
                    {
                      id: 78,
                      name: 'Winter Wear',
                      slug: 'winter-wear',
                      parent: 77,
                      count: 0,
                      children: [
                        { id: 79, name: 'Jackets', slug: 'winter-jackets', parent: 78, count: 35, children: [] },
                        { id: 80, name: 'Sweaters', slug: 'sweaters', parent: 78, count: 40, children: [] },
                        { id: 81, name: 'Thermals', slug: 'thermals', parent: 78, count: 30, children: [] }
                      ]
                    },
                    {
                      id: 82,
                      name: 'Summer Wear',
                      slug: 'summer-wear',
                      parent: 77,
                      count: 0,
                      children: [
                        { id: 83, name: 'Cotton T-Shirts', slug: 'cotton-tshirts', parent: 82, count: 45, children: [] },
                        { id: 84, name: 'Light Shirts', slug: 'light-shirts', parent: 82, count: 38, children: [] },
                        { id: 85, name: 'Shorts', slug: 'summer-shorts', parent: 82, count: 35, children: [] }
                      ]
                    },
                    {
                      id: 86,
                      name: 'Monsoon Wear',
                      slug: 'monsoon-wear',
                      parent: 77,
                      count: 0,
                      children: [
                        { id: 87, name: 'Rain Jackets', slug: 'rain-jackets', parent: 86, count: 25, children: [] },
                        { id: 88, name: 'Windcheaters', slug: 'windcheaters', parent: 86, count: 22, children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: 89,
                  name: 'Sleepwear',
                  slug: 'men-sleepwear',
                  parent: 3,
                  count: 0,
                  children: [
                    { id: 90, name: 'Night Suits', slug: 'night-suits', parent: 89, count: 30, children: [] },
                    { id: 91, name: 'Pyjamas', slug: 'pyjamas', parent: 89, count: 35, children: [] },
                    { id: 92, name: 'Night Shorts', slug: 'night-shorts', parent: 89, count: 25, children: [] },
                    { id: 93, name: 'Sleep T-Shirts', slug: 'sleep-tshirts', parent: 89, count: 28, children: [] }
                  ]
                },
                {
                  id: 94,
                  name: 'Suits & Blazers',
                  slug: 'suits-blazers',
                  parent: 3,
                  count: 0,
                  children: [
                    { id: 95, name: 'Blazers', slug: 'blazers', parent: 94, count: 35, children: [] },
                    { id: 96, name: 'Suits', slug: 'suits', parent: 94, count: 28, children: [] },
                    { id: 97, name: 'Waistcoats', slug: 'waistcoats', parent: 94, count: 22, children: [] },
                    { id: 98, name: 'Tuxedos', slug: 'tuxedos', parent: 94, count: 15, children: [] }
                  ]
                },
                {
                  id: 99,
                  name: 'Tops',
                  slug: 'men-tops',
                  parent: 3,
                  count: 0,
                  children: [
                    {
                      id: 100,
                      name: 'T-Shirts',
                      slug: 'tshirts',
                      parent: 99,
                      count: 0,
                      children: [
                        { id: 101, name: 'Round Neck', slug: 'round-neck', parent: 100, count: 60, children: [] },
                        { id: 102, name: 'V-Neck', slug: 'v-neck', parent: 100, count: 45, children: [] },
                        { id: 103, name: 'Polo', slug: 'polo', parent: 100, count: 50, children: [] },
                        { id: 104, name: 'Printed', slug: 'printed-tshirts', parent: 100, count: 55, children: [] },
                        { id: 105, name: 'Solid', slug: 'solid-tshirts', parent: 100, count: 65, children: [] }
                      ]
                    },
                    {
                      id: 106,
                      name: 'Shirts',
                      slug: 'shirts',
                      parent: 99,
                      count: 0,
                      children: [
                        { id: 107, name: 'Casual', slug: 'casual-shirts', parent: 106, count: 55, children: [] },
                        { id: 108, name: 'Formal', slug: 'formal-shirts', parent: 106, count: 60, children: [] },
                        { id: 109, name: 'Printed', slug: 'printed-shirts', parent: 106, count: 45, children: [] },
                        { id: 110, name: 'Striped', slug: 'striped-shirts', parent: 106, count: 42, children: [] }
                      ]
                    },
                    {
                      id: 111,
                      name: 'Hoodies & Sweatshirts',
                      slug: 'hoodies-sweatshirts',
                      parent: 99,
                      count: 0,
                      children: [
                        { id: 112, name: 'Pullover Hoodies', slug: 'pullover-hoodies', parent: 111, count: 40, children: [] },
                        { id: 113, name: 'Zipper Hoodies', slug: 'zipper-hoodies', parent: 111, count: 38, children: [] },
                        { id: 114, name: 'Sweatshirts', slug: 'sweatshirts', parent: 111, count: 45, children: [] }
                      ]
                    },
                    {
                      id: 115,
                      name: 'Jackets',
                      slug: 'men-jackets',
                      parent: 99,
                      count: 0,
                      children: [
                        { id: 116, name: 'Bomber Jackets', slug: 'bomber-jackets', parent: 115, count: 30, children: [] },
                        { id: 117, name: 'Denim Jackets', slug: 'denim-jackets', parent: 115, count: 35, children: [] },
                        { id: 118, name: 'Winter Jackets', slug: 'men-winter-jackets', parent: 115, count: 40, children: [] }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 119,
              name: 'Women',
              slug: 'women',
              description: "Women's clothing collection",
              parent: 2,
              image: null,
              count: 0,
              children: [
                {
                  id: 120,
                  name: 'Activewear',
                  slug: 'women-activewear',
                  parent: 119,
                  count: 0,
                  children: [
                    {
                      id: 121,
                      name: 'Gym Wear',
                      slug: 'women-gym-wear',
                      parent: 120,
                      count: 0,
                      children: [
                        { id: 122, name: 'Gym T-Shirts', slug: 'women-gym-tshirts', parent: 121, count: 35, children: [] },
                        { id: 123, name: 'Sports Bras', slug: 'sports-bras', parent: 121, count: 40, children: [] },
                        { id: 124, name: 'Gym Leggings', slug: 'gym-leggings', parent: 121, count: 45, children: [] },
                        { id: 125, name: 'Gym Shorts', slug: 'women-gym-shorts', parent: 121, count: 30, children: [] }
                      ]
                    },
                    {
                      id: 126,
                      name: 'Sportswear',
                      slug: 'women-sportswear',
                      parent: 120,
                      count: 0,
                      children: [
                        { id: 127, name: 'Running Wear', slug: 'women-running-wear', parent: 126, count: 35, children: [] },
                        { id: 128, name: 'Yoga Wear', slug: 'yoga-wear', parent: 126, count: 42, children: [] },
                        { id: 129, name: 'Training Wear', slug: 'women-training-wear', parent: 126, count: 38, children: [] }
                      ]
                    },
                    {
                      id: 130,
                      name: 'Trackwear',
                      slug: 'women-trackwear',
                      parent: 120,
                      count: 0,
                      children: [
                        { id: 131, name: 'Track Jackets', slug: 'women-track-jackets', parent: 130, count: 28, children: [] },
                        { id: 132, name: 'Track Pants', slug: 'women-track-pants', parent: 130, count: 32, children: [] },
                        { id: 133, name: 'Track Suits', slug: 'women-track-suits', parent: 130, count: 25, children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: 134,
                  name: 'Bottoms',
                  slug: 'women-bottoms',
                  parent: 119,
                  count: 0,
                  children: [
                    {
                      id: 135,
                      name: 'Jeans',
                      slug: 'women-jeans',
                      parent: 134,
                      count: 0,
                      children: [
                        { id: 136, name: 'Skinny', slug: 'skinny-jeans', parent: 135, count: 45, children: [] },
                        { id: 137, name: 'Straight', slug: 'straight-jeans', parent: 135, count: 40, children: [] },
                        { id: 138, name: 'Mom Fit', slug: 'mom-fit-jeans', parent: 135, count: 38, children: [] },
                        { id: 139, name: 'Boyfriend', slug: 'boyfriend-jeans', parent: 135, count: 35, children: [] }
                      ]
                    },
                    {
                      id: 140,
                      name: 'Trousers',
                      slug: 'women-trousers',
                      parent: 134,
                      count: 0,
                      children: [
                        { id: 141, name: 'Formal', slug: 'women-formal-trousers', parent: 140, count: 40, children: [] },
                        { id: 142, name: 'Palazzo', slug: 'palazzo', parent: 140, count: 45, children: [] },
                        { id: 143, name: 'Culottes', slug: 'culottes', parent: 140, count: 35, children: [] }
                      ]
                    },
                    { id: 144, name: 'Leggings & Jeggings', slug: 'leggings-jeggings', parent: 134, count: 55, children: [] },
                    {
                      id: 145,
                      name: 'Skirts',
                      slug: 'skirts',
                      parent: 134,
                      count: 0,
                      children: [
                        { id: 146, name: 'Mini', slug: 'mini-skirts', parent: 145, count: 30, children: [] },
                        { id: 147, name: 'Midi', slug: 'midi-skirts', parent: 145, count: 35, children: [] },
                        { id: 148, name: 'Maxi', slug: 'maxi-skirts', parent: 145, count: 32, children: [] }
                      ]
                    },
                    { id: 149, name: 'Shorts', slug: 'women-shorts', parent: 134, count: 40, children: [] }
                  ]
                },
                {
                  id: 150,
                  name: 'Dresses',
                  slug: 'dresses',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 151, name: 'Casual Dresses', slug: 'casual-dresses', parent: 150, count: 50, children: [] },
                    { id: 152, name: 'Party Dresses', slug: 'party-dresses', parent: 150, count: 45, children: [] },
                    { id: 153, name: 'Maxi Dresses', slug: 'maxi-dresses', parent: 150, count: 42, children: [] },
                    { id: 154, name: 'Midi Dresses', slug: 'midi-dresses', parent: 150, count: 48, children: [] },
                    { id: 155, name: 'Mini Dresses', slug: 'mini-dresses', parent: 150, count: 40, children: [] },
                    { id: 156, name: 'Bodycon', slug: 'bodycon-dresses', parent: 150, count: 35, children: [] },
                    { id: 157, name: 'A-Line', slug: 'a-line-dresses', parent: 150, count: 38, children: [] },
                    { id: 158, name: 'Wrap Dresses', slug: 'wrap-dresses', parent: 150, count: 32, children: [] }
                  ]
                },
                {
                  id: 159,
                  name: 'Ethnic Wear',
                  slug: 'women-ethnic-wear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 160, name: 'Kurtis', slug: 'kurtis', parent: 159, count: 65, children: [] },
                    { id: 161, name: 'Kurta Sets', slug: 'women-kurta-sets', parent: 159, count: 55, children: [] },
                    { id: 162, name: 'Sarees', slug: 'sarees', parent: 159, count: 70, children: [] },
                    { id: 163, name: 'Salwar Suits', slug: 'salwar-suits', parent: 159, count: 60, children: [] },
                    { id: 164, name: 'Lehengas', slug: 'lehengas', parent: 159, count: 45, children: [] },
                    { id: 165, name: 'Dupattas & Jackets', slug: 'dupattas-jackets', parent: 159, count: 40, children: [] }
                  ]
                },
                {
                  id: 166,
                  name: 'Footwear',
                  slug: 'women-footwear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 167, name: 'Flats', slug: 'flats', parent: 166, count: 50, children: [] },
                    { id: 168, name: 'Heels', slug: 'heels', parent: 166, count: 45, children: [] },
                    { id: 169, name: 'Sandals', slug: 'women-sandals', parent: 166, count: 42, children: [] },
                    { id: 170, name: 'Sports Shoes', slug: 'women-sports-shoes', parent: 166, count: 38, children: [] },
                    { id: 171, name: 'Ethnic Footwear', slug: 'ethnic-footwear', parent: 166, count: 35, children: [] }
                  ]
                },
                {
                  id: 172,
                  name: 'Innerwear',
                  slug: 'women-innerwear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 173, name: 'Bras', slug: 'bras', parent: 172, count: 60, children: [] },
                    { id: 174, name: 'Panties', slug: 'panties', parent: 172, count: 55, children: [] },
                    { id: 175, name: 'Shapewear', slug: 'women-shapewear', parent: 172, count: 30, children: [] },
                    { id: 176, name: 'Lingerie Sets', slug: 'lingerie-sets', parent: 172, count: 40, children: [] },
                    { id: 177, name: 'Thermal Wear', slug: 'women-thermal-wear', parent: 172, count: 25, children: [] }
                  ]
                },
                {
                  id: 178,
                  name: 'Loungewear',
                  slug: 'women-loungewear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 179, name: 'Lounge T-Shirts', slug: 'women-lounge-tshirts', parent: 178, count: 40, children: [] },
                    { id: 180, name: 'Lounge Pants', slug: 'women-lounge-pants', parent: 178, count: 38, children: [] },
                    { id: 181, name: 'Lounge Shorts', slug: 'women-lounge-shorts', parent: 178, count: 35, children: [] },
                    { id: 182, name: 'Co-ord Sets', slug: 'women-coord-sets', parent: 178, count: 42, children: [] }
                  ]
                },
                {
                  id: 183,
                  name: 'Seasonal Wear',
                  slug: 'women-seasonal-wear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 184, name: 'Winter Wear', slug: 'women-winter-wear', parent: 183, count: 50, children: [] },
                    {
                      id: 185,
                      name: 'Summer Wear',
                      slug: 'women-summer-wear',
                      parent: 183,
                      count: 0,
                      children: [
                        { id: 186, name: 'Cotton Dresses', slug: 'cotton-dresses', parent: 185, count: 45, children: [] },
                        { id: 187, name: 'Shorts', slug: 'women-summer-shorts', parent: 185, count: 40, children: [] }
                      ]
                    },
                    { id: 188, name: 'Monsoon Wear', slug: 'women-monsoon-wear', parent: 183, count: 35, children: [] }
                  ]
                },
                {
                  id: 189,
                  name: 'Sleepwear',
                  slug: 'women-sleepwear',
                  parent: 119,
                  count: 0,
                  children: [
                    { id: 190, name: 'Night Dresses', slug: 'night-dresses', parent: 189, count: 40, children: [] },
                    { id: 191, name: 'Night Shorts', slug: 'women-night-shorts', parent: 189, count: 35, children: [] },
                    { id: 192, name: 'Night Suits', slug: 'women-night-suits', parent: 189, count: 38, children: [] },
                    { id: 193, name: 'Sleep T-Shirts', slug: 'women-sleep-tshirts', parent: 189, count: 42, children: [] }
                  ]
                },
                {
                  id: 194,
                  name: 'Tops',
                  slug: 'women-tops',
                  parent: 119,
                  count: 0,
                  children: [
                    {
                      id: 195,
                      name: 'T-Shirts',
                      slug: 'women-tshirts',
                      parent: 194,
                      count: 0,
                      children: [
                        { id: 196, name: 'Round Neck', slug: 'women-round-neck', parent: 195, count: 50, children: [] },
                        { id: 197, name: 'Crop T-Shirts', slug: 'crop-tshirts', parent: 195, count: 45, children: [] },
                        { id: 198, name: 'Printed', slug: 'women-printed-tshirts', parent: 195, count: 48, children: [] },
                        { id: 199, name: 'Solid', slug: 'women-solid-tshirts', parent: 195, count: 52, children: [] }
                      ]
                    },
                    { id: 200, name: 'Shirts', slug: 'women-shirts', parent: 194, count: 55, children: [] },
                    {
                      id: 201,
                      name: 'Tops & Blouses',
                      slug: 'tops-blouses',
                      parent: 194,
                      count: 0,
                      children: [
                        { id: 202, name: 'Casual Tops', slug: 'casual-tops', parent: 201, count: 60, children: [] },
                        { id: 203, name: 'Party Tops', slug: 'party-tops', parent: 201, count: 45, children: [] },
                        { id: 204, name: 'Off-Shoulder', slug: 'off-shoulder-tops', parent: 201, count: 40, children: [] },
                        { id: 205, name: 'Crop Tops', slug: 'crop-tops', parent: 201, count: 50, children: [] },
                        { id: 206, name: 'Peplum Tops', slug: 'peplum-tops', parent: 201, count: 35, children: [] }
                      ]
                    },
                    {
                      id: 207,
                      name: 'Hoodies & Sweatshirts',
                      slug: 'women-hoodies-sweatshirts',
                      parent: 194,
                      count: 0,
                      children: [
                        { id: 208, name: 'Pullover Hoodies', slug: 'women-pullover-hoodies', parent: 207, count: 38, children: [] },
                        { id: 209, name: 'Zipper Hoodies', slug: 'women-zipper-hoodies', parent: 207, count: 35, children: [] },
                        { id: 210, name: 'Sweatshirts', slug: 'women-sweatshirts', parent: 207, count: 42, children: [] }
                      ]
                    },
                    {
                      id: 211,
                      name: 'Jackets',
                      slug: 'women-jackets',
                      parent: 194,
                      count: 0,
                      children: [
                        { id: 212, name: 'Bomber Jackets', slug: 'women-bomber-jackets', parent: 211, count: 30, children: [] },
                        { id: 213, name: 'Denim Jackets', slug: 'women-denim-jackets', parent: 211, count: 35, children: [] },
                        { id: 214, name: 'Winter Jackets', slug: 'women-winter-jackets', parent: 211, count: 38, children: [] }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    parent: '',
    description: '',
    image: null
  });

  const getAllCategories = (cats, level = 0) => {
    let result = [];
    cats.forEach(cat => {
      result.push({ ...cat, level });
      if (cat.children && cat.children.length > 0) {
        result = result.concat(getAllCategories(cat.children, level + 1));
      }
    });
    return result;
  };

  const toggleExpand = (id) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setFormData({ name: '', slug: '', parent: '', description: '', image: null });
    setShowModal(true);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      parent: category.parent || '',
      description: category.description,
      image: category.image
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm('Kya aap is category ko delete karna chahte hain?')) {
      const deleteFromTree = (cats) => {
        return cats.filter(cat => {
          if (cat.id === id) return false;
          if (cat.children) {
            cat.children = deleteFromTree(cat.children);
          }
          return true;
        });
      };
      setCategories(deleteFromTree(categories));
    }
  };

  const handleSubmit = () => {
    const newCategory = {
      id: editingCategory ? editingCategory.id : Date.now(),
      name: formData.name,
      slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-'),
      description: formData.description,
      parent: formData.parent ? parseInt(formData.parent) : null,
      image: formData.image,
      count: editingCategory ? editingCategory.count : 0,
      children: editingCategory ? editingCategory.children : []
    };

    if (editingCategory) {
      const updateInTree = (cats) => {
        return cats.map(cat => {
          if (cat.id === editingCategory.id) {
            return { ...newCategory };
          }
          if (cat.children) {
            return { ...cat, children: updateInTree(cat.children) };
          }
          return cat;
        });
      };
      setCategories(updateInTree(categories));
    } else {
      if (newCategory.parent) {
        const addToParent = (cats) => {
          return cats.map(cat => {
            if (cat.id === newCategory.parent) {
              return { ...cat, children: [...cat.children, newCategory] };
            }
            if (cat.children) {
              return { ...cat, children: addToParent(cat.children) };
            }
            return cat;
          });
        };
        setCategories(addToParent(categories));
      } else {
        setCategories([...categories, newCategory]);
      }
    }

    setShowModal(false);
  };

  const renderCategoryRow = (category, level = 0) => {
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedCategories[category.id];

    return (
      <React.Fragment key={category.id}>
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <td className="p-3">
            <div className="flex items-center" style={{ paddingLeft: `${level * 24}px` }}>
              {hasChildren && (
                <button
                  onClick={() => toggleExpand(category.id)}
                  className="mr-2 text-gray-500 hover:text-gray-700"
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              )}
              <GripVertical size={16} className="text-gray-400 mr-2 cursor-move" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                  {category.image ? (
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon size={20} className="text-gray-400" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.slug}</div>
                </div>
              </div>
            </div>
          </td>
          <td className="p-3 text-gray-600 text-sm max-w-xs truncate">
            {category.description || '-'}
          </td>
          <td className="p-3 text-gray-600 text-sm">
            {category.parent ? 'Sub-category' : 'Parent'}
          </td>
          <td className="p-3 text-center text-gray-600">
            <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {category.count}
            </span>
          </td>
          <td className="p-3">
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleEdit(category)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Edit"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </td>
        </tr>
        {hasChildren && isExpanded && category.children.map(child => renderCategoryRow(child, level + 1))}
      </React.Fragment>
    );
  };

  const flatCategories = getAllCategories(categories);
  const filteredCategories = searchTerm
    ? flatCategories.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.slug.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Product Categories</h1>
              <p className="text-gray-600 text-sm mt-1">Complete clothing category hierarchy - 214 categories loaded</p>
            </div>
            <button
              onClick={handleAddNew}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              Add Category
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Name</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Description</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-center p-3 text-sm font-semibold text-gray-700">Products</th>
                  <th className="text-right p-3 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? flatCategories : categories).length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-8 text-gray-500">
                      Koi category nahi mili. Naya category add karein.
                    </td>
                  </tr>
                ) : searchTerm ? (
                  flatCategories
                    .filter(cat => 
                      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      cat.slug.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(cat => renderCategoryRow(cat, cat.level))
                ) : (
                  categories.map(cat => renderCategoryRow(cat))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Electronics"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="electronics (auto-generated from name)"
                />
                <p className="text-xs text-gray-500 mt-1">URL-friendly version of name</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent Category
                </label>
                <select
                  value={formData.parent}
                  onChange={(e) => setFormData({ ...formData, parent: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">None (Parent Category)</option>
                  {flatCategories
                    .filter(cat => !editingCategory || cat.id !== editingCategory.id)
                    .map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {'—'.repeat(cat.level)} {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Category description..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Image URL
                </label>
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingCategory ? 'Update' : 'Add'} Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategoryManager;
