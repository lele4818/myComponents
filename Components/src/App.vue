<template>
  <div id="app">
		<router-view/>
  </div>
</template>

<script>
import Home from "@/components/Home"
export default {
  name: 'App',
	components:{
		Home
	}
}
</script>

<style>
	html,body{
		width: 100%;
		height: 100%;
	}	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		display: flex;
		width: 100%;
		height: 100%;
	}
</style>
