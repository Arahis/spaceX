import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Button } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { fetchLaunch, fetchMoreLaunches } from "../../../redux/actions";
import { LaunchList } from "../launch-list";
import { pageSelector } from "../../../redux/selectors";
import { ErrorScreen } from "../error-screen";

const { Content } = Layout;

const MainContent = () => {
  const dispatch = useDispatch();
  const launchData = useSelector((state) => state.launches);
  const error = useSelector((state) => state.launches.error);
  const isLoading = useSelector((state) => state.launches.loading);
  const page = useSelector(pageSelector);

  const { upcoming, history } = launchData;

  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);

  const handleLoading = useCallback(() => {
    dispatch(fetchMoreLaunches(page));
  }, [dispatch, page]);

  return (
    <Content className="wrapper">
      {error ? (
        <ErrorScreen />
      ) : (
        <>
          <LaunchList title={"Upcoming"} launches={upcoming} />
          <LaunchList title={"History"} launches={history} />

          <div className="button-container">
            <Button
              icon={<UnorderedListOutlined />}
              onClick={handleLoading}
              className="fetch-button"
            >
              {isLoading ? "Loading..." : "Load more"}
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default MainContent;
