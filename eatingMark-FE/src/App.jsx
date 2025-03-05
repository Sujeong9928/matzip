import LikedPlaces from "./components/LikedPlaces";
import PlacesList from "./components/PlacesList";

export default function App() {
  return (
    <div className="container mx-auto p-4">
      {/* 상단: 찜한 맛집 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">찜한 맛집</h2>
        <LikedPlaces />
      </section>

      {/* 하단: 전체 맛집 목록 */}
      <section>
        <PlacesList />
      </section>
    </div>
  );
}
