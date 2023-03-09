import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import backgroundImage from '../../assets/images/auth_background.jpg';
import Logo from '../../common/component/media/Logo';
import useMediaQuery from '../../common/hook/useMediaQuery';
import AuthGate from '../../routing/AuthGate';

export default function AuthLayout() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImgLoaded(true);
  }, []);

  const isLaptop = useMediaQuery('min-width', 960);

  if (!imgLoaded) return null;

  return (
    <AuthGate requireGuest>
      <div className="grid h-screen items-center lg:grid-cols-[1fr,1fr]">
        <main className="text-center md:p-20">
          <Logo className="mx-auto max-w-xs px-10 pb-10 mix-blend-multiply" />
          <Outlet />
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
    </AuthGate>
  );
}
