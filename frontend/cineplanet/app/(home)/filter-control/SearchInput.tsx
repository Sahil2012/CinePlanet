import { Button, IconButton, TextField } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, useState } from "react";
import { BiSend } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const [searchText, setSearchText] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const addSearchQueryToUrl = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    const query = params.size ? "?" + params.toString() : "/";
    router.push(`${query}`);
  };

  const removeSearchQuery = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("search");

    const query = params.size ? "?" + params.toString() : "/";
    router.push(`${query}`);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      addSearchQueryToUrl(searchText.trim());
      setSearchText("");
    }
  };

  const handleReset = () => {
    if (searchText.trim()) {
      setSearchText("");
    }
  };

  return (
    <TextField.Root
      variant="soft"
      size="3"
      placeholder="Search for movies"
      value={searchText}
      type="search"
      onChange={(e) => setSearchText(e.target.value)}
      onKeyDown={handleKeyDown}
    >
      <TextField.Slot>
        <FaSearch />
      </TextField.Slot>
      {(searchText.trim() || searchQuery) && (
        <TextField.Slot>
          {searchText.trim() && (
            <>
              <IconButton size="2" variant="ghost" onClick={handleSearch}>
                <BiSend />
              </IconButton>
              <IconButton size="2" variant="ghost" onClick={handleReset}>
                <MdCancel />
              </IconButton>
            </>
          )}
          {searchQuery && (
            <Button size="1" variant="soft" onClick={removeSearchQuery}>
              Clear search
            </Button>
          )}
        </TextField.Slot>
      )}
    </TextField.Root>
  );
};

export default SearchInput;
