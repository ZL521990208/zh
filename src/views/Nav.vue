<template>
	<div>
		<ul class="zl-container">
			<div class="con-home">
				<img src="https://mat1.gtimg.com/edu/scampus/index/img_logo.png" style="width: 200px; margin-top: -5px;" />
				<li class="zl-nav">
					<router-link to="/home"><h4>首页</h4></router-link>
				</li>
				<li class="zl-nav">
					<router-link to="/card"><h4>教务</h4></router-link>
				</li>
				<li class="zl-nav">
					<router-link to="/course"><h4>一卡通</h4></router-link>
				</li>
				<li class="zl-nav">
					<router-link to="/course"><h4>消息</h4></router-link>
				</li>
				<li class="right"><router-link to="/login/login">登录</router-link></li>
			</div>
		</ul>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {};
	},
	created() {}
};
</script>

<style lang="scss" scoped>
.con-home {
	padding: 10px;
	display: block;
	margin: auto;
	width: 80%;
	display: flex;
}
.zl-container {
	background-color: white;
	height: 52px;
	width: 120%;
	display: flex;
	align-items: center;
}
.zl-container img {
	height: 100%;
	width: auto;
	margin-right: 50px;
	margin-left: 110px;
}
.zl-nav {
	padding-top: 5px;
	width: 7%;
}
h4 {
	color: rgb(133, 144, 166);
	font-weight: 400;
}
h4:hover {
	color: black;
}

.right {
	position: relative;
	left: 250px;
	margin-top: 3px;
}
li {
	list-style-type: none;
}
.router-link-active {
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }

</style>
