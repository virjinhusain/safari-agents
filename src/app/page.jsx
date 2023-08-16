import Panel from "@/components/SearchActionPanel";
import Navigation from "@/components/Navigation";
// import TableContainer from "@/components/TableContainer";

export default function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen p-3 sm:p-5 antialiased">
      <div className=" space-y-1">
        <Panel />
        {/* <TableContainer /> */}
        <Navigation />
      </div>
    </section>
  );
}
