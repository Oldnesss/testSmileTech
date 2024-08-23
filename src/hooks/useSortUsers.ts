import React, { useState } from "react";
import { User } from "../types/User";

export default function useSortUsers(users: User[]) {
  const [sortConfig, setSortConfig] = useState<{
    field: keyof User;
    order: "asc" | "desc";
  } | null>(null);

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return users;

    const { field, order } = sortConfig;

    return [...users].sort((a, b) => {
      let aValue: string | number = "";
      let bValue: string | number = "";

      if (field === "address") {
        aValue = a.address.street;
        bValue = b.address.street;
      } else if (field === "company") {
        aValue = a.company.name;
        bValue = b.company.name;
      } else {
        aValue = a[field] as string | number;
        bValue = b[field] as string | number;
      }

      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [users, sortConfig]);

  const handleSort = (field: keyof User) => {
    let order: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.field === field &&
      sortConfig.order === "asc"
    ) {
      order = "desc";
    }
    setSortConfig({ field, order });
  };

  return { sortedUsers, sortConfig, handleSort };
}
