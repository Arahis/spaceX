import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Button } from "antd";
import { fetchLaunch, fetchMoreLaunches } from "../../../redux/actions";
import { getLaunchData } from "../../../redux/selectors";
import { LaunchList } from "../launch-list";

const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const launchData = useSelector(getLaunchData);
  const [upcoming, history] = launchData;

  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);

  const handleLoading = useCallback(() => {
    dispatch(fetchMoreLaunches());
  }, [dispatch]);

  return (
    <Content>
      <LaunchList title={"Upcoming"} launches={upcoming} />
      <LaunchList title={"History"} launches={history} />
      <Button onClick={handleLoading}>Load more</Button>
    </Content>
  );
};

export default MainContent;
