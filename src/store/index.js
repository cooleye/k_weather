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
            {id:0,name:"杭州市",category:"轻度污染",maxTemp:12,minTemp:6,temp:9},
            {id:1,name:"上海市",category:"良好",maxTemp:10,minTemp:6,temp:8},
            {id:2,name:"北京市",category:"优",maxTemp:5,minTemp:-6,temp:0},
            {id:3,name:"重庆市",category:"良好",maxTemp:14,minTemp:8,temp:12},
            {id:4,name:"深圳市",category:"优",maxTemp:18,minTemp:12,temp:14},
            {id:5,name:"回龙观",category:"轻度污染",maxTemp:5,minTemp:-6,temp:1},
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