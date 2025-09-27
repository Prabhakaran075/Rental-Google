import React, { useState } from 'react';
import { getPricingSuggestion } from '../services/geminiService';

const ListYourItemPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetSuggestion = async () => {
        if (!title || !description) {
            setError('Please enter a title and description first.');
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const suggestedPrice = await getPricingSuggestion(title, description);
            if(suggestedPrice !== null) {
                setPrice(suggestedPrice.toString());
            } else {
                setError('Could not get a price suggestion. Please try again.');
            }
        } catch (e) {
            console.error(e);
            setError('An error occurred while fetching the price suggestion.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 max-w-3xl">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">List Your Item</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Item Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            placeholder="e.g., Professional 4K Camera Drone"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                            placeholder="Describe your item, its condition, and any accessories included."
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price per Day ($)
                        </label>
                        <div className="flex items-center space-x-2 mt-1">
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                                placeholder="e.g., 75"
                            />
                            <button
                                type="button"
                                onClick={handleGetSuggestion}
                                disabled={isLoading}
                                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 whitespace-nowrap"
                            >
                                {isLoading ? 'Getting...' : 'AI Suggestion'}
                            </button>
                        </div>
                        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    </div>

                     <div>
                        <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
                            Photos
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                                        <span>Upload files</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-secondary-hover transition-all duration-300"
                            >
                                List My Item
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListYourItemPage;
