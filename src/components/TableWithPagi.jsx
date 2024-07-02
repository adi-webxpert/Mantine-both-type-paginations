"use client";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const employees = [
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
  {
    userName: "Frontend",
    jobTitleName: "Frontend Developer",
    employeeCode: "E1",
    techstack: ["React", "javascript", "html", "css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg",
  },
  {
    userName: "Backend",
    jobTitleName: "Backend Developer",
    employeeCode: "E2",
    techstack: ["React", "Node", "php"],
    emailAddress: "be@gmail.com",
    image:
      "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
  },
  {
    userName: "Fullstack",
    lastName: "Developer",
    employeeCode: "E3",
    techstack: ["React", "javascript", "node", "php", "html", "css"],
    emailAddress: "fs@gmail.com",
    image:
      "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
  },
];

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
          render: ({ birthDate }) => dayjs(birthDate).format("MMM D YYYY"),
        },
      ]}
      totalRecords={employees.length}
      paginationActiveBackgroundColor="grape"
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}
