import React from "react";
import * as XLSX from "xlsx";

import {
  TableContainer,
  TableWrapper,
  TableHeader,
  TableCell,
  DownloadButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface TableProps {
  headers: string[];
  content: { [key: string]: any }[];
  fileName: string;
}

const Table: React.FC<TableProps> = ({ headers, content, fileName }) => {
  const navigate = useNavigate();

  const handleCellClick = (link: string) => {
    navigate(link);
  };
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(content);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row, rowIndex) => {
            const { link, ...rowData } = row;
            return (
              <tr key={rowIndex} onClick={() => handleCellClick(link)}>
                {Object.entries(rowData).map(([key, cell], cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableWrapper>
      <DownloadButton onClick={exportToExcel}>
        Exportar para Excel
      </DownloadButton>
    </TableContainer>
  );
};

export default Table;
