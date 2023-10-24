export default function ScrollTop() {
  // const ScrollToTop = () => {
  //   const [showTopBtn, setShowTopBtn] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener('scroll', () => {
  //       if (window.scrollY > 400) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     });
  //   }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-0 right-0 z-50 mb-5 me-5 scale-90 rounded bg-primary/20 p-4 text-light transition-all duration-300 ease-in-out hover:scale-100 hover:bg-primary/50"
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
