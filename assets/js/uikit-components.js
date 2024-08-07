{
  const { String: t, Boolean: e, Number: i } = window,
    s = (t) => t,
    n = (t, e) => {
      const i = UIkit.util.hyphenate(t);
      (t = UIkit.util.camelize(i)),
        UIkit.util.$$("[uk-" + i + "],[data-uk-" + i + "]").forEach((e) => {
          const i = UIkit.getComponents(e);
          i[t] && i[t].$destroy();
        }),
        UIkit.component(t, e),
        UIkit.util.$$("[uk-" + i + "],[data-uk-" + i + "]").forEach((e) => {
          UIkit.getComponents(e)[t] || UIkit[t](e);
        });
    },
    o = (() => {
      const { getCssVar: t, isString: i, toFloat: n } = UIkit.util;
      return s({
        props: { media: e, mediaMax: e },
        data: { media: !1, mediaMax: !1 },
        computed: {
          matchMedia() {
            const t = o(this.media),
              e = o(this.mediaMax, "max");
            if (!t && !e) return !0;
            const i = t ? (e ? t + " and " + e : t) : e;
            return window.matchMedia(i).matches;
          },
        },
      });
      function o(e, s = "min") {
        if (i(e))
          if ("@" === e[0]) {
            const i = `breakpoint-${e.substr(1)}`;
            e = n(t(i));
          } else if (isNaN(e)) return e;
        return !(!e || isNaN(e)) && `(${s}-width: ${e}px)`;
      }
    })(),
    h = UIkit.component("height-viewport").options,
    r = (() => {
      const t = h.mixins[0],
        {
          boxModelAdjust: n,
          css: r,
          dimensions: a,
          endsWith: l,
          height: d,
          isNumeric: u,
          isString: c,
          isVisible: p,
          offset: m,
          query: f,
          toFloat: g,
        } = UIkit.util;
      return s({
        mixins: [t, o],
        props: { expand: e, offsetTop: e, offsetBottom: e, minHeight: i },
        data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
        update: {
          read({ minHeight: t }) {
            if (
              ((this.inactive = !this.matchMedia || !p(this.$el)),
              this.inactive)
            )
              return { minHeight: "auto", prev: t };
            let e = "";
            const i = n(this.$el, "height", "content-box");
            if (this.expand)
              e =
                d(window) -
                  (a(document.documentElement).height - a(this.$el).height) -
                  i || "";
            else {
              if (((e = "calc(100vh"), this.offsetTop)) {
                const { top: t } = m(this.$el);
                e += t > 0 && t < d(window) / 2 ? ` - ${t}px` : "";
              }
              !0 === this.offsetBottom
                ? (e += ` - ${a(this.$el.nextElementSibling).height}px`)
                : u(this.offsetBottom)
                ? (e += ` - ${this.offsetBottom}vh`)
                : this.offsetBottom && l(this.offsetBottom, "px")
                ? (e += ` - ${g(this.offsetBottom)}px`)
                : c(this.offsetBottom) &&
                  (e += ` - ${a(f(this.offsetBottom, this.$el)).height}px`),
                (e += (i ? ` - ${i}px` : "") + ")");
            }
            return { minHeight: e, prev: t };
          },
          write({ minHeight: t, prev: e }) {
            r(this.$el, { minHeight: t }),
              t !== e && this.$update(this.$el, "resize"),
              this.minHeight &&
                g(r(this.$el, "minHeight")) < this.minHeight &&
                r(this.$el, "minHeight", this.minHeight);
          },
          events: ["resize"],
        },
      });
    })(),
    a = UIkit.component("sticky").options;
  n("sticky", { ...a, mixins: [a.mixins[0], o] }), n("height-viewport", r);
  const l = (() => {
    const { fragment: t, remove: e, before: i, after: s, on: n } = UIkit.util;
    return {
      connected() {
        const e = this.$el,
          o = "<span data-feather='plus'></span>",
          h = "<span data-feather='minus'></span>",
          r = (this.buttonDown = t(
            `<button class="input-number-down input-number-btn uk-button">${h}</button>`
          )),
          a = (this.buttonUp = t(
            `<button class="input-number-up input-number-btn uk-button">${o}</button>`
          ));
        i(e, r), s(e, a);
        const l = (t, e) => {
          if ("+" === e && t.stepUp) return t.stepUp();
          if ("-" === e && t.stepDown) return t.stepDown();
          const i = +(t.step || "1") * ("-" === e ? -1 : 1),
            s = +(t.value || "0") + i;
          ("-" === e && t.min && s < +t.min) ||
            ("+" === e && t.max && s > +t.max) ||
            (t.value = s);
        };
        n(r, "click", (t) => {
          t.preventDefault(), l(e, "-");
        }),
          n(a, "click", (t) => {
            t.preventDefault(), l(e, "+");
          }),
          feather.replace();
      },
      disconnected() {
        e(this.buttonDown),
          e(this.buttonUp),
          (this.buttonDown = this.buttonUp = null);
      },
    };
  })();
  UIkit.component("input-number", l);
  const d = UIkit.component("countdown").options;
  n(
    "countdown",
    (() => {
      const i = d.mixins[0],
        { $: s, $$: n, empty: o, html: h, isInView: r } = UIkit.util,
        a = {
          days: "day",
          hours: "hour",
          minutes: "minute",
          seconds: "second",
        };
      return {
        mixins: [i],
        props: {
          date: t,
          clsWrapper: t,
          clsLabel: t,
          clsHideEnd: t,
          clsShowEnd: t,
          padZero: e,
          oneUnit: e,
        },
        data: {
          date: "",
          clsWrapper: ".uk-countdown-%unit%",
          clsLabel: ".uk-countdown-label",
          clsHideEnd: ".uk-countdown-hide-end",
          clsShowEnd: ".uk-countdown-show-end",
          padZero: !0,
          oneUnit: !1,
        },
        computed: {
          date: ({ date: t }) => Date.parse(t),
          days: ({ clsWrapper: t }, e) => s(t.replace("%unit%", "days"), e),
          hours: ({ clsWrapper: t }, e) => s(t.replace("%unit%", "hours"), e),
          minutes: ({ clsWrapper: t }, e) =>
            s(t.replace("%unit%", "minutes"), e),
          seconds: ({ clsWrapper: t }, e) =>
            s(t.replace("%unit%", "seconds"), e),
          unitValueElement: ({ clsWrapper: t }, e) =>
            s(t.replace("%unit%", "unit-value"), e),
          labelElement: ({ clsLabel: t }, e) => s(t, e),
          units() {
            const t = ["days", "hours", "minutes", "seconds"];
            return this.oneUnit ? t : t.filter((t) => this[t]);
          },
          hideEnd: ({ clsHideEnd: t }, e) => n(t, e),
          showEnd: ({ clsShowEnd: t }, e) => n(t, e),
        },
        connected() {
          this.start();
        },
        disconnected() {
          this.stop(),
            this.oneUnit
              ? (o(this.unitValueElement), o(this.labelElement))
              : this.units.forEach((t) => this[t] && o(this[t])),
            this.showEnd.forEach((t) => t.classList.remove("uk-hidden")),
            this.hideEnd.forEach((t) => t.classList.remove("uk-hidden"));
        },
        events: [
          {
            name: "visibilitychange",
            el: () => document,
            handler() {
              document.hidden ? this.stop() : this.start();
            },
          },
        ],
        update: {
          write() {
            const t = (function (t) {
              const e = t - Date.now();
              return {
                total: e,
                seconds: (e / 1e3) % 60,
                minutes: (e / 1e3 / 60) % 60,
                hours: (e / 1e3 / 60 / 60) % 24,
                days: e / 1e3 / 60 / 60 / 24,
              };
            })(this.date);
            if (
              (t.total <= 0 &&
                (this.stop(),
                (t.days = t.hours = t.minutes = t.seconds = 0),
                this.showEnd.forEach((t) => t.classList.remove("uk-hidden")),
                this.hideEnd.forEach((t) => t.classList.add("uk-hidden"))),
              this.oneUnit)
            ) {
              const e = this.units.find(
                (e, i, s) => Math.floor(t[e]) > 0 || i === s.length - 1
              );
              return (
                (this.labelElement.textContent =
                  1 === Math.floor(t[e]) ? a[e] : e),
                void this.setUnit(e, this.unitValueElement, t)
              );
            }
            this.units.forEach((e) => {
              this.setUnit(e, this[e], t);
            });
          },
        },
        methods: {
          setUnit(e, i, s) {
            let n = t(Math.floor(s[e]));
            (n = this.padZero && n.length < 2 ? `0${n}` : n),
              i.textContent !== n &&
                ((n = n.split("")),
                n.length !== i.children.length &&
                  h(i, n.map(() => "<span></span>").join("")),
                n.forEach((t, e) => (i.children[e].textContent = t)));
          },
          start() {
            this.stop(),
              this.date &&
                this.units.length &&
                (this.showEnd.forEach((t) => t.classList.add("uk-hidden")),
                this.$update(),
                (this.timer = setInterval(() => {
                  r(this.$el) && this.$update();
                }, 1e3)));
          },
          stop() {
            this.timer && (clearInterval(this.timer), (this.timer = null));
          },
        },
      };
    })()
  );
  const u = UIkit.component("drop").options,
    c = (() => {
      const [s, n, o] = u.mixins,
        {
          addClass: h,
          append: r,
          apply: a,
          css: l,
          hasClass: d,
          includes: c,
          isTouch: p,
          MouseTracker: m,
          offset: f,
          on: g,
          once: w,
          parent: $,
          pointerCancel: k,
          pointerDown: b,
          pointerEnter: v,
          pointerLeave: y,
          pointerUp: E,
          query: x,
          removeClass: U,
          toggleClass: T,
          within: D,
        } = UIkit.util;
      let I;
      return {
        mixins: [s, n, o],
        args: "pos",
        props: {
          mode: "list",
          toggle: e,
          boundary: e,
          boundaryAlign: e,
          delayShow: i,
          delayHide: i,
          clsDrop: t,
        },
        data: {
          mode: ["click", "hover"],
          toggle: "- *",
          boundary: !0,
          boundaryAlign: !1,
          delayShow: 0,
          delayHide: 800,
          clsDrop: !1,
          animation: ["uk-animation-fade"],
          cls: "uk-open",
          container: !1,
        },
        computed: {
          boundary: ({ boundary: t }, e) => (!0 === t ? window : x(t, e)),
          clsDrop({ clsDrop: t }) {
            return t || `uk-${this.$options.name}`;
          },
          clsPos() {
            return this.clsDrop;
          },
        },
        created() {
          this.tracker = new m();
        },
        connected() {
          h(this.$el, this.clsDrop),
            this.toggle &&
              !this.target &&
              (this.target = this.$create("toggle", x(this.toggle, this.$el), {
                target: this.$el,
                mode: this.mode,
              }));
        },
        disconnected() {
          this.isActive() && (I = null);
        },
        events: [
          {
            name: "click",
            delegate() {
              return `.${this.clsDrop}-close`;
            },
            handler(t) {
              t.preventDefault(), this.hide(!1);
            },
          },
          {
            name: "click",
            delegate: () => 'a[href^="#"]',
            handler({ defaultPrevented: t, current: { hash: e } }) {
              t || !e || D(e, this.$el) || this.hide(!1);
            },
          },
          {
            name: "beforescroll",
            handler() {
              this.hide(!1);
            },
          },
          {
            name: "toggle",
            self: !0,
            handler(t, e) {
              t.preventDefault(),
                this.isToggled() ? this.hide(!1) : this.show(e.$el, !1);
            },
          },
          {
            name: "toggleshow",
            self: !0,
            handler(t, e) {
              t.preventDefault(), this.show(e.$el);
            },
          },
          {
            name: "togglehide",
            self: !0,
            handler(t) {
              t.preventDefault(), this.hide();
            },
          },
          {
            name: `${v} focusin`,
            filter() {
              return c(this.mode, "hover");
            },
            handler(t) {
              p(t) || this.clearTimers();
            },
          },
          {
            name: `${y} focusout`,
            filter() {
              return c(this.mode, "hover");
            },
            handler(t) {
              !p(t) && t.relatedTarget && this.hide();
            },
          },
          {
            name: "toggled",
            self: !0,
            handler(t, e) {
              e && (this.clearTimers(), this.position());
            },
          },
          {
            name: "show",
            self: !0,
            handler() {
              (I = this),
                this.tracker.init(),
                w(
                  this.$el,
                  "hide",
                  g(
                    document,
                    b,
                    ({ target: t }) =>
                      !D(t, this.$el) &&
                      w(
                        document,
                        `${E} ${k} scroll`,
                        ({ defaultPrevented: e, type: i, target: s }) => {
                          e ||
                            i !== E ||
                            t !== s ||
                            (this.target && D(t, this.target)) ||
                            this.hide(!1);
                        },
                        !0
                      )
                  ),
                  { self: !0 }
                ),
                w(
                  this.$el,
                  "hide",
                  g(document, "keydown", (t) => {
                    27 === t.keyCode && this.hide(!1);
                  }),
                  { self: !0 }
                );
            },
          },
          {
            name: "beforehide",
            self: !0,
            handler() {
              this.clearTimers();
            },
          },
          {
            name: "hide",
            handler({ target: t }) {
              this.$el === t
                ? ((I = this.isActive() ? null : I), this.tracker.cancel())
                : (I =
                    null === I && D(t, this.$el) && this.isToggled()
                      ? this
                      : I);
            },
          },
        ],
        update: {
          write() {
            this.isToggled() && !d(this.$el, this.clsEnter) && this.position();
          },
          events: ["resize"],
        },
        methods: {
          show(t = this.target, e = !0) {
            if (
              (this.isToggled() &&
                t &&
                this.target &&
                t !== this.target &&
                this.hide(!1),
              (this.target = t),
              this.clearTimers(),
              !this.isActive())
            ) {
              if (I) {
                if (e && I.isDelaying)
                  return void (this.showTimer = setTimeout(this.show, 10));
                let t;
                for (; I && t !== I && !D(this.$el, I.$el); )
                  (t = I), I.hide(!1);
              }
              this.container &&
                $(this.$el) !== this.container &&
                r(this.container, this.$el),
                h(this.$el, "uk-open"),
                this.position(),
                U(this.$el, "uk-open"),
                (this.showTimer = setTimeout(
                  () => this.toggleElement(this.$el, !0),
                  (e && this.delayShow) || 0
                ));
            }
          },
          hide(t = !0) {
            const e = () => this.toggleElement(this.$el, !1, !1);
            this.clearTimers(),
              (this.isDelaying = (function (t) {
                const e = [];
                return (
                  a(t, (t) => "static" !== l(t, "position") && e.push(t)), e
                );
              })(this.$el).some((t) => this.tracker.movesTo(t))),
              t && this.isDelaying
                ? (this.hideTimer = setTimeout(this.hide, 50))
                : t && this.delayHide
                ? (this.hideTimer = setTimeout(e, this.delayHide))
                : e();
          },
          clearTimers() {
            clearTimeout(this.showTimer),
              clearTimeout(this.hideTimer),
              (this.showTimer = null),
              (this.hideTimer = null),
              (this.isDelaying = !1);
          },
          isActive() {
            return I === this;
          },
          position() {
            U(this.$el, `${this.clsDrop}-stack`),
              T(this.$el, `${this.clsDrop}-boundary`, this.boundaryAlign);
            const t = f(this.boundary),
              e = this.boundaryAlign ? t : f(this.target);
            if ("justify" === this.align) {
              const t = "y" === this.getAxis() ? "width" : "height";
              l(this.$el, t, e[t]);
            } else
              this.boundary &&
                this.$el.offsetWidth >
                  Math.max(t.right - e.left, e.right - t.left) &&
                h(this.$el, `${this.clsDrop}-stack`);
            this.positionAt(
              this.$el,
              this.boundaryAlign ? this.boundary : this.target,
              this.boundary
            );
          },
        },
      };
    })();
  n("drop", c), n("dropdown", c);
  n(
    "navbar-bound",
    (() => {
      const { $$: t, isVisible: e, removeClass: i, addClass: n } = UIkit.util;
      return s({
        mixins: [],
        props: {},
        data: {},
        computed: { ulList: ({}, e) => t("ul", e) },
        update: {
          read() {
            const t = this.$el;
            let i = e(t);
            if (i) {
              const { x: e, width: s } = t.getBoundingClientRect(),
                n = [e, s].join(",");
              n === this.lastSeenElPos && (i = !1), (this.lastSeenElPos = n);
            }
            return { needUpdate: i };
          },
          write({ needUpdate: t }) {
            if (!t) return;
            const e = document.documentElement.clientWidth;
            this.ulList.forEach((t) => {
              i(t, "reverse-submenu-open"),
                t.getBoundingClientRect().right > e &&
                  n(t, "reverse-submenu-open");
            });
          },
          events: ["resize"],
        },
      });
    })()
  );
  (function () {
    var t = "undefined" != typeof window && window.setImmediate,
      e =
        "undefined" != typeof window &&
        window.postMessage &&
        window.addEventListener;
    if (t)
      return function (t) {
        return window.setImmediate(t);
      };
    if (e) {
      var i = [];
      return (
        window.addEventListener(
          "message",
          function (t) {
            var e = t.source;
            (e !== window && null !== e) ||
              "process-tick" !== t.data ||
              (t.stopPropagation(), i.length > 0 && i.shift()());
          },
          !0
        ),
        function (t) {
          i.push(t), window.postMessage("process-tick", "*");
        }
      );
    }
  })();
  n(
    "swiper",
    (() => {
      const { $$: t, isVisible: e, removeClass: i, addClass: n } = UIkit.util;
      return s({
        mixins: [],
        props: {},
        data: {},
        computed: {},
        async connected() {
          const t = this.$el;
          for (;;) {
            let e = t;
            for (; e && !e.nextSibling; ) e = e.parentNode;
            if (e) break;
            if ("complete" === document.readyState) break;
            window.initSwiper && window.initSwiper(t, "data-swiper"),
              await Promise.race([
                new Promise((t) => (this.updateResolvePromise = t)),
                new Promise((t) =>
                  document.addEventListener("DOMContentLoaded", t, { once: !0 })
                ),
              ]);
            t.swiper.destroy(!1, !1), console.log("reinit");
          }
          this.swiper =
            window.initSwiper && window.initSwiper(t, "data-swiper");
        },
        update() {
          this.updateResolvePromise && this.updateResolvePromise();
        },
      });
    })()
  );
}
