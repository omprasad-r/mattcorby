webpackJsonp([0], {
  "09HW": function (n, l, t) {
    "use strict";
    function e(n) {
      return r["ɵvid"](
        0,
        [
          (n()(),
          r["ɵeld"](
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
          (n()(), r["ɵted"](null, ["\n    "])),
          (n()(),
          r["ɵeld"](
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
          (n()(), r["ɵted"](null, ["\n  "])),
        ],
        null,
        null
      );
    }
    function o(n) {
      return r["ɵvid"](
        0,
        [
          (n()(),
          r["ɵeld"](
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
          (n()(), r["ɵted"](null, ["\n      "])),
          (n()(),
          r["ɵeld"](
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
          (n()(), r["ɵted"](null, ["\n      \n    "])),
        ],
        null,
        null
      );
    }
    function i(n) {
      return r["ɵvid"](
        0,
        [
          (n()(),
          r["ɵeld"](
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
          r["ɵeld"](
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
      return r["ɵvid"](
        0,
        [
          (n()(),
          r["ɵeld"](
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
          (n()(), r["ɵted"](null, ["\n  "])),
          (n()(), r["ɵand"](16777216, null, null, 1, null, e)),
          r["ɵdid"](
            16384,
            null,
            0,
            s.NgIf,
            [r.ViewContainerRef, r.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), r["ɵted"](null, ["\n  "])),
          (n()(), r["ɵand"](16777216, null, null, 1, null, o)),
          r["ɵdid"](
            16384,
            null,
            0,
            s.NgIf,
            [r.ViewContainerRef, r.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), r["ɵted"](null, ["\n  "])),
          (n()(), r["ɵted"](null, ["\n  "])),
          (n()(), r["ɵand"](16777216, null, null, 1, null, i)),
          r["ɵdid"](
            16384,
            null,
            0,
            s.NgIf,
            [r.ViewContainerRef, r.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), r["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.facebook), n(l, 6, 0, t.twitter), n(l, 10, 0, t.mailto);
        },
        function (n, l) {
          var t = l.component;
          n(l, 0, 0, r["ɵinlineInterpolate"](1, "share ", t.customClass, ""));
        }
      );
    }
    function a(n) {
      return r["ɵvid"](
        0,
        [
          (n()(), r["ɵand"](16777216, null, null, 1, null, u)),
          r["ɵdid"](
            16384,
            null,
            0,
            s.NgIf,
            [r.ViewContainerRef, r.TemplateRef],
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
    function d(n) {
      return r["ɵvid"](
        0,
        [
          (n()(),
          r["ɵeld"](
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
          r["ɵdid"](4833280, null, 0, p.a, [], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var c = t("bxZi"),
      r = t("3j3K"),
      s = t("2Je8"),
      p = t("FpAZ");
    t.d(l, "b", function () {
      return f;
    }),
      (l.a = a);
    var g = [c.a],
      f = r["ɵcrt"]({ encapsulation: 0, styles: g, data: {} });
    r["ɵccf"](
      "app-social-buttons",
      p.a,
      d,
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
  "1R6s": function (n, l, t) {
    "use strict";
    var e = t("EhR1"),
      o = t("Lxbn"),
      i = t("TELS"),
      u = t("bWKK");
    t.d(l, "a", function () {
      return a;
    });
    var a =
      (e.a,
      o.a,
      i.a,
      u.a,
      (function () {
        function n() {}
        return n;
      })());
  },
  "2Fkg": function (n, l, t) {
    "use strict";
    function e(n) {
      return a["ɵvid"](
        0,
        [
          (n()(),
          a["ɵeld"](0, null, null, 4, "div", [], null, null, null, null, null)),
          (n()(), a["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-detail-block",
            [],
            null,
            null,
            null,
            d.a,
            d.b
          )),
          a["ɵdid"](
            638976,
            null,
            0,
            c.a,
            [r.a, s.ActivatedRoute, s.Router, p.Title],
            { id: [0, "id"], customClass: [1, "customClass"] },
            null
          ),
          (n()(), a["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          n(l, 3, 0, l.component.id, "detail-block");
        },
        null
      );
    }
    function o(n) {
      return a["ɵvid"](
        0,
        [
          a["ɵqud"](402653184, 1, { child: 0 }),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "detail-list"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), a["ɵted"](null, ["\n\t"])),
          (n()(),
          a["ɵeld"](
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
          (n()(), a["ɵted"](null, ["\n\t\t"])),
          (n()(), a["ɵand"](16777216, null, null, 1, null, e)),
          a["ɵdid"](
            16384,
            null,
            0,
            g.NgIf,
            [a.ViewContainerRef, a.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), a["ɵted"](null, ["\t\t\n\t"])),
          (n()(), a["ɵted"](null, ["\n"])),
          (n()(), a["ɵted"](null, ["\n"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [["class", "related"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), a["ɵted"](null, ["\n\t"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            15,
            "div",
            [["class", "g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), a["ɵted"](null, ["\n\t\t"])),
          (n()(),
          a["ɵeld"](0, null, null, 1, "h2", [], null, null, null, null, null)),
          (n()(), a["ɵted"](null, ["Related Videos"])),
          (n()(), a["ɵted"](null, ["\n\t\t"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-block",
            [],
            null,
            [[null, "afterItemSelect"]],
            function (n, l, t) {
              var e = !0,
                o = n.component;
              if ("afterItemSelect" === l) {
                e = !1 !== o.selectContent(t) && e;
              }
              return e;
            },
            m.a,
            m.b
          )),
          a["ɵdid"](
            638976,
            [[1, 4]],
            0,
            h.a,
            [r.a, s.Router, p.Title],
            { cols: [0, "cols"], id: [1, "id"], detailPath: [2, "detailPath"] },
            { afterItemSelect: "afterItemSelect" }
          ),
          (n()(), a["ɵted"](null, ["\n\t\t"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            6,
            "div",
            [["class", "ytfollow-wrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), a["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          a["ɵeld"](
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
          (n()(), a["ɵted"](null, ["FOLLOW ON"])),
          (n()(), a["ɵted"](null, ["  \n\t\t\t"])),
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [
              ["class", "g-ytsubscribe"],
              ["data-channel", "roadrunneraustralia"],
              ["data-count", "default"],
              ["data-layout", "default"],
              ["data-onytevent", "onYtEvent"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), a["ɵted"](null, ["\n\t\t"])),
          (n()(), a["ɵted"](null, ["\n\t"])),
          (n()(), a["ɵted"](null, ["\n"])),
          (n()(), a["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 6, 0, t.id);
          n(l, 18, 0, "grid-3_xs-1", t.id, "/video");
        },
        null
      );
    }
    function i(n) {
      return a["ɵvid"](
        0,
        [
          (n()(),
          a["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-detail",
            [],
            null,
            null,
            null,
            o,
            C
          )),
          a["ɵdid"](
            4308992,
            null,
            0,
            f.a,
            [r.a, s.ActivatedRoute, s.Router],
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
    var u = t("O4Jl"),
      a = t("3j3K"),
      d = t("oao/"),
      c = t("lwaR"),
      r = t("irhF"),
      s = t("5oXY"),
      p = t("Qbdm"),
      g = t("2Je8"),
      f = t("TELS"),
      m = t("b26/"),
      h = t("m+EY");
    t.d(l, "a", function () {
      return x;
    });
    var v = [u.a],
      C = a["ɵcrt"]({ encapsulation: 0, styles: v, data: {} }),
      x = a["ɵccf"]("app-video-detail", f.a, i, { video: "video" }, {}, []);
  },
  "5sTS": function (n, l, t) {
    "use strict";
    var e = t("+rAa"),
      o = t("0FIO");
    t.d(l, "a", function () {
      return i;
    });
    var i = (function () {
      function n(n) {
        (this._taxonomyService = n), (this.switchCarouselTemplate1 = 0);
      }
      return (
        (n.prototype.getTaxonomy = function () {
          var n = this;
          return (
            (this.taxonomy = []),
            this._taxonomyService.getTaxonomy(this.name).subscribe(
              function (l) {
                n.count ? (n.taxonomy = l.slice(0, n.count)) : (n.taxonomy = l);
              },
              function (n) {
                return e.a.doError(n);
              },
              function () {
                return e.a.doLog("taxonomy list get taxonomy - done");
              }
            ),
            this.taxonomy
          );
        }),
        (n.prototype.ngOnInit = function () {
          this.taxonomy = this.getTaxonomy();
        }),
        (n.ctorParameters = function () {
          return [{ type: o.a }];
        }),
        n
      );
    })();
  },
  AMmL: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      "h2[_ngcontent-%COMP%]{padding:0 0 15px;color:#000;display:inline-block;color:#030303;font-family:Roboto;font-size:22px;margin:5px 0}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{font-size:22px;padding:0;line-height:1.4}}.created[_ngcontent-%COMP%]{display:none;font-size:12px;font-style:normal;text-transform:uppercase;font-weight:400;color:#807c9c;padding-bottom:30px}@media only screen and (min-width:768px){.created[_ngcontent-%COMP%]{padding-bottom:0}}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{font-size:16px}}.header[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]{display:inline-block;width:100%;font-size:15px;letter-spacing:1px;margin-bottom:10px;color:#888;text-transform:uppercase}@media only screen and (max-width:767px){.header[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]{text-align:center}}.body[_ngcontent-%COMP%]{padding-top:25px;padding-bottom:12px;font-size:16px;font-weight:600;color:#f6f5fd;display:none}.landing-block[_ngcontent-%COMP%]{padding-bottom:0;position:relative}.landing-block.featured[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%], .landing-block.featured[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.landing-block[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{width:100%;display:inline-block}@media only screen and (min-width:768px){.landing-block[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{width:60%;margin-right:4%}}.landing-block[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:35%}.landing-block[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-weight:600;line-height:1.2;text-transform:uppercase;padding:0 0 15px;display:inline-block;color:#030303;font-family:Roboto;font-size:22px;margin:5px 0;cursor:default}@media only screen and (max-width:767px){.landing-block[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{top:0;padding-top:10px;width:100%;left:0;position:relative}}.landing-block[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .featured[_ngcontent-%COMP%]{color:#f43939;font-size:12px;padding-top:10px;font-family:Roboto;font-weight:400;font-style:normal;letter-spacing:.2px;text-align:left}.landing-block[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]{padding:0;display:none}.featured[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%]{display:none}.detail-block[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{margin-bottom:20px}a.shareText[_ngcontent-%COMP%]{background:#000;padding:10px 0}.detail-block[_ngcontent-%COMP%]   a.shareText[_ngcontent-%COMP%]{background:#000;padding:10px 2px;margin-top:20px;display:inline-block}",
    ];
  },
  "E+F6": function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      ".g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-size:30px;font-weight:600;line-height:1.2;text-transform:uppercase;color:#807c9c;padding:0}.g-layout[_ngcontent-%COMP%]:first-child, .g-layout[_ngcontent-%COMP%]:last-child{padding-bottom:0;padding-top:20px}.category-list[_ngcontent-%COMP%]{padding-top:14px}.g-layout.content[_ngcontent-%COMP%]{position:relative}@media only screen and (max-width:767px){.g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}h2[_ngcontent-%COMP%]{font-size:22px}}",
    ];
  },
  EhR1: function (n, l, t) {
    "use strict";
    var e = t("5oXY"),
      o = t("ZyHc");
    t.d(l, "a", function () {
      return i;
    });
    var i = (function () {
      function n(n, l) {
        (this.pagerService = n), (this.route = l), (this.pagers = !1);
      }
      return (
        (n.ctorParameters = function () {
          return [{ type: o.a }, { type: e.Router }];
        }),
        n
      );
    })();
  },
  FFpg: function (n, l, t) {
    "use strict";
    function e(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            22,
            "div",
            [["class", "category-list"]],
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
            4,
            "div",
            [["class", "g-layout"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n    "])),
          (n()(),
          u["ɵeld"](0, null, null, 1, "h2", [], null, null, null, null, null)),
          (n()(), u["ɵted"](null, ["VIDEOS"])),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "taxonomy-list"]],
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
            [["class", "g-layout"]],
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
            "app-taxonomy-list",
            [
              ["blockTitle", "Video Category"],
              ["name", "video"],
              ["path", "video/category"],
            ],
            null,
            null,
            null,
            a.a,
            a.b
          )),
          u["ɵdid"](
            114688,
            null,
            0,
            d.a,
            [c.a],
            {
              name: [0, "name"],
              blockTitle: [1, "blockTitle"],
              path: [2, "path"],
              defaultLink: [3, "defaultLink"],
            },
            null
          ),
          (n()(), u["ɵted"](null, ["\n    "])),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "g-layout content"]],
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
            1,
            "app-video-block",
            [],
            null,
            null,
            null,
            r.a,
            r.b
          )),
          u["ɵdid"](
            638976,
            null,
            0,
            s.a,
            [p.a, g.Router, f.Title],
            {
              cols: [0, "cols"],
              category: [1, "category"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), u["ɵted"](null, ["\n  "])),
          (n()(), u["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 13, 0, "video", "Video Category", "video/category", "/video");
          n(l, 20, 0, "grid-3_xs-2", t.categoryName, "category-block");
        },
        null
      );
    }
    function o(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-category",
            [],
            null,
            null,
            null,
            e,
            v
          )),
          u["ɵdid"](
            114688,
            null,
            0,
            m.a,
            [g.Router, g.ActivatedRoute],
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
    var i = t("E+F6"),
      u = t("3j3K"),
      a = t("z4gK"),
      d = t("5sTS"),
      c = t("0FIO"),
      r = t("b26/"),
      s = t("m+EY"),
      p = t("irhF"),
      g = t("5oXY"),
      f = t("Qbdm"),
      m = t("bWKK");
    t.d(l, "a", function () {
      return C;
    });
    var h = [i.a],
      v = u["ɵcrt"]({ encapsulation: 0, styles: h, data: {} }),
      C = u["ɵccf"]("app-video-category", m.a, o, {}, {}, []);
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
  IuNr: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      ".landing-list[_ngcontent-%COMP%]{display:block;padding-bottom:40px}.landing-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}.g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .landing-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#807c9c;text-transform:uppercase;font-weight:600}.g-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;font-size:30px;line-height:1.2;padding:0;display:inline-block;margin-top:0}.videoPanelCon[_ngcontent-%COMP%]{padding:0}@media only screen and (min-width:768px){.videoPanelCon[_ngcontent-%COMP%]{padding-bottom:40px;padding-top:58px}}.videos[_ngcontent-%COMP%]{font-weight:600}app-video-block[_ngcontent-%COMP%]{display:inline-block;width:100%;margin-top:20px}span#youtubeFollow[_ngcontent-%COMP%]{display:none;line-height:0;float:right}@media only screen and (min-width:768px){span#youtubeFollow[_ngcontent-%COMP%]{display:inline-block}}.page-header[_ngcontent-%COMP%]{max-width:968px;margin:0 auto;padding:30px 0 15px;text-align:center;font-size:50px;text-transform:uppercase;color:#18d77c;position:relative}@media only screen and (min-width:768px){#youtubeFollow[_ngcontent-%COMP%]{display:inline-block;position:absolute;right:0;top:16px}}.video-title[_ngcontent-%COMP%]{color:#f43939;font-size:57px;font-weight:900;text-transform:uppercase}.videoLanding[_ngcontent-%COMP%]   h2.mailinglist[_ngcontent-%COMP%]{display:block;color:#fff;text-align:center;letter-spacing:1px;font-weight:400;padding:14px 0 7px;font-size:36px}@media only screen and (min-width:768px){.landing-list[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:0;padding-bottom:44px;max-width:1150px;width:100%;padding:0 10px}.videoPanelCon[_ngcontent-%COMP%] + .g-layout[_ngcontent-%COMP%]{padding-top:60px;position:relative}}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px}}@media only screen and (max-width:767px){.g-layout[_ngcontent-%COMP%]{padding:0 20px}}",
    ];
  },
  Lxbn: function (n, l, t) {
    "use strict";
    var e = t("5oXY");
    t.d(l, "a", function () {
      return o;
    });
    var o = (function () {
      function n(n) {
        this.route = n;
      }
      return (
        (n.prototype.ngAfterViewInit = function () {
          var n = document
            .createRange()
            .createContextualFragment(
              '<script src = "https://apis.google.com/js/platform.js"></script>'
            );
          document.getElementById("youtubeFollow").appendChild(n);
        }),
        (n.prototype.ngOnInit = function () {
          window.scroll(0, 0);
        }),
        (n.prototype.onYtEvent = function (n) {
          "subscribe" == n.eventType || n.eventType,
            window.console && window.console.log("YT event: ", n);
        }),
        (n.ctorParameters = function () {
          return [{ type: e.ActivatedRoute }];
        }),
        n
      );
    })();
  },
  O4Jl: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      "h2[_ngcontent-%COMP%]{text-align:left;font-size:30px;font-weight:600;line-height:1.2;text-transform:uppercase;font-size:22px;color:#1b214e;margin-top:48px;padding-bottom:12px;display:inline-block;color:#807c9c}@media only screen and (min-width:768px){h2[_ngcontent-%COMP%]{margin:0;padding:0}}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}}.created[_ngcontent-%COMP%]{font-size:12px;font-style:normal;text-transform:uppercase;font-weight:400;color:#807c9c;padding-bottom:32px}@media only screen and (min-width:768px){.created[_ngcontent-%COMP%]{padding-bottom:60px}}.body[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:80px;font-size:14px}.detail-list[_ngcontent-%COMP%]{margin-bottom:80px}.detail-list[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{position:relative;padding-top:15px;padding-bottom:64px}@media only screen and (min-width:768px){.detail-list[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:0;padding-bottom:50px}}@media only screen and (max-width:767px){.detail-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;margin-top:16px}}.detail-list[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]{background:#000;padding:10px}.detail-list[_ngcontent-%COMP%] .responsive-video-container{margin:50px auto 20px}@media only screen and (min-width:1024px){.detail-list[_ngcontent-%COMP%] .responsive-video-container{margin:80px auto 50px}}.detail-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:0 0 10px}h3[_ngcontent-%COMP%]{color:#1b214e}.related[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:30px;padding-bottom:45px}@media only screen and (min-width:768px){.related[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{padding-top:70px;padding-bottom:50px;max-width:1130px;padding:0;width:100%}}.related[_ngcontent-%COMP%]   .g-layout[_ngcontent-%COMP%]{position:relative}.related[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#807c9c;font-size:14px;text-transform:uppercase;font-weight:600}.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:inline-block;color:#030303;font-family:Roboto;font-size:22px}@media only screen and (max-width:767px){.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:0}}@media only screen and (min-width:768px){.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-left:20px}}.ytfollow[_ngcontent-%COMP%]{position:static}@media only screen and (min-width:768px){.ytfollow[_ngcontent-%COMP%]{position:absolute;top:65px;left:20px;width:auto;height:auto}}@media only screen and (max-width:767px){.ytfollow[_ngcontent-%COMP%]{display:table-cell}}app-video-block[_ngcontent-%COMP%]{display:inline-block;width:100%;margin-top:20px}@mediaonly screen and (max-width:767px){.ytfollow-wrapper[_ngcontent-%COMP%]{padding:10px 0;text-align:center;border-top:1px solid;border-bottom:1px solid;display:table;width:100%;margin-top:20px;margin-bottom:20px}.ytfollow-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;text-align:right}}.videoDetail[_ngcontent-%COMP%]   h2.mailinglist[_ngcontent-%COMP%]{display:block;color:#fff;text-align:center;letter-spacing:1px;font-weight:400;padding:14px 0 7px;font-size:36px;font-family:Roboto}.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{font-weight:700}.ytfollow-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.breadcrumb-wrapper.video-detail[_ngcontent-%COMP%]{background:#040514}",
    ];
  },
  QVPo: function (n, l, t) {
    "use strict";
    function e(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            9,
            "div",
            [["class", "page-header"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "video-title"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["Videos"])),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            3,
            "div",
            [
              ["class", "youtubeFollow"],
              ["id", "youtubeFollow"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\t\n\t\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [
              ["class", "g-ytsubscribe"],
              ["data-channel", "roadrunneraustralia"],
              ["data-count", "default"],
              ["data-layout", "default"],
              ["data-onytevent", "onYtEvent"],
            ],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(), u["ɵted"](null, ["\n"])),
          (n()(), u["ɵted"](null, ["\n"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            16,
            "div",
            [["class", "landing-list"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            7,
            "div",
            [["class", "videoPanelCon"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), u["ɵted"](null, ["\n\t\t"])),
          (n()(),
          u["ɵeld"](
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
          (n()(), u["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-detail-block",
            [],
            null,
            null,
            null,
            a.a,
            a.b
          )),
          u["ɵdid"](
            638976,
            null,
            0,
            d.a,
            [c.a, r.ActivatedRoute, r.Router, s.Title],
            {
              customClass: [0, "customClass"],
              featured: [1, "featured"],
              frontpage: [2, "frontpage"],
            },
            null
          ),
          (n()(), u["ɵted"](null, ["\n\t\t"])),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(),
          u["ɵeld"](
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
          (n()(), u["ɵted"](null, ["\n\t\t"])),
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-block",
            [],
            null,
            null,
            null,
            p.a,
            p.b
          )),
          u["ɵdid"](
            638976,
            null,
            0,
            g.a,
            [c.a, r.Router, s.Title],
            {
              cols: [0, "cols"],
              detailPath: [1, "detailPath"],
              customClass: [2, "customClass"],
            },
            null
          ),
          (n()(), u["ɵted"](null, ["\n\t"])),
          (n()(), u["ɵted"](null, ["\n"])),
          (n()(), u["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 18, 0, "landing-block featured", !0, !0);
          n(l, 25, 0, "grid-3_xs-1", t.path, "listPanel");
        },
        null
      );
    }
    function o(n) {
      return u["ɵvid"](
        0,
        [
          (n()(),
          u["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-list",
            [],
            null,
            null,
            null,
            e,
            h
          )),
          u["ɵdid"](4308992, null, 0, f.a, [r.ActivatedRoute], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var i = t("IuNr"),
      u = t("3j3K"),
      a = t("oao/"),
      d = t("lwaR"),
      c = t("irhF"),
      r = t("5oXY"),
      s = t("Qbdm"),
      p = t("b26/"),
      g = t("m+EY"),
      f = t("Lxbn");
    t.d(l, "a", function () {
      return v;
    });
    var m = [i.a],
      h = u["ɵcrt"]({ encapsulation: 0, styles: m, data: {} }),
      v = u["ɵccf"]("app-video-list", f.a, o, {}, {}, []);
  },
  "R/1V": function (n, l, t) {
    "use strict";
    Object.defineProperty(l, "__esModule", { value: !0 });
    var e = t("3j3K"),
      o = t("1R6s"),
      i = t("z0BH"),
      u = t("QVPo"),
      a = t("2Fkg"),
      d = t("FFpg"),
      c = t("2Je8"),
      r = t("NVOs"),
      s = t("Fzro"),
      p = t("irhF"),
      g = t("5oXY"),
      f = t("Dkvd"),
      m = t("vumo"),
      h = t("fAE3"),
      v = t("EhR1"),
      C = t("Lxbn"),
      x = t("TELS"),
      y = t("bWKK");
    t.d(l, "VideoModuleNgFactory", function () {
      return b;
    });
    var b = e["ɵcmf"](o.a, [], function (n) {
      return e["ɵmod"]([
        e["ɵmpd"](
          512,
          e.ComponentFactoryResolver,
          e["ɵCodegenComponentFactoryResolver"],
          [
            [8, [i.a, u.a, a.a, d.a]],
            [3, e.ComponentFactoryResolver],
            e.NgModuleRef,
          ]
        ),
        e["ɵmpd"](4608, c.NgLocalization, c.NgLocaleLocalization, [
          e.LOCALE_ID,
        ]),
        e["ɵmpd"](4608, r.a, r.a, []),
        e["ɵmpd"](4608, s.a, s.a, []),
        e["ɵmpd"](4608, s.b, s.c, []),
        e["ɵmpd"](5120, s.d, s.e, []),
        e["ɵmpd"](4608, s.f, s.f, [s.a, s.b, s.d]),
        e["ɵmpd"](4608, s.g, s.h, []),
        e["ɵmpd"](5120, s.i, s.j, [s.f, s.g]),
        e["ɵmpd"](4608, s.k, s.k, []),
        e["ɵmpd"](4608, s.l, s.m, [s.k, s.b]),
        e["ɵmpd"](5120, s.n, s.o, [s.l, s.g]),
        e["ɵmpd"](4608, p.a, p.a, [s.i]),
        e["ɵmpd"](512, c.CommonModule, c.CommonModule, []),
        e["ɵmpd"](512, r.b, r.b, []),
        e["ɵmpd"](512, r.c, r.c, []),
        e["ɵmpd"](512, s.p, s.p, []),
        e["ɵmpd"](512, s.q, s.q, []),
        e["ɵmpd"](512, g.RouterModule, g.RouterModule, [
          [2, g["ɵa"]],
          [2, g.Router],
        ]),
        e["ɵmpd"](512, f.c, f.c, [[2, f.a]]),
        e["ɵmpd"](512, m.a, m.a, []),
        e["ɵmpd"](512, h.a, h.a, []),
        e["ɵmpd"](512, o.a, o.a, []),
        e["ɵmpd"](
          1024,
          g.ROUTES,
          function () {
            return [
              [
                {
                  path: "",
                  component: v.a,
                  data: { breadcrumb: "Video" },
                  children: [
                    { path: "", component: C.a, data: { breadcrumb: "" } },
                    {
                      path: ":id",
                      component: x.a,
                      data: { breadcrumb: "Video detail" },
                    },
                    {
                      path: "category/:id",
                      component: y.a,
                      data: { breadcrumb: "Video category" },
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
  ReYO: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      "h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase}",
    ];
  },
  TELS: function (n, l, t) {
    "use strict";
    var e = t("irhF"),
      o = t("5oXY"),
      i = t("+rAa");
    t.d(l, "a", function () {
      return u;
    });
    var u = (function () {
      function n(n, l, t) {
        (this._videoService = n), (this.route = l), (this.router = t);
      }
      return (
        (n.prototype.ngAfterViewInit = function () {
          document
            .createRange()
            .createContextualFragment(
              '<script src = "https://apis.google.com/js/platform.js"></script>'
            );
        }),
        (n.prototype.ngOnInit = function () {
          var n = this;
          document
            .getElementsByTagName("body")[0]
            .classList.add("content-page"),
            this.route.params.forEach(function (l) {
              (n.id = i.a.getNID(l.id)), i.a.addEditLink(n.id);
            }),
            window.scroll(0, 0);
        }),
        (n.prototype.selectContent = function (n) {
          (this.id = i.a.getNID(n.id)), this.child.getVideos(this.id);
        }),
        (n.ctorParameters = function () {
          return [
            { type: e.a },
            { type: o.ActivatedRoute },
            { type: o.Router },
          ];
        }),
        n
      );
    })();
  },
  XHJY: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      "ul.taxonomy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:0;text-transform:uppercase}ul.taxonomy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{margin-left:0}ul.taxonomy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#807c9c;font-weight:600;font-size:14px}ul.taxonomy[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%]{color:#1b214e;font-weight:700}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n-1)   .photoContent.col[_ngcontent-%COMP%]{margin-right:2%}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n)   .photoContent.col[_ngcontent-%COMP%]{margin-left:2%}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   .photoContent.col[_ngcontent-%COMP%]{background:#fff;padding:0}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{PADDING:15px}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .row__thumbnail.blockTitle[_ngcontent-%COMP%]{color:#000;font-size:14px}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .row__thumbnail.Created[_ngcontent-%COMP%]{color:#f43939;font-size:12px}ul.galleryPageTaxonomy[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]   .row__thumbnail.viewMoreLink[_ngcontent-%COMP%]{display:inline-block;border:1px solid #000;color:#f43939;padding:10px 20px;font-size:18px}",
    ];
  },
  "b26/": function (n, l, t) {
    "use strict";
    function e(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](0, null, null, 1, "h2", [], null, null, null, null, null)),
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            0,
            "span",
            [],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.component.headerText);
        }
      );
    }
    function o(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "thumbnail"]],
            [[8, "innerHTML", 1]],
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
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.field_video_thumbnail);
        }
      );
    }
    function i(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            0,
            "div",
            [["class", "thumbnail"]],
            [[8, "innerHTML", 1]],
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
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.thumbnail);
        }
      );
    }
    function u(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            0,
            "h3",
            [],
            [[8, "innerHTML", 1]],
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
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.parent.context.$implicit.title);
        }
      );
    }
    function a(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
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
          (n()(), g["ɵted"](null, ["", ""])),
        ],
        null,
        function (n, l) {
          n(l, 1, 0, l.parent.context.$implicit.created);
        }
      );
    }
    function d(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            13,
            "li",
            [["class", "col"]],
            [[2, "selected", null]],
            null,
            null,
            null,
            null
          )),
          (n()(), g["ɵted"](null, ["\n      "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, o)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["  \n      "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, i)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["   \n      "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, u)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["\n      "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, a)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["\n    "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, l.context.$implicit.field_video_thumbnail),
            n(l, 6, 0, !l.context.$implicit.field_video_thumbnail),
            n(l, 9, 0, !t.minimal),
            n(l, 12, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(l, 0, 0, l.context.$implicit === t.selectedVideo);
        }
      );
    }
    function c(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
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
          (n()(), g["ɵted"](null, ["\n      "])),
          (n()(),
          g["ɵeld"](
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
          (n()(), g["ɵted"](null, ["load more"])),
          (n()(), g["ɵted"](null, ["\n  "])),
        ],
        null,
        null
      );
    }
    function r(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
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
          (n()(), g["ɵted"](null, ["\n  "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, e)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["\n  "])),
          (n()(),
          g["ɵeld"](
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
          (n()(), g["ɵted"](null, ["\n    "])),
          (n()(), g["ɵand"](16777216, null, null, 2, null, d)),
          g["ɵdid"](
            802816,
            null,
            0,
            f.NgForOf,
            [g.ViewContainerRef, g.TemplateRef, g.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          g["ɵpid"](0, f.SlicePipe, []),
          (n()(), g["ɵted"](null, ["\n  "])),
          (n()(), g["ɵted"](null, ["\n    "])),
          (n()(), g["ɵand"](16777216, null, null, 1, null, c)),
          g["ɵdid"](
            16384,
            null,
            0,
            f.NgIf,
            [g.ViewContainerRef, g.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), g["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.headerText),
            n(
              l,
              8,
              0,
              g["ɵunv"](
                l,
                8,
                0,
                g["ɵnov"](l, 9).transform(t.videos, 0, t.count)
              )
            ),
            n(l, 13, 0, t.loadMore);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            0,
            0,
            g["ɵinlineInterpolate"](1, "video block ", t.customClass, "")
          ),
            n(l, 5, 0, g["ɵinlineInterpolate"](1, "videos ", t.cols, ""));
        }
      );
    }
    function s(n) {
      return g["ɵvid"](
        0,
        [
          (n()(),
          g["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-block",
            [],
            null,
            null,
            null,
            r,
            y
          )),
          g["ɵdid"](638976, null, 0, m.a, [h.a, v.Router, C.Title], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var p = t("tq5f"),
      g = t("3j3K"),
      f = t("2Je8"),
      m = t("m+EY"),
      h = t("irhF"),
      v = t("5oXY"),
      C = t("Qbdm");
    t.d(l, "b", function () {
      return y;
    }),
      (l.a = r);
    var x = [p.a],
      y = g["ɵcrt"]({ encapsulation: 0, styles: x, data: {} });
    g["ɵccf"](
      "app-video-block",
      m.a,
      s,
      {
        count: "count",
        cols: "cols",
        id: "id",
        detailPath: "detailPath",
        category: "category",
        customClass: "customClass",
        headerText: "headerText",
        minimal: "minimal",
        tag: "tag",
      },
      { afterItemSelect: "afterItemSelect" },
      []
    );
  },
  bWKK: function (n, l, t) {
    "use strict";
    var e = t("5oXY");
    t.d(l, "a", function () {
      return o;
    });
    var o = (function () {
      function n(n, l) {
        (this._router = n), (this.route = l);
      }
      return (
        (n.prototype.ngOnInit = function () {
          var n = this;
          this.route.params.forEach(function (l) {
            n.categoryName = l.id;
          });
        }),
        (n.ctorParameters = function () {
          return [{ type: e.Router }, { type: e.ActivatedRoute }];
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
  lwaR: function (n, l, t) {
    "use strict";
    var e = t("Qbdm"),
      o = t("+rAa"),
      i = t("irhF"),
      u = t("5oXY");
    t.d(l, "a", function () {
      return a;
    });
    var a = (function () {
      function n(n, l, t, e) {
        (this._videoService = n),
          (this.route = l),
          (this.router = t),
          (this._titleService = e),
          (this.featured = !1),
          (this.frontpage = !1),
          (this.minimal = !1),
          (this.loading = !1),
          (this.tempId = ""),
          (this.firstTime = !0),
          (this.youtube_video_id = "");
      }
      return (
        (n.prototype.ngOnInit = function () {
          this.loadVideo(), (this.tempId = this.id), (this.firstTime = !1);
        }),
        (n.prototype.ngOnChanges = function () {
          this.firstTime || this.loadVideo();
        }),
        (n.prototype.loadVideo = function () {
          var n = this;
          this._videoService.getVideo(this.id, this.frontpage).subscribe(
            function (l) {
              0 == l.length &&
                n.router.navigateByUrl("404", { skipLocationChange: !0 }),
                (n.video = l[0]);
            },
            function (n) {
              return o.a.doError(n);
            },
            function () {
              return o.a.doLog("video detail block load video - done");
            }
          );
        }),
        (n.prototype.gotoDetail = function (n) {
          var l;
          (this.selectedVideo = n), (l = o.a.getSlug(this.selectedVideo.path));
          var t = ["/video", l];
          this._titleService.setTitle(
            o.a.htmlDecode(this.selectedVideo.title) + " | Maniacs"
          ),
            this.router.navigate(t);
        }),
        (n.ctorParameters = function () {
          return [
            { type: i.a },
            { type: u.ActivatedRoute },
            { type: u.Router },
            { type: e.Title },
          ];
        }),
        n
      );
    })();
  },
  "m+EY": function (n, l, t) {
    "use strict";
    var e = t("3j3K"),
      o = t("5oXY"),
      i = t("Qbdm"),
      u = t("+rAa"),
      a = t("irhF");
    t.d(l, "a", function () {
      return d;
    });
    var d = (function () {
      function n(n, l, t) {
        (this._videoService = n),
          (this._router = l),
          (this._titleService = t),
          (this.detailPath = "/video"),
          (this.minimal = !1),
          (this.pageSize = 3),
          (this.moreVideo = 0),
          (this.loadMore = !1),
          (this.tag = ""),
          (this.afterItemSelect = new e.EventEmitter());
      }
      return (
        (n.prototype.getVideos = function (n) {
          var l = this;
          return (
            n ? (this.moreVideo = 0) : (n = this.id),
            (this.selectedVideo = void 0),
            (this.videos = []),
            this._videoService.getVideos(this.tag, this.category, n).subscribe(
              function (n) {
                l.buildVideosArray(n);
              },
              function (n) {
                return u.a.doError(n);
              },
              function () {
                return u.a.doLog("video block get vidoes - done");
              }
            ),
            this.videos
          );
        }),
        (n.prototype.gotoDetail = function (n) {
          var l;
          (this.selectedVideo = n), (l = u.a.getSlug(this.selectedVideo.path));
          var t = ["/video", l];
          this._router.navigate(t),
            this._titleService.setTitle(
              u.a.htmlDecode(this.selectedVideo.title) + " | Maniacs"
            ),
            this.afterItemSelect.emit({ id: l });
        }),
        (n.prototype.ngOnInit = function () {
          (this.videos = this.getVideos()),
            this.cols || (this.cols = "grid-5_xs-1");
        }),
        (n.prototype.ngOnChanges = function () {}),
        (n.prototype.buildVideosArray = function (n) {
          for (var l = 0; l < n.length && l < this.pageSize; l++)
            this.videos.push(n[l]);
          this.setLoadMore(n);
        }),
        (n.prototype.setLoadMore = function (n) {
          n.length > this.pageSize
            ? (this.loadMore = !0)
            : (this.loadMore = !1);
        }),
        (n.prototype.fetchNextPage = function () {
          var n = this;
          (this.moreVideo = this.moreVideo + this.pageSize),
            this._videoService
              .getVideos(this.tag, this.category, this.id, this.moreVideo)
              .subscribe(
                function (l) {
                  n.buildVideosArray(l);
                },
                function (n) {
                  return u.a.doError(n);
                },
                function () {
                  return u.a.doLog("video block fetch next page - done");
                }
              );
        }),
        (n.ctorParameters = function () {
          return [{ type: a.a }, { type: o.Router }, { type: i.Title }];
        }),
        n
      );
    })();
  },
  "oao/": function (n, l, t) {
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
            1,
            "div",
            [["class", "featured"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["featured video"])),
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
            9,
            "div",
            [["class", "header"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
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
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            0,
            "h2",
            [],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, e)),
          s["ɵdid"](
            16384,
            null,
            0,
            p.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          n(l, 8, 0, l.component.featured);
        },
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, t.video.created), n(l, 5, 0, t.video.title);
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
            0,
            "div",
            [["class", "body"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
        ],
        null,
        function (n, l) {
          n(l, 0, 0, l.component.video.body);
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
            10,
            "div",
            [["class", "sharewrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          s["ɵeld"](
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
          (n()(), s["ɵted"](null, ["Share this on "])),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "a",
            [["class", "shareText"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t\t\t"])),
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
            g.a,
            g.b
          )),
          s["ɵdid"](
            4833280,
            null,
            0,
            f.a,
            [],
            { link: [0, "link"], textToshare: [1, "textToshare"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 8, 0, t.video.path, t.video.title);
        },
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
            22,
            "div",
            [],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(),
          s["ɵeld"](
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
                    s["ɵnov"](n, 3).onClick(
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
          s["ɵdid"](
            671744,
            null,
            0,
            m.RouterLinkWithHref,
            [m.Router, m.ActivatedRoute, p.LocationStrategy],
            { target: [0, "target"], routerLink: [1, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["Edit"])),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            4,
            "div",
            [["class", "video"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n\t\t\t"])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "div",
            [["class", "responsive-video-container"]],
            [[8, "innerHTML", 1]],
            null,
            null,
            null,
            null
          )),
          s["ɵppd"](2),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, o)),
          s["ɵdid"](
            16384,
            null,
            0,
            p.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, i)),
          s["ɵdid"](
            16384,
            null,
            0,
            p.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\t\t"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, u)),
          s["ɵdid"](
            16384,
            null,
            0,
            p.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n\t"])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 3, 0, "_blank", n(l, 4, 0, "/node/" + t.video.nid + "/edit")),
            n(l, 15, 0, !t.minimal),
            n(l, 18, 0, !t.minimal),
            n(l, 21, 0, !t.minimal);
        },
        function (n, l) {
          var t = l.component;
          n(l, 2, 0, s["ɵnov"](l, 3).target, s["ɵnov"](l, 3).href),
            n(
              l,
              10,
              0,
              s["ɵunv"](
                l,
                10,
                0,
                n(l, 11, 0, s["ɵnov"](l.parent, 0), t.video.field_music, "html")
              )
            );
        }
      );
    }
    function d(n) {
      return s["ɵvid"](
        0,
        [
          s["ɵpid"](0, h.a, [v.DomSanitizer]),
          (n()(),
          s["ɵeld"](
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
          (n()(), s["ɵted"](null, ["\n\n\t"])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, a)),
          s["ɵdid"](
            16384,
            null,
            0,
            p.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n"])),
          (n()(), s["ɵted"](null, ["\n\n"])),
        ],
        function (n, l) {
          n(l, 4, 0, l.component.video);
        },
        function (n, l) {
          var t = l.component;
          n(l, 1, 0, s["ɵinlineInterpolate"](1, "block ", t.customClass, ""));
        }
      );
    }
    function c(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-video-detail-block",
            [],
            null,
            null,
            null,
            d,
            b
          )),
          s["ɵdid"](
            638976,
            null,
            0,
            C.a,
            [x.a, m.ActivatedRoute, m.Router, v.Title],
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
    var r = t("AMmL"),
      s = t("3j3K"),
      p = t("2Je8"),
      g = t("09HW"),
      f = t("FpAZ"),
      m = t("5oXY"),
      h = t("nbor"),
      v = t("Qbdm"),
      C = t("lwaR"),
      x = t("irhF");
    t.d(l, "b", function () {
      return b;
    }),
      (l.a = d);
    var y = [r.a],
      b = s["ɵcrt"]({ encapsulation: 0, styles: y, data: {} });
    s["ɵccf"](
      "app-video-detail-block",
      C.a,
      c,
      {
        id: "id",
        customClass: "customClass",
        featured: "featured",
        frontpage: "frontpage",
        minimal: "minimal",
      },
      {},
      []
    );
  },
  tq5f: function (n, l, t) {
    "use strict";
    t.d(l, "a", function () {
      return e;
    });
    var e = [
      '.thumbnail[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer;font-size:0;position:relative}.thumbnail[_ngcontent-%COMP%]:empty{height:0;padding-top:56%;width:100%;max-height:1px}.thumbnail[_ngcontent-%COMP%]:hover:after{position:absolute;top:calc(50% - 24px);left:calc(50% - 22.5px);width:45px;height:48px;background:url("/sites/g/files/g2000007366/files/2017-11/play.png") no-repeat 0 0 transparent;display:inline-block;cursor:pointer;content:""}.thumbnail[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(244,57,57,.5)}.created[_ngcontent-%COMP%], .play_button[_ngcontent-%COMP%]{display:none}.created[_ngcontent-%COMP%]{font-size:12px;font-style:normal;text-transform:uppercase;font-weight:400;color:#807c9c}@media only screen and (max-width:767px){.created[_ngcontent-%COMP%]{font-size:12px;padding-bottom:20px}}div[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{font-size:30px;font-size:22px;padding:0;display:inline-block}h2[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{text-align:left;font-weight:600;line-height:1.2;text-transform:uppercase;color:#807c9c}h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{font-size:30px;font-size:11px}@media only screen and (max-width:767px){h2[_ngcontent-%COMP%]{padding-bottom:20px}h2[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}}.col[_ngcontent-%COMP%]{padding-bottom:0;margin-bottom:0}.category-block[_ngcontent-%COMP%]{padding-bottom:60px}.category-block[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:0;padding-bottom:60px}@media only screen and (max-width:767px){.category-block[_ngcontent-%COMP%]{padding-bottom:0}.category-block[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px}}@mediaonly screen and (max-width:767px){.g-layout[_ngcontent-%COMP%] + h2[_ngcontent-%COMP%]{font-size:20px}}@mediaonly screen and (min-width:768px){.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:inline-block}.related[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#807c9c;font-size:14px;text-transform:uppercase;font-weight:600}.video.block.listPanel[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%;vertical-align:top;display:inline-block;padding:0;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:20px}}ul.videos[_ngcontent-%COMP%]{list-style-type:none;padding:0;font-weight:600;display:inline-block;width:100%;margin:0}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:5px;cursor:pointer;line-height:1.25;color:#030303;font-family:Roboto;font-size:16px;text-transform:capitalize;font-weight:500}@media only screen and (max-width:767px){ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:12px}}ul.videos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover{color:#f43939}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0}@media only screen and (min-width:768px){ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 20px;padding-bottom:45px}}ul.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;cursor:pointer}.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}@media only screen and (max-width:767px){.videos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-bottom:20px!important}}.pager__viewMore.viewMore.buttonWrapper[_ngcontent-%COMP%]{margin:0 auto;text-align:center}',
    ];
  },
  z0BH: function (n, l, t) {
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
          (n()(), u["ɵted"](null, ["     "])),
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
          u["ɵeld"](0, null, null, 2, "app-video", [], null, null, null, e, g)),
          u["ɵprd"](4608, null, d.a, d.a, [c.i]),
          u["ɵdid"](49152, null, 0, r.a, [s.a, a.Router], null, null),
        ],
        null,
        null
      );
    }
    var i = t("ReYO"),
      u = t("3j3K"),
      a = t("5oXY"),
      d = t("irhF"),
      c = t("Fzro"),
      r = t("EhR1"),
      s = t("ZyHc");
    t.d(l, "a", function () {
      return f;
    });
    var p = [i.a],
      g = u["ɵcrt"]({ encapsulation: 0, styles: p, data: {} }),
      f = u["ɵccf"]("app-video", r.a, o, { pagers: "pagers" }, {}, []);
  },
  z4gK: function (n, l, t) {
    "use strict";
    function e(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](0, null, null, 9, "li", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(),
          s["ɵeld"](0, null, null, 6, "div", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [],
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
                    s["ɵnov"](n, 5).onClick(
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
          s["ɵdid"](
            671744,
            null,
            0,
            p.RouterLinkWithHref,
            [p.Router, p.ActivatedRoute, g.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["All"])),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(), s["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(l, 5, 0, n(l, 6, 0, l.component.defaultLink));
        },
        function (n, l) {
          n(l, 4, 0, s["ɵnov"](l, 5).target, s["ɵnov"](l, 5).href);
        }
      );
    }
    function o(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](0, null, null, 9, "li", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(),
          s["ɵeld"](0, null, null, 6, "div", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [],
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
                    s["ɵnov"](n, 5).onClick(
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
          s["ɵdid"](
            671744,
            null,
            0,
            p.RouterLinkWithHref,
            [p.Router, p.ActivatedRoute, g.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["", ""])),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(), s["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(
            l,
            5,
            0,
            n(l, 6, 0, "/" + l.component.path + "/" + l.context.$implicit.name)
          );
        },
        function (n, l) {
          n(l, 4, 0, s["ɵnov"](l, 5).target, s["ɵnov"](l, 5).href),
            n(l, 7, 0, l.context.$implicit.name);
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
            10,
            "div",
            [],
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
            7,
            "ul",
            [],
            [[8, "className", 0]],
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, e)),
          s["ɵdid"](
            16384,
            null,
            0,
            g.NgIf,
            [s.ViewContainerRef, s.TemplateRef],
            { ngIf: [0, "ngIf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, o)),
          s["ɵdid"](
            802816,
            null,
            0,
            g.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(), s["ɵted"](null, ["\n    "])),
        ],
        function (n, l) {
          var t = l.component;
          n(l, 5, 0, t.defaultLink), n(l, 8, 0, t.taxonomy);
        },
        function (n, l) {
          var t = l.component;
          n(l, 2, 0, s["ɵinlineInterpolate"](1, "taxonomy ", t.cols, ""));
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
            29,
            "li",
            [["class", "col grid"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            26,
            "div",
            [["class", "photoContent col"]],
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
            23,
            "div",
            [["class", "photoContentTaxonomy"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n              "])),
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
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n              "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            18,
            "div",
            [["class", "textWrapper"]],
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
            7,
            "div",
            [["class", "leftWrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                  "])),
          (n()(),
          s["ɵeld"](
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
          (n()(), s["ɵted"](null, ["", ""])),
          (n()(), s["ɵted"](null, ["\n                  "])),
          (n()(),
          s["ɵeld"](
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
          (n()(), s["ɵted"](null, ["Posted "])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            6,
            "div",
            [["class", "rightWrapper"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n                  "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            3,
            "a",
            [],
            [
              [8, "className", 0],
              [1, "target", 0],
              [8, "href", 4],
            ],
            [[null, "click"]],
            function (n, l, t) {
              var e = !0;
              if ("click" === l) {
                e =
                  !1 !==
                    s["ɵnov"](n, 22).onClick(
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
          s["ɵdid"](
            671744,
            null,
            0,
            p.RouterLinkWithHref,
            [p.Router, p.ActivatedRoute, g.LocationStrategy],
            { routerLink: [0, "routerLink"] },
            null
          ),
          s["ɵpad"](1),
          (n()(), s["ɵted"](null, ["View Photos"])),
          (n()(), s["ɵted"](null, ["\n                "])),
          (n()(), s["ɵted"](null, ["\n              "])),
          (n()(), s["ɵted"](null, ["\n            "])),
          (n()(), s["ɵted"](null, ["\n          "])),
          (n()(), s["ɵted"](null, ["\n        "])),
        ],
        function (n, l) {
          n(
            l,
            22,
            0,
            n(l, 23, 0, "/" + l.component.path + "/" + l.context.$implicit.name)
          );
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            6,
            0,
            s["ɵinlineInterpolate"](
              1,
              "",
              t.customClass,
              " row__thumbnail thumbnail"
            ),
            l.context.$implicit.field_photo
          ),
            n(
              l,
              12,
              0,
              s["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
                " row__thumbnail blockTitle"
              )
            ),
            n(l, 13, 0, l.context.$implicit.name),
            n(
              l,
              15,
              0,
              s["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
                " row__thumbnail Created"
              )
            ),
            n(
              l,
              21,
              0,
              s["ɵinlineInterpolate"](
                1,
                "",
                t.customClass,
                " row__thumbnail viewMoreLink"
              ),
              s["ɵnov"](l, 22).target,
              s["ɵnov"](l, 22).href
            );
        }
      );
    }
    function a(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](0, null, null, 8, "div", [], null, null, null, null, null)),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(),
          s["ɵeld"](
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
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵted"](null, ["\n        "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, u)),
          s["ɵdid"](
            802816,
            null,
            0,
            g.NgForOf,
            [s.ViewContainerRef, s.TemplateRef, s.IterableDiffers],
            { ngForOf: [0, "ngForOf"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n      "])),
          (n()(), s["ɵted"](null, ["\n    "])),
        ],
        function (n, l) {
          n(l, 6, 0, l.component.taxonomy);
        },
        function (n, l) {
          var t = l.component;
          n(
            l,
            2,
            0,
            s["ɵinlineInterpolate"](1, "galleryPageTaxonomy ", t.cols, "")
          );
        }
      );
    }
    function d(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            12,
            "div",
            [["class", "block"]],
            null,
            null,
            null,
            null,
            null
          )),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            8,
            "div",
            [["class", "block viewport"]],
            null,
            null,
            null,
            null,
            null
          )),
          s["ɵdid"](
            16384,
            null,
            0,
            g.NgSwitch,
            [],
            { ngSwitch: [0, "ngSwitch"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, i)),
          s["ɵdid"](
            278528,
            null,
            0,
            g.NgSwitchCase,
            [s.ViewContainerRef, s.TemplateRef, g.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n    "])),
          (n()(), s["ɵand"](16777216, null, null, 1, null, a)),
          s["ɵdid"](
            278528,
            null,
            0,
            g.NgSwitchCase,
            [s.ViewContainerRef, s.TemplateRef, g.NgSwitch],
            { ngSwitchCase: [0, "ngSwitchCase"] },
            null
          ),
          (n()(), s["ɵted"](null, ["\n  "])),
          (n()(), s["ɵted"](null, ["\n"])),
        ],
        function (n, l) {
          n(l, 4, 0, l.component.switchCarouselTemplate1);
          n(l, 7, 0, 1);
          n(l, 10, 0, 2);
        },
        null
      );
    }
    function c(n) {
      return s["ɵvid"](
        0,
        [
          (n()(),
          s["ɵeld"](
            0,
            null,
            null,
            1,
            "app-taxonomy-list",
            [],
            null,
            null,
            null,
            d,
            v
          )),
          s["ɵdid"](114688, null, 0, f.a, [m.a], null, null),
        ],
        function (n, l) {
          n(l, 1, 0);
        },
        null
      );
    }
    var r = t("XHJY"),
      s = t("3j3K"),
      p = t("5oXY"),
      g = t("2Je8"),
      f = t("5sTS"),
      m = t("0FIO");
    t.d(l, "b", function () {
      return v;
    }),
      (l.a = d);
    var h = [r.a],
      v = s["ɵcrt"]({ encapsulation: 0, styles: h, data: {} });
    s["ɵccf"](
      "app-taxonomy-list",
      f.a,
      c,
      {
        count: "count",
        cols: "cols",
        name: "name",
        blockTitle: "blockTitle",
        path: "path",
        defaultLink: "defaultLink",
        switchCarouselTemplate1: "switchCarouselTemplate1",
        field_photo: "field_photo",
      },
      {},
      []
    );
  },
});
