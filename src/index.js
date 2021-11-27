const install = function(Vue){
    // 判断是否可以安装
    if (install.installed) return
    const context = require.context('./packages', true,  /^((?!main\.js).)+\.js$/)
    try {
      context.keys().forEach(path => {
        let res = context(path)
        // console.log(res);
        Vue.component(res.default.name, res.default)
      })
    } catch (e) {
      // console.log(e)
    }
}

export default{
    install
}