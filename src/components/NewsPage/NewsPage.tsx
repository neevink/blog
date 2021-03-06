import React from "react";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Post from "../Post/Post";
import Page from "../Page/Page";

const NewsPage: React.FC = () => {
    return (
        <Page>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Page>
    );
};

export default NewsPage;