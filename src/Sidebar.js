import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import CommentIcon from "@mui/icons-material/Comment";
import AllInboxRoundedIcon from "@mui/icons-material/AllInboxRounded";
import TryRoundedIcon from "@mui/icons-material/TryRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import ExpandLessRounded from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import db from "./firebase";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useDataLayerValue();
  useEffect(() => {
    // run this code once when the sidebar comps loaded
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={CommentIcon} title="Threads" />
      <SidebarOption Icon={AllInboxRoundedIcon} title="Mentions & reactions" />
      <SidebarOption Icon={TryRoundedIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderRoundedIcon} title="Channel browser" />
      <SidebarOption
        Icon={PeopleOutlineRoundedIcon}
        title="People & user groups"
      />
      <SidebarOption Icon={AppsRoundedIcon} title="Apps" />
      <SidebarOption Icon={FileCopyRoundedIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessRounded} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" />
      {/* connect to DB and list all the channels */}
      {/* use SidebarOption */}
      {channels.map((channel) => {
        return (
          <SidebarOption
            title={channel.name}
            id={channel.id}
            addChannelOption
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
