"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { employees } from "./employees/Employees";

const PAGE_SIZES = [5, 15, 20];

export default function TableWithPagi() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(employees.slice(from, to));
  }, [page, pageSize]);

  return (
    <div
      className="container"
      style={{
        margin: "20px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <DataTable
        withTableBorder
        records={records}
        columns={[
          { accessor: "userName", width: 100 },
          { accessor: "jobTitleName", width: 100 },
          { accessor: "emailAddress", width: "100%" },
          {
            accessor: "birthDate",
            textAlign: "right",
            width: 120,
            render: ({ birthDate  }) => dayjs(birthDate).format("MMM D YYYY"),
          },
        ]}
        totalRecords={employees.length}
        paginationActiveBackgroundColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
        noRecordsText=""

      />
    </div>
  );
}
