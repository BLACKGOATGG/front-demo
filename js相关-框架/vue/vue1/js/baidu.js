new Vue({
	el: "body",
	data: {
		myData: [],
		value: "",
		num: -1
	},
	methods: {
		get: function() {
			this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
				wd: this.value
			}, {
				jsonp: "cb"
			}).then(function(res) {
				this.myData = res.data.s;
				if(this.myData.length > 0) {
					$(".mainbox ul").css("border", "1px solid #ccc")
				} else {
					$(".mainbox ul").css("border", "none")
				}
			}, function(err) {

			})
		},
		xia: function() {
			if(this.myData.length - 1 == this.num) {
				this.num = -1
			}
			this.num++
		},
		shang: function() {
			if(this.num == 0) {
				this.num = this.myData.length
			}
			this.num--
		},
		jianting: function() {
			this.num = -1
		},
		huiche: function() {
			if(this.value != "") {
				if(this.num == -1) {
					window.open('https://www.baidu.com/s?wd=' + this.value);
					this.value = '';
				} else if(this.num != -1) {
					//alert("不是-1")
					this.value = this.myData[this.num]
					this.num = -1
				}
			}
		},
		clicks: function(index) {
			//alert(index)
			this.num = index
		},
		dblclicks: function(index) {
			//alert(index)
			this.value = this.myData[index];
			this.get();
			this.num = -1
		},
		ss_btn_down: function() {
			window.open('https://www.baidu.com/s?wd=' + this.value);
		}
	}
})