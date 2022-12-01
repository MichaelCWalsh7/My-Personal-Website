import { Breakpoint } from "react-socks";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
    

    return (
        <header>
            <Breakpoint large up >
                <DesktopNav></DesktopNav>
            </Breakpoint>
            <Breakpoint medium down >
                <MobileNav></MobileNav>
            </Breakpoint>
              
        </header>
    )
}

export default Header