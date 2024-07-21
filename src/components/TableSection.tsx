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

export function TableSection() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company</TableHead>
          <TableHead>Announcement type</TableHead>
          <TableHead>Announcement Summary</TableHead>
          <TableHead className="text-right">Sentiment</TableHead>
          <TableHead className="text-right">Source</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map((data: any) => (
          <TableRow key={data._id}>
            <TableCell className="font-medium">{data.company_name}</TableCell>
            <TableCell>{data.sub_type}</TableCell>
            <TableCell>{data.summary}</TableCell>
            <TableCell>🟢</TableCell>
            <TableCell className="text-right">
              <div className="flex flex-col">
                <Link target="_blank" href={data.source_url}>
                  Source
                </Link>
                <span>{data.created_at.$date}</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
