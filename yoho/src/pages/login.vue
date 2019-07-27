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
		<section class="section">
			<aside>
				<div class="aside-bigbox">
					<img src="../../static/image/sao.jpg"/>
				</div>
			</aside>
			<article>
				<ul class="article-ul">
					<li>
				            <select >
				                    <option>澳大利亚</option>
				                    <option>韩国</option>
				                    <option>加拿大</option>
				                    <option>马来西亚</option>
				                    <option>美国</option>
				                    <option>日本</option>
				                    <option>新加坡</option>
				                    <option>英国</option>
				                    <option selected="selected">中国</option>
				                    <option >中国澳门</option>
				                    <option >中国台湾</option>
				                    <option >中国香港</option>
				            </select>
					</li>
					<li>
				            <span>+86</span>
				            <input  type="text"  placeholder="请输入手机号码" v-model="msg" @input="blu()">
				            <div>{{msgs}}</div>
				    </li>
				    
                    <li>
						    <div >
							    <div >
							        <span>请将下列图片点击翻转至正确方向</span>
							        <a @click="change()">换一批</a>
							    </div>
							    <div >
							        <ul class="imgul">
							            <li v-for="(item,index) in arr" v-if="ishow">
							                <img :src='item.SRC' @click="fn(index)" :class="{intop:item.ishow}">
							            </li>
							            <li v-for="(item,index) in arr1" v-if="!ishow">
							                <img :src='item.SRC' @click="fn(index)" :class="{intop:item.ishow}">
							            </li>
							            
							        </ul>
							
							        
							    </div>
						
						</div>
                    </li>
                    <li>
					        <input  type="text" placeholder="短信验证码">
					        <input  type="button"  v-model="zhen" @click="zheng()" :class="{incolor:incolo}">
					        <div v-if="incolo"><i class="fa fa-check-circle"></i>短信验证码已发送至您的手机，请查收</div>
				    </li>
				    <li >
				            <input placeholder="设置密码" type="password" @input="sho()" v-model="mgs" @focus="jiao()" @blur="dian()">
				            <div v-if="jia" class="firdiv">
				            	<span :class="{redcolor:edcolor}"><i class="fa fa-info-circle" :class="{redcolor:edcolor}"></i>{{fu}}</span><br />
				            	<span :class="{redcolor:ecolor}"><i class="fa fa-info-circle" :class="{redcolor:ecolor}"></i>由字母、数字组合，不能包含特殊符号</span>
				            </div>
				            <div class="sediv">
				                <span>低</span>
				                <span>中</span>
				                <span>高</span>
				            </div>
				           
                    </li>
                    <li>
                         <input placeholder="潮流口令(非必填)" type="text">
                         
                    </li>
			        <li>
			            <span>
			                                 注册即表示您已阅读并同意<br>
			                <a href="#">有货用户服务协议</a>
			                <a href="#">有货隐私条款</a>
			            </span>
                    </li>
                    <li>
			            
			            <router-link to="/sign">立即注册</router-link><i class="fa fa-qrcode"></i>
			            <div class="aep">
			            	<img src="../../static/image/01dce3f4c011e664dcfed9cd836377aeb7.png" alt=""   class="aeb"/><br />
			            	扫描二维码<br />
			            	下载YOHO手机端<br />
			            	<span>更多手机端下载</span>
			            	
			            </div>
			           
                    </li>
                    <li>
                                                   我已注册YOHO!BUY 有货账号
                           <a>快速登录</a>
                    </li>
				</ul>
			</article>
		</section>
	</div>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
