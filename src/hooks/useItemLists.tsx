import { useState } from "react";
import useFetch from "./useFetch";

interface UseItemListProps {
  apiEndpoint: string;
}

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

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const tableView = () => {
    setTableview((prev) => !prev);
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
