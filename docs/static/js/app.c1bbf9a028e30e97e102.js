webpackJsonp([1],{"0ty7":function(t,e){},"2WLv":function(t,e){},"4uLr":function(t,e){},"8BqN":function(t,e){},BBTg:function(t,e){},Bk1d:function(t,e){},DEcN:function(t,e){},JZ95:function(t,e){},L9a8:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("evuP"),s("nicw")}function i(t){s("vpXx")}function n(t){s("VRII")}function r(t){s("2WLv")}function o(t){s("BBTg"),s("8BqN")}function c(t){s("yQTD"),s("JZ95")}function l(t){s("DEcN"),s("Bk1d")}function u(t){s("L9a8")}function h(t){s("dD7k"),s("4uLr")}function d(t){s("QgFA"),s("0ty7")}function v(t){s("RQgO"),s("bqBP")}Object.defineProperty(e,"__esModule",{value:!0});var f=s("7+uW"),m=s("//Fk"),p=s.n(m),g={},_=g;g.doesArtistExist=function(t){if("leon grasmeijer"==t.toLowerCase())return void this.$router.push({path:"/artists/Leon Grasmeijer"});document.getElementById("output");return new p.a(function(e,s){fetch("https://rest.bandsintown.com/artists/"+t+"?app_id='ConcerTrack v0.0.1'",{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){s(t)})})},g.saved={loaded:!1,allLocalEvents:[],trackedArtists:{list:[]},countrySet:!1,artistImages:[]},g.resetSaved=function(){g.saved={loaded:!1,allLocalEvents:[],trackedArtists:{list:[]},countrySet:!1,artistImages:[]}};var k={data:function(){return{hideSearchElements:!1,showSearchMobile:!1}},mounted:function(){this.hideOrShowSearchElements()},watch:{$route:function(){this.hideOrShowSearchElements(),this.showSearchMobile=!1}},methods:{showSearch:function(){var t=this;if(this.showSearchMobile){console.log("test");var e=document.getElementById("search-mobile");e.classList.add("slideOutUp");var s=function(){e.classList.remove("slideOutUp"),t.showSearchMobile=!1};e.addEventListener("animationend",function(){s()})}else document.getElementById("input-field").focus(),this.showSearchMobile=!0},hideOrShowSearchElements:function(){var t=this.$route.path;t=t.split("/").pop(),this.hideSearchElements=!t},callBackForm:function(t,e){var s=this;if("artistSearch"==t){var a=e;_.doesArtistExist(a).then(function(t){s.showSearchMobile=!1,t.id&&s.$router.push({path:"/artists/"+a})}).catch(function(t){if(t.toString().includes("SyntaxError"))for(var e=0,i=s.$children.length;e<i;e++){var n=s.$children[e];"autocomplete-container"==n.$el.id&&(n.inputValue=a,n.errorMessage="Sorry, we couldn't find that artist :(")}})}}}},w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{attrs:{id:"test"}},[t._v(" ")]),t._v(" "),s("router-link",{attrs:{to:"/",id:"header-title-link"}},[s("h2",[t._v("ConcerTrack")])]),t._v(" "),s("router-link",{attrs:{to:"/tracked",id:"tracked-link"}},[s("p",[t._v("Tracked Artists")])]),t._v(" "),t.hideSearchElements?t._e():s("div",{attrs:{id:"search-tracked-view"}},[s("autocomplete",{attrs:{title:"",placeholder:"Search for an artist",data:"static/AllList.json",callback:"artistSearch",submitText:"<i class='fa fa-search' aria-hidden='true'></i>"}})],1),t._v(" "),t.showSearchMobile?s("div",{staticClass:"animated slideInDown",attrs:{id:"search-mobile"}},[s("div",{attrs:{id:"search-mobile-close"},on:{click:t.showSearch}},[s("i",{staticClass:"fa fa-times"})]),t._v(" "),s("autocomplete",{attrs:{title:"",placeholder:"Search for an artist",data:"static/AllList.json",callback:"artistSearch",submitText:"<i class='fa fa-search' aria-hidden='true'></i>"}})],1):t._e(),t._v(" "),t.hideSearchElements?t._e():s("div",{attrs:{id:"search-icon"},on:{click:t.showSearch}},[t._v("\n        Search\n        "),s("i",{staticClass:"fa fa-search"})]),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"})],1)},y=[],S={render:w,staticRenderFns:y},E=S,C=s("VU/8"),b=a,A=C(k,E,!1,b,null,null),L=A.exports,M=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)},I=[],T={render:M,staticRenderFns:I},F=T,x=s("VU/8"),$=i,D=x(null,F,!1,$,"data-v-213dc2ba",null),U=D.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("span",{staticClass:"square"}),t._v(" "),s("router-link",{attrs:{to:"/contact"}},[s("p",[t._v("Contact")])]),t._v(" "),s("router-link",{attrs:{to:"/faq"}},[s("p",[t._v("FAQ")])])],1)},j=[],V={render:B,staticRenderFns:j},q=V,R=s("VU/8"),O=n,N=R(null,q,!1,O,"data-v-66c33272",null),G=N.exports,J={data:function(){return{}},components:{SiteHeader:L,SiteBody:U,SiteFooter:G}},W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("site-header"),t._v(" "),s("site-body",[s("router-view")],1),t._v(" "),s("site-footer")],1)},P=[],Q={render:W,staticRenderFns:P},H=Q,Y=s("VU/8"),X=r,z=Y(J,H,!1,X,null,null),Z=z.exports,K=s("/ocq"),tt=s("mvHQ"),et=s.n(tt),st={data:function(){return this.getAllInformation(),{artist:"",artistInfo:{},bandcampUrl:"",events:[],lastFMData:{},artistBio:"",onTour:!1,imageUrl:"",countrySet:!1,localEvents:[],tracking:!1,trackedArtists:{list:[]}}},watch:{$route:function(){this.localEvents=[],this.getAllInformation(),this.getTrackedArtists()}},mounted:function(){var t=localStorage.getItem("Country");t&&(this.countrySet=t),this.getTrackedArtists()},methods:{getTrackedArtists:function(){var t=JSON.parse(localStorage.getItem("Tracked"));t&&(this.trackedArtists=t),this.tracking=!1;for(var e=0,s=this.trackedArtists.list.length;e<s;e++){this.trackedArtists.list[e].toLowerCase()==this.$route.params.artist.toLowerCase()&&(this.tracking=!0)}},getAllInformation:function(){this.getArtistEvents(),this.checkBandcampAccount(),this.getLastFMInfo()},getArtistEvents:function(){var t=this;this.artist=this.$route.params.artist;var e="https://rest.bandsintown.com/";(function(t){return new p.a(function(s,a){fetch(e+"artists/"+t+"/events?app_id='ConcerTrack v0.0.1'",{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(e){e.artist=t,s(e)}).catch(function(t){console.log(t)})})})(this.artist).then(function(e){t.events=e,t.events.forEach(function(s){var a=new Date(s.datetime),i=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];s.datetime=a.getDate()+" "+i[a.getMonth()],s.offers.length?s.ticketUrl=s.offers[0].url:s.searchUrl="https://duckduckgo.com/?q="+e.artist+" "+s.datetime,s.venue.country==t.countrySet&&t.localEvents.push(s)})}),function(t){return new p.a(function(s,a){fetch(e+"artists/"+t+"?app_id='ConcerTrack v0.0.1'",{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){s(t)}).catch(function(t){console.log(t)})})}(this.artist).then(function(e){t.artistInfo=e})},checkBandcampAccount:function(){this.bandcampUrl="https://bandcamp.com/search?q="+this.artist.toLowerCase()},getLastFMInfo:function(){var t=this;(function(){var e=encodeURIComponent(t.artist);return new p.a(function(t,s){fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="+e,{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){console.log(t)})})})().then(function(e){if(e.error)throw e.message;t.lastFMData=e.artist,t.artist=t.lastFMData.name,t.artistBio=e.artist.bio.summary,t.imageUrl=e.artist.image[e.artist.image.length-1]["#text"]||t.artistInfo.image_url})},callBackForm:function(t,e){var s=this;if("artistSearch"==t){var a=e;_.doesArtistExist(a).then(function(t){t.id&&s.$router.push({path:"/artists/"+a})}).catch(function(t){t.toString().includes("SyntaxError")&&(console.log(s.$children),s.$children[1].errorMessage="Sorry, we couldn't find that artist :(")})}else if("countrySearch"==t){var i=e;localStorage.setItem("Country",i),this.countrySet=i,this.localEvents=[];for(var n=0,r=this.events.length;n<r;n++){var o=this.events[n];o.venue.country==i&&this.localEvents.push(o)}}},resetCountry:function(){localStorage.removeItem("Country"),this.countrySet=!1},trackArtist:function(){if(this.tracking){this.tracking=!1;var t=this.trackedArtists.list.indexOf(this.lastFMData.name);-1!=t&&this.trackedArtists.list.splice(t,1)}else{this.tracking=!0;for(var e=!1,s=0,a=this.trackedArtists.list.length;s<a;s++){this.trackedArtists.list[s].toLowerCase()==this.lastFMData.name.toLowerCase()&&(e=!0)}e||this.trackedArtists.list.push(this.lastFMData.name)}localStorage.setItem("Tracked",et()(this.trackedArtists)),_.resetSaved()}}},at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"output-container"}},[s("div",{attrs:{id:"output"}},[s("div",{attrs:{id:"left-side"}},[t.imageUrl?s("img",{attrs:{src:t.imageUrl,alt:"",id:"artist-image"}}):t._e(),t._v(" "),s("div",{attrs:{id:"info-container"}},[s("h1",[t._v(t._s(t.lastFMData.name))]),t._v(" "),t.artistInfo.facebook_page_url?s("a",{staticClass:"link-icon",attrs:{href:t.artistInfo.facebook_page_url}},[s("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.bandcampUrl?s("a",{staticClass:"link-icon",attrs:{href:t.bandcampUrl}},[s("i",{staticClass:"fa fa-bandcamp",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.lastFMData.url?s("a",{staticClass:"link-icon",attrs:{href:t.lastFMData.url}},[s("i",{staticClass:"fa fa-lastfm-square",attrs:{"aria-hidden":"true"}})]):t._e(),t._v(" "),t.lastFMData?s("p",{domProps:{innerHTML:t._s(t.artistBio)}},[t._v("\n                    "+t._s(t.artistBio)+"\n                ")]):t._e()]),t._v(" "),t.tracking?s("button",{attrs:{id:"track-button-tracked"},on:{click:t.trackArtist}},[t._v("Stop Tracking")]):s("button",{attrs:{id:"track-button"},on:{click:t.trackArtist}},[t._v("Track Artist")])]),t._v(" "),s("div",{attrs:{id:"right-side"}},[s("div",{attrs:{id:"local-event-container"}},[s("h1",[t._v("Local events:")]),t._v(" "),t.countrySet?s("div",{attrs:{id:"local-events"}},[s("button",{on:{click:t.resetCountry}},[t._v("Change location")]),t._v(" "),s("p",{staticClass:"amount-upcoming"},[t._v(t._s(t.localEvents.length)+" upcoming events in country '"+t._s(t.countrySet)+"':")]),t._v(" "),t._m(0,!1,!1),t._v(" "),t.localEvents.length?s("div",{staticClass:"event-list",attrs:{id:"local-events-list"}},t._l(t.localEvents,function(e){return s("div",{key:e.datetime,staticClass:"event-div"},[s("p",{staticClass:"event-date"},[t._v(t._s(e.datetime))]),t._v(" "),s("p",{staticClass:"event-venue"},[t._v(t._s(e.venue.name))]),t._v(" "),s("p",{staticClass:"event-city"},[t._v(t._s(e.venue.city)+", "+t._s(e.venue.country))]),t._v(" "),e.ticketUrl?s("a",{attrs:{href:e.ticketUrl}},[t._v("Tickets")]):s("a",{attrs:{href:e.searchUrl}},[t._v("Search tickets")])])})):s("div",{staticStyle:{"margin-top":"5px"}},[t._v("No local upcoming events :(")])]):s("div",{attrs:{id:"ask-location"}},[s("p",[t._v("\n                        No location set, do you want to set it now so we can show you events in your country?\n                    ")]),t._v(" "),s("div",{attrs:{id:"country-artist-view"}},[s("autocomplete",{attrs:{title:"Select country:",placeholder:"Country name",data:"static/countries.json",callback:"countrySearch",submitText:"Select"}})],1)])]),t._v(" "),s("div",{attrs:{id:"event-container"}},[s("h1",[t._v("Global events:")]),t._v(" "),t.events.length?s("p",{staticClass:"amount-upcoming"},[t._v("\n                    "+t._s(t.artistInfo.upcoming_event_count)+" upcoming events worldwide:\n                ")]):t._e(),t._v(" "),t._m(1,!1,!1),t._v(" "),s("hr"),t._v(" "),t.events.length?s("div",{staticClass:"event-list",attrs:{id:"event-list"}},t._l(t.events,function(e){return s("div",{key:e.datetime,staticClass:"event-div"},[s("p",{staticClass:"event-date"},[t._v(t._s(e.datetime))]),t._v(" "),s("p",{staticClass:"event-venue"},[t._v(t._s(e.venue.name))]),t._v(" "),s("p",{staticClass:"event-city"},[t._v(t._s(e.venue.city)+", "+t._s(e.venue.country))]),t._v(" "),e.ticketUrl?s("a",{attrs:{href:e.ticketUrl}},[t._v("Tickets")]):s("a",{attrs:{href:e.searchUrl}},[t._v("Search tickets")])])})):s("div",{staticStyle:{"margin-top":"5px"}},[t._v("No global upcoming events :(")])])])])])},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-header"},[s("p",[t._v("Date")]),s("p",[t._v("Venue")]),s("p",[t._v("Location")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-header"},[s("p",[t._v("Date")]),t._v(" "),s("p",[t._v("Venue")]),t._v(" "),s("p",[t._v("Location")])])}],nt={render:at,staticRenderFns:it},rt=nt,ot=s("VU/8"),ct=o,lt=ot(st,rt,!1,ct,"data-v-5290240b",null),ut=lt.exports,ht=s("M4fF"),dt=s.n(ht),vt={data:function(){return{events:{},allEvents:[],allLocalEvents:[],countrySet:!1,localEvents:[],showEvents:!1,showAllEvents:!1,artistImages:[],encodedLink:"",loading:!0,lastFMlast:!1,BITlast:!1,startTime:0,trackedArtists:{list:[]},removedArtist:""}},watch:{$route:function(){}},computed:{orderedEvents:function(){return dt.a.orderBy(this.allLocalEvents,function(t){return new Date(t.datetime)})}},mounted:function(){if(console.log(_.saved),_.saved.loaded)return this.allLocalEvents=_.saved.allLocalEvents,this.trackedArtists=_.saved.trackedArtists,this.countrySet=_.saved.countrySet||localStorage.getItem("Country")||!1,this.artistImages=_.saved.artistImages,this.loading=!1,this.showEvents=!0,void console.log(this.orderedEvents);this.startTime=new Date;var t=localStorage.getItem("Tracked");t?(this.trackedArtists=JSON.parse(t),_.saved.trackedArtists=this.trackedArtists):this.loading=!1,this.sortTrackedArtists();var e=localStorage.getItem("Country");if(e){this.countrySet=e,_.saved.countrySet=this.countrySet;for(var s=0,a=this.trackedArtists.list.length;s<a;s++){var i=this.trackedArtists.list[s];this.getLastFMInfo(i),this.getArtistEvents(i)}_.saved.loaded=!0}},methods:{getArtistEvents:function(t){var e=this,s="https://rest.bandsintown.com/";(function(t){return new p.a(function(e,a){fetch(s+"artists/"+t+"/events?app_id='ConcerTrack v0.0.1'",{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){console.log(t)})})})(t).then(function(s){e.events=s,e.events.forEach(function(s){var a=new Date(s.datetime),i=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];s.datetime=a.getDate()+" "+i[a.getMonth()]+" "+a.getFullYear(),s.offers.length?s.ticketUrl=s.offers[0].url:s.searchUrl="https://duckduckgo.com/?q="+t+" "+s.datetime,s.venue.country==e.countrySet&&(e.localEvents.push(s),e.allLocalEvents.push(s)),e.allEvents.push(s)})}).then(function(){if(t==e.trackedArtists.list[e.trackedArtists.list.length-1]){if(e.BITlast=!0,!e.lastFMlast)return;console.log("BITlast"),e.showLocalEvents()}})},getLastFMInfo:function(t){var e=this;(function(t){var e=encodeURIComponent(t);return new p.a(function(t,s){fetch("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="+e,{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(e){t(e)}).catch(function(t){console.log(t)})})})(t).then(function(s){if(s.error)throw s.message;var a=s.artist.image[s.artist.image.length-4]["#text"];e.artistImages.push({artist:t,url:a})}).then(function(){if(t==e.trackedArtists.list[e.trackedArtists.list.length-1]){if(e.lastFMlast=!0,!e.BITlast)return;console.log("lastFMlast"),e.showLocalEvents()}})},callBackForm:function(t,e){var s=this;if("artistSearch"==t){var a=e;_.doesArtistExist(a).then(function(t){t.id&&s.$router.push({path:"/artists/"+a})}).catch(function(t){t.toString().includes("SyntaxError")&&(s.$children[0].errorMessage="Sorry, we couldn't find that artist :(")})}else if("countrySearch"==t){var i=e;localStorage.setItem("Country",i),this.countrySet=i,this.localEvents=[];for(var n=0,r=this.events.length;n<r;n++){var o=this.events[n];o.venue.country==i&&this.localEvents.push(o)}this.allLocalEvents=[],this.allEvents=[],this.startTime=new Date;for(var c=0,l=this.trackedArtists.list.length;c<l;c++){var u=this.trackedArtists.list[c];this.getLastFMInfo(u),this.getArtistEvents(u)}}},resetCountry:function(){localStorage.removeItem("Country"),this.countrySet=!1,this.showEvents=!1,this.loading=!0},trackArtist:function(){if(this.tracking){this.tracking=!1;var t=this.trackedArtists.list.indexOf(this.lastFMData.name);-1!=t&&this.trackedArtists.list.splice(t,1)}else this.tracking=!0,this.trackedArtists.list.includes(this.lastFMData.name.toLowerCase())||this.trackedArtists.list.push(this.lastFMData.name.toLowerCase());localStorage.setItem("Tracked",et()(this.trackedArtists))},getExportLink:function(){var t=btoa(et()({list:this.trackedArtists.list}));t=t.split("=").shift(),this.encodedLink=window.location.origin+"/#/import/"+t},showLocalEvents:function(){var t=this,e=new Date,s=e.getTime()-this.startTime.getTime();setTimeout(function(){for(var e=0,s=t.allLocalEvents.length;e<s;e++)for(var a=t.allLocalEvents[e],i=0,n=t.artistImages.length;i<n;i++){var r=t.artistImages[i];r.artist.toLowerCase()==a.lineup[0].toLowerCase()&&(t.allLocalEvents[e].imageUrl=r.url)}t.showEvents=!0,t.loading=!1},s/10),_.saved.allLocalEvents=this.allLocalEvents,_.saved.artistImages=this.artistImages},removeFromTracked:function(t){var e=this.trackedArtists.list.indexOf(t);-1!=e&&this.trackedArtists.list.splice(e,1),localStorage.setItem("Tracked",et()(this.trackedArtists)),this.removedArtist=t},undoRemove:function(){for(var t=this,e=!1,s=0,a=this.trackedArtists.list.length;s<a;s++){this.trackedArtists.list[s].toLowerCase()==this.removedArtist.toLowerCase()&&(e=!0)}e||this.trackedArtists.list.push(this.removedArtist),localStorage.setItem("Tracked",et()(this.trackedArtists));var i=document.getElementById("undo-notification");i.classList.add("lightSpeedOut");var n=function(){t.classList.remove("lightSpeedOut"),t.removedArtist=""};i.addEventListener("animationend",function(){n()}),this.sortTrackedArtists()},sortTrackedArtists:function(){this.trackedArtists.list.sort(function(t,e){return t=t.replace("The ","").toLowerCase(),e=e.replace("The ","").toLowerCase(),t<e?-1:t>e?1:0})}}},ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"output-container"}},[t.removedArtist?s("span",{staticClass:"animated lightSpeedIn",attrs:{id:"undo-notification"}},[s("p",[t._v("\n        "+t._s(t.removedArtist)+" removed from tracked artists, "),s("a",{on:{click:t.undoRemove}},[t._v("undo?")])])]):t._e(),t._v(" "),s("div",{attrs:{id:"main-content"}},[s("h1",[t._v("Tracked Artists:")]),t._v(" "),t.countrySet?s("div",{attrs:{id:"local-events"}},[s("b",[t._v("Showing events in: '"+t._s(t.countrySet)+"'")]),t._v(" "),s("br"),t._v(" "),s("button",{on:{click:t.resetCountry}},[t._v("Change location")])]):s("div",{attrs:{id:"ask-location"}},[s("p",[t._v("\n                No location set, do you want to set it now so we can show you events in your country?\n            ")]),t._v(" "),s("div",{attrs:{id:"country-tracked-view"}},[s("autocomplete",{attrs:{title:"Select country:",placeholder:"Country name",data:"static/countries.json",callback:"countrySearch",submitText:"Select"}})],1)]),t._v(" "),s("div",{attrs:{id:"export-button-container"}},[s("button",{on:{click:t.getExportLink}},[t._v("Get link to export tracked artists:")]),t._v(" "),s("br"),t._v(" "),t.encodedLink?s("textarea",{attrs:{id:"",name:"",cols:"30",rows:"10"}},[t._v(t._s(t.encodedLink))]):t._e(),t._v(" "),s("br"),t._v(" "),t.encodedLink?s("p",[t._v("Open this URL in your browser to share tracked artists.")]):t._e()]),t._v(" "),s("div",{attrs:{id:"tracked-artist-events-list"}},[t.loading&&t.countrySet?s("div",{staticClass:"message-div"},[t._v("\n                Loading events...\n            ")]):t._e(),t._v(" "),t._l(t.orderedEvents,function(e,a){return t.showEvents&&!t.showAllEvents?s("div",{staticClass:"tracked-artist-event animated fadeInLeft",style:{animationDelay:.1*a+"s"}},[s("img",{staticClass:"artist-image",attrs:{src:e.imageUrl,alt:e.lineup[0]}}),t._v(" "),s("div",{staticClass:"event-info-wrapper"},[s("h2",{staticClass:"artist-name"},[s("a",{attrs:{href:"#/artists/"+e.lineup[0]}},[t._v(t._s(e.lineup[0]))])]),t._v(" "),s("p",{staticClass:"event-date"},[t._v(t._s(e.datetime))]),t._v(" "),s("p",{staticClass:"event-city"},[t._v(t._s(e.venue.city))]),t._v(" "),s("p",{staticClass:"event-venue"},[t._v(t._s(e.venue.name))]),t._v(" "),e.ticketUrl?s("a",{staticClass:"event-tickets",attrs:{href:e.ticketUrl}},[t._v("Tickets")]):s("a",{staticClass:"event-tickets",attrs:{href:e.searchUrl}},[t._v("Search for tickets")])])]):t._e()}),t._v(" "),t.showEvents&&!t.orderedEvents.length&&t.countrySet?s("div",{staticClass:"message-div"},[t._v("\n                No local events :(\n            ")]):t._e(),t._v(" "),t.countrySet?t._e():s("div",{staticClass:"message-div"},[t._v("\n                Choose a location to see local events.\n            ")]),t._v(" "),t.countrySet&&!t.trackedArtists.list.length?s("div",{staticClass:"message-div"},[t._v("\n                No tracked artists.\n            ")]):t._e()],2),t._v(" "),s("div",{attrs:{id:"tracked-artist-list-container"}},[s("div",{attrs:{id:"artist-list-header"}},[t._v("All tracked artists:")]),t._v(" "),s("div",{attrs:{id:"tracked-artist-list"}},t._l(t.trackedArtists.list,function(e){return s("span",[s("i",{staticClass:"fa fa-times",on:{click:function(s){t.removeFromTracked(e)}}}),s("a",{attrs:{href:"#/artists/"+e}},[t._v(" "+t._s(e)+" ")])])}))])])])},mt=[],pt={render:ft,staticRenderFns:mt},gt=pt,_t=s("VU/8"),kt=c,wt=_t(vt,gt,!1,kt,"data-v-d3f998c2",null),yt=wt.exports,St={data:function(){return{}},watch:{$route:function(){document.getElementById("input-field").focus()}},mounted:function(){document.getElementById("input-field").focus()},methods:{callBackForm:function(t,e){var s=this;if("artistSearch"==t){var a=e;_.doesArtistExist(a).then(function(t){t.id&&s.$router.push({path:"/artists/"+a})}).catch(function(t){if(t.toString().includes("SyntaxError"))for(var e=0,i=s.$children.length;e<i;e++){var n=s.$children[e];"autocomplete-container"==n.$el.id&&(n.inputValue=a,n.errorMessage="Sorry, we couldn't find that artist :(")}})}}}},Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search-body"}},[t._m(0,!1,!1),t._v(" "),s("div",{attrs:{id:"not-description-wrapper"}},[s("div",{attrs:{id:"not-description"}},[s("autocomplete",{attrs:{title:"Search for events from an artist:",placeholder:"Artist name",data:"static/AllList.json",callback:"artistSearch",submitText:"Search"}}),t._v(" "),t._m(1,!1,!1)],1)])])},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"website-description"}},[s("h2",[t._v("\n            Find concerts, track artists. No hassle.\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"img-container"}},[s("img",{attrs:{src:"static/map.svg",alt:""}})])}],bt={render:Et,staticRenderFns:Ct},At=bt,Lt=s("VU/8"),Mt=l,It=Lt(St,At,!1,Mt,"data-v-4efa96c4",null),Tt=It.exports,Ft={data:function(){return{}},watch:{},mounted:function(){},methods:{}},xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},$t=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"output-container"}},[s("div",{attrs:{id:"output"}},[s("div",{attrs:{id:"left-side"}},[s("img",{attrs:{src:"static/lg.png",alt:""}}),t._v(" "),s("div",{attrs:{id:"info-container"}},[s("h1",[t._v("Leon Grasmeijer")]),t._v(" "),s("a",{staticClass:"link-icon",attrs:{href:"https://github.com/LeonGr"}},[s("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{staticClass:"link-icon",attrs:{href:"mailto:leongrasmeijer@gmail.com"}},[s("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("a",{staticClass:"link-icon",attrs:{href:"https://codepen.io/LeonGr/"}},[s("i",{staticClass:"fa fa-codepen",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("p",[t._v("\n                    Leon Grasmeijer is the developer of this website,\n                    he is studying Computer Science & Engineering at the Eindhoven University of Technology\n                    and loves mechanical keyboards and pizza. Read more on his "),s("a",{attrs:{href:"http://leongr.nl"}},[t._v("website")]),t._v(".\n                ")])])])])])}],Dt={render:xt,staticRenderFns:$t},Ut=Dt,Bt=s("VU/8"),jt=u,Vt=Bt(Ft,Ut,!1,jt,"data-v-0b325e7c",null),qt=Vt.exports,Rt={data:function(){return console.log("data"),{errorMessage:"",importCode:"",trackedArtists:{list:[]}}},watch:{$route:function(){console.log("route"),window.location.reload()}},mounted:function(){this.loadImport()},methods:{loadImport:function(){this.importCode=this.$route.params.importCode;var t=atob(this.importCode);try{JSON.parse(t)}catch(t){return void(this.errorMessage="Invalid import code. Are you sure you copied the correct URL? <br> It should look something like this: <a href='"+window.location.origin+"/#/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19'>"+window.location.origin+"/#/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19</a>")}localStorage.setItem("Tracked",t),this.$router.push({path:"/tracked"}),alert("Import Successful")},goBack:function(){console.log(this.$router.back())}}},Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"error-container"}},[s("div",{attrs:{id:"error-message-container"}},[s("h1",[t._v("Whoopsie daisy!")]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.errorMessage)}}),t._v(" "),s("a",{on:{click:t.goBack}},[t._v("Go back to previous page")])])])},Nt=[],Gt={render:Ot,staticRenderFns:Nt},Jt=Gt,Wt=s("VU/8"),Pt=h,Qt=Wt(Rt,Jt,!1,Pt,"data-v-02758587",null),Ht=Qt.exports,Yt={data:function(){return console.log("data"),{}},watch:{$route:function(){console.log("route")}},mounted:function(){},methods:{}},Xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},zt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact"}},[s("div",{attrs:{id:"contact-body"}},[s("h1",[t._v("Contact")]),t._v(" "),s("p",[t._v("\n            Do you have a question, an idea for improvement or do you just want to thanks us for building this website?\n            "),s("br"),t._v(" "),s("br"),t._v("\n            You can contact us at "),s("a",{attrs:{href:"mailto:contact@ConcerTrack.com"}},[t._v("contact@ConcerTrack.com")]),t._v(".\n        ")])])])}],Zt={render:Xt,staticRenderFns:zt},Kt=Zt,te=s("VU/8"),ee=d,se=te(Yt,Kt,!1,ee,"data-v-33f48e43",null),ae=se.exports,ie={data:function(){return{}},watch:{$route:function(){}},mounted:function(){},methods:{}},ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},re=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"faq"}},[s("div",{attrs:{id:"faq-body"}},[s("h1",[t._v("Frequently Asked Questions:")]),t._v(" "),s("div",{staticClass:"question"},[s("h2",[t._v("Why does "),s("i",[t._v("artist_name")]),t._v(" not show up in the autocomplete list?")]),t._v(" "),s("p",[t._v("We are trying to get as many artists as possible in our autocomplete function. But sometimes the artist just does not exist in any of the lists we are using. This does not always mean that we don't have info on the artist! You can contact us as "),s("a",{attrs:{href:"mailto:contact@concertrack.com"}},[t._v("contact@concertrack.com")]),t._v(" and we'll gladly add them to our list.")])]),t._v(" "),s("div",{staticClass:"question"},[s("h2",[t._v("Why does "),s("i",[t._v("artist_name")]),t._v(' show up in the autocomplete list but gives an "artist not found" error?')]),t._v(" "),s("p",[t._v("We are using the "),s("a",{attrs:{href:"https://bandsintown.com"}},[t._v("bandsintown")]),t._v(" and "),s("a",{attrs:{href:"https://last.fm"}},[t._v("last.fm")]),t._v(" APIs to get our information. So if they don't have information about the artist, we unfortunately can't provide you with information either.")])]),t._v(" "),s("div",{staticClass:"question"},[s("h2",[t._v("This site sucks!")]),t._v(" "),s("p",[t._v("That's not a question. However, we are always happy to hear suggestions on how to improve our site! Send us a message at "),s("a",{attrs:{href:"mailto:contact@concertrack.com"}},[t._v("contact@concertrack.com")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"question"},[s("h2",[t._v("More questions?")]),t._v(" "),s("p",[t._v("We can help! Just send us an email and we will try to get back to you as soon as possible: "),s("a",{attrs:{href:"mailto:contact@concertrack.com"}},[t._v("contact@concertrack.com")]),t._v(".")])])])])}],oe={render:ne,staticRenderFns:re},ce=oe,le=s("VU/8"),ue=v,he=le(ie,ce,!1,ue,"data-v-778c0410",null),de=he.exports;f.a.use(K.a);var ve=new K.a({routes:[{path:"/faq",component:de},{path:"/contact",component:ae},{path:"/import/:importCode",component:Ht},{path:"/tracked",component:yt},{path:"/artists/Leon Grasmeijer",component:qt},{path:"/artists/Leon%20Grasmeijer",redirect:"/artists/Leon Grasmeijer"},{path:"/artists/:artist",component:ut},{path:"/",component:Tt},{path:"*",redirect:"/"}]}),fe={data:function(){return{inputValue:"",listOfData:[],allMatching:[],startMatching:[],showMatching:[],lastInputLength:0,maxResults:10,selectedSuggestion:null,errorMessage:""}},props:{title:"",placeholder:"",data:"",callback:"",submitText:""},watch:{$route:function(){this.errorMessage=""}},mounted:function(){var t=this,e=function(e){var s=Array.prototype.slice.call(t.$el.children[0].children);"li"!=e.target.localName&&1!=s.indexOf(e.target)&&t.deselectInput()};window.addEventListener("mousedown",function(t){e(t)});var s=function(e){"ArrowDown"==e||"Tab"==e?t.selectSuggestion("down"):"ArrowUp"==e?t.selectSuggestion("up"):"Enter"==e&&t.submitSearch()};this.$el.children[0].children[1].addEventListener("keydown",function(t){s(t.key),(t.key.includes("ArrowUp")||t.key.includes("ArrowDown")||t.key.includes("Tab"))&&t.preventDefault()})},methods:{selectInput:function(){var t=this;if(!this.listOfData.length){(function(){return new p.a(function(e,s){fetch(window.location.origin+"/"+t.data,{method:"GET",headers:{accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){console.log(t)})})})().then(function(e){t.listOfData=e})}},deselectInput:function(){this.showMatching=this.allMatching=this.startMatching=[]},submitSearch:function(){if(null!=this.selectedSuggestion){var t=document.getElementById("search-results"),e=t.children;this.inputValue=e[this.selectedSuggestion].innerText}this.submitForm()},selectSuggestion:function(t){var e=document.getElementById("search-results");if(e){for(var s=e.children,a=0,i=s.length;a<i;a++)s[a].classList.remove("selected");if("up"==t)if(this.selectedSuggestion)this.selectedSuggestion--,s[this.selectedSuggestion].classList.add("selected");else{var n=this.showMatching.length;s[n-1].classList.add("selected"),this.selectedSuggestion=n-1}else"down"==t&&(null==this.selectedSuggestion?(this.selectedSuggestion=0,s[this.selectedSuggestion].classList.add("selected")):this.selectedSuggestion==this.showMatching.length-1?(s[0].classList.add("selected"),this.selectedSuggestion=0):(this.selectedSuggestion++,s[this.selectedSuggestion].classList.add("selected")))}},clickSearchResult:function(t){this.inputValue=t.target.innerText,this.submitForm()},hoverSearchResult:function(t){for(var e=document.getElementById("search-results"),s=e.children,a=0,i=s.length;a<i;a++)s[a].classList.remove("selected"),t.target==s[a]&&(this.selectedSuggestion=a,t.target.classList.add("selected"))},inputChanged:function(){this.selectedSuggestion=null;this.errorMessage="";var t=this.inputValue.toLowerCase();if(t.length>1){if(t.length>this.lastInputLength&&this.allMatching.length>0){this.selectSuggestion("down");for(var e=[],s=[],a=0,i=this.startMatching.length;a<i;a++)this.startMatching[a].toLowerCase().startsWith(t)&&s.push(this.startMatching[a]);for(var n=0,r=this.allMatching.length;n<r;n++){var o=this.allMatching[n];o.toLowerCase().includes(t)&&!o.startsWith(t)&&e.push(this.allMatching[n])}this.allMatching=e,this.startMatching=s}else{this.allMatching=[],this.startMatching=[];for(var c=0,l=this.listOfData.length;c<l;c++){var u=this.listOfData[c];u.toLowerCase().startsWith(t)?this.startMatching.push(u):u.toLowerCase().includes(t)&&!u.startsWith(t)&&this.allMatching.push(u)}}this.showMatching=[];for(var h=this.maxResults,d=0,v=h;d<v;d++)d<this.startMatching.length&&this.showMatching.push(this.startMatching[d]);if(this.showMatching.length<h)for(var f=h-this.showMatching.length,m=0,p=f;m<p;m++)m<this.allMatching.length&&this.showMatching.push(this.allMatching[m])}else this.allMatching=this.startMatching=this.showMatching=[];this.lastInputLength=this.inputValue.length},submitForm:function(){this.inputValue&&(this.showMatching=this.allMatching=this.startMatching=[],this.$parent.callBackForm(this.callback,this.inputValue),this.inputValue="",this.errorMessage="")},hideError:function(){var t=this,e=document.getElementById("errorMessage");e.classList.add("lightSpeedOut");var s=function(){e.classList.remove("lightSpeedOut"),t.errorMessage=""};e.addEventListener("animationend",function(){s()})}}},me=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"autocomplete-container"}},[s("form",{attrs:{id:"autocomplete-form"},on:{submit:function(t){t.preventDefault()}}},[s("h1",{attrs:{id:"title"}},[t._v(t._s(t.title))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{id:"input-field",type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.inputChanged],focus:t.selectInput}}),t._v(" "),s("button",{attrs:{id:"submitButton"},domProps:{innerHTML:t._s(t.submitText)},on:{click:t.submitForm}}),t._v(" "),t.showMatching.length?s("ul",{attrs:{id:"search-results"}},t._l(t.showMatching,function(e,a){return s("li",{staticClass:"animated fadeIn",style:{animationDelay:.03*a+"s"},on:{click:function(e){t.clickSearchResult(e)},mouseover:function(e){t.hoverSearchResult(e)}}},[t._v(t._s(e))])})):t._e()]),t._v(" "),t.errorMessage?s("h1",{staticClass:"animated lightSpeedIn",attrs:{id:"errorMessage"},on:{click:t.hideError}},[t._v(t._s(t.errorMessage))]):t._e()])},pe=[],ge={render:me,staticRenderFns:pe},_e=ge,ke=s("VU/8"),we=ke(fe,_e,!1,null,null,null),ye=we.exports;f.a.config.productionTip=!1,f.a.component("autocomplete",ye),new f.a({el:"#app",router:ve,template:"<App/>",components:{App:Z}})},QgFA:function(t,e){},RQgO:function(t,e){},VRII:function(t,e){},bqBP:function(t,e){},dD7k:function(t,e){},evuP:function(t,e){},nicw:function(t,e){},vpXx:function(t,e){},yQTD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c1bbf9a028e30e97e102.js.map