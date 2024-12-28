const Rating = ({ rating }: { rating: number }) => {
  if (rating > 5) rating = 5;
  const full = Math.floor(rating);
  const empty = Math.floor(5 - rating);
  const half = 5 - (full + empty);
  return (
    <span className='flex items-center gap-1'>
      {Array(full)
        .fill(Date.now())
        .map((item) => (
          <svg
            key={item}
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='16'
            height='16'
            x='0'
            y='0'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
          >
            <g>
              <path
                d='M512 197.651 326 185.65 255.8 9.55l-70.201 176.1L0 197.651 142.399 318.85l-46.8 183.6L255.8 401.05 416 502.45l-46.8-183.6L512 197.651z'
                fill='#ffd400'
                data-original='#ffd400'
              ></path>
              <path
                d='m369.2 318.85 46.8 183.6-160.2-101.4V9.55l70.2 176.1 186 12.001z'
                fill='#fdbf00'
                data-original='#fdbf00'
              ></path>
            </g>
          </svg>
        ))}
      {Array(half)
        .fill(Date.now())
        .map((item) => (
          <svg
            key={item}
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='16'
            height='16'
            x='0'
            y='0'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
          >
            <g>
              <path
                d='M512 197.651 326 185.65 255.8 9.55l-70.201 176.1L0 197.651 142.399 318.85l-46.8 183.6L255.8 401.05 416 502.45l-46.8-183.6L512 197.651z'
                fill='#ffd400'
                data-original='#ffd400'
              ></path>
              <path
                d='m369.2 318.85 46.8 183.6-160.2-101.4V9.55l70.2 176.1 186 12.001z'
                // fill='#fdbf00'
                fill='#c7c7c7'
                data-original='#fdbf00'
              ></path>
            </g>
          </svg>
        ))}
      {Array(empty <= 0 ? 0 : empty)
        .fill(Date.now())
        .map((item) => (
          <svg
            key={item}
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='16'
            height='16'
            x='0'
            y='0'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
          >
            <g>
              <path
                d='M512 197.651 326 185.65 255.8 9.55l-70.201 176.1L0 197.651 142.399 318.85l-46.8 183.6L255.8 401.05 416 502.45l-46.8-183.6L512 197.651z'
                // fill='#ffd400'
                fill='#c7c7c7'
                data-original='#ffd400'
              ></path>
              <path
                d='m369.2 318.85 46.8 183.6-160.2-101.4V9.55l70.2 176.1 186 12.001z'
                // fill='#fdbf00'
                fill='#c7c7c7'
                data-original='#fdbf00'
              ></path>
            </g>
          </svg>
        ))}
    </span>
  );
};

export default Rating;
