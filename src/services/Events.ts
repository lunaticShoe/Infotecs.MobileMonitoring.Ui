/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { EventContract } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Events<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Events
   * @name EventsGetList
   * @request GET:/events/list/{statisticsId}
   */
  eventsGetList = (statisticsId: string, params: RequestParams = {}) =>
    this.request<EventContract[], any>({
      path: `/events/list/${statisticsId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
