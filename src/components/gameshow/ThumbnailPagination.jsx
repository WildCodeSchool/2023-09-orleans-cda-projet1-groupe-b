import React from 'react';

export default function ThumbnailPagination({ totalPagination, pageId }) {
  const Pagination = Array.from({ length: totalPagination }).map((_, index) => (
    <div
      key={index}
      className={`
        transition-all bg-primary rounded
        ${pageId === index ? 'p-[0.094rem]' : 'bg-opacity-0'}
      `}
    />
  ));
  console.log('page id :', pageId, 'index :');

  return (
    <>
      <div
        className={`grid grid-cols-${totalPagination} -skew-x-50 rounded-[3px] bg-secondary/20 overflow-hidden`}
      >
        {Pagination}
      </div>
    </>
  );
}
