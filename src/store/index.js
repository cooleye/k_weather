const store = {
    state:{
        position: {
            latitude:39.92, //纬度
            longitude:116.41, //经度
        },
        location: {name:'余杭'},
        // 所在位置
        address:"欧美金融城🇬🇧中心T6",
        now:{},
        air:{}, //空气质量
        // 三天的天气
        threeDay:{

        },
        cities:[

        ],
        hotCities:["北京市","上海市","广州市","深圳市","珠海市","佛山市","南京市","苏州市","厦门市","南宁市","成都市","长沙市","福州市","杭州市","武汉市","青岛市","西安市","太原市","石家庄市","沈阳市","重庆市","天津市"]
    },
    savePostion(position){
        this.state.position = position;
    },
    saveLocation(location){
        this.state.location = location
    },
    saveThreeDay(data){
        this.state.threeDay = data
    },
    saveNow(now){
        this.state.now = now
    },
    saveAir(data){
        this.state.air = data
    }


}

export default store;