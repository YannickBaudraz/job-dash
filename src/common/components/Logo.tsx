import logo from '../../assets/logo/logo.svg';

export default function Logo({ className }: { className?: string }) {
  return <img src={logo} alt="logo" className={className} />;
}
