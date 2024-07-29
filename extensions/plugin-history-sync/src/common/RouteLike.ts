import type { ActivityComponentType as SolidActivityComponentType } from "@contentstech/stackflow-solid";
import type { ActivityComponentType as ReactActivityComponentType } from "@stackflow/react";

export type Route<K> = {
  path: string;
  decode?: (
    params: Record<string, string>,
  ) => K extends ReactActivityComponentType<infer U>
    ? U
    : K extends SolidActivityComponentType<infer U>
    ? U
    : Record<string, unknown>;
  encode?: (
    params: K extends ReactActivityComponentType<infer U>
      ? U
      : K extends SolidActivityComponentType<infer U>
      ? U
      : Record<string, unknown>,
  ) => Record<string, string>;
};

export type RouteLike<T> = string | string[] | Route<T> | Route<T>[];
