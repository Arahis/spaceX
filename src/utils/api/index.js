import axios from "axios";

async function fetchLaunches({ sort, order }) {
  console.log("DATA");
  const { data } = await axios.get(`https://api.spacexdata.com/v3/launches/`, {
    params: {
      sort,
      order,
    },
  });
  //   console.log("DATA1", data);
  return data;
}

export { fetchLaunches };
