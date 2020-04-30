'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.users.login);
  router.get('/reg', controller.users.reg);
  //上传用户头像
  router.post('/upload', controller.upload.userImg);
  router.post('/userImg', controller.users.userImg);
  //修改个人信息
  router.post('/updateInfo', controller.users.updateInfo);
  //修改密码
  router.post('/changePasswd', controller.users.changePasswd);
  
  
  router.post('/products/bookInfo',controller.products.bookInfo);
  router.post('/products/commentLike',controller.products.commentLike);
  router.post('/products/comment',controller.products.comment);
  router.post('/products/joinCarts',controller.products.joinCarts);
  //购物车接口
  router.post('/carts/getCart',controller.carts.getCarts);
  //更新购物车物品数量接口
  router.post('/carts/updateNum',controller.carts.updateNum)
  //提交订单
  router.post('/users/addOrders',controller.users.addOrders)
  //用户订单查询
  router.post('/users/findOrders',controller.users.findOrders)
  //管理员操作接口
  router.post('/administrator/login',controller.backStage.login)
  //查询所有用户注册信息
  router.post('/allusers',controller.backStage.allUsers)
  //后台更新用户数据

  //后台删除用户数据
  router.post('/stage/remove',controller.backStage.removeUser)
  //查询所有书籍数据
  router.post('/stage/allBooks',controller.backStage.allBooks)
  //删除书籍
  router.post('/stage/removeBook',controller.backStage.removeBook)
  //修改书籍
  router.post('/stage/updateBooks',controller.backStage.updateBooks)
  //上传书籍
  router.post('/stage/addBook',controller.backStage.addBooks)
  //上传书籍封面
  router.post('/stage/bookImg',controller.backStage.bookImg)
  router.post('/stage/upload',controller.upload.bookImg)
  //查询所有订单信息
  router.post('/orders/allOrders',controller.orders.allOrders)
  //删除订单信息
  router.post('/stage/removeOrder',controller.backStage.removeOrder)
  //修改订单
  router.post('/orders/updateOrders',controller.orders.updateOrders)
  
  //特价图书查询
  router.post('/products/special',controller.products.special)
  //添加特价图书
  router.post('/products/addSpecial',controller.products.addSpecial)
  //畅销图书查询
  router.post('/products/boom',controller.products.boom)
  //添加畅销图书
  router.post('/products/addBoom',controller.products.addBoom)
  //按评论数排序（分类）
  router.post('/products/rank',controller.products.rank)
};
 