import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="Search" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none text-gray-500"
      />
    </div>
  );
};

export default TableSearch;
