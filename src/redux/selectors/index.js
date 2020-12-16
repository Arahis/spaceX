import { prop } from "ramda";
import { createSelector } from "reselect";

const getLaunch = prop("launches");
const getPage = prop("page");

export const getLaunchData = createSelector(getLaunch);
export const pageSelector = createSelector(getLaunch, getPage);
