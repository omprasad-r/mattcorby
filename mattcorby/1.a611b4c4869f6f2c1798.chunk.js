webpackJsonp([1], {
  "09HW": function (n, l, t) {
    "use strict";
    function e(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "fs-fb"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.facebookClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n  "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "fs-tw"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.twitterClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n      "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n      \n    "])),
        ],
        null,
        null
      );
    }
    function o(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "fs-mail"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.mailtoClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(),
          c["ɵeld"](
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
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n  "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, e)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n  "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, i)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n  "])),
          (n()(), c["ɵted"](null, ["\n  "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, o)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.facebook), n(l, 6, 0, t.twitter), n(l, 10, 0, t.mailto);
        },
        function (n, l) {
          var t = l.component;
          n(l, 0, 0, c["ɵinlineInterpolate"](1, "share ", t.customClass, ""));
        }
      );
    }
    function a(n) {
      return c["ɵvid"](
        0,
        [
          (n()(), c["ɵand"](16777216, null, null, 1, null, u)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
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
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
          c["ɵdid"](4833280, null, 0, p.a, [], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var s = t("bxZi"),
      c = t("3j3K"),
      d = t("2Je8"),
      p = t("FpAZ");
    t.d(l, "b", function () {
      return m;
    }),
      (l.a = a);
    var g = [s.a],
      m = c["ɵcrt"]({ encapsulation: 0, styles: g, data: {} });
    c["ɵccf"](
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
  "182k": function (n, l, t) {
    "use strict";
    function e(n) {
      return u["ɵvid"](
        0,
        [
          (n()(), u["ɵted"](null, ["\n"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [
              ["class", ""],
              ["id", "newsDetailRouteWrapper"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n        "])),
          (n()(),
          u["ɵeld"](
            16777216,
            null,
            null,
            1,
            "router-outlet",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          u["ɵdid"](
            212992,
            [["routerOutlet", 4]],
            0,
            a.RouterOutlet,
            [
              a.ChildrenOutletContexts,
              u.ViewContainerRef,
              u.ComponentFactoryResolver,
              [8, null],
              u.ChangeDetectorRef,
            ],
            null,
            null
          ),
          (n()(), u["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 4, 0);
        },
        null
      );
    }
    function i(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](0, null, null, 1, "app-news", [], null, null, null, e, c)),
          u["ɵdid"](638976, null, 0, r.a, [], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var o = t("7KyH"),
      u = t("3j3K"),
      a = t("5oXY"),
      r = t("DTB/");
    t.d(l, "a", function () {
      return d;
    });
    var s = [o.a],
      c = u["ɵcrt"]({
        encapsulation: 0,
        styles: s,
        data: {
          animation: [
            {
              type: 7,
              name: "routerTransition",
              definitions: [
                {
                  type: 1,
                  expr: "newsDetailpage => newsLandingpage",
                  animation: [
                    {
                      type: 11,
                      selector: ":leave",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: "174px",
                        },
                        offset: null,
                      },
                      options: null,
                    },
                    {
                      type: 11,
                      selector: ":enter",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: "174px",
                        },
                        offset: null,
                      },
                      options: null,
                    },
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "app-news-detail",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateX(0%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateX(100%)" },
                                offset: null,
                              },
                              timings: "1s ease",
                            },
                          ],
                          options: null,
                        },
                        {
                          type: 11,
                          selector: "app-news-list",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateX(-100%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateX(0%)" },
                                offset: null,
                              },
                              timings: "1s ease",
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
                {
                  type: 1,
                  expr: "newsLandingpage => newsDetailpage",
                  animation: [
                    {
                      type: 11,
                      selector: ":leave",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                        },
                        offset: null,
                      },
                      options: null,
                    },
                    {
                      type: 11,
                      selector: ":enter",
                      animation: {
                        type: 6,
                        styles: {
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: "174px",
                        },
                        offset: null,
                      },
                      options: null,
                    },
                    {
                      type: 3,
                      steps: [
                        {
                          type: 11,
                          selector: "app-news-detail",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateX(100%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateX(0%)" },
                                offset: null,
                              },
                              timings: "1s ease",
                            },
                          ],
                          options: null,
                        },
                        {
                          type: 11,
                          selector: "app-news-list",
                          animation: [
                            {
                              type: 6,
                              styles: { transform: "translateX(0%)" },
                              offset: null,
                            },
                            {
                              type: 4,
                              styles: {
                                type: 6,
                                styles: { transform: "translateX(-100%)" },
                                offset: null,
                              },
                              timings: "1s ease",
                            },
                          ],
                          options: null,
                        },
                      ],
                      options: null,
                    },
                  ],
                  options: null,
                },
              ],
              options: {},
            },
          ],
        },
      }),
      d = u["ɵccf"]("app-news", r.a, i, {}, {}, []);
  },
  "2BTR": function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      '.carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:70px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;padding:0 10px;background-color:rgba(29,30,32,.86);overflow:hidden;z-index:2;background:url("/sites/g/files/g2000009001/files/leftarrow.png");background-repeat:no-repeat;background-size:contain;width:36px;height:36px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);padding:0;left:50px}@media only screen and (max-width:767px){.carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{top:45%;left:6px}}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:70px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;padding:0 10px;background-color:rgba(29,30,32,.86);overflow:hidden;z-index:2;left:auto;right:50px;background-position:-49px;background:url("/sites/g/files/g2000009001/files/rightarrow.png");background-repeat:no-repeat;background-size:contain;width:36px;height:36px;top:50%;-webkit-transform:rotate(180deg);transform:translateY(-50%) rotate(0deg);padding:0}@media only screen and (max-width:767px){.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{top:45%;right:0}}.carousel-dots[_ngcontent-%COMP%]{bottom:60px;display:inline-block;height:auto;left:64px;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:auto}@media only screen and (max-width:767px){.carousel-dots[_ngcontent-%COMP%]{left:18px;bottom:45px}}span.carousel-dot[_ngcontent-%COMP%]{background-color:#4b4b4b;border:1px solid #4b4b4b;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:9px;margin-right:0;margin-bottom:10px;width:9px;border-radius:50%;cursor:pointer}span.carousel-dot.active[_ngcontent-%COMP%]{background-color:#f43939;border-color:#f43939}span[_ngcontent-%COMP%]:last-child{margin-right:0}.carousel-stage[_ngcontent-%COMP%]{-ms-touch-action:pan-y!important;touch-action:pan-y!important}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0;background:none;font-size:0;overflow:hidden;position:relative}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{background:#000}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__thumbnail.desktop[_ngcontent-%COMP%]{max-height:500px;padding-bottom:37.15%;height:0}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__thumbnail.desktop[_ngcontent-%COMP%]{display:block;padding-bottom:37.15%;background:#000}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{position:absolute;text-align:center;width:100%;background:#000;bottom:0;min-height:40px}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{padding:15px 0 0 35px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;background:#000;width:100%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px;max-width:100%;width:88%;margin-top:0;line-height:1;font-weight:900;text-align:left;color:#fff;margin:0 auto;padding-bottom:0;display:inline-block;padding:15px 0;vertical-align:middle;padding-left:10px}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:static;font-size:5vw;text-align:left;padding:0}}@media only screen and (min-width:768px) and (max-width:1023px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:70%}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:80%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:15px 0;text-align:right;display:inline-block;width:11%;vertical-align:middle}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:11px 0;display:block;width:50%;text-align:center}}@media only screen and (min-width:768px) and (max-width:1023px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{width:28%}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{width:15%}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{color:#fff;margin-top:0;padding:0;bottom:0;font-size:14px;display:inline-block;vertical-align:middle;text-transform:uppercase}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{font-size:3.37vw;text-align:left}}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:10px;text-transform:uppercase;font-weight:400;color:#fff;cursor:pointer;display:inline-block;vertical-align:middle;letter-spacing:2px;text-align:left}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:after{content:"";width:24px;height:15px;display:inline-block;vertical-align:middle;background-position:0 -21px;margin-left:8px;background:url("/sites/g/files/g2000009001/files/banner%20arrow.png") no-repeat}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover{color:#f43939}.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover:after{background:url("/sites/g/files/g2000009001/files/banner%20arrow.png") no-repeat;background-position:0 0}@media only screen and (max-width:767px){.carousel-stage[_ngcontent-%COMP%]   li.items[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:3.37vw}}@mediaonly screen and (max-width:767px){.thumbnail[_ngcontent-%COMP%]{margin-bottom:10px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%], .carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{width:20px;background-position:7px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{background-position:-74px}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px;padding-left:40px}}li.items[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;vertical-align:top}ul.item-list.carousel[_ngcontent-%COMP%]{display:inline-block;width:100%;overflow:visible}.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;line-height:1.1;display:inline-block;font-size:16px;letter-spacing:2px}.carousel.viewport[_ngcontent-%COMP%]{display:block;overflow:hidden}@media only screen and (max-width:767px){.carousel.viewport[_ngcontent-%COMP%]{position:relative}}.news-block__carousel[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto!important;max-width:100%}.news-block__carousel[_ngcontent-%COMP%]   h3.title[_ngcontent-%COMP%], .news-block__carousel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000!important}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding-right:40px;padding-left:40px}',
    ];
  },
  "7KyH": function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [""];
  },
  "8kas": function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = (function () {
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
  "8t25": function (n, l, t) {
    "use strict";
    var e = t("DTB/"),
      i = t("ouuY"),
      o = t("KLZk");
    t.d(l, "a", function () {
      return u;
    });
    var u =
      (e.a,
      i.a,
      o.a,
      (function () {
        function n() {}
        return n;
      })());
  },
  "BK5+": function (n, l, t) {
    "use strict";
    var e = t("3j3K"),
      i = t("Q34W"),
      o = t("+rAa"),
      u = t("fa0J"),
      a = t("5oXY"),
      r = t("Qbdm");
    t.d(l, "a", function () {
      return c;
    });
    var s =
        (this && this.__extends) ||
        (function () {
          var n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, l) {
                n.__proto__ = l;
              }) ||
            function (n, l) {
              for (var t in l) l.hasOwnProperty(t) && (n[t] = l[t]);
            };
          return function (l, t) {
            function e() {
              this.constructor = l;
            }
            n(l, t),
              (l.prototype =
                null === t
                  ? Object.create(t)
                  : ((e.prototype = t.prototype), new e()));
          };
        })(),
      c = (function (n) {
        function l(l, t, e, i) {
          var o = n.call(this) || this;
          return (
            (o._newsService = t),
            (o._router = e),
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
          s(l, n),
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
            var t = ["/news", l];
            if ((this._router.navigate(t), window.innerWidth < 767)) {
              document.getElementsByTagName("app-news-list")[0].style.top =
                "-" + (this.scrollVal - 174) + "px";
            }
            this.titleService.setTitle(
              o.a.htmlDecode(this.selectedNews.title) + " | Maniacs"
            );
          }),
          (l.ctorParameters = function () {
            return [
              { type: e.ElementRef },
              { type: u.a },
              { type: a.Router },
              { type: r.Title },
            ];
          }),
          l
        );
      })(i.a);
  },
  CJAN: function (n, l, t) {
    "use strict";
    function e(n) {
      return u["ɵvid"](
        0,
        [
          (n()(), u["ɵted"](null, ["\n"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "news-page news-landing-page"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "latest-news"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n    "])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "latest-news__layout g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n      "])),
          (n()(),
          u["ɵeld"](
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
            function (n, l, t) {
              var e = !0;
              if ("window:resize" === l) {
                e = !1 !== u["ɵnov"](n, 8).onResize(t) && e;
              }
              if ("window:scroll" === l) {
                e = !1 !== u["ɵnov"](n, 8).findScrollValue(t) && e;
              }
              return e;
            },
            a.a,
            a.b
          )),
          u["ɵdid"](
            4440064,
            null,
            0,
            r.a,
            [s.a, c.Router, d.a, c.ActivatedRoute, u.ElementRef, p.Title],
            {
              count: [0, "count"],
              cols: [1, "cols"],
              detailPath: [2, "detailPath"],
              customClass: [3, "customClass"],
              viewMore: [4, "viewMore"],
              pagers: [5, "pagers"],
              switchCarouselTemplate: [6, "switchCarouselTemplate"],
            },
            null
          ),
          (n()(), u["ɵted"](null, ["\n    "])),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(), u["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(
            l,
            8,
            0,
            5,
            "grid-2_xs-1",
            l.component.path,
            "news-list",
            !0,
            !1,
            5
          );
        },
        null
      );
    }
    function i(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-list",
            [],
            null,
            null,
            null,
            e,
            f
          )),
          u["ɵdid"](49152, null, 0, g.a, [], null, null),
        ],
        null,
        null
      );
    }
    var o = t("gJdN"),
      u = t("3j3K"),
      a = t("anls"),
      r = t("CWct"),
      s = t("fa0J"),
      c = t("5oXY"),
      d = t("ZyHc"),
      p = t("Qbdm"),
      g = t("ouuY");
    t.d(l, "a", function () {
      return h;
    });
    var m = [o.a],
      f = u["ɵcrt"]({ encapsulation: 0, styles: m, data: {} }),
      h = u["ɵccf"]("app-news-list", g.a, i, {}, {}, []);
  },
  CWct: function (n, l, t) {
    "use strict";
    var e = t("3j3K"),
      i = t("+rAa"),
      o = t("fa0J"),
      u = t("5oXY"),
      a = t("ZyHc"),
      r = t("Qbdm");
    t.d(l, "a", function () {
      return s;
    });
    var s = (function () {
      function n(n, l, t, e, i, o) {
        (this._newsService = n),
          (this._router = l),
          (this.pagerService = t),
          (this._route = e),
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
                  var l = n.news[0].field_ad_position, t = n.news[0], e = 0;
                  e < 3;
                  e++
                )
                  if (n.news[e].field_ad_position > 0) {
                    n.news.splice(l, 0, t), n.news.shift();
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
          var t = ["/news", l];
          if ((this._router.navigate(t), window.innerWidth < 767)) {
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
                function (t) {
                  (n.routePage = parseInt(l.page) || 1),
                    (n.totalNewsItems = parseInt(t[0].count)),
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
              var t = document.createElement("script");
              t.innerHTML =
                "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-1'); });";
              var e;
              setTimeout(function () {
                (e = document.getElementById("dfp-ad-slot-1")),
                  t && e.appendChild(t);
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
            { type: e.ElementRef },
            { type: r.Title },
          ];
        }),
        n
      );
    })();
  },
  "DTB/": function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = (function () {
      function n() {}
      return (
        (n.prototype.ngOnInit = function () {}),
        (n.prototype.ngOnChanges = function () {
          window.scroll(0, 0);
        }),
        (n.prototype.prepRouteState = function (n) {
          if (window.innerWidth < 767) return n.activatedRouteData.animation;
        }),
        n
      );
    })();
  },
  FpAZ: function (n, l, t) {
    "use strict";
    var e = t("kZql");
    t.d(l, "a", function () {
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
          (this.hostURL = "https://" + e.a.host + "/"),
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
  KLZk: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(
        "3j3K"
      ),
      __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("fa0J"),
      __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("+rAa"),
      __WEBPACK_IMPORTED_MODULE_3__shared_tweet_widget__ = __webpack_require__(
        "usrG"
      ),
      __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(
        "5oXY"
      ),
      __WEBPACK_IMPORTED_MODULE_5__tags_tags_service__ = __webpack_require__(
        "CH53"
      ),
      __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(
        "Qbdm"
      );
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return NewsDetailComponent;
    });
    var NewsDetailComponent = (function () {
      function NewsDetailComponent(n, l, t, e, i, o, u) {
        (this._newsService = n),
          (this._router = l),
          (this._tagsService = t),
          (this.route = e),
          (this.elementRef = o),
          (this.titleService = u),
          (this.isMobileMenu = !1),
          (this.showSideDrawer = !1),
          (this.tempId = ""),
          (this.AdDisplay = !1),
          (this.shopifyHtml = []),
          (this.shareOpen = !1),
          (this.docRef = ""),
          (this.iframes = []),
          (this.scrollEnd = 0),
          (this.shareBlockHeight = 0),
          (this.windowHeight = 0),
          (this.flySocialHeight = 0),
          (this.isFlySocialFixed = !1),
          (this.loadingDone = !1),
          (this.videoLoaded = !1),
          (this.twitEmbed = []),
          (this.currentNodeIndex = 0),
          (this.relatedArtistPosts = []),
          (this.youMayAlsoLikePosts = []),
          (this.cols = "grid-4_xs-1"),
          (this.tagsCountMax = 5),
          (this.relatedNewsShuffleCount = 10),
          (this.allTags = []),
          (this.newsRaw = []),
          (this.ngAfterViewInitCounter = 0),
          (this.paraLength = 0),
          (this.location = ""),
          (this.node = i),
          (this.tweetWidget = new __WEBPACK_IMPORTED_MODULE_3__shared_tweet_widget__.a());
      }
      return (
        (NewsDetailComponent.prototype.toggleSideDrawer = function () {
          this.showSideDrawer = !this.showSideDrawer;
        }),
        (NewsDetailComponent.prototype.ngOnInit = function () {
          var _this = this;
          (this.AdDisplay = !0),
            setTimeout(function () {
              !(function (n, l, t) {
                var e,
                  i = n.getElementsByTagName(l)[0];
                n.getElementById(t) ||
                  ((e = n.createElement(l)),
                  (e.id = t),
                  (e.src = "https://platform.twitter.com/widgets.js"),
                  i.parentNode.insertBefore(e, i));
              })(document, "script", "twitter-wjs");
            }, 3e3),
            setTimeout(function () {
              !(function (n, l, t) {
                var e,
                  i = n.getElementsByTagName(l)[0];
                n.getElementById(t) ||
                  ((e = n.createElement(l)),
                  (e.id = t),
                  (e.src = "https://platform.instagram.com/en_US/embeds.js"),
                  i.parentNode.insertBefore(e, i));
              })(document, "script", "instagram-wjs");
            }, 3e3),
            setTimeout(function () {
              var n = document.createElement("script");
              (n.src = "https://apis.google.com/js/platform.js"),
                (n.type = "text/javascript"),
                (n.async = !0),
                (n.charset = "utf-8"),
                document.getElementsByTagName("head")[0].appendChild(n);
            }, 3e3);
          var body = document.getElementsByTagName("body")[0];
          body.classList.add("content-page"),
            (this.allTags = []),
            this.node.nativeElement.clientWidth < 767 &&
              (this.isMobileMenu = !0),
            (this.flySocial = this.node.nativeElement.querySelectorAll(
              ".fly-social-block"
            )[0]),
            (this.windowHeight =
              window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight),
            this.route.params.forEach(function (params) {
              (_this.id = params.id),
                __WEBPACK_IMPORTED_MODULE_2__utils__.a.addEditLink(_this.id),
                (_this.docRef = document.referrer),
                window.scrollTo(0, 0),
                _this._newsService
                  .getNewsDetail(params.id)
                  .subscribe(function (data) {
                    0 == data.length &&
                      _this._router.navigateByUrl("404", {
                        skipLocationChange: !0,
                      });
                    var tmpNews;
                    (tmpNews = data[0]),
                      _this.setTitle(tmpNews.title.toString()),
                      tmpNews.body.toString().indexOf("platform.twitter.com") >
                        -1 &&
                        _this.externalScript(
                          "https://platform.twitter.com/widgets.js?cache"
                        ),
                      tmpNews.body
                        .toString()
                        .indexOf("platform.instagram.com") > -1 &&
                        _this.externalScript(
                          "https://platform.instagram.com/en_US/embeds.js?cache"
                        ),
                      (tmpNews.body = tmpNews.body.replace(
                        /<iframe/g,
                        '<div class="iframe-container"><iframe'
                      )),
                      (tmpNews.body = tmpNews.body.replace(
                        /<\/iframe>/g,
                        "</iframe></div>"
                      ));
                    var tmpNewsArray = tmpNews.body.split(
                        '<div class="iframe-container">'
                      ),
                      tmpNewsWrapped;
                    tmpNewsWrapped = tmpNewsArray[0];
                    for (var i = 1; i < tmpNewsArray.length; i++) {
                      var iFrameSrc = tmpNewsArray[i].match(
                        /<iframe.+?src="(.+?)".+?<\/iframe>/
                      );
                      tmpNewsWrapped =
                        iFrameSrc &&
                        iFrameSrc[1].match(
                          /(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/
                        )
                          ? tmpNewsWrapped +
                            '<div class="iframe-container responsive-video-container"><div class="subscriptionbtn"><div class="subs_Text">Subscribe&nbsp;to&nbsp;<span class="subs_label"><a href="https://www.youtube.com/user/roadrunneraustralia?sub_confirmation=1" target="_blank">Maniacs</a></span>&nbsp;on&nbsp;</div><div class="g-ytsubscribe" data-channel="roadrunneraustralia"  data-layout="default" data-count="default"></div></div>' +
                            tmpNewsArray[i]
                          : tmpNewsWrapped +
                            '<div class="iframe-container">' +
                            tmpNewsArray[i];
                    }
                    (tmpNews.body = tmpNewsWrapped),
                      (_this.news = tmpNews),
                      (_this.schemadataValue = _this.news),
                      _this.ytscript(),
                      (_this.allTags = []),
                      _this.news.field_tags &&
                        ((_this.news.tagNames = _this.news.field_tags.split(
                          ", "
                        )),
                        (_this.allTags = _this.allTags.concat(
                          _this.news.tagNames.slice(0, _this.tagsCountMax)
                        )));
                    var shopifySrc = _this.news.field_shopify_embed.toString();
                    (_this.shopifyContainer = shopifySrc),
                      shopifySrc &&
                        ((_this.shopifyContainer = _this.shopifyContainer
                          .split("<script")[0]
                          .toString()),
                        (_this.shopifyContainer = _this.shopifyContainer.replace(
                          /'/g,
                          '"'
                        )),
                        (_this.shopifyDivId = _this.shopifyContainer.match(
                          /<div[^>]+?id="([^"]+)".*/
                        )[1]),
                        (shopifySrc = shopifySrc.replace("/<![CDATA[/", "")),
                        (shopifySrc = shopifySrc.replace("/]]>/", "")),
                        (shopifySrc = shopifySrc.split("</script>")[0]),
                        (shopifySrc = shopifySrc.split("<script")[1]),
                        (shopifySrc = shopifySrc.split(">")[1]));
                    try {
                      eval(shopifySrc);
                    } catch (n) {
                      __WEBPACK_IMPORTED_MODULE_2__utils__.a.doError(
                        "An error occured with Shopify Content - " + n
                      );
                    }
                    if (
                      ((_this.relatedNews = data[0]),
                      (_this.relatedArtistPosts = []),
                      (_this.youMayAlsoLikePosts = []),
                      _this.relatedNews.field_tag_tier2)
                    ) {
                      (_this.relatedNews.tagNamesTier2 = _this.relatedNews.field_tag_tier2.split(
                        ", "
                      )),
                        (_this.allTags = _this.allTags.concat(
                          _this.relatedNews.tagNamesTier2.slice(
                            0,
                            _this.tagsCountMax
                          )
                        ));
                      for (
                        var i = 0;
                        i < _this.relatedNews.tagNamesTier2.length;
                        i++
                      )
                        _this._tagsService
                          .getRelatedTier3News(
                            _this.relatedNews.tagNamesTier2[i],
                            _this.relatedNews.nid
                          )
                          .subscribe(function (n) {
                            (_this.relatedArtistPosts = _this.relatedArtistPosts.concat(
                              n
                            )),
                              (_this.relatedArtistPosts = _this.removeDuplicates(
                                _this.relatedArtistPosts,
                                "nid"
                              )),
                              (_this.relatedArtistPosts = _this.shuffle(
                                _this.relatedArtistPosts
                              ));
                          });
                    }
                    if (_this.relatedNews.field_tags) {
                      _this.relatedNews.tagNames = _this.relatedNews.field_tags.split(
                        ", "
                      );
                      for (
                        var offset = 0, i = 0;
                        i < _this.relatedNews.tagNames.length;
                        i++
                      )
                        _this._tagsService
                          .getRelatedTier2News(
                            _this.relatedNews.tagNames[i],
                            offset,
                            _this.relatedNews.nid
                          )
                          .subscribe(function (n) {
                            (_this.youMayAlsoLikePosts = _this.youMayAlsoLikePosts.concat(
                              n
                            )),
                              (_this.youMayAlsoLikePosts = _this.removeDuplicates(
                                _this.youMayAlsoLikePosts,
                                "nid"
                              )),
                              (_this.youMayAlsoLikePosts = _this.shuffle(
                                _this.youMayAlsoLikePosts
                              ));
                          });
                    }
                  });
            }),
            (this.location = window.location.origin);
        }),
        (NewsDetailComponent.prototype.shuffle = function (n) {
          for (var l, t, e = n.length; e; )
            (t = Math.floor(Math.random() * e--)),
              (l = n[e]),
              (n[e] = n[t]),
              (n[t] = l);
          return n;
        }),
        (NewsDetailComponent.prototype.removeDuplicates = function (n, l) {
          for (var t, e = [], i = []; n.length > 0; )
            (t = n.pop()), e.indexOf(t[l]) < 0 && (e.push(t[l]), i.push(t));
          return i;
        }),
        (NewsDetailComponent.prototype.shareClick = function () {
          this.shareOpen = !this.shareOpen;
        }),
        (NewsDetailComponent.prototype.getTags = function (n) {
          n.trim();
          var l = ["/tags", n];
          this._router.navigate(l);
        }),
        (NewsDetailComponent.prototype.ngOnChanges = function () {
          (this.docRef = document.referrer), window.scrollTo(0, 0);
        }),
        (NewsDetailComponent.prototype.nextArticle = function () {
          var n = this;
          this._newsService
            .getMinifiedNewsDetail(
              "test-" + this.newsList[this.nextNodeIndex].nid
            )
            .subscribe(
              function (l) {
                return (n.nextNews = l[0]);
              },
              function (n) {
                return __WEBPACK_IMPORTED_MODULE_2__utils__.a.doError(n);
              },
              function () {
                __WEBPACK_IMPORTED_MODULE_2__utils__.a.doLog(
                  "News Next Article"
                );
              }
            );
        }),
        (NewsDetailComponent.prototype.gotoDetail = function (n) {
          var l;
          (this.selectedNews = n),
            (l = __WEBPACK_IMPORTED_MODULE_2__utils__.a.getSlug(
              this.selectedNews.path
            ));
          var t = ["/news", l];
          this._router.navigate(t),
            this.titleService.setTitle(
              __WEBPACK_IMPORTED_MODULE_2__utils__.a.htmlDecode(
                this.selectedNews.title
              ) + " | Maniacs"
            );
          var e = document.getElementById("googletagId"),
            i = window.location.pathname,
            o = i.split("/");
          null != e && e.parentNode.removeChild(e);
          var u = document.createElement("script");
          u.setAttribute("type", "text/javascript"),
            u.setAttribute("id", "googletagId"),
            document.body.className.match("user-logged-in"),
            (u.innerHTML =
              "googletag.destroySlots();var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() {  var mapslot1 = googletag.sizeMapping().addSize([0, 0], [300, 250]).addSize([997, 0], [[300, 250],[300, 600],[300, 1050]]).build();var slot1 = googletag.defineSlot('/29011727/Maniacs/news', [[300, 250],[300,600],[300, 1050]], 'dfp-ad-slot-1').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', '1');googletag.pubads().setTargeting(\"pageURL\", \"" +
              o[2] +
              '").setTargeting("pagetype", ["article"]);console.log("inside news detail new");googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs(true);googletag.pubads().setCentering(true);googletag.pubads().enableSingleRequest();googletag.enableServices();});'),
            document.getElementsByTagName("head")[0].appendChild(u);
          var a = document.createElement("script");
          a.innerHTML =
            "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-1'); });";
          try {
            document.getElementById("dfp-ad-slot-1").appendChild(a);
            document.getElementById("dfp-ad-slot-last").appendChild(a);
          } catch (n) {}
        }),
        (NewsDetailComponent.prototype.setTitle = function (n) {
          window.scroll(0, 0),
            this.titleService.setTitle(
              __WEBPACK_IMPORTED_MODULE_2__utils__.a.htmlDecode(n) +
                " | Maniacs"
            );
        }),
        (NewsDetailComponent.prototype.onResize = function (n) {
          n.target.innerWidth < 767
            ? ((this.isMobileMenu = !0),
              (this.scrollEnd = this.flySocial.offsetTop),
              (this.flySocialHeight = this.flySocial.clientHeight))
            : ((this.isMobileMenu = !1), (this.isFlySocialFixed = !1));
        }),
        (NewsDetailComponent.prototype.ngAfterViewChecked = function () {
          if (
            (this.loadAllTweetEmbed(),
            1 == this.AdDisplay && this.paraLength > 0 && (this.AdDisplay = !1),
            0 == this.ngAfterViewInitCounter)
          ) {
            var n = document.getElementById("googletagId"),
              l = window.location.pathname,
              t = l.split("/");
            null != n && n.parentNode.removeChild(n);
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript"),
              e.setAttribute("id", "googletagId"),
              document.body.className.match("user-logged-in"),
              (e.innerHTML =
                "googletag.destroySlots();var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() {  var mapslot1 = googletag.sizeMapping().addSize([0, 0], [[300, 250],[300, 600]]).addSize([997, 0], [[300, 250],[300, 600],[300, 1050]]).build();var mapslot2 = googletag.sizeMapping().addSize([0, 0], [1, 1]).addSize([997, 0], [[1, 1]]).build();var slot1 = googletag.defineSlot('/29011727/Maniacs/news', [[300, 250],[300,600],[300, 1050]], 'dfp-ad-slot-1').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', '1');var slot2 = googletag.defineSlot('/29011727/Maniacs/news', [[300, 250],[300,600],[300, 1050]], 'dfp-ad-slot-3').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', '2');var slot3 = googletag.defineSlot('/29011727/Maniacs/news', [[300, 250],[300,600],[300, 1050]], 'dfp-ad-slot-4').defineSizeMapping(mapslot1).addService(googletag.pubads()).setTargeting('pos', '3');var slot6 = googletag.defineSlot('/29011727/Maniacs/news', [320, 50], 'dfp-ad-slot-7').addService(googletag.pubads()).setTargeting('pos', '4');var slot7 = googletag.defineSlot('/29011727/Maniacs/news', [728, 90], 'dfp-ad-slot-8').addService(googletag.pubads()).setTargeting('pos', '8');googletag.pubads().setTargeting(\"pageURL\", \"" +
                t[2] +
                '").setTargeting("pagetype", ["article"]);console.log("inside news detail new");googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs(true);googletag.pubads().setCentering(true);googletag.pubads().enableSingleRequest();googletag.enableServices();});'),
              document.getElementsByTagName("head")[0].appendChild(e);
            var i = document.createElement("script");
            i.innerHTML =
              "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-1'); });";
            try {
              document.getElementById("dfp-ad-slot-1").appendChild(i);
              var o;
              o = setInterval(function () {
                var n = document.getElementById("close-ad");
                if (void 0 === n || null == n) {
                  var l = document.getElementById("dfp-ad-slot-7"),
                    t = document.getElementById("dfp-ad-slot-8"),
                    e = document.createElement("div");
                  (e.innerHTML = "X"),
                    e.classList.add("close-ad"),
                    e.setAttribute("id", "close-ad"),
                    void 0 !== l &&
                      null != l &&
                      (l.insertBefore(e, l.firstChild),
                      (e.onclick = function () {
                        l.style.display = "none";
                      })),
                    void 0 !== t &&
                      null != t &&
                      (t.insertBefore(e, t.firstChild),
                      (e.onclick = function () {
                        t.style.display = "none";
                      }));
                } else clearInterval(o);
              }, 1e3);
            } catch (n) {}
            this.ngAfterViewInitCounter++;
          }
        }),
        (NewsDetailComponent.prototype.loadAllTweetEmbed = function () {
          for (
            var n = document.querySelectorAll(
                ".news-body.full-content .media-tweet"
              ),
              l = 0;
            l < n.length;
            l++
          ) {
            var t = n[l].querySelectorAll("blockquote a"),
              e = t[0].getAttribute("href");
            (e = e.substr(e.lastIndexOf("/") + 1, e.length)),
              (n[l].id = "tweetembeded" + l),
              n[l].removeChild(n[l].firstChild),
              this.tweetWidget.createWidget(e, n[l]);
          }
        }),
        (NewsDetailComponent.prototype.onScroll = function (n) {
          this.isMobileMenu &&
            (this.loadingDone ||
              ((this.scrollEnd = this.flySocial.offsetTop),
              (this.flySocialHeight = this.flySocial.clientHeight),
              (this.isFlySocialFixed = !0)),
            (this.loadingDone = !0));
        }),
        (NewsDetailComponent.prototype.externalScript = function (n) {
          var l = document.createElement("script");
          (l.type = "text/javascript"),
            (l.src = n),
            this.elementRef.nativeElement.appendChild(l);
        }),
        (NewsDetailComponent.prototype.ngAfterViewInit = function () {}),
        (NewsDetailComponent.prototype.goBack = function (n) {
          this._router.navigateByUrl("/blog");
        }),
        (NewsDetailComponent.prototype.ngOnDestroy = function () {
          document
            .getElementsByTagName("body")[0]
            .classList.remove("content-page");
          document.getElementById("twitter-wjs").remove(),
            document.getElementById("instagram-wjs").remove();
        }),
        (NewsDetailComponent.prototype.ytscript = function () {
          setTimeout(function () {
            var n = document.createElement("script");
            (n.src = "https://apis.google.com/js/platform.js"),
              (n.type = "text/javascript"),
              (n.async = !0),
              (n.charset = "utf-8"),
              document.getElementsByTagName("head")[0].appendChild(n);
          }, 0);
        }),
        (NewsDetailComponent.prototype.facebookClick = function (n) {
          (n = this.location + n), this._newsService.facebookClick(n);
        }),
        (NewsDetailComponent.prototype.googlePlusClick = function (n) {
          (n = this.location + n), this._newsService.googlePlusClick(n);
        }),
        (NewsDetailComponent.prototype.twitterClick = function (n, l) {
          (this.textToshare = this.htmlDecode(n)),
            (l = this.location + l),
            this._newsService.twitterClick(this.textToshare, l);
        }),
        (NewsDetailComponent.prototype.htmlDecode = function (n) {
          return n
            .replace(/&amp;/g, "&")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        }),
        (NewsDetailComponent.prototype.mailtoClick = function (n) {
          (n = this.location + n), this._newsService.mailtoClick(n);
        }),
        (NewsDetailComponent.ctorParameters = function () {
          return [
            { type: __WEBPACK_IMPORTED_MODULE_1__news_service__.a },
            { type: __WEBPACK_IMPORTED_MODULE_4__angular_router__.Router },
            { type: __WEBPACK_IMPORTED_MODULE_5__tags_tags_service__.a },
            {
              type:
                __WEBPACK_IMPORTED_MODULE_4__angular_router__.ActivatedRoute,
            },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__.ElementRef },
            { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__.ElementRef },
            {
              type:
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__.Title,
            },
          ];
        }),
        NewsDetailComponent
      );
    })();
    (window.onload = function () {}),
      document.addEventListener("DOMContentLoaded", function () {});
  },
  Q34W: function (n, l, t) {
    "use strict";
    var e = t("8kas");
    t.d(l, "a", function () {
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
          (this.config = new e.a()),
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
            var t = this.node.nativeElement.querySelectorAll(
                ".carousel-dots span"
              ),
              e = 0;
            e < t.length;
            e++
          )
            t[e].classList.remove("active");
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
            for (var n = [], l = [], t = 0; t < this.itemCount; t++) {
              var e = Object.assign({}, this.duplicate[t]),
                i = Object.assign(
                  {},
                  this.duplicate[this.carouselLength - (t + 1)]
                );
              (i.clone = e.clone = !0), n.push(e), l.push(i);
            }
            for (var o = this.itemCount - 1, t = 0; t < this.itemCount; t++)
              this.duplicate.push(n[t]),
                this.duplicate.splice(t, 0, l[o - t]),
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
            for (var l = [], t = [], e = 0; e < this.itemCount; e++) {
              var i = Object.assign({}, this.duplicate[e]),
                o = Object.assign({}, this.duplicate[n - (e + 1)]);
              (o.clone = i.clone = !0), l.push(i), t.push(o);
            }
            for (var u = this.itemCount - 1, e = 0; e < this.itemCount; e++)
              this.duplicate.push(l[e]),
                this.duplicate.splice(e, 0, t[u - e]),
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
            var t = n.indexOf("rv:");
            return parseInt(n.substring(t + 3, n.indexOf(".", t)), 10);
          }
          var e = n.indexOf("Edge/");
          return e > 0 && parseInt(n.substring(e + 5, n.indexOf(".", e)), 10);
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
  Tn5L: function (n, l, t) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var e = t("3j3K"),
      i = t("8t25"),
      o = t("182k"),
      u = t("CJAN"),
      a = t("aLR+"),
      r = t("2Je8"),
      s = t("NVOs"),
      c = t("Fzro"),
      d = t("5oXY"),
      p = t("Dkvd"),
      g = t("vumo"),
      m = t("fAE3"),
      f = t("DTB/"),
      h = t("ouuY"),
      _ = t("KLZk");
    t.d(l, "NewsModuleNgFactory", function () {
      return w;
    });
    var w = e["ɵcmf"](i.a, [], function (n) {
      return e["ɵmod"]([
        e["ɵmpd"](
          512,
          e.ComponentFactoryResolver,
          e["ɵCodegenComponentFactoryResolver"],
          [[8, [o.a, u.a, a.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]
        ),
        e["ɵmpd"](4608, r.NgLocalization, r.NgLocaleLocalization, [
          e.LOCALE_ID,
        ]),
        e["ɵmpd"](4608, s.a, s.a, []),
        e["ɵmpd"](4608, c.a, c.a, []),
        e["ɵmpd"](4608, c.b, c.c, []),
        e["ɵmpd"](5120, c.d, c.e, []),
        e["ɵmpd"](4608, c.f, c.f, [c.a, c.b, c.d]),
        e["ɵmpd"](4608, c.g, c.h, []),
        e["ɵmpd"](5120, c.i, c.j, [c.f, c.g]),
        e["ɵmpd"](4608, c.k, c.k, []),
        e["ɵmpd"](4608, c.l, c.m, [c.k, c.b]),
        e["ɵmpd"](5120, c.n, c.o, [c.l, c.g]),
        e["ɵmpd"](512, r.CommonModule, r.CommonModule, []),
        e["ɵmpd"](512, s.b, s.b, []),
        e["ɵmpd"](512, s.c, s.c, []),
        e["ɵmpd"](512, c.p, c.p, []),
        e["ɵmpd"](512, c.q, c.q, []),
        e["ɵmpd"](512, d.RouterModule, d.RouterModule, [
          [2, d["ɵa"]],
          [2, d.Router],
        ]),
        e["ɵmpd"](512, p.c, p.c, [[2, p.a]]),
        e["ɵmpd"](512, g.a, g.a, []),
        e["ɵmpd"](512, m.a, m.a, []),
        e["ɵmpd"](512, i.a, i.a, []),
        e["ɵmpd"](
          1024,
          d.ROUTES,
          function () {
            return [
              [
                {
                  path: "",
                  component: f.a,
                  data: { breadcrumb: "News" },
                  children: [
                    {
                      path: "",
                      component: h.a,
                      data: { animation: "newsLandingpage", breadcrumb: "" },
                    },
                    {
                      path: ":id",
                      component: _.a,
                      data: {
                        breadcrumb: "News detail",
                        animation: "newsDetailpage",
                      },
                    },
                  ],
                },
              ],
            ];
          },
          []
        ),
      ]);
    });
  },
  "aLR+": function (n, l, t) {
    "use strict";
    function e(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
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
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "block news-detail shimmer"]],
            [[2, "isMobile", null]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n    "])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            5,
            "ul",
            [["class", "news-detail"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n      "])),
          (n()(), I["ɵand"](16777216, null, null, 2, null, e)),
          I["ɵdid"](
            802816,
            null,
            0,
            R.NgForOf,
            [I.ViewContainerRef, I.TemplateRef, I.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          I["ɵpad"](3),
          (n()(), I["ɵted"](null, ["\n    "])),
          (n()(), I["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 5, 0, n(l, 6, 0, 1, 2, 3));
        },
        function (n, l) {
          n(l, 0, 0, l.component.isMobileMenu);
        }
      );
    }
    function o(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [["class", "breadcrumb-wrapper news-detail"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            16,
            "div",
            [["class", "g-layout breadcrumb-layout news-detail"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            7,
            "ul",
            [["class", "breadcrumb news-detail"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "li",
            [["class", "breadcrumb-links"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [["class", "breadcrumb-links__a"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.goBack(t) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["Back"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [
              ["class", "edit"],
              ["target", "_blank"],
            ],
            [
              [1, "target", 0],
              [8, "href", 4],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !==
                    I["ɵnov"](n, 15).onClick(
                      t.button,
                      t.ctrlKey,
                      t.metaKey,
                      t.shiftKey
                    ) && e;
              }
              return e;
            },
            null,
            null
          )),
          I["ɵdid"](
            671744,
            null,
            0,
            T.RouterLinkWithHref,
            [T.Router, T.ActivatedRoute, R.LocationStrategy],
            { target: [0, "target"], routerLink: [1, "routerLink"] },
            null
          ),
          I["ɵpad"](1),
          (n()(), I["ɵted"](null, ["Edit"])),
          (n()(), I["ɵted"](null, ["\n\t"])),
          (n()(), I["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(
            l,
            15,
            0,
            "_blank",
            n(l, 16, 0, "/node/" + l.component.news.nid + "/edit")
          );
        },
        function (n, l) {
          n(l, 14, 0, I["ɵnov"](l, 15).target, I["ɵnov"](l, 15).href);
        }
      );
    }
    function u(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-7"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["THIS IS AN ADVERTISMENT"])),
          (n()(), I["ɵted"](null, ["\n"])),
        ],
        null,
        null
      );
    }
    function a(n) {
      return I["ɵvid"](
        0,
        [
          (n()(), I["ɵted"](null, ["\n"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-8"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n    "])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), I["ɵted"](null, ["\n"])),
          (n()(), I["ɵted"](null, ["\n     "])),
        ],
        null,
        null
      );
    }
    function r(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "news-content_author authorName"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["By ", ""])),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.component.news.field_author_name);
        }
      );
    }
    function s(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "news-content_author authorName"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["By "])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            2,
            "a",
            [["class", "customauthor"]],
            [
              [1, "target", 0],
              [8, "href", 4],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e =
                  !1 !==
                    I["ɵnov"](n, 3).onClick(
                      t.button,
                      t.ctrlKey,
                      t.metaKey,
                      t.shiftKey
                    ) && e;
              }
              if ("click" === l) {
                e = !1 !== i.setTitle(i.news.field_customauthor) && e;
              }
              return e;
            },
            null,
            null
          )),
          I["ɵdid"](
            671744,
            null,
            0,
            T.RouterLinkWithHref,
            [T.Router, T.ActivatedRoute, R.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          (n()(), I["ɵted"](null, ["", ""])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            3,
            0,
            I["ɵinlineInterpolate"](1, "/tag/", t.news.field_customauthor, "")
          );
        },
        function (n, l) {
          var t = l.component;
          n(l, 2, 0, I["ɵnov"](l, 3).target, I["ɵnov"](l, 3).href),
            n(l, 4, 0, t.news.field_customauthor);
        }
      );
    }
    function c(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "news-detail__content news-content"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            8,
            "h2",
            [["class", "news-content__title"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [
              ["class", "title"],
              ["id", "news_detail_page_title"],
            ],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            3,
            "span",
            [["class", "streak-logo"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [
              [
                "src",
                "/sites/g/files/g2000007366/files/2017-10/CA_streak_green.png",
              ],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\n\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "news-content__created created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["Posted ", ""])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, r)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, s)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 16, 0, t.news.field_author_name),
            n(l, 19, 0, t.news.field_customauthor);
        },
        function (n, l) {
          var t = l.component;
          n(l, 4, 0, t.news.title), n(l, 13, 0, t.news.created);
        }
      );
    }
    function d(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "iframelinkfyre"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "linkfyre"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          I["ɵppd"](2),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            I["ɵunv"](
              l,
              2,
              0,
              n(
                l,
                3,
                0,
                I["ɵnov"](l.parent.parent, 0),
                t.news.field_linkfire_embed_link,
                "html"
              )
            )
          );
        }
      );
    }
    function p(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "shopify"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [],
            [[8, "id", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(l, 2, 0, I["ɵinlineInterpolate"](1, "", t.shopifyDivId, ""));
        }
      );
    }
    function g(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            23,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "postHead"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["Share this on "])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "read-share desktop"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            5,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 10, 0, t.news.path_1, t.news.title, "custom_dom"),
            n(l, 20, 0, t.news.path_1, t.news.title, t.blogNewsShare);
        },
        null
      );
    }
    function m(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "innerWrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "news-content__news-body full-content"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          I["ɵppd"](2),
          (n()(), I["ɵted"](null, ["\n\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "iframe-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, d)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, p)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "date-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, g)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 8, 0, t.news.field_linkfire_embed_link.length > 0),
            n(l, 11, 0, t.news.field_shopify_embed.length > 0),
            n(l, 18, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            I["ɵunv"](
              l,
              2,
              0,
              n(l, 3, 0, I["ɵnov"](l.parent, 0), t.news.body, "html")
            )
          );
        }
      );
    }
    function f(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
        },
        null
      );
    }
    function h(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          I["ɵted"](null, [
            "\n                                                \t",
          ])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          I["ɵted"](null, [
            "\n                                                \t",
          ])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, f)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
        },
        null
      );
    }
    function _(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["READ MORE"])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            I["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function w(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            25,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            22,
            "div",
            [["class", "relatedNewsDetail row__item item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "relatedNewsDetail row__thumbnail thumb"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "row__body body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "h2",
            [["class", "relatedNewsDetail row__body__title title"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, h)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\n\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "relatedNewsDetail row__body__created created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["POSTED ", ""])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, _)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 15, 0, !t.minimal), n(l, 21, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            I["ɵinlineInterpolate"](1, "row row-", t.index, " col grid")
          ),
            n(l, 4, 0, l.context.$implicit.thumbnail),
            n(l, 9, 0, l.context.$implicit.title),
            n(l, 18, 0, l.context.$implicit.created);
        }
      );
    }
    function C(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            26,
            "ul",
            [["class", "news-detail rows news-content grid-1_xs-1"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            7,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["THIS IS AN ADVERTISMENT"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "h2",
            [["class", "relatedNewsDetailTitle"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["RELATED POSTS"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 2, null, w)),
          I["ɵdid"](
            802816,
            null,
            0,
            R.NgForOf,
            [I.ViewContainerRef, I.TemplateRef, I.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          I["ɵpid"](0, R.SlicePipe, []),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            7,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["id", "dfp-ad-slot-4"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["THIS IS AN ADVERTISMENT"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            15,
            0,
            I["ɵunv"](
              l,
              15,
              0,
              I["ɵnov"](l, 16).transform(t.relatedArtistPosts, 0, 3)
            )
          );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            I["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row rowAd row-",
              t.index,
              " col grid"
            )
          ),
            n(
              l,
              18,
              0,
              I["ɵinlineInterpolate"](
                2,
                "",
                t.customClass,
                "__row rowAd row-",
                t.index,
                " col grid"
              )
            );
        }
      );
    }
    function b(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            25,
            "div",
            [["class", "flippy-pager"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            22,
            "div",
            [["class", "flippy-pager__content"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "h2",
            [["class", "flippy-pager__title"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["next Article"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "flippy-pager__left-content thumbnail"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            13,
            "div",
            [["class", "flippy-pager__right-content"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "flippy-pager__news__created created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["", ""])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [["class", "flippy-pager__news__title"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "flippy-pager__news__body"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [["class", "flippy-pager__news__readMore"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e = !1 !== I["ɵnov"](n, 20).onClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          I["ɵdid"](
            16384,
            null,
            0,
            T.RouterLink,
            [T.Router, T.ActivatedRoute, [8, null], I.Renderer2, I.ElementRef],
            { routerLink: [0, "routerLink"] },
            null
          ),
          I["ɵpad"](1),
          (n()(), I["ɵted"](null, ["Continue Reading →"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          n(l, 20, 0, n(l, 21, 0, l.component.nextNews.path));
        },
        function (n, l) {
          var t = l.component;
          n(l, 7, 0, t.nextNews.thumbnail),
            n(l, 13, 0, t.news.created),
            n(l, 15, 0, t.nextNews.title),
            n(l, 17, 0, t.nextNews.body);
        }
      );
    }
    function v(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
        },
        null
      );
    }
    function x(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          I["ɵted"](null, [
            "\n                                                \t",
          ])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            S.a,
            S.b
          )),
          I["ɵdid"](
            4833280,
            null,
            0,
            D.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            11,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          I["ɵted"](null, [
            "\n                                                \t",
          ])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, v)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
        },
        null
      );
    }
    function M(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["READ MORE"])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            I["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          );
        }
      );
    }
    function P(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            24,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            21,
            "div",
            [["class", "latestPostsDetail row__item item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "latestPostsDetail row__thumbnail thumb"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            16,
            "div",
            [["class", "row__body body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [["class", "latestPostsDetail row__body__title title"]],
            [[8, "innerHTML", 1]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
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
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, x)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "latestPostsDetail row__body__created created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["POSTED ", ""])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, M)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 14, 0, !t.minimal), n(l, 20, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            I["ɵinlineInterpolate"](1, "row row-", t.index, " col grid")
          ),
            n(l, 4, 0, l.context.$implicit.thumbnail),
            n(l, 9, 0, l.context.$implicit.title),
            n(l, 17, 0, l.context.$implicit.created);
        }
      );
    }
    function O(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            5,
            "ul",
            [["class", "news-detail rows news-content grid-4_xs-1"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 2, null, P)),
          I["ɵdid"](
            802816,
            null,
            0,
            R.NgForOf,
            [I.ViewContainerRef, I.TemplateRef, I.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          I["ɵpid"](0, R.SlicePipe, []),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            3,
            0,
            I["ɵunv"](
              l,
              3,
              0,
              I["ɵnov"](l, 4).transform(t.youMayAlsoLikePosts, 0, 4)
            )
          );
        },
        null
      );
    }
    function y(n) {
      return I["ɵvid"](
        0,
        [
          I["ɵpid"](0, E.a, [L.DomSanitizer]),
          (n()(), I["ɵted"](null, ["\n"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, i)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n  "])),
          (n()(), I["ɵted"](null, ["\n\n\n"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, o)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\n"])),
          (n()(), I["ɵted"](null, ["\n\n"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, u)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n "])),
          (n()(), I["ɵand"](0, [["notMobile", 2]], null, 0, null, a)),
          (n()(), I["ɵted"](null, ["\n\n"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            35,
            "div",
            [["class", "news-detail news-detail-page detail-list"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\n\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            32,
            "div",
            [["class", "news-detail__layout g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, c)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, m)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\n\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "newsDetail relatedNewsDetail latestNews"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, C)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, [" \n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, b)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\n\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            10,
            "div",
            [["class", "newsDetail latestNews youmayalsolike"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "h2",
            [["class", "latestNewsDetailTitle"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["YOU MAY ALSO LIKE"])),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), I["ɵted"](null, ["\n\t\t\t\t"])),
          (n()(), I["ɵand"](16777216, null, null, 1, null, O)),
          I["ɵdid"](
            16384,
            null,
            0,
            R.NgIf,
            [I.ViewContainerRef, I.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), I["ɵted"](null, ["\n\t\t\t"])),
          (n()(), I["ɵted"](null, ["\n\t\t"])),
          (n()(), I["ɵted"](null, [" \n\t"])),
          (n()(), I["ɵted"](null, ["\n"])),
          (n()(), I["ɵted"](null, ["\n"])),
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-json-schema",
            [],
            null,
            null,
            null,
            $.a,
            $.b
          )),
          I["ɵdid"](
            638976,
            null,
            0,
            V.a,
            [L.DomSanitizer],
            { schemadata: [0, "schemadata"] },
            null
          ),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, !t.news),
            n(l, 7, 0, t.news),
            n(l, 11, 0, t.isMobileMenu, I["ɵnov"](l, 13)),
            n(l, 20, 0, t.news),
            n(l, 23, 0, t.news),
            n(l, 31, 0, t.relatedArtistPosts),
            n(l, 36, 0, t.nextNews),
            n(l, 46, 0, t.youMayAlsoLikePosts),
            n(l, 53, 0, t.schemadataValue);
        },
        null
      );
    }
    function k(n) {
      return I["ɵvid"](
        0,
        [
          (n()(),
          I["ɵeld"](
            0,
            null,
            null,
            1,
            "app-news-detail",
            [],
            null,
            [
              ["window", "resize"],
              ["window", "scroll"],
            ],
            function (n, l, t) {
              var e = !0;
              if ("window:resize" === l) {
                e = !1 !== I["ɵnov"](n, 1).onResize(t) && e;
              }
              if ("window:scroll" === l) {
                e = !1 !== I["ɵnov"](n, 1).onScroll(t) && e;
              }
              return e;
            },
            y,
            H
          )),
          I["ɵdid"](
            13352960,
            null,
            0,
            A.a,
            [
              z.a,
              T.Router,
              W.a,
              T.ActivatedRoute,
              I.ElementRef,
              I.ElementRef,
              L.Title,
            ],
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
    var N = t("q0r5"),
      I = t("3j3K"),
      R = t("2Je8"),
      T = t("5oXY"),
      S = t("09HW"),
      D = t("FpAZ"),
      E = t("nbor"),
      L = t("Qbdm"),
      $ = t("qLPn"),
      V = t("5KDx"),
      A = t("KLZk"),
      z = t("fa0J"),
      W = t("CH53");
    t.d(l, "a", function () {
      return F;
    });
    var B = [N.a],
      H = I["ɵcrt"]({ encapsulation: 0, styles: B, data: {} }),
      F = I["ɵccf"](
        "app-news-detail",
        A.a,
        k,
        { news: "news", cols: "cols" },
        {},
        []
      );
  },
  anls: function (n, l, t) {
    "use strict";
    function e(n) {
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
          (n()(), In["ɵand"](16777216, null, null, 2, null, e)),
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            t.blogNewsShare
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
        },
        null
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
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
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["READ\n                                    MORE"])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          );
        }
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          (n()(), In["ɵted"](null, ["\n                                "])),
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
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !t.minimal),
            n(l, 19, 0, !t.minimal),
            n(l, 22, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
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
          (n()(), In["ɵted"](null, ["\n                "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != t.count);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            t.blogNewsShare
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !t.minimal),
            n(l, 19, 0, !t.minimal),
            n(l, 22, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
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
          var t = l.component;
          n(l, 4, 0, l.context.$implicit.field_position != t.count);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
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
          (n()(), In["ɵand"](16777216, null, null, 2, null, C)),
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
          var t = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](l, 5, 0, In["ɵnov"](l, 6).transform(t.news, 0, 1))
          ),
            n(
              l,
              11,
              0,
              In["ɵunv"](
                l,
                11,
                0,
                In["ɵnov"](l, 12).transform(t.news, 1, 6 + t.moreNews)
              )
            );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              " rows news ",
              t.cols,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.context.$implicit.created);
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(l, 13, 0, l.context.$implicit.title), n(l, 19, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row-",
              t.index,
              ""
            ),
            l.context.$implicit === t.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
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
                t.customClass,
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
                t.customClass,
                " row__thumbnail mobile"
              ),
              l.context.$implicit.field_blog_home_thumbnail_1
            ),
            n(l, 8, 0, In["ɵinlineInterpolate"](1, "", t.customClass, " bg")),
            n(
              l,
              10,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
            ),
            n(
              l,
              21,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " read_more")
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
          (n()(), In["ɵand"](16777216, null, null, 2, null, M)),
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
          var t = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](
              l,
              5,
              0,
              In["ɵnov"](l, 6).transform(
                t.featuredNews,
                0,
                t.count + t.moreNews
              )
            )
          );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " rows featuredNews")
          );
        }
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
            function (n, l, t) {
              var e = !0;
              if ("window:resize" === l) {
                e = !1 !== In["ɵnov"](n, 3).onResize(t) && e;
              }
              return e;
            },
            Dn.a,
            Dn.b
          )),
          In["ɵdid"](
            1687552,
            null,
            0,
            En.a,
            [In.ElementRef, Ln.a, $n.Router, Vn.Title],
            { blogs: [0, "blogs"], blogslength: [1, "blogslength"] },
            null
          ),
          (n()(), In["ɵted"](null, ["\n            "])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.featuredNews, t.featuredNewsLength);
        },
        null
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
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogNewsShare
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, y)),
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
          var t = l.component;
          n(l, 10, 0, l.context.$implicit.title), n(l, 15, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row-",
              t.index,
              ""
            ),
            l.context.$implicit === t.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumb"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
            ),
            n(
              l,
              17,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
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
          var t = l.component;
          n(
            l,
            5,
            0,
            In["ɵunv"](
              l,
              5,
              0,
              In["ɵnov"](l, 6).transform(t.latestNews, 0, t.count + t.moreNews)
            )
          );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " rows latestNews")
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__news-body news-body"
            ),
            l.parent.context.$implicit.body
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
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
        },
        null
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
        },
        null
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, E)),
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, L)),
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
          var t = l.component;
          n(l, 10, 0, l.context.$implicit.title),
            n(l, 13, 0, !t.minimal),
            n(l, 18, 0, !t.minimal),
            n(l, 21, 0, !t.minimal),
            n(l, 24, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumb"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
            );
        }
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
          (n()(), In["ɵand"](16777216, null, null, 2, null, V)),
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
          var t = l.component;
          n(
            l,
            17,
            0,
            In["ɵunv"](
              l,
              17,
              0,
              In["ɵnov"](l, 18).transform(t.landingNews, 0, 5 + t.moreNews)
            )
          );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              " rows latestNews ",
              t.cols,
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
                t.customClass,
                "__row rowAd row-",
                t.index,
                " col grid"
              )
            );
        }
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
    function W(n) {
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
        },
        null
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.context.$implicit.showShare = !n.parent.context
                      .$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            16,
            0,
            l.parent.context.$implicit.path_1,
            l.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 33, 0, t.shareOpen);
        },
        null
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
    function F(n) {
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
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
          In["ɵted"](null, [
            "\n\n                                            ",
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
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n                                "])),
          (n()(), In["ɵted"](null, ["\n                            "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 15, 0, !t.minimal),
            n(l, 20, 0, !t.minimal),
            n(l, 23, 0, !t.minimal),
            n(l, 26, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "row row-", t.index, " col grid")
          ),
            n(l, 4, 0, l.context.$implicit.thumbnail),
            n(l, 12, 0, l.context.$implicit.title);
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, K)),
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
          var t = l.component;
          n(
            l,
            9,
            0,
            In["ɵinlineInterpolate"](
              1,
              "feature-news rows featureNews ",
              t.cols,
              ""
            )
          );
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
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, U)),
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
          var t = l.component;
          n(
            l,
            17,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 34, 0, t.shareOpen);
        },
        null
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__body__created created"
            )
          ),
            n(l, 1, 0, l.parent.parent.context.$implicit.created);
        }
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
            1,
            "a",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, q)),
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
          (n()(), In["ɵted"](null, ["\n                            "])),
          (n()(), In["ɵted"](null, ["\n                        "])),
          (n()(), In["ɵted"](null, ["\n                    "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 16, 0, !t.minimal),
            n(l, 19, 0, !t.minimal),
            n(l, 22, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
            );
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
          var t = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != t.count);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
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
          (n()(), In["ɵand"](16777216, null, null, 2, null, Q)),
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
          var t = l.component;
          n(
            l,
            3,
            0,
            In["ɵunv"](l, 3, 0, In["ɵnov"](l, 4).transform(t.stickyNews, 2, 3))
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " spotifyNewsContent row__body__news-body news-body"
            ),
            l.parent.parent.context.$implicit.body_1
          );
        }
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
            4,
            "a",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.parent.context.$implicit.showShare = !n
                      .parent.parent.parent.context.$implicit.showShare) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            l.parent.parent.parent.context.$implicit.path_1,
            l.parent.parent.parent.context.$implicit.title,
            t.blogNewsShare
          );
        },
        null
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
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !=
                    (n.parent.parent.context.$implicit.showShare = !n.parent
                      .parent.context.$implicit.showShare) && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.shareClick() && e;
              }
              return e;
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
          (n()(),
          In["ɵted"](null, ["\n                                        "])),
          (n()(), In["ɵted"](null, ["\n                                    "])),
          (n()(), In["ɵted"](null, ["\n\n                                "])),
        ],
        function (n, l) {
          var t = l.component;
          n(
            l,
            17,
            0,
            l.parent.parent.context.$implicit.path_1,
            l.parent.parent.context.$implicit.title,
            t.blogShare
          ),
            n(l, 34, 0, t.shareOpen);
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(l, 10, 0, l.parent.context.$implicit.title),
            n(l, 13, 0, !t.minimal),
            n(l, 18, 0, !t.minimal),
            n(l, 21, 0, !t.minimal),
            n(l, 24, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumbnail"
              ),
              l.parent.context.$implicit.field_ads_image
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
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
          var t = l.component;
          n(l, 3, 0, l.context.$implicit.field_position != t.count);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              "__row row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
          );
        }
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
          var t = l.component;
          n(
            l,
            3,
            0,
            In["ɵunv"](l, 3, 0, In["ɵnov"](l, 4).transform(t.stickyNews, 3, 4))
          );
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, sn)),
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
          var t = l.component;
          n(l, 5, 0, 2 == t.homeNewsIndex), n(l, 8, 0, 3 == t.homeNewsIndex);
        },
        null
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
            0,
            "h2",
            [],
            [
              [8, "innerHTML", 1],
              [8, "className", 0],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            In["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
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
          var t = l.component;
          n(l, 9, 0, l.context.$implicit.title),
            n(l, 12, 0, !t.minimal),
            n(l, 15, 0, !t.minimal),
            n(l, 18, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              " row row-",
              t.index,
              " col grid"
            ),
            l.context.$implicit === t.selectedNews
          ),
            n(
              l,
              2,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
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
                t.customClass,
                " row__thumbnail thumbnail"
              ),
              l.context.$implicit.thumbnail
            ),
            n(
              l,
              6,
              0,
              In["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
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
          var t = l.component;
          n(
            l,
            1,
            0,
            In["ɵinlineInterpolate"](
              2,
              "",
              t.customClass,
              " rows news ",
              t.cols,
              ""
            ),
            n(l, 2, 0, t.className, !t.className)
          ),
            n(
              l,
              5,
              0,
              In["ɵunv"](
                l,
                5,
                0,
                In["ɵnov"](l, 6).transform(t.news, 0, t.count + t.moreNews)
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__loader")
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.fetchNextPage() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), In["ɵted"](null, ["load more"])),
          (n()(), In["ɵted"](null, ["\n        "])),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
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
                t.customClass,
                " pager__viewMore__button button"
              )
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
            4,
            "li",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== In["ɵnov"](n, 1).onClick() && e;
              }
              if ("click" === l) {
                e = !1 !== i.clicked() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__links")
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__links")
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== In["ɵnov"](n, 3).onClick() && e;
              }
              if ("click" === l) {
                e = !1 !== i.clicked() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            1,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__links"),
            n(l, 2, 0, t.pager.currentPage === l.context.$implicit)
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__links")
          );
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
            4,
            "li",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== In["ɵnov"](n, 1).onClick() && e;
              }
              if ("click" === l) {
                e = !1 !== i.clicked() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__links")
          ),
            n(l, 4, 0, t.pager.totalPages);
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== In["ɵnov"](n, 5).onClick() && e;
              }
              if ("click" === l) {
                e = !1 !== i.clicked() && e;
              }
              return e;
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== In["ɵnov"](n, 31).onClick() && e;
              }
              if ("click" === l) {
                e = !1 !== i.clicked() && e;
              }
              return e;
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
          var t = l.component;
          n(
            l,
            3,
            0,
            In["ɵinlineInterpolate"](1, "", t.customClass, " pager__navigator"),
            n(l, 4, 0, 1 === t.pager.currentPage)
          ),
            n(l, 5, 0, n(l, 6, 0, t.pager.currentPage - 1), n(l, 7, 0, ".")),
            n(l, 14, 0, t.pager.currentPage > 6),
            n(l, 17, 0, t.pager.currentPage > 4),
            n(l, 20, 0, t.pager.pages),
            n(l, 23, 0, t.pager.currentPage < t.pager.totalPages - 4),
            n(
              l,
              26,
              0,
              t.pager.currentPage < t.pager.totalPages - 3 &&
                t.pager.totalPages > 6
            ),
            n(
              l,
              29,
              0,
              In["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
                " pager__navigator"
              ),
              n(l, 30, 0, t.pager.currentPage === t.pager.totalPages)
            ),
            n(l, 31, 0, n(l, 32, 0, t.pager.currentPage + 1), n(l, 33, 0, "."));
        },
        function (n, l) {
          var t = l.component;
          n(l, 0, 0, In["ɵinlineInterpolate"](1, "", t.customClass, " pager"));
        }
      );
    }
    function On(n) {
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, b)),
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, O)),
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, A)),
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, j)),
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, cn)),
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
          var t = l.component;
          n(l, 3, 0, t.headerText), n(l, 6, 0, t.switchCarouselTemplate);
          n(l, 9, 0, 1);
          n(l, 12, 0, 2);
          n(l, 15, 0, 8);
          n(l, 18, 0, 4);
          n(l, 21, 0, 5);
          n(l, 24, 0, 6);
          n(l, 27, 0, 7),
            n(l, 33, 0, t.pagers),
            n(l, 36, 0, t.viewMore),
            n(l, 39, 0, t.pager.pages && t.pager.pages.length && t.pagers);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            In["ɵinlineInterpolate"](1, "block news-block ", t.customClass, "")
          );
        }
      );
    }
    function yn(n) {
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
          (n()(), In["ɵand"](16777216, null, null, 1, null, On)),
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
          var t = l.component;
          n(l, 2, 0, !t.dataLoaded), n(l, 6, 0, t.dataLoaded);
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
            function (n, l, t) {
              var e = !0;
              if ("window:resize" === l) {
                e = !1 !== In["ɵnov"](n, 1).onResize(t) && e;
              }
              if ("window:scroll" === l) {
                e = !1 !== In["ɵnov"](n, 1).findScrollValue(t) && e;
              }
              return e;
            },
            yn,
            Bn
          )),
          In["ɵdid"](
            4440064,
            null,
            0,
            An.a,
            [Ln.a, $n.Router, zn.a, $n.ActivatedRoute, In.ElementRef, Vn.Title],
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
    var Nn = t("lxU8"),
      In = t("3j3K"),
      Rn = t("2Je8"),
      Tn = t("09HW"),
      Sn = t("FpAZ"),
      Dn = t("rTO+"),
      En = t("BK5+"),
      Ln = t("fa0J"),
      $n = t("5oXY"),
      Vn = t("Qbdm"),
      An = t("CWct"),
      zn = t("ZyHc");
    t.d(l, "b", function () {
      return Bn;
    }),
      (l.a = yn);
    var Wn = [Nn.a],
      Bn = In["ɵcrt"]({ encapsulation: 0, styles: Wn, data: {} });
    In["ɵccf"](
      "app-news-block",
      An.a,
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
  bxZi: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [""];
  },
  gJdN: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      '.latest-news__layout[_ngcontent-%COMP%]{padding-top:60px}.exclusive-news[_ngcontent-%COMP%]{background-color:#e0dfeb}.exclusive-news__layout[_ngcontent-%COMP%]{padding-top:68px}.common-banner[_ngcontent-%COMP%]{height:100px;position:relative;overflow:hidden}@media only screen and (min-width:768px){.common-banner[_ngcontent-%COMP%]{height:245px}}.common-banner[_ngcontent-%COMP%]:before{content:"";background-color:#1b214e;opacity:.55;position:absolute;top:0;left:0;width:100%;height:100%}.common-banner__title[_ngcontent-%COMP%]{display:inline-block;color:#fff;position:absolute;top:0;left:0;width:auto;height:auto;text-align:center;line-height:100px;font-size:40px;font-weight:700;opacity:.5}@media only screen and (min-width:768px){.common-banner__title[_ngcontent-%COMP%]{top:120px;left:200px;font-size:62px;line-height:1;text-align:left}}.common-banner__image[_ngcontent-%COMP%]{width:100%;height:auto}@media only screen and (min-width:768px){.common-banner__image[_ngcontent-%COMP%]{margin-top:-104px}}',
    ];
  },
  lxU8: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      '.news-block.home-page[_ngcontent-%COMP%]{font-size:0}.news-block.news-list[_ngcontent-%COMP%]{position:relative}ul.news[_ngcontent-%COMP%]   li.row[_ngcontent-%COMP%]{min-height:0}@media only screen and (max-width:767px){ul.news[_ngcontent-%COMP%]   li.row[_ngcontent-%COMP%]{margin:0 0 15px}}.thumbnail[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;font-size:0;position:relative}.thumbnail[_ngcontent-%COMP%]:empty{height:0;width:100%;max-height:1px}.thumbnail[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:hsla(0,0%,100%,.5);opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.thumbnail[_ngcontent-%COMP%]:hover:after{opacity:1}.footer[_ngcontent-%COMP%]{overflow:hidden;position:absolute;bottom:0;width:100%;left:0;padding:0 0 20px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer.news-list[_ngcontent-%COMP%]{padding:0 0 15px}.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-bottom:30px;padding-top:0}.button[_ngcontent-%COMP%]{background-color:#0d0d0d;display:inline-block;border-radius:0;text-transform:uppercase;padding:13px 57px;border:1px solid #0d0d0d;line-height:1;font-size:19px;cursor:pointer;-webkit-transition:all 1s ease 0s;transition:all 1s ease 0s;font-family:Roboto;font-weight:900;color:#fff;border:1px solid #f43939;background:#f43939}@media only only screen and (max-width:767px){.button[_ngcontent-%COMP%]{padding:12px 62px}}.button[_ngcontent-%COMP%]:hover{background-color:#f43939;border:1px solid #f43939;color:#fff;border-color:#f43939;background:#f43939}.readMore[_ngcontent-%COMP%]{cursor:pointer;text-transform:uppercase;font-size:17px}.readMore.home-page[_ngcontent-%COMP%]{color:#807c9c}.readMore.news-list[_ngcontent-%COMP%]{color:#359be9;font-weight:400}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px;padding-left:40px}@media only screen and (min-width:768px){carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{display:block;height:auto;overflow:hidden;width:100%;position:relative;top:10px}}.date-wrapper[_ngcontent-%COMP%]{width:100%;padding:20px 0 16px}@media only screen and (min-width:480px) and (max-width:767px){.date-wrapper[_ngcontent-%COMP%]{position:inherit}}@media only screen and (min-width:768px){.date-wrapper[_ngcontent-%COMP%]{padding:32px 0 11px;position:absolute;bottom:0;width:calc(100% - 10px)}}@media only screen and (max-width:1023px){.date-wrapper[_ngcontent-%COMP%]{padding:0 0 10px}}@media only screen and (max-width:767px){.date-wrapper[_ngcontent-%COMP%]{padding:10px 0 0}}.created[_ngcontent-%COMP%]{color:#0d0d0d;display:inline-block;vertical-align:top;font-size:10px;font-weight:500;margin-top:0;padding:10px 0 10px 24px;text-transform:uppercase;letter-spacing:.5px;cursor:pointer}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{margin-top:0;font-size:12px}}@media only screen and (min-width:768px) and (max-width:1023px){.created[_ngcontent-%COMP%]{letter-spacing:normal}}@media only screen and (max-width:767px){ul.home-page.rows.news[_ngcontent-%COMP%]{margin:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}}.row[_ngcontent-%COMP%]{padding:0}@media only screen and (max-width:767px){.row[_ngcontent-%COMP%]{padding:0;margin-bottom:0;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}.row.news-list[_ngcontent-%COMP%]{padding-bottom:15px}.row__item[_ngcontent-%COMP%]{padding:0;position:relative}.row__item.exclusive-list[_ngcontent-%COMP%]{padding:0}.row__item.home-page[_ngcontent-%COMP%]{background:#fff;-webkit-box-shadow:0 1px 4px 0 #a1a1a1;box-shadow:0 1px 4px 0 #a1a1a1;margin:0}@media only screen and (min-width:768px){.row__item.home-page[_ngcontent-%COMP%]{margin:0 10px 20px}}@media only screen and (min-width:1024px){.row__item.home-page[_ngcontent-%COMP%]{margin:0 20px 20px}}@media only screen and (max-width:767px){.row__item[_ngcontent-%COMP%]{padding:0}}.row__body[_ngcontent-%COMP%]{font-weight:400;position:relative}.row__body.home-page[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-right:20px;padding-left:20px;min-height:100px;text-align:left}@media only screen and (max-width:1023px){.row__body.home-page[_ngcontent-%COMP%]{padding-bottom:20px}}@media only screen and (min-width:768px) and (max-width:1023px){.row__body.home-page[_ngcontent-%COMP%]{min-height:165px;padding-right:10px;padding-left:10px}}@media only screen and (max-width:767px){.row__body.home-page[_ngcontent-%COMP%]{min-height:0;padding-bottom:20px}}.row__body__title[_ngcontent-%COMP%]{color:#000;cursor:pointer;font-size:16px;margin:8px 0 0;padding:0;text-align:left}.row__body__title[_ngcontent-%COMP%]:hover{color:#fff}.row__body__title.home-page[_ngcontent-%COMP%]{font-size:16px;line-height:1.4;min-height:14px;text-transform:uppercase;font-weight:700;font-family:Roboto;color:#0d0d0d}.row__body__news-body[_ngcontent-%COMP%]{color:#000;display:inline-block;vertical-align:top;font-size:12px;font-weight:500;margin-top:0;padding:10px 0;text-transform:uppercase;letter-spacing:.5px}.title[_ngcontent-%COMP%]{padding:0 0 50px;text-align:left;font-weight:700}h2.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{color:#f43939}h2.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]:hover{color:#fff}@media only screen and (min-width:768px){.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{margin:0;min-height:597px}.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .home-page.row__body.body[_ngcontent-%COMP%]{position:static}}.spotifyNewsContent[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid transparent}.rows[_ngcontent-%COMP%]{list-style-type:none;padding:0;-webkit-transition:opacity .3s;transition:opacity .3s}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid transparent}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .home-page.row__body.body[_ngcontent-%COMP%]{position:static}.rows.onScreen[_ngcontent-%COMP%]{opacity:1}.rows.fade[_ngcontent-%COMP%]{opacity:0}@media only screen and (min-width:768px){.rows.fade[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.news-body[_ngcontent-%COMP%]     a{color:#359be9;font-weight:400;text-decoration:underline}.news-body[_ngcontent-%COMP%]     a:hover{text-decoration:none;color:#74c8e9}.pager[_ngcontent-%COMP%]{text-align:center;margin:35px 0}.pager__loader[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.pager__loader[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.pager__links[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]{list-style-type:none;display:inline-block;font-size:18px;cursor:pointer;font-weight:700;outline:none;width:25px}.pager__links.active[_ngcontent-%COMP%], .pager__links[_ngcontent-%COMP%]:hover, .pager__navigator.active[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]:hover{color:#359be9}.pager__navigator[_ngcontent-%COMP%]{color:#359be9;cursor:pointer;vertical-align:top}.pager__navigator.disabled[_ngcontent-%COMP%]{color:#888;cursor:default}.pager__navigator_a[_ngcontent-%COMP%]{color:inherit;cursor:inherit}.heroCarouselBlock1.row__item[_ngcontent-%COMP%]{padding:0;margin:0;background:none;font-size:0;overflow:hidden}.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]{position:relative;max-height:500px;padding-bottom:37.15%;height:0}.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:url("/sites/g/files/g2000007366/files/Banner_overlay.png") no-repeat scroll 0 bottom transparent}.heroCarouselBlock1.row__thumbnail.mobile[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){.heroCarouselBlock1.row__thumbnail[_ngcontent-%COMP%]{padding-bottom:56.25%}.heroCarouselBlock1.row__thumbnail.desktop[_ngcontent-%COMP%]{display:none}.heroCarouselBlock1.row__thumbnail.mobile[_ngcontent-%COMP%]{display:block;padding-bottom:51.15%}}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]{position:absolute;bottom:0;text-align:center}}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body.body[_ngcontent-%COMP%]{padding-right:0;width:100%}}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body.body[_ngcontent-%COMP%]{padding:15px 0 0 15px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}}.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:36px;max-width:60%;width:100%;margin-top:0;line-height:1;font-weight:900;text-align:center}@media only screen and (min-width:768px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}}@media only screen and (min-width:1024px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{max-width:800px}}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:5vw;position:static;max-width:100%;line-height:1;top:auto;text-align:left}}@media only screen and (min-width:768px) and (max-width:1023px){.heroCarouselBlock1.row__body__title[_ngcontent-%COMP%]{font-size:36px}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{color:#fff;margin-top:0;padding:0;bottom:0;font-size:14px}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:3.37vw}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;font-weight:700;color:#f43939;margin-left:15px;cursor:pointer}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]{font-size:3.37vw}}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .read_more[_ngcontent-%COMP%]:hover{color:#fff}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:5px 0 11px}.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}@media only screen and (max-width:767px){.heroCarouselBlock1.row__body[_ngcontent-%COMP%]   .date_link[_ngcontent-%COMP%]{padding:11px 0}}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{font-size:0;cursor:pointer}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:2px 16px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:236px}}@media only screen and (min-width:1024px) and (max-width:1200px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:201px}}@media only screen and (min-width:1201px){.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{min-height:190px}}.news-block.breakingNews[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;width:100%;display:block;height:auto;overflow:hidden;margin-bottom:13px;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;-webkit-box-shadow:0 0 4px 0 #a1a1a1;box-shadow:0 0 4px 0 #a1a1a1}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{padding:0;margin:0;position:static}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{font-size:0;width:50%;float:left;position:relative;max-height:120px;cursor:pointer}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:52%}}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]{width:34.6%}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{float:right;width:50%;padding-left:2%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:10px}@media only screen and (min-width:768px) and (max-width:1023px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{width:48%}}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{width:65.3%;padding-bottom:18px}}@media only screen and (max-width:767px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%]{display:none}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:12px;color:#000;padding-bottom:0}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover{color:#f43939}@media only screen and (min-width:768px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-bottom:8px}}.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:10px}@media only screen and (min-width:1024px){.news-block.latestNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{font-size:12px}}@media only screen and (max-width:767px){.featuredNews[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{background:url(/sites/g/files/g2000007366/files/dark_BG.jpg) repeat scroll 0 0 transparent}}.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{background:url("/sites/g/files/g2000007366/files/2017-10/newsBg.png");background-repeat:repeat;position:absolute;min-width:653px;bottom:0}}@media only screen and (min-width:768px) and (max-width:1023px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{min-height:90px}}@media only screen and (min-width:1024px){.featuredNews[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{min-height:100px}}.row__body__category[_ngcontent-%COMP%]{color:#fff;font-size:13px;position:absolute;top:-45px;left:0;padding:8px 20px;background-color:#f43939}.block.news-block.shimmer[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.animated-background[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:-webkit-gradient(linear,left top,right top,color-stop(8%,#eee),color-stop(18%,#ddd),color-stop(33%,#eee));background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:320px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:20px}.block.news-block.shimmer.isMobile[_ngcontent-%COMP%]{display:block}}.innerWrapperAd[_ngcontent-%COMP%]{width:100%}.innerWrapperAd.home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]{background:#a2876a}a.home-page.row__body__created.created[_ngcontent-%COMP%]{float:none;padding:10px 0 10px 40px;color:#f43939;cursor:pointer}@media only screen and (min-width:768px) and (max-width:1023px){a.home-page.row__body__created.created[_ngcontent-%COMP%]{padding:10px}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){a.home-page.row__body__created.created[_ngcontent-%COMP%]{padding:10px;width:30%}}a.row__body__created.created[_ngcontent-%COMP%]{color:#f43d3d}@media only screen and (max-width:767px){a.news-list.row__body__created.created[_ngcontent-%COMP%]{float:right;padding-right:10px}}li.home-page__row[_ngcontent-%COMP%]   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withhover[_ngcontent-%COMP%], li.home-page__row[_ngcontent-%COMP%]:hover   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withouthover[_ngcontent-%COMP%]{display:none}li.home-page__row[_ngcontent-%COMP%]:hover   .home-page.row__item.item-wrapper.col[_ngcontent-%COMP%]   img.withhover[_ngcontent-%COMP%]{display:block}',
    ];
  },
  ouuY: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = (function () {
      function n() {}
      return (
        (n.ctorParameters = function () {
          return [];
        }),
        n
      );
    })();
  },
  q0r5: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      '.block[_ngcontent-%COMP%]{color:#1b214e;font-size:19px}.created[_ngcontent-%COMP%]{font-size:12px;font-style:normal;font-weight:400;color:#807c9c}.button[_ngcontent-%COMP%], .created[_ngcontent-%COMP%]{text-transform:uppercase;cursor:pointer}.button[_ngcontent-%COMP%]{background-color:#0d0d0d;display:inline-block;border-radius:0;padding:13px 57px;border:1px solid #0d0d0d;line-height:1;font-size:19px;color:#fff;-webkit-transition:all 1s ease 0s;transition:all 1s ease 0s;font-family:Roboto;font-weight:900}.button[_ngcontent-%COMP%]:hover{background-color:#f43939;border-color:#f43939;color:#fff}.button[_ngcontent-%COMP%]{border:1px solid;border-radius:5px}.button[_ngcontent-%COMP%]:hover{background-color:#1b214e;color:#807c9c}img[_ngcontent-%COMP%]{width:auto}app-twitter-embed[_ngcontent-%COMP%]{display:inline-block;width:100%;height:auto;margin-bottom:20px}.thumbnail[_ngcontent-%COMP%]     img{max-width:100%;width:auto;height:auto}@media only screen and (min-width:1024px){.news-content[_ngcontent-%COMP%]{width:100%;margin:0}}.news-content__title[_ngcontent-%COMP%]{color:#000;padding-top:50px;letter-spacing:2px;padding-bottom:18px;font-size:40px;text-transform:capitalize;text-align:left;margin:0}@media only screen and (max-width:767px){.news-content__title[_ngcontent-%COMP%]{font-size:7vw}}.news-content__title[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:35px;font-weight:900;text-transform:uppercase}@media only screen and (max-width:767px){.news-content__title[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{font-size:7vw}}.news-content__title[_ngcontent-%COMP%]   span.streak-logo[_ngcontent-%COMP%]{display:none!important;width:32px;height:28px;display:inline-block}@media only screen and (max-width:767px){.news-content__title[_ngcontent-%COMP%]   span.streak-logo[_ngcontent-%COMP%]{vertical-align:middle}}.news-content__title[_ngcontent-%COMP%]   span.streak-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.news-content__created[_ngcontent-%COMP%]{padding:0;color:#000;display:block;vertical-align:top;font-size:14px;line-height:.8;margin-bottom:10px}@media only screen and (min-width:768px){.news-content__created[_ngcontent-%COMP%]{display:inline-block}}.news-content_author[_ngcontent-%COMP%]{padding:0 0 15px;color:#000;display:block;vertical-align:top;font-size:14px;line-height:.8;font-style:normal;text-transform:uppercase}@media only screen and (min-width:768px){.news-content_author[_ngcontent-%COMP%]{display:block}}.news-content_author[_ngcontent-%COMP%]   .customauthor[_ngcontent-%COMP%]{color:#f43939}.news-content_author[_ngcontent-%COMP%]   .customauthor[_ngcontent-%COMP%]:hover{color:#000}.news-content__tags[_ngcontent-%COMP%]{margin-bottom:28px;display:inline-block;vertical-align:top;font-size:16px;text-transform:uppercase;padding-left:10px;color:#000;font-weight:700}.news-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}@media only screen and (max-width:767px){.news-content__tags[_ngcontent-%COMP%]{padding:10px 0 0}}.news-content__tags[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{color:#5d8d9a;text-transform:none;position:relative;font-size:11px;margin-left:5px}.news-content__tags[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]:after{content:"";width:100%;height:1px;position:absolute;display:block;left:0;background:rgba(93,141,154,.4);bottom:1px}.news-content__tags__tag[_ngcontent-%COMP%]{text-transform:uppercase;padding:10px 8px;color:#807c9c;font-size:14px;background-color:#e8e6f1;margin-right:10px;border-radius:5px;letter-spacing:1px}.news-content__tags__tag[_ngcontent-%COMP%]:hover{background-color:#cecbdc}.news-content__thumbnailimg[_ngcontent-%COMP%]{width:100%;height:auto}.news-content__news-body[_ngcontent-%COMP%]{margin-bottom:55px;line-height:1.6;letter-spacing:1px;font-size:15px}.news-content__news-body[_ngcontent-%COMP%]     b, .news-content__news-body[_ngcontent-%COMP%]     h2{color:#000}.full-content[_ngcontent-%COMP%]     p{line-height:1.3;margin:25px 0 0;color:#000;letter-spacing:.5px;font-size:16px;font-weight:400}.full-content[_ngcontent-%COMP%]     a{font-weight:600}.full-content[_ngcontent-%COMP%]     a, .full-content[_ngcontent-%COMP%]     a:hover{color:#f43939;text-decoration:none}.full-content[_ngcontent-%COMP%]     .embedded-entity{display:inline-block;width:100%;line-height:0;padding:0;text-align:center;margin:10px 0}.full-content[_ngcontent-%COMP%]     article.media-tweet{display:inline-block;width:auto;height:auto}.full-content[_ngcontent-%COMP%]     article.media.media-video>div{display:inline-block;max-width:400px;width:100%;height:auto}.full-content[_ngcontent-%COMP%]     .video-embed-field-responsive-video{padding-bottom:56.25%;position:relative;width:100%;height:0;overflow:hidden;display:block;line-height:0}.full-content[_ngcontent-%COMP%]     .video-embed-field-responsive-video iframe, .full-content[_ngcontent-%COMP%]     .video-embed-field-responsive-video object{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:none}.full-content[_ngcontent-%COMP%]     .video-embed-field-responsive-video{display:inline-block}div.full-content[_ngcontent-c9][_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f43939!important}.flippy-pager[_ngcontent-%COMP%]{margin-top:5px}.flippy-pager__title[_ngcontent-%COMP%]{font-size:19px;border-bottom:1px solid;margin-bottom:26px;display:inline-block;width:100%;padding-bottom:20px;line-height:1;text-align:left;font-weight:700;padding-top:10px;letter-spacing:2px}@media only screen and (min-width:1024px){.flippy-pager__content[_ngcontent-%COMP%]{width:93%;margin:0}}.flippy-pager__left-content[_ngcontent-%COMP%], .flippy-pager__right-content[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}@media only screen and (max-width:767px){.flippy-pager__left-content[_ngcontent-%COMP%], .flippy-pager__right-content[_ngcontent-%COMP%]{max-width:100%;width:100%;padding:0;margin-bottom:10px}}.flippy-pager__left-content.thumbnail[_ngcontent-%COMP%]{max-width:308px;width:100%}.flippy-pager__left-content.thumbnail[_ngcontent-%COMP%]     img{width:100%}.flippy-pager__right-content[_ngcontent-%COMP%]{width:calc(100% - 308px);padding-left:5%;-webkit-box-sizing:border-box;box-sizing:border-box}.flippy-pager__news__created[_ngcontent-%COMP%]{font-size:12px;font-style:normal;text-transform:uppercase;font-weight:400;color:#807c9c;padding:0}.flippy-pager__news__title[_ngcontent-%COMP%]{text-align:left;font-size:30px;font-weight:600;text-transform:uppercase;color:#807c9c;font-size:22px;color:#1b214e;font-size:20px;line-height:1.2;margin:10px 0;padding:0;letter-spacing:2px}.flippy-pager__news__body[_ngcontent-%COMP%]{margin-bottom:10px}.flippy-pager__news__readMore[_ngcontent-%COMP%]{cursor:pointer;text-transform:uppercase;font-size:17px;color:#359be9;font-weight:600;outline:none}.fly-social-block[_ngcontent-%COMP%]{line-height:0}@media only screen and (max-width:767px){.fly-social-block[_ngcontent-%COMP%]{display:inline-block;width:100%;height:auto;position:fixed!important;bottom:-100px;z-index:8;margin:0;left:0;padding:0 0 10px;-webkit-transition:bottom .5s ease;transition:bottom .5s ease}.fly-social-block.fixed[_ngcontent-%COMP%]{position:fixed!important;bottom:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:hsla(0,0%,100%,.5)}}app-social-buttons[_ngcontent-%COMP%]{line-height:1}.breadcrumb-links__a[_ngcontent-%COMP%]{font-size:13px}@media screen and(max-width:768px){.side_drawer[_ngcontent-%COMP%]{right:-100%}.side_drawer.show[_ngcontent-%COMP%]{width:100%}.side_drawer.show[_ngcontent-%COMP%]   .comment-header[_ngcontent-%COMP%]{position:fixed;width:100%;top:0;right:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box}}.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%], .news-detail__content.news-content[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]{width:67.3%;margin-right:3%}@media only screen and (min-width:768px) and (max-width:1023px){.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]{width:65%}}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]{width:100%}}.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]   a.shareText[_ngcontent-%COMP%]{background:#000;padding:10px 0}@media only screen and (min-width:768px) and (max-width:1023px){.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]   a.shareText[_ngcontent-%COMP%]{padding:10px 10px 10px 0}}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{padding-bottom:20px}}.news-detail[_ngcontent-%COMP%]   .innerWrapper[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]{width:27.3%;display:inline-block;vertical-align:top;padding:0;margin:0}@media only screen and (min-width:768px) and (max-width:1023px){.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]{width:29%}}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]{width:100%;display:block}}.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-size:16px;text-align:left;padding:0 0 15px;font-weight:700}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;padding-top:50px}}@media only screen and (min-width:768px) and (max-width:1023px){.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;line-height:.8}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-size:22px;text-align:center;padding:10px 0 16px;padding-top:0;font-weight:900}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   h2.relatedNewsDetailTitle[_ngcontent-%COMP%]{font-size:16px;text-align:left;padding:10px 0 9px;font-weight:700;padding-top:0}@media only screen and (min-width:768px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]{margin:0 5% 0 0}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]   a.shareText[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px 0}.news-detail[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]{position:inherit;margin-bottom:30px}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]{margin-bottom:0;display:inline-block}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{width:100%;padding:0}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;position:relative;padding-bottom:0;border-bottom:0}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{padding:15px;min-height:100px;position:relative}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body.body[_ngcontent-%COMP%]{min-height:0}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]{padding:0;min-height:284px;position:relative;-webkit-box-shadow:0 0 4px 0 #a1a1a1;box-shadow:0 0 4px 0 #a1a1a1;border-bottom:3px solid transparent;background-color:#fff}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]{margin:0 10px;min-height:auto}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%]{width:100%;font-size:0;cursor:pointer;overflow:hidden;max-height:140px;position:relative}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%]:after, .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%]:hover:after, .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__thumbnail.thumb[_ngcontent-%COMP%]:hover:after{opacity:1}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%]{font-size:12px;color:#fff;float:left;margin-bottom:10px;position:absolute;top:-45px;left:0;padding:8px 20px;background-color:#512132;width:auto}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%]:empty, .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__category[_ngcontent-%COMP%]:empty{display:none}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__title.title[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__title.title[_ngcontent-%COMP%]{width:100%;font-size:16px;text-transform:uppercase;letter-spacing:.25px;margin-top:6px;line-height:1.25;cursor:pointer;text-align:left;padding:0;padding-bottom:20px;font-weight:700}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{width:50%;color:#000;padding-left:28px;vertical-align:middle;font-size:10.84px;padding:10px 0 10px 24px;font-weight:500;letter-spacing:.3px}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{width:40%;display:inline-block}}@media only screen and (min-width:768px) and (max-width:1023px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__body__created.created[_ngcontent-%COMP%]{width:100%}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%]{color:#f43d3d}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%]:hover, .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%]:hover{color:#fff}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   a.row__body__created.created[_ngcontent-%COMP%]{text-align:right}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .sharewrapper[_ngcontent-%COMP%]{position:absolute}@media only screen and (max-width:767px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{padding-top:0}}@media only screen and (min-width:768px){.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .date-wrapper[_ngcontent-%COMP%]{position:absolute;bottom:0;width:calc(100% - 10px)}}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]{padding:0 0 2px}.news-detail[_ngcontent-%COMP%]   .linkfyre[_ngcontent-%COMP%]{margin-bottom:20px;width:100%;margin:0 auto;text-align:center;padding-bottom:90px}li.__row.rowAd.row-.col.grid[_ngcontent-%COMP%]{position:relative;padding-bottom:100%;padding-top:0;margin:0 auto;text-align:center;-webkit-box-shadow:0 1px 4px 0 #a1a1a1;box-shadow:0 1px 4px 0 #a1a1a1;background:#fff}@media only screen and (max-width:767px){li.__row.rowAd.row-.col.grid[_ngcontent-%COMP%]{padding-bottom:113%;max-width:96%;margin:0 10px}}@media only screen and (max-width:767px) and (orientation:landscape){li.__row.rowAd.row-.col.grid[_ngcontent-%COMP%]{padding-bottom:48%}}@-moz-document url-prefix(){.news-content div#div-gpt-ad-1512352393612-0 iframe{height:100%;bottom:0}}.iframelinkfyre[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;padding-top:0;height:0}.shopify[_ngcontent-%COMP%]{padding-top:20px}.shopify[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:50px}.news-content__tags[_ngcontent-%COMP%]{margin:10px 0;padding:0}.news-content__tags[_ngcontent-%COMP%]   .tagsInner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:", "}.news-content__tags[_ngcontent-%COMP%]   .tagsInner[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]:after{content:""}.postHead[_ngcontent-%COMP%], .tagsInner[_ngcontent-%COMP%]{display:inline-block}.sharewrapper[_ngcontent-%COMP%]   .postHead[_ngcontent-%COMP%]{display:block;font-size:16px;font-weight:700;text-transform:uppercase;color:#000;margin-bottom:20px}a.tags[_ngcontent-%COMP%], a.tier2[_ngcontent-%COMP%], a.tier3[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;color:#f43939;cursor:pointer;font-size:14px;margin:-3px 5px 0 0;line-height:1.9}a.tags[_ngcontent-%COMP%]:hover, a.tier2[_ngcontent-%COMP%]:hover, a.tier3[_ngcontent-%COMP%]:hover{text-decoration:underline}.block.news-detail.shimmer[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:767px){@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.animated-background[_ngcontent-%COMP%]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#f6f7f8;background:-webkit-gradient(linear,left top,right top,color-stop(8%,#eee),color-stop(18%,#ddd),color-stop(33%,#eee));background:linear-gradient(90deg,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px;height:320px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:20px}.block.news-detail.shimmer.isMobile[_ngcontent-%COMP%]{display:block}}.news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]{margin:0}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover, .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover{background-color:#f43939}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover   .row__body__title.title[_ngcontent-%COMP%]{color:#fff}a.news-list.row__body__created.created[_ngcontent-%COMP%]{color:#f43d3d}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover   a.row__body__created.created[_ngcontent-%COMP%], .news-detail[_ngcontent-%COMP%]   .relatedNewsDetail[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover{color:#fff}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]:hover   img.withouthover[_ngcontent-%COMP%]{display:none}.news-detail[_ngcontent-%COMP%]   .latestNews[_ngcontent-%COMP%]   .row__item[_ngcontent-%COMP%]   img.withhover[_ngcontent-%COMP%]{display:block}.news-detail[_ngcontent-%COMP%]   .subscriptionbtn[_ngcontent-%COMP%]{position:relative;float:right}@media only screen and (min-width:768px){.news-detail[_ngcontent-%COMP%]   .latestNews.youmayalsolike[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]   li.youMayAlsoLikeAdSlot[_ngcontent-%COMP%]{-ms-flex-preferred-size:315px;flex-basis:315px;max-width:315px}}',
    ];
  },
  "rTO+": function (n, l, t) {
    "use strict";
    function e(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            l.parent.context.$implicit.title,
            c["ɵinlineInterpolate"](1, "", t.customClass, " row__body__title")
          );
        }
      );
    }
    function i(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n            "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n                "])),
          (n()(), c["ɵted"](null, ["\n                "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n                    "])),
          (n()(), c["ɵted"](null, ["\n                   "])),
          (n()(), c["ɵted"](null, ["\n                    "])),
          (n()(),
          c["ɵeld"](
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n                    "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n                    "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n                        "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, e)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n\n                       "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n                            "])),
          (n()(), c["ɵted"](null, ["\n                            "])),
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [],
            [[8, "className", 0]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["Read More"])),
          (n()(), c["ɵted"](null, ["\n                        "])),
          (n()(), c["ɵted"](null, ["\n                    "])),
          (n()(), c["ɵted"](null, ["                   \n                "])),
          (n()(), c["ɵted"](null, [" \n                "])),
          (n()(), c["ɵted"](null, ["          \n            "])),
          (n()(), c["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(l, 16, 0, l.context.$implicit.title);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            t.elementWidth,
            c["ɵinlineInterpolate"](1, "items item-no-", l.context.index, ""),
            l.context.$implicit.clone
          ),
            n(
              l,
              9,
              0,
              c["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
                " row__thumbnail desktop"
              ),
              l.context.$implicit.field_blog_home_thumbnail
            ),
            n(l, 11, 0, c["ɵinlineInterpolate"](1, "", t.customClass, " bg")),
            n(
              l,
              13,
              0,
              c["ɵinlineInterpolate"](1, "", t.customClass, " row__body body")
            ),
            n(
              l,
              21,
              0,
              c["ɵinlineInterpolate"](1, "", t.customClass, " read_more")
            );
        }
      );
    }
    function o(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(),
          c["ɵeld"](
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
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("swipeleft" === l) {
                e = !1 !== i.swipe(t.type) && e;
              }
              if ("swiperight" === l) {
                e = !1 !== i.swipe(t.type) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n        "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, i)),
          c["ɵdid"](
            802816,
            null,
            0,
            d.NgForOf,
            [c.ViewContainerRef, c.TemplateRef, c.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(), c["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 5, 0, l.component.duplicate);
        },
        function (n, l) {
          var t = l.component;
          n(l, 2, 0, t.carouselWidth, t.transformNode, t.transitionValue);
        }
      );
    }
    function u(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [["class", "carousel-dot"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.dotItem(n.context.index) && e;
              }
              return e;
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
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n"])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, o)),
          c["ɵdid"](
            16384,
            null,
            0,
            d.NgIf,
            [c.ViewContainerRef, c.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n"])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\n        "])),
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "carousel-prev"]],
            [[4, "display", null]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.previousItem() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n        "])),
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "carousel-next"]],
            [[4, "display", null]],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                i = n.component;
              if ("click" === l) {
                e = !1 !== i.nextItem() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(),
          c["ɵeld"](
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
          (n()(), c["ɵted"](null, ["\t\t\t\t\n        "])),
          (n()(), c["ɵand"](16777216, null, null, 1, null, u)),
          c["ɵdid"](
            802816,
            null,
            0,
            d.NgForOf,
            [c.ViewContainerRef, c.TemplateRef, c.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), c["ɵted"](null, ["\n    "])),
          (n()(), c["ɵted"](null, ["\n"])),
          (n()(), c["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.createCarousel), n(l, 17, 0, t.dotCounts);
        },
        function (n, l) {
          var t = l.component;
          n(l, 7, 0, t.showNav),
            n(l, 9, 0, t.PreviousNav),
            n(l, 11, 0, t.NextNav),
            n(l, 14, 0, t.showDots);
        }
      );
    }
    function r(n) {
      return c["ɵvid"](
        0,
        [
          (n()(),
          c["ɵeld"](
            0,
            null,
            null,
            1,
            "news-carousel",
            [],
            null,
            [["window", "resize"]],
            function (n, l, t) {
              var e = !0;
              if ("window:resize" === l) {
                e = !1 !== c["ɵnov"](n, 1).onResize(t) && e;
              }
              return e;
            },
            a,
            _
          )),
          c["ɵdid"](
            1687552,
            null,
            0,
            p.a,
            [c.ElementRef, g.a, m.Router, f.Title],
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
    var s = t("2BTR"),
      c = t("3j3K"),
      d = t("2Je8"),
      p = t("BK5+"),
      g = t("fa0J"),
      m = t("5oXY"),
      f = t("Qbdm");
    t.d(l, "b", function () {
      return _;
    }),
      (l.a = a);
    var h = [s.a],
      _ = c["ɵcrt"]({ encapsulation: 0, styles: h, data: {} });
    c["ɵccf"](
      "news-carousel",
      p.a,
      r,
      { initCount: "initCount", blogs: "blogs", blogslength: "blogslength" },
      {},
      []
    );
  },
});
