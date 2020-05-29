<template>
	<div>
				<h3>一卡通</h3>
			
			
		</div>
</template>

<script>
	export default{
		name:'follow',
		data(){
			return{
				specials:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res =>{
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style>
</style>
