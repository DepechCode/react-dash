(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,a,t){},17:function(e,a,t){},25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),s=t(14),o=t(10),i=(t(30),t(5)),d=t.n(i),m=t(12),u=t(6),b=t(7),E=t(9),h=t(8),f=(t(13),function(e){var a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t={"clear-day":"fas fa-sun","clear-night":"far fa-moon",rain:"fas fa-cloud-rain",snow:"far fa-snowflake",sleet:"fas fa-cloud-showers-heavy",wind:"fas fa-wind",fog:"fas fa-smog",cloudy:"fas fa-cloud","partly-cloudy-day":"fas fa-cloud-sun","partly-cloudy-night":"fas fa-cloud-moon",thunderstorm:"fas fa-poo-storm"},n=e.daily.data.map((function(e){return{day:a[new Date(1e3*e.time).getDay()],icon:t[e.icon],high:"".concat(Math.round(e.temperatureHigh),"\xb0"),low:"".concat(Math.round(e.temperatureLow),"\xb0")}}));return r.a.createElement("table",{className:"table table-bordered",id:"forecast-table"},r.a.createElement("thead",null,r.a.createElement("tr",{id:"header-row"},r.a.createElement("th",null,"Day"),r.a.createElement("th",null,"Icon"),r.a.createElement("th",null,"Hi"),r.a.createElement("th",null,"Lo"))),r.a.createElement("tbody",null,n.slice(0,5).map((function(e){return r.a.createElement("tr",{key:e.day},r.a.createElement("td",null,e.day),r.a.createElement("td",null,r.a.createElement("i",{className:e.icon})),r.a.createElement("td",null,e.high),r.a.createElement("td",null,e.low))}))))}),v={"clear-day":"fas fa-sun","clear-night":"far fa-moon",rain:"fas fa-cloud-rain",snow:"far fa-snowflake",sleet:"fas fa-cloud-showers-heavy",wind:"fas fa-wind",fog:"fas fa-smog",cloudy:"fas fa-cloud","partly-cloudy-day":"fas fa-cloud-sun","partly-cloudy-night":"fas fa-cloud-moon",thunderstorm:"fas fa-poo-storm"},p=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4",id:"current-temp"},"".concat(Math.round(e.currently.temperature),"\xb0")),r.a.createElement("div",{className:"col-4",id:"current-icon"},r.a.createElement("i",{className:"".concat(v[e.currently.icon]," fa-2x")})),r.a.createElement("div",{className:"col-4",id:"current-summary"},e.currently.summary))};function y(){return r.a.createElement("div",{className:"card-header col-12",id:"weather-header"},"King Of Prussia")}var g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]+" "+(new Date).getDate()+", "+(new Date).getFullYear();function N(){return r.a.createElement("div",{className:"col-12",id:"date-header"},g)}var w,S=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,weather:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/api/weather");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({weather:t,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return r.a.createElement("div",null,"Loading...");var e=this.state.weather;return r.a.createElement("div",{className:"col-3",id:"weather-container"},r.a.createElement("div",{className:"card-front active col-12"},r.a.createElement(y,null),r.a.createElement(N,null),r.a.createElement("div",{className:"col-12",id:"weather-body"},r.a.createElement(p,{currently:e.currently})),r.a.createElement(f,{daily:e.daily})))}}]),t}(n.Component),j=(t(32),function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,totals:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/shop");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({totals:t[0],loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.totals,t=e.loading;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Line Items Cut"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"line-items"},t?"Loading...":a.jobs))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"SqFt Cut"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"sqft"},t?"Loading...":a.sqft))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Total Price"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"price"},t?"Loading...":"$".concat(a.price)))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Slabs Used"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"slab-count"},t?"Loading...":a.slabCount))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Slab SqFt"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"slab-sqft"},t?"Loading...":a.slabSqft))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Slab Cost"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"slab-cost"},t?"Loading...":"$".concat(a.slabCost)))),r.a.createElement("div",{className:"card bg-light mb-3"},r.a.createElement("div",{className:"card-header"},"Waste Percentage"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text",id:"waste"},t?"Loading...":a.waste>0?"".concat(a.waste," %"):"0%")))))}}]),t}(n.Component)),F=(t(17),function(e){return Number.parseFloat(e).toFixed(2)}),q=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},k=function(e){var a=e.data,t=[];for(var n in a)if(a.hasOwnProperty(n)){var l=a[n];t.push(l)}return r.a.createElement("div",{className:"table-responsive",id:"saw-table-container"},r.a.createElement("table",{className:"table table-striped table-bordered",id:"saw-table"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",{id:"saw"},"Saw"),r.a.createElement("th",null,"Jobs"),r.a.createElement("th",null,"SqFt"),r.a.createElement("th",null,"Job Price"),r.a.createElement("th",null,"Slabs"),r.a.createElement("th",null,"Slab SqFt"),r.a.createElement("th",null,"Slab Cost"),r.a.createElement("th",null,"Waste"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.saw},r.a.createElement("td",{id:"saw-row-header"},e.saw),r.a.createElement("td",null,e.jobs?e.jobs:0),r.a.createElement("td",null,e.sqFt?q(F(e.sqFt)):0),r.a.createElement("td",null,e.price?"$".concat(q(F(e.price))):0),r.a.createElement("td",null,e.slabCount?e.slabCount:0),r.a.createElement("td",null,e.slabSqFt?F(e.slabSqFt):0),r.a.createElement("td",null,e.slabCost?"$".concat(q(F(e.slabCost))):0),r.a.createElement("td",null,e.slabSqFt>e.sqFt?"".concat(F((e.slabSqFt-e.sqFt)/e.slabSqFt*100),"%"):"0%"))})))))};function C(e){var a=e.data,t=[];for(var n in a)if(a.hasOwnProperty(n)){var l=a[n];t.push(l)}return r.a.createElement("div",{className:"table-responsive",id:"cutter-table-container"},r.a.createElement("table",{className:"table table-striped table-bordered",id:"cutter-table"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",{id:"cutter"},"Cutter"),r.a.createElement("th",null,"Jobs"),r.a.createElement("th",null,"SqFt"),r.a.createElement("th",null,"Job Price"),r.a.createElement("th",null,"Slabs"),r.a.createElement("th",null,"Slab SqFt"),r.a.createElement("th",null,"Slab Cost"),r.a.createElement("th",null,"Waste"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.cutter},r.a.createElement("td",{id:"cut-row-header"},e.cutter),r.a.createElement("td",null,e.jobs?e.jobs:0),r.a.createElement("td",null,e.sqFt?q(F(e.sqFt)):0),r.a.createElement("td",null,e.price?"$".concat(q(F(e.price))):0),r.a.createElement("td",null,e.slabCount?e.slabCount:0),r.a.createElement("td",null,e.slabSqFt?F(e.slabSqFt):0),r.a.createElement("td",null,e.slabCost?"$".concat(q(F(e.slabCost))):0),r.a.createElement("td",null,e.slabSqFt>e.sqFt?"".concat(F((e.slabSqFt-e.sqFt)/e.slabSqFt*100),"%"):"0%"))})))))}var O=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,cutData:[],sawData:[]},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/cutter").then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){return w=e,fetch("/api/saw")})).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){a.setState({cutData:w,sawData:e,loading:!1})})).catch((function(e){console.warn(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return r.a.createElement("div",{className:"col-9",id:"loading"},"Loading...");var e=this.state,a=e.cutData,t=e.sawData;return r.a.createElement("div",{className:"col-9",id:"table-container"},r.a.createElement("div",{className:"row",id:"table-row"},r.a.createElement(k,{data:t}),r.a.createElement(C,{data:a})))}}]),t}(n.Component),x=function(){return r.a.createElement("div",{className:"container-fluid",id:"main-container"},r.a.createElement(j,null),r.a.createElement("div",{className:"weather-tables-container"},r.a.createElement("div",{className:"row",id:"weather-tables-row"},r.a.createElement(S,null),r.a.createElement(O,null))))},D=function(){return r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/cutdashboard",className:"nav-link"},"Cut Data"))))},L=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"nav-main"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:"/images/logoCthumb.png",alt:"CMG",height:"50px",width:"60px"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(D,null))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:x})))};c.a.render(r.a.createElement(s.a,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cb3b292d.chunk.js.map