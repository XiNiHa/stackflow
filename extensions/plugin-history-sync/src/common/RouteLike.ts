import type { ActivityComponentType as ReactActivityComponentType } from "@stackflow/react";
import type { ActivityComponentType as SolidActivityComponentType } from "@stackflow/solid";

type Params<K> = K extends ReactActivityComponentType<infer U>
  ? U
  : K extends SolidActivityComponentType<infer U>
    ? U
    : Record<string, unknown>;

export type Route<K> = {
  path: string;
  priority?: number;
  decode?: (params: Record<string, string>) => Params<K> | null;
  encode?: (params: Params<K>) => Record<string, string>;
};

export type RouteLike<T> = string | string[] | Route<T> | Route<T>[];
