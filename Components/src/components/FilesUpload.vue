<!-- 文件上传组件,支持拖拽 -->
<template>
	<div id="fileUpload">
		<div class="steps">
			<Steps :current="current">
				<Step title="选择文件"></Step>
				<Step title="文件上传"></Step>
				<Step title="文件预览"></Step>
			</Steps>
			<div id="fileZone" class="fileZone">
				<div v-if="files.length == 0">
					<a @click="chooseFiles" style="text-decoration: underline;">选择文件上传</a>
					<span>或者拖拽上传</span>
					<div class="tipsDiv">
						<p class="tips">仅支持Excel文件</p>
					</div>
				</div>
				<input id="addFile" type="file" multiple="multiple" style="display: none"
				@change="getFiles"
				/>
				<div class="progressDiv" v-for="(item,index) in files" :key="index">
					<span>{{item.name}}</span>
					<i-progress :percent="50"></i-progress>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				files:[],//文件信息
				current:0,//上传进度
			}
		},
		methods:{
			//处理文件信息
			handleFiles(files){
				var filesData = [];
				for (var i = 0; i !== files.length; i++) {
					var currName = files[i].name.slice(files[i].name.lastIndexOf(".")+1).toLowerCase();
					if( currName != "xls" && currName != "xlsx"){
						MAT.utils.notific("只能上传Excel文件","error")
						return null;
					}else{
						filesData.push(files[i]);
					}
				}
				return filesData;
			},
			//获取文件
			getFiles(){
				this.current = 1;
				if(this.handleFiles(document.getElementById("addFile").files) != null){ //e.dataTransfer.files文件信息
					this.handleFiles(document.getElementById("addFile").files).forEach((item)=>{
						this.uploadFile(item);
					});
				}
			},
			//点击上传文件
			chooseFiles(){
				document.getElementById("addFile").click();
			},
			//拖拽相关事件监听
			onDrag(e){
				e.stopPropagation();
				e.preventDefault();
			},
			onDrop(e){
				e.stopPropagation();
				e.preventDefault();
				this.current = 1;
				if(this.handleFiles(e.dataTransfer.files) != null){ //e.dataTransfer.files文件信息
					this.handleFiles(e.dataTransfer.files).forEach((item)=>{
						this.uploadFile(item);
					})
				}
			},
			uploadFile(file){
				var item = {
					name:file.name,
					uploadPercentage:67
				};
				this.files.push(item);
				var filesData = new FormData();
				filesData.append('file',filesData);
				
			/* 调用接口代码写在下面
				... 
				...
				`onUploadProgress` 允许为上传处理进度事件
				onUploadProgress: function (progressEvent) {
					// 对原生进度事件的处理,实时更新上传进度
				},
				上传成功后清空,document.getElementById("addFile").value="",为了可以上传相同文件
			*/
			},
			//支持拖拽
			registDraggaleEvent(){
				var dropbox = document.getElementById('fileZone');
				dropbox.addEventListener('dragenter', this.onDrag, false);//文件初次进入拖动区,触发dragenter事件
				dropbox.addEventListener('dragover', this.onDrag, false);//文件在拖动区来回拖动，不断触发dragover
				dropbox.addEventListener('drop', this.onDrop, false);//文件在拖动区域,鼠标松开，触发drop
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.registDraggaleEvent();
			});
		}
	}
</script>

<style scoped>
	#fileUpload{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.steps{
		padding-top: 50px;
		width: 50%;
	}
	.fileZone{
		width: 100%;
		display: flex;
		height: 400px;
		margin-top: 30px;
		justify-content: center;
		align-items: center;
		box-shadow: 5px 5px 5px 5px #DDDDDD;
		border: dashed 2px #2d8cf0
	}
	.tipsDiv{
		display: flex;
		justify-content: center;
		margin-top: 5px;
		color: rgba(10,18,32,.38)
	}
</style>