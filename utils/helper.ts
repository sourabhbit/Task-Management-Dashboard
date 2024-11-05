const localStorageHelper = {
  getItem(key: any) {
    try {
      const value = window.localStorage.getItem(key) || "";
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  },
  setItem(key: any, value: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value || null));
    } catch (err) {}
  },
  removeItem(key: any) {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {}
  },
};

export const getAllUrlParams = (urlSearch: string) => {
  var queryString = urlSearch.slice(1);
  var obj: any = {};

  if (queryString) {
    queryString = queryString.split("#")[0];
    var arr = queryString.split("&");

    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split("=");
      var paramName = a[0];
      var paramValue = typeof a[1] === "undefined" ? true : a[1];

      paramName = paramName.toLowerCase();
      if (typeof paramValue === "string") paramValue = paramValue;

      if (paramName.match(/\[(\d+)?\]$/)) {
        var key: string = paramName.replace(/\[(\d+)?\]/, "");
        if (!obj[key]) obj[key] = [];

        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)![1];
          obj[key][index] = paramValue;
        } else {
          obj[key].push(paramValue);
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === "string") {
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          obj[paramName].push(paramValue);
        }
      }
    }
    Object.entries(obj).forEach(([key, value]) => {
      localStorageHelper.setItem(key, value);
    });
  } else {
    obj = [
      "utm_source",
      "utm_term",
      "utm_content",
      "utm_campaign",
      "utm_medium",
      "gclid",
    ];
    obj.map((item: string) => {
      localStorageHelper.removeItem(item);
    });
  }
};

type Calendar = {
  [key: number]: string;
};

export const calendar: Calendar = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const addZeroes = (num: any) => {
  const dec = num.toString().split(".")[1];
  const len = dec && dec.length > 2 ? dec.length : 2;
  return Number(num).toFixed(len);
};

export default localStorageHelper;
