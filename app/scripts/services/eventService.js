'use strict';

angular.module('scheduleBuilderApp')
  .service('eventService', function () {

    this.getDow = function (day) {
      for (var d in day) {
        if (day[d] === null || day[d] === undefined) {
          delete day[d];
        }
      }

      console.log(day)
      var dow = []
      var tmpd = Object.keys(day);

      for (var i = 0; i < tmpd.length; i++) {
        if (tmpd[i] === "M") {
          dow.push(1)
        } else if (tmpd[i] === "T") {
          dow.push(2)
        } else if (tmpd[i] === "W") {
          dow.push(3)
        } else if (tmpd[i] === "R") {
          dow.push(4)
        } else if (tmpd[i] === "F") {
          dow.push(5)
        }
      }

      return dow;
    };

    this.startTime = function (dayObj) {
      var ocrArr = removeNull(dayObj)

      console.log(ocrArr)

      return ocrArr[Object.keys(ocrArr)[0]][0]
    };

    this.endTime = function (dayObj) {
      var ocrArr = removeNull(dayObj)

      console.log(ocrArr[Object.keys(ocrArr)[0]][0] )

      return ocrArr[Object.keys(ocrArr)[0]][1]
    }

    this.eventObj = function (startTime, endTime, className, dow) {

      startTime = moment(startTime, ["h:mmA"]).format("HH:mm")
      endTime = moment(endTime, ["h:mmA"]).format("HH:mm")

      var eventObj = {
        title: className,
        start: startTime,
        end: endTime,
        dow: dow,
        backgroundColor: "",
        borderColor: ""
      }

      return eventObj

    }

  });

var removeNull = function (keyObj) {
  for (var d in keyObj) {
    if (keyObj[d] === null || keyObj[d] === undefined) {
      delete keyObj[d];
    }
  }

  return keyObj;
}
