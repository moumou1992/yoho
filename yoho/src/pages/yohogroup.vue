<template>
  <div class="container">
			<!--头部开始-->
			<div class="hd">
				<div class="hd-wrap">
					<h1 class="logo"><a href="/" rel="nofollow" title="yoho!"><img src="../../static/yohogroupimg/logo12.png"/></a></h1>
					<ul class="nav">
						<li>
							<a href="#" target="_blank"><span>YOHO!BUY</span><span>潮流购物</span></a>
						</li>
						<li>
							<a href="#" target="_blank"><span>YOHO!潮流志</span><span>男生潮流</span></a>
						</li>
						<li>
							<a href="#" target="_blank"><span>YOHO!GIRL</span><span>女生潮流</span></a>
						</li>
						<li>
							<a href="#" target="_blank"><span>YOHOOD</span><span>潮流嘉年华</span></a>
						</li>
						<li>
							<a href="#" target="_blank"><span>Mars</span><span>新鲜好去处</span></a>
						</li>
					</ul>
				</div>
			</div>
			<!--头部结束-->
			<!--中间部分开始-->
			<div class="bd" style="margin:-40px 0 0 0;">
				<!--动画部分开始-->
				<div class="banner-box">
					<div class="banner-top">
<!--						<img src="../../static/yohogroupimg/banner大图.png" width="1040px" height="300px"/>-->
								<img class="ground" src="../../static/yohogroupimg/buldings/ground.png" width="930px" />
					</div>
				</div>
				<!--动画部分结束-->
				<!--yoho部分开始-->
				<div class="warp" style="width: 1080px;">
					<div class="section yohobuy">
						<h2><a href="#">
							YOHO!BUY
						</a></h2>
					<div class="yohobuy-logo section-shadow">
						<a href="#"><img src="../../static/yohogroupimg/有货.jpg"/></a>
					</div>
					<div class="yohobuy-content section-shadow">
						<a href="#"><img src="../../static/yohogroupimg/backpack.jpg"/></a>
					</div>
					<div class="yohobuy-sale section-shadow">
						<a href="#"><img src="../../static/yohogroupimg/lifestyle.jpg"/></a>
					</div>
					</div>
					<div class="section yohoboys">
						<h2><a href="#">
							YOHO!潮流志
						</a></h2>
						<div class="yohoboys-pic section-shadow">
						<a href="#">
							<img src="../../static/yohogroupimg/yohoboys.jpg" />
						</a>	
						</div>
					</div>
					<div class="section yohogirls">
						<h2><a href="#">
							YOHO!GIRL
						</a></h2>
						<div class="yohogirls-pic section-shadow">
							<a href="#">
								<img src="../../static/yohogroupimg/yohogirls.jpg" />
							</a>
						</div>
					</div>
				</div>
				<div class="download-box">
					<h2>
						<img src="../../static/yohogroupimg/dian.png" />
						<span>YOHO!在线产品 欢迎点击下载</span>
						<img src="../../static/yohogroupimg/dian.png" />
					</h2>
					<div class="inner-wrap">
						<a href="#">
							<img src="../../static/yohogroupimg/bigtu.jpg" />
						</a>
					</div>
				</div>
			</div>	
			<!--底部开始-->
			<div class="ft">
				<ul class="ft-nav ">
					<li>
						<a href="/about/index/xlcm" target="_blank" rel="nofollow">关于我们</a>
					</li>
					<li>
						<a href="/about/index/lxwm" target="_blank" rel="nofollow">联系我们</a>
					</li>
					<li>
						<a href="/about/index/cpyc" target="_blank" rel="nofollow">诚聘英才</a>
					</li>
					<li>
						<a href="/about/index/ystk" target="_blank" rel="nofollow">隐私条款</a>
					</li>
				</ul>
				<div class="ft-bd">
					<div class="ft-line">
						<img src="../../static/yohogroupimg/ft-line.png" />
					</div>
					<p>CopyRight &copy; 2007-2016 南京新与力文化传播有限公司</p>
					<p class="p1">
						<a href="#" target="_blank" rel="nofollow">苏ICP备09011225号</a> NewPower Co. All Right 经营许可证编号：苏B2-20120395
						<a href="#" target="_blank" rel="nofollow">
							<img src="../../static/yohogroupimg/商标.png" />
						</a>
					</p>
				</div>
			</div>
			<!--底部结束-->
		</div>
