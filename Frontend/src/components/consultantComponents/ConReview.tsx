import MyReview from './MyReview';
import ReviewGraph from './ReviewGraph';

export default function ConReview() {
  return (
    <div className="mt-16 overflow-auto">
      <h1 className="font-bold text-xl">Review</h1>
      <h4 className="mt-8 mb-4 text-gray4 font-semibold text-sm">내 리뷰</h4>
      <MyReview />
      <h4 className="mt-8 mb-4 text-gray4 font-semibold text-sm">전체 리뷰</h4>
      <ReviewGraph />
      <ReviewGraph />
    </div>
  );
}
