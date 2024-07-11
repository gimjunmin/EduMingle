import HeaderBtn from './HeaderBtn';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div
      className="flex justify-between items-center w-full border border-gray2 px-12"
      style={{ height: '68px' }}
    >
      <SearchBar />
      <HeaderBtn />
    </div>
  );
}
