import { Configuration } from '@apttus/core';
export const environment: Configuration = {
  production: false,
  defaultImageSrc: 'https://loremflickr.com/320/240/hardware',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  enableErrorLogging: false,
  enableErrorReporting: false,
  enableMultiCurrency: false,
  enableQueryLogs: false,
  enablePerformanceLogs: false,
  defaultCurrency: 'USD',
  bufferTime: 20,
  maxBufferSize: 100,
  disableBuffer: false,
  subqueryLimit: 10,
  disableCache: false,
  encryptResponse: false,
  cartRetryLimit: 10,
  productIdentifier: 'Id',
  type: 'Salesforce',
  debounceTime: 1000,
  proxy: 'https://apttus-proxy.herokuapp.com',
  useIndexedDB: false,
  expandDepth: 7,
  hashRouting: false,
  skipPricing: false,
  skipRules: false,
  // *** TODO: Replace with Salesforce environment variables ***
  storefront: 'Partner Commerce',
  organizationId: '00D2g0000008fIO',
  sentryDsn: 'https://6ad10246235742dc89f89b4c3f53f4aa@sentry.io/1230495',
  endpoint: 'https://apttusdc-developer-edition.na134.force.com/partner'
};