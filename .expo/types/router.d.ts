/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(authenticated)\(tabs)\_layout` | `/(authenticated)\(tabs)\crypto` | `/(authenticated)\(tabs)\home` | `/(authenticated)\(tabs)\invest` | `/(authenticated)\(tabs)\lifestyle` | `/(authenticated)\(tabs)\transfers` | `/_sitemap` | `/help` | `/login` | `/signup`;
      DynamicRoutes: `/verify/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/verify/[phone]`;
    }
  }
}
