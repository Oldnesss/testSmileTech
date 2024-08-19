
import TableHeader from "../TableHeader/TableHeader";
import styles from "./UseTable.module.scss";
import UserRow from "../UserRow/UserRow";
import { User } from "../../../types/User";

interface UserTableProps {
  users: User[];
  sortField: keyof User | "";
  sortOrder: "asc" | "desc";
  onSort: (field: keyof User) => void;
}
export default function UserTable({
  users,
  sortField,
  sortOrder,
  onSort,
}: UserTableProps): JSX.Element {
  return (
    <table className={styles.useTable}>
      <TableHeader
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={onSort}
      />
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
