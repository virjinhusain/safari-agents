"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Panel from "@/components/SearchActionPanel";
import Navigation from "@/components/Navigation";
import TableContainer from "@/components/TableContainer";
import CreateModal from "@/components/CreateModal";
import ReadModal from "@/components/ReadModal";
import UpdateModal from "@/components/UpdateModal";
import DeleteModal from "@/components/DeleteModal";

export default function Home() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openReadModal, setOpenReadModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get("https://saf-api-rcesi3nzea-as.a.run.app/agent").then((res) => {
      setData(res.data);
    });
  }, []); // Fetch data on initial load

  // Filtering function based on search query
  const filteredData = data.filter((item) =>
    item.travelAgent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full p-3 sm:p-5 antialiased">
      <div className="space-y-1">
        <Panel
          setCreateAgentModal={setOpenCreateModal}
          setFilterModal={""}
          onSearchChange={handleSearchChange} // Pass the search function
        />
        <TableContainer
          data={currentItems}
          setData={setSelectedData}
          setOpenReadModal={setOpenReadModal}
          setOpenUpdateModal={setOpenUpdateModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <Navigation
          length={filteredData.length} // Use filtered data length for pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <CreateModal isOpen={openCreateModal} setIsOpen={setOpenCreateModal} />
      <ReadModal
        data={selectedData}
        isOpen={openReadModal}
        setIsOpen={setOpenReadModal}
      />
      <UpdateModal
        data={selectedData}
        isOpen={openUpdateModal}
        setIsOpen={setOpenUpdateModal}
      />
      <DeleteModal
        data={selectedData}
        isOpen={openDeleteModal}
        setIsOpen={setOpenDeleteModal}
      />
    </section>
  );
}