export default {
	data:function(){
		return{
			arr:[
			 {SRC:"../../static/image/images.png",ishow:false},
			 {SRC:"../../static/image/images.png",ishow:false},
			 {SRC:"../../static/image/images.png",ishow:false},
			 {SRC:"../../static/image/images.png",ishow:false}
			],
			arr1:[
			 {SRC:"../../static/image/mages.jpg",ishow:false},
			 {SRC:"../../static/image/mages.jpg",ishow:false},
			 {SRC:"../../static/image/mages.jpg",ishow:false},
			 {SRC:"../../static/image/mages.jpg",ishow:false}
			],
			ishow:true,
			msg:"",
			msgs:"",
			zhen:"获取短信验证码",
			num:60,
			incolo:false,
			edcolor:false,
			fu:"密码只支持6-20位字符",
			mgs:'',
			ecolor:false,
			jia:false,
			
		}
	},
	methods:{
		fn(index){
			this.arr[index].ishow=!this.arr[index].ishow;
			this.arr1[index].ishow=!this.arr1[index].ishow;
		},
		change(){
		 this.ishow=!this.ishow
		},
		blu(){
			var reg=/^1[3|4|5|7|8][0-9]{9}$/;
			if(!reg.test(this.msg)){
			     this.msgs="请输入正确手机号码"
			}else{
				this.msgs=""
			}
		},
		zheng(){
			this.num=this.num-1
			this.zhen=this.num+"秒可重新发送"
			setTimeout(this.zheng,1000)
			this.incolo=true
		},
		sho(){
			var regs=/^[A-Za-z0-9]+$/
			this.edcolor=true
			if(this.mgs.length<=5||this.mgs.length>20){
				this.edcolor=true
			}else{
				this.edcolor=false
			}
			if(!regs.test(this.mgs)){
				this.ecolor=true
			}else{
				this.ecolor=false
			}
		},
		jiao(){
			this.jia=true
		},
		dian(){
			this.jia=false
		}
	}
	
}
</script>

<style scoped lang="less">
.redcolor{
	color: red!important;
	
}
.incolor{
	background: #777!important;
	color: white!important;
}
.intop{
	top:-60px;
}
.ietop{
	top:-120px;
}
.istop{
	top:-180px;
}
.aep{
	width: 200px;
	height: 260px;
	padding-top: 20px;
	position: absolute;
	left: 380px;
	top:-250px;
	text-align: center;
	border: 1px solid #777;
	display: none;
	span{
		font-size: 10px;
	}
}
.aeb{
	width: 150px;
	height: 150px;
	
}


*{
	 margin: 0;
    padding: 0;
}
ul li{
    list-style:none;
}
a{
    color: black;
    text-decoration: none;
    font-size: 10px;
}

