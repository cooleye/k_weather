/* eslint-disable prettier/prettier */
const key = '46d3eab874b74f508269f03ae4a071be';

// 城市信息搜索
// export const city = ({localtion}) => `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=${localtion}`;

// // 天气预报和实况
// export const weather = ({localtion}) => `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${localtion}`;

// // 3天气预报和实况
// export const threeDay = ({localtion}) => `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${localtion}`;

// // 分钟级降水
// export const minutely = ({location}) => `https://devapi.qweather.com/v7/minutely/5m?key=${key}&location=${localtion}`;

// // 空气质量
// export const air = ({location}) => `https://devapi.qweather.com/v7/air/now?key=${key}&location=${localtion}`;

// // 天气灾害预警
// export const warning = ({location}) => `https://devapi.qweather.com/v7/warning/now?key=${key}&location=${location}`;

// // 天气生活指数
// export const indices = ({location,type}) => `https://devapi.qweather.com/v7/indices/1d?key=${key}&location=${location}&type=${type}`;



/* ------------mock 接口-------------*/
// 城市信息搜索
export const city = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/city`;

// 天气预报和实况
export const weather = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/now`;

// 3天气预报和实况
export const threeDay = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/3d`;

// 7天预报
export const sevenDay = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/7d`

// 空气质量
export const air = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/air`;

// 天气灾害预警
export const warning = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/warning`;

// 天气生活指数
export const indices = () => `https://www.fastmock.site/mock/bc4b801f76e0d53df54122a57a859d8a/k/indices`;
