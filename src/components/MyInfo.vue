<template>
  <div class="my-info" v-if="isMobile">
    <div id="head-portrait">
			<img src="@assets/img/head.jpg" alt="">
		</div>
		<div id="name">DOUMJUN</div>
    <div id="intro">
			<div>个人简介/肥宅一枚√</div>
    </div>
		<div id="link">
			<a href="https://space.bilibili.com/8096424" target="_blank">
				<img src="@assets/img/bilibili.svg" alt="bilibili" >
			</a>
			<a href="https://github.com/DouMJun" target="_blank">
			<img src="@assets/img/github.svg" alt="Gitgub">
			</a>
			<img src="@assets/img/zhihu.svg" alt="知乎">
			<img src="@assets/img/email.svg" alt="Email">
		</div>
  </div>
</template>


<script>
export default {
	name: 'MyInfo',
	computed: {
		isMobile() {
			return window.screen.width > 980
		}
	}
}
</script>

<style scoped>
  .my-info {
    width: 300px;
    height: 400px;
    background-color: rgb(255, 255, 255);
    margin-right: -310px;
    padding: 20px 20px;
    border-radius: 20px;

		position: absolute;
		right: 0;
		top: 0;

		box-shadow:0px 4px 9px rgb(208, 204, 204);
		display: flex;
		flex-direction: column;
		align-items: center;
  }
  #head-portrait {
    width: 100px;
    height: 100px;
    border-radius:50px;
    background-color: purple;
    overflow: hidden;
    margin: 30px auto 0px;
  }

	#head-portrait img {
		width: 100px;
		height: 100px;
	}
	#name {
		margin: 20px 0px;
		font-size: 1.5em;
		color: black;
	}
  #intro {
		width: 100%;
    height: 100px;
		border-top: solid rgba(187, 187, 187, 0.8) 1px;
		border-bottom: solid rgba(187, 187, 187, 0.8) 1px;
		padding: 10px;
  }
	#intro div {
		margin:0 auto;
	}

	#link {
		width: 100%;
		margin-top: 10px;
		display: flex;
		justify-content: center;
	}

	#link img {
		margin: 0 5px;
		width: 30px;
		height: 30px;
	}

</style>