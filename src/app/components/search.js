const Search = () => {
  return (
    <div>
      <label className="relative block" htmlFor="search">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 md:pl-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66665 14C11.1644 14 14 11.1644 14 7.66665C14 4.16884 11.1644 1.33331 7.66665 1.33331C4.16884 1.33331 1.33331 4.16884 1.33331 7.66665C1.33331 11.1644 4.16884 14 7.66665 14Z"
              stroke="#55676B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6666 14.6666L13.3333 13.3333"
              stroke="#55676B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          placeholder="Search"
          className="border py-2 md:py-4 bg-[#F8FCFC] px-8 md:px-12 rounded-2xl  border-[#AAC0C5] focus:outline-none"
        />
      </label>
    </div>
  );
};
export default Search;
