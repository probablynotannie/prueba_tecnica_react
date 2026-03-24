import { FaStar } from "react-icons/fa";
import type { Review } from "../../types/product";

interface Props {
  reviews?: Review[];
}

export const ProductReviews = ({ reviews }: Props) => {
  if (!reviews?.length) return null;

  return (
    <section
      aria-labelledby="reviews-heading"
      className="mt-12 bg-white p-4 border border-slate-200 rounded-xl"
    >
      <h2 id="reviews-heading" className="text-xl font-semibold mb-4">
        Reviews
      </h2>

      <div className="flex flex-col gap-4">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="border border-gray-100 p-4 rounded-xl bg-slate-50"
          >
            <p className="font-medium">{review.reviewerName}</p>

            <div
              role="img"
              aria-label={`Rating: ${review.rating} out of 5`}
              className="flex gap-1"
            >
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  aria-hidden="true"
                  size={14}
                  className={
                    index < review.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>

            <p className="text-gray-600 text-sm">{review.comment}</p>

            <time
              dateTime={new Date(review.date).toISOString()}
              className="text-xs text-gray-400 mt-1"
            >
              {new Date(review.date).toLocaleDateString()}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
};
