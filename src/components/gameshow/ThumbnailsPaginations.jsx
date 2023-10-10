export default function ThumbnailsPaginations({ totalPagination, pageId }) {
  const nbPages = totalPagination;
  console.log(typeof nbPages, nbPages);
  return (
    <>
      <div
        className={`grid grid-cols-${nbPages} -skew-x-50 rounded-[3px] bg-secondary/20 overflow-hidden`}
      >
        {Array.from({ length: nbPages }).map((_, index) => (
          <div
            key={index}
            className={`bg-primary rounded ${
              pageId === index ? 'p-[0.094rem]' : 'bg-opacity-0'
            }`}
          />
        ))}
      </div>
    </>
  );
}
