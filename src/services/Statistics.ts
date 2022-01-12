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

import { StatisticsContract, StatisticsModel } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Statistics<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticsGetList
   * @request GET:/statistics/list
   */
  statisticsGetList = (params: RequestParams = {}) =>
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
   * @name StatisticsCreate
   * @request PUT:/statistics/create
   */
  statisticsCreate = (data: StatisticsContract, params: RequestParams = {}) =>
    this.request<File, any>({
      path: `/statistics/create`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Statistics
   * @name StatisticsUpdate
   * @request PUT:/statistics/update
   */
  statisticsUpdate = (data: StatisticsContract, params: RequestParams = {}) =>
    this.request<File, any>({
      path: `/statistics/update`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
