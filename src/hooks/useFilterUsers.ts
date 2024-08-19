import React, { useState } from "react";
import { User } from "../types/User";

export default function useFilterUsers(users: User[], initialQuery: string) {
  const [filterConfig, setFilterConfig] = useState<{ query: string }>({
    query: initialQuery,
  });

  const filteredUsers = React.useMemo(() => {
    if (!filterConfig.query) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(filterConfig.query.toLowerCase())
    );
  }, [users, filterConfig]);

  const handleFilterChange = (query: string) => {
    setFilterConfig({ query });
  };

  return { filteredUsers, filterConfig, handleFilterChange };
}
