import React from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import useSortUsers from "../../hooks/useSortUsers";
import useFilterUsers from "../../hooks/useFilterUsers";
import styles from "./UserList.module.scss";
import UserTable from "../UI/UserTable/UserTable";
import UserFilter from "../UI/UserFilter/UserFilter";

export default function UserList(): JSX.Element {
  const [users, fetchUsers] = useFetchUsers();
  const { sortedUsers, sortConfig, handleSort } = useSortUsers(users);
  const { filteredUsers, filterConfig, handleFilterChange } = useFilterUsers(
    sortedUsers,
    ""
  );

  return (
    <div className={styles.container}>
      <div className={styles.tableResponsive}>
        <div className={styles.header}>
          <h1>Список пользователей</h1>
          <div className={styles.filterContainer}>
            <UserFilter
              query={filterConfig.query}
              onFilterChange={handleFilterChange}
            />
            <button onClick={fetchUsers} className={styles.refreshButton}>
              Обновить
            </button>
            
          </div>
        </div>
        <div className={styles.tableContainer}>
          <UserTable
            users={filteredUsers}
            sortField={sortConfig?.field || ""}
            sortOrder={sortConfig?.order || "asc"}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}
