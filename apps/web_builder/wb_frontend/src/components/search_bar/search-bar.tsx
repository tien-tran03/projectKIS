import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from '../../redux_logic';
import { useState, useEffect } from "react";

export function SearchBox() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const debouncedSearch = useDebounce(keyword, 300);

  useEffect(() => {
    dispatch(setSearchKeyword(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <Box
      className="relative flex items-center "
      sx={{ 
        borderRadius: "100px", 
        backgroundColor: "#F5F5F5", 
        height: "36px", 
        padding: "0 16px", 
        width: "300px"
      }}
    >
      <InputBase
        placeholder="Search project"
        inputProps={{ "aria-label": "search" }}
        sx={{ width: "100%" }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <img src="/header_img/akar-icons_search.png" alt="search icon" />
    </Box>
  );
}
