import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./NavigationBar.css";
import NewsPage from "../NewsPage/NewsPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const NavigationBar: React.FC = () => {
    return (
    <>
        <ul className={"NavigationBar"}>
            <li>
                <Link to={"/profile"}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/home-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>My profile</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/news"}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/news-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>News</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/messenger"}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/messages-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Messenger</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/friends-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Friends</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/communities-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Communities</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link to={""}>
                    <div className={"NavigationBar-btn"}>
                        <div className={"NavigationBar-icon"} style={{backgroundImage: "url(/blog/menu-icons/home-icon.png)"}}></div>
                        <div className={"NavigationBar-name"}>Sign out</div>
                    </div>
                </Link>
            </li>
        </ul>
    </>
    );
}

export default NavigationBar;
