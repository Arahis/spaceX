import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Divider, Skeleton, Card, Avatar } from "antd";
import { fetchLaunch } from "../../../redux/actions";
import { getLaunchData } from "../../../redux/selectors";

const { Content } = Layout;
const { Meta } = Card;

const MainContent = () => {
  const dispatch = useDispatch();
  const launchData = useSelector(getLaunchData);

  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);
  return (
    <Content>
      <Divider plain>Upcoming</Divider>
      {launchData &&
        launchData.map(
          (
            {
              mission_name,
              flight_number,
              launch_success,
              launch_date_utc,
              details,
              links: { mission_patch, article_link, video_link },
            },
            index
          ) => {
            return (
              <Card key={index} style={{ width: 800, marginTop: 16 }}>
                <Meta
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                />
                <p>{mission_name}</p>
                <img
                  src={mission_patch}
                  alt="mission_patch"
                  style={{ width: 50 }}
                />
                <p>{flight_number}</p>
                {launch_success == null ? (
                  <p>UNKNOWN</p>
                ) : (
                  <p>{launch_success}</p>
                )}
                <p>Launch Date: {launch_date_utc}</p>
                {details ? <p>{details}</p> : <p>No details yet</p>}
                <p>Video Link: {video_link}</p>
                <p>Article Link: {article_link}</p>
              </Card>
            );
          }
        )}

      <Divider plain>History</Divider>
    </Content>
  );
};

export default MainContent;
