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
  const handleSearchChange = (e) => {};

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
      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
