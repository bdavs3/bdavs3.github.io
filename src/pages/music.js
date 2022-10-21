import React from "react";

import Head from "../components/head";
import Layout from "../components/layout";

import ReactSoundCloud from 'react-soundcloud-embedded'

// Borrowing styles from the book review, since the requirements here are minimal
import "./styles/book-review.scss";

let trackUrls = [
    "https://soundcloud.com/zbxd/waves-of-color",
    "https://soundcloud.com/zbxd/the-curiosity-of-the-cat-original-mix",
    "https://soundcloud.com/zbxd/blue-foundation-lost-zbxd-remix",
    "https://soundcloud.com/zbxd/maya-deren-meshes-of-the-afternoon-zbxd-2020-rework"
]
const embeddedTracks = trackUrls.map((url) => (
    <ReactSoundCloud url={url} width="50%"/>
));

let mixUrls = [
    "https://soundcloud.com/zbxd/shards-of-the-pandemic",
    "https://soundcloud.com/zbxd/just-gonna-upload-this-as-is",
    "https://soundcloud.com/zbxd/she-loves-radiostar-1"
]
const embeddedMixes = mixUrls.map((url) => (
    <ReactSoundCloud url={url} width="50%"/>
));

const MusicPage = () => (
  <Layout>
    <Head title="Music" />
    <div className="book-review-wrapper">
        <h1 className="title is-1 has-text-centered">Tracks</h1>
        {embeddedTracks}
        
        <br /><br />
        
        <h1 className="title is-1 has-text-centered">Mixes</h1>
        {embeddedMixes}
    </div>
  </Layout>
);

export default MusicPage;
