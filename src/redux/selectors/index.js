import { prop } from "ramda";
import { createSelector } from "reselect";

const getLaunch = prop("launches");
const getData = prop("data");

export const getLaunchData = createSelector(getLaunch, getData);
