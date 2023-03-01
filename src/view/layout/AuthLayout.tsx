import { PropsWithChildren } from 'react';
import backgroundImage from '../../assets/images/auth_background.jpg';
import Logo from '../../common/components/brand/Logo';
import useMediaQuery, { MediaQueryRule } from '../../common/hook/useMediaQuery';

export default function AuthLayout({ children }: PropsWithChildren) {
  const isLaptop = useMediaQuery(MediaQueryRule.MIN, 960);

  return (
    <div className="grid h-screen items-center lg:grid-cols-[1fr,1fr]">
      <main className="text-center md:p-20">
        <Logo className="mx-auto max-w-xs px-10 pb-10 mix-blend-multiply" />
        {children}
      </main>
      {isLaptop && (
        <aside className="hidden h-full w-full bg-gray-200 lg:block">
          <img
            src={backgroundImage}
            alt="Auth background"
            className="h-screen w-full object-cover"
          />
        </aside>
      )}
    </div>
  );
}
