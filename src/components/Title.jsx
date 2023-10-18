export default function Title({ title }) {
  return (
    <div className="mb-20">
      <h1 className="text-center font-title text-5xl uppercase tracking-wide text-light md:text-left">
        {title}
      </h1>
      <div className="flex justify-center md:justify-start">
        <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
      </div>
    </div>
  );
}
