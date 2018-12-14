<template>
  <div class="login">
  	<div id="web_bg" style="background-image: url(../../static/img/login_background.jpg);"></div>
		<img src="../../static/img/people.png" style="position:absolute;width: 450px;/* height: 370px; */left: 140px;background-size:cover;margin-top: 220px;">
		<img src="../../static/img/WechatIMG634.png" style="position:absolute;width: 100px;margin-top:110px;left: 120px;background-size:cover;">
		<img src="../../static/img/title.png" style="position:absolute;width: 290px;margin-top: 134px;left: 240px;background-size:cover;">
		    <img src="../../static/img/welcomelogin.png" style="position:absolute;height: 30px;margin-top: 50px;left: 90px;background-size:cover;">
    <!--<img src="/img/loginfont.png" style="position:absolute;height: 24px;margin-top:110px;left:70px;background-size:cover;">-->
    <div>
        <!--<form method="post" action="/home">-->
            <input type="text" name="uid" placeholder="账户名" class="form-control" style="width: 240px;margin-top:110px;"/>
            <input type="password" name="pwd" placeholder="账户密码" class="form-control" style="width: 240px;margin-top:24px;"/>
            <button type="submit" @click="jumpHome()" class="btn btn-danger" style="border:none;margin-top:24px;width: 240px;;background-image: url(/img/login_button.png)"><strong>登 录</strong></button>
            <span style="color:red;border:none;margin-top:24px;width: 100%;display: block" th:text="${msg}">密码错误</span>
        <!--</form>-->
    </div>
    </div>
</template>

<script>
	export default {
	name: 'Login',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods:{
		jumpHome(){
			this.$router.push("/home")
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {
	width: 100%;
	height: 100%;
	background: url(../../static/img/login_background.jpg) 100% 100%;
}

#web_bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-width: 1000px;
	z-index: -10;
	zoom: 1;
	background-repeat: no-repeat;
	background-size: cover;
	-webkit-background-size: cover;
	-o-background-size: cover;
	background-position: bottom right;
}

img {
	margin: 0 auto;
	margin-top: 10%;
}

.form-control {
	display: -webkit-inline-box;
}

#sys-title {
	font-family: FZHanZhenGuangBiao;
	font-weight: 400;
	font-size: 36px;
	color: rgb(77, 77, 77);
	font-style: normal;
	letter-spacing: 0px;
	line-height: 44px;
	text-decoration: none;
}
</style>
