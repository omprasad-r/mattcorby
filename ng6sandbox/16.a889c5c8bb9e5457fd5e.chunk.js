(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HiSd:function(n,t,l){"use strict";l.r(t);var e=l("TdOr"),i=function(){return function(){}}(),a=l("sAde"),o=l("zbEK"),u=l("2Qka"),r=function(){function n(n,t,l,e){this._musicService=n,this._generalService=t,this._router=l,this._spotifyService=e}return n.prototype.ngOnInit=function(){var n=this;this._router.params.forEach(function(t){n.id=t.id;n._generalService.getFilterData("audioDetailEndpoint","nid",n.id).subscribe(function(t){n.audio=t[0],n.mapSpotifyData()},function(n){},function(){})}),window.scroll(0,0)},n.prototype.mapSpotifyData=function(){var n=this;this._spotifyService.getSpotifyData(this.audio.spotifyTrackID).subscribe(function(t){n.audio.albumArt=t.album.images[0].url,n.audio.source=t.preview_url,n.audio.isPlaying=!1,n.audio.artist=t.artists[0].name},function(n){},function(){})},n.prototype.onAudioPlayerStateChange=function(n,t){this.audio.isPlaying=n.isPlaying},n}(),c=function(){return function(){}}(),d=l("OvSy"),p=l("yZfy"),s=[[""]],g=e["ɵcrt"]({encapsulation:0,styles:s,data:{}});function f(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["ɵdid"](1,212992,null,0,p.RouterOutlet,[p.ChildrenOutletContexts,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(n,t){n(t,1,0)},null)}var m=e["ɵccf"]("app-track",i,function(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-track",[],null,null,null,f,g)),e["ɵdid"](1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),h=l("wTuo"),y=function(){function n(){this.forcestop=!1,this.playerStateChange=new e.EventEmitter,this.customClass="",this.currentTime=0,this.isPlaying=!1}return n.prototype.togglePlay=function(){this.isPlaying=!this.isPlaying,this.playerStateChange.emit({isPlaying:this.isPlaying})},n.prototype.ngOnChanges=function(){this.isPlaying=!this.forcestop,!this.isPlaying&&this.audio&&this.audio.pause()},n.prototype.play=function(){this.audio.play(),this.togglePlay()},n.prototype.pause=function(){this.audio.pause(),this.isPlaying=!this.isPlaying},n.prototype.seek=function(n){this.audio.currentTime=n.target.value},n.prototype.ngOnInit=function(){var n=this;this.audio=new Audio(this.src),this.audio.ontimeupdate=function(){n.currentTime=n.audio.currentTime},this.audio.onended=function(){n.isPlaying=!n.isPlaying}},n}(),b=[['input[type=range][_ngcontent-%COMP%]{-webkit-appearance:none;width:82%;padding:25px 0 0;background:transparent}input[type=range][_ngcontent-%COMP%]:focus{outline:none}input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{width:100%;height:2px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#89869a;border-radius:1px;border:0 solid #010101}input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{height:12px;width:12px;border-color:transparent;border-radius:12px;background:#f6f5fd;cursor:pointer;-webkit-appearance:none;margin-top:-5px}input[type=range][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track{background:#89869a}input[type=range][_ngcontent-%COMP%]::-moz-range-track{width:100%;height:2px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:#89869a;border-radius:1px;border:0 solid #010101}input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{box-shadow:0 0 1px #000,0 0 0 #0d0d0d;height:12px;width:12px;border-radius:12px;background:#f6f5fd;cursor:pointer}input[type=range][_ngcontent-%COMP%]::-ms-track{width:100%;height:3px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}input[type=range][_ngcontent-%COMP%]::-ms-fill-lower{background:#575757}input[type=range][_ngcontent-%COMP%]::-ms-fill-lower, input[type=range][_ngcontent-%COMP%]::-ms-fill-upper{border:0 solid #010101;border-radius:2px;box-shadow:0 0 0 #000,0 0 0 #0d0d0d}input[type=range][_ngcontent-%COMP%]::-ms-fill-upper{background:#646464}input[type=range][_ngcontent-%COMP%]::-ms-thumb{box-shadow:0 0 1px #000,0 0 0 #0d0d0d;height:12px;width:12px;border-radius:12px;background:#f6f5fd;cursor:pointer;height:1px}input[type=range][_ngcontent-%COMP%]:focus::-ms-fill-lower{background:#646464}input[type=range][_ngcontent-%COMP%]:focus::-ms-fill-upper{background:#717171}.play[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:url(/sites/g/files/g2000006551/themes/site/sandbox/assets/i/track-play.png) no-repeat 50% transparent}.pause[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .play[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%;display:inline-block;position:absolute;top:0;left:0;cursor:pointer;text-indent:-9999px}.pause[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:url(/sites/g/files/g2000006551/themes/site/sandbox/assets/i/pause.png) no-repeat 50% transparent}span[_ngcontent-%COMP%]{float:right;font-size:12px;margin-top:20px}.playing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.playing[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{display:none}.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(27,33,78,.78)}.playing[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:before{background:transparent}.thumbnail[_ngcontent-%COMP%]{position:relative;line-height:0}.playing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:1px solid #fff}.thumbnail[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(27,33,78,.78)}.playing[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:before{background:transparent}img[_ngcontent-%COMP%]{min-height:152px}.track-detail.music-player[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:74%;height:auto}.music-player.track-detail[_ngcontent-%COMP%]{max-width:550px;width:100%;display:block;margin:0 auto;background-image:url(/sites/g/files/g2000006551/themes/site/sandbox/assets/i/player_bg.png);background-repeat:repeat-x;background-size:auto 100%;border-radius:10px;border:1px solid #000;overflow:hidden;box-sizing:border-box;-webkit-box-sizing:border-box}.music-player.track-detail[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-box-sizing:border-box;padding:0 2% 0 1%}.track-detail.music-player[_ngcontent-%COMP%] > div.thumbnail[_ngcontent-%COMP%]{width:25%;height:auto;line-height:0}.track-detail.music-player[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]{width:100%;padding:0;background:transparent}.track-detail.music-player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:1px;border:0 none}.track-detail.music-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;margin-top:9px;display:block;float:none;color:#fff}.track-detail.music-player[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:19px;margin:0;line-height:1}.track-detail.music-player[_ngcontent-%COMP%]   span.artist[_ngcontent-%COMP%]{font-size:12px;margin-top:0;margin-bottom:4px;color:#969696}@media only screen and (max-width:767px){.music-player.track-detail[_ngcontent-%COMP%]{max-width:350px}.track-detail.music-player[_ngcontent-%COMP%] > div.thumbnail[_ngcontent-%COMP%]{width:100px}.track-detail.music-player[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:calc(100% - 106px);height:auto}.track-detail.music-player[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:14px}}']],C=e["ɵcrt"]({encapsulation:0,styles:b,data:{}});function P(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;"click"===t&&(e=!1!==i.play()&&e);return e},null,null)),(n()(),e["ɵted"](-1,null,[" Play"]))],null,null)}function _(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0,i=n.component;"click"===t&&(e=!1!==i.pause()&&e);return e},null,null)),(n()(),e["ɵted"](-1,null,["Pause "]))],null,null)}function O(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,7,"div",[["class","thumbnail"]],null,null,null,null,null)),(n()(),e["ɵeld"](1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e["ɵeld"](2,0,null,null,2,"div",[["class","play"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,P)),e["ɵdid"](4,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](5,0,null,null,2,"div",[["class","pause"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,_)),e["ɵdid"](7,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,4,0,!l.isPlaying),n(t,7,0,l.isPlaying)},function(n,t){n(t,1,0,t.component.albumart)})}function M(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,0,"span",[["class","title"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.component.title)})}function k(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,0,"span",[["class","artist"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.component.artist)})}function x(n){return e["ɵvid"](0,[e["ɵpid"](0,h.DecimalPipe,[e.LOCALE_ID]),(n()(),e["ɵeld"](1,0,null,null,11,"div",[],[[2,"playing",null],[8,"className",0]],null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,O)),e["ɵdid"](3,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](4,0,null,null,8,"div",[["class","player"]],null,null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,M)),e["ɵdid"](6,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵand"](16777216,null,null,1,null,k)),e["ɵdid"](8,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](9,0,null,null,0,"input",[["max","30"],["step",".001"],["type","range"]],[[8,"value",0]],[[null,"input"]],function(n,t,l){var e=!0,i=n.component;"input"===t&&(e=!1!==i.seek(l)&&e);return e},null,null)),(n()(),e["ɵeld"](10,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["ɵted"](11,null,[" 0:",""])),e["ɵppd"](12,2)],function(n,t){var l=t.component;n(t,3,0,l.albumart),n(t,6,0,l.title),n(t,8,0,l.artist)},function(n,t){var l=t.component;n(t,1,0,l.isPlaying,e["ɵinlineInterpolate"](1,"music-player ",l.customClass,"")),n(t,9,0,l.currentTime),n(t,11,0,e["ɵunv"](t,11,0,n(t,12,0,e["ɵnov"](t,0),l.currentTime%60,"2.0-0")))})}e["ɵccf"]("app-custom-audio",y,function(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-custom-audio",[],null,null,null,x,C)),e["ɵdid"](1,638976,null,0,y,[],null,null)],function(n,t){n(t,1,0)},null)},{src:"src",albumart:"albumart",forcestop:"forcestop",customClass:"customClass",artist:"artist",title:"title"},{playerStateChange:"playerStateChange"},[]);var v=[["h2[_ngcontent-%COMP%]{color:#807c9c;font-weight:600;padding:7px 0 35px;letter-spacing:3px}.lyrics[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:left}.lyrics[_ngcontent-%COMP%]{color:#181717;font-size:15px;margin-top:2%}.lyrics[_ngcontent-%COMP%] p{margin:0 0 30px;line-height:2;letter-spacing:1px}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{text-align:left;font-size:20px;padding:0}.lyrics[_ngcontent-%COMP%]{font-size:14px}}"]],w=e["ɵcrt"]({encapsulation:0,styles:v,data:{}});function R(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-custom-audio",[],null,[[null,"playerStateChange"]],function(n,t,l){var e=!0,i=n.component;"playerStateChange"===t&&(e=!1!==i.onAudioPlayerStateChange(l,i.i)&&e);return e},x,C)),e["ɵdid"](1,638976,null,0,y,[],{src:[0,"src"],albumart:[1,"albumart"],forcestop:[2,"forcestop"],customClass:[3,"customClass"],artist:[4,"artist"],title:[5,"title"]},{playerStateChange:"playerStateChange"})],function(n,t){var l=t.component;n(t,1,0,l.audio.source,l.audio.albumArt,!l.audio.isPlaying,"track-detail",l.audio.artist,l.audio.trackname)},null)}function I(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,4,"div",[["class","audio-detail g-layout"]],null,null,null,null,null)),(n()(),e["ɵeld"](1,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e["ɵand"](16777216,null,null,1,null,R)),e["ɵdid"](3,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["ɵeld"](4,0,null,null,0,"div",[["class","lyrics"]],[[8,"innerHTML",1]],null,null,null,null))],function(n,t){n(t,3,0,t.component.audio.source)},function(n,t){var l=t.component;n(t,1,0,l.audio.trackname+" LYRICS"),n(t,4,0,l.audio.lyrics)})}function T(n){return e["ɵvid"](0,[(n()(),e["ɵand"](16777216,null,null,1,null,I)),e["ɵdid"](1,16384,null,0,h.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.audio)},null)}var S=e["ɵccf"]("app-track-detail",r,function(n){return e["ɵvid"](0,[(n()(),e["ɵeld"](0,0,null,null,1,"app-track-detail",[],null,null,null,T,w)),e["ɵdid"](1,114688,null,0,r,[a.a,u.a,p.ActivatedRoute,o.a],null,null)],function(n,t){n(t,1,0)},null)},{audio:"audio"},{},[]),z=l("B+Nj"),N=l("GNhy"),A=l("T3q3"),L=l("FBU5"),D=l("vumo"),E=l("fAE3");l.d(t,"TrackModuleNgFactory",function(){return F});var F=e["ɵcmf"](c,[],function(n){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[d.a,m,S]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[e.LOCALE_ID,[2,h["ɵangular_packages_common_common_a"]]]),e["ɵmpd"](4608,z.t,z.t,[]),e["ɵmpd"](4608,N.j,N.p,[h.DOCUMENT,e.PLATFORM_ID,N.n]),e["ɵmpd"](4608,N.q,N.q,[N.j,N.o]),e["ɵmpd"](5120,N.a,function(n){return[n]},[N.q]),e["ɵmpd"](4608,N.m,N.m,[]),e["ɵmpd"](6144,N.k,null,[N.m]),e["ɵmpd"](4608,N.i,N.i,[N.k]),e["ɵmpd"](6144,N.b,null,[N.i]),e["ɵmpd"](4608,N.f,N.l,[N.b,e.Injector]),e["ɵmpd"](4608,N.c,N.c,[N.f]),e["ɵmpd"](4608,A.k,A.k,[]),e["ɵmpd"](4608,A.i,A.b,[]),e["ɵmpd"](4608,A.d,A.d,[A.k,A.i]),e["ɵmpd"](4608,A.g,A.a,[]),e["ɵmpd"](5120,A.e,A.j,[A.d,A.g]),e["ɵmpd"](4608,a.a,a.a,[]),e["ɵmpd"](1073742336,h.CommonModule,h.CommonModule,[]),e["ɵmpd"](1073742336,z.r,z.r,[]),e["ɵmpd"](1073742336,z.e,z.e,[]),e["ɵmpd"](1073742336,N.e,N.e,[]),e["ɵmpd"](1073742336,N.d,N.d,[]),e["ɵmpd"](1073742336,A.f,A.f,[]),e["ɵmpd"](1073742336,p.RouterModule,p.RouterModule,[[2,p["ɵangular_packages_router_router_a"]],[2,p.Router]]),e["ɵmpd"](1073742336,L.Angulartics2Module,L.Angulartics2Module,[[2,L.ANGULARTICS2_FORROOT_GUARD]]),e["ɵmpd"](1073742336,D.a,D.a,[]),e["ɵmpd"](1073742336,E.a,E.a,[]),e["ɵmpd"](1073742336,c,c,[]),e["ɵmpd"](256,N.n,"XSRF-TOKEN",[]),e["ɵmpd"](256,N.o,"X-XSRF-TOKEN",[]),e["ɵmpd"](1024,p.ROUTES,function(){return[[{path:"",component:i,data:{breadcrumb:"Track"},children:[{path:":id",component:r,data:{breadcrumb:"Track detail"}}]}]]},[])])})},fAE3:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()}}]);