/*头部start*/
.header {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid black;
}
.header .father {
  width: 75%;
  margin: 0 auto;
  height: 60px;
  box-sizing: border-box;
  padding: 20px 0;
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
/*主体start*/
.section {
  width: 100%;
  height: 700px;
  display: flex;
  text-align: left;
}
.section aside {
  width: 50%;
  height: 450px;
  padding: 100px 0;
}
.section aside .aside-bigbox {
  height: 400px;
  border-right: #dfdfdf solid 1px;
}
.section aside .aside-bigbox img {
  margin: 100px 250px;
}
.section article {
  padding-left: 50px;
  width: 50%;
  height: 550px;
  margin-top: 100px;
  border-left: none;
}
.section article .article-ul > li {
  margin-bottom: 20px;
  
}

.section article .article-ul > li:nth-of-type(2) {
 position: relative;
  border: #dbdbdb solid 1px;
  width: 250px;
  height: 45px;
  line-height: 45px;
 div{
  	position: absolute;
  	/*border: 1px solid red;*/
  	width: 150px;
  	height: 20px;
  	font-size: 10px;
    top:-30px;
    right: 20px;
    color:red
  }
}
.section article .article-ul > li:nth-of-type(2) span {
  color: #dbdbdb;
  display: inline-block;
  width: 50px;
  height: 35px;
  line-height: 35px;
  border-right: #dbdbdb solid 1px;
  text-align: center;
}
.section article .article-ul > li:nth-of-type(2) input {
  height: 42px;
  width: 190px;
  border: none;
  text-indent: 10px;
}
.section article .article-ul > li:nth-of-type(3) span {
  color: #b0b0b0;
  font-size: 10px;
}
.section article .article-ul > li:nth-of-type(3) a {
  color: red;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
}
.section article .article-ul > li:nth-of-type(4){
	div{
		display: inline;
		font-size: 13px;
		i{
			color: deepskyblue;
		}
	}
}
.section article .article-ul > li:nth-of-type(4) input {
  height: 45px;
  border: #dbdbdb solid 1px;
  text-indent: 10px;
}
.section article .article-ul > li:nth-of-type(4) input:nth-of-type(2) {
  border: none;
  background: red;
  color: white;
  width: 120px;
}
.section article .article-ul > li:nth-of-type(5){
	position: relative;
}
.section article .article-ul > li:nth-of-type(5) .firdiv{
	border:1px solid #777;
	position: absolute;
	left: 350px;
	top:-10px;
	width: 150px;
	height: 50px;
	font-size: 13px;
	color: #777;
	padding: 20px 10px;
	i{
		color: deepskyblue;
	}
	span{
		display:block;
	}
} 
.section article .article-ul > li:nth-of-type(5) .sediv {
  position: relative;
}
.section article .article-ul > li:nth-of-type(5) .sediv span {
  background: #e8e8e8;
  padding: 0 8px;
  position: absolute;
  display: inline-block;
  top: 3px;
  font-size: 8px;
  left: 280px;
  color: #b9b9b9;
}
.section article .article-ul > li:nth-of-type(5) .sediv span:nth-of-type(2) {
  left: 240px;
}
.section article .article-ul > li:nth-of-type(5) .sediv span:nth-of-type(3) {
  left: 200px;
}
.section article .article-ul > li:nth-of-type(5) input {
  border: #dbdbdb solid 1px;
  height: 45px;
  text-indent: 10px;
  width: 300px;
}
.section article .article-ul > li:nth-of-type(6) input {
  height: 45px;
  text-indent: 10px;
}
.section article .article-ul > li:nth-of-type(7) {
  font-size: 10px;
  color: #dbdbdb;
}
.section article .article-ul > li:nth-of-type(7) a {
  color: red;
  text-decoration: underline;
  display: inline-block;
  margin: 5px 0;
  margin-right: 10px;
}
.section article .article-ul > li:nth-of-type(8) {
  height: 45px;
  position: relative;
}
.section article .article-ul > li:nth-of-type(8):hover .aep{
	display: block;
}
.section article .article-ul > li:nth-of-type(8) a{
  display: inline-block;
  width: 250px;
  height: 45px;
  line-height: 45px;
  background: #555555;
  color: white;
  border: none;
  font-size: 20px;
  text-align: center;
}
.section article .article-ul > li:nth-of-type(8) i {
  display: inline-block;
  width: 43px;
  height: 43px;
  line-height: 43px;
  border: #dbdbdb solid 1px;
  position: absolute;
  top: 0;
  left: 320px;
  text-align: center;
  font-size: 35px;
  color: #585858;
}
.section article .article-ul > li:nth-of-type(9) {
  color: #dbdbdb;
  font-size: 10px;
}
.section article .article-ul > li:nth-of-type(9) a {
  color: red;
  text-decoration: underline;
}
.section article select {
  border: #dbdbdb solid 1px;
  color: #9a9a9a;
  width: 150px;
  height: 30px;
}
.section .imgul {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.section .imgul li {
  width: 60px;
  height: 60px;
  position: relative;
  border: 1px solid #dbdbdb;
  overflow: hidden;
}
.section .imgul li img {
  width: 240px;
  height: 240px;
  position: absolute;
  left: 0;
}
.section .imgul li:nth-child(2) img {
  left: -60px;
}
.section .imgul li:nth-child(3) img {
  left: -120px;
}
.section .imgul li:nth-child(4) img {
  left: -180px;
}
/*主体end*/
</style>