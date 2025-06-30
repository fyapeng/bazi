// 核心依赖：calendar.js 库
var calendar = {lunarInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06b20,0x1a6c4,0x0aae0,0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,0x0d520],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:['9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e','97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e','97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd','7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35','665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35','665f67f0e37f1489801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722'],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(y){var i,sum=348;for(i=0x8000;i>0x8;i>>=1)sum+=(this.lunarInfo[y-1900]&i)?1:0;return sum+this.leapDays(y)},leapMonth:function(y){return this.lunarInfo[y-1900]&0xf},leapDays:function(y){if(this.leapMonth(y))return(this.lunarInfo[y-1900]&0x10000)?30:29;return 0},monthDays:function(y,m){if(m>12||m<1)return-1;return(this.lunarInfo[y-1900]&(0x10000>>m))?30:29},solarDays:function(y,m){if(m>12||m<1)return-1;var ms=m-1;if(ms==1)return(y%4==0&&y%100!=0)||(y%400==0)?29:28;else return this.solarMonth[ms]},toGanZhiYear:function(lYear){var ganKey=(lYear-3)%10;var zhiKey=(lYear-3)%12;if(ganKey==0)ganKey=10;if(zhiKey==0)zhiKey=12;return this.Gan[ganKey-1]+this.Zhi[zhiKey-1]},toAstro:function(cMonth,cDay){var s="魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";var arr=[20,19,21,21,21,22,23,23,23,23,22,22];return s.substr(cMonth*2-(cDay<arr[cMonth-1]?2:0),2)+"座"},toGanZhi:function(offset){return this.Gan[offset%10]+this.Zhi[offset%12]},getTerm:function(y,n){if(y<1900||y>2100)return-1;if(n<1||n>24)return-1;var _table=this.sTermInfo[y-1900];var _info=[parseInt('0x'+_table.substr(0,5)).toString(),parseInt('0x'+_table.substr(5,5)).toString(),parseInt('0x'+_table.substr(10,5)).toString(),parseInt('0x'+_table.substr(15,5)).toString(),parseInt('0x'+_table.substr(20,5)).toString(),parseInt('0x'+_table.substr(25,5)).toString()];var _calday=[_info[0].substr(0,1),_info[0].substr(1,2),_info[0].substr(3,1),_info[0].substr(4,2),_info[1].substr(0,1),_info[1].substr(1,2),_info[1].substr(3,1),_info[1].substr(4,2),_info[2].substr(0,1),_info[2].substr(1,2),_info[2].substr(3,1),_info[2].substr(4,2),_info[3].substr(0,1),_info[3].substr(1,2),_info[3].substr(3,1),_info[3].substr(4,2),_info[4].substr(0,1),_info[4].substr(1,2),_info[4].substr(3,1),_info[4].substr(4,2),_info[5].substr(0,1),_info[5].substr(1,2),_info[5].substr(3,1),_info[5].substr(4,2)];return parseInt(_calday[n-1])},toChinaMonth:function(m){if(m>12||m<1)return-1;var s=this.nStr3[m-1];s+="月";return s},toChinaDay:function(d){var s;switch(d){case 10:s='初十';break;case 20:s='二十';break;case 30:s='三十';break;default:s=this.nStr2[Math.floor(d/10)];s+=this.nStr1[d%10]}return s},getAnimal:function(y){return this.Animals[(y-4)%12]},solar2lunar:function(y,m,d){if(y<1900||y>2100)return-1;if(y==1900&&m==1&&d<31)return-1;if(!y){var objDate=new Date}else{var objDate=new Date(y,parseInt(m)-1,d)}var i,leap=0,temp=0;var y=objDate.getFullYear(),m=objDate.getMonth()+1,d=objDate.getDate();var offset=(Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate())-Date.UTC(1900,0,31))/86400000;for(i=1900;i<2101&&offset>0;i++){temp=this.lYearDays(i);offset-=temp}if(offset<0){offset+=temp;i--}var isTodayObj=new Date(),isToday=false;if(isTodayObj.getFullYear()==y&&isTodayObj.getMonth()+1==m&&isTodayObj.getDate()==d){isToday=true}var nWeek=objDate.getDay(),cWeek=this.nStr1[nWeek];if(nWeek==0){nWeek=7}var year=i;var leap=this.leapMonth(i);var isLeap=false;for(i=1;i<13&&offset>0;i++){if(leap>0&&i==(leap+1)&&isLeap==false){--i;isLeap=true;temp=this.leapDays(year)}else{temp=this.monthDays(year,i)}if(isLeap==true&&i==(leap+1)){isLeap=false}offset-=temp}if(offset==0&&leap>0&&i==leap+1){if(isLeap){isLeap=false}else{isLeap=true;--i}}if(offset<0){offset+=temp;--i}var month=i;var day=offset+1;var sm=m-1;var gzY=this.toGanZhiYear(year);var firstNode=this.getTerm(y,(m*2-1));var secondNode=this.getTerm(y,(m*2));var gzM=this.toGanZhi((y-1900)*12+m+11);if(d>=firstNode){gzM=this.toGanZhi((y-1900)*12+m+12)}var isTerm=false;var Term=null;if(firstNode==d){isTerm=true;Term=this.solarTerm[m*2-2]}if(secondNode==d){isTerm=true;Term=this.solarTerm[m*2-1]}var dayCyclical=Date.UTC(y,sm,1,0,0,0,0)/86400000+25567+10;var gzD=this.toGanZhi(dayCyclical+d-1);var astro=this.toAstro(m,d);return{'lYear':year,'lMonth':month,'lDay':day,'Animal':this.getAnimal(year),'IMonthCn':(isLeap?"闰":'')+this.toChinaMonth(month),'IDayCn':this.toChinaDay(day),'cYear':y,'cMonth':m,'cDay':d,'gzYear':gzY,'gzMonth':gzM,'gzDay':gzD,'isToday':isToday,'isLeap':isLeap,'nWeek':nWeek,'ncWeek':"星期"+cWeek,'isTerm':isTerm,'Term':Term,'astro':astro}},lunar2solar:function(y,m,d,isLeapMonth){var isLeapMonth=!!isLeapMonth;var leapOffset=0;var leapMonth=this.leapMonth(y);var leapDay=this.leapDays(y);if(isLeapMonth&&(leapMonth!=m)){return-1}if(y==2100&&m==12&&d>1||y==1900&&m==1&&d<31){return-1}var day=this.monthDays(y,m);var _day=day;if(isLeapMonth){_day=this.leapDays(y,m)}if(y<1900||y>2100||d>_day){return-1}var offset=0;for(var i=1900;i<y;i++){offset+=this.lYearDays(i)}var leap=0,isAdd=false;for(var i=1;i<m;i++){leap=this.leapMonth(y);if(!isAdd){if(leap<=i&&leap>0){offset+=this.leapDays(y);isAdd=true}}offset+=this.monthDays(y,i)}if(isLeapMonth){offset+=day}var stmap=Date.UTC(1900,1,30,0,0,0);var calObj=new Date((offset+d-31)*86400000+stmap);var cY=calObj.getUTCFullYear();var cM=calObj.getUTCMonth()+1;var cD=calObj.getUTCDate();return this.solar2lunar(cY,cM,cD)}};

