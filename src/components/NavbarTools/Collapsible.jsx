export default function Collapsible({ children }) {
  return (
    <>
      <div className="ml-3 w-full p-3 pl-8 text-opacity-30">
        <ul className=" flex flex-col rounded text-opacity-90">{children}</ul>
      </div>
    </>
  );
}
