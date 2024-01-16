"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const { data: session } = useSession();

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(prompt?.prompt);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="prompt_card md:h-70">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt?.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-500">
              {prompt?.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt?.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={`/assets/icons/${copied ? "tick" : "copy"}.svg`}
            width={20}
            height={20}
            alt=""
          />
        </div>
        {/* {copied && (
          <span className="absolute top-1 right-1 px-2 py-1 rounded-full bg-green-500 text-white">
            Copied
          </span>
        )} */}
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700 overflow-scroll whitespace-wrap text-ellipsis md:h-28 h-24">
        {prompt?.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={handleTagClick && handleTagClick(prompt?.tag)}
      >
        #{prompt?.tag}
      </p>
      {session?.user?.id === prompt?.creator?._id &&
        pathname === "/profile" && (
          <div className="mt-2 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
    </div>
  );
};

export default PromptCard;