// =================================================================
// ===== 八字排盘核心逻辑 =====
// =================================================================

const GAN = calendar.Gan;
const ZHI = calendar.Zhi;
const JIAZI = Array.from({length: 60}, (_, i) => GAN[i % 10] + ZHI[i % 12]);
const WUXING = {
    '甲':'木', '乙':'木', '丙':'火', '丁':'火', '戊':'土', '己':'土', '庚':'金', '辛':'金', '壬':'水', '癸':'水',
    '子':'水', '丑':'土', '寅':'木', '卯':'木', '辰':'土', '巳':'火', '午':'火', '未':'土', '申':'金', '酉':'金', '戌':'土', '亥':'水'
};
const WUXING_CLASS = { '木':'mu', '火':'huo', '土':'tu', '金':'jin', '水':'shui' };
const YINYANG = { '甲':'阳', '乙':'阴', '丙':'阳', '丁':'阴', '戊':'阳', '己':'阴', '庚':'阳', '辛':'阴', '壬':'阳', '癸':'阴' };
const SHISHEN = {
    '克我': { '同性': '七杀', '异性': '正官' }, '我克': { '同性': '偏财', '异性': '正财' },
    '生我': { '同性': '偏印', '异性': '正印' }, '我生': { '同性': '食神', '异性': '伤官' },
    '同我': { '同性': '比肩', '异性': '劫财' }
};
const WUXING_REL = {
    '木': { '木':'同我', '火':'我生', '土':'我克', '金':'克我', '水':'生我' }, '火': { '火':'同我', '土':'我生', '金':'我克', '水':'克我', '木':'生我' },
    '土': { '土':'同我', '金':'我生', '水':'我克', '木':'克我', '火':'生我' }, '金': { '金':'同我', '水':'我生', '木':'我克', '火':'克我', '土':'生我' },
    '水': { '水':'同我', '木':'我生', '火':'我克', '土':'克我', '金':'生我' }
};
const CANG_GAN = {
    '子':['癸'], '丑':['己','癸','辛'], '寅':['甲','丙','戊'], '卯':['乙'], '辰':['戊','乙','癸'], '巳':['丙','庚','戊'],
    '午':['丁','己'], '未':['己','丁','乙'], '申':['庚','壬','戊'], '酉':['辛'], '戌':['戊','辛','丁'], '亥':['壬','甲']
};
const RELATIONS = {
    ganHe: {'甲':'己', '乙':'庚', '丙':'辛', '丁':'壬', '戊':'癸'},
    zhiLiuHe: {'子':'丑', '寅':'亥', '卯':'戌', '辰':'酉', '巳':'申', '午':'未'},
    zhiSanHe: {'申':'子辰', '亥':'卯未', '寅':'午戌', '巳':'酉丑'},
    zhiSanHui: {'寅':'卯辰', '巳':'午未', '申':'酉戌', '亥':'子丑'},
    zhiChong: {'子':'午', '丑':'未', '寅':'申', '卯':'酉', '辰':'戌', '巳':'亥'},
    zhiXing: {
        '寅':'巳', '巳':'申', '申':'寅',
        '丑':'戌', '戌':'未', '未':'丑',
        '子':'卯', '卯':'子',
        '辰':'辰', '午':'午', '酉':'酉', '亥':'亥'
    },
    zhiHai: {'子':'未', '丑':'午', '寅':'巳', '卯':'辰', '申':'亥', '酉':'戌'},
    zhiPo: {'子':'酉', '卯':'午', '辰':'丑', '未':'戌', '申':'巳', '寅':'亥'},
    anHe: {'寅':'丑', '卯':'申'}
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculate-btn').addEventListener('click', calculateBazi);
});

