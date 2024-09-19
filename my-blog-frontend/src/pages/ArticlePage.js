import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';
import articles from './article-content';
import Footer from '../components/Footer'; // Import the Footer component
import './ArticlePage.css'; // Import the CSS file

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { articleId } = useParams();
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        };

        if (!isLoading) {
            loadArticleInfo();
        }
    }, [isLoading, user, articleId]);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <div className="article-container">
                <div className="article-header">
                    <h1>{article.title}</h1>
                </div>
                <div className="upvotes-section">
                    {user ? (
                        <button onClick={addUpvote}>
                            {canUpvote ? 'Upvote' : 'Already Upvoted'}
                        </button>
                    ) : (
                        <button onClick={handleLoginRedirect} className="login-button">
                            Log in to upvote
                        </button>
                    )}
                    <p>This article has {articleInfo.upvotes} upvote(s)</p>
                </div>
                <div className="article-content">
                    {article.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
                <div className="comments-section">
                    <h3>Comments</h3>
                    {user ? (
                        <AddCommentForm
                            articleName={articleId}
                            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
                        />
                    ) : (
                        <button onClick={handleLoginRedirect} className="login-button">
                            Log in to add a comment
                        </button>
                    )}
                    <CommentsList comments={articleInfo.comments} />
                </div>
            </div>
            <Footer /> {/* Footer at the bottom */}
        </>
    );
};

export default ArticlePage;
