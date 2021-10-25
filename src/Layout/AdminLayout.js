import React from "react";
import { Content } from "../Components/Content";
import { Footer } from "../Components/Footer";

import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";

export const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Content />
      </div>
    </div>
  );
};
