import Theme from "rspress/theme";
import { FamilyNavIcon } from './FamilyNavIcon'

// 定制 404 页面

export * from "rspress/theme";

const Layout = () => {
  return <Theme.Layout beforeNavTitle={<FamilyNavIcon />} />;
};

export default {
  ...Theme,
  Layout
};
