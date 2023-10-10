export default function PreviousButton({ handleClickPrev }) {
  return (
    <>
      <button
        onClick={handleClickPrev}
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
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </>
  );
}
