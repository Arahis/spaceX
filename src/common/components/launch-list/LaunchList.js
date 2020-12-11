import React from "react";
import { Divider, Skeleton } from "antd";
import LaunchItem from "../launch-item/LaunchItem";

const LaunchList = ({ title, launches = [] }) => {
  console.log("launches", launches);
  return (
    <>
      <Divider plain>{title}</Divider>
      {launches.length ? (
        launches.map((launch, index) => (
          <LaunchItem key={index} launch={launch} />
        ))
      ) : (
        <div>
          <Skeleton active paragraph={{ rows: 2 }} />
          <Skeleton active paragraph={{ rows: 2 }} />
          <Skeleton active paragraph={{ rows: 2 }} />
        </div>
      )}
    </>
  );
};

export default LaunchList;
