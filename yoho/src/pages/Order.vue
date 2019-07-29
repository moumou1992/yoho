<template>
	<div class="container">
		<!--填写订单开始-->
		<div class="article_nav">
		<div class="order-title"></div>
		<div class="article_nav_li">
					<ul class="dian">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<ul class="zi">
						<li>查看购物车</li>
						<li>填写订单</li>
						<li>付款，完成购买</li>
					</ul>
					<span></span>
				</div>
			</div>
		<!--填写订单结束-->
		<!--收货信息开始-->
		<div class="address-wrap">
			<div class="block-title">收货信息
				<span class="new-address-btn">新增收货地址<i>+</i></span>
			</div>
		</div>
		<!--收货信息结束-->
		</div>
</template>

<script>
//	import Header from '@/components/Header'
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
//			Header
		}
	}
</script>

<style>
	* {
	margin: 0px;
	padding: 0px;
	list-style: none;
	text-decoration: none;
}
.container{
	width: 990px;
	margin: 50px auto;
}
/*填写订单开始*/
.order-title {
	background-image: url(../../static/orderimg/sprite.cart.png);
	content: "";
	display: block;
	background-position: 0px -151px;
	background-size: 460px 217px;
	width: 196px;
	height: 50px;
}

.article_nav {
	height: 150px;
	/*width: 73%;*/
	margin-top: 5px;
	margin: 0px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.article_nav .article_nav_li {
	position: relative;
}

.article_nav .article_nav_li ul {
	display: flex;
	width: 73%;
}

.article_nav .article_nav_li .dian {
	width: 400px;
	height: 20px;
	display: flex;
	justify-content: space-between;
}

.article_nav .article_nav_li .dian li {
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: #b0b0b0;
}

.article_nav .article_nav_li .zi {
	width: 400px;
	height: 20px;
	display: flex;
	justify-content: space-between;
}

.article_nav .article_nav_li .zi li {
	font-size: 15px;
}

.article_nav .article_nav_li .zi li:nth-child(2) {
	margin-left: 30px;
}

.article_nav .article_nav_li span {
	display: block;
	position: absolute;
	top: 4px;
	width: 400px;
	height: 3px;
	border-bottom: 2px solid #b0b0b0;
}
/*填写订单结束*/
/*收货信息开始*/
.address-wrap{
	font-size: 14px;
	color: black;
	border: 1px solid #e8e8e8;
	margin-bottom: 40px;
}
.block-title{
	height: 38px;
	line-height: 40px;
	font-size: 16px;
	padding: 0 24px;
	background-color:#f5f5f5;
	border-bottom: 1px solid #E8E8E8;
}
.block-title .new-address-btn{
	float: right;
	color: red;
	font-size: 14px;
}
.block-title .new-address-btn i{
	vertical-align: bottom;
}

</style>