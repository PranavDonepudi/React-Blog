import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';
import './ArticlesListPage.css'; // Import the new CSS file

const ArticlesListPage = () => {
    return (
        <div className="articles-list-page">
            <h1 className="articles-list-title">Projects</h1>
            <ArticlesList articles={articles} />
            <div className="github-link">
                <p>Check out more of my work on <a href="https://github.com/PranavDonepudi" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </div>
        </div>
    );
};

export default ArticlesListPage;
