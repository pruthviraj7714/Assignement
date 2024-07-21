"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { PaginationComponent } from "./Pagination";
import { useState } from "react";
import { File } from "lucide-react";

const ITEMS_PER_PAGE = 6;

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
      <Table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-600">
        <TableHeader className="bg-gray-100 dark:bg-gray-700">
          <TableRow>
            <TableHead className="w-[100px] p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Company
            </TableHead>
            <TableHead className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Announcement Type
            </TableHead>
            <TableHead className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Announcement Summary
            </TableHead>
            <TableHead className="p-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
              Sentiment
            </TableHead>
            <TableHead className="p-3 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
              Source
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((data: any) => (
            <TableRow
              key={data._id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
              style={{ height: "60px" }}
            >
              <TableCell className="p-3 text-sm font-medium text-gray-900 dark:text-gray-100 overflow-hidden text-ellipsis">
                {data.company_name}
              </TableCell>
              <TableCell className="p-3 text-sm text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis">
                {data.sub_type}
              </TableCell>
              <TableCell className="p-3 text-sm text-gray-700 dark:text-gray-300 overflow-hidden text-ellipsis">
                {data.summary}
              </TableCell>
              <TableCell className="p-3 text-right text-sm text-green-600 dark:text-green-400">
                {data.sentiment === "positive"
                  ? "🟢"
                  : data.sentiment === "negative"
                  ? "🔴"
                  : data.sentiment === "neutral"
                  ? "🟡"
                  : ""}
              </TableCell>
              <TableCell className="p-3 text-right text-sm text-gray-700 dark:text-gray-300">
                <div className="flex flex-col items-center">
                  <div className="flex gap-1">
                    <File size={15} />
                    <Link
                      target="_blank"
                      href={data.source_url}
                      className="text-gray-500 hover:underline dark:text-gray-400"
                    >
                      Source
                    </Link>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {data.published_time.$date}
                  </div>
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
