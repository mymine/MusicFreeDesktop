import ListItem from "./widgets/ListItem";
import "./index.scss";
import MySheets from "./widgets/MySheets";
import { useMatch, useNavigate } from "react-router";

export default function () {
  const navigate = useNavigate();
  const routePathMatch = useMatch("/main/:routePath");

  console.log(routePathMatch);

  const options = [
    {
      iconName: "trophy",
      title: "排行榜",
      route: "top-list",
    },
    {
      iconName: "fire",
      title: "热门歌单",
      route: "recommend-sheet",
    },
    {
      iconName: "array-download-tray",
      title: "下载管理",
      route: "download",
    },
    {
      iconName: "code-bracket-square",
      title: "插件管理",
      route: "plugin-manager-view",
    },
  ] as const;

  return (
    <div className="side-bar-container">
      {options.map((item) => (
        <ListItem
          key={item.route}
          iconName={item.iconName}
          title={item.title}
          selected={routePathMatch?.params?.routePath === item.route}
          onClick={() => {
            navigate(`/main/${item.route}`);
          }}
        ></ListItem>
      ))}
      <MySheets></MySheets>
    </div>
  );
}