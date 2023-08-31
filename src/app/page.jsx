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
  const [filter, setFilter] = useState({
    tagRegion: [],
    show: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [sortOrder, setSortOrder] = useState("AZ"); // Sorting state
  const itemsPerPage = 10;

  // Fetch data function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = () => {
    axios
      .get("https://saf-api-rcesi3nzea-as.a.run.app/agent", {
        params: {
          search: searchQuery, // Pass search query as a parameter
          tagRegion: filter.tagRegion, // Pass tagRegion filter as a parameter
          show: filter.show, // Pass show filter as a parameter
        },
      })
      .then((res) => {
        // Map the response data to include the "number" attribute
        const updatedData = res.data.map((item, index) => ({
          ...item,
          number: index + 1, // Add the "number" attribute, starting from 1
        }));
        setData(updatedData);
      });
  };

  useEffect(() => {
    fetchData();
  }, [filter, searchQuery, currentPage, sortOrder, fetchData]);

  // Filtering function based on search query
  const filterData = () => {
    // Filter by search query
    const filteredBySearch = data.filter((item) =>
      item.travelAgent.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by tagRegion and show values from filter state
    const filteredByFilters = filteredBySearch.filter((item) => {
      if (filter.tagRegion.length === 0 && filter.show.length === 0) {
        return true; // No filters selected, so all items pass
      }

      // Check if item's tagRegion is in the filter.tagRegion array
      const tagRegionFilterPassed =
        filter.tagRegion.length === 0 ||
        filter.tagRegion.includes(item.tagRegion);

      const showFilterPassed =
        filter.show.length === 0 || filter.show.includes(item.show);

      // Return true only if both tagRegion and show filters pass
      return tagRegionFilterPassed && showFilterPassed;
    });

    return filteredByFilters;
  };

  // Calculate the range of items to display on the current page
  const filteredData = filterData();
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

  // Sorting function
  const sortData = (order) => {
    const sortedData = [...data]; // Create a copy of data
    sortedData.sort((a, b) =>
      order === "AZ"
        ? a.travelAgent.localeCompare(b.travelAgent)
        : b.travelAgent.localeCompare(a.travelAgent)
    );
    setData(sortedData);
  };

  // Sorting function for "AZ"
  const sortAZ = () => {
    setSortOrder("AZ");
    sortData("AZ"); // Call the sorting function
  };

  // Sorting function for "ZA"
  const sortZA = () => {
    setSortOrder("ZA");
    sortData("ZA"); // Call the sorting function
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full p-3 sm:p-5 antialiased">
      <div className="space-y-1">
        <Panel
          setCreateAgentModal={setOpenCreateModal}
          onSearchChange={handleSearchChange}
          setFilter={setFilter}
          filter={filter}
          onSortAZ={sortAZ} // Pass the sorting functions as props
          onSortZA={sortZA}
        />
        <TableContainer
          data={currentItems}
          setData={setSelectedData}
          setOpenUpdateModal={setOpenUpdateModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <Navigation
          length={filteredData.length}
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

