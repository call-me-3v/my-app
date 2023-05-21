import http from "../http-common";

class TenantDataService {
  getAll() {
    return http.get("/tenants");
  }

  get(id) {
    return http.get(`/tenants/${id}`);
  }

  create(data) {
    return http.post("/tenants", data);
  }

  update(id, data) {
    return http.put(`/tenants/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tenants/${id}`);
  }

  deleteAll() {
    return http.delete(`/tenants`);
  }

  findByTitle(title) {
    return http.get(`/tenants?title=${title}`);
  }
}

export default new TenantDataService();
