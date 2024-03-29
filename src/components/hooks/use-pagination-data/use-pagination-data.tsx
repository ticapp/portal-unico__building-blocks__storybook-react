import { ChangeEvent, ReactNode, useEffect, useState } from 'react';

export type paginationDataType = { [key: string]: string | number | boolean | ReactNode } | null[];

export type usePaginationDataType = {
  contentPerPage: number;
  totalPageCount: number;
  currentPage: number;
  goToNextPage: () => void;
  gotToPreviousPage: () => void;
  currentData: paginationDataType[];
  startIndex: number;
  endIndex: number;
  linesOptionChangeHandler: (val: ChangeEvent<HTMLSelectElement>) => void;
} | null;

export const usePaginationData = (linesPage: string | number, data: paginationDataType[]) => {
  const [contentPerPage, setContentPerPage] = useState<number>(linesPage as number);
  const [totalPageCount, setTotalPageCount] = useState<number>(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(0);

  const updateCurrentData = (updateCurrentPage: number, updateContentPerPage: number) => {
    const newStartIndex = updateCurrentPage * updateContentPerPage - updateContentPerPage;
    const newEndIndex = newStartIndex + updateContentPerPage;
    const newCurrentData = data.slice(newStartIndex, newEndIndex);
    setStartIndex(newStartIndex + 1);
    setEndIndex(
      newCurrentData.length === updateContentPerPage ? newEndIndex : newEndIndex - (updateContentPerPage - newCurrentData.length)
    );
    return newCurrentData;
  };

  const [currentData, setCurrentData] = useState<paginationDataType[]>(() => {
    return updateCurrentData(currentPage, contentPerPage);
  });

  useEffect(() => {
    setCurrentData(updateCurrentData(currentPage, contentPerPage));
  }, [data]);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    setCurrentData(() => {
      return updateCurrentData(currentPage + 1, contentPerPage);
    });
  };

  const gotToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    setCurrentData(() => {
      return updateCurrentData(currentPage - 1, contentPerPage);
    });
  };

  const linesOptionChangeHandler = (evt: ChangeEvent<HTMLSelectElement>) => {
    const val = Number(evt.target.value);
    setCurrentPage(1);
    setContentPerPage(val);
    setCurrentData(() => {
      setTotalPageCount(Math.ceil(data.length / val));
      return updateCurrentData(1, val);
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
    linesOptionChangeHandler
  } as usePaginationDataType;
};
