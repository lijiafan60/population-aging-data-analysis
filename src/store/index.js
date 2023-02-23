import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        year: "2011",
        provinceName: "",
        mapName: "ChinaMap",
        currentGdp: [],
        currentDependencyRatio: [],
        allGdp: {
            "2022": {
                "北京市": "41611",
                "天津市": "16311.3",
                "河北省": "42370.4",
                "山西省": "25642.6",
                "内蒙古自治区": "23158.7",
                "辽宁省": "28975.1",
                "吉林省": "13070.2",
                "黑龙江省": "15901",
                "上海市": "44652.8",
                "江苏省": "122875.6",
                "浙江省": "77715.4",
                "安徽省": "45045",
                "福建省": "53109.9",
                "江西省": "32074.7",
                "山东省": "87435.1",
                "河南省": "61345.1",
                "湖北省": "53734.9",
                "湖南省": "48670.4",
                "广东省": "129118.6",
                "广西壮族自治区": "26300.9",
                "海南省": "6818.2",
                "重庆市": "29129",
                "四川省": "56749.8",
                "贵州省": "20164.6",
                "云南省": "28954.2",
                "西藏自治区": "2132.6",
                "陕西省": "32772.7",
                "甘肃省": "11201.6",
                "青海省": "3610.1",
                "宁夏回族自治区": "5069.6",
                "新疆维吾尔自治区": "17741.3"
            },
            "2021": {
                "北京市": "41045.6",
                "天津市": "15685.1",
                "河北省": "40397.1",
                "山西省": "22870.4",
                "内蒙古自治区": "21166",
                "辽宁省": "27569.5",
                "吉林省": "13163.8",
                "黑龙江省": "14858.2",
                "上海市": "43653.2",
                "江苏省": "117392.4",
                "浙江省": "74040.8",
                "安徽省": "42565.2",
                "福建省": "49566.1",
                "江西省": "29827.8",
                "山东省": "82875.2",
                "河南省": "58071.4",
                "湖北省": "50091.2",
                "湖南省": "45713.5",
                "广东省": "124719.5",
                "广西壮族自治区": "25209.1",
                "海南省": "6504.1",
                "重庆市": "28077.3",
                "四川省": "54088",
                "贵州省": "19458.6",
                "云南省": "27161.6",
                "西藏自治区": "2080.2",
                "陕西省": "30121.7",
                "甘肃省": "10225.5",
                "青海省": "3385.1",
                "宁夏回族自治区": "4588.2",
                "新疆维吾尔自治区": "16311.6"
            },
            "2020": {
                "北京市": "35943.3",
                "天津市": "14008",
                "河北省": "36013.8",
                "山西省": "17835.6",
                "内蒙古自治区": "17258",
                "辽宁省": "25011.4",
                "吉林省": "12256",
                "黑龙江省": "13633.4",
                "上海市": "38963.3",
                "江苏省": "102807.7",
                "浙江省": "64689.1",
                "安徽省": "38061.5",
                "福建省": "43608.6",
                "江西省": "25782",
                "山东省": "72798.2",
                "河南省": "54259.4",
                "湖北省": "43004.5",
                "湖南省": "41542.6",
                "广东省": "111151.6",
                "广西壮族自治区": "22120.9",
                "海南省": "5566.2",
                "重庆市": "25041.4",
                "四川省": "48501.6",
                "贵州省": "17860.4",
                "云南省": "24555.7",
                "西藏自治区": "1902.7",
                "陕西省": "26014.1",
                "甘肃省": "8979.7",
                "青海省": "3009.8",
                "宁夏回族自治区": "3956.3",
                "新疆维吾尔自治区": "13800.7"
            },
            "2019": {
                "北京市": "35445.1",
                "天津市": "14055.5",
                "河北省": "34978.6",
                "山西省": "16961.6",
                "内蒙古自治区": "17212.5",
                "辽宁省": "24855.3",
                "吉林省": "11726.8",
                "黑龙江省": "13544.4",
                "上海市": "37987.6",
                "江苏省": "98656.8",
                "浙江省": "62462",
                "安徽省": "36845.5",
                "福建省": "42326.6",
                "江西省": "24667.3",
                "山东省": "70540.5",
                "河南省": "53717.8",
                "湖北省": "45429",
                "湖南省": "39894.1",
                "广东省": "107986.9",
                "广西壮族自治区": "21237.1",
                "海南省": "5330.8",
                "重庆市": "23605.8",
                "四川省": "46363.8",
                "贵州省": "16769.3",
                "云南省": "23223.8",
                "西藏自治区": "1697.8",
                "陕西省": "25793.2",
                "甘肃省": "8718.3",
                "青海省": "2941.1",
                "宁夏回族自治区": "3748.5",
                "新疆维吾尔自治区": "13597.1"
            },
            "2018": {
                "北京市": "33106",
                "天津市": "13362.9",
                "河北省": "32494.6",
                "山西省": "15958.1",
                "内蒙古自治区": "16140.8",
                "辽宁省": "23510.5",
                "吉林省": "11253.8",
                "黑龙江省": "12846.5",
                "上海市": "36011.8",
                "江苏省": "93207.6",
                "浙江省": "58002.8",
                "安徽省": "34010.9",
                "福建省": "38687.8",
                "江西省": "22716.5",
                "山东省": "66648.9",
                "河南省": "49935.9",
                "湖北省": "42022",
                "湖南省": "36329.7",
                "广东省": "99945.2",
                "广西壮族自治区": "19627.8",
                "海南省": "4910.7",
                "重庆市": "21588.8",
                "四川省": "42902.1",
                "贵州省": "15353.2",
                "云南省": "20880.6",
                "西藏自治区": "1548.4",
                "陕西省": "23941.9",
                "甘肃省": "8104.1",
                "青海省": "2748",
                "宁夏回族自治区": "3510.2",
                "新疆维吾尔自治区": "12809.4"
            },
            "2017": {
                "北京市": "29883",
                "天津市": "12450.6",
                "河北省": "30640.8",
                "山西省": "14484.3",
                "内蒙古自治区": "14898.1",
                "辽宁省": "21693",
                "吉林省": "10922",
                "黑龙江省": "12313",
                "上海市": "32925",
                "江苏省": "85869.8",
                "浙江省": "52403.1",
                "安徽省": "29676.2",
                "福建省": "33842.4",
                "江西省": "20210.8",
                "山东省": "63012.1",
                "河南省": "44824.9",
                "湖北省": "37235",
                "湖南省": "33828.1",
                "广东省": "91648.7",
                "广西壮族自治区": "17790.7",
                "海南省": "4497.5",
                "重庆市": "20066.3",
                "四川省": "37905.1",
                "贵州省": "13605.4",
                "云南省": "18486",
                "西藏自治区": "1349",
                "陕西省": "21473.5",
                "甘肃省": "7336.7",
                "青海省": "2465.1",
                "宁夏回族自治区": "3200.3",
                "新疆维吾尔自治区": "11159.9"
            },
            "2016": {
                "北京市": "27041.2",
                "天津市": "11477.2",
                "河北省": "28474.1",
                "山西省": "11946.4",
                "内蒙古自治区": "13789.3",
                "辽宁省": "20392.5",
                "吉林省": "10427",
                "黑龙江省": "11895",
                "上海市": "29887",
                "江苏省": "77350.9",
                "浙江省": "47254",
                "安徽省": "26307.7",
                "福建省": "29609.4",
                "江西省": "18388.6",
                "山东省": "58762.5",
                "河南省": "40249.3",
                "湖北省": "33353",
                "湖南省": "30853.5",
                "广东省": "82163.2",
                "广西壮族自治区": "16116.6",
                "海南省": "4090.2",
                "重庆市": "18023",
                "四川省": "33138.5",
                "贵州省": "11792.4",
                "云南省": "16369",
                "西藏自治区": "1173",
                "陕西省": "19045.8",
                "甘肃省": "6907.9",
                "青海省": "2258.2",
                "宁夏回族自治区": "2781.4",
                "新疆维吾尔自治区": "9630.8"
            },
            "2015": {
                "北京市": "24779.1",
                "天津市": "10879.5",
                "河北省": "26398.4",
                "山西省": "11836.4",
                "内蒙古自治区": "12949",
                "辽宁省": "20210.3",
                "吉林省": "10018",
                "黑龙江省": "11690",
                "上海市": "26887",
                "江苏省": "71255.9",
                "浙江省": "43507.7",
                "安徽省": "23831.2",
                "福建省": "26819.5",
                "江西省": "16780.9",
                "山东省": "55288.8",
                "河南省": "37084.1",
                "湖北省": "30344",
                "湖南省": "28538.6",
                "广东省": "74732.4",
                "广西壮族自治区": "14797.8",
                "海南省": "3734.2",
                "重庆市": "16040.5",
                "四川省": "30342",
                "贵州省": "10541",
                "云南省": "14960",
                "西藏自治区": "1043",
                "陕西省": "17898.8",
                "甘肃省": "6556.6",
                "青海省": "2011",
                "宁夏回族自治区": "2579.4",
                "新疆维吾尔自治区": "9306.9"
            },
            "2014": {
                "北京市": "22926",
                "天津市": "10640.6",
                "河北省": "25208.9",
                "山西省": "12094.7",
                "内蒙古自治区": "12158.2",
                "辽宁省": "20025.7",
                "吉林省": "9966.5",
                "黑龙江省": "12170.8",
                "上海市": "25269.8",
                "江苏省": "64830.5",
                "浙江省": "40023.5",
                "安徽省": "22519.7",
                "福建省": "24942.1",
                "江西省": "15667.8",
                "山东省": "50774.8",
                "河南省": "34574.8",
                "湖北省": "28242.1",
                "湖南省": "25881.3",
                "广东省": "68173",
                "广西壮族自治区": "13587.8",
                "海南省": "3449",
                "重庆市": "14623.8",
                "四川省": "28891.3",
                "贵州省": "9173.1",
                "云南省": "14041.7",
                "西藏自治区": "939.7",
                "陕西省": "17402.5",
                "甘肃省": "6518.4",
                "青海省": "1847.7",
                "宁夏回族自治区": "2473.9",
                "新疆维吾尔自治区": "9264.5"
            },
            "2013": {
                "北京市": "21134.6",
                "天津市": "9945.4",
                "河北省": "24259.6",
                "山西省": "11987.2",
                "内蒙古自治区": "11392.4",
                "辽宁省": "19208.8",
                "吉林省": "9427.9",
                "黑龙江省": "11849.1",
                "上海市": "23204.1",
                "江苏省": "59349.4",
                "浙江省": "37334.6",
                "安徽省": "20584",
                "福建省": "22503.8",
                "江西省": "14300.2",
                "山东省": "47344.3",
                "河南省": "31632.5",
                "湖北省": "25378",
                "湖南省": "23545.2",
                "广东省": "62503.4",
                "广西壮族自治区": "12448.4",
                "海南省": "3115.9",
                "重庆市": "13027.6",
                "四川省": "26518",
                "贵州省": "7973.1",
                "云南省": "12825.5",
                "西藏自治区": "828.2",
                "陕西省": "15905.4",
                "甘肃省": "6014.5",
                "青海省": "1713.3",
                "宁夏回族自治区": "2327.7",
                "新疆维吾尔自治区": "8392.6"
            },
            "2012": {
                "北京市": "19024.7",
                "天津市": "9043",
                "河北省": "23077.5",
                "山西省": "11683.1",
                "内蒙古自治区": "10470.1",
                "辽宁省": "17848.6",
                "吉林省": "8678",
                "黑龙江省": "11015.8",
                "上海市": "21305.6",
                "江苏省": "53701.9",
                "浙江省": "34382.4",
                "安徽省": "18341.7",
                "福建省": "20190.7",
                "江西省": "12807.7",
                "山东省": "42957.3",
                "河南省": "28961.9",
                "湖北省": "22590.9",
                "湖南省": "21207.2",
                "广东省": "57007.7",
                "广西壮族自治区": "11303.6",
                "海南省": "2789.4",
                "重庆市": "11595.4",
                "四川省": "23922.4",
                "贵州省": "6742.2",
                "云南省": "11097.4",
                "西藏自治区": "710.2",
                "陕西省": "14142.4",
                "甘肃省": "5393.1",
                "青海省": "1528.5",
                "宁夏回族自治区": "2131",
                "新疆维吾尔自治区": "7411.8"
            },
            "2011": {
                "北京市": "17188.8",
                "天津市": "8112.5",
                "河北省": "21384.7",
                "山西省": "10894.4",
                "内蒙古自治区": "9458.1",
                "辽宁省": "16354.9",
                "吉林省": "7734.6",
                "黑龙江省": "9935",
                "上海市": "20009.7",
                "江苏省": "48839.2",
                "浙江省": "31854.8",
                "安徽省": "16284.9",
                "福建省": "17917.7",
                "江西省": "11584.5",
                "山东省": "39064.9",
                "河南省": "26318.7",
                "湖北省": "19942.5",
                "湖南省": "18915",
                "广东省": "53072.8",
                "广西壮族自治区": "10299.9",
                "海南省": "2463.8",
                "重庆市": "10161.2",
                "四川省": "21050.9",
                "贵州省": "5615.6",
                "云南省": "9523.1",
                "西藏自治区": "611.5",
                "陕西省": "12175.1",
                "甘肃省": "4816.9",
                "青海省": "1370.4",
                "宁夏回族自治区": "1931.8",
                "新疆维吾尔自治区": "6532"
            }
        },
        allDependencyRatio: {
            "2021": {
                "北京市": "19.3",
                "天津市":
                    "22.5", "河北省":
                    "22.7", "山西省":
                    "19.4", "内蒙古自治区":
                    "19.1", "辽宁省":
                    "26.7", "吉林省":
                    "23.2", "黑龙江省":
                    "22.8", "上海市":
                    "24", "江苏省":
                    "25", "浙江省":
                    "19.5", "安徽省":
                    "23.4", "福建省":
                    "16.6", "江西省":
                    "18.6", "山东省":
                    "24.3", "河南省":
                    "21.9", "湖北省":
                    "22.5", "湖南省":
                    "23.6", "广东省":
                    "12.6", "广西壮族自治区":
                    "19.5", "海南省":
                    "15.5", "重庆市":
                    "26.5", "四川省":
                    "26.3", "贵州省":
                    "18.2", "云南省":
                    "16.2", "西藏自治区":
                    "8.4", "陕西省":
                    "20.3", "甘肃省":
                    "19.2", "青海省":
                    "14.2", "宁夏回族自治区":
                    "14.4", "新疆维吾尔自治区":
                    "11.5"
            },
            "2020": {
                "北京市": "17.8",
                "天津市": "20.6",
                "河北省": "21.1",
                "山西省": "18.2",
                "内蒙古自治区": "17.9",
                "辽宁省": "24.4",
                "吉林省": "21.5",
                "黑龙江省": "21.1",
                "上海市": "22",
                "江苏省": "23.6",
                "浙江省": "18.1",
                "安徽省": "22.8",
                "福建省": "15.9",
                "江西省": "18",
                "山东省": "22.9",
                "河南省": "21.3",
                "湖北省": "21.1",
                "湖南省": "22.6",
                "广东省": "11.8",
                "广西壮族自治区": "19",
                "海南省": "15",
                "重庆市": "25.5",
                "四川省": "25.3",
                "贵州省": "17.9",
                "云南省": "15.4",
                "西藏自治区": "8.1",
                "陕西省": "19.2",
                "甘肃省": "18.5",
                "青海省": "12.3",
                "宁夏回族自治区": "13.7",
                "新疆维吾尔自治区": "11.1"
            },
            "2019": {
                "北京市":
                    "14.7", "天津市":
                    "15.6", "河北省":
                    "19.3", "山西省":
                    "14.9", "内蒙古自治区":
                    "13.3", "辽宁省":
                    "21.6", "吉林省":
                    "17.7", "黑龙江省":
                    "18.1", "上海市":
                    "22.1", "江苏省":
                    "21.2", "浙江省":
                    "19.3", "安徽省":
                    "20.7", "福建省":
                    "13.7", "江西省":
                    "14.6", "山东省":
                    "23.8", "河南省":
                    "17.2", "湖北省":
                    "18.3", "湖南省":
                    "19.7", "广东省":
                    "11.4", "广西壮族自治区":
                    "15", "海南省":
                    "13.1", "重庆市":
                    "22.6", "四川省":
                    "23.2", "贵州省":
                    "17.5", "云南省":
                    "13.7", "西藏自治区":
                    "8.9", "陕西省":
                    "16.4", "甘肃省":
                    "16.1", "青海省":
                    "11.9", "宁夏回族自治区":
                    "13.6", "新疆维吾尔自治区":
                    "11.9"
            },
            "2018": {
                "北京市":
                    "14.4", "天津市":
                    "13.9", "河北省":
                    "18.4", "山西省":
                    "13.9", "内蒙古自治区":
                    "12.8", "辽宁省":
                    "20", "吉林省":
                    "16.4", "黑龙江省":
                    "15.8", "上海市":
                    "19.9", "江苏省":
                    "19.9", "浙江省":
                    "17.7", "安徽省":
                    "19.4", "福建省":
                    "12.9", "江西省":
                    "13.9", "山东省":
                    "22.7", "河南省":
                    "16.3", "湖北省":
                    "17.3", "湖南省":
                    "18.4", "广东省":
                    "11", "广西壮族自治区":
                    "14.7", "海南省":
                    "11.3", "重庆市":
                    "21.1", "四川省":
                    "21.8", "贵州省":
                    "17.1", "云南省":
                    "13.2", "西藏自治区":
                    "8", "陕西省":
                    "15", "甘肃省":
                    "15.9", "青海省":
                    "10.4", "宁夏回族自治区":
                    "12.7", "新疆维吾尔自治区":
                    "10.2"
            },
            "2017": {
                "北京市":
                    "16.3", "天津市":
                    "14.6", "河北省":
                    "16.8", "山西省":
                    "11.9", "内蒙古自治区":
                    "14.3", "辽宁省":
                    "18.6", "吉林省":
                    "16.2", "黑龙江省":
                    "15.6", "上海市":
                    "18.8", "江苏省":
                    "19.2", "浙江省":
                    "16.6", "安徽省":
                    "19.1", "福建省":
                    "13.2", "江西省":
                    "14.2", "山东省":
                    "18.6", "河南省":
                    "15.9", "湖北省":
                    "17", "湖南省":
                    "17.5", "广东省":
                    "10.3", "广西壮族自治区":
                    "14.3", "海南省":
                    "11.4", "重庆市":
                    "20.6", "四川省":
                    "19.8", "贵州省":
                    "14.5", "云南省":
                    "11.6", "西藏自治区":
                    "8.2", "陕西省":
                    "15.1", "甘肃省":
                    "14.3", "青海省":
                    "11", "宁夏回族自治区":
                    "11.6", "新疆维吾尔自治区":
                    "10.4"
            },
            "2016": {
                "北京市":
                    "15.2", "天津市":
                    "14.6", "河北省":
                    "15.4", "山西省":
                    "11.5", "内蒙古自治区":
                    "12.1", "辽宁省":
                    "17.4", "吉林省":
                    "14.2", "黑龙江省":
                    "15.3", "上海市":
                    "16.8", "江苏省":
                    "18.6", "浙江省":
                    "15.4", "安徽省":
                    "16.2", "福建省":
                    "13.9", "江西省":
                    "13.9", "山东省":
                    "16.3", "河南省":
                    "14.6", "湖北省":
                    "15.9", "湖南省":
                    "17", "广东省":
                    "10.2", "广西壮族自治区":
                    "14.1", "海南省":
                    "11.5", "重庆市":
                    "19.8", "四川省":
                    "19.5", "贵州省":
                    "14.1", "云南省":
                    "11.6", "西藏自治区":
                    "7", "陕西省":
                    "14.4", "甘肃省":
                    "13.6", "青海省":
                    "9.9", "宁夏回族自治区":
                    "10.7", "新疆维吾尔自治区":
                    "10.3"
            },
            "2015": {
                "北京市":
                    "13.5", "天津市":
                    "12.9", "河北省":
                    "14.2", "山西省":
                    "12.1", "内蒙古自治区":
                    "12.4", "辽宁省":
                    "16.8", "吉林省":
                    "14.2", "黑龙江省":
                    "13.8", "上海市":
                    "16.5", "江苏省":
                    "17.2", "浙江省":
                    "14.9", "安徽省":
                    "15.7", "福建省":
                    "12.3", "江西省":
                    "13", "山东省":
                    "16.2", "河南省":
                    "14.2", "湖北省":
                    "15.3", "湖南省":
                    "16", "广东省":
                    "9.6", "广西壮族自治区":
                    "14.4", "海南省":
                    "11.8", "重庆市":
                    "18.7", "四川省":
                    "18.2", "贵州省":
                    "13.9", "云南省":
                    "11.6", "西藏自治区":
                    "8.1", "陕西省":
                    "13.9", "甘肃省":
                    "12.7", "青海省":
                    "9.7", "宁夏回族自治区":
                    "10.2", "新疆维吾尔自治区":
                    "10"
            },
            "2014": {
                "北京市":
                    "10.5", "天津市":
                    "15.1", "河北省":
                    "12.9", "山西省":
                    "11.1", "内蒙古自治区":
                    "12.1", "辽宁省":
                    "15.7", "吉林省":
                    "13.1", "黑龙江省":
                    "11.9", "上海市":
                    "12.1", "江苏省":
                    "16.3", "浙江省":
                    "12.3", "安徽省":
                    "14.5", "福建省":
                    "10.1", "江西省":
                    "13.2", "山东省":
                    "15.8", "河南省":
                    "12.5", "湖北省":
                    "13.9", "湖南省":
                    "15.4", "广东省":
                    "11", "广西壮族自治区":
                    "13.9", "海南省":
                    "10.5", "重庆市":
                    "20", "四川省":
                    "20", "贵州省":
                    "13.4", "云南省":
                    "12.1", "西藏自治区":
                    "7.9", "陕西省":
                    "14.3", "甘肃省":
                    "12", "青海省":
                    "9.5", "宁夏回族自治区":
                    "9.2", "新疆维吾尔自治区":
                    "9.5"
            },
            "2013": {
                "北京市":
                    "10.5", "天津市":
                    "14.8", "河北省":
                    "12.6", "山西省":
                    "10.5", "内蒙古自治区":
                    "11", "辽宁省":
                    "12.9", "吉林省":
                    "12.3", "黑龙江省":
                    "11.3", "上海市":
                    "13.3", "江苏省":
                    "16.5", "浙江省":
                    "11.7", "安徽省":
                    "14.8", "福建省":
                    "10.9", "江西省":
                    "12.6", "山东省":
                    "14.9", "河南省":
                    "12.7", "湖北省":
                    "13.2", "湖南省":
                    "14.9", "广东省":
                    "9.5", "广西壮族自治区":
                    "13.4", "海南省":
                    "11.2", "重庆市":
                    "18.6", "四川省":
                    "18.1", "贵州省":
                    "13.5", "云南省":
                    "11.1", "西藏自治区":
                    "7.2", "陕西省":
                    "13.1", "甘肃省":
                    "12", "青海省":
                    "9.8", "宁夏回族自治区":
                    "9.7", "新疆维吾尔自治区":
                    "8.8"
            },
            "2012": {
                "北京市":
                    "10.5", "天津市":
                    "13.4", "河北省":
                    "12.5", "山西省":
                    "10.4", "内蒙古自治区":
                    "10.1", "辽宁省":
                    "12.5", "吉林省":
                    "9.7", "黑龙江省":
                    "11.2", "上海市":
                    "10.9", "江苏省":
                    "15.3", "浙江省":
                    "11.1", "安徽省":
                    "14.4", "福建省":
                    "11.5", "江西省":
                    "11.5", "山东省":
                    "14.3", "河南省":
                    "12.5", "湖北省":
                    "14.3", "湖南省":
                    "15.8", "广东省":
                    "9.1", "广西壮族自治区":
                    "13.7", "海南省":
                    "9.9", "重庆市":
                    "18.3", "四川省":
                    "16.4", "贵州省":
                    "13.5", "云南省":
                    "10.7", "西藏自治区":
                    "7.5", "陕西省":
                    "12.1", "甘肃省":
                    "12.5", "青海省":
                    "9.7", "宁夏回族自治区":
                    "9.2", "新疆维吾尔自治区":
                    "9.3"
            },
            "2011": {
                "北京市":
                    "10.7", "天津市":
                    "12.3", "河北省":
                    "11", "山西省":
                    "10.2", "内蒙古自治区":
                    "8.7", "辽宁省":
                    "13.8", "吉林省":
                    "11.1", "黑龙江省":
                    "10", "上海市":
                    "9.4", "江苏省":
                    "14.2", "浙江省":
                    "10.9", "安徽省":
                    "14.7", "福建省":
                    "10", "江西省":
                    "10.8", "山东省":
                    "14.6", "河南省":
                    "12.5", "湖北省":
                    "13.4", "湖南省":
                    "14.6", "广东省":
                    "8.6", "广西壮族自治区":
                    "13.9", "海南省":
                    "9.4", "重庆市":
                    "17.4", "四川省":
                    "16.8", "贵州省":
                    "13.6", "云南省":
                    "10.6", "西藏自治区":
                    "6.7", "陕西省":
                    "11.1", "甘肃省":
                    "12", "青海省":
                    "8.1", "宁夏回族自治区":
                    "7.4", "新疆维吾尔自治区":
                    "9"
            }
        }
    },
    getters: {},
    mutations: {
        clickProvinceName(state, name) {
            state.provinceName = name;
            state.mapName = "ProvinceDetail";
        },
        backToChinaMap(state) {
            state.provinceName = "";
            state.mapName = "ChinaMap";
        },
        getCurrentGdp(state) {
            this.state.currentGdp = [];
            let currentYear = state.year;
            let gdp = state.allGdp[currentYear];
            for (let province in gdp) {
                this.state.currentGdp.push([province, gdp[province]])
            }
            this.state.currentGdp.sort((a,b) => {
                return b[1]-a[1];
            })
        },
        getCurrentDependencyRatio(state) {
            this.state.currentDependencyRatio = [];
            let currentYear = state.year;
            let dependencyRatio = state.allDependencyRatio[currentYear];
            for (let province in dependencyRatio) {
                this.state.currentDependencyRatio.push([province, dependencyRatio[province]])
            }
            this.state.currentDependencyRatio.sort((a,b) => {
                return b[1]-a[1];
            })
        },
        setYear(state, currentYear) {
            state.year = currentYear;
        }
    },
    actions: {
        changeYear(currentYear) {
            this.$store.commit("setYear", currentYear)
            this.$store.commit("getCurrentGdp")
            this.$store.commit("getCurrentDependencyRatio")
        }
    },
    modules: {}
})
