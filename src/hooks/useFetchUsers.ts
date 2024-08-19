import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/User";

const useFetchUsers = (): [User[], () => void] => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("fetch hooks useUsers - error", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return [users, fetchUsers];
};

export default useFetchUsers;
