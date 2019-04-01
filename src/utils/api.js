const apiObj = {
  getSwiper: '/swiper', // 获取轮播图
  getContent: '/category/books', // 按照分类获取图书
  getBook: '/book/', // 获取单个图书
  getTitles: '/titles/', // 获取标题
  getArticle: '/article/', // 获取一篇文章
  login: '/login_html', // 登录接口
  sendCode: '/phoneValidator', // 发送短信验证码
  register: '/register', // 注册
  getUserData: '/user', // 获取用户数据
}

const baseURI = process.env.NODE_ENV == 'production'?'/': '/api';
for(let key in apiObj){
  apiObj[key] = baseURI + apiObj[key]
}
export default apiObj
