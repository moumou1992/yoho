<template>
    <div class="footer">
        <div class="center-cont">
        <div class="footer-top">
            <ul>
                <li><i class="icon-h-sign"></i>&nbsp;<span>100% </span>  品牌正品</li>
                <li><i class="icon-ambulance"></i>&nbsp;<span>7天</span> 无理由退换货</li>
                <li><i class="icon-comments-alt"></i>&nbsp;<span>便捷 </span>在线客服</li>
            </ul>
        </div>
        <table>
            <tr>
                <td>新手专区</td>
                <td>会员中心	</td>
                <td>购物指南</td>
                <td>支付方式</td>
                <td>配送方式</td>
                <td>售后服务</td>
                <td>APP常见问题</td>
            </tr>
            <tr>
                <td><a href="#">注册登录</a></td>
                <td><a href="#">会员制度</a>	</td>
                <td><a href="#">发票</a></td>
                <td><a href="#">在线支付</a></td>
                <td><a href="#">配送说明</a></td>
                <td><a href="#">退换货政策</a></td>
                <td><a href="#">IPhone版</a></td>
            </tr>
            <tr>
                <td><a href="#">购物结算</a></td>
                <td><a href="#">会员优惠</a>	</td>
                <td><a href="#">尺码对照</a></td>
                <td><a href="#">货到付款</a></td>
                <td><a href="#">运费说明</a></td>
                <td><a href="#">退换货流程</a></td>
                <td><a href="#">Android版</a></td>
            </tr>
            <tr>
                <td><a href="#">下单支付</a></td>
                <td><a href="#">账户管理</a>	</td>
                <td><a href="#">尺码解读</a></td>
                <td><a href="#">分期支付</a></td>
                <td><a href="#">验货签收</a></td>
                <td><a href="#">投诉与建议</a></td>
                <td><a href="#">wap版</a></td>
            </tr>
            <tr>
                <td><a href="#">收货评价</a></td>
                <td><a href="#">密码管理</a>	</td>
                <td><a href="#">商品咨询</a></td>
                <td><a href="#">优惠券、有货币</a></td>
                <td><a href="#">收货样品</a></td>
                <td><a href="#">在线客服</a></td>
                <td><a href="#">IPAD版</a></td>
            </tr>
        </table>
       <div class="footer-bottom">
               <div>
                    <img src="../../static/icon/picture.png" alt="" />
                    <img src="../../static/icon/credit-flag3.png" alt="" />
                    <img src="../../static/icon/isc2.png" alt="" />
               </div> 
               <div class="foot-nav">
                   <a href="#">返回首页</a>
                <span>|</span>
                <a href="#">YOHO!BUY 有货</a>
                <span>|</span>
                <a href="#">新力传媒</a>
                <span>|</span>
                <a href="#">联系我们</a>
                <span>|</span>
                <a href="#">商家入驻</a>
                <span>|</span>
                <a href="#">隐私条款</a>
                <span>|</span>
                <a href="#">友情链接</a>
                <span>|</span>
                <a href="#">潮流品牌大全</a>
                <span>|</span>
                <a href="#">潮流品类大全</a>
                <span>|</span>
                <a href="#">潮流产品大全</a>
                <span>|</span>
                <a href="#">潮流资讯</a>
                <span>|</span>
                <a href="#">穿衣搭配(男生版)</a>
                <span>|</span>
                <a href="#">穿衣搭配(女生版)</a>
                <span>|</span>
                <a href="#">潮流人气</a>
                <span>|</span>
                <a href="#">潮流潮品</a>
                <span>|</span>
                <a href="#">潮流视频</a>
                <span>|</span>
                <a href="#">苏公网安备 32010502010132号</a>
                <span>|</span>
                <a href="#">出版物经营许可证</a>
                <span>|</span>
                <a href="#">苏B2-20120395</a>
                <span>|</span>
                <a href="#">食品经营许可证</a>
          
               </div>
       </div>
       <div>
             <p>CopyRight © 2007-2019 南京新与力文化传播有限公司 苏ICP备09011225号
                    NewPower Co. 版权所有 江苏省南京市建邺区嘉陵江东街18号南京国家广告产业园5栋17，18楼 025-87781000</p>
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
    .footer{
    width: 100%;
    height: 300px;
    background: black;
    color: white;
    .footer-top{
        height: 40px;
        line-height: 40px;
        ul li{
            float: left;
            font-size: 10px;
            margin-right:30px;
            span{
                color: red;
            }
        }
    }
    table{
        padding-top: 10px;
        margin-left: 0px;
        width: 100%;
        height: 130px;
        border-top: #DDDDDD solid 1px;
           td{
                   width: 100px;
                   text-align: center;
                   margin-right: 65px;
                    
            }
    }
    a{
        color: #666;
        font-size: 6px; 
    }
    span{
        color: #666;
        font-size: 6px; 
    }
   .footer-bottom{
       margin-top:10px;
       margin-bottom: 5px;
       width: 100%;
       height: 60px;
       display: flex;
       >div{
           width: 230px;
           .sizing;
       }
       .foot-nav{
           width: 850px;
           margin-left: 45px;
           a{
               margin: 0 8px;
           }
       }
       img{
           width: 70px;
           height: 30px;
       }
   } 
   .copy{
       p{
           text-align: center;
       }
   }
}
</style>