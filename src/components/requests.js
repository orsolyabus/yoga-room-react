const BASE_URL = `http://localhost:3000/api/v1`;

export const Teacher = {
  all() {
    return fetch(`${BASE_URL}/teachers`, {
    }).then(res => res.json());
  }
};
