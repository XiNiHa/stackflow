import type { ActivityComponentType } from "@stackflow/react";

export type Route<K> = {
  path: string;
  decode?: (
    params: Record<string, string>,
  ) => K extends ActivityComponentType<infer U> ? U : Record<string, unknown>;
  encode?: (
    params: K extends ActivityComponentType<infer U>
      ? U
      : Record<string, unknown>,
  ) => Record<string, string>;
};

export type RouteLike<T> = string | string[] | Route<T> | Route<T>[];
