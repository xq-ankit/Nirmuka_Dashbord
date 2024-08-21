import { Link } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="container">
        <div className="content">
          <h1>404</h1>
          <p>Page Not Found</p>
          <p className="light">
            Oops! Page Under Construction. We're sorry, but this page isn't available yet.
            We are working hard to build it, and it'll be ready soon.
            In the meantime, feel free to explore the rest of the site or contact us if you have any questions.
            Thank you for your patience!
          </p>
          <Link
            to="/"
            className="back-home-btn"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
