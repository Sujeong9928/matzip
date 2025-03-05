import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // 백엔드 서버 주소

export const getPlaces = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/places`);
    return response.data;
  } catch (error) {
    console.error("맛집 데이터를 가져오는데 실패했습니다:", error);
    return [];
  }
};
