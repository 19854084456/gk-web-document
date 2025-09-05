import { GitContributors } from "/Users/chennanfang/Desktop/gk-web-document/gk-web-document/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/chennanfang/Desktop/gk-web-document/gk-web-document/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
