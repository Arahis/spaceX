import { prop, propOr } from "ramda";
import { createSelector } from "reselect";

const getLaunch = prop("launches");
const getPage = propOr(0, "page");

export const getLaunchData = createSelector(getLaunch);
export const pageSelector = createSelector(getLaunch, getPage);
