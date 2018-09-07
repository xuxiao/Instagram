const fn = {
  /**
  * 频率控制函数， fn执行次数不超过 1 次/delay
  * @param fn{Function}     传入的函数
  * @param delay{Number}    时间间隔
  * @param options{Object}  如果想忽略开始边界上的调用则传入 {leading:false},
  *                         如果想忽略结束边界上的调用则传入 {trailing:false},
  * @returns {Function}     返回调用函数
  */
  throttle(fn ,delay ,options) {
      var wait=false;
      if (!options) options = {};
      return ()=>{
          const args=arguments;
          if(!wait){
              if (!(options.leading === false)){
                  fn.apply(this,args);
              }
              wait=true;
              setTimeout(()=> {
                  if (!(options.trailing === false)){
                      fn.apply(this,args);
                  }
                  wait=false;
              },delay);
          }
      }
  }
}
export default fn