import React from "react";
import { BiHash, BiFingerprint, BiLockOpen } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlinePrivateConnectivity, MdOutlineNotes } from "react-icons/md";
import { RiRestTimeLine } from "react-icons/ri";
import { SiJsonwebtokens } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";

export default [
  {
    icon: <SiJsonwebtokens />,
    name: "Token Generator",
    desc: "",
  },
  {
    icon: <BiHash />,
    name: "Hash Text",
    desc: "",
  },
  {
    icon: <MdOutlinePrivateConnectivity />,
    name: "Bcrypt",
    desc: "",
  },
  {
    icon: <BiFingerprint />,
    name: "UUIDs V4 Generator",
    desc: "",
  },
  {
    icon: <BiLockOpen />,
    name: "Encrypt/Decrypt String",
    desc: "",
  },
  {
    icon: <TbMessage2Code />,
    name: "Hmac Generator",
    desc: "",
  },
  {
    icon: <MdOutlineNotes />,
    name: "Lorem ipsum Generator",
    desc: "",
  },
  {
    icon: <RiRestTimeLine />,
    name: "Project Timeline",
    route: "/dev/timeline",
  },
  {
    icon: <CgNotes />,
    name: "Project Detail",
    route: "/dev/detail",
  },
];
