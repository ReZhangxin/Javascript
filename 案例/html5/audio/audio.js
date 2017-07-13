(function(win){
	var tzAudio = {
		audioDom:null,//音乐对象
		songs:[],//音乐容器
		index:0,//播放器音乐的起始位置
		init:function(){
			this.audioDom = document.createElement("audio");//创建一个音乐播放器
		},
		//添加音乐
		add:function(src){
			//讲音乐放入的音乐容器中
			this.songs.push(src);
			//初始化播放第一首音乐
			this.audioDom.src = this.songs[this.index];
		},
		//播放音乐
		play:function(){
			this.audioDom.play();
		},
		//暂停音乐
		stop:function(){
			this.audioDom.pause();
		},
		//时间控制
		time:function(callback){
			var $this = this;
			$this.audioDom.oncanplaythrough = function(){
				//获取播放器的总时长
				var totalTime = this.duration;
				//格式化时长
				var timer = $this.formateTime(totalTime);
				//定义返回
				if(callback){
					var json = {
						duration:totalTime,
						time:timer
					};
					callback.call(json);
				}
			};
		},
		//格式化时间
		formateTime:function(time){
			var m = parseInt(time / 60);
			var s = parseInt(time % 60);
			var time = (m<10?("0"+m):m)+":"+(s<10?("0"+s):s);
			return time;
		},
		//静音
		shound:function(){

		},
		//进度百分比
		percent:function(callback){
			var $this = this;
			$this.audioDom.ontimeupdate=function(){
				//计算播放中的时间进度
				var per = Math.floor((this.currentTime/this.duration)*100);
				//用总时长减去播放去时长获取剩余的时间
				var stime = this.duration - this.currentTime;
				//格式化时间
				var timer = $this.formateTime(stime);
				var stimer = $this.formateTime(this.currentTime);
				//定义返回
				var json = {
					per:per,
					time:timer,
                    stime:stimer
				};
				if(callback)callback.call(json);
			}
		},
		//播放音乐
		playMusic:function(){
			//从音乐数组中取一首进行播放
			this.audioDom.src = this.songs[this.index];
			//播放音乐
			this.audioDom.play();
		},
		//上一首
		prev:function(){
			this.index--;//边界控制
			this.playMusic();
		},
		//下一首
		next:function(){
			this.index++;//边界控制
			this.playMusic();
		}
	};

	//绑定到window对象
	win.audio = tzAudio;

})(window);