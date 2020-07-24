import axios from "axios";

const clientId =
  "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";

const baseUrl = "https://api.unsplash.com/";

export default {
  reqPhotos(url = baseUrl + "photos/") {
    return {
      feetchRandomList: (count) =>
        axios.get(url + "random?count=" + count + "&client_id=" + clientId),
    };
  },
};
