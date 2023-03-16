import { openBlock as m, createElementBlock as C, withDirectives as d, createElementVNode as r, toDisplayString as g, unref as t, normalizeClass as p, vShow as P, Fragment as j, renderList as z, createTextVNode as b } from "vue";
const G = { class: "pagination--wrapper" }, L = { class: "hidden" }, M = { class: "pagination" }, O = { class: "pagination--dot" }, A = ["onClick"], H = { class: "pagination--dot" }, I = { class: "pagination--page-count" }, J = /* @__PURE__ */ r("span", null, ".", -1), K = /* @__PURE__ */ r("span", null, ".", -1), Q = /* @__PURE__ */ r("span", null, ".", -1), U = { key: 1 }, W = {
  __name: "PaginationButton",
  props: {
    totalResultCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 25
    },
    currentPageVal: {
      type: Number,
      default: 1
    },
    isFetching: {
      type: Boolean,
      default: !1,
      required: !0
    }
  },
  emits: ["paginate"],
  setup(l, { emit: T }) {
    const h = l, c = ref(2), a = ref(1), n = ref(0), o = ref(1), y = ref(3), w = ref(!0), B = ref(!1), v = computed({
      get() {
        return $(h.currentPageVal), a.value = h.currentPageVal;
      },
      set(e) {
        return a.value = e;
      }
    }), $ = (e) => {
      e === 1 && (o.value = 1);
    }, D = computed({
      get() {
        return n.value = Math.ceil(h.totalResultCount / h.perPage);
      },
      set(e) {
        return n.value = e;
      }
    }), R = (e) => {
      if (v.value = e, e <= 4) {
        if (e <= 3) {
          s(!0, !1), o.value = 1, c.value = 2;
          return;
        }
        s(!0, !1), o.value = 1, c.value = 4;
        return;
      }
      V(e, !0);
    }, N = (e) => {
      if (v.value = e, e === 1) {
        s(!0, !1), f(e, 0, 2);
        return;
      }
      V(e, !1);
    }, x = (e) => {
      if (e > 1) {
        if (v.value = e -= 1, a.value > 3) {
          if (a.value === 4) {
            s(!0, !1), f(e, 3, 4);
            return;
          }
          V(e, !0);
          return;
        }
        if (s(!0, !1), a.value === 3) {
          c.value = 3, o.value = 1;
          return;
        }
        c.value = 2, o.value = 1;
        return;
      }
    }, E = (e) => {
      if (v.value = e += 1, a.value >= n.value)
        return v.value = n.value;
      if (a.value > 3) {
        if (a.value === 4) {
          if (a.value + 3 <= n.value) {
            s(!0, !1), c.value = 4, o.value = 1;
            return;
          }
          s(!1, n.value > 6), c.value = n.value === 6 ? 4 : 3, o.value = 1;
          return;
        }
        V(e, !0);
      }
    }, F = () => n.value % 2 === 0, k = (e, u) => e ? a.value > n.value - u : a.value + u === n.value, f = (e, u, i) => {
      o.value = e - u, c.value = i;
    }, s = (e, u) => {
      w.value = e, B.value = u;
    }, V = (e, u) => {
      if (F()) {
        if (k(!1, 3) || k(!0, 3)) {
          s(!1, n.value > 6), f(n.value, 5, 4);
          return;
        }
        if (u) {
          s(!0, !0), f(e, 2, 3);
          return;
        }
      }
      if (k(!1, 2) || k(!0, 2)) {
        s(!1, !0), f(n.value, 4, 3);
        return;
      }
      if (u) {
        s(!0, !0), f(e, 2, 3);
        return;
      }
    }, S = () => n.value > y.value && n.value > y.value + 1, q = () => n.value === 3 ? c.value - 1 : c.value;
    return (e, u) => (m(), C("div", null, [
      d(r("div", G, [
        r("span", L, g(t(v)), 1),
        r("div", M, [
          r("a", {
            ref: "prev-pagination-ref",
            class: p(["pagination--button", [{ disabled: t(a) === 1 }]]),
            onClick: u[0] || (u[0] = (i) => (x(t(a)), l.currentPageVal > 1 ? e.emits("update", t(a)) : null))
          }, "‹", 2),
          r("a", {
            ref: "prev-current-pagination-ref",
            class: p(["pagination--button", { selected: t(a) === 1 }]),
            onClick: u[1] || (u[1] = (i) => (N(1), l.currentPageVal > 1 ? e.emits("update", t(a)) : null))
          }, "1", 2),
          d(r("a", O, "...", 512), [
            [P, t(B)]
          ]),
          (m(!0), C(j, null, z(q(), (i) => d((m(), C("a", {
            key: i,
            ref_for: !0,
            ref: `page-count-${i}-ref`,
            class: p(["pagination--button", { selected: t(a) === i + t(o) }]),
            onClick: (X) => (R(i + t(o)), e.emits("update", t(a)))
          }, g(i + t(o)), 11, A)), [
            [P, t(n) > 2]
          ])), 128)),
          d(r("a", H, "...", 512), [
            [P, t(w) && S()]
          ]),
          d(r("a", {
            ref: "next-current-pagination-ref",
            class: p(["pagination--button", { selected: t(a) === t(n) }]),
            onClick: u[2] || (u[2] = (i) => (N(t(n)), l.currentPageVal < t(n) ? e.emits("update", t(a)) : null))
          }, g(t(D)), 3), [
            [P, t(n) > 1]
          ]),
          r("a", {
            ref: "next-pagination-ref",
            class: p(["pagination--button", [{ disabled: t(a) === t(n) }]]),
            onClick: u[3] || (u[3] = (i) => (E(t(a)), l.currentPageVal < t(n) ? e.emits("update", t(a)) : null))
          }, "›", 2)
        ])
      ], 512), [
        [P, t(n) > 0]
      ]),
      d(r("div", I, [
        b(" 全" + g(l.totalResultCount) + "件中  ", 1),
        l.isFetching ? (m(), C("span", {
          key: 0,
          class: p([{ fetching: l.isFetching }])
        }, [
          J,
          K,
          Q,
          b(" ")
        ], 2)) : (m(), C("span", U, g(t(a) < 2 ? 1 : (t(a) - 1) * l.perPage + 1) + " - " + g(t(a) === t(n) ? l.totalResultCount : t(a) * l.perPage), 1)),
        b("件 ")
      ], 512), [
        [P, t(n) > 0]
      ])
    ]));
  }
}, Z = {
  install: (l, T) => {
    l.component("PaginationButton", W);
  }
};
export {
  Z as default
};
