interface UserFilterProps {
  query: string;
  onFilterChange: (query: string) => void;
}

export default function UserFilter({
  query,
  onFilterChange,
}: UserFilterProps): JSX.Element {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Search users..."
    />
  );
}
