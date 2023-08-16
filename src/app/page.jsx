"use client"
import Panel from "@/components/SearchActionPanel";
import Navigation from "@/components/Navigation";
import TableContainer from "@/components/TableContainer";
import CreateModal from "@/components/CreateModal";
import { useState } from "react";

export default function Home() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  console.log(openCreateModal);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen p-3 sm:p-5 antialiased">
      <div className=" space-y-1">
        <Panel setCreateAgentModal={setOpenCreateModal} setFilterModal={""} />
        <TableContainer />
        <Navigation />
      </div>
      <CreateModal isOpen={openCreateModal} setIsOpen={setOpenCreateModal} />
    </section>
  );
}
