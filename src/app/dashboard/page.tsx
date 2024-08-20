"use client";
import React from "react";
import useDashboardModel from "./useDashboard.model";
import SectionList from "./organism/SectionList";

const DashboardPage = () => {
  const { example } = useDashboardModel();
  return (
    <div>
      DashboardPage {example}
      <SectionList />
    </div>
  );
};

export default DashboardPage;
