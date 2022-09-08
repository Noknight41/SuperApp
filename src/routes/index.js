import {
  SignInPage,
  HomePage,
  PersonalAppPage,
  GameAppPage,
  SocialAppPage,
  DeveloperAppPage,
  ClockPage,
  ToDoPage,
  PassSavePage,
  PassGenPage,
  CalculatorPage,
  Two048Page,
  WordlePage,
  TrophyPage,
  ChatPage,
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
    path: "/game",
    component: GameAppPage,
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
    path: "/personal/clock",
    component: ClockPage,
    isProtected: true,
  },
  {
    path: "/social/chat",
    component: ChatPage,
    isProtected: true,
  },
  {
    path: "/personal/todo",
    component: ToDoPage,
    isProtected: true,
  },
  {
    path: "/social/trophy",
    component: TrophyPage,
    isProtected: true,
  },
  {
    path: "/dev/timeline",
    component: ProjectTimelinePage,
    isProtected: true,
  },
  {
    path: "/game/2048",
    component: Two048Page,
    isProtected: true,
  },
  {
    path: "/game/wordle",
    component: WordlePage,
    isProtected: true,
  },
  {
    path: "/dev/detail",
    component: ProjectDetailPage,
    isProtected: true,
  },
  {
    path: "/personal/password",
    component: PassSavePage,
    isProtected: true,
  },
  {
    path: "/personal/passgen",
    component: PassGenPage,
    isProtected: true,
  },
  {
    path: "/personal/calculator",
    component: CalculatorPage,
    isProtected: true,
  },
];

export default routes;
