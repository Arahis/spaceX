import axios from "axios";

const fetchLaunches = async ({order, sort, limit, offset}) => {
  // console.log("newOffset", page);
  const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/`, {
    params: {
      order,
      sort,
      limit,
      offset,
    },
  });
  //   console.log("DATA1", data);
  return data;
};

export { fetchLaunches };
