import { UserRoundCog } from "lucide-react";
import { FaUserGear } from "react-icons/fa6";
import { GoCrossReference } from "react-icons/go";
import { HiOutlineUserGroup, HiOutlineHome } from "react-icons/hi";

export const rolesData = [
  {
    title: "Admin Control",
    icon: UserRoundCog,
    points: [
      "Multi-society overview",
      "SLA & escalation rules",
      "Staff performance tracking",
      "Real-time analytics",
    ],
  },
  {
    title: "Staff Operations",
    icon: HiOutlineUserGroup,
    points: [
      "Smart ticket assignment",
      "Priority-based tasks",
      "Easy status updates",
      "Mobile-friendly access",
    ],
  },
  {
    title: "Resident Experience",
    icon: HiOutlineHome,
    points: [
      "Raise issues in seconds",
      "Upload photos & videos",
      "Live status tracking",
      "Faster resolutions",
    ],
  },
  {
    title: "Refer and Earn",
    icon: GoCrossReference,
    points: [
      "Raise issues in seconds",
      "Upload photos & videos",
      "Live status tracking",
      "Faster resolutions",
    ],
  },
];
