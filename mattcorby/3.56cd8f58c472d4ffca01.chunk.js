webpackJsonp([3], {
  "09HW": function (n, l, t) {
    "use strict";
    function e(n) {
      return d["ɵvid"](
        0,
        [
          (n()(),
          d["ɵeld"](
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
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.facebookClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), d["ɵted"](null, ["\n    "])),
          (n()(),
          d["ɵeld"](
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
          (n()(), d["ɵted"](null, ["\n  "])),
        ],
        null,
        null
      );
    }
    function o(n) {
      return d["ɵvid"](
        0,
        [
          (n()(),
          d["ɵeld"](
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
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.twitterClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), d["ɵted"](null, ["\n      "])),
          (n()(),
          d["ɵeld"](
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
          (n()(), d["ɵted"](null, ["\n      \n    "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return d["ɵvid"](
        0,
        [
          (n()(),
          d["ɵeld"](
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
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.mailtoClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(),
          d["ɵeld"](
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
      return d["ɵvid"](
        0,
        [
          (n()(),
          d["ɵeld"](
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
          (n()(), d["ɵted"](null, ["\n  "])),
          (n()(), d["ɵand"](16777216, null, null, 1, null, e)),
          d["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [d.ViewContainerRef, d.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), d["ɵted"](null, ["\n  "])),
          (n()(), d["ɵand"](16777216, null, null, 1, null, o)),
          d["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [d.ViewContainerRef, d.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), d["ɵted"](null, ["\n  "])),
          (n()(), d["ɵted"](null, ["\n  "])),
          (n()(), d["ɵand"](16777216, null, null, 1, null, i)),
          d["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [d.ViewContainerRef, d.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), d["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.facebook), n(l, 6, 0, t.twitter), n(l, 10, 0, t.mailto);
        },
        function (n, l) {
          var t = l.component;
          n(l, 0, 0, d["ɵinlineInterpolate"](1, "share ", t.customClass, ""));
        }
      );
    }
    function a(n) {
      return d["ɵvid"](
        0,
        [
          (n()(), d["ɵand"](16777216, null, null, 1, null, u)),
          d["ɵdid"](
            16384,
            null,
            0,
            c.NgIf,
            [d.ViewContainerRef, d.TemplateRef],
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
      return d["ɵvid"](
        0,
        [
          (n()(),
          d["ɵeld"](
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
            f
          )),
          d["ɵdid"](4833280, null, 0, p.a, [], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var s = t("bxZi"),
      d = t("3j3K"),
      c = t("2Je8"),
      p = t("FpAZ");
    t.d(l, "b", function () {
      return f;
    }),
      (l.a = a);
    var g = [s.a],
      f = d["ɵcrt"]({ encapsulation: 0, styles: g, data: {} });
    d["ɵccf"](
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
  "3Ss1": function (n, l, t) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var e = t("3j3K"),
      o = t("D4G/"),
      i = t("HFww"),
      u = t("RG00"),
      a = t("Ns+0"),
      r = t("2Je8"),
      s = t("NVOs"),
      d = t("Fzro"),
      c = t("CH53"),
      p = t("5oXY"),
      g = t("Dkvd"),
      f = t("vumo"),
      h = t("fAE3"),
      m = t("a3xH"),
      w = t("gwyr"),
      _ = t("jncm");
    t.d(l, "TagsModuleNgFactory", function () {
      return b;
    });
    var b = e["ɵcmf"](o.a, [], function (n) {
      return e["ɵmod"]([
        e["ɵmpd"](
          512,
          e.ComponentFactoryResolver,
          e["ɵCodegenComponentFactoryResolver"],
          [[8, [i.a, u.a, a.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]
        ),
        e["ɵmpd"](4608, r.NgLocalization, r.NgLocaleLocalization, [
          e.LOCALE_ID,
        ]),
        e["ɵmpd"](4608, s.a, s.a, []),
        e["ɵmpd"](4608, d.a, d.a, []),
        e["ɵmpd"](4608, d.b, d.c, []),
        e["ɵmpd"](5120, d.d, d.e, []),
        e["ɵmpd"](4608, d.f, d.f, [d.a, d.b, d.d]),
        e["ɵmpd"](4608, d.g, d.h, []),
        e["ɵmpd"](5120, d.i, d.j, [d.f, d.g]),
        e["ɵmpd"](4608, d.k, d.k, []),
        e["ɵmpd"](4608, d.l, d.m, [d.k, d.b]),
        e["ɵmpd"](5120, d.n, d.o, [d.l, d.g]),
        e["ɵmpd"](4608, c.a, c.a, [d.i]),
        e["ɵmpd"](512, r.CommonModule, r.CommonModule, []),
        e["ɵmpd"](512, s.b, s.b, []),
        e["ɵmpd"](512, s.c, s.c, []),
        e["ɵmpd"](512, d.p, d.p, []),
        e["ɵmpd"](512, d.q, d.q, []),
        e["ɵmpd"](512, p.RouterModule, p.RouterModule, [
          [2, p["ɵa"]],
          [2, p.Router],
        ]),
        e["ɵmpd"](512, g.c, g.c, [[2, g.a]]),
        e["ɵmpd"](512, f.a, f.a, []),
        e["ɵmpd"](512, h.a, h.a, []),
        e["ɵmpd"](512, o.a, o.a, []),
        e["ɵmpd"](
          1024,
          p.ROUTES,
          function () {
            return [
              [
                {
                  path: "",
                  component: m.a,
                  data: { breadcrumb: "Tag" },
                  children: [
                    {
                      path: ":id",
                      component: w.a,
                      data: { breadcrumb: "Tags List" },
                    },
                    {
                      path: ":id/:id",
                      component: _.a,
                      data: { breadcrumb: "Tags Detail" },
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
  "D4G/": function (n, l, t) {
    "use strict";
    var e = t("a3xH"),
      o = t("jncm"),
      i = t("gwyr");
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
  D7JJ: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [""];
  },
  FpAZ: function (n, l, t) {
    "use strict";
    var e = t("kZql");
    t.d(l, "a", function () {
      return o;
    });
    var o = (function () {
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
  HFww: function (n, l, t) {
    "use strict";
    function e(n) {
      return u["ɵvid"](
        0,
        [
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
            null,
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
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    function o(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](0, null, null, 1, "app-tags", [], null, null, null, e, d)),
          u["ɵdid"](49152, null, 0, r.a, [], null, null),
        ],
        null,
        null
      );
    }
    var i = t("D7JJ"),
      u = t("3j3K"),
      a = t("5oXY"),
      r = t("a3xH");
    t.d(l, "a", function () {
      return c;
    });
    var s = [i.a],
      d = u["ɵcrt"]({ encapsulation: 0, styles: s, data: {} }),
      c = u["ɵccf"]("app-tags", r.a, o, {}, {}, []);
  },
  Kmge: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [".news[_ngcontent-%COMP%]{padding-bottom:35px}"];
  },
  "Ns+0": function (n, l, t) {
    "use strict";
    function e(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [["class", "news"]],
            null,
            null,
            null,
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
            "div",
            [["class", "thumbnail"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            14,
            "div",
            [["class", "body"]],
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
            [["class", "created"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["", ""])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "h3",
            [],
            [[8, "innerHTML", 1]],
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
            [["class", "news-body"]],
            [[8, "innerHTML", 1]],
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
            "div",
            [["class", "continue"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "span",
            [],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e = !1 !== s["ɵnov"](n, 15).onClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          s["ɵdid"](
            16384,
            null,
            0,
            d.RouterLink,
            [d.Router, d.ActivatedRoute, [8, null], s.Renderer2, s.ElementRef],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["CONTINUE READING"])),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(), s["ɵted"](null, ["\n    "])),
        ],
        function (n, l) {
          n(l, 15, 0, n(l, 16, 0, l.context.$implicit.path));
        },
        function (n, l) {
          n(l, 2, 0, l.context.$implicit.thumbnail),
            n(l, 7, 0, l.context.$implicit.created),
            n(l, 9, 0, l.context.$implicit.title),
            n(l, 11, 0, l.context.$implicit.body);
        }
      );
    }
    function o(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](0, null, null, 7, "div", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(),
          s["ɵeld"](0, null, null, 1, "h1", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["Tags for ", ""])),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, e)),
          s["ɵdid"](
            802816,
            null,
            0,
            c.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n  "])),
        ],
        function (n, l) {
          n(l, 6, 0, l.component.news);
        },
        function (n, l) {
          n(l, 3, 0, l.component.tagName);
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
            5,
            "div",
            [["class", "g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
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
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 3, 0, "news" == l.component.type);
        },
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
            1,
            "app-tag-detail",
            [],
            null,
            null,
            null,
            i,
            h
          )),
          s["ɵdid"](114688, null, 0, p.a, [d.ActivatedRoute, g.a], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var a = t("Kmge"),
      r = t("SdgL"),
      s = t("3j3K"),
      d = t("5oXY"),
      c = t("2Je8"),
      p = t("jncm"),
      g = t("CH53");
    t.d(l, "a", function () {
      return m;
    });
    var f = [a.a, r.a],
      h = s["ɵcrt"]({ encapsulation: 0, styles: f, data: {} }),
      m = s["ɵccf"]("app-tag-detail", p.a, u, {}, {}, []);
  },
  RG00: function (n, l, t) {
    "use strict";
    function e(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "no-result"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["", ""])),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.component.noResultsMsg);
        }
      );
    }
    function o(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            10,
            "li",
            [["class", "row row- rowAd col grid"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n            "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [
              [
                "class",
                "innerWrapperAd feature-news row__item item-wrapper col",
              ],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n                "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                    "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["THIS IS AN ADVERTISEMENT"])),
          (n()(), h["ɵted"](null, ["\n                "])),
          (n()(), h["ɵted"](null, ["\n\n            "])),
          (n()(), h["ɵted"](null, ["\n        "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
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
    function u(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                        "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            m.a,
            m.b
          )),
          h["ɵdid"](
            4833280,
            null,
            0,
            w.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), h["ɵted"](null, ["\n                      "])),
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
    function a(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            34,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n\n                  "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                    "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                        "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                        "])),
          (n()(),
          h["ɵeld"](
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
          h["ɵted"](null, [
            "\n                        \n                      ",
          ])),
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                        "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "app-social-buttons",
            [],
            null,
            null,
            null,
            m.a,
            m.b
          )),
          h["ɵdid"](
            4833280,
            null,
            0,
            w.a,
            [],
            {
              link: [0, "link"],
              textToshare: [1, "textToshare"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(), h["ɵted"](null, ["\n                    "])),
          (n()(), h["ɵted"](null, ["\n                  "])),
          (n()(), h["ɵted"](null, ["\n                  "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            12,
            "div",
            [["class", "read-share Mobile"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n                    "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            9,
            "a",
            [["class", "shareText"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.shareClick() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                        "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            0,
            "img",
            [["src", "/sites/g/files/g2000007366/files/News_Logo.png"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(), h["ɵted"](null, ["\n                      "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, u)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n                    "])),
          (n()(), h["ɵted"](null, ["\n                  "])),
          (n()(), h["ɵted"](null, ["\n                "])),
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
            n(l, 31, 0, t.shareOpen);
        },
        null
      );
    }
    function r(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["Posted ", ""])),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function s(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [["class", "feature-news row__body__created created"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.gotoDetail(n.parent.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["READ MORE"])),
        ],
        null,
        null
      );
    }
    function d(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            27,
            "li",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n          "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            24,
            "div",
            [["class", "feature-news row__item item-wrapper col"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n            "])),
          (n()(),
          h["ɵeld"](
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
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n            "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            19,
            "div",
            [["class", "feature-news row__body body"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n              "])),
          (n()(), h["ɵted"](null, ["\n              "])),
          (n()(),
          h["ɵeld"](
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
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.gotoDetail(n.context.$implicit) && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n              "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, i)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n              "])),
          (n()(),
          h["ɵeld"](
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
          (n()(), h["ɵted"](null, ["\n                "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, a)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n\n                "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, r)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n                "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, s)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n              "])),
          (n()(), h["ɵted"](null, ["\n            "])),
          (n()(), h["ɵted"](null, ["\n          "])),
          (n()(), h["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 12, 0, !t.minimal),
            n(l, 17, 0, !t.minimal),
            n(l, 20, 0, !t.minimal),
            n(l, 23, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            h["ɵinlineInterpolate"](1, "row row-", t.index, " col grid")
          ),
            n(l, 4, 0, l.context.$implicit.thumbnail),
            n(l, 9, 0, l.context.$implicit.title);
        }
      );
    }
    function c(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "pager__viewMore viewMore buttonWrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n        "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "a",
            [["class", "pager__viewMore__button button"]],
            null,
            [[null, "click"]],
            function (n, l, t) {
              var e = !0,
                o = n.component;
              if ("click" === l) {
                e = !1 !== o.fetchNextPage() && e;
              }
              return e;
            },
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["load more"])),
          (n()(), h["ɵted"](null, ["\n      "])),
        ],
        null,
        null
      );
    }
    function p(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            23,
            "div",
            [["class", "news-page featureNews-landing"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n  "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            20,
            "div",
            [["class", "featureNews"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n    "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            17,
            "div",
            [["class", "featureNews__layout g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n        "])),
          (n()(), h["ɵted"](null, ["\n      "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, e)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n      "])),
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            7,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), h["ɵted"](null, ["\n         "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, o)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n        "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, d)),
          h["ɵdid"](
            802816,
            null,
            0,
            _.NgForOf,
            [h.ViewContainerRef, h.TemplateRef, h.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n      "])),
          (n()(), h["ɵted"](null, ["\n      "])),
          (n()(), h["ɵand"](16777216, null, null, 1, null, c)),
          h["ɵdid"](
            16384,
            null,
            0,
            _.NgIf,
            [h.ViewContainerRef, h.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), h["ɵted"](null, ["\n    "])),
          (n()(), h["ɵted"](null, ["\n  "])),
          (n()(), h["ɵted"](null, ["\n"])),
          (n()(), h["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 8, 0, t.noResultsMsg.length > 0),
            n(l, 13, 0, t.showAd),
            n(l, 16, 0, t.news),
            n(l, 20, 0, t.loadMore);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            10,
            0,
            h["ɵinlineInterpolate"](
              2,
              "feature-news rows featureNews ",
              t.cols,
              " ",
              t.tagName,
              ""
            )
          );
        }
      );
    }
    function g(n) {
      return h["ɵvid"](
        0,
        [
          (n()(),
          h["ɵeld"](
            0,
            null,
            null,
            1,
            "app-tag-landing",
            [],
            null,
            null,
            null,
            p,
            P
          )),
          h["ɵdid"](
            245760,
            null,
            0,
            b.a,
            [x.a, v.ActivatedRoute, C.a, v.Router, M.Title, y.a],
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
    var f = t("SdgL"),
      h = t("3j3K"),
      m = t("09HW"),
      w = t("FpAZ"),
      _ = t("2Je8"),
      b = t("gwyr"),
      x = t("CH53"),
      v = t("5oXY"),
      C = t("fa0J"),
      M = t("Qbdm"),
      y = t("ZyHc");
    t.d(l, "a", function () {
      return k;
    });
    var O = [f.a],
      P = h["ɵcrt"]({ encapsulation: 0, styles: O, data: {} }),
      k = h["ɵccf"](
        "app-tag-landing",
        b.a,
        g,
        { type: "type", cols: "cols" },
        {},
        []
      );
  },
  SdgL: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      'h1[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:60px;letter-spacing:2px}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-bottom:1px solid;display:inline-block}h3[_ngcontent-%COMP%]{text-transform:uppercase;line-height:1.2;font-size:22px;margin:15px 0}.thumbnail[_ngcontent-%COMP%]{display:inline-block;width:30%}@media screen and (max-width:768px){.thumbnail[_ngcontent-%COMP%]{width:100%}}.body[_ngcontent-%COMP%]{width:69%;display:inline-block;vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px}@media screen and (max-width:768px){.body[_ngcontent-%COMP%]{width:100%;padding:0}}.tagHeader[_ngcontent-%COMP%]{display:block;margin-bottom:20px;font-weight:600;letter-spacing:1px;color:#807c9c}.tagHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase}.created[_ngcontent-%COMP%]{font-size:19px;font-weight:600;letter-spacing:1px;color:#807c9c}.news-body[_ngcontent-%COMP%]{padding-bottom:0;font-size:19px}.continue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#359be9;letter-spacing:1px;cursor:pointer}.allnews[_ngcontent-%COMP%]{margin-top:40px;letter-spacing:2px;font-weight:500}.tag-block[_ngcontent-%COMP%]{margin-bottom:40px}.carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{left:0}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%], .carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{position:absolute;top:0;width:70px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;padding:0 10px;background-color:rgba(29,30,32,.86);overflow:hidden;z-index:2}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{left:0;left:unset;right:0;background-position:-49px}.carousel-dots[_ngcontent-%COMP%]{bottom:5%;display:inline-block;height:auto;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:auto}span.carousel-dot[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #fff;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:7px;margin-right:10px;width:7px}span.carousel-dot.active[_ngcontent-%COMP%]{background-color:red}span[_ngcontent-%COMP%]:last-child{margin-right:0}.carousel-stage[_ngcontent-%COMP%]{-ms-touch-action:pan-y!important;touch-action:pan-y!important}@mediaonly screen and (max-width:767px){.thumbnail[_ngcontent-%COMP%]{margin-bottom:10px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%], .carousel-nav[_ngcontent-%COMP%]   .carousel-prev[_ngcontent-%COMP%]{width:20px;background-position:7px}.carousel-nav[_ngcontent-%COMP%]   .carousel-next[_ngcontent-%COMP%]{background-position:-74px}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px}}li.items[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;vertical-align:top}ul.item-list.carousel[_ngcontent-%COMP%]{display:inline-block;width:100%;overflow:visible}.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;line-height:1.1;display:inline-block;font-size:16px;letter-spacing:2px}.carousel.viewport[_ngcontent-%COMP%]{display:block;overflow:hidden}.news-block.home-page[_ngcontent-%COMP%]{font-size:0}.news-block.news-list[_ngcontent-%COMP%]{position:relative}ul.news[_ngcontent-%COMP%]   li.row[_ngcontent-%COMP%]{min-height:330px}.thumbnail[_ngcontent-%COMP%]{overflow:hidden;max-height:250px;cursor:pointer;font-size:0;position:relative}.thumbnail[_ngcontent-%COMP%]:empty{height:0;width:100%;max-height:1px}.thumbnail[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:hsla(0,0%,100%,.5);opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}.thumbnail[_ngcontent-%COMP%]:hover:after{opacity:1}.footer[_ngcontent-%COMP%]{overflow:hidden;position:absolute;bottom:0;width:100%;left:0;padding:0 0 20px 20px;-webkit-box-sizing:border-box;box-sizing:border-box}.footer.news-list[_ngcontent-%COMP%]{padding:0 0 15px}.buttonWrapper[_ngcontent-%COMP%]{text-align:center;padding-bottom:30px;padding-top:0}.readMore[_ngcontent-%COMP%]{cursor:pointer;text-transform:uppercase;font-size:17px}.readMore.home-page[_ngcontent-%COMP%]{color:#807c9c}.readMore.news-list[_ngcontent-%COMP%]{color:#359be9;font-weight:400}carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:40px}@media only screen and (min-width:768px){carousel[_ngcontent-%COMP%], news-carousel[_ngcontent-%COMP%]{display:block;height:auto;overflow:hidden;width:100%;position:relative}}.date-wrapper[_ngcontent-%COMP%]{width:100%;padding:20px 0 16px}@media only screen and (min-width:480px) and (max-width:767px){.date-wrapper[_ngcontent-%COMP%]{position:inherit}}@media only screen and (min-width:768px){.date-wrapper[_ngcontent-%COMP%]{padding:32px 0 11px;position:absolute;bottom:0;width:calc(100% - 10px)}}.created[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;font-size:10px;color:#000;margin-top:0;padding:10px 0 0 20px;text-transform:uppercase;font-weight:500}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{margin-top:0;padding:10px 0 10px 35px}}@media only screen and (min-width:768px) and (max-width:1023px){.created[_ngcontent-%COMP%]{letter-spacing:normal}}@media only screen and (max-width:767px){ul.home-page.rows.news[_ngcontent-%COMP%]{margin:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}}.row[_ngcontent-%COMP%]{padding:0 15px}@media only screen and (max-width:767px){.row[_ngcontent-%COMP%]{padding:0;margin-bottom:10px;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}.row.news-list[_ngcontent-%COMP%]{padding-bottom:15px}.row__item[_ngcontent-%COMP%]{padding:0;position:relative}.row__item.exclusive-list[_ngcontent-%COMP%]{padding:0}.row__item.home-page[_ngcontent-%COMP%]{background:#fff;-webkit-box-shadow:0 1px 4px 0 #a1a1a1;box-shadow:0 1px 4px 0 #a1a1a1;margin:0}@media only screen and (max-width:767px){.row__item[_ngcontent-%COMP%]{padding:0 0 5px}}.row__body[_ngcontent-%COMP%]{font-weight:400}.row__body.home-page[_ngcontent-%COMP%]{color:#000;padding-top:5px;padding-right:20px;padding-left:20px}.row__body__title[_ngcontent-%COMP%]{cursor:pointer;font-size:16px;margin:8px 0 0;padding:0;text-align:left;font-weight:700}.row__body__title.home-page[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;letter-spacing:.2px;min-height:14px}.title[_ngcontent-%COMP%]{padding:0 0 50px;text-align:left;font-weight:700}.rows[_ngcontent-%COMP%]{list-style-type:none;padding:0;-webkit-transition:opacity .3s;transition:opacity .3s}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid transparent}.rows.home-page.news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .item-wrapper.col[_ngcontent-%COMP%]{border-bottom:3px solid #f43939}.rows.onScreen[_ngcontent-%COMP%]{opacity:1}.rows.fade[_ngcontent-%COMP%]{opacity:0}@media only screen and (min-width:768px){.rows.fade[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.news-body[_ngcontent-%COMP%]     a{color:#359be9;font-weight:400;text-decoration:underline}.news-body[_ngcontent-%COMP%]     a:hover{text-decoration:none;color:#74c8e9}.pager[_ngcontent-%COMP%]{text-align:center;margin:35px 0}.pager__loader[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:768px){.pager__loader[_ngcontent-%COMP%]{display:block;position:absolute;top:50px;left:50%;width:auto;height:auto;border-left-color:#359be9}}.pager__links[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]{list-style-type:none;display:inline-block;font-size:18px;cursor:pointer;font-weight:700;outline:none;width:25px}.pager__links.active[_ngcontent-%COMP%], .pager__links[_ngcontent-%COMP%]:hover, .pager__navigator.active[_ngcontent-%COMP%], .pager__navigator[_ngcontent-%COMP%]:hover{color:#359be9}.pager__navigator[_ngcontent-%COMP%]{color:#359be9;cursor:pointer;vertical-align:top}.pager__navigator.disabled[_ngcontent-%COMP%]{color:#888;cursor:default}.pager__navigator_a[_ngcontent-%COMP%]{color:inherit;cursor:inherit}.featureNews__layout.g-layout[_ngcontent-%COMP%]{max-width:none;width:100%;padding:0}@media only screen and (min-width:768px){.featureNews__layout.g-layout[_ngcontent-%COMP%]{width:95%;margin:0 auto}}@media only screen and (min-width:1024px){.featureNews__layout.g-layout[_ngcontent-%COMP%]{max-width:1000px;width:100%}}@media only screen and (min-width:1200px){.featureNews__layout.g-layout[_ngcontent-%COMP%]{max-width:1090px;padding:0}}.featureNews__layout.g-layout[_ngcontent-%COMP%]   ul.feature-news[_ngcontent-%COMP%]{margin:0}@media only screen and (min-width:768px){.featureNews__layout.g-layout[_ngcontent-%COMP%]   ul.feature-news[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}}.row__body__category[_ngcontent-%COMP%]{color:#fff;font-size:12px;padding-top:10px;background:#0d0d0d;display:inline-block;width:auto;padding:8px 20px}.no-result[_ngcontent-%COMP%]{color:#000;text-align:center;padding:80px 0 20px;font-size:24px}a.row__body__created.created[_ngcontent-%COMP%]{color:#f43939}',
    ];
  },
  a3xH: function (n, l, t) {
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
  bxZi: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [""];
  },
  gwyr: function (n, l, t) {
    "use strict";
    var e = t("uCY4"),
      o = (t.n(e), t("CH53")),
      i = t("5oXY"),
      u = t("fa0J"),
      a = t("Qbdm"),
      r = t("+rAa"),
      s = t("ZyHc");
    t.d(l, "a", function () {
      return d;
    });
    var d = (function () {
      function n(n, l, t, e, o, i) {
        (this._TagsService = n),
          (this.route = l),
          (this._newsService = t),
          (this._router = e),
          (this.titleService = o),
          (this.pagerService = i),
          (this.tagName = ""),
          (this.type = "news"),
          (this.pagedItems = 0),
          (this.pager = {}),
          (this.pageSize = 3),
          (this.cols = "grid-2_xs-1"),
          (this.showAd = !1),
          (this.storeid = []),
          (this.featuredstoreid = []);
      }
      return (
        (n.prototype.ngOnDestroy = function () {
          (this.news = []),
            (this.featurednews = []),
            (this.offset = 0),
            (this.loadMore = !1),
            (this.shareOpen = !1),
            (this.noResultsMsg = ""),
            (this.featurednoResultsMsg = ""),
            (this.storeid = []),
            (this.featuredstoreid = []);
        }),
        (n.prototype.ngOnInit = function () {
          var n = this;
          this.route.params.forEach(function (l) {
            (n.news = []),
              (n.featurednews = []),
              (n.tagName = l.id),
              (n.offset = 0),
              (n.loadMore = !1),
              (n.shareOpen = !1),
              (n.noResultsMsg = ""),
              (n.featurednoResultsMsg = ""),
              "00s" == n.tagName && (n.tagName = "2000s"),
              (n.storeid = []),
              (n.featuredstoreid = []),
              n.getTier12News(),
              n.getTier12NewsFeatured();
          });
        }),
        (n.prototype.getTier12NewsFeatured = function () {
          var n = this;
          this._TagsService
            .getTier12FeatureNews(this.tagName, this.offset)
            .subscribe(
              function (l) {
                if (
                  ((n.featurednoResultsMsg = ""),
                  l && n.buildFeaturedNewsArray(l),
                  0 === n.featurednews.length)
                )
                  switch (n.tagName) {
                    case "win":
                      n.featurednoResultsMsg =
                        "We don’t have any competitions going right now but check back in future.";
                      break;
                    default:
                      n.featurednoResultsMsg =
                        "No news to display in this section, please try other sections.";
                  }
              },
              function (n) {
                return r.a.doError(n);
              },
              function () {
                for (
                  var l = 0;
                  l < n.featurednews.length && l < n.pageSize;
                  l++
                )
                  n.featurednews[l].field_tags &&
                    (n.featurednews[l].tagNames = n.featurednews[
                      l
                    ].field_tags.split(", "));
              }
            );
        }),
        (n.prototype.getTier12News = function () {
          var n = this;
          this._TagsService.getTier12News(this.tagName, this.offset).subscribe(
            function (l) {
              if (
                ((n.noResultsMsg = ""),
                n.buildNewsArray(l),
                0 === n.news.length)
              )
                switch (n.tagName) {
                  case "win":
                    (n.noResultsMsg =
                      "We don’t have any competitions going right now but check back in future."),
                      (n.showAd = !1);
                    break;
                  default:
                    (n.noResultsMsg =
                      "No news to display in this section, please try other sections."),
                      (n.showAd = !1);
                }
            },
            function (n) {
              return r.a.doError(n);
            },
            function () {
              for (var l = 0; l < n.news.length && l < n.pageSize; l++)
                n.news[l].field_tags &&
                  (n.news[l].tagNames = n.news[l].field_tags.split(", "));
            }
          );
          var l = ["playlists", "musicquiz", "quiz", "win"],
            t = this.tagName.replace(/\s+/g, "").toLowerCase();
          if (-1 != l.indexOf(t)) {
            this.showAd = !0;
            var e = document.getElementById("googletagId");
            null != e && e.parentNode.removeChild(e);
            var o = document.createElement("script");
            o.setAttribute("type", "text/javascript"),
              o.setAttribute("id", "googletagId"),
              document.body.className.match("user-logged-in"),
              (o.innerHTML =
                "if(googletag.destroySlots != undefined){googletag.destroySlots()};var googletag = googletag || {};googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() { var slot1 = googletag.defineSlot('/29011727/Maniacs/" +
                t +
                "', [[300, 250],['fluid']], 'dfp-ad-slot-1').addService(googletag.pubads()).setTargeting('pos', '1');googletag.pubads().setTargeting(\"pageURL\", \"" +
                t +
                '").setTargeting("pagetype", ["index"]);console.log("inside tags ts");googletag.pubads().enableAsyncRendering();googletag.pubads().collapseEmptyDivs(true);googletag.pubads().setCentering(true);googletag.pubads().enableSingleRequest();googletag.enableServices();});'),
              document.getElementsByTagName("head")[0].appendChild(o);
            try {
              var i = document.createElement("script");
              i.innerHTML =
                "googletag.cmd.push(function() { googletag.display('dfp-ad-slot-1'); });";
              var u;
              setTimeout(function () {
                (u = document.getElementById("dfp-ad-slot-1")),
                  i && u.appendChild(i);
              }, 2500);
            } catch (n) {}
          }
        }),
        (n.prototype.shareClick = function () {
          this.shareOpen = !this.shareOpen;
        }),
        (n.prototype.buildNewsArray = function (n) {
          for (var l = 0; l < n.length && l < this.pageSize; l++) {
            var t = n[l].nid;
            -1 == this.storeid.indexOf(t) &&
              (this.storeid.push(t), this.news.push(n[l]));
          }
          this.setLoadMore(n);
        }),
        (n.prototype.buildFeaturedNewsArray = function (n) {
          for (var l = 0; l < n.length && l < this.pageSize; l++) {
            var t = n[l].nid;
            -1 == this.featuredstoreid.indexOf(t) &&
              (this.featuredstoreid.push(t), this.featurednews.push(n[l]));
          }
        }),
        (n.prototype.setLoadMore = function (n) {
          n.length > this.pageSize
            ? (this.loadMore = !0)
            : (this.loadMore = !1);
        }),
        (n.prototype.gotoDetail = function (n) {
          var l;
          (this.selectedNews = n), (l = r.a.getSlug(this.selectedNews.path));
          var t = ["/news", l];
          this._router.navigate(t),
            this.titleService.setTitle(
              r.a.htmlDecode(this.selectedNewsTitle) + " | Maniacs"
            );
        }),
        (n.prototype.getTags = function (n) {
          n = n.trim();
          var l = ["/tags", n];
          this._router.navigate(l);
        }),
        (n.prototype.setTitle = function (n) {
          window.scroll(0, 0), this.titleService.setTitle(r.a.htmlDecode(n));
        }),
        (n.prototype.fetchNextPage = function () {
          (this.offset = this.offset + this.pageSize),
            (this.pageSize = 4),
            this.getTier12News();
        }),
        (n.ctorParameters = function () {
          return [
            { type: o.a },
            { type: i.ActivatedRoute },
            { type: u.a },
            { type: i.Router },
            { type: a.Title },
            { type: s.a },
          ];
        }),
        n
      );
    })();
  },
  jncm: function (n, l, t) {
    "use strict";
    var e = t("+rAa"),
      o = t("5oXY"),
      i = t("uCY4"),
      u = (t.n(i), t("CH53"));
    t.d(l, "a", function () {
      return a;
    });
    var a = (function () {
      function n(n, l) {
        (this.route = n), (this._TagsService = l);
      }
      return (
        (n.prototype.ngOnInit = function () {
          var n = this;
          window.scroll(0, 0),
            (this.type = this.route.snapshot.paramMap.get("type")),
            (this.tagName = this.route.snapshot.paramMap.get("id")),
            "news" == this.type &&
              this._TagsService.getTier12News(this.tagName, 0).subscribe(
                function (l) {
                  n.news = l;
                },
                function (n) {
                  return e.a.doError(n);
                },
                function () {
                  return e.a.doLog("tag detail get tagged news - done");
                }
              );
        }),
        (n.ctorParameters = function () {
          return [{ type: o.ActivatedRoute }, { type: u.a }];
        }),
        n
      );
    })();
  },
});
