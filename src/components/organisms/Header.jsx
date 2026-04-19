import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-18 bg-graphite border-b border-iron">
      <div className="container mx-auto h-full px-6 xl:px-10 max-w-7xl flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex flex-col gap-px leading-none">
          <span className="font-serif text-2xl font-medium text-white tracking-tight">
            BoolAuto
          </span>
          <span className="text-xs font-light text-ash tracking-[0.2em] uppercase">
            Your trusted dealer for used cars
          </span>
        </Link>

        {/* NAV */}
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href={import.meta.env.VITE_DASHBOARD_BACKEND_URL}
                className="navlink"
                target="_blank"
              >
                Area riservata
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
