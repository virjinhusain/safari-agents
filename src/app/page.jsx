"use client";
import Panel from "@/components/SearchActionPanel";
import Navigation from "@/components/Navigation";
import TableContainer from "@/components/TableContainer";
import CreateModal from "@/components/CreateModal";
import { useEffect, useState } from "react";
import ReadModal from "@/components/ReadModal";
import axios from "axios";
import UpdateModal from "@/components/UpdateModal";
import DeleteModal from "@/components/DeleteModal";

export default function Home() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openReadModal, setOpenReadModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://saf-api-rcesi3nzea-as.a.run.app/agent").then((res) => {
      setData(res.data);
    });
  }, [data]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen p-3 sm:p-5 antialiased">
      <div className=" space-y-1">
        <Panel setCreateAgentModal={setOpenCreateModal} setFilterModal={""} />
        <TableContainer
          data={data}
          setData={setSelectedData}
          setOpenReadModal={setOpenReadModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <Navigation />
      </div>
      <CreateModal isOpen={openCreateModal} setIsOpen={setOpenCreateModal} />
      <ReadModal
        data={selectedData}
        isOpen={openReadModal}
        setIsOpen={setOpenReadModal}
      />
      <UpdateModal isOpen={false} />
      <DeleteModal
        data={selectedData}
        isOpen={openDeleteModal}
        setIsOpen={setOpenDeleteModal}
      />
    </section>
  );
}
