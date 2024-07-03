import { GrAnalytics } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiBaremetrics } from "react-icons/si";

export const TopNavLinks = [
  {
    icon: (
        <RxDashboard color="white" />
    ),
    title: "Dashboard",
    sub_links: [],
  },
  {
    icon: (
        <SiBaremetrics color="white" />
    ),
    title: "Key Metrics",
    path: "/key-metrics",
  },
];

export const MiddelNavLinks = [
  {
    icon: (
        <GrAnalytics color="white" />
    ),
    title: "Analytics",
    sub_links: [
      {
        icon: "red-400",
        title: "All analytics",
      },
      {
        icon: "red-400",
        title: "Favorites",
      },
      {
        icon: "red-400",
        title: "New analytics",
      },
    ],
  },
];

export const bottomNavLinks = [
  {
    icon: (
        <IoDocumentText size={20} color="white" />
    ),
    title: "Documents",
    sub_links: [],
  },
  {
    icon: (
        <IoIosNotifications size={20} color="white" />
    ),
    title: "Notification",
    numbers: 26,
  },
];