function calculateBazi() {
    const birthDateStr = document.getElementById('birth-date').value;
    const birthTimeStr = document.getElementById('birth-time').value;
    const gender = document.getElementById('gender').value;

    if (!birthDateStr || !birthTimeStr) { alert('请输入完整的出生日期和时间！'); return; }

    const [year, month, day] = birthDateStr.split('-').map(Number);
    const [hour, minute] = birthTimeStr.split(':').map(Number);
    const birthDate = new Date(year, month - 1, day, hour, minute);

    const lunarData = calendar.solar2lunar(year, month, day);
    const dayGan = lunarData.gzDay[0];
    const hourZhiIndex = Math.floor((hour + 1) / 2) % 12;
    const hourZhi = ZHI[hourZhiIndex];
    const dayGanIndex = GAN.indexOf(dayGan);
    const hourGanStartIndex = (dayGanIndex % 5) * 2;
    const hourGanIndex = (hourGanStartIndex + hourZhiIndex) % 10;
    const hourGan = GAN[hourGanIndex];

    const bazi = {
        year: { gz: lunarData.gzYear, gan: lunarData.gzYear[0], zhi: lunarData.gzYear[1] },
        month: { gz: lunarData.gzMonth, gan: lunarData.gzMonth[0], zhi: lunarData.gzMonth[1] },
        day: { gz: lunarData.gzDay, gan: lunarData.gzDay[0], zhi: lunarData.gzDay[1] },
        hour: { gz: hourGan + hourZhi, gan: hourGan, zhi: hourZhi }
    };
    
    const dayMasterGan = bazi.day.gan;
    for (const pillarName in bazi) {
        const pillar = bazi[pillarName];
        pillar.tenGod = pillarName === 'day' ? '日主' : getTenGod(dayMasterGan, pillar.gan);
        pillar.cangGan = CANG_GAN[pillar.zhi].map(cg => ({ gan: cg, tenGod: getTenGod(dayMasterGan, cg) }));
    }

    const yearGanYinYang = YINYANG[bazi.year.gan];
    const direction = (yearGanYinYang === '阳' && gender === 'male') || (yearGanYinYang === '阴' && gender === 'female') ? 1 : -1;
    
    const qiYunAge = Math.round(calculateQiYun(birthDate, direction).years);
    const monthPillarIndex = JIAZI.indexOf(bazi.month.gz);
    const dYunList = Array.from({length: 8}, (_, i) => {
        let nextIndex = monthPillarIndex + (i + 1) * direction;
        return JIAZI[(nextIndex % 60 + 60) % 60];
    });

    displayBazi(bazi);
    
    const originalGanZhi = [bazi.year.gz, bazi.month.gz, bazi.day.gz, bazi.hour.gz];
    const relations = analyzeRelations(originalGanZhi);
    document.getElementById('tian-gan-relations').innerHTML = relations.ganRelations.join('，') || '无';
    document.getElementById('di-zhi-relations').innerHTML = relations.zhiRelations.join('，') || '无';

    displayDaYun(dYunList, qiYunAge, birthDate.getFullYear(), dayMasterGan, originalGanZhi);
    document.getElementById('result-container').classList.remove('hidden');
}

