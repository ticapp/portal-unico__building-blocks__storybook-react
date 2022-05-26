import { useState } from 'react';

export const usePaginationData = (linesPage, data) => {
  const [contentPerPage] = useState(linesPage);
  const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  //TODO: Criar funcao do current
  const [currentData, setCurrentData] = useState(() => {
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    const currentData = data.slice(startIndex, endIndex);
    setStartIndex(startIndex + 1);
    setEndIndex(currentData.length === contentPerPage ? endIndex : endIndex - (contentPerPage - currentData.length));
    return currentData;
  });

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    setCurrentData(() => {
      const startIndex = (currentPage + 1) * contentPerPage - contentPerPage;
      const endIndex = startIndex + contentPerPage;
      const currentData = data.slice(startIndex, endIndex);
      setStartIndex(startIndex + 1);
      setEndIndex(currentData.length === contentPerPage ? endIndex : endIndex - (contentPerPage - currentData.length));
      return currentData;
    });
  };

  const gotToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    setCurrentData(() => {
      const startIndex = (currentPage - 1) * contentPerPage - contentPerPage;
      const endIndex = startIndex + contentPerPage;
      const currentData = data.slice(startIndex, endIndex);
      setStartIndex(startIndex + 1);
      setEndIndex(currentData.length === contentPerPage ? endIndex : endIndex - (contentPerPage - currentData.length));
      return currentData;
    });
  };

  return {
    contentPerPage,
    totalPageCount,
    currentPage,
    goToNextPage,
    gotToPreviousPage,
    currentData,
    startIndex,
    endIndex,
  };
};
