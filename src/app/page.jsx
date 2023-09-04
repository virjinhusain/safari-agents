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

// Extracted constant for the API URL
const API_URL = "https://saf-api-rcesi3nzea-as.a.run.app/agent";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("AZ");
  const itemsPerPage = 10;

  // Extracted function to fetch data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://saf-api-rcesi3nzea-as.a.run.app/graphql",
        {
          query: `query {
 Agents(show: "${filter.show}") {
    tagRegion
    travelAgent
    contactPerson
    email
    phoneNumber
    show
    website
    link
    publishedResort
    salesBySafari
    safariProduct
    sales2022
    sales2023
    notes
    followUp
  }
}
`,
        }
      );
      let items = response.data.data.Agents;
      setData(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, searchQuery, currentPage, sortOrder, fetchData]);

  const filterData = () => {
    const filteredBySearch = data.filter((item) =>
      item.travelAgent.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredByFilters = filteredBySearch.filter((item) => {
      if (filter.tagRegion.length === 0 && filter.show.length === 0) {
        return true;
      }

      const tagRegionFilterPassed =
        filter.tagRegion.length === 0 ||
        filter.tagRegion.includes(item.tagRegion);

      return tagRegionFilterPassed;
    });
    return filteredByFilters;
  };

  const filteredData = filterData();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const sortData = (order) => {
    const sortedData = [...data];
    sortedData.sort((a, b) =>
      order === "AZ"
        ? a.travelAgent.localeCompare(b.travelAgent)
        : b.travelAgent.localeCompare(a.travelAgent)
    );
    setData(sortedData);
  };

  const sortAZ = () => {
    setSortOrder("AZ");
    sortData("AZ");
  };

  const sortZA = () => {
    setSortOrder("ZA");
    sortData("ZA");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full p-3 sm:p-5 antialiased">
      <div className="space-y-1">
        <Panel
          setCreateAgentModal={setOpenCreateModal}
          onSearchChange={handleSearchChange}
          setFilter={setFilter}
          filter={filter}
          onSortAZ={sortAZ}
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
