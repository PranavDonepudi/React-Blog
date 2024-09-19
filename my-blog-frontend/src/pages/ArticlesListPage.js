import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';
import './ArticlesListPage.css'; // Import the new CSS file

const ArticlesListPage = () => {
    return (
        <div className="articles-list-page">
            <h1 className="articles-list-title">Articles</h1>
            <ArticlesList articles={articles} />
        </div>
    );
};

export default ArticlesListPage;
