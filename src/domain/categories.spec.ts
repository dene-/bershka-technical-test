import { describe, test, expect } from 'vitest';
import { getCategoryPath } from './categories.domain';
import { MOCK_CATEGORIES } from '~/tests/mocks/categories.mock';

export const getCategoryPathTestCases = [
  {
    input: { categories: MOCK_CATEGORIES, categoryName: 'Dresses' },
    expected: '/Women/Clothing/Dresses',
  },
  {
    // It will only match the first Sneakers category it finds, in this case in Women category
    input: { categories: MOCK_CATEGORIES, categoryName: 'Sneakers' },
    expected: '/Women/Shoes/Sneakers',
  },
  {
    input: { categories: MOCK_CATEGORIES, categoryName: 'Boots' },
    expected: '/Men/Shoes/Boots',
  },
  {
    input: { categories: MOCK_CATEGORIES, categoryName: 'Kids' },
    expected: '/Kids',
  },
  {
    input: { categories: MOCK_CATEGORIES, categoryName: 'NonExistent' },
    expected: undefined,
  },
];

describe('Categories domain', () => {
  describe('Given getCategoryPath function', () => {
    getCategoryPathTestCases.forEach((testCase) => {
      describe(`When categoryName is: ${testCase.input.categoryName}`, () => {
        test(`Then the expected path will be: ${testCase.expected}`, () => {
          const { categories, categoryName } = testCase.input;
          const { expected } = testCase;

          expect(getCategoryPath(categories, categoryName)).toBe(expected);
        });
      });
    });
  });
});
