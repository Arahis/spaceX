import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Button } from "antd";
import { fetchLaunch, fetchMoreLaunches } from "../../../redux/actions";
import { LaunchList } from "../launch-list";
import { pageSelector } from "../../../redux/selectors";


const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const launchData = useSelector((state) => state.launches);
  const page = useSelector(pageSelector);

  console.log("launchData", launchData);
  const { upcoming, history } = launchData;

  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);

  const handleLoading = useCallback(() => {
    dispatch(fetchMoreLaunches(page));
  }, [dispatch, page]);

  return (
    <Content>
      <LaunchList title={"Upcoming"} launches={upcoming} />
      <LaunchList title={"History"} launches={history} />
      <Button onClick={handleLoading}>Load more</Button>
    </Content>
  );
};

export default MainContent;
