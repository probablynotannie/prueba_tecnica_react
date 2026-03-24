import { useStore } from "../../../../store/useStore";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  const { search, setSearch } = useStore();

  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Buscar productos
      </label>

      <FiSearch
        aria-hidden="true"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-10"
        size={18}
      />

      <input
        id="search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar productos..."
        autoComplete="off"
        className="
          w-full pl-10 pr-4 py-2.5
          bg-white border border-gray-200
          rounded-xl
          text-sm
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow
          transition
        "
      />
    </div>
  );
};
