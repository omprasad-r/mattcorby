(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{z5by:function(l,n,t){"use strict";t.r(n);var e=t("TdOr"),o=function(){function l(){}return l.prototype.routerOnActivate=function(){},l.prototype.ngOnInit=function(){window.scroll(0,0)},l}(),u=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),i=t("+rAa"),a=t("Afty"),r=t("2Qka"),c=function(){function l(l,n,t){this._generalService=l,this._commentsService=n,this.route=t,this.mediaThumbnails=[{title:"",path:"",field_original:""}],this.animate=!1,this.isMobile=!1,this.isGalleryDetailLightbox=!0}return l.prototype.ngOnInit=function(){var l=this;document.getElementsByTagName("body")[0].classList.add("content-page"),this.cols||(this.cols="grid-5_xs-1"),this.route.params.forEach(function(n){l.id=n.id,i.a.addEditLink(l.id);l._generalService.getFilterData("galleryDetailEndpoint","nid",n.id).subscribe(function(n){l.photo=n[0],l.photo.thumbnails&&(l.mediaThumbnails=l.modifyFieldCollectionData(l.photo.thumbnails))},function(l){},function(){})}),window.scroll(0,0)},l.prototype.modifyFieldCollectionData=function(l){var n=document.createRange();n.selectNode(document.body);for(var t=n.createContextualFragment(l).querySelectorAll("img"),e=[],o=0;o<t.length;o++){e.push({path:t[o].src,title:t[o].alt,field_original:t[o].src.replace("/styles/gallery_thumbnail_200x200/public","")})}return e},l.prototype.setSelectedPhoto=function(l,n){this.animate=!0,this.selectedPhoto=l,this.selectedIndex=n},l.prototype.lightboxClose=function(l){var n=this;this.animate=!1,setTimeout(function(){l&&(n.selectedPhoto=null,n.selectedIndex=null)},300)},l}(),d=function(){function l(l,n){this._generalService=l,this.route=n,this.showSideDrawer=!1,this.scrollEnd=0,this.shareBlockHeight=0,this.windowHeight=0,this.flySocialHeight=0,this.isFlySocialFixed=!1,this.loadingDone=!1}return l.prototype.routerOnActivate=function(){},l.prototype.ngOnInit=function(){var l=this;document.getElementsByTagName("body")[0].classList.add("content-page"),this.windowHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.route.params.forEach(function(n){l.id=n.id;i.a.addEditLink(l.id),l._generalService.getFilterData("galleryMediaEndpoint","mid",n.id).subscribe(function(n){l.photo=n[0],l.photo.path=l.photo.path.substring(l.photo.path.lastIndexOf("/")+1,l.photo.path.length)},function(l){},function(){})}),window.scroll(0,0)},l}(),s=function(){return function(){}}(),p=t("OvSy"),g=['.gallery-banner[_ngcontent-%COMP%]{height:100px;position:relative;overflow:hidden}@media only screen and (min-width:768px){.gallery-banner[_ngcontent-%COMP%]{height:245px}.gallery-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-104px}}.gallery-banner[_ngcontent-%COMP%]:before{content:"";background-color:#1b214e;opacity:.55}.gallery-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .gallery-banner[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%}.gallery-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-block;color:#fff;text-align:center;line-height:100px;font-size:40px;font-weight:700;opacity:.5}@media only screen and (min-width:768px){.gallery-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{top:120px;left:90px;font-size:62px;line-height:1;text-align:left}}@media only screen and (min-width:1024px){.gallery-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{left:200px}}'],h=t("yZfy"),m=[g],f=e["ɵcrt"]({encapsulation:0,styles:m,data:{}});function y(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["ɵdid"](1,212992,null,0,h.RouterOutlet,[h.ChildrenOutletContexts,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(l,n){l(n,1,0)},null)}var b=e["ɵccf"]("app-gallery",u,function(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-gallery",[],null,null,null,y,f)),e["ɵdid"](1,114688,null,0,u,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=t("SXAm"),x=t("wTuo"),v=t("cCSk"),O=function(){function l(l,n){this._generalService=l,this._router=n,this.detailPath="/photo",this.linkToCategory=!1,this.minimal=!1,this.morePhotos=0,this.noData=!0,this.totalPhotoLength=0,this.timeCount=0,this.showMoreButton=!0,this.mediaThumbnails=[{title:"",path:"",field_original:""}],this.loading=!1,this.switchCarouselTemplate=0}return l.prototype.getPhotos=function(){var l=this;this.selectedPhoto=void 0,this.photos=[];return this._generalService.getCatogoryData("galleryListEndpoint","photoCategoryEndpoint",this.category).subscribe(function(n){var t=n;for(var e in(0==t.length||t.length<l.count)&&(l.noData=!1),l.photos=n,l.photos)l.photos[e].thumbnails&&(l.photos[e].mediaThumbnails=l.modifyFieldCollectionData(l.photos[e].thumbnails))},function(l){},function(){}),this.photos},l.prototype.modifyFieldCollectionData=function(l){var n=document.createRange();n.selectNode(document.body);for(var t=n.createContextualFragment(l).querySelectorAll("img"),e=[],o=0;o<t.length;o++){e.push({path:t[o].src,title:t[o].alt})}return e},l.prototype.loadMorePhotos=function(){var l=this;this.morePhotos=this.morePhotos+this.count;this._generalService.getCatogoryData("photoListEndpoint","photoCategoryEndpoint",this.category,this.morePhotos).subscribe(function(n){var t=n;for(var e in n)n[e].field_photo=i.a.getImageSrc(n[e].field_photo.toString());l.photos=l.photos.concat(n),(0==t.length||t.length<l.count)&&(l.noData=!1)},function(l){},function(){})},l.prototype.gotoDetail=function(l,n){var t;this.selectedPhoto=l,t=i.a.getSlug(this.selectedPhoto.path),n&&(t="category/"+t),this._router.navigate([this.detailPath+"/"+t])},l.prototype.ngOnInit=function(){var l=this;this.CarouselOption&&(this.switchCarouselTemplate=1),this.photos=this.getPhotos(),this.cols||(this.cols="grid-5_xs-1"),Object(v.a)(2e3,300).subscribe(function(n){l.timeCount=l.timeCount+1,l.timeCount>4&&(l.timeCount=1)}),window.scroll(0,0)},l.prototype.ngOnChanges=function(){this.morePhotos=0},l.prototype.modLength=function(l,n){return l<=n?l-1:l-n},l}(),P=[['.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-bottom:20px;padding-top:80px}li[_ngcontent-%COMP%]{display:inline-block;box-sizing:border-box}h3[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.mask[_ngcontent-%COMP%]{font-size:0;position:relative;padding-bottom:100%;box-shadow:1px 1px 5px rgba(0,0,0,.7);overflow:hidden;background:#000}img[_ngcontent-%COMP%]{cursor:pointer}.mask[_ngcontent-%COMP%]:after, img[_ngcontent-%COMP%]{position:absolute}.mask[_ngcontent-%COMP%]:after{content:"";top:0;left:0;width:100%;height:100%;z-index:1;background-color:rgba(27,33,78,.7);opacity:0;transition:opacity .5s}.mask[_ngcontent-%COMP%]:hover:after{opacity:1}.mask[_ngcontent-%COMP%]{cursor:pointer}.mask[_ngcontent-%COMP%]:hover   .gallery[_ngcontent-%COMP%]{opacity:0}.mask[_ngcontent-%COMP%]:hover.image-no-0   .image-0[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%]:hover.image-no-1   .image-1[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%]:hover.image-no-2   .image-2[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%]:hover.image-no-3   .image-3[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%]:hover.image-no-4   .image-4[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%]:hover.image-no-5   .image-5[_ngcontent-%COMP%]{opacity:1}@keyframes fadeinandout{0%{opacity:1}50%{opacity:0}51%,to{opacity:1}}@keyframes cycle{0%{left:0}5%{left:0}20%{left:0;opacity:1;z-index:0}25%{left:100%;opacity:0;z-index:0}26%{left:-100%;opacity:0;z-index:-1}95%{left:-100%;opacity:0;z-index:0}96%{left:-100%;opacity:0}to{left:0;opacity:1}}@keyframes cycletwo{0%{left:-100%;opacity:0}20%{left:-100%;opacity:0}25%{left:0;opacity:1}30%{left:0;opacity:1}45%{left:0;opacity:1;z-index:0}50%{left:100%;opacity:0;z-index:0}51%{left:-100%;opacity:0;z-index:-1}to{left:-100%;opacity:0;z-index:-1}}@keyframes cyclethree{0%{left:-100%;opacity:0}45%{left:-100%;opacity:0}50%{left:0;opacity:1}65%{left:0;opacity:1}70%{left:0;opacity:1}75%{left:100%;opacity:0;z-index:0}76%{left:-100%;opacity:0;z-index:-1}to{left:-100%;opacity:0;z-index:-1}}@keyframes cyclefour{0%{left:-100%;opacity:0}70%{left:-100%;opacity:0}75%{left:0;opacity:1}80%{left:0;opacity:1}96%{left:0;opacity:1;z-index:0}to{left:100%;opacity:0;z-index:0}}@media only screen and (max-width:767px){[class*=grid-5][_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], [class*=grid-5][_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{-ms-flex-preferred-size:33%;flex-basis:33%;max-width:33%}}ul.photos[_ngcontent-%COMP%]{text-align:center}']],_=e["ɵcrt"]({encapsulation:0,styles:P,data:{}});function M(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,0,"img",[],[[8,"src",4],[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,0,0,n.context.$implicit.path,e["ɵinlineInterpolate"](1,"gallery image-",n.context.index,""))})}function k(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,7,"li",[["class","slider col"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,4,"div",[],[[8,"className",0]],[[null,"click"]],function(l,n,t){var o=!0;"click"===n&&(o=!1!==e["ɵnov"](l,2).onClick()&&o);return o},null,null)),e["ɵdid"](2,16384,null,0,h.RouterLink,[h.Router,h.ActivatedRoute,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["ɵpad"](3,1),(l()(),e["ɵand"](16777216,null,null,1,null,M)),e["ɵdid"](5,278528,null,0,x.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["ɵeld"](6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["ɵted"](7,null,["",""]))],function(l,n){l(n,2,0,l(n,3,0,n.context.$implicit.path)),l(n,5,0,n.context.$implicit.mediaThumbnails)},function(l,n){var t=n.component;l(n,1,0,e["ɵinlineInterpolate"](1,"mask image-no-",t.modLength(t.timeCount,n.context.$implicit.mediaThumbnails.length),"")),l(n,7,0,n.context.$implicit.title)})}function w(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"a",[["class","button"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["MORE Galleries"]))],null,null)}function R(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,2,"div",[["class","buttonWrapper"]],null,[[null,"click"]],function(l,n,t){var e=!0,o=l.component;"click"===n&&(e=!1!==o.loadMorePhotos()&&e);return e},null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,w)),e["ɵdid"](2,16384,null,0,x.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.noData)},null)}function T(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Available Galleries"])),(l()(),e["ɵeld"](4,0,null,null,2,"ul",[],[[8,"className",0]],null,null,null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,k)),e["ɵdid"](6,278528,null,0,x.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["ɵand"](16777216,null,null,1,null,R)),e["ɵdid"](8,16384,null,0,x.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,6,0,t.photos),l(n,8,0,t.showMoreButton)},function(l,n){var t=n.component;l(n,4,0,e["ɵinlineInterpolate"](1,"",t.cols,""))})}e["ɵccf"]("app-gallery-block",O,function(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-gallery-block",[],null,null,null,T,_)),e["ɵdid"](1,638976,null,0,O,[r.a,h.Router],null,null)],function(l,n){l(n,1,0)},null)},{count:"count",cols:"cols",detailPath:"detailPath",category:"category",headerText:"headerText",linkToCategory:"linkToCategory",minimal:"minimal",showMoreButton:"showMoreButton",CarouselOption:"CarouselOption"},{},[]);var I=t("VzSN"),z=t("rvkW"),D=t("T3q3"),L=t("GNhy"),S=t("z16d"),F=t("lFTA"),A=t("DfQv"),N=t("XWKa"),E=t("5D2H"),G=[["h2[_ngcontent-%COMP%]{font-family:proxima-nova,Arial,Helvetica,sans-serif;text-align:left;font-size:30px;font-weight:600;line-height:1.2;text-transform:uppercase;color:#807c9c;padding-top:0;padding-bottom:20px}.g-layout[_ngcontent-%COMP%]{padding-top:20px}.g-layout.gallery-list[_ngcontent-%COMP%]{padding-top:34px;padding-bottom:0}.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-top:30px;padding-bottom:40px}.button[_ngcontent-%COMP%]{border:1px solid;border-radius:5px}.button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#1b214e}.exclusive[_ngcontent-%COMP%]{background-color:#e0dfeb}"],g],H=e["ɵcrt"]({encapsulation:0,styles:G,data:{}});function K(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,4,"div",[["class","gallery-banner"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"img",[["typeof","foaf:Image"]],null,null,null,null,null)),e["ɵdid"](2,81920,null,0,C.a,[e.ElementRef],{customsrc:[0,"customsrc"]},null),(l()(),e["ɵeld"](3,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Gallery"])),(l()(),e["ɵeld"](5,0,null,null,2,"div",[["class","g-layout galleryPage"]],null,null,null,null,null)),(l()(),e["ɵeld"](6,0,null,null,1,"app-gallery-block",[],null,null,null,T,_)),e["ɵdid"](7,638976,null,0,O,[r.a,h.Router],{count:[0,"count"],cols:[1,"cols"],detailPath:[2,"detailPath"],headerText:[3,"headerText"]},null),(l()(),e["ɵeld"](8,0,null,null,5,"div",[["class","galleryPage mailinglistPanel internal"]],null,null,null,null,null)),(l()(),e["ɵeld"](9,0,null,null,4,"div",[["class","g-layout"]],null,null,null,null,null)),(l()(),e["ɵeld"](10,0,null,null,3,"app-mailing-list-block",[],null,null,null,I.b,I.a)),e["ɵprd"](512,null,z.a,z.a,[D.e,L.c]),e["ɵprd"](512,null,S.a,S.a,[L.c,e.Renderer]),e["ɵdid"](13,8503296,null,0,F.a,[A.a,z.a,S.a,N.a,E.DomSanitizer,e.ElementRef,h.Router,L.c,r.a],{customClass:[0,"customClass"]},null)],function(l,n){l(n,2,0,"/assets/i/News-banner.jpg");l(n,7,0,4,"grid-3_xs-1","/photo","Available Gallerys");l(n,13,0,"photoPage-block")},null)}var V=e["ɵccf"]("app-gallery-list",o,function(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-gallery-list",[],null,null,null,K,H)),e["ɵdid"](1,114688,null,0,o,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),j=t("H198"),B=t("yOV5"),W=[["h2[_ngcontent-%COMP%]{font-family:proxima-nova,Arial,Helvetica,sans-serif;text-align:left;font-size:30px;line-height:1.2;color:#807c9c;color:#1b214e;padding-top:10px;letter-spacing:2px;padding-bottom:30px;word-wrap:break-word}.updated[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase}.updated[_ngcontent-%COMP%]{font-family:proxima-nova-condensed,Arial,Helvetica,sans-serif;font-size:19px;font-style:normal;color:#807c9c}.photo[_ngcontent-%COMP%]{text-align:left;font-size:0;padding-bottom:0;margin-bottom:25px}.photo[_ngcontent-%COMP%] img{max-width:100%;height:auto}.photo[_ngcontent-%COMP%] .item-list ul li:last-child{margin-right:0}.gallery-link[_ngcontent-%COMP%]{text-align:center;padding-top:60px;padding-bottom:30px}.gallery-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:11px 53px;font-size:19px;border:1px solid #1b214e;text-align:center;color:#1b214e;border-radius:2px}.gallery-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f6f5fd;background-color:#1b214e}.conclusion[_ngcontent-%COMP%]{font-size:19px;letter-spacing:1px;text-transform:none;line-height:1.8;font-weight:500;margin-top:3%}@media only screen and (max-width:767px){.content[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{padding-top:0}h2[_ngcontent-%COMP%]{padding-bottom:6px;margin:0 auto}.updated[_ngcontent-%COMP%]{padding:10px 0 38px}.gallery-link[_ngcontent-%COMP%]{padding-bottom:54px}ul.photos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, ul.photos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3n){margin-right:0}}a.button[_ngcontent-%COMP%]:hover{background:#1b214e;color:#807c9c}ul.photos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:5px;cursor:pointer}"],g],q=e["ɵcrt"]({encapsulation:0,styles:W,data:{}});function $(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"li",[["class","col"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,0,"img",[],[[8,"src",4]],[[null,"click"]],function(l,n,t){var e=!0,o=l.component;"click"===n&&(e=!1!==o.setSelectedPhoto(o.mediaThumbnails,l.context.index)&&e);return e},null,null))],null,function(l,n){l(n,1,0,n.context.$implicit.path)})}function U(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,9,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,1,"div",[["class","updated"]],null,null,null,null,null)),(l()(),e["ɵted"](4,null,["",""])),(l()(),e["ɵeld"](5,0,null,null,4,"div",[["class","photo"]],null,null,null,null,null)),(l()(),e["ɵeld"](6,0,null,null,3,"div",[["class","item-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](7,0,null,null,2,"ul",[["class","photos grid-5_xs-3"]],null,null,null,null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,$)),e["ɵdid"](9,278528,null,0,x.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.component.mediaThumbnails)},function(l,n){var t=n.component;l(n,2,0,t.photo.title),l(n,4,0,t.photo.created)})}function X(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,4,"div",[["class","gallery-banner"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"img",[["typeof","foaf:Image"]],null,null,null,null,null)),e["ɵdid"](2,81920,null,0,C.a,[e.ElementRef],{customsrc:[0,"customsrc"]},null),(l()(),e["ɵeld"](3,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Gallery"])),(l()(),e["ɵeld"](5,0,null,null,12,"div",[["class","breadcrumb-wrapper gallery-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](6,0,null,null,11,"div",[["class","g-layout breadcrumb-layout gallery-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](7,0,null,null,10,"ul",[["class","breadcrumb gallery-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](8,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["ɵeld"](9,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var o=!0;"click"===n&&(o=!1!==e["ɵnov"](l,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),e["ɵdid"](10,671744,null,0,h.RouterLinkWithHref,[h.Router,h.ActivatedRoute,x.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["ɵpad"](11,1),(l()(),e["ɵted"](-1,null,["All"])),(l()(),e["ɵeld"](13,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["ɵeld"](14,0,null,null,1,"span",[["class","arrow"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["›"])),(l()(),e["ɵeld"](16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Gallery"])),(l()(),e["ɵeld"](18,0,null,null,9,"div",[["class","detail-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](19,0,null,null,2,"div",[["class","g-layout galleryDetailPage"]],null,null,null,null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,U)),e["ɵdid"](21,16384,null,0,x.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](22,0,null,null,5,"div",[["class","galleryDetailPage mailinglistPanel internal"]],null,null,null,null,null)),(l()(),e["ɵeld"](23,0,null,null,4,"div",[["class","g-layout internal"]],null,null,null,null,null)),(l()(),e["ɵeld"](24,0,null,null,3,"app-mailing-list-block",[],null,null,null,I.b,I.a)),e["ɵprd"](512,null,z.a,z.a,[D.e,L.c]),e["ɵprd"](512,null,S.a,S.a,[L.c,e.Renderer]),e["ɵdid"](27,8503296,null,0,F.a,[A.a,z.a,S.a,N.a,E.DomSanitizer,e.ElementRef,h.Router,L.c,r.a],{customClass:[0,"customClass"]},null),(l()(),e["ɵeld"](28,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e["ɵeld"](29,0,null,null,1,"app-lightbox",[],null,[[null,"onClose"]],function(l,n,t){var e=!0,o=l.component;"onClose"===n&&(e=!1!==o.lightboxClose(t)&&e);return e},j.b,j.a)),e["ɵdid"](30,770048,null,0,B.a,[a.a,r.a],{photo:[0,"photo"],showComments:[1,"showComments"],selectedIndex:[2,"selectedIndex"],state:[3,"state"],isGalleryDetailLightbox:[4,"isGalleryDetailLightbox"]},{onClose:"onClose"})],function(l,n){var t=n.component;l(n,2,0,"/assets/i/News-banner.jpg"),l(n,10,0,l(n,11,0,"/photo/")),l(n,21,0,t.photo);l(n,27,0,"photoDetailPage-block");l(n,30,0,t.selectedPhoto,!1,t.selectedIndex,t.animate,t.isGalleryDetailLightbox)},function(l,n){l(n,9,0,e["ɵnov"](n,10).target,e["ɵnov"](n,10).href)})}var J=e["ɵccf"]("app-gallery-detail",c,function(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-gallery-detail",[],null,null,null,X,q)),e["ɵdid"](1,114688,null,0,c,[r.a,a.a,h.ActivatedRoute],null,null)],function(l,n){l(n,1,0)},null)},{photo:"photo",cols:"cols"},{},[]),Q=[["h2[_ngcontent-%COMP%]{text-align:left;padding-top:0;padding-bottom:20px;word-wrap:break-word;line-height:1}.updated[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-weight:600}.updated[_ngcontent-%COMP%]{color:#807c9c;font-size:19px;padding:0 0 40px;text-transform:uppercase}.photo[_ngcontent-%COMP%]{text-align:left;font-size:0;padding-bottom:0;margin-bottom:25px}.photo[_ngcontent-%COMP%] img{width:auto;max-width:100%;height:auto}.gallery-link[_ngcontent-%COMP%]{text-align:center;padding-top:60px;padding-bottom:30px}.gallery-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;padding:11px 53px;font-size:19px;border:1px solid #1b214e;text-align:center;color:#1b214e;border-radius:2px}.gallery-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f6f5fd;background:#1b214e}a.button[_ngcontent-%COMP%]:hover{background:#1b214e;color:#807c9c}.conclusion[_ngcontent-%COMP%]{font-size:19px;letter-spacing:1px;text-transform:none;line-height:1.8;font-weight:500;margin-top:3%}@media screen and (min-width:1024px){.content[_ngcontent-%COMP%]{width:90%;margin:0 auto;position:relative;padding:0 60px}}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{padding-top:0;padding-bottom:6px;margin:0 auto;font-size:30px;line-height:1}.updated[_ngcontent-%COMP%]{padding:10px 0 38px;font-size:19px}.gallery-link[_ngcontent-%COMP%]{padding-bottom:54px}}"],g],Z=e["ɵcrt"]({encapsulation:0,styles:Q,data:{}});function Y(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,19,"div",[["class","breadcrumb-wrapper gallery-media"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,18,"div",[["class","g-layout breadcrumb-layout photo-detail"]],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,17,"ul",[["class","breadcrumb gallery-media"]],null,null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["ɵeld"](4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var o=!0;"click"===n&&(o=!1!==e["ɵnov"](l,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),e["ɵdid"](5,671744,null,0,h.RouterLinkWithHref,[h.Router,h.ActivatedRoute,x.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["ɵpad"](6,1),(l()(),e["ɵted"](-1,null,["All"])),(l()(),e["ɵeld"](8,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),e["ɵeld"](9,0,null,null,1,"span",[["class","arrow"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["›"])),(l()(),e["ɵeld"](11,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var o=!0;"click"===n&&(o=!1!==e["ɵnov"](l,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o);return o},null,null)),e["ɵdid"](12,671744,null,0,h.RouterLinkWithHref,[h.Router,h.ActivatedRoute,x.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["ɵpad"](13,1),(l()(),e["ɵted"](-1,null,["gallery"])),(l()(),e["ɵeld"](15,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["ɵeld"](16,0,null,null,1,"span",[["class","arrow"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["›"])),(l()(),e["ɵeld"](18,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Media"]))],function(l,n){var t=n.component;l(n,5,0,l(n,6,0,"/gallery/")),l(n,12,0,l(n,13,0,"/gallery/"+t.photo.path))},function(l,n){l(n,4,0,e["ɵnov"](n,5).target,e["ɵnov"](n,5).href),l(n,11,0,e["ɵnov"](n,12).target,e["ɵnov"](n,12).href)})}function ll(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,5,"div",[["class","content"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,0,"h2",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,1,"div",[["class","updated"]],null,null,null,null,null)),(l()(),e["ɵted"](4,null,["",""])),(l()(),e["ɵeld"](5,0,null,null,0,"div",[["class","photo"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var t=n.component;l(n,2,0,t.photo.title),l(n,4,0,t.photo.created),l(n,5,0,t.photo.field_photo)})}function nl(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,4,"div",[["class","news-banner"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"img",[["typeof","foaf:Image"]],null,null,null,null,null)),e["ɵdid"](2,81920,null,0,C.a,[e.ElementRef],{customsrc:[0,"customsrc"]},null),(l()(),e["ɵeld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Gallery"])),(l()(),e["ɵand"](16777216,null,null,1,null,Y)),e["ɵdid"](6,16384,null,0,x.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](7,0,null,null,9,"div",[["class","detail-list"]],null,null,null,null,null)),(l()(),e["ɵeld"](8,0,null,null,2,"div",[["class","g-layout galleryMediaPage"]],null,null,null,null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,ll)),e["ɵdid"](10,16384,null,0,x.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](11,0,null,null,5,"div",[["class","galleryMediaPage mailinglistPanel internal"]],null,null,null,null,null)),(l()(),e["ɵeld"](12,0,null,null,4,"div",[["class","g-layout internal"]],null,null,null,null,null)),(l()(),e["ɵeld"](13,0,null,null,3,"app-mailing-list-block",[],null,null,null,I.b,I.a)),e["ɵprd"](512,null,z.a,z.a,[D.e,L.c]),e["ɵprd"](512,null,S.a,S.a,[L.c,e.Renderer]),e["ɵdid"](16,8503296,null,0,F.a,[A.a,z.a,S.a,N.a,E.DomSanitizer,e.ElementRef,h.Router,L.c,r.a],{customClass:[0,"customClass"]},null)],function(l,n){var t=n.component;l(n,2,0,"/assets/i/News-banner.jpg"),l(n,6,0,t.photo),l(n,10,0,t.photo);l(n,16,0,"photoDetailPage-block")},null)}var tl=e["ɵccf"]("app-gallery-media",d,function(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-gallery-media",[],null,null,null,nl,Z)),e["ɵdid"](1,114688,null,0,d,[r.a,h.ActivatedRoute],null,null)],function(l,n){l(n,1,0)},null)},{photo:"photo"},{},[]),el=t("B+Nj"),ol=t("FBU5"),ul=t("vumo"),il=t("fAE3");t.d(n,"GalleryModuleNgFactory",function(){return al});var al=e["ɵcmf"](s,[],function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[p.a,b,V,J,tl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,x.NgLocalization,x.NgLocaleLocalization,[e.LOCALE_ID,[2,x["ɵangular_packages_common_common_a"]]]),e["ɵmpd"](4608,el.t,el.t,[]),e["ɵmpd"](4608,L.j,L.p,[x.DOCUMENT,e.PLATFORM_ID,L.n]),e["ɵmpd"](4608,L.q,L.q,[L.j,L.o]),e["ɵmpd"](5120,L.a,function(l){return[l]},[L.q]),e["ɵmpd"](4608,L.m,L.m,[]),e["ɵmpd"](6144,L.k,null,[L.m]),e["ɵmpd"](4608,L.i,L.i,[L.k]),e["ɵmpd"](6144,L.b,null,[L.i]),e["ɵmpd"](4608,L.f,L.l,[L.b,e.Injector]),e["ɵmpd"](4608,L.c,L.c,[L.f]),e["ɵmpd"](4608,D.k,D.k,[]),e["ɵmpd"](4608,D.i,D.b,[]),e["ɵmpd"](4608,D.d,D.d,[D.k,D.i]),e["ɵmpd"](4608,D.g,D.a,[]),e["ɵmpd"](5120,D.e,D.j,[D.d,D.g]),e["ɵmpd"](1073742336,x.CommonModule,x.CommonModule,[]),e["ɵmpd"](1073742336,el.r,el.r,[]),e["ɵmpd"](1073742336,el.e,el.e,[]),e["ɵmpd"](1073742336,L.e,L.e,[]),e["ɵmpd"](1073742336,L.d,L.d,[]),e["ɵmpd"](1073742336,D.f,D.f,[]),e["ɵmpd"](1073742336,h.RouterModule,h.RouterModule,[[2,h["ɵangular_packages_router_router_a"]],[2,h.Router]]),e["ɵmpd"](1073742336,ol.Angulartics2Module,ol.Angulartics2Module,[[2,ol.ANGULARTICS2_FORROOT_GUARD]]),e["ɵmpd"](1073742336,ul.a,ul.a,[]),e["ɵmpd"](1073742336,il.a,il.a,[]),e["ɵmpd"](1073742336,s,s,[]),e["ɵmpd"](256,L.n,"XSRF-TOKEN",[]),e["ɵmpd"](256,L.o,"X-XSRF-TOKEN",[]),e["ɵmpd"](1024,h.ROUTES,function(){return[[{path:"",component:u,data:{breadcrumb:"Gallery"},children:[{path:"",component:o,data:{breadcrumb:"GalleryList"}},{path:":id",component:c,data:{breadcrumb:"GalleryDetail"}},{path:"media/:id",component:d,data:{breadcrumb:"Gallery Media Detail"}}]}]]},[])])})}}]);