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

export interface EventContract {
  name?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface StatisticsModel {
  /** @format guid */
  id?: string;
  userName?: string;

  /** @format date-time */
  createdAt?: string;
  clientVersion?: string;
  osName?: string;
}

export interface StatisticsContract {
  /** @format guid */
  id?: string;
  userName?: string;
  clientVersion?: string;
  osName?: string;
  events?: EventContract[];
}
