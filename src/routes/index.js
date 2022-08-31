import {
  SignInPage,
  HomePage,
  PersonalAppPage,
  DeveloperAppPage,
  SocialAppPage,
  ProfilePage,
  ClockPage,
  ChatPage,
  ToDoPage,
  TrophyPage,
  DetailPage,
  PassSavePage,
  PassGenPage,
} from "pages";

const routes = [
  {
    path: "/signin",
    component: SignInPage,
    isProtected: false,
  },
  {
    path: "/home",
    component: HomePage,
    isProtected: true,
  },
  {
    path: "/personal",
    component: PersonalAppPage,
    isProtected: true,
  },
  {
    path: "/dev",
    component: DeveloperAppPage,
    isProtected: true,
  },
  {
    path: "/social",
    component: SocialAppPage,
    isProtected: true,
  },
  {
    path: "/clock",
    component: ClockPage,
    isProtected: true,
  },
  {
    path: "/chat",
    component: ChatPage,
    isProtected: true,
  },
  {
    path: "/todo",
    component: ToDoPage,
    isProtected: true,
  },
  {
    path: "/trophy",
    component: TrophyPage,
    isProtected: true,
  },
  {
    path: "/detail",
    component: DetailPage,
    isProtected: true,
  },
  {
    path: "/pass",
    component: PassSavePage,
    isProtected: true,
  },
  {
    path: "/pass/gen",
    component: PassGenPage,
    isProtected: true,
  },
  {
    path: "/profile",
    component: ProfilePage,
    isProtected: true,
  },
];

export default routes;
