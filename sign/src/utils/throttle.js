/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 21:22:24
 * @LastEditTime: 2019-08-09 22:29:46
 * @LastEditors: Please set LastEditors
 */

//节流
function throttle(func, wait) {
  console.log("防抖。。。。。。");
  let timer = Date.now();
  return function() {
    let now = Date.now(); //现在的时间
    if (now - timer >= wait) {
      func(...arguments);
      timer = now;
    }
  };
}

//防抖
function debounce(func, delay) {
  let timer = 0;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

export { throttle, debounce };
