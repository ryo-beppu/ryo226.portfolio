import React from "react";

import { useSelector } from "../modules";

import { Loading } from "./Loading";
import { Profile } from "./Profile";
import { Search } from "./Search";

const ChangeComponent: React.FC = () => {
  const chapter = useSelector((state) => state.ui.chapter);

  switch (chapter) {
    case "Search":
      return <Search />;
    case "Profile":
      return <Profile />;
    default:
      return <Loading />;
  }
};

export const Root: React.FC = () => {
  return <ChangeComponent />;
};
