"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader, Center } from "@mantine/core"; // Import Mantine components for better styling

const PAGE_SIZES = [5, 10, 15, 20];

function TableWithServer() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true); // Track loading state

  // Reset to the first page when page size changes
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  // Fetch data from the server when page or page size changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading before fetching
      try {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime?limit=${pageSize}&page=${page}`
        );
        console.log(data); // Check the response structure
        setEmployees(data?.data);
        setTotalRecords(data?.pagination.items.total);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchData();
  }, [page, pageSize]);

  // Update the records based on the fetched employees
  useEffect(() => {
    setRecords(employees);
    console.log("Employees:", employees); // Log the employees state
  }, [employees]);

  // Render the DataTable only after the data is loaded
  return loading ? (
    <Center style={{ height: "100vh" }}>
      <Loader size="lg" /> {/* Loading spinner */}
    </Center>
  ) : records.length > 0 ? (
    <div className="container" style={{ margin: "20px", padding: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <DataTable
        withTableBorder
        records={records}
        columns={[
          { accessor: "title", width: 150 },
          { accessor: "title_japanese", width: 150 },
          { accessor: "status", width: "100%" },
          {
            accessor: "airing_date",
            textAlign: "right",
            width: 120,
            render: ({ airing_date }) =>
              dayjs(airing_date).format("MMM D YYYY"),
          },
        ]}
        totalRecords={totalRecords}
        paginationActiveBackgroundColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={setPage}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        noRecordsText=""
      />
    </div>
  ) : (
    <Center style={{ height: "100vh" }}>
      <div>No records available</div>
    </Center>
  );
}

export default TableWithServer;
