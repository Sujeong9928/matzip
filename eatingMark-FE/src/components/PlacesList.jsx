import { useEffect, useState } from "react";
import axios from "axios";

const IMAGE_BASE_URL = "http://localhost:3000/";

export default function PlacesList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/places")
      .then((response) => {
        // 백엔드 응답 구조: { places: [...] }
        setPlaces(response.data.places);
      })
      .catch((error) => {
        console.error("전체 맛집 데이터 로딩 오류:", error);
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">맛집 목록</h2>
      <div className="grid grid-cols-4 gap-x-100 gap-y-100">
        {places.map((place) => (
          <div key={place.id} className="relative w-full h-40">
            <img
              src={`${IMAGE_BASE_URL}${place.image.src}`}
              alt={place.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-white text-black px-2 py-1">
              {place.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
