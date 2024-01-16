import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Profile } from "@components";

const ProfilePage = () => {
  return (
    <div>
      <Profile name={"My"} description={"Welcome to your profile"} data={[]} />
    </div>
  );
};

export default ProfilePage;
