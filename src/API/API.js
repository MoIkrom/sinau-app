import axios from "axios";

// const HOST = "http://localhost:3000/api/v1";
const HOST = "https://backend-api-2023.vercel.app/api/v1";

// AUTHENTHICATION
export const login = (body) => {
  const URL = HOST + "/auth/login";
  return axios.post(URL, body);
};
export const Logout = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const URL = HOST + "/auth/logout";
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

// USER
export const register = (body) => {
  const URL = HOST + "/user";
  return axios.post(URL, body);
};

export const getProfile = () => {
  const token = localStorage.getItem("token");
  const URL = HOST + "/user/profile";
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

// PRODUCT
export const getProduct = () => {
  // const queryParam = {
  //     search: param.search ?? "",
  //     category: param.category ?? "",
  //     sort: param.sort ?? "id",
  //     order: param.order ?? "asc",
  // const page: param.page ?? "1",
  //   limit: param.limit ?? "10",
  // };
  const URL = HOST + `/product?page=1&limit=10`;
  return axios.get(URL);
  //   const URL = HOST + `/products/get_products?search=${queryParam.search}&category=${queryParam.category}&order=${queryParam.order}&sort=${queryParam.sort}&page=${queryParam.page}&limit=${queryParam.limit}`;
  //   return axios.get(URL);
};

export const getProductById = (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const URL = HOST + `/product/${id}`;
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const createProduct = (body) => {
  const token = localStorage.getItem("token");
  const URL = HOST + "/product";
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProduct = (body, id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const URL = HOST + `/products/edit_products/${id}`;
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const deleteProduct = (id) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const URL = HOST + `/products/${id}`;
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};
