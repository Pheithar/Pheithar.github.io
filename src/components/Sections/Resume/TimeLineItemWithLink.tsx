import {FC, memo} from 'react';

import {TimeLineItemWithLink as TimeLineItemWithLinkType} from '../../../data/dataDef';

const TimeLineItemWithLink: FC<{item: TimeLineItemWithLinkType}> = memo(({item}) => {
  const {title, date, link, location, authors} = item;

  return (
    <a className="flex flex-col pb-8 text-center last:pb-0 md:text-left" href={link} target="_blank">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{authors}</span>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
    </a>
  );
});

TimeLineItemWithLink.displayName = 'TimeLineItemWithLink';
export default TimeLineItemWithLink;
