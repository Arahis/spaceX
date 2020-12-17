import React from "react";
import { Card, Typography, Skeleton } from "antd";
import { LinkOutlined, PlayCircleFilled } from "@ant-design/icons";
import { dataConverter } from "../../../utils/dataConverter";

const { Paragraph } = Typography;

const LaunchItem = ({ launch }) => {
  const {
    mission_name,
    flight_number,
    launch_success,
    details,
    links: { mission_patch, video_link, article_link },
  } = launch;

  let launchStatus;
  switch (launch_success) {
    case null:
      launchStatus = "unknown";
      break;
    case true:
      launchStatus = "success";
      break;
    case false:
      launchStatus = "failure";
      break;
    default:
      return;
  }

  const launchDate = dataConverter(launch.launch_date_utc);
  return (
    <Card style={{ height: "150px", marginTop: 16 }} className="wrapper">
      <div className="img-container">
        {mission_patch ? (
          <img src={mission_patch} alt="mission_patch" />
        ) : (
          <Skeleton.Image />
        )}
      </div>
      <div className="info-container">
        <div className="card-upper">
          <p className="flight">#{flight_number}</p>
          <p className="mission">{mission_name}</p>
          <p className={`status ${launchStatus}`}>{launchStatus}</p>
          <a
            href={article_link}
            className="article-link"
            title="Link to the launch article"
          >
            <LinkOutlined />
          </a>
        </div>
        <div className="card-lower">
          <div className="card-lower__info">
            <p className="date">
              Launch Date: <b>{launchDate}</b>
            </p>
            <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
              {details
                ? details
                : "Sorry, we do not have any info about this launch. But we are sure soon it will become available."}
            </Paragraph>
          </div>
          <a href={video_link} className="video-link" title="Watch the video">
            <PlayCircleFilled /> WATCH
          </a>
        </div>
      </div>
    </Card>
  );
};

export default LaunchItem;
