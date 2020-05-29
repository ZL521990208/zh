<template>
	<div>
		<div class="container">
			<div class="left"></div>
			<div class="container-home">
				<div class="container-left">
				<ul class="navbar">
					<li class="c"><router-link to="/home"><h4 style="color: black;">首页</h4></router-link></li>
					<li class="c"><router-link to="/home/follow"><h4>一卡通</h4></router-link></li>
					<li class="c"><router-link to="/home/hot"><h4>资讯</h4></router-link></li>
					<li class="c"><router-link to="/home/hot"><h4>课程</h4></router-link></li>
			</ul>
			<router-view />
			</div>
			
			<div class="container-right">
				<div class="card">
					<div class="row">
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
						<h4>一卡通</h4>
					</div>
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
						<h4>不知道</h4>
					</div>
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
						<h4>不知道</h4>
					</div>
					</div>
					
					<div class="row">
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
						<h4>不知道</h4>
					</div>
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
						<h4>不知道</h4>
					</div>
					<div class="w-col-4">
						<img src="../assets/imges/icon_yikatong.png" alt="图标">
					<h4>不知道</h4>
					</div>
					</div>
					
				</div>
			</div>
			
			
			</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:'special',
		data(){
			return{
				specials:[]
			};
		},
		created() {
			this.axios.get('').then(res =>{
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.row{
		display: flex;
		flex-wrap: wrap;
	}
	.container{
		background-color: rgb(246,246,246);
		margin-top: 15px;
		display: flex;
	}
	.left{
		width: 10%;
	}
	.container-home{
		
		display: block;
		    margin: auto;
		    width: 80%;
			border-radius: 5px;
			display: flex;
	}
	.right{
		width: 12%;
	}
	.container-left{
		background-color: rgb(255,255,255);
		width: 68%;
	}
	.navbar{
		height: 60px;
		border-bottom: 1px solid rgb(246,246,246);
		display: flex;
		align-items: center;
		
		
	}
	.c{
		width: 8%;
		margin-left: 15px;
	}
	.c h4{
		color: black;
	}
	.container-right{
		
		width: 30%;
		
		height: 2000px;
		margin-left: 5px;
	}
	.card{
		background-color: rgb(255,255,255);
		
	}
	.w-col-4{
		text-align: center;
		height: 100px;
		position: relative;
		top: 30px;
	}
	.w-col-4 h4{
		font-family:serif;
		margin-top: 10px;
	}
	img{
		height: 50px;
		width: 50px;
	}
</style>

