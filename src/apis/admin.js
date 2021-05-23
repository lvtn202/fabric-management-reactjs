import RequestManager from "../commons/request_manager";

/* {
    "firstName": "Nguyễn",
    "lastName": "A",
    "email": "a@gmail.com",
    "password": "a",
    "sex": "male"
} */
export const signup = (body) => {
  return RequestManager.post("/signUp", body, "application/json");
};

export const getListUser = (pageIndex, pageSize) => {
  return RequestManager.get(
    `/listUser?pageIndex=${pageIndex ?? 0}&pageSize=${pageSize ?? 100}`
  );
};

/* {
    "name": "Xuân Huy Fabric",
    "address": "KTX khu A",
    "phoneNumber": "0123456789",
    "email": "huy@dyehouse.com"
} */
export const createDyeplant = (body) => {
  return RequestManager.post("/createDyehouse", body, "application/json");
};
