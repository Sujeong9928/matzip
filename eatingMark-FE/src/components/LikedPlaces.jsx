import { useEffect, useState } from "react";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:3000/";

const LikedPlaces = () => {
  const [likedPlaces, setLikedPlaces] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users/places")
      .then(response => {
        // 백엔드 응답 구조: { places: [...] }
        setLikedPlaces(response.data.places);
      })
      .catch(error => console.error("찜한 맛집 로딩 오류:", error));
  }, []);

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">내가 찜한 맛집</h2>
      {likedPlaces.length === 0 ? (
        <p className="text-gray-500">아직 찜한 맛집이 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {likedPlaces.map(place => (
            <div key={place.id} className="border rounded p-2">
              <img
                src={`${IMAGE_BASE_URL}${place.image.src}`}
                alt={place.image.alt}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{place.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedPlaces;
