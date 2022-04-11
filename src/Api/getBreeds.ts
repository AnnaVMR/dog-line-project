import axios from 'axios';
import { API_HEADERS, API_URL } from '../constants/ApiConstants';

export interface IBreed {
  id: string;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  weight: { imperial: string, metric: string };
  height: { imperial: string, metric: string };
  origin: string;
  history: string;
  reference_image_id: string;
  image: {
    id: string,
    width: number,
    height: number,
    url: string,
  };
  breed_group: string;
};

const getBreeds = async (page: number): Promise<IBreed[]> => {
  try {
    const headers = API_HEADERS;
    const api = `${API_URL}${page}`;

    const response = await axios.get(api, { headers });

    return response.data;
  } catch (e) {
    alert(e);
    throw (e);
  };
};


export default getBreeds;
