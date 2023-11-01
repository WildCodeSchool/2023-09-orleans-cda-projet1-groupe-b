import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="h-14 w-screen bg-dark">
        <div className="flex justify-between pt-4">
          <Link to="/about-the-team">
            <p className="ms-10 text-light/70 hover:text-light">
              About the team
            </p>
          </Link>
          <p className="me-10 text-light/70">GamePulse ® Legal Notices</p>
        </div>
      </footer>
    </>
  );
}
