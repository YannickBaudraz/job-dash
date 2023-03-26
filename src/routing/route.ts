type RoutePathMap<RoutePath extends Record<string, string>> = {
  readonly [K in keyof RoutePath]: RoutePath[K];
};

const RoutePaths = {
  home: '/',
  jobs: '/jobs',
  jobsCreate: '/jobs/create',
  profile: '/profile',
  login: '/login',
  register: '/register',
} as const;

type RoutePath = RoutePathMap<typeof RoutePaths>;

function route<T extends keyof RoutePath>(path: T): RoutePath[T] {
  return RoutePaths[path];
}

export default route;
