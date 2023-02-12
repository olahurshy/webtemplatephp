const cookie = require("js-cookie");

export const saveCookie = (detail: { [keys: string]: string }) => {
  if (typeof window !== "undefined") {
    for (let keys in detail) {
      cookie.set(`superstar_${keys}`, detail[keys], {
        expires: 1
      });
    }
  }
};

export const removeCookie = () => {
  if (typeof window !== "undefined") {
    cookie.remove("superstar_name");
    cookie.remove("superstar_email");
    cookie.remove("superstar_token");
  }
};

export const getCookie = (prop: string) => {
  if (typeof window !== "undefined") {
    return cookie.get(`superstar_${prop}`);
  }
};
