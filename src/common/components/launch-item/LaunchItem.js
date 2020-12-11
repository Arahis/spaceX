import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const LaunchItem = ({ launch }) => {
  const {
    mission_name,
    flight_number,
    launch_success,
    details,
    links: { mission_patch, video_link, article_link },
  } = launch;
  return (
    <Card style={{ width: 800, marginTop: 16 }}>
      <Meta
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      />
      <p>{mission_name}</p>
      <img src={mission_patch} alt="mission_patch" style={{ width: 50 }} />
      <p>{flight_number}</p>
      {launch_success == null ? <p>UNKNOWN</p> : <p>{launch_success}</p>}
      <p>Launch Date: {launch.launch_date_utc}</p>
      {details ? <p>{details}</p> : <p>No details yet</p>}
      <p>Video Link: {video_link}</p>
      <p>Article Link: {article_link}</p>
    </Card>
  );
};

export default LaunchItem;
