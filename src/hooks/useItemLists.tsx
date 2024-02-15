import { useState } from "react";
import useFetch from "./useFetch";
import { UseItemListProps } from "../interfaces/Interfaces";

const useItemLists = ({ apiEndpoint }: UseItemListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newItem, setNewItem] = useState(false);
  const [tableview, setTableview] = useState(true);

  const { loading, fetchRequest } = useFetch({
    url: apiEndpoint,
    method: "GET",
  });

  const onClick = () => {
    setNewItem(true);
  };

  const onClickOverlay = () => {
    setNewItem(false);
  };

  const tableView = () => {
    setTableview((prev) => !prev);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return {
    currentPage,
    newItem,
    tableview,
    onClick,
    onClickOverlay,
    nextPage,
    tableView,
    prevPage,
    fetchRequest,
    loading,
  };
};

export default useItemLists;
