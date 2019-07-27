<template>
	<div>
		<!--头部start-->
		<header class="header">
			<div class="father">
				<img src="../../static/image/logo_e.png"/>
				<ul class="header-nav">
					<li>Hi~<router-link to="/sign">[请登录]</router-link><router-link to="/login">[免费注册]</router-link></li>
					<li class="myli">
						<a href="#">MY有货<i class="fa fa-caret-down"></i></a>
						<ul class="my">
							<li><a href="">我的收藏</a></li>
							<li><a href="">优惠券</a></li>
						</ul>
						
					</li>
					<li><a href="#">订单中心</a></li>
					<li class="myli"><a href="#">客户服务<i class="fa fa-caret-down"></i></a>
						<ul class="my">
							<li><a href="">在线客服</a></li>
							<li><a href="">帮助中心</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
		<!--头部end-->
		<!--主体start-->
		<div class="baozhang"><i class="fa fa-exclamation-circle"></i>为保障账户安全与正常使用，依《网络安全法》相关要求，会员账号需绑定手机号。<span>如您尚未绑定手机号，请尽快完成，</span>感谢您对Yoho!Buy有货的理解与支持！</div>
		
		<section class="section">
			
			<aside>
				<div class="aside-bigbox">
					<img src="../../static/image/01ea4451757e763c6ba32816e61ffe6235.jpg"/>
				</div>
			</aside>
			
			
			<article>
				<div id="box">
					<div class="article-fa">
						
						<div class="mi1"><span>密码登录在这里<i></i></span><img @click="change()" src="../../static/image/ma.png"/></div>
						<router-view></router-view>
					</div>
				</div>
				<!--<template id="saoma">
						<div class="erweima">
							<div>手机扫码，安全登录</div>
							<div><img src="../../static/image/01dce3f4c011e664dcfed9cd836377aeb7.png"/></div>
							<div><img src="../../static/image/saomiao.png"/><span>打开手机Yoho!Buy有货<br>扫一扫登录</span></div>
							<div>下载Yoho!Buy有货手机APP</div>
					   </div>
				</template>-->
				<template id="mima">
					<ul class="md">
						<li>会员登录<span>中国+86<i class="icon-angle-down"></i></span></li>
						<li><input type="button" value="普通登录"/><input type="button" value="手机验证码登录"/></li>
						<li><input type="text" placeholder="邮箱/手机号码"/></li>
						<li><input type="text" placeholder="密码"/></li>
						<li>请将下列图片点击翻转至正确方向 <span>换一批</span></li>
						<li><div><img src="../../static/image/images.png"/></div>
							<div><img src="../../static/image/images.png"/></div>
							<div><img src="../../static/image/images.png"/></div>
							<div><img src="../../static/image/images.png"/></div>
						</li>
						<li><input type="button" value="登录"/></li>
						<li><i class="fa fa-check-square"></i>记住登录状态<span>忘记密码？|</span><span>快速注册</span></li>
						<li>
							<i class="fa fa-weixin"></i>
							<i class="fa fa-weibo"></i>
							<i class="fa fa-font"></i>
							
						</li>
					</ul>
				</template>
				
			</article>
			
			
		</section>
		<!--主体end-->
	</div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
export default{
}
</script>

