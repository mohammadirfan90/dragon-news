import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";

import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, rating, total_view, author } = news;

  const formattedDate = format(
    new Date(news.author.published_date),
    "yyyy-MM-dd",
  );

  return (
    <div className="card bg-base-100 shadow-sm ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <button className="flex gap-2">
          <CiBookmark size={24} />
          <CiShare2 size={24} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-3">
        {/* Details */}
        <div className="px-4 text-accent">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="font-semibold cursor-pointer hover:underline text-orange-400">
                Read More
              </span>
            </>
          ) : (
            <>{details}</>
          )}
        </div>

        <div className="divider my-2"></div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm">
          {/* Rating */}
          <div className="flex items-center gap-2 text-orange-400">
            {/* <FaStar size={18} />

            <span className="font-medium text-gray-700 text-lg">
              {rating?.number}
            </span> */}
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar size={18} />
            ))}
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
