import { basicUIPlugin } from "@contentstech/stackflow-plugin-basic-ui/solid";
import { historySyncPlugin } from "@contentstech/stackflow-plugin-history-sync/solid";
import { basicRendererPlugin } from "@contentstech/stackflow-plugin-renderer-basic/solid";
import { stackflow } from "@contentstech/stackflow-solid/future";
import { vars } from "@seed-design/design-token";
import { config } from "./stackflow.config";

import Article from "../activities/Article";
import Main from "../activities/Main";

export const { Stack, actions } = stackflow({
  config,
  components: {
    Main,
    Article,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
      backgroundColor: vars.$semantic.color.paperDefault,
      appBar: {
        textColor: vars.$scale.color.gray900,
        iconColor: vars.$scale.color.gray900,
        borderColor: vars.$semantic.color.divider3,
        backButton: {
          ariaLabel: "뒤로 가기",
        },
        closeButton: {
          ariaLabel: "닫기",
        },
      },
    }),
    historySyncPlugin({
      config,
      fallbackActivity: () => "Main",
    }),
  ],
});

export type Actions = typeof actions;
