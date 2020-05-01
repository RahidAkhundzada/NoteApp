import React from 'react';
const Time = () => {
  let date = new Date();
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  var year =
    date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var minute =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var second = date.getSeconds();
};
