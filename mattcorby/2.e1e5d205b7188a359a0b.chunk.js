webpackJsonp([2], {
  "09HW": function (n, l, e) {
    "use strict";
    function t(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "fs-fb"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.facebookClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "icon-facebook"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n  "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "fs-tw"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.twitterClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "icon-twitter"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n      \n    "])),
        ],
        null,
        null
      );
    }
    function o(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "fs-mail"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.mailtoClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "icon-envelope"]],
            null,
            null,
            null,
            null,
            null
          )),
        ],
        null,
        null
      );
    }
    function u(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            11,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, t)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, i)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, o)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, e.facebook), n(l, 6, 0, e.twitter), n(l, 10, 0, e.mailto);
        },
        function (n, l) {
          var e = l.component;
          n(l, 0, 0, s["ɵinlineInterpolate"](1, "share ", e.customClass, ""));
        }
      );
    }
    function a(n) {
      return s["ɵvid"](
        0,
        [
          (n()(), s["ɵand"](16777216, null, null, 1, null, u)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
        ],
        function (n, l) {
          n(l, 1, 0, l.component.link);
        },
        null
      );
    }
    function r(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            a,
            m
          )),
          s["ɵdid"](4833280, null, 0, p.a, [], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var d = e("bxZi"),
      s = e("3j3K"),
      c = e("2Je8"),
      p = e("FpAZ");
    e.d(l, "b", function () {
      return m;
    }),
      (l.a = a);
    var g = [d.a],
      m = s["ɵcrt"]({ encapsulation: 0, styles: g, data: {} });
    s["ɵccf"](
      "app-social-buttons",
      p.a,
      r,
      {
        link: "link",
        facebook: "facebook",
        googlePlus: "googlePlus",
        twitter: "twitter",
        mailto: "mailto",
        textToshare: "textToshare",
        customClass: "customClass",
      },
      {},
      []
    );
  },
  "2BTR": function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = [
      '.carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:70px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;padding:0 10px;background-color:rgba(29,30,32,.86);overflow:hidden;z-index:2;background:url("/sites/g/files/g2000009001/files/leftarrow.png");background-repeat:no-repeat;background-size:contain;width:36px;height:36px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);padding:0;left:50px}@media only screen and (max-width:767px){.carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{top:45%;left:6px}}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:70px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;padding:0 10px;background-color:rgba(29,30,32,.86);overflow:hidden;z-index:2;left:auto;right:50px;background-position:-49px;background:url("/sites/g/files/g2000009001/files/rightarrow.png");background-repeat:no-repeat;background-size:contain;width:36px;height:36px;top:50%;-webkit-transform:rotate(180deg);transform:translateY(-50%) rotate(0deg);padding:0}@media only screen and (max-width:767px){.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{top:45%;right:0}}.carousel-dots[_ngcontent-%COMP%]{bottom:60px;display:inline-block;height:auto;left:64px;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:auto}@media only screen and (max-width:767px){.carousel-dots[_ngcontent-%COMP%]{left:18px;bottom:45px}}span.carousel-dot[_ngcontent-%COMP%]{background-color:#4b4b4b;border:1px solid #4b4b4b;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:9px;margin-right:0;margin-bottom:10px;width:9px;border-radius:50%;cursor:pointer}span.carousel-dot.active[_ngcontent-%COMP%]{background-color:#f43939;border-color:#f43939}span[_ngcontent-%COMP%]:last-child{margin-right:0}.carousel-stage[_ngcontent-%COMP%]{-ms-touch-action:pan-y!important;touch-action:pan-y!important}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0;background:none;font-size:0;overflow:hidden;position:relative}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{background:#000}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__thumbnail.desktop[_ngcontent-%COMP%]{max-height:500px;padding-bottom:37.15%;height:0}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__thumbnail.desktop[_ngcontent-%COMP%]{display:block;padding-bottom:37.15%;background:#000}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{position:absolute;text-align:center;width:100%;background:#000;bottom:0;min-height:40px}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{padding:15px 0 0 35px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;background:#000;width:100%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px;max-width:100%;width:88%;margin-top:0;line-height:1;font-weight:900;text-align:left;color:#fff;margin:0 auto;padding-bottom:0;display:inline-block;padding:15px 0;vertical-align:middle;padding-left:10px}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:static;font-size:5vw;text-align:left;padding:0}}@media only screen and (min-width:768px) and (max-width:1023px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:70%}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:80%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:15px 0;text-align:right;display:inline-block;width:11%;vertical-align:middle}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:11px 0;display:block;width:50%;text-align:center}}@media only screen and (min-width:768px) and (max-width:1023px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{width:28%}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{width:15%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{color:#fff;margin-top:0;padding:0;bottom:0;font-size:14px;display:inline-block;vertical-align:middle;text-transform:uppercase}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{font-size:3.37vw;text-align:left}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:10px;text-transform:uppercase;font-weight:400;color:#fff;cursor:pointer;display:inline-block;vertical-align:middle;letter-spacing:2px;text-align:left}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:after{content:"";width:24px;height:15px;display:inline-block;vertical-align:middle;background-position:0 -21px;margin-left:8px;background:url("/sites/g/files/g2000009001/files/banner%20arrow.png") no-repeat}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover{color:#f43939}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover:after{background:url("/sites/g/files/g2000009001/files/banner%20arrow.png") no-repeat;background-position:0 0}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:3.37vw}}@mediaonly screen and (max-width:767px){.thumbnail[_ngcontent-%COMP%]{margin-bottom:10px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%], .carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{width:20px;background-position:7px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{background-position:-74px}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px;padding-left:40px}}li.items[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;vertical-align:top}ul.item-list.carousel[_ngcontent-%COMP%]{display:inline-block;width:100%;overflow:visible}.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;line-height:1.1;display:inline-block;font-size:16px;letter-spacing:2px}.carousel.viewport[_ngcontent-%COMP%]{display:block;overflow:hidden}@media only screen and (max-width:767px){.carousel.viewport[_ngcontent-%COMP%]{position:relative}}.news-block__carousel[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto!important;max-width:100%}.news-block__carousel[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%], .news-block__carousel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000!important}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding-right:40px;padding-left:40px}',
    ];
  },
  "8kas": function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = (function () {
      function n() {
        (this.itemCount = 1),
          (this.showDots = !0),
          (this.showNav = !0),
          (this.animationSpeed = 0.25),
          (this.autoplay = !0),
          (this.loop = !0);
      }
      return n;
    })();
  },
  "BK5+": function (n, l, e) {
    "use strict";
    var t = e("3j3K"),
      i = e("Q34W"),
      o = e("+rAa"),
      u = e("fa0J"),
      a = e("5oXY"),
      r = e("Qbdm");
    e.d(l, "a", function () {
      return s;
    });
    var d =
        (this && this.__extends) ||
        (function () {
          var n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, l) {
                n.__proto__ = l;
              }) ||
            function (n, l) {
              for (var e in l) l.hasOwnProperty(e) && (n[e] = l[e]);
            };
          return function (l, e) {
            function t() {
              this.constructor = l;
            }
            n(l, e),
              (l.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          };
        })(),
      s = (function (n) {
        function l(l, e, t, i) {
          var o = n.call(this) || this;
          return (
            (o._newsService = e),
            (o._router = t),
            (o.titleService = i),
            (o.node = l),
            (o.options = {
              itemCount: 1,
              showDots: !1,
              showNav: !0,
              animationSpeed: 0.5,
              autoplay: !0,
              loop: !0,
            }),
            o
          );
        }
        return (
          d(l, n),
          (l.prototype.ngOnInit = function () {}),
          (l.prototype.ngOnChanges = function () {
            this.blogs.length > 4
              ? ((this.duplicate = this.blogs.slice(0, 4)),
                this.newsinit(this.blogs.length),
                (this.createCarousel = !0))
              : ((this.duplicate = this.blogs),
                this.newsinit(this.blogs.length),
                (this.createCarousel = !0));
          }),
          (l.prototype.gotoDetail = function (n) {
            var l;
            (this.selectedNews = n), (l = o.a.getSlug(this.selectedNews.path));
            var e = ["/news", l];
            if ((this._router.navigate(e), window.innerWidth < 767)) {
              document.getElementsByTagName("app-news-list")[0].style.top =
                "-" + (this.scrollVal - 174) + "px";
            }
            this.titleService.setTitle(
              o.a.htmlDecode(this.selectedNews.title) + " | Maniacs"
            );
          }),
          (l.ctorParameters = function () {
            return [
              { type: t.ElementRef },
              { type: u.a },
              { type: a.Router },
              { type: r.Title },
            ];
          }),
          l
        );
      })(i.a);
  },
  CWct: function (n, l, e) {
    "use strict";
    var t = e("3j3K"),
      i = e("+rAa"),
      o = e("fa0J"),
      u = e("5oXY"),
      a = e("ZyHc"),
      r = e("Qbdm");
    e.d(l, "a", function () {
      return d;
    });
    var d = (function () {
      function n(n, l, e, t, i, o) {
        (this._newsService = n),
          (this._router = l),
          (this.pagerService = e),
          (this._route = t),
          (this.element = i),
          (this.titleService = o),
          (this.cols = "grid-5_xs-1"),
          (this.detailPath = "/blog"),
          (this.type = "news"),
          (this.minimal = !1),
          (this.viewMore = !1),
          (this.scriptCheck = 0),
          (this.noData = !0),
          (this.noTitle = !0),
          (this.newsMobileCarousel = !1),
          (this.pagers = !1),
          (this.switchCarouselTemplate = 0),
          (this.homeNewsIndex = 0),
          (this.homeSpotifyNews = 0),
          (this.featuredNewsLength = 0),
          (this.moreNews = 0),
          (this.newsAdCount = 0),
          (this.pager = {}),
          (this.pagedItems = 0),
          (this.offset = 0),
          (this.pos = 0),
          (this.firstInit = !0),
          (this.shareOpen = !1),
          (this.sourceAd = !1),
          (this.showShare = !1),
          (this.isMobile = !1),
          (this.dataLoaded = !1),
          (this.ngAfterViewInitCounter = 0);
      }
      return (
        (n.prototype.getPagedNews = function () {
          var n = this;
          return (
            (this.news = []),
            (this.className = !0),
            this._newsService
              .getPagernews(this.offset, this.category)
              .subscribe(
                function (l) {
                  (n.news = l),
                    (n.className = !1),
                    (n.dataLoaded = !n.dataLoaded),
                    n.firstInit
                      ? ((n.pagedItems = l.length),
                        n.setPage(n.routePage),
                        (n.firstInit = !1))
                      : n.setPage(n.routePage);
                },
                function (n) {
                  return i.a.doError(n);
                },
                function () {
                  i.a.doLog("news block get paged news - done");
                }
              ),
            this.news
          );
        }),
        (n.prototype.shareClick = function () {
          this.shareOpen = !this.shareOpen;
        }),
        (n.prototype.getNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.news = []),
            this._newsService.getNews(this.category).subscribe(
              function (l) {
                (n.news = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                i.a.doLog("news block get news - done");
                for (
                  var l = n.news[0].field_ad_position, e = n.news[0], t = 0;
                  t < 3;
                  t++
                )
                  if (n.news[t].field_ad_position > 0) {
                    n.news.splice(l, 0, e), n.news.shift();
                    break;
                  }
              }
            ),
            this.news
          );
        }),
        (n.prototype.getLandingPageNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.landingNews = []),
            (this.newsAdCount = 1),
            this._newsService.getLandingPageNews(this.category).subscribe(
              function (l) {
                (n.landingNews = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                i.a.doLog("news block get landing page news - done");
              }
            ),
            this.landingNews
          );
        }),
        (n.prototype.getCategoryPageNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.categoryNews = []),
            this._newsService.getCategoryPageNews(this.category).subscribe(
              function (l) {
                (n.categoryNews = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                i.a.doLog("news block get category page news - done");
              }
            ),
            this.categoryNews
          );
        }),
        (n.prototype.getFeaturedNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.featuredNews = []),
            this._newsService.getFeaturedNews().subscribe(
              function (l) {
                (n.featuredNews = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                i.a.doLog("news block get featured news - done");
              }
            ),
            (this.featuredNewsLength = this.featuredNews.length),
            this.featuredNews
          );
        }),
        (n.prototype.getStickyNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.stickyNews = []),
            this._newsService.getStickyNews().subscribe(
              function (l) {
                (n.stickyNews = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                i.a.doLog("news block get stikcy news - done");
              }
            ),
            this.stickyNews
          );
        }),
        (n.prototype.geBreakingFestNews = function () {
          var n = this;
          return (
            (this.selectedNews = void 0),
            (this.latestNews = []),
            this._newsService.geBreakingFestNews().subscribe(
              function (l) {
                (n.latestNews = l), (n.dataLoaded = !n.dataLoaded);
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                return i.a.doLog("news block breaking festival news - done");
              }
            ),
            this.latestNews
          );
        }),
        (n.prototype.gotoDetail = function (n) {
          var l;
          (this.selectedNews = n), (l = i.a.getSlug(this.selectedNews.path));
          var e = ["/news", l];
          if ((this._router.navigate(e), window.innerWidth < 767)) {
            document.getElementsByTagName("app-news-list")[0].style.top =
              "-" + (this.scrollVal - 174) + "px";
          }
          this.titleService.setTitle(
            i.a.htmlDecode(this.selectedNews.title) + " | Maniacs"
          );
        }),
        (n.prototype.fetchNextPage = function () {
          var n = this;
          (this.moreNews = this.moreNews + this.count),
            1 == this.newsAdCount && (this.count = 5),
            this._newsService
              .getLandingPageNews(this.category, this.moreNews)
              .subscribe(
                function (l) {
                  (n.landingNews = n.landingNews.concat(l)),
                    (0 == l.length || l.length <= n.count + n.moreNews) &&
                      (n.noData = !1);
                },
                function (n) {
                  return i.a.doError(n);
                },
                function () {
                  return i.a.doLog("news block fetch next page");
                }
              );
        }),
        (n.prototype.ngOnInit = function () {
          var n = this;
          if (
            (this._route.params.forEach(function (l) {
              (n.id = l.id), i.a.addEditLink(n.id);
            }),
            window.screen.width < 767 &&
              ((this.newsMobileCarousel = !0), (this.isMobile = !0)),
            this.pagers)
          )
            this._route.queryParams.subscribe(function (l) {
              n._newsService.getNodeCount(n.type).subscribe(
                function (e) {
                  (n.routePage = parseInt(l.page) || 1),
                    (n.totalNewsItems = parseInt(e[0].count)),
                    n.routePage > 0 && (n.offset = 5 * (n.routePage - 1)),
                    n.getPagedNews();
                },
                function (n) {
                  return i.a.doError(n);
                },
                function () {
                  return i.a.doLog("news block get node count - done");
                }
              );
            });
          else
            switch (this.switchCarouselTemplate) {
              case 1:
                this.getNews();
                break;
              case 2:
                this.getFeaturedNews();
                break;
              case 3:
                this.getNews();
                break;
              case 4:
                this.geBreakingFestNews();
                break;
              case 5:
                this.getLandingPageNews();
                break;
              case 7:
                this.getStickyNews();
                break;
              case 8:
                this.getFeaturedNews();
            }
        }),
        (n.prototype.ngAfterViewInit = function () {
          if (1 === this.scriptCheck);
          else if ("/news" == window.location.pathname) {
            var n = document.getElementById("googletagId");
            null != n && n.parentNode.removeChild(n);
            var l = document.createElement("script");
            l.setAttribute("type", "text/javascript"),
              l.setAttribute("id", "googletagId"),
              document.body.className.match("user-logged-in"),
              (l.innerHTML =
                "googletag.destroySlots();var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() { var slot1 = googletag.defineSlot('/29011727/maniacs/news', [[300, 250],['fluid']], 'dfp-ad-slot-1').addService(googletag.pubads()).setTargeting('pos', '1');" +
                'googletag.pubads().setTargeting("pageURL", "blog").setTargeting("pagetype", ["index"]);console.log("inside news landing ad");googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs(true);googletag.pubads().setCentering(true);googletag.pubads().enableSingleRequest();googletag.enableServices();});'),
              document.getElementsByTagName("head")[0].appendChild(l);
            try {
              var e = document.createElement("script");
              e.innerHTML =
                "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-1'); });";
              var t;
              setTimeout(function () {
                (t = document.getElementById("dfp-ad-slot-1")),
                  e && t.appendChild(e);
              }, 6e3);
            } catch (n) {}
          }
        }),
        (n.prototype.onResize = function (n) {
          n.target.innerWidth < 767
            ? (this.newsMobileCarousel = !0)
            : (this.newsMobileCarousel = !1);
        }),
        (n.prototype.setPage = function (n) {
          n < 1 ||
            n > this.pager.totalPages ||
            ((this.pager = this.pagerService.getPager(
              this.totalNewsItems,
              n,
              this.pagedItems
            )),
            (this.offset = (n - 1) * this.pagedItems));
        }),
        (n.prototype.clicked = function () {
          window.scroll(0, 0), (this.className = !0);
        }),
        (n.prototype.ngOnChange = function () {
          this.getCategoryPageNews();
        }),
        (n.prototype.ngOnDestroy = function () {
          this.news = null;
        }),
        (n.prototype.findScrollValue = function (n) {
          this.scrollVal =
            document.body.scrollTop || document.documentElement.scrollTop;
        }),
        (n.ctorParameters = function () {
          return [
            { type: o.a },
            { type: u.Router },
            { type: a.a },
            { type: u.ActivatedRoute },
            { type: t.ElementRef },
            { type: r.Title },
          ];
        }),
        n
      );
    })();
  },
  FpAZ: function (n, l, e) {
    "use strict";
    var t = e("kZql");
    e.d(l, "a", function () {
      return i;
    });
    var i = (function () {
      function n() {
        (this.facebook = !0),
          (this.googlePlus = !0),
          (this.twitter = !0),
          (this.mailto = !0),
          (this.windowDim = "width=600,height=450"),
          (this.location = "");
      }
      return (
        (n.prototype.facebookClick = function () {
          window.open(
            "https://www.facebook.com/sharer.php?u=" + this.location,
            "_blank",
            this.windowDim
          );
        }),
        (n.prototype.googlePlusClick = function () {
          window.open(
            "https://plus.google.com/share?url=" + this.location,
            "_blank",
            this.windowDim
          );
        }),
        (n.prototype.twitterClick = function () {
          (this.textToshare = this.htmlDecode(this.textToshare)),
            window.open(
              "https://twitter.com/intent/tweet?text=" +
                this.textToshare +
                "&url=" +
                this.location +
                "&via=ManiacsAUS",
              "_blank",
              this.windowDim
            );
        }),
        (n.prototype.htmlDecode = function (n) {
          return n
            .replace(/&amp;/g, "&")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        }),
        (n.prototype.mailtoClick = function () {
          this.link &&
            window.open(
              "mailto:?subject=" + this.textToshare + "&body=" + this.location,
              "_blank",
              this.windowDim
            );
        }),
        (n.prototype.ngOnInit = function () {
          (this.hostURL = "https://" + t.a.host + "/"),
            this.link
              ? (this.location = window.location.origin + this.link)
              : (this.location = window.location.href);
        }),
        (n.prototype.ngOnChanges = function () {
          this.location = window.location.href;
        }),
        (n.prototype.ngAfterViewInit = function () {
          window.FB && window.FB.XFBML.parse();
        }),
        (n.ctorParameters = function () {
          return [];
        }),
        n
      );
    })();
  },
  NoMW: function (n, l, e) {
    "use strict";
    function t(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-12"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "adtext"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), s["ɵted"](null, ["\t        \n    "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return s["ɵvid"](
        0,
        [
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-11"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "adtext"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n    "])),
        ],
        null,
        null
      );
    }
    function o(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "iframe",
            [
              ["allowtransparency", "true"],
              ["frameborder", "0"],
              ["height", "456"],
              ["width", "300"],
            ],
            [[8, "src", 5]],
            null,
            null,
            null,
            null
          )),
          s["ɵppd"](2),
        ],
        null,
        function (n, l) {
          n(
            l,
            0,
            0,
            s["ɵunv"](
              l,
              0,
              0,
              n(
                l,
                1,
                0,
                s["ɵnov"](l.parent.parent, 1),
                l.context.$implicit.value,
                "resourceUrl"
              )
            )
          );
        }
      );
    }
    function u(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            11,
            "div",
            [["class", "homepage spotify"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "spotifyEmbed"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                        "])),
          (n()(), s["ɵted"](null, ["\n                       "])),
          (n()(), s["ɵand"](16777216, null, null, 2, null, o)),
          s["ɵdid"](
            802816,
            null,
            0,
            c.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          s["ɵppd"](1),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(), s["ɵted"](null, ["\n\n                    "])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            6,
            0,
            s["ɵunv"](
              l,
              6,
              0,
              n(l, 7, 0, s["ɵnov"](l.parent, 0), e.homePageSpotifyEmbed)
            )
          );
        },
        null
      );
    }
    function a(n) {
      return s["ɵvid"](
        0,
        [
          s["ɵpid"](0, p.a, []),
          s["ɵpid"](0, g.a, [m.DomSanitizer]),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            13,
            "div",
            [["class", "homepage heroCarouselBlock1"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "headerFeaturedInner"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "homepage news"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "homepage__layout carouselNews"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-block",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "scroll"],
            ],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== s["ɵnov"](n, 11).onResize(e) && t;
              }
              if ("window:scroll" === l) {
                t = !1 !== s["ɵnov"](n, 11).findScrollValue(e) && t;
              }
              return t;
            },
            f.a,
            f.b
          )),
          s["ɵdid"](
            4440064,
            null,
            0,
            h.a,
            [_.a, w.Router, b.a, w.ActivatedRoute, s.ElementRef, m.Title],
            {
              count: [0, "count"],
              detailPath: [1, "detailPath"],
              customClass: [2, "customClass"],
              switchCarouselTemplate: [3, "switchCarouselTemplate"],
            },
            null
          ),
          (n()(), s["ɵted"](null, ["\n                \n            "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            12,
            "div",
            [["id", "smartHeader"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            9,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["EVEN MORE\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            6,
            "a",
            [],
            [
              [1, "target", 0],
              [8, "href", 4],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !==
                    s["ɵnov"](n, 22).onClick(
                      e.button,
                      e.ctrlKey,
                      e.metaKey,
                      e.shiftKey
                    ) && t;
              }
              return t;
            },
            null,
            null
          )),
          s["ɵdid"](
            671744,
            null,
            0,
            w.RouterLinkWithHref,
            [w.Router, w.ActivatedRoute, c.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](0, null, null, 1, "b", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["", " ➡"])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            6,
            "div",
            [["class", "homepage__layout g-layout news leader-board-home"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, t)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵand"](0, [["notMobile", 2]], null, 0, null, i)),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            13,
            "div",
            [["class", "homepage news newsHeader"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "homepage__layout g-layout news"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "h2",
            [["class", "homepage__title news"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["Latest posts"])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-block",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "scroll"],
            ],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== s["ɵnov"](n, 50).onResize(e) && t;
              }
              if ("window:scroll" === l) {
                t = !1 !== s["ɵnov"](n, 50).findScrollValue(e) && t;
              }
              return t;
            },
            f.a,
            f.b
          )),
          s["ɵdid"](
            4440064,
            null,
            0,
            h.a,
            [_.a, w.Router, b.a, w.ActivatedRoute, s.ElementRef, m.Title],
            {
              count: [0, "count"],
              cols: [1, "cols"],
              detailPath: [2, "detailPath"],
              customClass: [3, "customClass"],
              scriptCheck: [4, "scriptCheck"],
              switchCarouselTemplate: [5, "switchCarouselTemplate"],
            },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            22,
            "div",
            [["class", "homepage video"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [["class", "homepage__layout g-layout video"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "h2",
            [["class", "homepage__title videos"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["Videos"])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            13,
            "app-video-home-block",
            [],
            null,
            null,
            null,
            C.a,
            C.b
          )),
          s["ɵdid"](
            114688,
            null,
            0,
            v.a,
            [s.ElementRef, x.a, w.ActivatedRoute, w.Router, m.DomSanitizer],
            {
              customClass: [0, "customClass"],
              frontpage: [1, "frontpage"],
              minimal: [2, "minimal"],
              switchCarouselTemplate: [3, "switchCarouselTemplate"],
            },
            null
          ),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            1,
            9,
            "div",
            [
              ["blockBottom", ""],
              ["class", "moreVideos"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            6,
            "div",
            [["class", "buttonWrapper video"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [["class", "button reverse-button"]],
            [
              [24, "@delayedButtonFade", 0],
              [1, "target", 0],
              [8, "href", 4],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t =
                  !1 !==
                    s["ɵnov"](n, 69).onClick(
                      e.button,
                      e.ctrlKey,
                      e.metaKey,
                      e.shiftKey
                    ) && t;
              }
              if ("click" === l) {
                t = !1 !== i.setTitle("Videos") && t;
              }
              return t;
            },
            null,
            null
          )),
          s["ɵdid"](
            671744,
            null,
            0,
            w.RouterLinkWithHref,
            [w.Router, w.ActivatedRoute, c.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["More videos"])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(), s["ɵted"](null, ["\n            \n        "])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "breakingNewsWrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            33,
            "ul",
            [["class", "grid-3_xs-1"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            14,
            "li",
            [["class", "col grid"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            11,
            "div",
            [["class", "homepage news ads"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n                 "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "breakingNewsInner"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-2"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "adtext"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(), s["ɵted"](null, ["\n                   \n                "])),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            5,
            "li",
            [["class", "col grid"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(), s["ɵand"](16777216, null, null, 2, null, u)),
          s["ɵdid"](
            802816,
            null,
            0,
            c.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          s["ɵppd"](1),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            7,
            "li",
            [["class", "col grid"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "homepage news"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-block",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "scroll"],
            ],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== s["ɵnov"](n, 110).onResize(e) && t;
              }
              if ("window:scroll" === l) {
                t = !1 !== s["ɵnov"](n, 110).findScrollValue(e) && t;
              }
              return t;
            },
            f.a,
            f.b
          )),
          s["ɵdid"](
            4440064,
            null,
            0,
            h.a,
            [_.a, w.Router, b.a, w.ActivatedRoute, s.ElementRef, m.Title],
            {
              count: [0, "count"],
              detailPath: [1, "detailPath"],
              customClass: [2, "customClass"],
              scriptCheck: [3, "scriptCheck"],
              switchCarouselTemplate: [4, "switchCarouselTemplate"],
              homeNewsIndex: [5, "homeNewsIndex"],
              homeSpotifyNews: [6, "homeSpotifyNews"],
            },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\n            "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, [" \n"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 11, 0, 3, "/news", "heroCarouselBlock1", 8),
            n(l, 22, 0, n(l, 23, 0, "/" + e.smartHeader)),
            n(l, 34, 0, e.isMobileMenu, s["ɵnov"](l, 36));
          n(l, 50, 0, 3, "grid-3_xs-1", "/news", "home-page", 1, 1);
          n(l, 62, 0, "homepage-block", !0, !0, 2),
            n(l, 69, 0, n(l, 70, 0, "/video")),
            n(
              l,
              101,
              0,
              s["ɵunv"](
                l,
                101,
                0,
                n(l, 102, 0, s["ɵnov"](l, 0), e.homePageSpotifyEmbed)
              )
            );
          n(l, 110, 0, 1, "/news", "home-page", 0, 7, 2, 1);
        },
        function (n, l) {
          var e = l.component;
          n(l, 21, 0, s["ɵnov"](l, 22).target, s["ɵnov"](l, 22).href),
            n(l, 26, 0, e.smartHeader),
            n(
              l,
              68,
              0,
              e.delayedButtonFade,
              s["ɵnov"](l, 69).target,
              s["ɵnov"](l, 69).href
            );
        }
      );
    }
    function r(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-home",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "onload"],
              ["window", "scroll"],
            ],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== s["ɵnov"](n, 1).onResize(e) && t;
              }
              if ("window:onload" === l) {
                t = !1 !== s["ɵnov"](n, 1).onLoad(e) && t;
              }
              if ("window:scroll" === l) {
                t = !1 !== s["ɵnov"](n, 1).updateOnScroll(e) && t;
              }
              return t;
            },
            a,
            O
          )),
          s["ɵdid"](
            4440064,
            null,
            0,
            y.a,
            [m.Title, w.ActivatedRoute, w.Router, P.a],
            null,
            null
          ),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var d = e("iE1k"),
      s = e("3j3K"),
      c = e("2Je8"),
      p = e("0ke3"),
      g = e("nbor"),
      m = e("Qbdm"),
      f = e("anls"),
      h = e("CWct"),
      _ = e("fa0J"),
      w = e("5oXY"),
      b = e("ZyHc"),
      C = e("xqWO"),
      v = e("uhFY"),
      x = e("irhF"),
      y = e("ah84"),
      P = e("nkJK");
    e.d(l, "a", function () {
      return k;
    });
    var M = [d.a],
      O = s["ɵcrt"]({
        encapsulation: 0,
        styles: M,
        data: {
          animation: [
            {
              type: 7,
              name: "fadeIn",
              definitions: [
                {
                  type: 0,
                  name: "hidden",
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: "in",
                  styles: { type: 6, styles: { opacity: 1 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: "out1,",
                  styles: { type: 6, styles: { opacity: 0.5 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: "out2,",
                  styles: { type: 6, styles: { opacity: 0.1 }, offset: null },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: "out1 <=> in",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "0.2s ease-in-out" },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "out1 <=> out2",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "0.5s ease-in-out" },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "out2 <=> out1",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "0.5s ease-in-out" },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "hidden <=> out2",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "0.2s ease-in-out" },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "hidden => in",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "1s ease-in-out" },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
            {
              type: 7,
              name: "tourButton",
              definitions: [
                {
                  type: 0,
                  name: "out",
                  styles: {
                    type: 6,
                    styles: { opacity: 0, "margin-bottom": "0px" },
                    offset: null,
                  },
                  options: void 0,
                },
                {
                  type: 0,
                  name: "in",
                  styles: {
                    type: 6,
                    styles: { opacity: 1, "margin-bottom": "30px" },
                    offset: null,
                  },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: "out => in",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "0.6s ease-in-out" },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
            {
              type: 7,
              name: "delayedButtonFade",
              definitions: [
                {
                  type: 0,
                  name: "out",
                  styles: { type: 6, styles: { opacity: 0 }, offset: null },
                  options: void 0,
                },
                {
                  type: 0,
                  name: "in",
                  styles: { type: 6, styles: { opacity: 1 }, offset: null },
                  options: void 0,
                },
                {
                  type: 1,
                  expr: "out => in",
                  animation: [
                    { type: 6, styles: {}, offset: null },
                    { type: 4, styles: null, timings: "1s ease-in-out" },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      }),
      k = s["ɵccf"]("app-home", y.a, r, {}, {}, []);
  },
  Q34W: function (n, l, e) {
    "use strict";
    var t = e("8kas");
    e.d(l, "a", function () {
      return i;
    });
    var i = (function () {
      function n() {
        (this.SWIPE_ACTION = {
          LEFT: "swipeleft",
          RIGHT: "swiperight",
          UP: "swipeup",
        }),
          (this.itemCount = 2),
          (this.node = null),
          (this.nodeCount = 0),
          (this.innerWidth = 0),
          (this.elementW = 0),
          (this.carouselW = 0),
          (this.dotCounts = [1]),
          (this.config = new t.a()),
          (this.initCount = 0),
          (this.tempCount = 0),
          (this.PreviousNav = "none"),
          (this.NextNav = "none"),
          (this.showDots = "none"),
          (this.showNav = "none"),
          (this.transformNode = ""),
          (this.carouselWidth = ""),
          (this.transformValue = 0),
          (this.transitionValue = ""),
          (this.elementWidth = ""),
          (this.initOnce = !1),
          (this.lastItemNum = 0),
          (this.resolutionKeys = []),
          (this.clientWidth = 0),
          (this.responsiveWidth = 0),
          (this.options = {}),
          (this.currentItemNumber = 1),
          (this.carouselLength = 20),
          (this.createCarousel = !1);
      }
      return (
        (n.prototype.getNodeCounts = function () {
          return this.nodeCount;
        }),
        (n.prototype.closed = function () {}),
        (n.prototype.dotItem = function (n) {
          var l;
          (this.PreviousNav = ""),
            (this.NextNav = ""),
            (this.transitionValue =
              "all " + this.config.animationSpeed + "s ease"),
            (this.currentItemNumber = n + 1),
            (this.transformValue = -this.currentItemNumber * this.elementW),
            (this.transformNode =
              "translate3d(" + this.transformValue + "px, 0px, 0px)");
          for (
            var e = this.node.nativeElement.querySelectorAll(
                ".carousel-dots span"
              ),
              t = 0;
            t < e.length;
            t++
          )
            e[t].classList.remove("active");
          (l = this.currentItemNumber++),
            (this.node.nativeElement.querySelectorAll(
              ".carousel-dots span:nth-child(" + l + ")"
            )[0].className = "carousel-dot active");
        }),
        (n.prototype.nextItem = function () {
          var n = this;
          (this.PreviousNav = ""),
            (this.NextNav = ""),
            (this.node.nativeElement.querySelectorAll(
              ".carousel-dots span"
            )[0].className = "carousel-dot"),
            (this.transitionValue =
              "all " + this.config.animationSpeed + "s ease"),
            (this.currentItemNumber += 1),
            (this.transformValue = -this.currentItemNumber * this.elementW),
            this.config.loop ||
              ((this.transformValue =
                -(this.currentItemNumber - 1) * this.elementW),
              this.currentItemNumber ==
                this.nodeCount - (this.config.itemCount - 1) &&
                (this.NextNav = "none")),
            (this.transformNode =
              "translate3d(" + this.transformValue + "px, 0px, 0px)"),
            this.currentItemNumber > this.nodeCount &&
              this.config.loop &&
              ((this.currentItemNumber =
                0 === this.currentItemNumber ? this.nodeCount : 1),
              setTimeout(function () {
                (n.transitionValue = ""),
                  (n.transformValue = -n.currentItemNumber * n.elementW),
                  (n.transformNode =
                    "translate3d(" + n.transformValue + "px, 0px, 0px)");
              }, 1e3 * this.config.animationSpeed)),
            (this.node.nativeElement.querySelectorAll(
              ".carousel-dots span:nth-child(" + this.currentItemNumber + ")"
            )[0].className = "carousel-dot active");
        }),
        (n.prototype.previousItem = function () {
          var n = this;
          (this.PreviousNav = ""),
            (this.NextNav = ""),
            (this.node.nativeElement.querySelectorAll(
              ".carousel-dots span"
            )[0].className = "carousel-dot"),
            (this.transitionValue =
              "all " + this.config.animationSpeed + "s ease");
          (this.currentItemNumber += -1),
            (this.transformValue = -this.currentItemNumber * this.elementW),
            this.config.loop ||
              ((this.transformValue =
                -(this.currentItemNumber - 1) * this.elementW),
              1 == this.currentItemNumber && (this.PreviousNav = "none")),
            (this.transformNode =
              "translate3d(" + this.transformValue + "px, 0px, 0px)"),
            0 === this.currentItemNumber &&
              this.config.loop &&
              ((this.currentItemNumber =
                0 === this.currentItemNumber ? this.nodeCount : 1),
              setTimeout(function () {
                (n.transitionValue = ""),
                  (n.transformValue = -n.currentItemNumber * n.elementW),
                  (n.transformNode =
                    "translate3d(" + n.transformValue + "px, 0px, 0px)");
              }, 1e3 * this.config.animationSpeed)),
            (this.node.nativeElement.querySelectorAll(
              ".carousel-dots span:nth-child(" + this.currentItemNumber + ")"
            )[0].className = "carousel-dot active");
        }),
        (n.prototype.playcarousel = function () {}),
        (n.prototype.ngAfterContentInit = function () {
          this.initOnce || (this.initOnce = !0);
        }),
        (n.prototype.init = function () {
          (this.clientWidth = window.screen.width),
            (this.overwrites = this.options.responsive),
            Object.assign(this.config, this.options),
            this.getItemCount(),
            this.createCarouselItem();
        }),
        (n.prototype.newsinit = function (n) {
          (this.clientWidth = window.screen.width),
            (this.overwrites = this.options.responsive),
            Object.assign(this.config, this.options),
            this.getItemCount(),
            this.newscreateCarouselItem(n);
        }),
        (n.prototype.getItemCount = function () {
          if (this.overwrites) {
            for (var n = Object.keys(this.overwrites), l = 0; l < n.length; l++)
              if (this.clientWidth <= parseInt(n[l])) {
                (this.itemCount = parseInt(this.overwrites["" + n[l]])),
                  (this.responsiveWidth = parseInt(n[l]));
                break;
              }
          } else this.itemCount = this.config.itemCount;
        }),
        (n.prototype.createCarouselItem = function () {
          if (
            ((this.innerWidth = this.getViewPort()),
            (this.transitionValue = "all 0s ease"),
            this.config.showNav &&
              ((this.PreviousNav = ""), (this.NextNav = "")),
            this.config.showDots && (this.showDots = ""),
            this.config.showNav && (this.showNav = ""),
            (this.nodeCount = this.carouselLength),
            (this.elementW = this.innerWidth / this.itemCount),
            (this.carouselW = this.elementW * this.nodeCount + this.nodeCount),
            (this.carouselWidth = this.carouselW + "px"),
            (this.elementWidth = this.elementW + "px"),
            this.config.loop)
          ) {
            for (var n = [], l = [], e = 0; e < this.itemCount; e++) {
              var t = Object.assign({}, this.duplicate[e]),
                i = Object.assign(
                  {},
                  this.duplicate[this.carouselLength - (e + 1)]
                );
              (i.clone = t.clone = !0), n.push(t), l.push(i);
            }
            for (var o = this.itemCount - 1, e = 0; e < this.itemCount; e++)
              this.duplicate.push(n[e]),
                this.duplicate.splice(e, 0, l[o - e]),
                this.duplicate.join();
            (this.currentItemNumber = this.itemCount),
              (this.carouselWidth =
                this.carouselW +
                this.elementW * this.itemCount +
                this.elementW * this.itemCount +
                "px"),
              1 == this.itemCount &&
                (this.transformValue = -(
                  Math.abs(this.transformValue) +
                  this.elementW * this.itemCount
                )),
              (this.transformValue = -this.currentItemNumber * this.elementW),
              (this.transformNode =
                "translate3d(" + this.transformValue + "px, 0px, 0px)");
          }
          (this.dotCounts = Array(this.nodeCount).fill(1)),
            (this.transitionValue =
              "all " + this.config.animationSpeed + "s ease"),
            this.config.loop || (this.PreviousNav = "none");
        }),
        (n.prototype.newscreateCarouselItem = function (n) {
          if (
            ((this.innerWidth = this.getViewPort()),
            (this.transitionValue = "all 0s ease"),
            this.config.showNav &&
              ((this.PreviousNav = ""), (this.NextNav = "")),
            this.config.showDots && (this.showDots = ""),
            this.config.showNav && (this.showNav = ""),
            (this.nodeCount = n),
            (this.elementW = this.innerWidth / this.itemCount),
            (this.carouselW = this.elementW * this.nodeCount + this.nodeCount),
            (this.carouselWidth = this.carouselW + "px"),
            (this.elementWidth = this.elementW + "px"),
            this.config.loop)
          ) {
            for (var l = [], e = [], t = 0; t < this.itemCount; t++) {
              var i = Object.assign({}, this.duplicate[t]),
                o = Object.assign({}, this.duplicate[n - (t + 1)]);
              (o.clone = i.clone = !0), l.push(i), e.push(o);
            }
            for (var u = this.itemCount - 1, t = 0; t < this.itemCount; t++)
              this.duplicate.push(l[t]),
                this.duplicate.splice(t, 0, e[u - t]),
                this.duplicate.join();
            (this.currentItemNumber = this.itemCount),
              (this.carouselWidth =
                this.carouselW +
                this.elementW * this.itemCount +
                this.elementW * this.itemCount +
                "px"),
              1 == this.itemCount &&
                (this.transformValue = -(
                  Math.abs(this.transformValue) +
                  this.elementW * this.itemCount
                )),
              (this.transformValue = -this.currentItemNumber * this.elementW),
              (this.transformNode =
                "translate3d(" + this.transformValue + "px, 0px, 0px)");
          }
          (this.dotCounts = Array(this.nodeCount).fill(1)),
            (this.transitionValue =
              "all " + this.config.animationSpeed + "s ease"),
            this.config.loop || (this.PreviousNav = "none");
        }),
        (n.prototype.ngOnInit = function () {}),
        (n.prototype.detectIE = function () {
          var n = window.navigator.userAgent,
            l = n.indexOf("MSIE ");
          if (l > 0) return parseInt(n.substring(l + 5, n.indexOf(".", l)), 10);
          if (n.indexOf("Trident/") > 0) {
            var e = n.indexOf("rv:");
            return parseInt(n.substring(e + 3, n.indexOf(".", e)), 10);
          }
          var t = n.indexOf("Edge/");
          return t > 0 && parseInt(n.substring(t + 5, n.indexOf(".", t)), 10);
        }),
        (n.prototype.getViewPort = function () {
          return 0 == this.detectIE()
            ? this.node.nativeElement.querySelectorAll(".carousel.viewport")[0]
                .clientWidth
            : 0 ==
              this.node.nativeElement.querySelectorAll(".carousel.viewport")[0]
                .clientWidth
            ? 1010
            : this.node.nativeElement.querySelectorAll(".carousel.viewport")[0]
                .clientWidth;
        }),
        (n.prototype.onResize = function (n) {
          this.resizeNodes();
        }),
        (n.prototype.resizeNodes = function () {
          (this.innerWidth = this.getViewPort()),
            (this.transitionValue = ""),
            (this.elementW = this.innerWidth / this.itemCount),
            (this.carouselW = this.elementW * this.nodeCount + this.nodeCount),
            (this.carouselWidth = this.carouselW + "px"),
            this.config.loop &&
              (this.carouselWidth =
                this.carouselW +
                this.elementW * this.itemCount +
                this.elementW * this.itemCount +
                "px"),
            (this.elementWidth = this.elementW + "px"),
            (this.transformValue = -this.currentItemNumber * this.elementW),
            (this.transformNode =
              "translate3d(" + this.transformValue + "px, 0px, 0px)");
        }),
        (n.prototype.swipe = function (n) {
          if (
            (void 0 === n && (n = this.SWIPE_ACTION.RIGHT),
            !(
              this.currentItemNumber > this.duplicate.length ||
              this.currentItemNumber < 0
            ))
          ) {
            this.SWIPE_ACTION.UP,
              n == this.SWIPE_ACTION.RIGHT && this.previousItem(),
              n == this.SWIPE_ACTION.LEFT && this.nextItem();
          }
        }),
        (n.ctorParameters = function () {
          return [];
        }),
        n
      );
    })();
  },
  Qmgx: function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = [
      '.created[_ngcontent-%COMP%]{font-size:12px;font-style:normal;text-transform:uppercase;font-weight:400;color:#807c9c;padding-bottom:50px}.video[_ngcontent-%COMP%]{background:#0d0d0d;position:relative;z-index:0;display:block;padding:29px 25px 26px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1090px;overflow:hidden;margin:20px auto;-webkit-box-shadow:0 1px 4px 0 #a1a1a1;box-shadow:0 1px 4px 0 #a1a1a1;-webkit-filter:inherit!important;filter:inherit!important;margin-top:0}@media only screen and (max-width:1023px){.video[_ngcontent-%COMP%]{padding:15px}}@media only screen and (max-width:767px){.video[_ngcontent-%COMP%]{padding:0 5px;width:100%}}.video[_ngcontent-%COMP%]   span.overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);position:absolute;top:0;left:0;width:100%;height:100%}.video__container[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:59.8%;float:left}@media only screen and (min-width:1024px) and (orientation:portrait){.video__container[_ngcontent-%COMP%]{max-width:1000}}@media only screen and (max-width:767px){.video__container[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}}.video__created[_ngcontent-%COMP%]{display:none}.video__title[_ngcontent-%COMP%]{top:4px;left:4px;width:auto;z-index:1;font-size:8px;letter-spacing:1px;line-height:1}.video__preplay[_ngcontent-%COMP%], .video__title[_ngcontent-%COMP%]{position:absolute;height:auto;display:inline-block}.video__preplay[_ngcontent-%COMP%]{top:50%;left:50%;width:auto;z-index:2;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);cursor:pointer;width:90%;text-align:center}.video__preplay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Roboto;font-size:16px;text-transform:uppercase;color:#fff;display:block}@media only screen and (min-width:768px){.video__preplay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px}}.video__preplay[_ngcontent-%COMP%]   span.category[_ngcontent-%COMP%]{font-size:12px;color:#18d77c}@media only screen and (min-width:768px){.video__preplay[_ngcontent-%COMP%]   span.category[_ngcontent-%COMP%]{font-size:18px}}.video__preplay[_ngcontent-%COMP%]   span.video__play.play[_ngcontent-%COMP%]{display:inline-block;margin-top:10px}.video__play[_ngcontent-%COMP%]{display:inline-block;background-image:url("/sites/g/files/g2000007366/files/featured-video-play.png");background-repeat:no-repeat;background-position:50%;background-size:100% auto;width:40px;height:40px;opacity:1;line-height:0;cursor:pointer}@media only screen and (min-width:768px){.video__play[_ngcontent-%COMP%]{width:66px;height:66px}}.video__image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-size:100% auto;background-position:50%;background-repeat:no-repeat;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (min-width:768px) and (max-width:1023px){.video__image[_ngcontent-%COMP%]{background-size:cover}}.video[_ngcontent-%COMP%]{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="7" /></filter></svg>#filter\')}.video__image.playing[_ngcontent-%COMP%]{display:none}.video__background[_ngcontent-%COMP%]{position:absolute;top:-7px;left:-7px;width:calc(100% + 7px);height:100%;z-index:-1;background-size:100% auto;background-repeat:no-repeat;background-color:#000;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="7" /></filter></svg>#filter\');-webkit-filter:blur(7px);filter:blur(7px);background-position:50%;padding:7px}@media only screen and (max-width:1023px){.video__background[_ngcontent-%COMP%]{background-size:auto 100%}}.row__video__category[_ngcontent-%COMP%]{color:#f43939;font-size:12px;font-family:Roboto}@media only screen and (max-width:767px){.row__video__category[_ngcontent-%COMP%]{padding-bottom:3px}}.homepage-featuredVideo[_ngcontent-%COMP%]   .video__container[_ngcontent-%COMP%]{width:100%}.homepage-featuredVideo[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{width:100%;padding:0;margin:0}.media-thumbnail-frame[_ngcontent-%COMP%]{padding-bottom:56.25%;position:relative;width:100%;height:0;overflow:hidden;display:block;line-height:0}.media-thumbnail-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .media-thumbnail-frame[_ngcontent-%COMP%]   object[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:none}[_nghost-%COMP%] iframe{position:absolute;top:0;left:0;width:100%;height:100%}@media only screen and (min-width:768px) and (max-width:1023px) and (orientation:portrait){.homepage-featuredVideo[_ngcontent-%COMP%]   .media-thumbnail-frame[_ngcontent-%COMP%]{padding-bottom:77.25%}}.video__list__container[_ngcontent-%COMP%]{float:right;width:37%}@media only screen and (max-width:767px){.video__list__container[_ngcontent-%COMP%]{width:100%;float:none}}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;width:100%;display:block;height:auto;overflow:hidden;margin-bottom:13px;padding:14px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f0f0f0;-webkit-box-shadow:none;box-shadow:none}@media only screen and (max-width:767px){.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{display:none}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .listImage[_ngcontent-%COMP%]{position:relative;padding:56.25% 0 0;height:0;width:100%}}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.video__image[_ngcontent-%COMP%]{cursor:pointer;width:50%;float:left;min-height:100px;position:inherit}@media only screen and (max-width:767px){.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.video__image[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.play[_ngcontent-%COMP%]{color:#000;font-weight:400;margin-top:2px;display:inline-block;vertical-align:middle;margin-right:5px}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.nowPlaying[_ngcontent-%COMP%]{font-size:0;color:#f43939;letter-spacing:1px;text-transform:uppercase;font-family:Roboto}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.nowPlaying.active[_ngcontent-%COMP%]{font-size:12px;vertical-align:middle;display:inline-block;margin-top:4px}.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{float:right;width:50%;padding-left:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (max-width:767px){.video__list__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{width:100%;float:none;padding:14px 0 16px}}.row__body__title[_ngcontent-%COMP%]{color:#030303;cursor:pointer;font-size:14px;font-weight:500;margin:5px 0;text-transform:capitalize;line-height:1.2}.row__body__title[_ngcontent-%COMP%]:hover{color:#f43939}@media only screen and (min-width:768px){.row__body__title[_ngcontent-%COMP%]{margin:5px 0 0;min-height:65px}}.video.playing[_ngcontent-%COMP%]   a.preplay[_ngcontent-%COMP%], .video.playing[_ngcontent-%COMP%]   span.overlay[_ngcontent-%COMP%]{display:none!important}.video[_ngcontent-%COMP%]   span.video__play.play[_ngcontent-%COMP%]{display:inline-block!important}span.video__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.video__container[_ngcontent-%COMP%]   .row__body__title[_ngcontent-%COMP%]{display:inline;width:100%;z-index:1;position:relative;color:#fff;pointer-events:none}.video__container[_ngcontent-%COMP%]{text-align:center}.video.playing[_ngcontent-%COMP%]   .video__container[_ngcontent-%COMP%]   .row__body__title[_ngcontent-%COMP%]{display:none}',
    ];
  },
  ah84: function (n, l, e) {
    "use strict";
    var t = e("+rAa"),
      i = e("kZql"),
      o = e("Qbdm"),
      u = e("5oXY"),
      a = e("nkJK");
    e.d(l, "a", function () {
      return r;
    });
    var r = (function () {
      function n(n, l, e, t) {
        var o = this;
        (this.titleService = n),
          (this.activatedRoute = l),
          (this.router = e),
          (this.blockService = t),
          (this.artistTourFadeIn = "hidden"),
          (this.tourButtonAnimate = "out"),
          (this.smartHeader = "tour"),
          (this.delayedButtonFade = "out"),
          (this.isMobileMenu = !1),
          (this.smartHeaderConfig = {
            tourPanel: "tour",
            herovideoBlock: "tour",
            musicPanel: "music",
            videoPanel: "video",
            photoPanel: "photo",
            newsPanel: "news",
          }),
          (this.videoStyle = {
            height: "auto",
            width: "1366px",
            top: "0px",
            left: "0px",
          }),
          (this.ngAfterViewInitCounter = 0),
          (this.homePageSpotifyEmbed = {}),
          (this.env = i.a),
          setTimeout(function () {
            o.artistTourFadeIn = "in";
          }, 2e3),
          setTimeout(function () {
            o.tourButtonAnimate = "in";
          }, 2500),
          this.router.events
            .filter(function (n) {
              return n instanceof u.NavigationStart;
            })
            .subscribe(function (n) {
              o.activatedRoute.root;
              document
                .getElementsByTagName("body")[0]
                .classList.remove("content-page");
            });
      }
      return (
        (n.prototype.updateOnScroll = function (n) {
          for (
            var l = document.getElementsByClassName("homepage"),
              e = document.getElementById("fixed-nav").offsetHeight,
              t = 0;
            t < l.length;
            t++
          ) {
            var i = l[t].offsetTop - e,
              o = i + l[t].offsetHeight,
              u = n.pageY | document.body.scrollTop;
            u >= i &&
              u <= o &&
              ((this.smartHeader = this.smartHeaderConfig[l[t].classList[1]]),
              (this.delayedButtonFade = "out"),
              (this.delayedButtonFade = "in"));
          }
          var a = n.pageY | document.body.scrollTop;
          this.artistTourFadeIn = a >= 300 ? "out2" : a >= 150 ? "out1" : "in";
        }),
        (n.prototype.getHomepageSpotifyEmbed = function () {
          var n = this;
          this.blockService
            .getBlock(this.env.homepageSpotifyBlockId)
            .subscribe(function (l) {
              n.homePageSpotifyEmbed = JSON.parse(l[0].body);
            });
        }),
        (n.prototype.ngOnInit = function () {
          window.scroll(0, 0);
          document.getElementsByTagName("body")[0].classList.add("home");
          t.a.checkMobile() && (this.isMobileMenu = !0),
            this.getHomepageSpotifyEmbed();
        }),
        (n.prototype.ngAfterViewInit = function () {
          if ((this.resizeVideo(), 0 == this.ngAfterViewInitCounter)) {
            var n = document.getElementById("googletagId");
            null != n && n.parentNode.removeChild(n);
            var l = document.createElement("script");
            l.setAttribute("type", "text/javascript"),
              l.setAttribute("id", "googletagId"),
              document.body.className.match("user-logged-in"),
              (l.innerHTML =
                "if(googletag.destroySlots != undefined){googletag.destroySlots()};var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() {var mapslot1 = googletag.sizeMapping().addSize([0, 0],[300,600]).addSize([997, 0],[160,750]).build();var slot1 = googletag.defineSlot('/29011727/Maniacs/home', 'fluid', 'dfp-ad-slot-1').addService(googletag.pubads()).setTargeting('pos', '1');var slot2 = googletag.defineSlot('/29011727/Maniacs/home', [300, 600], 'dfp-ad-slot-2').addService(googletag.pubads()).setTargeting('pos', '2');var slot3 = googletag.defineSlot('/29011727/Maniacs/home', [160, 750], 'dfp-ad-slot-5').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', 'LEFT');var slot4 = googletag.defineSlot('/29011727/Maniacs/home', [160, 750], 'dfp-ad-slot-6').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', 'RIGHT');var slot11 = googletag.defineSlot('/29011727/Maniacs/home', [728, 90], 'dfp-ad-slot-11').addService(googletag.pubads()).setTargeting('pos', '11');var slot12 = googletag.defineSlot('/29011727/Maniacs/home', [320, 50], 'dfp-ad-slot-12').addService(googletag.pubads()).setTargeting('pos', '12');" +
                'googletag.pubads().setTargeting("pageURL","").setTargeting("pagetype", ["home"]);console.log("insidehome");googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs(true);googletag.pubads().setCentering(true);googletag.pubads().enableSingleRequest();googletag.enableServices();});'),
              document.getElementsByTagName("head")[0].appendChild(l);
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript"),
              (e.innerHTML =
                "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-2'); });");
            try {
              var t = document.getElementById("dfp-ad-slot-2");
              t.appendChild(e);
              var i;
              i = setInterval(function () {
                var n = document.getElementById("close-ad");
                if (void 0 === n || null == n) {
                  var l = document.getElementById("dfp-ad-slot-11"),
                    e = document.getElementById("dfp-ad-slot-12"),
                    t = document.createElement("div");
                  (t.innerHTML = "X"),
                    t.classList.add("close-ad"),
                    t.setAttribute("id", "close-ad"),
                    void 0 !== l &&
                      null != l &&
                      (l.insertBefore(t, l.firstChild),
                      (t.onclick = function () {
                        l.style.display = "none";
                      })),
                    void 0 !== e &&
                      null != e &&
                      (e.insertBefore(t, e.firstChild),
                      (t.onclick = function () {
                        e.style.display = "none";
                      }));
                } else clearInterval(i);
              }, 1e3);
            } catch (n) {}
            var o = document.createElement("script");
            o.setAttribute("type", "text/javascript"),
              (o.innerHTML =
                "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-11'); });");
            try {
              document.getElementById("dfp-ad-slot-11"), t.appendChild(o);
            } catch (n) {}
            this.ngAfterViewInitCounter++;
          }
        }),
        (n.prototype.ngOnDestroy = function () {
          document.getElementsByTagName("body")[0].classList.remove("home");
        }),
        (n.prototype.getTicketsClick = function () {
          window.scroll(0, document.getElementById("tour").offsetTop);
        }),
        (n.prototype.resizeVideo = function () {
          var n = window.innerWidth,
            l = window.innerHeight,
            e = (1280 / 720) * l;
          e < n && (e = n), (this.videoStyle.width = e + "px");
        }),
        (n.prototype.setTitle = function (n) {
          window.scroll(0, 0), this.titleService.setTitle(t.a.htmlDecode(n));
        }),
        (n.prototype.onLoad = function (n) {
          this.resizeVideo();
        }),
        (n.prototype.onResize = function (n) {
          this.resizeVideo(),
            n.target.innerWidth < 767
              ? (this.isMobileMenu = !0)
              : (this.isMobileMenu = !1);
        }),
        (n.ctorParameters = function () {
          return [
            { type: o.Title },
            { type: u.ActivatedRoute },
            { type: u.Router },
            { type: a.a },
          ];
        }),
        n
      );
    })();
  },
  anls: function (n, l, e) {
    "use strict";
    function t(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "li",
            [["class", "animated-background"]],
            null,
            null,
            null,
            null,
            null
          )),
        ],
        null,
        null
      );
    }
    function i(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "block news-block shimmer"]],
            [[2, "isMobile", null]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "ul",
            [["class", "news-landing"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, t)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpad"](5),
          (n()(), In["ɵted"](null, ["\n    "])),
          (n()(), In["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 5, 0, n(l, 6, 0, 1, 2, 3, 4, 5));
        },
        function (n, l) {
          n(l, 0, 0, l.component.isMobile);
        }
      );
    }
    function o(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [["class", "title"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.component.headerText);
        }
      );
    }
    function u(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function a(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function r(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                               ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, a)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            16,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 33, 0, e.shareOpen);
        },
        null
      );
    }
    function d(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["POSTED ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
        }
      );
    }
    function s(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["READ\n                                    MORE"])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function c(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, u)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, r)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, [" \n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, d)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, s)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !e.minimal),
            n(l, 19, 0, !e.minimal),
            n(l, 22, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__item item-wrapper col"
            )
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.thumbnail
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function p(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, c)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != e.count);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          );
        }
      );
    }
    function g(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function m(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function f(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                               ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, m)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            16,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 33, 0, e.shareOpen);
        },
        null
      );
    }
    function h(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["POSTED ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
        }
      );
    }
    function _(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                                    MORE\n                                ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function w(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, g)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, f)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, h)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, _)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !e.minimal),
            n(l, 19, 0, !e.minimal),
            n(l, 22, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__item item-wrapper col"
            )
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.thumbnail
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function b(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, w)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 4, 0, l.context.$implicit.field_position != e.count);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          );
        }
      );
    }
    function C(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, p)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, b)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](l, 5, 0, In["ɵnov"](l, 6).transform(e.news, 0, 1))
          ),
            n(
              l,
              11,
              0,
              In["ɵunv"](
                l,
                11,
                0,
                In["ɵnov"](l, 12).transform(e.news, 1, 6 + e.moreNews)
              )
            );
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              " rows news ",
              e.cols,
              ""
            )
          );
        }
      );
    }
    function v(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function x(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["Posted ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function y(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            27,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            24,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            15,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, v)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(), In["ɵted"](null, ["\n\n\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "date_link"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, x)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            2,
            "div",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["Read more "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "i",
            [["class", "fas fa-angle-right"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n\n                    "])),
          (n()(), In["ɵted"](null, ["\n\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 13, 0, l.context.$implicit.title), n(l, 19, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row-",
              e.index,
              ""
            ),
            l.context.$implicit === e.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__item item-wrapper col"
              )
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail desktop"
              ),
              l.context.$implicit.field_blog_home_thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail mobile"
              ),
              l.context.$implicit.field_blog_home_thumbnail_1
            ),
            n(l, 8, 0, In["ɵinlineInterpolate"](1, "", e.customClass, " bg")),
            n(
              l,
              10,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            ),
            n(
              l,
              21,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " read_more")
            );
        }
      );
    }
    function P(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, y)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](
              l,
              5,
              0,
              In["ɵnov"](l, 6).transform(
                e.featuredNews,
                0,
                e.count + e.moreNews
              )
            )
          );
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " rows featuredNews")
          );
        }
      );
    }
    function M(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "news-carousel",
            [["class", "news-block__carousel"]],
            null,
            [["window", "resize"]],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== In["ɵnov"](n, 3).onResize(e) && t;
              }
              return t;
            },
            Vn.a,
            Vn.b
          )),
          In["ɵdid"](
            1687552,
            null,
            0,
            zn.a,
            [In.ElementRef, Wn.a, $n.Router, En.Title],
            { blogs: [0, "blogs"], blogslength: [1, "blogslength"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, e.featuredNews, e.featuredNewsLength);
        },
        null
      );
    }
    function O(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__title title"
            )
          );
        }
      );
    }
    function k(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function N(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                               ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, k)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 33, 0, e.shareOpen);
        },
        null
      );
    }
    function I(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            22,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, O)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, N)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["Posted ", ""])),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.context.$implicit.title), n(l, 15, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row-",
              e.index,
              ""
            ),
            l.context.$implicit === e.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__item item-wrapper col"
              )
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumb"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            ),
            n(
              l,
              17,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__body__created created"
              )
            ),
            n(l, 18, 0, l.context.$implicit.created);
        }
      );
    }
    function R(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, I)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](
              l,
              5,
              0,
              In["ɵnov"](l, 6).transform(e.latestNews, 0, e.count + e.moreNews)
            )
          );
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " rows latestNews")
          );
        }
      );
    }
    function T(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__title title"
            )
          );
        }
      );
    }
    function S(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__news-body news-body"
            ),
            l.parent.context.$implicit.body
          );
        }
      );
    }
    function V(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function z(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                               ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                               ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, V)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 33, 0, e.shareOpen);
        },
        null
      );
    }
    function W(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["Posted ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function $(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                                    MORE\n                                ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function E(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            28,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, T)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, S)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, z)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, W)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, $)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.context.$implicit.title),
            n(l, 13, 0, !e.minimal),
            n(l, 18, 0, !e.minimal),
            n(l, 21, 0, !e.minimal),
            n(l, 24, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__item item-wrapper col"
              )
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumb"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function L(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "innerWrapperAd home-page row__item item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-1"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "adtext"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n\n                    "])),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, E)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            17,
            0,
            In["ɵunv"](
              l,
              17,
              0,
              In["ɵnov"](l, 18).transform(e.landingNews, 0, 5 + e.moreNews)
            )
          );
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              " rows latestNews ",
              e.cols,
              ""
            )
          ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                2,
                "",
                e.customClass,
                "__row rowAd row-",
                e.index,
                " col grid"
              )
            );
        }
      );
    }
    function D(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "feature-news row__body__news-body news-body"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.body);
        }
      );
    }
    function H(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                            ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function F(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            36,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                    ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                           ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                            ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                            ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                    ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                    ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                            ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                            ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                        ",
          ])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, H)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, [
            "\n                                                    ",
          ])),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 33, 0, e.shareOpen);
        },
        null
      );
    }
    function A(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "feature-news row__body__created created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "Posted\n                                                ",
            "\n                                            ",
          ])),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function B(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                                                MORE\n                                            ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function j(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            30,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            27,
            "div",
            [["class", "feature-news row__item item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "feature-news row__thumbnail thumb"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            22,
            "div",
            [["class", "feature-news row__body body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            2,
            "a",
            [["href", ""]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [["class", "feature-news row__body__title title"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, D)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, F)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, [
            "\n\n                                            ",
          ])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, A)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, B)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 15, 0, !e.minimal),
            n(l, 20, 0, !e.minimal),
            n(l, 23, 0, !e.minimal),
            n(l, 26, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "row row-", e.index, " col grid")
          ),
            n(l, 4, 0, l.context.$implicit.thumbnail),
            n(l, 12, 0, l.context.$implicit.title);
        }
      );
    }
    function q(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n            "])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            13,
            "div",
            [["class", "news-page featureNews-landing"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "featureNews"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "featureNews__layout g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, j)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵted"](null, ["\n\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(l, 12, 0, l.component.categoryNews);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            9,
            0,
            In["ɵinlineInterpolate"](
              1,
              "feature-news rows featureNews ",
              e.cols,
              ""
            )
          );
        }
      );
    }
    function K(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function Y(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function J(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            37,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Y)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            17,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 34, 0, e.shareOpen);
        },
        null
      );
    }
    function X(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["POSTED ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
        }
      );
    }
    function Q(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                                    MORE\n                                ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function Z(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, K)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, J)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, X)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Q)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !e.minimal),
            n(l, 19, 0, !e.minimal),
            n(l, 22, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__item item-wrapper col"
            )
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.thumbnail
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function U(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Z)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != e.count);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          );
        }
      );
    }
    function G(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "div",
            [["class", "spotifyNewsContent"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, U)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            In["ɵunv"](l, 3, 0, In["ɵnov"](l, 4).transform(e.stickyNews, 2, 3))
          );
        },
        null
      );
    }
    function nn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function ln(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " spotifyNewsContent row__body__news-body news-body"
            ),
            l.parent.parent.context.$implicit.body_1
          );
        }
      );
    }
    function en(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            e.blogNewsShare
          );
        },
        null
      );
    }
    function tn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            37,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0;
              if ("click" === l) {
                t =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            Tn.a,
            Tn.b
          )),
          In["ɵdid"](
            4833280,
            null,
            0,
            Sn.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.shareClick() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withouthover"],
              ["src", "/sites/g/files/g2000009001/files/shareeimage.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "\n                                                ",
          ])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              ["class", "withhover"],
              ["src", "/sites/g/files/g2000009001/files/sahreimagehover.png"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(),
          In["ɵted"](null, ["\n                                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, en)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            17,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            e.blogShare
          ),
            n(l, 34, 0, e.shareOpen);
        },
        null
      );
    }
    function on(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["POSTED ", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
        }
      );
    }
    function un(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                                    MORE\n                                ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function an(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            27,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, nn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, ln)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, tn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, on)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, un)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 13, 0, !e.minimal),
            n(l, 18, 0, !e.minimal),
            n(l, 21, 0, !e.minimal),
            n(l, 24, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__item item-wrapper col"
            )
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.thumbnail
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function rn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, an)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != e.count);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          );
        }
      );
    }
    function dn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            5,
            "div",
            [["class", "spotifyNewsContent"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, rn)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            In["ɵunv"](l, 3, 0, In["ɵnov"](l, 4).transform(e.stickyNews, 3, 4))
          );
        },
        null
      );
    }
    function sn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, G)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, dn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 5, 0, 2 == e.homeNewsIndex), n(l, 8, 0, 3 == e.homeNewsIndex);
        },
        null
      );
    }
    function cn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function pn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__news-body news-body"
            ),
            l.parent.context.$implicit.body
          );
        }
      );
    }
    function gn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["", ""])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function mn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, [
            "READ\n                            MORE\n                        ",
          ])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function fn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            21,
            "li",
            [],
            [
              [8, "className", 0],
              [2, "selected", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            13,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n\n                        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, cn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, pn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, gn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, mn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n                    "])),
          (n()(), In["ɵted"](null, ["\n\n                "])),
          (n()(), In["ɵted"](null, ["\n            "])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 9, 0, l.context.$implicit.title),
            n(l, 12, 0, !e.minimal),
            n(l, 15, 0, !e.minimal),
            n(l, 18, 0, !e.minimal);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              " row row-",
              e.index,
              " col grid"
            ),
            l.context.$implicit === e.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__item item-wrapper col"
              )
            ),
            n(
              l,
              4,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail thumbnail"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function hn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](0, null, null, 7, "ul", [], null, null, null, null, null)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgClass,
            [
              In.IterableDiffers,
              In.KeyValueDiffers,
              In.ElementRef,
              In.Renderer,
            ],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          In["ɵpod"]({ fade: 0, onScreen: 1 }),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 2, null, fn)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          In["ɵpid"](0, Rn.SlicePipe, []),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            1,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              " rows news ",
              e.cols,
              ""
            ),
            n(l, 2, 0, e.className, !e.className)
          ),
            n(
              l,
              5,
              0,
              In["ɵunv"](
                l,
                5,
                0,
                In["ɵnov"](l, 6).transform(e.news, 0, e.count + e.moreNews)
              )
            );
        },
        null
      );
    }
    function _n(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__loader")
          );
        }
      );
    }
    function wn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.fetchNextPage() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["load more"])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              e.customClass,
              " pager__viewMore viewMore buttonWrapper"
            )
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " pager__viewMore__button button"
              )
            );
        }
      );
    }
    function bn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== In["ɵnov"](n, 1).onClick() && t;
              }
              if ("click" === l) {
                t = !1 !== i.clicked() && t;
              }
              return t;
            },
            null,
            null
          )),
          In["ɵdid"](
            16384,
            null,
            0,
            $n.RouterLink,
            [
              $n.Router,
              $n.ActivatedRoute,
              [8, null],
              In.Renderer2,
              In.ElementRef,
            ],
            { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] },
            null
          ),
          In["ɵpod"]({ page: 0 }),
          In["ɵpad"](1),
          (n()(), In["ɵted"](null, ["1"])),
        ],
        function (n, l) {
          n(l, 1, 0, n(l, 2, 0, 1), n(l, 3, 0, "."));
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__links")
          );
        }
      );
    }
    function Cn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["..."])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__links")
          );
        }
      );
    }
    function vn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            6,
            "li",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== In["ɵnov"](n, 3).onClick() && t;
              }
              if ("click" === l) {
                t = !1 !== i.clicked() && t;
              }
              return t;
            },
            null,
            null
          )),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgClass,
            [
              In.IterableDiffers,
              In.KeyValueDiffers,
              In.ElementRef,
              In.Renderer,
            ],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          In["ɵpod"]({ active: 0 }),
          In["ɵdid"](
            16384,
            null,
            0,
            $n.RouterLink,
            [
              $n.Router,
              $n.ActivatedRoute,
              [8, null],
              In.Renderer2,
              In.ElementRef,
            ],
            { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] },
            null
          ),
          In["ɵpod"]({ page: 0 }),
          In["ɵpad"](1),
          (n()(), In["ɵted"](null, ["", ""])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            1,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__links"),
            n(l, 2, 0, e.pager.currentPage === l.context.$implicit)
          ),
            n(l, 3, 0, n(l, 4, 0, l.context.$implicit), n(l, 5, 0, "."));
        },
        function (n, l) {
          n(l, 6, 0, l.context.$implicit);
        }
      );
    }
    function xn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["..."])),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__links")
          );
        }
      );
    }
    function yn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== In["ɵnov"](n, 1).onClick() && t;
              }
              if ("click" === l) {
                t = !1 !== i.clicked() && t;
              }
              return t;
            },
            null,
            null
          )),
          In["ɵdid"](
            16384,
            null,
            0,
            $n.RouterLink,
            [
              $n.Router,
              $n.ActivatedRoute,
              [8, null],
              In.Renderer2,
              In.ElementRef,
            ],
            { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] },
            null
          ),
          In["ɵpod"]({ page: 0 }),
          In["ɵpad"](1),
          (n()(), In["ɵted"](null, ["", ""])),
        ],
        function (n, l) {
          n(l, 1, 0, n(l, 2, 0, l.component.pager.totalPages), n(l, 3, 0, "."));
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__links")
          ),
            n(l, 4, 0, e.pager.totalPages);
        }
      );
    }
    function Pn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            38,
            "div",
            [["id", "pager"]],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            9,
            "li",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== In["ɵnov"](n, 5).onClick() && t;
              }
              if ("click" === l) {
                t = !1 !== i.clicked() && t;
              }
              return t;
            },
            null,
            null
          )),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgClass,
            [
              In.IterableDiffers,
              In.KeyValueDiffers,
              In.ElementRef,
              In.Renderer,
            ],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          In["ɵpod"]({ disabled: 0 }),
          In["ɵdid"](
            16384,
            null,
            0,
            $n.RouterLink,
            [
              $n.Router,
              $n.ActivatedRoute,
              [8, null],
              In.Renderer2,
              In.ElementRef,
            ],
            { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] },
            null
          ),
          In["ɵpod"]({ page: 0 }),
          In["ɵpad"](1),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [["class", "pager__navigator_a"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["<"])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, bn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Cn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, vn)),
          In["ɵdid"](
            802816,
            null,
            0,
            Rn.NgForOf,
            [In.ViewContainerRef, In.TemplateRef, In.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, xn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, yn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            9,
            "li",
            [],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== In["ɵnov"](n, 31).onClick() && t;
              }
              if ("click" === l) {
                t = !1 !== i.clicked() && t;
              }
              return t;
            },
            null,
            null
          )),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgClass,
            [
              In.IterableDiffers,
              In.KeyValueDiffers,
              In.ElementRef,
              In.Renderer,
            ],
            { klass: [0, "klass"], ngClass: [1, "ngClass"] },
            null
          ),
          In["ɵpod"]({ disabled: 0 }),
          In["ɵdid"](
            16384,
            null,
            0,
            $n.RouterLink,
            [
              $n.Router,
              $n.ActivatedRoute,
              [8, null],
              In.Renderer2,
              In.ElementRef,
            ],
            { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] },
            null
          ),
          In["ɵpod"]({ page: 0 }),
          In["ɵpad"](1),
          (n()(), In["ɵted"](null, ["\n                "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [["class", "pager__navigator_a"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, [">"])),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            In["ɵinlineInterpolate"](1, "", e.customClass, " pager__navigator"),
            n(l, 4, 0, 1 === e.pager.currentPage)
          ),
            n(l, 5, 0, n(l, 6, 0, e.pager.currentPage - 1), n(l, 7, 0, ".")),
            n(l, 14, 0, e.pager.currentPage > 6),
            n(l, 17, 0, e.pager.currentPage > 4),
            n(l, 20, 0, e.pager.pages),
            n(l, 23, 0, e.pager.currentPage < e.pager.totalPages - 4),
            n(
              l,
              26,
              0,
              e.pager.currentPage < e.pager.totalPages - 3 &&
                e.pager.totalPages > 6
            ),
            n(
              l,
              29,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " pager__navigator"
              ),
              n(l, 30, 0, e.pager.currentPage === e.pager.totalPages)
            ),
            n(l, 31, 0, n(l, 32, 0, e.pager.currentPage + 1), n(l, 33, 0, "."));
        },
        function (n, l) {
          var e = l.component;
          n(l, 0, 0, In["ɵinlineInterpolate"](1, "", e.customClass, " pager"));
        }
      );
    }
    function Mn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            41,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["\n    "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, o)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n    "])),
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            35,
            "div",
            [["class", "block viewport"]],
            null,
            null,
            null,
            null,
            null
          )),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgSwitch,
            [],
            { ngSwitch: [0, "ngSwitch"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, C)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, P)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, M)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, R)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, L)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, q)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, sn)),
          In["ɵdid"](
            278528,
            null,
            0,
            Rn.NgSwitchCase,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, hn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgSwitchDefault,
            [In.ViewContainerRef, In.TemplateRef, Rn.NgSwitch],
            null,
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, _n)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, wn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n        "])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Pn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n    "])),
          (n()(), In["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, e.headerText), n(l, 6, 0, e.switchCarouselTemplate);
          n(l, 9, 0, 1);
          n(l, 12, 0, 2);
          n(l, 15, 0, 8);
          n(l, 18, 0, 4);
          n(l, 21, 0, 5);
          n(l, 24, 0, 6);
          n(l, 27, 0, 7),
            n(l, 33, 0, e.pagers),
            n(l, 36, 0, e.viewMore),
            n(l, 39, 0, e.pager.pages && e.pager.pages.length && e.pagers);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "block news-block ", e.customClass, "")
          );
        }
      );
    }
    function On(n) {
      return In["ɵvid"](
        0,
        [
          (n()(), In["ɵted"](null, ["\n"])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, i)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n"])),
          (n()(), In["ɵted"](null, ["\n"])),
          (n()(), In["ɵand"](16777216, null, null, 1, null, Mn)),
          In["ɵdid"](
            16384,
            null,
            0,
            Rn.NgIf,
            [In.ViewContainerRef, In.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 2, 0, !e.dataLoaded), n(l, 6, 0, e.dataLoaded);
        },
        null
      );
    }
    function kn(n) {
      return In["ɵvid"](
        0,
        [
          (n()(),
          In["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-block",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "scroll"],
            ],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== In["ɵnov"](n, 1).onResize(e) && t;
              }
              if ("window:scroll" === l) {
                t = !1 !== In["ɵnov"](n, 1).findScrollValue(e) && t;
              }
              return t;
            },
            On,
            Fn
          )),
          In["ɵdid"](
            4440064,
            null,
            0,
            Ln.a,
            [Wn.a, $n.Router, Dn.a, $n.ActivatedRoute, In.ElementRef, En.Title],
            null,
            null
          ),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var Nn = e("lxU8"),
      In = e("3j3K"),
      Rn = e("2Je8"),
      Tn = e("09HW"),
      Sn = e("FpAZ"),
      Vn = e("rTO+"),
      zn = e("BK5+"),
      Wn = e("fa0J"),
      $n = e("5oXY"),
      En = e("Qbdm"),
      Ln = e("CWct"),
      Dn = e("ZyHc");
    e.d(l, "b", function () {
      return Fn;
    }),
      (l.a = On);
    var Hn = [Nn.a],
      Fn = In["ɵcrt"]({ encapsulation: 0, styles: Hn, data: {} });
    In["ɵccf"](
      "app-news-block",
      Ln.a,
      kn,
      {
        count: "count",
        cols: "cols",
        detailPath: "detailPath",
        type: "type",
        category: "category",
        customClass: "customClass",
        minimal: "minimal",
        headerText: "headerText",
        viewMore: "viewMore",
        scriptCheck: "scriptCheck",
        pagers: "pagers",
        switchCarouselTemplate: "switchCarouselTemplate",
        homeNewsIndex: "homeNewsIndex",
        homeSpotifyNews: "homeSpotifyNews",
      },
      {},
      []
    );
  },
  bxZi: function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = [""];
  },
  iE1k: function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = [
      '.homepage__layout.video[_ngcontent-%COMP%]{width:100%;padding:0;margin:0;position:relative;overflow:hidden}@media only screen and (max-width:767px){.homepage__layout.video[_ngcontent-%COMP%]{padding:0 10px}}.homepage__layout.photo[_ngcontent-%COMP%]{width:100%;padding-left:0;padding-right:0}.homepage__layout.tour[_ngcontent-%COMP%]{padding-top:20px;position:relative}.homepage__title.music[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:62px;color:#1b214e;letter-spacing:2px}@media only screen and (max-width:767px){.homepage__title.music[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:20px}}.homepage.merch[_ngcontent-%COMP%]{background-color:#f6f5fd;display:block}.homepage.merch[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.homepage.music[_ngcontent-%COMP%]{color:#1d1e20;background:#e4e4e4}.homepage.video[_ngcontent-%COMP%]{background:#fff}.homepage.news[_ngcontent-%COMP%]{background-color:#fff;width:100%}.homepage.photo[_ngcontent-%COMP%], .homepage.tour[_ngcontent-%COMP%]{background-color:#1d1e20}.homepage.tour.tour-in[_ngcontent-%COMP%]{background-color:#f6f5fd;-webkit-transition:background-color 3s cubic-bezier(.165,.84,.44,1);transition:background-color 3s cubic-bezier(.165,.84,.44,1)}.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-bottom:50px;padding-top:80px}@media only screen and (max-width:767px){.buttonWrapper[_ngcontent-%COMP%]{padding-bottom:7%;padding-top:7%}}.buttonWrapper.merch[_ngcontent-%COMP%]{text-align:center;padding-bottom:50px;padding-top:80px}.buttonWrapper.video[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}@media only screen and (max-width:767px){.buttonWrapper.video[_ngcontent-%COMP%]{padding:14px 0 23px}}@media only screen and (max-width:767px){.buttonWrapper.video[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{padding:12px!important}}.musicPanel[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:#1d1e20;color:#fff}.heroBlock[_ngcontent-%COMP%]{text-align:center;display:table-cell;height:100vh;width:1000000px;vertical-align:middle;max-width:100%}.heroBlock[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.homepage-tour-track[_ngcontent-%COMP%]{position:absolute;right:10px;top:60px}.button[_ngcontent-%COMP%]:not(.reverse-button){background-color:#0d0d0d;display:inline-block;border-radius:0;text-transform:uppercase;padding:13px 57px;border:1px solid #0d0d0d;line-height:1;font-size:19px;cursor:pointer;-webkit-transition:all 1s ease 0s;transition:all 1s ease 0s;font-family:Roboto;font-weight:900;color:#fff;border:1px solid #f43939;background:#f43939}@media only only screen and (max-width:767px){.button[_ngcontent-%COMP%]:not(.reverse-button){padding:12px 62px}}.button[_ngcontent-%COMP%]:not(.reverse-button):hover{background-color:#f43939;border:1px solid #f43939;color:#fff;border-color:#f43939;background:#f43939}.button.reverse-button[_ngcontent-%COMP%]{background-color:#0d0d0d;display:inline-block;border-radius:0;text-transform:uppercase;padding:13px 57px;border:1px solid #0d0d0d;line-height:1;font-size:19px;cursor:pointer;-webkit-transition:all 1s ease 0s;transition:all 1s ease 0s;font-family:Roboto;font-weight:900}.button.reverse-button[_ngcontent-%COMP%]:hover{border-color:#f43939}.button.reverse-button[_ngcontent-%COMP%]{color:#fff;border:1px solid #f43939;background:#f43939}@media only only screen and (max-width:767px){.button.reverse-button[_ngcontent-%COMP%]{padding:12px 62px}}.button.reverse-button[_ngcontent-%COMP%]:hover{background-color:#f43939;border:1px solid #f43939;color:#fff}@media only screen and (max-width:767px){.heroBlock[_ngcontent-%COMP%]{width:100%}.heroBlock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin-bottom:15px;line-height:70px}.herovideoBlock[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%}}#myVideo[_ngcontent-%COMP%]{display:block;width:100%;z-index:-1;position:fixed;height:auto;background-color:#000}.herovideoBlock[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100vh;display:table}.videoHeader[_ngcontent-%COMP%]{display:block;position:relative;width:100%;height:0;padding-top:56.25%;line-height:0}video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}@media (max-width:1200px){#myVideo[_ngcontent-%COMP%]{height:100%;width:auto}}@media (max-width:1000px){#myVideo[_ngcontent-%COMP%]{height:100vh;width:auto}div#smartHeader[_ngcontent-%COMP%]{display:none}}div.homepage.mailinglist[_ngcontent-%COMP%], div.mailinglistPanel[_ngcontent-%COMP%]{background-color:#f6f5fd}.footer-wrapper[_ngcontent-%COMP%]{background:#fff}.g-layout.news[_ngcontent-%COMP%]{padding:0 0 25px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto}@media only screen and (min-width:768px){.g-layout.news[_ngcontent-%COMP%]{padding:0 0 50px;width:990px}}@media only screen and (min-width:1024px) and (max-width:1200px){.g-layout.news[_ngcontent-%COMP%]{width:900px}}@media only screen and (max-width:1023px){.g-layout.news[_ngcontent-%COMP%]{width:700px}}@media only screen and (max-width:767px){.g-layout.news[_ngcontent-%COMP%]{width:100%}}.g-layout.news[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:15px 0;margin:0}@media only screen and (min-width:768px){.g-layout.news[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:30px 0}}.homepage.news.newsHeader[_ngcontent-%COMP%]   .g-layout.news[_ngcontent-%COMP%]   h2.homepage__title.news[_ngcontent-%COMP%]{letter-spacing:1.5px}.newsHeader[_ngcontent-%COMP%]   ul.home-page.rows[_ngcontent-%COMP%]   li.home-page__row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 20px;width:100%}.homepage-block.video-block[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (min-width:768px){.homepage-block.video-block[_ngcontent-%COMP%]{padding:0 20px}}.headerFeaturedInner[_ngcontent-%COMP%]{max-width:1120px;padding:0 10px;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (min-width:768px){.headerFeaturedInner[_ngcontent-%COMP%]{padding:0}}@media only screen and (min-width:1200px){.headerFeaturedInner[_ngcontent-%COMP%]{padding:0 15px}}.spotifyMerchWrapper[_ngcontent-%COMP%]{text-align:center;max-width:1090px;width:100%;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.spotify[_ngcontent-%COMP%]{margin:0;display:block;width:100%}@media only screen and (max-width:767px){.spotify[_ngcontent-%COMP%]{margin:15px auto;padding-bottom:0;width:100%}}@media only screen and (min-width:768px){.spotify[_ngcontent-%COMP%]{position:relative;height:100%}}.spotify[_ngcontent-%COMP%]   .spotify-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width:768px){.spotify[_ngcontent-%COMP%]   .spotify-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}}@media only screen and (min-width:768px){.spotify-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:600px}}.breakingNewsWrapper[_ngcontent-%COMP%]{width:990px;padding:25px 0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;text-align:center}@media only screen and (min-width:768px){.breakingNewsWrapper[_ngcontent-%COMP%]{padding:50px 0}.breakingNewsWrapper[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.col.grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 20px}}@media only screen and (min-width:768px) and (max-width:1023px){.breakingNewsWrapper[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.col.grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0 2px;overflow:hidden}}@media only screen and (min-width:1024px) and (max-width:1200px){.breakingNewsWrapper[_ngcontent-%COMP%]{width:900px}}@media only screen and (max-width:1023px){.breakingNewsWrapper[_ngcontent-%COMP%]{width:730px}}@media only screen and (max-width:767px){.breakingNewsWrapper[_ngcontent-%COMP%]{width:100%}.breakingNewsWrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 10px}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:36%;margin-left:7px}@media only screen and (min-width:768px) and (max-width:1025px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]{width:37%}}@media only screen and (min-width:1200px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]{width:42%}}@media only screen and (max-width:767px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]{width:100%;margin:0 auto}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]{width:auto;padding:0;position:relative}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{background:url("/sites/g/files/g2000007366/files/2017-10/newsBg.png");width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:17px 10px;margin:0 auto;text-align:center;overflow:hidden}@media only screen and (min-width:1024px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{padding:17px 16px}}@media only screen and (min-width:768px) and (max-width:1023px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{padding:15px 4px}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;padding:0;display:inline-block;vertical-align:middle;text-align:left;color:#fff;float:left}@media only screen and (min-width;1025px)[_ngcontent-%COMP%]   and[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:1200px){.breakingNewsWrapper .homepage.merch .g-layout.merch .textWrapper h2{font-size:19px}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:16px;display:inline-block;vertical-align:middle}@media only screen and (min-width:768px) and (max-width:1025px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px!important}}@media only screen and (min-width:1024px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:23px}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span.logo[_ngcontent-%COMP%]{margin-right:6px}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;display:inline-block;margin-right:2px}@media only screen and (min-width:1024px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:6px}}@media only screen and (max-width:1023px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:4vw;margin:0}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding:0;float:right}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{padding:7px 5px;font-size:12px;margin-left:10px;color:#fff;border:1px solid #fff}@media only screen and (min-width:768px) and (max-width:1025px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{font-size:13px!important;padding:7px 5px!important}}@media only screen and (max-width:767px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{margin-top:2px;margin-left:5px}}@media only screen and (min-width:1025px) and (max-width:1200px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{font-size:15px!important;padding:13px 10px 12px}}@media only screen and (min-width:1024px){.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]{font-size:18px;padding:13px 17px 12px}}.breakingNewsWrapper[_ngcontent-%COMP%]   .homepage.merch[_ngcontent-%COMP%]   .g-layout.merch[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .buttonWrapper.merch[_ngcontent-%COMP%]   .button.reverse-button[_ngcontent-%COMP%]:hover{background:#f43939;border:1px solid #f43939!important}.homepage.breakingNews[_ngcontent-%COMP%]{width:27.5%;display:inline-block;background:#fff;color:#000;-webkit-box-shadow:none;box-shadow:none}@media only screen and (max-width:767px){.homepage.breakingNews[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}}@media only screen and (min-width:768px) and (max-width:1023px){.homepage.breakingNews[_ngcontent-%COMP%]{margin-right:1px;padding-bottom:44.55%}}.video-news-wrapper[_ngcontent-%COMP%]{max-width:1120px;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px auto;overflow:hidden}@media only screen and (max-width:767px){.video-news-wrapper[_ngcontent-%COMP%]{padding:0 10px!important}}.news-socials-wrapper[_ngcontent-%COMP%]{display:inline-block;width:42%;float:right;box-sizing:border-box;-webkit-box-sizing:border-box}.latestNews[_ngcontent-%COMP%], .socialsWrapper[_ngcontent-%COMP%]{display:block}.socialsWrapper[_ngcontent-%COMP%]{background:#fff;margin:10px auto;padding:15px;-webkit-box-shadow:0 0 4px 0 #a1a1a1;box-shadow:0 0 4px 0 #a1a1a1}.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]{margin:0 auto}.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:32px}@media only screen and (max-width:767px){.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:23px}}@media only screen and (min-width:1280px){.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:41px}}.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f43939;font-size:48px}@media only screen and (max-width:767px){.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:32px}}@media only screen and (min-width:768px) and (max-width:1023px){.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:25px}}.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#f43939}.socialsWrapper[_ngcontent-%COMP%]   ul.socials[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}@media only screen and (max-width:767px){.news-socials-wrapper[_ngcontent-%COMP%]{display:block;float:none;width:100%;margin:0 auto}.socialsWrapper[_ngcontent-%COMP%]{max-width:300px;padding:15px 15px 12px;-webkit-box-sizing:border-box;box-sizing:border-box}}.homepage.featuredVideo[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:56.8%;float:left}@media only screen and (max-width:767px){.homepage.featuredVideo[_ngcontent-%COMP%]{width:100%;float:none}}.homepage.featuredVideo[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding:0;width:auto}.homepage.featuredVideo[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]   .homepage-featuredVideo.video-block[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{width:100%;padding:0;margin:0}.homepage.featuredVideo[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]   .video__container[_ngcontent-%COMP%]{width:100%}.homepage__title.videos[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.homepage__title.videos[_ngcontent-%COMP%]{padding:20px 0 0}}.homepage__title.videos[_ngcontent-%COMP%]{color:#030303;font-family:Roboto}.homepage.news.ads[_ngcontent-%COMP%]{background-color:#fff;margin:0}@media only screen and (min-width:768px){.homepage.news.ads[_ngcontent-%COMP%]{min-height:456px}}@media only screen and (max-width:767px){.homepage.news.ads[_ngcontent-%COMP%]{width:auto;margin:0 auto;padding-bottom:0}}',
    ];
  },
  lMAi: function (n, l, e) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var t = e("3j3K"),
      i = e("sOSm"),
      o = e("NoMW"),
      u = e("2Je8"),
      a = e("NVOs"),
      r = e("Fzro"),
      d = e("5oXY"),
      s = e("Dkvd"),
      c = e("vumo"),
      p = e("fAE3"),
      g = e("ah84");
    e.d(l, "HomeModuleNgFactory", function () {
      return m;
    });
    var m = t["ɵcmf"](i.a, [], function (n) {
      return t["ɵmod"]([
        t["ɵmpd"](
          512,
          t.ComponentFactoryResolver,
          t["ɵCodegenComponentFactoryResolver"],
          [[8, [o.a]], [3, t.ComponentFactoryResolver], t.NgModuleRef]
        ),
        t["ɵmpd"](4608, u.NgLocalization, u.NgLocaleLocalization, [
          t.LOCALE_ID,
        ]),
        t["ɵmpd"](4608, a.a, a.a, []),
        t["ɵmpd"](4608, r.a, r.a, []),
        t["ɵmpd"](4608, r.b, r.c, []),
        t["ɵmpd"](5120, r.d, r.e, []),
        t["ɵmpd"](4608, r.f, r.f, [r.a, r.b, r.d]),
        t["ɵmpd"](4608, r.g, r.h, []),
        t["ɵmpd"](5120, r.i, r.j, [r.f, r.g]),
        t["ɵmpd"](4608, r.k, r.k, []),
        t["ɵmpd"](4608, r.l, r.m, [r.k, r.b]),
        t["ɵmpd"](5120, r.n, r.o, [r.l, r.g]),
        t["ɵmpd"](512, u.CommonModule, u.CommonModule, []),
        t["ɵmpd"](512, a.b, a.b, []),
        t["ɵmpd"](512, a.c, a.c, []),
        t["ɵmpd"](512, r.p, r.p, []),
        t["ɵmpd"](512, r.q, r.q, []),
        t["ɵmpd"](512, d.RouterModule, d.RouterModule, [
          [2, d["ɵa"]],
          [2, d.Router],
        ]),
        t["ɵmpd"](512, s.c, s.c, [[2, s.a]]),
        t["ɵmpd"](512, c.a, c.a, []),
        t["ɵmpd"](512, p.a, p.a, []),
        t["ɵmpd"](512, i.a, i.a, []),
        t["ɵmpd"](
          1024,
          d.ROUTES,
          function () {
            return [
              [{ path: "", component: g.a, data: { breadcrumb: "Home page" } }],
            ];
          },
          []
        ),
      ]);
    });
  },
  lxU8: function (n, l, e) {
    "use strict";
    e.d(l, "a", function () {
      return t;
    });
    var t = [
      '.news-block.home-page[_ngcontent-%COMP%]{font-size:0}.news-block.news-list[_ngcontent-%COMP%]{position:relative}ul.news[_ngcontent-%COMP%]   li.row[_ngcontent-%COMP%]{min-height:0}@media only screen and (max-width:767px){ul.news[_ngcontent-%COMP%]   li.row[_ngcontent-%COMP%]{margin:0 0 15px}}.thumbnail[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;font-size:0;position:relative}.thumbnail[_ngcontent-%COMP%]:empty{height:0;width:100%;max-height:1px}.thumbnail[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:hsla(0,0%,100%,.5);opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.thumbnail[_ngcontent-%COMP%]:hover:after{opacity:1}.footer[_ngcontent-%COMP%]{overflow:hidden;position:absolute;bottom:0;width:100%;left:0;padding:0 0 20px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer.news-list[_ngcontent-%COMP%]{padding:0 0 15px}.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-bottom:30px;padding-top:0}.button[_ngcontent-%COMP%]{background-color:#0d0d0d;display:inline-block;border-radius:0;text-transform:uppercase;padding:13px 57px;border:1px solid #0d0d0d;line-height:1;font-size:19px;cursor:pointer;-webkit-transition:all 1s ease 0s;transition:all 1s ease 0s;font-family:Roboto;font-weight:900;color:#fff;border:1px solid #f43939;background:#f43939}@media only only screen and (max-width:767px){.button[_ngcontent-%COMP%]{padding:12px 62px}}.button[_ngcontent-%COMP%]:hover{background-color:#f43939;border:1px solid #f43939;color:#fff;border-color:#f43939;background:#f43939}.readMore[_ngcontent-%COMP%]{cursor:pointer;text-transform:uppercase;font-size:17px}.readMore.home-page[_ngcontent-%COMP%]{color:#807c9c}.readMore.news-list[_ngcontent-%COMP%]{color:#359be9;font-weight:400}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px;padding-left:40px}@media only screen and (min-width:768px){carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{display:block;height:auto;overflow:hidden;width:100%;position:relative;top:10px}}.date-wrapper[_ngcontent-%COMP%]{width:100%;padding:20px 0 16px}@media only screen and (min-width:480px) and (max-width:767px){.date-wrapper[_ngcontent-%COMP%]{position:inherit}}@media only screen and (min-width:768px){.date-wrapper[_ngcontent-%COMP%]{padding:32px 0 11px;position:absolute;bottom:0;width:calc(100% - 10px)}}@media only screen and (max-width:1023px){.date-wrapper[_ngcontent-%COMP%]{padding:0 0 10px}}@media only screen and (max-width:767px){.date-wrapper[_ngcontent-%COMP%]{padding:10px 0 0}}.created[_ngcontent-%COMP%]{color:#0d0d0d;display:inline-block;vertical-align:top;font-size:10px;font-weight:500;margin-top:0;padding:10px 0 10px 24px;text-transform:uppercase;letter-spacing:.5px;cursor:pointer}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{margin-top:0;font-size:12px}}@media only screen and (min-width:768px) and (max-width:1023px){.created[_ngcontent-%COMP%]{letter-spacing:normal}}@media only screen and (max-width:767px){ul.home-page.rows.news[_ngcontent-%COMP%]{margin:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}}.row[_ngcontent-%COMP%]{padding:0}@media only screen and (max-width:767px){.row[_ngcontent-%COMP%]{padding:0;margin-bottom:0;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}.row.news-list[_ngcontent-%COMP%]{padding-bottom:15px}.row__item[_ngcontent-%COMP%]{padding:0;position:relative}.row__item.exclusive-list[_ngcontent-%COMP%]{padding:0}.row__item.home-page[_ngcontent-%COMP%]{background:#fff;-webkit-box-shadow:0 1px 4px 0 #a1a1a1;box-shadow:0 1px 4px 0 #a1a1a1;margin:0}@media only screen and (min-width:768px){.row__item.home-page[_ngcontent-%COMP%]{margin:0 10px 20px}}@media only screen and (min-width:1024px){.row__item.home-page[_ngcontent-%COMP%]{margin:0 20px 20px}}@media only screen and (max-width:767px){.row__item[_ngcontent-%COMP%]{padding:0}}.row__body[_ngcontent-%COMP%]{font-weight:400;position:relative}.row__body.home-page[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-right:20px;padding-left:20px;min-height:100px;text-align:left}@media only screen and (max-width:1023px){.row__body.home-page[_ngcontent-%COMP%]{padding-bottom:20px}}@media only screen and (min-width:768px) and (max-width:1023px){.row__body.home-page[_ngcontent-%COMP%]{min-height:165px;padding-right:10px;padding-left:10px}}@media only screen and (max-width:767px){.row__body.home-page[_ngcontent-%COMP%]{min-height:0;padding-bottom:20px}}.row__body__title[_ngcontent-%COMP%]{color:#000;cursor:pointer;font-size:16px;margin:8px 0 0;padding:0;text-align:left}.row__body__title[_ngcontent-%COMP%]:hover{color:#fff}.row__body__title.home-page[_ngcontent-%COMP%]{font-size:16px;line-height:1.4;min-height:14px;text-transform:uppercase;font-weight:700;font-family:Roboto;color:#0d0d0d}.row__body__news-body[_ngcontent-%COMP%]{color:#000;display:inline-block;vertical-align:top;font-size:12px;font-weight:500;margin-top:0;padding:10px 0;text-transform:uppercase;letter-spacing:.5px}.title[_ngcontent-%COMP%]{padding:0 0 50px;text-align:left;font-weight:700}h2.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{color:#f43939}h2.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]:hover{color:#fff}@media only screen and (min-width:768px){.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{margin:0;min-height:597px}.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .home-page.row__body.body[_ngcontent-%COMP%]{position:static}}.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid transparent}.rows[_ngcontent-%COMP%]{list-style-type:none;padding:0;-webkit-transition:opacity .3s;transition:opacity .3s}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid transparent}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .home-page.row__body.body[_ngcontent-%COMP%]{position:static}.rows.onScreen[_ngcontent-%COMP%]{opacity:1}.rows.fade[_ngcontent-%COMP%]{opacity:0}@media only screen and (min-width:768px){.rows.fade[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.news-body[_ngcontent-%COMP%]     a{color:#359be9;font-weight:400;text-decoration:underline}.news-body[_ngcontent-%COMP%]     a:hover{text-decoration:none;color:#74c8e9}.pager[_ngcontent-%COMP%]{text-align:center;margin:35px 0}.pager__loader[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.pager__loader[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.pager__links[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]{list-style-type:none;display:inline-block;font-size:18px;cursor:pointer;font-weight:700;outline:none;width:25px}.pager__links.active[_ngcontent-%COMP%], .pager__links[_ngcontent-%COMP%]:hover, .pager__navigator.active[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]:hover{color:#359be9}.pager__navigator[_ngcontent-%COMP%]{color:#359be9;cursor:pointer;vertical-align:top}.pager__navigator.disabled[_ngcontent-%COMP%]{color:#888;cursor:default}.pager__navigator_a[_ngcontent-%COMP%]{color:inherit;cursor:inherit}.heroCarouselBlock1.row__item[_ngcontent-%COMP%]{padding:0;margin:0;background:none;font-size:0;overflow:hidden}.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]{position:relative;max-height:500px;padding-bottom:37.15%;height:0}.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:url("/sites/g/files/g2000007366/files/Banner_overlay.png") no-repeat scroll 0 bottom transparent}.heroCarouselBlock1.row__thumbnail.mobile[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]{padding-bottom:56.25%}.heroCarouselBlock1.row__thumbnail.desktop[_ngcontent-%COMP%]{display:none}.heroCarouselBlock1.row__thumbnail.mobile[_ngcontent-%COMP%]{display:block;padding-bottom:51.15%}}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]{position:absolute;bottom:0;text-align:center}}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body.body[_ngcontent-%COMP%]{padding-right:0;width:100%}}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body.body[_ngcontent-%COMP%]{padding:15px 0 0 15px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}}.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:36px;max-width:60%;width:100%;margin-top:0;line-height:1;font-weight:900;text-align:center}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}}@media only screen and (min-width:1024px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{max-width:800px}}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:5vw;position:static;max-width:100%;line-height:1;top:auto;text-align:left}}@media only screen and (min-width:768px) and (max-width:1023px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:36px}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{color:#fff;margin-top:0;padding:0;bottom:0;font-size:14px}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:3.37vw}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;font-weight:700;color:#f43939;margin-left:15px;cursor:pointer}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:3.37vw}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover{color:#fff}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:5px 0 11px}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:11px 0}}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{font-size:0;cursor:pointer}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:2px 16px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:236px}}@media only screen and (min-width:1024px) and (max-width:1200px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:201px}}@media only screen and (min-width:1201px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:190px}}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;width:100%;display:block;height:auto;overflow:hidden;margin-bottom:13px;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;-webkit-box-shadow:0 0 4px 0 #a1a1a1;box-shadow:0 0 4px 0 #a1a1a1}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0;position:static}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{font-size:0;width:50%;float:left;position:relative;max-height:120px;cursor:pointer}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:52%}}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:34.6%}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{float:right;width:50%;padding-left:2%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:10px}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{width:48%}}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{width:65.3%;padding-bottom:18px}}@media only screen and (max-width:767px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%]{display:none}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:12px;color:#000;padding-bottom:0}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover{color:#f43939}@media only screen and (min-width:768px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-bottom:8px}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:10px}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:12px}}@media only screen and (max-width:767px){.featuredNews[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{background:url(/sites/g/files/g2000007366/files/dark_BG.jpg) repeat scroll 0 0 transparent}}.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{background:url("/sites/g/files/g2000007366/files/2017-10/newsBg.png");background-repeat:repeat;position:absolute;min-width:653px;bottom:0}}@media only screen and (min-width:768px) and (max-width:1023px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{min-height:90px}}@media only screen and (min-width:1024px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{min-height:100px}}.row__body__category[_ngcontent-%COMP%]{color:#fff;font-size:13px;position:absolute;top:-45px;left:0;padding:8px 20px;background-color:#f43939}.block.news-block.shimmer[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.animated-background[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:-webkit-gradient(linear,left top,right top,color-stop(8%,#eee),color-stop(18%,#ddd),color-stop(33%,#eee));background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:320px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:20px}.block.news-block.shimmer.isMobile[_ngcontent-%COMP%]{display:block}}.innerWrapperAd[_ngcontent-%COMP%]{width:100%}.innerWrapperAd.home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]{background:#a2876a}a.home-page.row__body__created.created[_ngcontent-%COMP%]{float:none;padding:10px 0 10px 40px;color:#f43939;cursor:pointer}@media only screen and (min-width:768px) and (max-width:1023px){a.home-page.row__body__created.created[_ngcontent-%COMP%]{padding:10px}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){a.home-page.row__body__created.created[_ngcontent-%COMP%]{padding:10px;width:30%}}a.row__body__created.created[_ngcontent-%COMP%]{color:#f43d3d}@media only screen and (max-width:767px){a.news-list.row__body__created.created[_ngcontent-%COMP%]{float:right;padding-right:10px}}li.home-page__row[_ngcontent-%COMP%]   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withhover[_ngcontent-%COMP%], li.home-page__row[_ngcontent-%COMP%]:hover   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withouthover[_ngcontent-%COMP%]{display:none}li.home-page__row[_ngcontent-%COMP%]:hover   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withhover[_ngcontent-%COMP%]{display:block}',
    ];
  },
  "rTO+": function (n, l, e) {
    "use strict";
    function t(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.parent.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            s["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function i(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            28,
            "li",
            [["class", "col grid"]],
            [
              [4, "width", null],
              [8, "className", 0],
              [2, "clone", null],
            ],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [["class", "item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(), s["ɵted"](null, ["\n                   "])),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            11,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, t)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\n                       "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            5,
            "div",
            [["class", "date_link"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                            "])),
          (n()(), s["ɵted"](null, ["\n                            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.gotoDetail(n.context.$implicit) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["Read More"])),
          (n()(), s["ɵted"](null, ["\n                        "])),
          (n()(), s["ɵted"](null, ["\n                    "])),
          (n()(), s["ɵted"](null, ["                   \n                "])),
          (n()(), s["ɵted"](null, [" \n                "])),
          (n()(), s["ɵted"](null, ["          \n            "])),
          (n()(), s["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(l, 16, 0, l.context.$implicit.title);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            e.elementWidth,
            s["ɵinlineInterpolate"](1, "items item-no-", l.context.index, ""),
            l.context.$implicit.clone
          ),
            n(
              l,
              9,
              0,
              s["ɵinlineInterpolate"](
                1,
                "",
                e.customClass,
                " row__thumbnail desktop"
              ),
              l.context.$implicit.field_blog_home_thumbnail
            ),
            n(l, 11, 0, s["ɵinlineInterpolate"](1, "", e.customClass, " bg")),
            n(
              l,
              13,
              0,
              s["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            ),
            n(
              l,
              21,
              0,
              s["ɵinlineInterpolate"](1, "", e.customClass, " read_more")
            );
        }
      );
    }
    function o(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            7,
            "ul",
            [["class", "item-list carousel"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "carousel-stage"]],
            [
              [4, "width", null],
              [4, "transform", null],
              [4, "transition", null],
            ],
            [
              [null, "swipeleft"],
              [null, "swiperight"],
            ],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("swipeleft" === l) {
                t = !1 !== i.swipe(e.type) && t;
              }
              if ("swiperight" === l) {
                t = !1 !== i.swipe(e.type) && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, i)),
          s["ɵdid"](
            802816,
            null,
            0,
            c.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 5, 0, l.component.duplicate);
        },
        function (n, l) {
          var e = l.component;
          n(l, 2, 0, e.carouselWidth, e.transformNode, e.transitionValue);
        }
      );
    }
    function u(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "carousel-dot"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.dotItem(n.context.index) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        null
      );
    }
    function a(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "carousel viewport"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, o)),
          s["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "carousel-controls"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            5,
            "div",
            [["class", "carousel-nav"]],
            [[4, "display", null]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "carousel-prev"]],
            [[4, "display", null]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.previousItem() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "carousel-next"]],
            [[4, "display", null]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.nextItem() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "carousel-dots"]],
            [[4, "display", null]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\t\t\t\t\n        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, u)),
          s["ɵdid"](
            802816,
            null,
            0,
            c.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 3, 0, e.createCarousel), n(l, 17, 0, e.dotCounts);
        },
        function (n, l) {
          var e = l.component;
          n(l, 7, 0, e.showNav),
            n(l, 9, 0, e.PreviousNav),
            n(l, 11, 0, e.NextNav),
            n(l, 14, 0, e.showDots);
        }
      );
    }
    function r(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "news-carousel",
            [],
            null,
            [["window", "resize"]],
            function (n, l, e) {
              var t = !0;
              if ("window:resize" === l) {
                t = !1 !== s["ɵnov"](n, 1).onResize(e) && t;
              }
              return t;
            },
            a,
            _
          )),
          s["ɵdid"](
            1687552,
            null,
            0,
            p.a,
            [s.ElementRef, g.a, m.Router, f.Title],
            null,
            null
          ),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var d = e("2BTR"),
      s = e("3j3K"),
      c = e("2Je8"),
      p = e("BK5+"),
      g = e("fa0J"),
      m = e("5oXY"),
      f = e("Qbdm");
    e.d(l, "b", function () {
      return _;
    }),
      (l.a = a);
    var h = [d.a],
      _ = s["ɵcrt"]({ encapsulation: 0, styles: h, data: {} });
    s["ɵccf"](
      "news-carousel",
      p.a,
      r,
      { initCount: "initCount", blogs: "blogs", blogslength: "blogslength" },
      {},
      []
    );
  },
  sOSm: function (n, l, e) {
    "use strict";
    var t = e("ah84"),
      i = e("Qbdm");
    e.d(l, "a", function () {
      return u;
    });
    var o =
        (this && this.__extends) ||
        (function () {
          var n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, l) {
                n.__proto__ = l;
              }) ||
            function (n, l) {
              for (var e in l) l.hasOwnProperty(e) && (n[e] = l[e]);
            };
          return function (l, e) {
            function t() {
              this.constructor = l;
            }
            n(l, e),
              (l.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          };
        })(),
      u =
        ((function (n) {
          function l() {
            var l = (null !== n && n.apply(this, arguments)) || this;
            return (
              (l.overrides = {
                swipe: { threshold: 0, direction: 6 },
                pinch: { enable: !1 },
                rotate: { enable: !1 },
                pan: { threshold: 5, direction: 6 },
              }),
              l
            );
          }
          o(l, n);
        })(i.HammerGestureConfig),
        t.a,
        (function () {
          function n() {}
          return n;
        })());
  },
  uhFY: function (n, l, e) {
    "use strict";
    var t = e("3j3K"),
      i = e("+rAa"),
      o = e("irhF"),
      u = e("5oXY"),
      a = e("Qbdm");
    e.d(l, "a", function () {
      return r;
    });
    var r = (function () {
      function n(n, l, e, t, i) {
        (this._videoService = l),
          (this.route = e),
          (this.router = t),
          (this.sanitizer = i),
          (this.node = null),
          (this.listYoutubeThumb = []),
          (this.frontpage = !1),
          (this.minimal = !1),
          (this.nowPlaying = !1),
          (this.switchCarouselTemplate = 0),
          (this.tag = ""),
          (this.moreVideos = 0),
          (this.iCount = 0),
          (this.node = n);
      }
      return (
        (n.prototype.ngOnInit = function () {
          var n = this;
          this._videoService.getVideo(this.id, this.frontpage).subscribe(
            function (l) {
              (n.video = l[0]), n.youtubeVideos(1);
            },
            function (n) {
              return i.a.doError(n);
            },
            function () {
              return i.a.doLog("video home get video - done");
            }
          ),
            this.getVideos(),
            this.getHomeFeaturedVideos();
        }),
        (n.prototype.getVideos = function () {
          var n = this;
          return (
            (this.selectedVideo = void 0),
            (this.videos = []),
            this._videoService.getVideos(this.tag, this.category).subscribe(
              function (l) {
                n.videos = l;
              },
              function (n) {
                return i.a.doError(n);
              },
              function () {
                n.youtubeVideos(2),
                  i.a.doLog("video home block get videos - done");
              }
            ),
            this.videos
          );
        }),
        (n.prototype.getHomeFeaturedVideos = function () {
          var n = this;
          return (
            (this.selectedVideo = void 0),
            this._videoService
              .getHomeFeaturedVideos(this.id, this.frontpage)
              .subscribe(
                function (l) {
                  n.featuredvideo = l[0];
                },
                function (n) {
                  return i.a.doError(n);
                },
                function () {
                  n.youtubeFeaturedVideos(),
                    i.a.doLog(
                      "video home block get home featured videos - done"
                    );
                }
              ),
            this.featuredvideo
          );
        }),
        (n.prototype.youtubeVideos = function (n) {
          if (
            (1 === n &&
              ((this.youtube_video_id = this.video.field_music
                .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
                .pop()),
              (this.youtubeThumb =
                "https://img.youtube.com/vi/" +
                this.youtube_video_id +
                "/maxresdefault.jpg")),
            2 === n)
          )
            for (var l = 0; l < 2; l++)
              (this.youtube_video_id = this.videos[l].field_music
                .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
                .pop()),
                (this.listYoutubeThumb[l] =
                  "https://img.youtube.com/vi/" +
                  this.youtube_video_id +
                  "/maxresdefault.jpg");
        }),
        (n.prototype.youtubeFeaturedVideos = function () {
          (this.youtube_featured_video_id = this.featuredvideo.field_music
            .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
            .pop()),
            (this.featuredyoutubeThumb =
              "https://img.youtube.com/vi/" +
              this.youtube_featured_video_id +
              "/maxresdefault.jpg");
          var n = document.createElement("div");
          (n.innerHTML = this.featuredvideo.title.toString()),
            (this.safeTitle = this.sanitizer.bypassSecurityTrustHtml(
              n.innerText.trim()
            ));
        }),
        (n.prototype.videoThumbnail = function () {
          (this.videoPlayer = "playing"),
            (this.youtube_video_id = this.videos[0].field_music
              .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
              .pop()),
            (this.videos[0].field_music =
              '<div><iframe width="640" height="360" src = "https://www.youtube.com/embed/' +
              this.youtube_video_id +
              '?autoplay=1&controls=1" frameborder="0" allowfullscreen></iframe></div>');
          var n = document.createElement("div");
          (n.innerText = this.videos[0].field_music.toString()),
            (this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
              n.innerText.trim()
            ));
        }),
        (n.prototype.videoFeaturedThumbnail = function () {
          (this.videoPlayer = "playing"),
            (this.featuredvideo.field_music =
              '<div><iframe width="640" height="360" src = "https://www.youtube.com/embed/' +
              this.youtube_featured_video_id +
              '?autoplay=1&controls=1" frameborder="0" allowfullscreen></iframe></div>');
          var n = document.createElement("div");
          (n.innerText = this.featuredvideo.field_music.toString()),
            (this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
              n.innerText.trim()
            ));
        }),
        (n.prototype.videoTitle = function (n, l) {
          (this.nowPlaying = !0),
            (this.videoPlayer = "playing"),
            (this.selectedIndex = l),
            (this.youtube_video_id = n.field_music
              .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
              .pop()),
            (n.field_music =
              '<div><iframe width="640" height="360" src = "https://www.youtube.com/embed/' +
              this.youtube_video_id +
              '?autoplay=1&controls=1" frameborder="0" allowfullscreen></iframe></div>');
          var e = document.createElement("div");
          (e.innerText = n.field_music.toString()),
            (this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
              e.innerText.trim()
            ));
        }),
        (n.prototype.videofeaturedTitle = function (n) {
          (this.videoPlayer = "playing"),
            (this.youtube_featured_video_id = n.field_music
              .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
              .pop()),
            (n.field_music =
              '<div><iframe width="640" height="360" src = "https://www.youtube.com/embed/' +
              this.youtube_featured_video_id +
              '?autoplay=1&controls=1" frameborder="0" allowfullscreen></iframe></div>');
          var l = document.createElement("div");
          (l.innerText = n.field_music.toString()),
            (this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
              l.innerText.trim()
            ));
        }),
        (n.prototype.updateVideoContent = function (n) {}),
        (n.ctorParameters = function () {
          return [
            { type: t.ElementRef },
            { type: o.a },
            { type: u.ActivatedRoute },
            { type: u.Router },
            { type: a.DomSanitizer },
          ];
        }),
        n
      );
    })();
    window.onload = function () {
      setTimeout(function () {
        var n = document.createElement("script");
        (n.src = "https://apis.google.com/js/platform.js"),
          (n.type = "text/javascript"),
          (n.async = !0),
          (n.charset = "utf-8"),
          document.getElementsByTagName("head")[0].appendChild(n);
      }, 0);
    };
  },
  xqWO: function (n, l, e) {
    "use strict";
    function t(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            b["ɵinlineInterpolate"](1, "", e.videoPlayer, " video__image"),
            l.parent.context.$implicit.field_video_thumbnail
          );
        }
      );
    }
    function i(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            b["ɵinlineInterpolate"](1, "", e.videoPlayer, " video__image"),
            l.parent.context.$implicit.thumbnail
          );
        }
      );
    }
    function o(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            16,
            "div",
            [["class", "video__container"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "media-thumbnail-frame"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, t)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, i)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [["class", "video__preplay preplay"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.videoThumbnail() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "video__play play"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "row__body__title"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        function (n, l) {
          n(l, 5, 0, l.context.$implicit.field_video_thumbnail),
            n(l, 8, 0, !l.context.$implicit.field_video_thumbnail);
        },
        function (n, l) {
          n(l, 2, 0, l.component.safeHtml),
            n(l, 15, 0, l.context.$implicit.title);
        }
      );
    }
    function u(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "video__image"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t =
                  !1 !==
                    i.videoTitle(
                      n.parent.context.$implicit,
                      n.parent.context.index
                    ) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.field_video_thumbnail);
        }
      );
    }
    function a(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "video__image"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t =
                  !1 !==
                    i.videoTitle(
                      n.parent.context.$implicit,
                      n.parent.context.index
                    ) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.thumbnail);
        }
      );
    }
    function r(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "row__video__category"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.field_video_category);
        }
      );
    }
    function d(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "h3",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t =
                  !1 !==
                    i.videoTitle(
                      n.parent.context.$implicit,
                      n.parent.context.index
                    ) && t;
              }
              return t;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            b["ɵinlineInterpolate"](1, "", e.customClass, " row__body__title")
          );
        }
      );
    }
    function s(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            26,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "listImage"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, u)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, a)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, r)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, d)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "play icon-play2"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            3,
            "span",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          b["ɵdid"](
            278528,
            null,
            0,
            C.NgClass,
            [b.IterableDiffers, b.KeyValueDiffers, b.ElementRef, b.Renderer],
            { ngClass: [0, "ngClass"] },
            null
          ),
          b["ɵpod"]({ active: 0, nowPlaying: 1 }),
          (n()(), b["ɵted"](null, ["Now Playing"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 5, 0, l.context.$implicit.field_video_thumbnail),
            n(l, 8, 0, !l.context.$implicit.field_video_thumbnail),
            n(l, 14, 0, l.context.$implicit.field_video_category),
            n(l, 17, 0, l.context.$implicit.title),
            n(l, 22, 0, n(l, 23, 0, e.selectedIndex === l.context.index, !0));
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            b["ɵinlineInterpolate"](
              2,
              "",
              e.customClass,
              "__row ",
              e.videoPlayer,
              ""
            )
          ),
            n(
              l,
              11,
              0,
              b["ɵinlineInterpolate"](1, "", e.customClass, " row__body body")
            );
        }
      );
    }
    function c(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            15,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 2, null, o)),
          b["ɵdid"](
            802816,
            null,
            0,
            C.NgForOf,
            [b.ViewContainerRef, b.TemplateRef, b.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          b["ɵpid"](0, C.SlicePipe, []),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "video__list__container"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](0, null, null, 5, "ul", [], null, null, null, null, null)),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 2, null, s)),
          b["ɵdid"](
            802816,
            null,
            0,
            C.NgForOf,
            [b.ViewContainerRef, b.TemplateRef, b.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          b["ɵpid"](0, C.SlicePipe, []),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
        ],
        function (n, l) {
          var e = l.component;
          n(
            l,
            3,
            0,
            b["ɵunv"](l, 3, 0, b["ɵnov"](l, 4).transform(e.videos, 0, 1))
          ),
            n(
              l,
              11,
              0,
              b["ɵunv"](l, 11, 0, b["ɵnov"](l, 12).transform(e.videos, 1, 3))
            );
        },
        null
      );
    }
    function p(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            b["ɵinlineInterpolate"](1, "", e.videoPlayer, " video__image"),
            e.featuredvideo.field_video_thumbnail
          );
        }
      );
    }
    function g(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [],
            [
              [8, "className", 0],
              [8, "innerHTML", 1],
            ],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var e = l.component;
          n(
            l,
            0,
            0,
            b["ɵinlineInterpolate"](1, "", e.videoPlayer, " video__image"),
            e.featuredvideo.thumbnail
          );
        }
      );
    }
    function m(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "video__container"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "media-thumbnail-frame"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, p)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, g)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "overlay"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            7,
            "a",
            [["class", "video__preplay preplay"]],
            null,
            [[null, "click"]],
            function (n, l, e) {
              var t = !0,
                i = n.component;
              if ("click" === l) {
                t = !1 !== i.videoFeaturedThumbnail() && t;
              }
              return t;
            },
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "title"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "category"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "video__play play"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        function (n, l) {
          var e = l.component;
          n(l, 5, 0, e.featuredvideo.field_video_thumbnail),
            n(l, 8, 0, !e.featuredvideo.field_video_thumbnail);
        },
        function (n, l) {
          var e = l.component;
          n(l, 2, 0, e.safeHtml),
            n(l, 14, 0, e.safeTitle),
            n(l, 16, 0, e.featuredvideo.field_video_category);
        }
      );
    }
    function f(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](0, null, null, 4, "div", [], null, null, null, null, null)),
          (n()(), b["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, m)),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgIf,
            [b.ViewContainerRef, b.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
        ],
        function (n, l) {
          n(l, 3, 0, l.component.featuredvideo);
        },
        null
      );
    }
    function h(n) {
      return b["ɵvid"](
        0,
        [
          (n()(), b["ɵted"](null, ["\n"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            16,
            "div",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            12,
            "div",
            [["class", "block viewport"]],
            null,
            null,
            null,
            null,
            null
          )),
          b["ɵdid"](
            16384,
            null,
            0,
            C.NgSwitch,
            [],
            { ngSwitch: [0, "ngSwitch"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          b["ɵncd"](null, 0),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, c)),
          b["ɵdid"](
            278528,
            null,
            0,
            C.NgSwitchCase,
            [b.ViewContainerRef, b.TemplateRef, C.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          (n()(), b["ɵand"](16777216, null, null, 1, null, f)),
          b["ɵdid"](
            278528,
            null,
            0,
            C.NgSwitchCase,
            [b.ViewContainerRef, b.TemplateRef, C.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), b["ɵted"](null, ["\n\t\t\t"])),
          b["ɵncd"](null, 1),
          (n()(), b["ɵted"](null, ["\n\t\t"])),
          (n()(), b["ɵted"](null, ["\n\t"])),
          (n()(), b["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 7, 0, l.component.switchCarouselTemplate);
          n(l, 12, 0, 2);
          n(l, 15, 0, 1);
        },
        function (n, l) {
          var e = l.component;
          n(
            l,
            1,
            0,
            b["ɵinlineInterpolate"](1, "", e.customClass, " video-block")
          ),
            n(l, 3, 0, b["ɵinlineInterpolate"](1, "video ", e.videoPlayer, ""));
        }
      );
    }
    function _(n) {
      return b["ɵvid"](
        0,
        [
          (n()(),
          b["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-home-block",
            [],
            null,
            null,
            null,
            h,
            O
          )),
          b["ɵdid"](
            114688,
            null,
            0,
            v.a,
            [b.ElementRef, x.a, y.ActivatedRoute, y.Router, P.DomSanitizer],
            null,
            null
          ),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var w = e("Qmgx"),
      b = e("3j3K"),
      C = e("2Je8"),
      v = e("uhFY"),
      x = e("irhF"),
      y = e("5oXY"),
      P = e("Qbdm");
    e.d(l, "b", function () {
      return O;
    }),
      (l.a = h);
    var M = [w.a],
      O = b["ɵcrt"]({ encapsulation: 0, styles: M, data: {} });
    b["ɵccf"](
      "app-video-home-block",
      v.a,
      _,
      {
        id: "id",
        customClass: "customClass",
        frontpage: "frontpage",
        minimal: "minimal",
        nowPlaying: "nowPlaying",
        switchCarouselTemplate: "switchCarouselTemplate",
        category: "category",
        tag: "tag",
      },
      {},
      ["[blockTop]", "[blockBottom]"]
    );
  },
});
