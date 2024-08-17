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
    isHidden?: boolean; // isHidden 추가
}

interface IHeaderLProps {
    children: ReactNode;
    isHidden?: boolean; // isHidden 추가
}

const Wrapper = ({ children }: IWrapperProps) => (
    <div>{children}</div>
);

const Body = ({ children, isHidden }: IBodyProps) => {
    return (
        <div className={isHidden ? "" : "ml-[360px]"}>{children}</div>
    );
};

const HeaderL = ({ children, isHidden }: IHeaderLProps) => (
    <div className={isHidden ? "" : "ml-[360px]"}>{children}</div>
);

const HIDDEN_HEADER = ["/", "/editor"];
const HIDDEN_NAVBAR = ["/", "/editor"];

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
            <HeaderL isHidden={isHiddenHeader}>{!isHiddenHeader && <Header />}</HeaderL>
            <Body isHidden={isHiddenNavbar}>{children}</Body>
        </Wrapper>
    );
}