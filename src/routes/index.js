import {
  SignInPage,
  HomePage,
  PersonalAppPage,
  GamesAppPage,
  SocialAppPage,
  DeveloperAppPage,
  ProfilePage,
  ClockPage,
  ChatPage,
  ToDoPage,
  PassSavePage,
  PassGenPage,
  CalculatorPage,
  TrophyPage,
  ProjectDetailPage,
  ProjectTimelinePage,
} from "pages";

const routes = [
  {
    path: "/signin",
    component: SignInPage,
    isProtected: false,
  },
  {
    path: "/",
    component: HomePage,
    isProtected: true,
  },
  {
    path: "/personal",
    component: PersonalAppPage,
    isProtected: true,
  },
  {
    path: "/games",
    component: GamesAppPage,
    isProtected: true,
  },
  {
    path: "/social",
    component: SocialAppPage,
    isProtected: true,
  },
  {
    path: "/dev",
    component: DeveloperAppPage,
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
    path: "/timeline",
    component: ProjectTimelinePage,
    isProtected: true,
  },
  {
    path: "/detail",
    component: ProjectDetailPage,
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
    path: "/calculator",
    component: CalculatorPage,
    isProtected: true,
  },
  {
    path: "/profile",
    component: ProfilePage,
    isProtected: true,
  },
];

export default routes;