</template>

<script>
export default {
  name: 'yohogroup',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped="scoped">
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
}
html{
    height: 1300px;
}
li{
    list-style: none;
}
/*//头部开始*/
.hd{
    .hd-wrap{
        position: relative;
        .logo{
            margin-left:200px;
            margin-top: 20px;
            width: 168px;
            height: 60px;
/*//          float: left;*/
        }
        .nav {
            margin-top: -50px;
            margin-left: 500px;
           li{
            float: left;
/*//          display: inline-block;*/
            padding: 0px 15px;
/*//          padding-left: 5px;*/
            text-align: center;
            line-height: 20px;
            text-decoration: none;
            font-size: 14px;
            a{
                background: url(../../static/yohogroupimg/nav-line.png) no-repeat left center;
                display: block;
                padding: 0 15px;
            }
            span{
                display: block;
                color: black;
/*//              text-decoration: none;*/
                
            }
        } 
        }
    }
}
/*//动画部分*/
.banner-box{
    .banner-top{
        width: 1040px;
        height: 400px;
        
    }
    .ground{
    			
					margin-top: 190px;
					margin-left: 270px;
        }
}
/*//yohobu部分开始*/
.warp{
    margin: 15px 0 auto;
    height: 400px;
    position: relative;
    .section{
        float: left;
    }
    .yohobuy{
        position: absolute;
        margin: 0 15px 0 0;
        width: 290px;
        left: 250px;
        h2{
            font-size: 18px;
            float: left;
            height: 38px;
            width: 100%;
            background: #cccccc;
            line-height: 35px;
            text-align: center;
            a{
                color: white;
            }
        }
        .yohobuy-logo{
            img{
                 width: 144px;
                 height: 132px;
                 margin-left: -140px;
            }
        }
        .yohobuy-content{
            img{
                width: 144px;
                height: 132px;
                position: absolute;
                top: 38px;
                left: 147px;
            }
        }
        .yohobuy-sale{
            img{
                width: 288px;
            }
        }
    }
    .yohoboys{
        position: absolute;
        margin: 0 15px 0 0;
        width: 290px;
        left: 590px;
        h2{
            font-size: 18px;
            float: left;
            height: 38px;
            width: 100%;
            background: #cccccc;
            line-height: 35px;
            text-align: center;
            a{
                color: white;
            }
        }
        .yohoboys-pic{
            img{
                width: 100%;
                height: 316px;
            }
        }
    }
    .yohogirls{
        position: absolute;
        margin: 0 15px 0 0;
        width: 290px;
        left: 935px;
         h2{
            font-size: 18px;
            float: left;
            height: 38px;
            width: 100%;
            background: #cccccc;
            line-height: 35px;
            text-align: center;
            a{
                color: white;
            }
        }
        .yohogirls-pic{
            img{
                width: 100%;
                height: 316px;
            }
        }
    }
}
.download-box{
    h2{
        height: 60px;
        font-size: 16px;
        text-align: center;
         img{
        width: 5px;
        height: 5px;
        position: relative;
        top: -8%;
    }
    span{
        line-height: 60px;
        margin: 0 18px;
    }
    }
    .inner-wrap{
        text-align: center;
    }
   
}
/*//底部开始*/
.ft{
    .ft-nav{
        width: 500px;
        margin: 0px auto;
        li{
            float: left;
            line-height: 50px;
            padding: 0 30px;
            a{
                color: black;
                font-size: 16px;
            }
        }
    }
    .ft-bd{
            position: relative;
            padding: 16px 0;
            .ft-line{
/*//              background-image: url(../img/ft-line.png);*/
                position: absolute;
                top:50px;
                left: 250px;
            }
            p{
                color: #c0c0c0;
                line-height: 18px;
                text-align: center;
/*//              margin-top: 50%;*/
                position: absolute;
                top:95px;
                left: 600px;
                font-size: 12px;
            }
            .p1{
                position: absolute;
                left: 530px;
/*//              line-height: 38px;*/
                top: 110px;
                 a{
                color:#c0c0c0 ;
            }
            }
           
        }
        
}

</style>
