type RoutePathMap<RoutePath extends Record<string, string>> = {
  readonly [K in keyof RoutePath]: RoutePath[K];
};

const RoutePaths = {
  home: '/',
  jobs: '/jobs',
  'jobs.create': '/jobs/create',
  'jobs.edit': '/jobs/:id/edit',
  profile: '/profile',
  'profile.edit': '/profile/edit',
  login: '/login',
  register: '/register',
} as const;

type RoutePath = RoutePathMap<typeof RoutePaths>;

function route<T extends keyof RoutePath>(
  path: T,
  params?: Record<string, string>
): RoutePath[T] {
  const routePath = RoutePaths[path];
  if (!params) return routePath;

  return Object.keys(params).map(key =>
    routePath.replace(`:${key}`, params[key])
  )[0] as RoutePath[T];
}

export default route;
