import React from "react";

import styles from "./UserRow.module.scss";
import { User } from "../../../types/User";

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps): JSX.Element {
  return (
    <tr className={styles.rowContainer}>
      <td>{user.name}</td>
      <td className={styles.email}>{user.email}</td>
      <td className={styles.address}>
        <span>
          <span className={styles.streetLabel}>Улица </span>
          <span className={styles.street}>{user.address.street}</span>
        </span>
        <span>
          <span className={styles.zipcodeLabel}>индекс </span>
          <span className={styles.zipcode}>{user.address.zipcode}</span>
        </span>
      </td>
      <td>{user.company.name}</td>
    </tr>
  );
}
