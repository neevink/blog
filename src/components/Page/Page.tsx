import React from "react";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Post from "../Post/Post";

import "./Page.css"

const Page: React.FC = (props: React.Props<any>) => {

    return (
        <div className={"Page"}>
            <div className={"Page-content-wrapper"}>
                <Header></Header>
                <div className={"Page-content"}>
                    <NavigationBar></NavigationBar>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;