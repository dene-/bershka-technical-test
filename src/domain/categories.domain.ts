export type CategoryName = string;

export interface Category {
  name: CategoryName;
  subcategories: Category[];
}

export const getCategoryPath = (
  categories: Category[],
  categoryName: CategoryName
): string | undefined => {
  const findPath = (
    categoryNodes: Category[],
    currentPath: string[] = []
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
  }
  
  const foundPath = findPath(categories);

  if (!foundPath) return undefined;

  return `/${foundPath.join('/')}`;
}