import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import RentalItemCard from '../components/RentalItemCard';
import { RENTAL_ITEMS, CATEGORIES } from '../constants';
import { RentalItem } from '../types';

type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'rating_desc';

const ListingsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const cat = searchParams.get('category');
    return cat ? cat.split(',') : [];
  });
  const [sortOption, setSortOption] = useState<SortOption>('relevance');
  const query = searchParams.get('q') || '';
  
  const handleCategoryChange = (categoryName: string) => {
    const newCategories = selectedCategories.includes(categoryName)
      ? selectedCategories.filter(c => c !== categoryName)
      : [...selectedCategories, categoryName];
    setSelectedCategories(newCategories);
    
    const newSearchParams = new URLSearchParams(searchParams);
    if (newCategories.length > 0) {
      newSearchParams.set('category', newCategories.join(','));
    } else {
      newSearchParams.delete('category');
    }
    setSearchParams(newSearchParams, { replace: true });
  };

  const filteredAndSortedItems = useMemo(() => {
    let items = RENTAL_ITEMS.filter(item => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const queryMatch = query === '' || 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase());

      return categoryMatch && queryMatch;
    });

    items.sort((a, b) => {
      switch (sortOption) {
        case 'price_asc':
          return a.pricePerDay - b.pricePerDay;
        case 'price_desc':
          return b.pricePerDay - a.pricePerDay;
        case 'rating_desc':
          return b.rating - a.rating;
        default:
          return 0; // 'relevance' - no change from original order
      }
    });

    return items;
  }, [selectedCategories, sortOption, query]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Filters</h3>
          <div>
            <h4 className="font-semibold mb-2">Category</h4>
            {CATEGORIES.map(category => (
              <div key={category.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`cat-${category.name}`}
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`cat-${category.name}`} className="ml-3 text-sm text-gray-600">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
          {/* Other filters like price range could go here */}
        </aside>

        {/* Listings */}
        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold truncate">
              {query 
                ? <>Results for <span className="text-primary">"{query}"</span></>
                : 'All Rentals'
              }
              <span className="text-base font-normal text-gray-500 ml-2">({filteredAndSortedItems.length} found)</span>
            </h2>
            <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                <select 
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary text-sm"
                >
                    <option value="relevance">Relevance</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                    <option value="rating_desc">Top Rated</option>
                </select>
            </div>
          </div>
          {filteredAndSortedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedItems.map(item => (
                <RentalItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-700">No Items Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ListingsPage;