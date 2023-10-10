export default function NextButton({ handleClickNext }) {
  return (
    <>
      <button
        onClick={handleClickNext}
        className="bg-primary/[.15] flex items-center justify-center w-10 h-20 rounded backdrop-blur-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </>
  );
}
