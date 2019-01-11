<template>
	<div id="home">
		<div class="left">
			<Navigation></Navigation>
		</div>
		<div class="right">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import Navigation from '@/components/Navigation'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Navigation
		}
	}
</script>

<style scoped>
	#home{
		width: 100%;
		height: 100%;
		display: flex;
	}
	.left{
		flex:1;
		height: 100%;
		border-right: 1px solid #DDDDDD;
	}
	.right{
		flex:5;
		height: 100%;
	}
</style>
