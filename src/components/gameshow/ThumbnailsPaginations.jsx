export default function ThumbnailsPaginations({ totalPagination, pageId }) {
  return (
    <>
      <div
        className={`grid grid-cols-${totalPagination} -skew-x-50 overflow-hidden rounded-[3px] bg-secondary/20`}
      >
        {Array.from({ length: totalPagination }).map((_, index) => (
          <div
            key={index}
            className={`rounded bg-primary ${
              pageId === index ? 'p-[0.094rem]' : 'bg-opacity-0'
            }`}
          />
        ))}
      </div>
    </>
  );
}
