import http from "../http-common";

class FullStackService {
  getAll() {
    return http.get("/fullstacks");
  }
  get(id) {
    return http.get(`/fullstacks/${id}`);
  }
  create(data) {
    return http.post("/fullstacks", data);
  }
  update(id, data) {
    return http.put(`/fullstacks/${id}`, data);
  }
  delete(id) {
    return http.delete(`/fullstacks/${id}`);
  }
}

export default new FullStackService();