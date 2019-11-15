import { Configuration } from '@apttus/core';
export const environment: Configuration = {
  production: false,
  defaultImageSrc: './assets/images/default.png',
  defaultCountry: 'US',
  defaultLanguage: 'en-US',
  enableErrorLogging: false,
  enableErrorReporting: false,
  enableMultiCurrency: false,
  enableQueryLogs: true,
  enablePerformanceLogs: false,
  defaultCurrency: 'USD',
  bufferTime: 50,
  maxBufferSize: 10,
  disableBuffer: false,
  subqueryLimit: 10,
  disableCache: false,
  encryptResponse: false,
  cartRetryLimit: 20,
  productIdentifier: 'Id',
  type: 'Salesforce',
  cartDebounceTime: 2000,
  proxy: 'https://apttus-proxy.herokuapp.com',

  // *** TODO: Replace with Salesforce environment variables ***
  sentryDsn: 'https://6ad10246235742dc89f89b4c3f53f4aa@sentry.io/1230495',
  organizationId: '00D230000000nZM',
  storefront: 'D-Commerce',
  endpoint: 'https://dc3-cpqqacommunity1.cs28.force.com/ecom'
};
