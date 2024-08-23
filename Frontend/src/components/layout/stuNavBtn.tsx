'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function stuNavBtns({ imgName, name, link }: any) {
  const [icon, setIcon] = useState('Default');
  const [clicked, setClicked] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (path === link) {
      setIcon('Selected');
      setClicked(true);
    } else {
      setIcon('Default');
      setClicked(false);
    }
  }, [path, link]);

  return (
    <Link href={link}>
      <div
        className={`flex items-center justify-start pl-4 rounded-[8px] ${clicked ? 'bg-navSelectColor' : 'hover:bg-navSelectColor'} cursor-pointer`}
        style={{ width: '320px', height: '52px' }}
      >
        <Image
          src={`/images/pngs/${imgName}${icon}.png`}
          alt={name}
          width={32}
          height={32}
        />
        <span className="text-white text-lg pl-4 font-pretendard font-bold">
          {name}
        </span>
      </div>
    </Link>
  );
}
