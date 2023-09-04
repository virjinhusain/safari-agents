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

const API_URL = "https://saf-api-rcesi3nzea-as.a.run.app";

export default function Home() {
  const [modals, setModals] = useState({
    openCreateModal: false,
    openReadModal: false,
    openUpdateModal: false,
    openDeleteModal: false,
  });

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      const response = await axios.post(`${API_URL}/graphql`, {
        query: `query {
          Agents(show: "${filter.show}") {
            _id
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
        }`,
      });
      const items = response.data.data.Agents.map((item, index) => ({
        ...item,
        number: index + 1,
      }));
      setData(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, searchQuery, currentPage, sortOrder, fetchData]);

  const filterData = () => {
    const filteredData = data.filter((item) => {
      const isSearchMatch =
        item.travelAgent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.trim() === ""; // Include all items if search query is empty

      const isTagRegionMatch =
        filter.tagRegion.length === 0 ||
        filter.tagRegion.includes(item.tagRegion);

      return isSearchMatch && isTagRegionMatch;
    });

    return filteredData;
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

  const toggleModal = (modalName) => {
    setModals({ ...modals, [modalName]: !modals[modalName] });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-full p-3 sm:p-5 antialiased">
      <div className="space-y-1">
        <Panel
          setCreateAgentModal={() => toggleModal("openCreateModal")}
          onSearchChange={handleSearchChange}
          setFilter={setFilter}
          filter={filter}
          onSortAZ={() => sortData("AZ")}
          onSortZA={() => sortData("ZA")}
        />
        <TableContainer
          data={currentItems}
          setData={setSelectedData}
          setOpenUpdateModal={() => toggleModal("openUpdateModal")}
          setOpenDeleteModal={() => toggleModal("openDeleteModal")}
        />
        <Navigation
          length={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <CreateModal
        isOpen={modals.openCreateModal}
        setIsOpen={() => toggleModal("openCreateModal")}
      />
      <ReadModal
        data={selectedData}
        isOpen={modals.openReadModal}
        setIsOpen={() => toggleModal("openReadModal")}
      />
      <UpdateModal
        data={selectedData}
        isOpen={modals.openUpdateModal}
        setIsOpen={() => toggleModal("openUpdateModal")}
      />
      <DeleteModal
        data={selectedData}
        isOpen={modals.openDeleteModal}
        setIsOpen={() => toggleModal("openDeleteModal")}
      />
    </section>
  );
}
