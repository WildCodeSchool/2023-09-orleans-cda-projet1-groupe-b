export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed z-50 sm:bottom-0 sm:right-0  sm:mb-14 sm:me-5 sm:scale-90 sm:rounded sm:bg-primary/20 sm:p-4 sm:text-light sm:transition-all sm:duration-300 sm:ease-in-out sm:hover:scale-100 sm:hover:bg-primary/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          viewBox="0 0 330 330"
          fill="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            id="XMLID_224_"
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
          ></path>
        </svg>
      </button>
    </>
  );
}
