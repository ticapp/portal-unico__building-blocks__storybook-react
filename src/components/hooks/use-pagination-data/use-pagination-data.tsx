import { useState } from 'react';
import { SelectOption } from './../../ui/select/select';

export const usePaginationData = (linesPage, data) => {
  const [contentPerPage, setContentPerPage] = useState(linesPage);
  const [totalPageCount, setTotalPageCount] = useState(Math.ceil(data.length / contentPerPage));
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

  const linesOptionChangeHandler = (val: SelectOption | SelectOption[]) => {
    setCurrentPage(1);
    setContentPerPage(val['value']);
    setCurrentData(() => {
      const startIndex = 1 * val['value'] - val['value'];
      const endIndex = startIndex + val['value'];
      const currentData = data.slice(startIndex, endIndex);
      setStartIndex(startIndex + 1);
      setEndIndex(currentData.length === val['value'] ? endIndex : endIndex - (val['value'] - currentData.length));
      setTotalPageCount(Math.ceil(data.length / val['value']));
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
    linesOptionChangeHandler,
  };
};
