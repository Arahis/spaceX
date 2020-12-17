import axios from "axios";

const fetchLaunches = async ({ order, sort, limit, offset }) => {
  try {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/launches/`,
      {
        params: {
          order,
          sort,
          limit,
          offset,
        },
      }
    );
    return { data };
  } catch (error) {
    return { error };
  }
};

export { fetchLaunches };
