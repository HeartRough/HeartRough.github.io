<template>
	<view class="content">
		<!-- #ifdef H5 -->
		<swiper indicator-dots="true" autoplay="true" interval="3000" style="height:750upx;width:auto;">
			<swiper-item class="content"><image src="/static/1.jpg" mode="widthFix"></swiper-item>
			<swiper-item class="content"><image src="/static/2.jpg" mode="widthFix"></swiper-item>
		</swiper>
		<!-- #endif -->
		<button type="primary" @click="toPath_oneday" style="margin-top:10upx;">一日游</button>
		<view style="flex: 1;flex-direction: row;">
			<button type="primary" @click="toPath_halfday" style="background-color: #0081FF;">半日游</button>
			<button type="primary" @click="toPath_teamplay" style="background-color: #0091ff;">游戏组队</button>
		</view>
		
		<button type="primary" @click="toPath_together" style="background-color: #0071ff;">匹配游</button>
	<view>
		
	</view>
		
	
	</view>
</template>

<script>
	export default{ 
		data(){
			
		},
		methods:{
			toPath_teamplay(){
				uni.redirectTo({
					url:"../../teamPlay/teamPlay"
				})
				// uni.switchTab({
				// 	url:"/pages/tabBar/Message/Message"
				// })
			},
			toPath_halfday(){
				uni.redirectTo({
					url:"../../halfday/halfday"
				})
			}
		}
		
	}
</script>

<style>
	.content{
		flex:1;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
