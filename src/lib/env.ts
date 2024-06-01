import _ from "lodash";
import { getRequestEvent } from "solid-js/web";

export function getUrlFromRequestOrWindow() {
  const url = getRequestEvent()?.request.url || window.location.href;
  if (_.isNil(url) || _.isEmpty(url)) {
    throw new Error(
      "[getDomainFromRequestOrWindow]: Unable to get url from request event or window"
    );
  }
  return new URL(url);
}
export function getDomainFromRequestOrWindow() {
  return getUrlFromRequestOrWindow().host;
}
