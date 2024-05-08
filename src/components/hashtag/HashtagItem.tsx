type HashtagListProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

export default function HashtagItem({
  onSelectCompany,
  company,
}: HashtagListProps) {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
