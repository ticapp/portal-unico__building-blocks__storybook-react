import { useState, useMemo, ReactNode } from 'react';

type sortDataType = { [key: string]: string | number | boolean | ReactNode } | null[];

type sortConfigType = { direction: string; key: string } | null;

export const useSortTableData = (items: sortDataType[], originalData: sortDataType[], value, config: sortConfigType) => {
  const [sortConfig, setSortConfig] = useState<sortConfigType>(config);

  const itemsSort = (sortableItems: sortDataType[]) => {
    if (sortConfig) {
      sortableItems.sort((a: sortDataType, b: sortDataType) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
  };

  const ifHasContextValue = (sortableItems: sortDataType[]) => {
    if (value) {
      const startIndex: number = value.currentPage * value.contentPerPage - value.contentPerPage;
      const endIndex: number = startIndex + value.contentPerPage;
      return sortableItems.slice(startIndex, endIndex);
    } else {
      return;
    }
  };

  const sortedItems = useMemo(() => {
    let sortableItems = [...originalData] as sortDataType[];
    itemsSort(sortableItems);
    return ifHasContextValue(sortableItems);
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
