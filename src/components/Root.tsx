import React from "react";
import { Search } from "./Search";
import { Loading } from "./Loading";
import { Profile } from "./Profile";
import { useSelector } from "../modules";

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
