'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

interface ILayoutProps {
    children: ReactNode;
}

interface IWrapperProps {
    children: ReactNode;
}

interface IBodyProps {
    children: ReactNode;
    isPage?: boolean;
}

interface IHeaderLProps {
    children: ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => (
    <div>{children}</div>
);

const Body = ({ children, isPage }: IBodyProps) => {
    return (
        <div className="ml-[360px]">{children}</div>
    );
};

const HeaderL = ({ children }: IHeaderLProps) => (
    <div className="ml-[360px]">{children}</div>
);

const HIDDEN_HEADER = ["/"];
const HIDDEN_NAVBAR = ["/"];

export default function Layout({ children }: ILayoutProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isHomepage = pathname === "/";
    const isHiddenHeader = HIDDEN_HEADER.includes(pathname);
    const isHiddenNavbar = HIDDEN_NAVBAR.includes(pathname);

    if (isHomepage) { 
        return <>{children}</>;
    }

    return (
        <Wrapper>
            {!isHiddenNavbar && <Navbar />}
            <HeaderL>{!isHiddenHeader && <Header />}</HeaderL>
            <Body>{children}</Body>
        </Wrapper>
    );
}
