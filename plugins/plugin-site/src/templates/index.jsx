import React from 'react';
import {navigate} from 'gatsby';

import Layout from '../layout';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import JenkinsVoltron from '../components/JenkinsVoltron';

import './index.css';


function IndexPage() {
    const [query, setQuery] = React.useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate(`/ui/search?${new URLSearchParams({query})}`);
    };
    const pageTitle = 'Plugins Index';
    const indexPage = 'plugins/plugin-site/src/templates/index.jsx';

    return (
        <Layout sourcePath={indexPage}>
            <SEO />
            <div className="IndexPage--Container jumbotron" onSubmit={handleOnSubmit}>
                <div className="logo"><JenkinsVoltron /></div>
                <div className="content">
                    <h1>{pageTitle}</h1>
                    <p>Discover the 1800+ community contributed Jenkins plugins to support building, deploying and automating any project.</p>
                    <SearchBox
                        handleOnSubmit={handleOnSubmit}
                        query={query}
                        setQuery={setQuery}
                    />
                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export default IndexPage;
