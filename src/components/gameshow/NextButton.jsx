export default function NextButton({ handleClickNext }) {
  return (
    <>
      <button
        onClick={handleClickNext}
        className="flex h-20 w-10 items-center justify-center rounded bg-primary/[.15] backdrop-blur-sm"
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
