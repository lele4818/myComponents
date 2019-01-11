<template>
	<div id="navi">
		<div class="wrapper">
			<div class="ulDiv">
				<ul>
					<li v-for="(item,index) in menuList" :key="index">
						<a @click="goToPage">{{item.name}}</a>
						<span class="date">{{item.date}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menuList:[
					{
						name:"多文件上传",
						date:"2019-1-11"
					}
				]
			};
		},
		methods:{
			goToPage(){
				this.$router.push({path: '/home/fileUpload'});
			}
		}
	}
</script>

<style scoped>
	.wrapper{
		padding-top: 30px;
	}
	.ulDiv{
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.date{
		color: rgba(10,18,32,.38);
		margin-left: 5px;
	}
</style>
