export default function ThumbnailsPaginations({ totalPagination, pageId }) {
  return (
    <>
      <div
        className={`grid grid-cols-${totalPagination} -skew-x-50 rounded-[3px] bg-secondary/20 overflow-hidden`}
      >
        {Array.from({ length: totalPagination }).map((_, index) => (
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
