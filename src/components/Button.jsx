export default function Button({ str }) {
  return (
    <a
      href="#"
      className="inline-block -skew-x-35 bg-primary py-1 pl-4 pr-2 outline outline-2 outline-offset-[2px] outline-primary"
    >
      <span className="inline-block skew-x-35 font-title text-base font-medium uppercase tracking-wider">
        {str}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-right mb-1 inline-block skew-x-35"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  );
}
