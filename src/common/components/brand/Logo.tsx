import logo from '../../../assets/logo/logo.png';

export default function Logo({ className }: { className?: string }) {
  return <img src={logo} alt="logo" className={className} />;
}
