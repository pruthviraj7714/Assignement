"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DATA } from "@/data/announcements-data";
import Link from "next/link";
import { PaginationComponent } from "./Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 6; // Adjust as necessary

export function TableSection({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <Table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[100px] p-3 text-left text-sm font-medium text-gray-700">
              Company
            </TableHead>
            <TableHead className="p-3 text-left text-sm font-medium text-gray-700">
              Announcement Type
            </TableHead>
            <TableHead className="p-3 text-left text-sm font-medium text-gray-700">
              Announcement Summary
            </TableHead>
            <TableHead className="p-3 text-right text-sm font-medium text-gray-700">
              Sentiment
            </TableHead>
            <TableHead className="p-3 text-right text-sm font-medium text-gray-700">
              Source
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((data: any) => (
            <TableRow key={data._id} className="border-b hover:bg-gray-50">
              <TableCell className="p-3 text-sm font-medium text-gray-900">
                {data.company_name}
              </TableCell>
              <TableCell className="p-3 text-sm text-gray-700">
                {data.sub_type}
              </TableCell>
              <TableCell className="p-3 text-sm text-gray-700">
                {data.summary}
              </TableCell>
              <TableCell className="p-3 text-right text-sm text-green-600">
                {data.sentiment === "positive"
                  ? "🟢"
                  : data.sentiment === "negative"
                  ? "🔴"
                  : data.sentiment === "neutral"
                  ? "🟡"
                  : ""}
              </TableCell>
              <TableCell className="p-3 text-right text-sm text-gray-700">
                <div className="flex flex-col items-center">
                  <Link
                    target="_blank"
                    href={data.source_url}
                    className="text-blue-500 hover:underline"
                  >
                    Source
                  </Link>
                  <span className="text-xs text-gray-500">
                    {data.published_time.$date}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-5">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
