'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/my-journey', label: 'My Journey' },
  { href: '/companions', label: 'Companions' },
  { href: '/companions/subscription', label: 'Subscription' },
];

const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className='flex items-center gap-8' style={{ listStyle: 'none' }}>
      {navItems.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} key={label} className={cn(pathName === href && 'text-primary font-semibold')}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
