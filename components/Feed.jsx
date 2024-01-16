"use client";
import { useState, useEffect } from "react";
import { PromptCard } from "@components";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((item) => {
        return (
          <PromptCard
            key={item?._id}
            prompt={item}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleTagClick = (tag) => {
    console.log("handling tag click");
    setSearchText(tag);

    const searchResult = filterPrompts(tag);
    setSearchResults(searchResult);
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    const newSearchText = e.target.value;
    if (newSearchText !== searchText) {
      setSearchText(e.target.value);

      setSearchTimeout(
        setTimeout(() => {
          const searchResult = filterPrompts(e.target.value);
          setSearchResults(searchResult);
        }, 50)
      );
    }
  };

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return prompts?.filter(
      (item) =>
        regex.test(item?.creator?.username) ||
        regex.test(item?.tag) ||
        regex.test(item?.prompt)
    );
  };

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPrompts(data);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {searchText ? (
        <PromptCardList
          data={searchResults}
          handleTagClick={() => handleTagClick}
        />
      ) : (
        <PromptCardList data={prompts} handleTagClick={() => handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
