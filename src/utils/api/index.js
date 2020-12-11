import axios from "axios";

async function fetchLaunches({ sort, order, limit = 0, offset = 0 }) {
  console.log("DATA");
  const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/`, {
    params: {
      sort,
      order,
      limit,
      offset
    },
  });
  //   console.log("DATA1", data);
  return data;
}

export { fetchLaunches };
