import React from "react";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
    return (
        <ul className={"NavigationBar"}>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/home-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>My profile</div>
                    </div>
                </a>
            </li>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/news-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>News</div>
                    </div>
                </a>
            </li>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/messages-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Messenger</div>
                    </div>
                </a>
            </li>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/friends-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Friends</div>
                    </div>
                </a>
            </li>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/communities-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Communities</div>
                    </div>
                </a>
            </li>
            <li>
                <a href={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/home-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Sign out</div>
                    </div>
                </a>
            </li>
        </ul>
    );
}

export default NavigationBar;
