/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(authenticated)` | `/(authenticated)/(tabs)` | `/(authenticated)/(tabs)/crypto` | `/(authenticated)/(tabs)/home` | `/(authenticated)/(tabs)/invest` | `/(authenticated)/(tabs)/lifestyle` | `/(authenticated)/(tabs)/transfers` | `/(authenticated)/crypto` | `/(authenticated)/home` | `/(authenticated)/invest` | `/(authenticated)/lifestyle` | `/(authenticated)/transfers` | `/(tabs)` | `/(tabs)/crypto` | `/(tabs)/home` | `/(tabs)/invest` | `/(tabs)/lifestyle` | `/(tabs)/transfers` | `/_sitemap` | `/crypto` | `/help` | `/home` | `/invest` | `/lifestyle` | `/login` | `/signup` | `/transfers`;
      DynamicRoutes: `/verify/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/verify/[phone]`;
    }
  }
}
