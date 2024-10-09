import * as ENDPOINTS from "../http/endpoints";
import $http from "../http/axios";

export interface ApiResponse {
  data: object;
  message: object;
}
export default class {
  static async fetchRandomImages() {
    try {
      let data = await $http.get(ENDPOINTS.randomPhotos);
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async searchRandomImages(query?: any) {
    try {
      let data = await $http.get(ENDPOINTS.serachPhotos, {
        params: { ...query },
      });
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
}
