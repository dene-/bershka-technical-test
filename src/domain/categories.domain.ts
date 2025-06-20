import type { Category } from './interfaces/categories.interfaces';

export const getCategoryPath = (
  categories: Category[],
  categoryName: string,
): string | undefined => {
  const findPath = (
    categoryNodes: Category[],
    currentPath: string[] = [],
  ): string[] | undefined => {
    for (const category of categoryNodes) {
      const newPath = [...currentPath, category.name];

      if (category.name === categoryName) return newPath;

      if (category.subcategories.length > 0) {
        const resultPath = findPath(category.subcategories, newPath);

        if (resultPath) return resultPath;
      }
    }

    return undefined;
  };

  const foundPath = findPath(categories);

  if (!foundPath) return undefined;

  return `/${foundPath.join('/')}`;
};