function getTenGod(dayMaster, other) {
    const targetGan = GAN.includes(other) ? other : CANG_GAN[other] ? CANG_GAN[other][0] : null;
    if (!targetGan) return ''; 

    if (dayMaster === targetGan) return '比肩';

    const [dmWuXing, otherWuXing] = [WUXING[dayMaster], WUXING[targetGan]];
    const [dmYinYang, otherYinYang] = [YINYANG[dayMaster], YINYANG[targetGan]];
    
    if (!otherYinYang) return getTenGod(dayMaster, CANG_GAN[other][0]);

    const relation = WUXING_REL[dmWuXing][otherWuXing];
    return SHISHEN[relation][dmYinYang === otherYinYang ? '同性' : '异性'];
}


function calculateQiYun(birthDate, direction) {
    let year = birthDate.getFullYear();
    let month = birthDate.getMonth() + 1;
    let refJieDate;
    if (direction === 1) { // 顺排，找下一个节
        const currentJieDay = calendar.getTerm(year, month * 2 - 1);
        if (birthDate.getDate() > currentJieDay || (birthDate.getDate() === currentJieDay && birthDate.getHours() * 60 + birthDate.getMinutes() > 0)) {
            month++;
            if (month > 12) { month = 1; year++; }
        }
        refJieDate = new Date(year, month - 1, calendar.getTerm(year, month * 2 - 1));
    } else { // 逆排，找上一个节
        const currentJieDay = calendar.getTerm(year, month * 2 - 1);
        if (birthDate.getDate() < currentJieDay || (birthDate.getDate() === currentJieDay && birthDate.getHours() * 60 + birthDate.getMinutes() === 0)) {
            month--;
            if (month < 1) { month = 12; year--; }
        }
        refJieDate = new Date(year, month - 1, calendar.getTerm(year, month * 2 - 1));
    }
    const diff = Math.abs(refJieDate.getTime() - birthDate.getTime());
    const days = diff / (1000 * 60 * 60 * 24);
    return { years: days / 3 };
}

function createColoredSpan(char) {
    const wuXing = WUXING[char];
    if (!wuXing) return `<span>${char}</span>`;
    return `<span class="wuxing-${WUXING_CLASS[wuXing]}">${char}</span>`;
}

