<template>
    <div class="yoho-header">
        <div class="top-wrapper clearfix">
            <div class="center-cont">
                <div class="tw-left-t">
                    <i class="fa fa-bars fa-lg"></i><a href="#">YOHO!BUY有货</a>
                </div>
                <div class="tw-left-i">
                    <i class="fa fa-exclamation-circle fa-lg"></i><a href="#">关于防诈骗的重要提醒</a>
                </div>
                <div class="tw-right">
                    <ul>
                        <li><span>Hi~</span>[<a href="login.html">请登录</a>][<a href="sign1.html">免费注册</a>]</li>
                        <li><span class="tag-seprate"></span><a href="#">MY有货</a><i class="fa fa-angle-down fa-lg"></i>
                        </li>
                        <li><span class="tag-seprate"></span><i class="fa fa-file-text-o"></i><a href="order.html">我的订单</a></li>
                        <li><span class="tag-seprate"></span><i class="fa fa-heart-o"></i><a href="#">我的收藏</a></li>
                        <li><span class="tag-seprate"></span><i class="fa fa-envelope-o"></i><a href="#">消息</a></li>
                        <li><span class="tag-seprate"></span><i class="fa fa-headphones"></i><a href="#">客户服务</a></li>
                        <li><span class="tag-seprate"></span><i class="fa fa-wechat wechat-c"></i><a href="#"
                                class="wechat-c">关注有货</a></li>
                        <li><span class="tag-seprate"></span><i class="fa fa-mobile fa-lg mobile-c"></i><a href="#"
                                class="mobile-c">手机版</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="head-wrapper clearfix">
            <div class="center-cont">
                <h1 class="main-logo"><a href="#" class="main-link"></a></h1>
                <ul class="main-nav-list">
                    <li class="boys curr">
                        <h5 class="name-cn"><a href="#">男生</a></h5>
                        <h5 class="name-en"><a href="#">BOYS</a></h5>
                    </li>
                    <li class="girls">
                        <h5 class="name-cn"><a href="#">女生</a></h5>
                        <h5 class="name-en"><a href="#">GIRLS</a></h5>
                    </li>
                    <li class="kids">
                        <h5 class="name-cn"><a href="#">潮童</a></h5>
                        <h5 class="name-en"><a href="#">KIDS</a></h5>
                    </li>
                    <li class="life">
                        <h5 class="name-cn"><a href="#">创意生活</a></h5>
                        <h5 class="name-en"><a href="#">LIFE STYLE</a></h5>
                    </li>
                </ul>
                <div class="func-area">
                    <div class="search-inp">
                        <form>
                            <input type="text" class="search-key" placeholder="58折封顶 折上2折9折">
                            <a href="#" class="search-btn"></a>
                        </form>
                        <ul class="search-hot">
                            <li><a href="#">短袖T恤</a></li>
                            <li><a href="#">短裤</a></li>
                            <li><a href="#">拖鞋</a></li>
                            <li><a href="#">Lee限时折上满999-200</a></li>
                        </ul>
                    </div>
                    <div class="go-cart">
                        <a href="shoppingcart.html"><img src="../../static/icon/shopping.png" alt="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-wrapper clearfix">
            <div class="center-cont">
                <ul class="nav-list">
                    <li><a href="#">新品到着</a></li>
                    <li><a href="#">品牌一览</a></li>
                    <li><a href="#">服饰</a></li>
                    <li><a href="#">鞋履</a></li>
                    <li><a href="#">包袋</a></li>
                    <li><a href="#">配饰·其他</a></li>
                    <li><a href="#">逛</a></li>
                    <li><a href="#">SALE</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
.sizing{box-sizing: border-box;}
    .top-wrapper{
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: #f4f4f4;
    li{
        float: left;
        padding-right: 10px;
        color:#949494;
    }
    a{
        color:#949494;
    }
    i{
        padding:0 5px;
        vertical-align:center;
    }
    .tw-left-t{
        position: relative;
        color:#949494;
        float: left;
        padding: 0 5px;
    }
    .tw-left-i{
        position: relative;
        margin-left: 15px;
        color:#d71d32;
        float: left;
        padding: 0 5px;
        a{color:#d71d32;}
    }
    .tw-right{
        float:right;
        li:first-child{
            color: #000;
            a{padding: 0 5px;}
        }
        .tag-seprate{
            width: 0;
            margin:10px 10px 0 0;
            height: 14px;
            float: left;
            border-left: 1px solid #dcdcdc;
        }
    }
    .wechat-c{
        color: #86bf4b;
    }
    .mobile-c{
        color:#d0021b;
    }
}
//top end
.head-wrapper{
    width: 100%;
    .main-logo{
        background:url("../../static/icon/logo-en.png")no-repeat 50%;
        width: 182px;
        height: 53px;
        left: 43%;
        margin-top: 22px;
        position: absolute;
    }
    .main-nav-list{
        // display: inline-block;
        vertical-align: top;
        margin-top: 47px;
        float: left;
        li{
            float: left;
            padding: 8px 22px 5px;
            text-align: center;
            a{
                color:#000;
                font-size: 16px;
            }
            .name-en{
                    a{
                        color: #8e8e8e;font-size: 10px;
                    }
                }
        }.curr{
            background-color: #3a3a3a;
            a{color:#fff;}
        }
    }
    .func-area{
        float: right;
        width: 378px;
        padding-right: 18px;
        margin-top: 40px;
        .search-inp{
            width: 320px;
            height: 28px;
            box-sizing: border-box;
            display: inline-block;
            form{
                background-color: #3a3a3a;
                overflow: hidden;
                .search-key{
                    width: 240px;
                    height: 28px;
                    border: 1px solid #3a3a3a;
                    background-color: #fff;
                    .sizing;
                    outline: none;
                    padding-left: 10px;
                }
                .search-btn{
                    background:url("../../static/icon/search.png")no-repeat 50%;
                    width: 78px;
                    height: 28px;
                    float: right;
                    border: none;
                    cursor: pointer;
                }
            }
            .search-hot{
                width: 320px;
                height: 16px;
                margin-top: 5px;
                .sizing;
                overflow: hidden;
                display: inline-block;
                li{
                    float: left;
                    margin-right: 18px;
                    a{color:#8e8e8e}
                }
            }
        }
        .go-cart{
            width: 30px;
            height: 30px;
            float:right;
            cursor: pointer;
            position: relative;
            img{
                width:100%;
            }
        }
    }
}
//head-main end
.nav-wrapper{
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #3a3a3a;
    .nav-list{
        width: 1150px;
        height: 40px;
        li{
            float: left;
            line-height: 40px;
            padding:0 46px 0 10px;
            .sizing;
            margin-right: 36px;
            // display: inline-block;
            a{
                color:#fff;
                font-size: 14px;
                line-height: 14px;
                display: inline-block;
                position: relative;
            }
        }
    }
}
</style>