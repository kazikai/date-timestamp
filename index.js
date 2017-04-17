'use strict';
var timestamp = function(dateObject, pattern){
  if(!dateObject || typeof dateObject !== 'function' || !(dateObject instanceof Date)) {
    dateObject = new Date();
  }
  var year = dateObject.getFullYear(),
      hour = (dateObject.getHours() < 10 ? '0' : '') + dateObject.getHours(),
      min = (dateObject.getMinutes() < 10 ? '0' : '') + dateObject.getMinutes(),
      sec = (dateObject.getSeconds() < 10 ? '0' : '') + dateObject.getSeconds(),
      month = (dateObject.getMonth() + 1 < 10 ? '0' : '') + dateObject.getMonth() + 1,
      day = (dateObject.getDate() < 10 ? '0' : '') + dateObject.getDate();
  var result = year + month + day + '_' + hour + min + sec;
  if (pattern === 'yyyy-mm-dd') {
    result = year + '-' + month + '-' + day;
  } else if (pattern === 'yyyy-mm-dd-hh-mm-ss') {
    result = year + '-' + month + '-' + day + '-' + hour + '-' + min + '-' + sec;
  }
  return result;
};

module.exports = timestamp;