function displayBazi(bazi) {
    const renderPillar = (pillarName) => {
        const pillarData = bazi[pillarName];
        if (pillarName !== 'day') {
             document.getElementById(`${pillarName}-tian-gan-ten-god`).textContent = pillarData.tenGod;
        }
        document.getElementById(`${pillarName}-tian-gan`).innerHTML = createColoredSpan(pillarData.gan);
        document.getElementById(`${pillarName}-di-zhi`).innerHTML = createColoredSpan(pillarData.zhi);
        document.getElementById(`${pillarName}-cang-gan`).innerHTML = pillarData.cangGan.map(cg => `${createColoredSpan(cg.gan)}<small>(${cg.tenGod})</small>`).join(' ');
    };
    ['year', 'month', 'day', 'hour'].forEach(renderPillar);
}

function analyzeRelations(ganZhiArray) {
    const gans = ganZhiArray.map(p => p[0]);
    const zhis = ganZhiArray.map(p => p[1]);
    let ganRelations = new Set();
    let zhiRelations = new Set();

    // 天干关系
    for (let i = 0; i < gans.length; i++) {
        for (let j = i + 1; j < gans.length; j++) {
            if (RELATIONS.ganHe[gans[i]] === gans[j] || RELATIONS.ganHe[gans[j]] === gans[i]) {
                ganRelations.add(`${createColoredSpan(gans[i])}${createColoredSpan(gans[j])}相合`);
            }
            if (WUXING_REL[WUXING[gans[i]]][WUXING[gans[j]]] === '克我' || WUXING_REL[WUXING[gans[i]]][WUXING[gans[j]]] === '我克') {
                ganRelations.add(`${createColoredSpan(gans[i])}${createColoredSpan(gans[j])}相克`);
            }
        }
    }

    // 地支关系
    for (let i = 0; i < zhis.length; i++) {
        for (let j = i + 1; j < zhis.length; j++) {
            if (RELATIONS.zhiLiuHe[zhis[i]] === zhis[j] || RELATIONS.zhiLiuHe[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}六合`);
            if (RELATIONS.zhiChong[zhis[i]] === zhis[j] || RELATIONS.zhiChong[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}相冲`);
            if (RELATIONS.zhiXing[zhis[i]] === zhis[j] || RELATIONS.zhiXing[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}相刑`);
            if (RELATIONS.zhiHai[zhis[i]] === zhis[j] || RELATIONS.zhiHai[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}相害`);
            if (RELATIONS.zhiPo[zhis[i]] === zhis[j] || RELATIONS.zhiPo[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}相破`);
            if (RELATIONS.anHe[zhis[i]] === zhis[j] || RELATIONS.anHe[zhis[j]] === zhis[i]) zhiRelations.add(`${createColoredSpan(zhis[i])}${createColoredSpan(zhis[j])}暗合`);
        }
    }
    
    const zhiSet = new Set(zhis);
    // ** BUG FIX IS HERE: Iterate over Object.values() instead of Object.keys() **
    for (const heju of Object.values(RELATIONS.zhiSanHe)) {
        if (heju.split('').every(z => zhiSet.has(z))) {
            zhiRelations.add(`${createColoredSpan(heju[0])}${createColoredSpan(heju[1])}${createColoredSpan(heju[2])}三合`);
        }
    }
    for (const huiju of Object.values(RELATIONS.zhiSanHui)) {
        if (huiju.split('').every(z => zhiSet.has(z))) {
            zhiRelations.add(`${createColoredSpan(huiju[0])}${createColoredSpan(huiju[1])}${createColoredSpan(huiju[2])}三会`);
        }
    }
    
    return {
        ganRelations: [...ganRelations],
        zhiRelations: [...zhiRelations]
    };
}

function displayDaYun(dYunList, qiYunAge, birthYear, dayMasterGan, originalGanZhi) {
    document.getElementById('qi-yun-age').textContent = `(${qiYunAge}岁起运)`;
    const container = document.getElementById('d-yun-list');
    container.innerHTML = '';
    
    dYunList.forEach((gz, i) => {
        const startAge = qiYunAge + i * 10;
        const endAge = startAge + 9;
        const gan = gz[0], zhi = gz[1];
        const daYunGanTenGod = getTenGod(dayMasterGan, gan);
        const cangGanData = CANG_GAN[zhi].map(cg => ({ gan: cg, tenGod: getTenGod(dayMasterGan, cg) }));
        
        let liunianHtml = '';
        for (let j = 0; j < 10; j++) {
            const currentYear = birthYear + startAge + j;
            const liunianGz = calendar.solar2lunar(currentYear, 6, 15).gzYear;
            const liunianGan = liunianGz[0], liunianZhi = liunianGz[1];
            const liunianCangGanHtml = CANG_GAN[liunianZhi].map(cg => `${createColoredSpan(cg)}<small>(${getTenGod(dayMasterGan, cg)})</small>`).join(' ');

            liunianHtml += `
                <tr data-liunian-gz="${liunianGz}">
                    <td>${currentYear} <small>(${startAge+j}岁)</small></td>
                    <td>${createColoredSpan(liunianGan)}${createColoredSpan(liunianZhi)}</td>
                    <td>${getTenGod(dayMasterGan, liunianGan)}</td>
                    <td class="cang-gan-cell">${liunianCangGanHtml}</td>
                </tr>
            `;
        }

        const dYunItem = document.createElement('div');
        dYunItem.className = 'd-yun-item';
        dYunItem.innerHTML = `
            <div class="d-yun-header">
                <div class="d-yun-main">
                    <div class="d-yun-tengod">${daYunGanTenGod}</div>
                    <div class="gan-zhi">${createColoredSpan(gan)}${createColoredSpan(zhi)}</div>
                    <div class="d-yun-cang-gan">${cangGanData.map(cg => `${createColoredSpan(cg.gan)}<small>(${cg.tenGod})</small>`).join(' ')}</div>
                </div>
                <div class="d-yun-side">
                    <div class="age-range">${startAge} - ${endAge}岁</div>
                    <button class="toggle-liunian-btn">查看流年</button>
                </div>
            </div>
            <div class="liunian-container">
                 <div class="liunian-relations-container">
                    <h4>本运/流年关系</h4>
                    <div class="relation-item"><strong>天干：</strong><span class="dynamic-gan-relations"></span></div>
                    <div class="relation-item"><strong>地支：</strong><span class="dynamic-zhi-relations"></span></div>
                 </div>
                <table class="liunian-table">
                    <thead><tr><th>年份</th><th>干支</th><th>天干十神</th><th>地支藏干(十神)</th></tr></thead>
                    <tbody>${liunianHtml}</tbody>
                </table>
            </div>
        `;
        container.appendChild(dYunItem);

        const ganRelationsEl = dYunItem.querySelector('.dynamic-gan-relations');
        const zhiRelationsEl = dYunItem.querySelector('.dynamic-zhi-relations');
        
        // 默认显示大运与原局的关系
        const daYunRelations = analyzeRelations([...originalGanZhi, gz]);
        ganRelationsEl.innerHTML = daYunRelations.ganRelations.join('，') || '无';
        zhiRelationsEl.innerHTML = daYunRelations.zhiRelations.join('，') || '无';

        // 为流年表格的每一行添加鼠标悬停事件
        dYunItem.querySelectorAll('.liunian-table tbody tr').forEach(row => {
            row.addEventListener('mouseover', () => {
                const liunianGz = row.dataset.liunianGz;
                const dynamicRelations = analyzeRelations([...originalGanZhi, gz, liunianGz]);
                ganRelationsEl.innerHTML = dynamicRelations.ganRelations.join('，') || '无';
                zhiRelationsEl.innerHTML = dynamicRelations.zhiRelations.join('，') || '无';
            });
            row.addEventListener('mouseleave', () => {
                // 鼠标离开时恢复只显示大运的关系
                ganRelationsEl.innerHTML = daYunRelations.ganRelations.join('，') || '无';
                zhiRelationsEl.innerHTML = daYunRelations.zhiRelations.join('，') || '无';
            });
        });
    });

    container.querySelectorAll('.toggle-liunian-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.closest('.d-yun-item').querySelector('.liunian-container');
            e.target.classList.toggle('active');
            container.classList.toggle('show');
            e.target.textContent = e.target.classList.contains('active') ? '收起流年' : '查看流年';
        });
    });
}