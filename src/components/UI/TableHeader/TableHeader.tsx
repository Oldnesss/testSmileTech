import React from "react";

import styles from "./TableHeader.module.scss";
import { User } from "../../../types/User";

interface TableHeaderProps {
  sortField: keyof User | "";
  sortOrder: "asc" | "desc";
  onSort: (field: keyof User) => void;
}

export default function TableHeader({
  sortField,
  sortOrder,
  onSort,
}: TableHeaderProps): JSX.Element {
  const headers: Array<{ key: keyof User; label: string }> = [
    { key: "name", label: "ФИО" },
    { key: "email", label: "Email" },
    { key: "address", label: "Адрес" },
    { key: "company", label: "Компания" },
  ];

  return (
    <thead className={styles.tableHeader}>
      <tr>
        {headers.map(({ key, label }) => (
          <th key={key} onClick={() => onSort(key)} className={styles[key]}>
            {label} {sortField === key ? (sortOrder === "asc" ? "↑" : "↓") : ""}
          </th>
        ))}
      </tr>
    </thead>
  );
}
