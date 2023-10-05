import { Link } from 'react-router-dom';

export default function Recommandations() {
  return (
    <>
      <div>
        <Link to="/bestsellers">BestSellers</Link>
        <Link to="/home">Home</Link>
        <Link to="/offers">Offers</Link>
      </div>
    </>
  );
}
