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

import { StatisticsModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Statistics<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Statistics
   * @name ListList
   * @request GET:/statistics/list
   */
  listList = (params: RequestParams = {}) =>
    this.request<StatisticsModel[], any>({
      path: `/statistics/list`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistics
   * @name CreateUpdate
   * @request PUT:/statistics/create
   */
  createUpdate = (data: StatisticsModel, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/statistics/create`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
