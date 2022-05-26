import { useState } from 'react';

export const usePaginationData = (linesPage, data) => {
  const [contentPerPage] = useState(linesPage);
  const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  //TODO: Criar funcao do current
  const [currentData, setCurrentData] = useState(() => {
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return data.slice(startIndex, endIndex);
  });

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    setCurrentData(() => {
      const startIndex = (currentPage + 1) * contentPerPage - contentPerPage;
      const endIndex = startIndex + contentPerPage;
      return data.slice(startIndex, endIndex);
    });
  };

  const gotToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    setCurrentData(() => {
      const startIndex = (currentPage - 1) * contentPerPage - contentPerPage;
      const endIndex = startIndex + contentPerPage;
      return data.slice(startIndex, endIndex);
    });
  };

  return {
    contentPerPage,
    totalPageCount,
    currentPage,
    goToNextPage,
    gotToPreviousPage,
    currentData,
  };
};
