import type { Category } from './interfaces/categories.interfaces';

/**
 * Get's the path to a category in an array of categories.
 * Caveat: it doesn't support categories with the same name, it'll always get the first path it finds. Top to bottom.
 * Ideally categories should have an id so we can get a category path with more specifiety.
 * @param categories Array of categories
 * @param categoryName The name of the category
 * @returns Returns an string if the path was found, undefined if not
 */
export const getCategoryPath = (
  categories: Category[],
  categoryName: string,
): string | undefined => {
  for (const category of categories) {
    if (category.name === categoryName) {
      return `/${category.name}`;
    }

    const subPath = getCategoryPath(category.subcategories, categoryName);

    if (subPath) {
      return `/${category.name}${subPath}`;
    }
  }

  return undefined;
};

/**
 * Get's the path to a category in an array of categories. Alternative version without using recursion.
 * Caveat: it doesn't support categories with the same name, it'll always get the first path it finds. Top to bottom.
 * @param categories Array of categories
 * @param categoryName The name of the category
 * @returns Returns an string if the path was found, undefined if not
 */
export const getCategoryPathStack = (
  categories: Category[],
  categoryName: string,
): string | undefined => {
  const stack: { category: Category; path: string }[] = [];

  for (const category of categories) {
    stack.push({
      category,
      path: `/${category.name}`,
    });
  }

  while (stack.length > 0) {
    const { category, path } = stack.shift()!;

    if (category.name === categoryName) {
      return path;
    }

    for (const subcategory of category.subcategories) {
      stack.push({
        category: subcategory,
        path: `${path}/${subcategory.name}`,
      });
    }
  }

  return undefined;
};