<style scoped lang="less">
*{
    padding: 0;
    margin: 0;
}
.header {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid black;
}
.header .father {
  width: 75%;
  margin: 0 auto;
  height: 40px;
  box-sizing: border-box;
  padding: 10px 0;
}
.header .father .header-nav {
  float: right;
  display: flex;
  justify-content: space-between;
  width: 350px;
  font-size: 10px;
}
.header .father .header-nav li {
  padding: 5px 7px;
}
.header .father .header-nav .myli:hover .my {
  display: block;
}
.header .father .header-nav .myli:hover {
  background: #eaeceb;
}
.header .father .header-nav .myli {
  position: relative;
  width: 58px;
}
.header .father .header-nav .myli i {
  font-size: 15px;
}
.header .father .header-nav .myli .my {
  display: none;
  position: absolute;
  top: 26px;
  left: 0;
  height: 50px;
  z-index: 1;
  background: #eaeceb;
  width: 70px;
}
.header .father .header-nav .myli .my li {
  border-top: #dddddd solid 1px;
}
.header .father img {
  width: 160px;
}
/*头部end*/
.section{
	display: flex;
	margin-top: 20px;
	justify-content: space-around;
}
aside{
	margin-top: 150px;
	margin-left: 100px;
	
}
article{
	margin-right: 250px;
	border-left: 1px solid #B5B6A8;
	padding-left: 50px;
}
.baozhang {
  width: 75%;
  margin: 0 auto;
 
  font-size: 10px;
  padding: 2px 30px;
  background: #f5f5f5;
  margin-top: 30px;
}
.baozhang span {
  color: red;
}
.baozhang i {
  font-size: 12px;
}
ul li {
  list-style: none;
}
/*父组件start*/
.article-fa {
  width: 280px;
  overflow: hidden;
}
.article-fa .mi1 {
  overflow: hidden;
  margin-top: 0;
  float: right;
  font-size: 10px;
  color: #9b9b9b;
  width: 160px;
}
.article-fa .mi1 img {
  float: right;
}
.article-fa .mi1 span {
  text-indent: 10px;
  display: inline-block;
  width: 110px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #b5b6a8;
  float: left;
  position: relative;
}
.article-fa .mi1 span i {
  position: absolute;
  width: 10px;
  height: 10px;
  border: #b5b6a8 solid 1px;
  transform: rotateZ(45deg);
  top: 7px;
  right: -7px;
  border-bottom: none;
  border-left: none;
  background: white;
}
/*父组件end*/
/*子组件一start*/
/*.erweima div {
  text-align: center;
}
.erweima div:nth-of-type(1) {
  margin-top: 60px;
  font-size: 15px;
  font-weight: bolder;
}
.erweima div:nth-of-type(2) img {
  width: 150px;
  height: 150px;
  margin-top: 15px;
}
.erweima div:nth-of-type(3) {
  display: flex;
  margin: 10px 0;
}
.erweima div:nth-of-type(3) span {
  color: #a89bb5;
  font-size: 10px;
  display: inline-block;
  margin-left: 15px;
  text-align: left;
}
.erweima div:nth-of-type(3) img {
  margin-left: 40px;
  height: 26px;
}
.erweima div:nth-of-type(4) {
  font-size: 13px;
  color: red;
  margin: 30px 0;
}*/
/*子组件一 end*/
/*子组件二start*/
.md {
  margin-top: 20px;
  
}
.md li {
  width: 250px;
  height: 45px;
}
.md li:nth-child(1) {
  line-height: 45px;
}
.md li:nth-child(1) span {
  float: right;
  color: #d0c4c1;
  font-size: 12px;
}
.md li:nth-child(1) span i {
  font-size: 10px;
}
.md li:nth-child(2) {
  position: relative;
}
.md li:nth-child(2) input {
  border: none;
  border-radius: 10px;
  height: 20px;
  font-size: 8px;
  width: 140px;
}
.md li:nth-child(2) input:nth-child(2) {
  float: right;
  background: #cccccc;
}
.md li:nth-child(2) input:nth-child(1) {
  position: absolute;
  left: 0;
  top: 0
/*  background:#000000;*/
  /*color: white;*/
}
.md li:nth-child(3) input {
  border: #f1f1f1 solid 1px;
  width: 250px;
  height: 40px;
  text-indent: 10px;
}
.md li:nth-child(4) input {
  border: #f1f1f1 solid 1px;
  width: 250px;
  height: 40px;
  text-indent: 10px;
}
.md li:nth-child(5) {
  font-size: 10px;
  color: #c9d2d6 ;
}
.md li:nth-child(5) span {
  color: red;
  display: inline-block;
  margin-left: 10px;
}
.md li:nth-child(6) {
  display: flex;
  overflow: hidden;
  width: 300px;
  height: 70px;
}
.md li:nth-child(6) div {
  width: 60px;
  height: 60px;
  position: relative;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  margin-right: 5px;
}
.md li:nth-child(6) div img {
  width: 240px;
  height: 240px;
  position: absolute;
  left: 0;
}
.md li:nth-child(6) div:nth-child(2) img {
  left: -60px;
}
.md li:nth-child(6) div:nth-child(3) img {
  left: -120px;
}
.md li:nth-child(6) div:nth-child(4) img {
  left: -180px;
}
.md li:nth-child(7) {
  margin-top: 10px;
}
.md li:nth-child(7) input {
  background: #ff1901;
  color: white;
  border: none;
  width: 260px;
  height: 45px;
}
.md li:nth-child(8) {
  color: #b9b9b9;
  font-size: 8px;
  margin-top: 10px;
}
.md li:nth-child(8) i {
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  background: #b9b9b9;
  color: white;
  font-size: 5px;
  margin-right: 3px;
}
.md li:nth-child(8) span:nth-of-type(1) {
  display: inline-block;
  margin-left: 45px;
}
.md li:nth-child(8) span:nth-of-type(2) {
  color: red;
}
.md li:nth-child(9) {
  height: 60px;
  text-align: center;
}
.md li:nth-child(9) i {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #11cd6e;
  border-radius: 50%;
  text-align: center;
  color: white;
  margin: 0 20px;
  font-size: 20px;
}
.md li:nth-child(9) i:nth-child(2) {
  background: #ec2f3a;
}
.md li:nth-child(9) i:nth-child(3) {
  background: #ff7a18;
}
/*子组件二end*/
/*主体end*/
	
</style>