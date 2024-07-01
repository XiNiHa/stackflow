import { createEffect } from "solid-js";

import { useActivity } from "./activity/useActivity";

export const createActiveEffect = (effect: () => void) => {
  const activity = useActivity();

  createEffect(() => {
    if (activity()?.isActive) {
      return effect();
    }
  });
};
