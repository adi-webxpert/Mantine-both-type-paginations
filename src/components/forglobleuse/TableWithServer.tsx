"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axios from "axios";

const PAGE_SIZES = [5, 10, 15, 20];

function TableWithServer() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState([]);
  const [totalRecords, setTotalRecords] = useState();

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=${pageSize}&page=${page}`
      );
      setEmployees(data?.data);
      setTotalRecords(data?.pagination.items.total);
    };

    fetchData();
  }, [page, pageSize]);

  useEffect(() => {
    setRecords(employees);
  }, [employees, page, pageSize]);

  type DataTableColumnToggle = {
    accessor: string;
    defaultToggle: boolean;
    toggleable: boolean;
    toggled: boolean;
  };

  console.log("employees", employees);

  return (
    <DataTable
      withTableBorder
      records={records}
      columns={[
        { accessor: "title", width: 100 },
        { accessor: "title_japanese", width: 100 },
        { accessor: "status", width: "100%" },
        {
          accessor: "birthDate",
          textAlign: "right",
          width: 120,
          render: ({ birthDate }) => dayjs(birthDate).format("MMM D YYYY"),
        },
      ]}
      totalRecords={totalRecords}
      paginationActiveBackgroundColor="grape"
      recordsPerPage={pageSize}
      page={page}
      onPageChange={setPage}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}

export default TableWithServer;
