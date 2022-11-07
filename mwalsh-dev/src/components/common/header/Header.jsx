import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
    const width = window.innerWidth;
    const mobileBreakpoint = 992;
    const useMobile = width < mobileBreakpoint

    return (
        <header>
            { (!useMobile ? <DesktopNav></DesktopNav> : <MobileNav></MobileNav>) }
        </header>
    )
}

export default Header