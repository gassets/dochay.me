if (
  ((function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document) throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    var n = [],
      i = n.slice,
      o = n.concat,
      r = n.push,
      a = n.indexOf,
      s = {},
      l = s.toString,
      c = s.hasOwnProperty,
      u = {},
      d = e.document,
      h = "2.1.1",
      p = function (e, t) {
        return new p.fn.init(e, t);
      },
      f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      T = /^-ms-/,
      g = /-([\da-z])/gi,
      m = function (e, t) {
        return t.toUpperCase();
      };
    function b(e) {
      var t = e.length,
        n = p.type(e);
      return "function" !== n && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    ((p.fn = p.prototype =
      {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function () {
          return i.call(this);
        },
        get: function (e) {
          return null != e ? (0 > e ? this[e + this.length] : this[e]) : i.call(this);
        },
        pushStack: function (e) {
          var t = p.merge(this.constructor(), e);
          return ((t.prevObject = this), (t.context = this.context), t);
        },
        each: function (e, t) {
          return p.each(this, e, t);
        },
        map: function (e) {
          return this.pushStack(
            p.map(this, function (t, n) {
              return e.call(t, n, t);
            }),
          );
        },
        slice: function () {
          return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: r,
        sort: n.sort,
        splice: n.splice,
      }),
      (p.extend = p.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || p.isFunction(a) || (a = {}),
              s === l && ((a = this), s--);
            l > s;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                ((n = a[t]),
                  a !== (i = e[t]) &&
                    (c && i && (p.isPlainObject(i) || (o = p.isArray(i)))
                      ? (o ? ((o = !1), (r = n && p.isArray(n) ? n : [])) : (r = n && p.isPlainObject(n) ? n : {}), (a[t] = p.extend(c, r, i)))
                      : void 0 !== i && (a[t] = i)));
          return a;
        }),
      p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === p.type(e);
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          return !p.isArray(e) && e - parseFloat(e) >= 0;
        },
        isPlainObject: function (e) {
          return "object" === p.type(e) && !e.nodeType && !p.isWindow(e) && !(e.constructor && !c.call(e.constructor.prototype, "isPrototypeOf"));
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object" : typeof e;
        },
        globalEval: function (e) {
          var t,
            n = eval;
          (e = p.trim(e)) &&
            (1 === e.indexOf("use strict") ? (((t = d.createElement("script")).text = e), d.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function (e) {
          return e.replace(T, "ms-").replace(g, m);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, n) {
          var i = 0,
            o = e.length,
            r = b(e);
          if (n) {
            if (r) for (; o > i && !1 !== t.apply(e[i], n); i++);
            else for (i in e) if (!1 === t.apply(e[i], n)) break;
          } else if (r) for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(f, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (null != e && (b(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n);
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : a.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
          return ((e.length = o), e);
        },
        grep: function (e, t, n) {
          for (var i = [], o = 0, r = e.length, a = !n; r > o; o++) !t(e[o], o) !== a && i.push(e[o]);
          return i;
        },
        map: function (e, t, n) {
          var i,
            r = 0,
            a = e.length,
            s = [];
          if (b(e)) for (; a > r; r++) null != (i = t(e[r], r, n)) && s.push(i);
          else for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
          return o.apply([], s);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, o, r;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            p.isFunction(e)
              ? ((o = i.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, o.concat(i.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || p.guid++),
                r)
              : void 0
          );
        },
        now: Date.now,
        support: u,
      }),
      p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        s["[object " + t + "]"] = t.toLowerCase();
      }));
    var v = (function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        T,
        g,
        m,
        b,
        v,
        S = "sizzle" + -new Date(),
        y = e.document,
        A = 0,
        P = 0,
        M = re(),
        C = re(),
        w = re(),
        H = function (e, t) {
          return (e === t && (d = !0), 0);
        },
        G = "undefined",
        x = 1 << 31,
        k = {}.hasOwnProperty,
        N = [],
        B = N.pop,
        E = N.push,
        D = N.push,
        I = N.slice,
        $ =
          N.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
          },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        _ = "[\\x20\\t\\r\\n\\f]",
        O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        V = O.replace("w", "w#"),
        F = "\\[" + _ + "*(" + O + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + V + "))|)" + _ + "*\\]",
        R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        X = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
        j = new RegExp("^" + _ + "*," + _ + "*"),
        W = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
        K = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"),
        Q = new RegExp(R),
        U = new RegExp("^" + V + "$"),
        q = {
          ID: new RegExp("^#(" + O + ")"),
          CLASS: new RegExp("^\\.(" + O + ")"),
          TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + R),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)",
            "i",
          ),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i"),
        },
        z = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = /'|\\/g,
        ne = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
        ie = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        };
      try {
        (D.apply((N = I.call(y.childNodes)), y.childNodes), N[y.childNodes.length].nodeType);
      } catch (e) {
        D = {
          apply: N.length
            ? function (e, t) {
                E.apply(e, I.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function oe(e, t, i, o) {
        var r, s, c, u, d, f, m, b, A, P;
        if (((t ? t.ownerDocument || t : y) !== p && h(t), (i = i || []), !e || "string" != typeof e)) return i;
        if (1 !== (u = (t = t || p).nodeType) && 9 !== u) return [];
        if (T && !o) {
          if ((r = Z.exec(e)))
            if ((c = r[1])) {
              if (9 === u) {
                if (!(s = t.getElementById(c)) || !s.parentNode) return i;
                if (s.id === c) return (i.push(s), i);
              } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && v(t, s) && s.id === c) return (i.push(s), i);
            } else {
              if (r[2]) return (D.apply(i, t.getElementsByTagName(e)), i);
              if ((c = r[3]) && n.getElementsByClassName && t.getElementsByClassName) return (D.apply(i, t.getElementsByClassName(c)), i);
            }
          if (n.qsa && (!g || !g.test(e))) {
            if (((b = m = S), (A = t), (P = 9 === u && e), 1 === u && "object" !== t.nodeName.toLowerCase())) {
              for (f = a(e), (m = t.getAttribute("id")) ? (b = m.replace(te, "\\$&")) : t.setAttribute("id", b), b = "[id='" + b + "'] ", d = f.length; d--; )
                f[d] = b + Te(f[d]);
              ((A = (ee.test(e) && pe(t.parentNode)) || t), (P = f.join(",")));
            }
            if (P)
              try {
                return (D.apply(i, A.querySelectorAll(P)), i);
              } catch (e) {
              } finally {
                m || t.removeAttribute("id");
              }
          }
        }
        return l(e.replace(X, "$1"), t, i, o);
      }
      function re() {
        var e = [];
        return function t(n, o) {
          return (e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = o));
        };
      }
      function ae(e) {
        return ((e[S] = !0), e);
      }
      function se(e) {
        var t = p.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          (t.parentNode && t.parentNode.removeChild(t), (t = null));
        }
      }
      function le(e, t) {
        for (var n = e.split("|"), o = e.length; o--; ) i.attrHandle[n[o]] = t;
      }
      function ce(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || x) - (~e.sourceIndex || x);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function ue(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function de(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function he(e) {
        return ae(function (t) {
          return (
            (t = +t),
            ae(function (n, i) {
              for (var o, r = e([], n.length, t), a = r.length; a--; ) n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
            })
          );
        });
      }
      function pe(e) {
        return e && typeof e.getElementsByTagName !== G && e;
      }
      for (t in ((n = oe.support = {}),
      (r = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (h = oe.setDocument =
        function (e) {
          var t,
            o = e ? e.ownerDocument || e : y,
            a = o.defaultView;
          return o !== p && 9 === o.nodeType && o.documentElement
            ? ((p = o),
              (f = o.documentElement),
              (T = !r(o)),
              a &&
                a !== a.top &&
                (a.addEventListener
                  ? a.addEventListener(
                      "unload",
                      function () {
                        h();
                      },
                      !1,
                    )
                  : a.attachEvent &&
                    a.attachEvent("onunload", function () {
                      h();
                    })),
              (n.attributes = se(function (e) {
                return ((e.className = "i"), !e.getAttribute("className"));
              })),
              (n.getElementsByTagName = se(function (e) {
                return (e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length);
              })),
              (n.getElementsByClassName =
                J.test(o.getElementsByClassName) &&
                se(function (e) {
                  return (
                    (e.innerHTML = "<div class='a'></div><div class='a i'></div>"),
                    (e.firstChild.className = "i"),
                    2 === e.getElementsByClassName("i").length
                  );
                })),
              (n.getById = se(function (e) {
                return ((f.appendChild(e).id = S), !o.getElementsByName || !o.getElementsByName(S).length);
              })),
              n.getById
                ? ((i.find.ID = function (e, t) {
                    if (typeof t.getElementById !== G && T) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (i.filter.ID = function (e) {
                    var t = e.replace(ne, ie);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete i.find.ID,
                  (i.filter.ID = function (e) {
                    var t = e.replace(ne, ie);
                    return function (e) {
                      var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== G && T ? t.getElementsByClassName(e) : void 0;
                }),
              (m = []),
              (g = []),
              (n.qsa = J.test(o.querySelectorAll)) &&
                (se(function (e) {
                  ((e.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowclip^='']").length && g.push("[*^$]=" + _ + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || g.push("\\[" + _ + "*(?:value|" + L + ")"),
                    e.querySelectorAll(":checked").length || g.push(":checked"));
                }),
                se(function (e) {
                  var t = o.createElement("input");
                  (t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && g.push("name" + _ + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:"));
                })),
              (n.matchesSelector = J.test((b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                se(function (e) {
                  ((n.disconnectedMatch = b.call(e, "div")), b.call(e, "[s!='']:x"), m.push("!=", R));
                }),
              (g = g.length && new RegExp(g.join("|"))),
              (m = m.length && new RegExp(m.join("|"))),
              (t = J.test(f.compareDocumentPosition)),
              (v =
                t || J.test(f.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                      );
                    }
                  : function (e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (H = t
                ? function (e, t) {
                    if (e === t) return ((d = !0), 0);
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      i ||
                      (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === o || (e.ownerDocument === y && v(y, e))
                          ? -1
                          : t === o || (t.ownerDocument === y && v(y, t))
                            ? 1
                            : u
                              ? $.call(u, e) - $.call(u, t)
                              : 0
                        : 4 & i
                          ? -1
                          : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return ((d = !0), 0);
                    var n,
                      i = 0,
                      r = e.parentNode,
                      a = t.parentNode,
                      s = [e],
                      l = [t];
                    if (!r || !a) return e === o ? -1 : t === o ? 1 : r ? -1 : a ? 1 : u ? $.call(u, e) - $.call(u, t) : 0;
                    if (r === a) return ce(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; s[i] === l[i]; ) i++;
                    return i ? ce(s[i], l[i]) : s[i] === y ? -1 : l[i] === y ? 1 : 0;
                  }),
              o)
            : p;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (((e.ownerDocument || e) !== p && h(e), (t = t.replace(K, "='$1']")), !(!n.matchesSelector || !T || (m && m.test(t)) || (g && g.test(t)))))
          try {
            var i = b.call(e, t);
            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
          } catch (e) {}
        return oe(t, p, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return ((e.ownerDocument || e) !== p && h(e), v(e, t));
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== p && h(e);
        var o = i.attrHandle[t.toLowerCase()],
          r = o && k.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !T) : void 0;
        return void 0 !== r ? r : n.attributes || !T ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          i = [],
          o = 0,
          r = 0;
        if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(H), d)) {
          for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
          for (; o--; ) e.splice(i[o], 1);
        }
        return ((u = null), e);
      }),
      (o = oe.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += o(t);
          return n;
        }),
      (i = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: ae,
          match: q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(ne, ie)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return q.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n && Q.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ne, ie).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = M[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) &&
                  M(e, function (e) {
                    return t.test(("string" == typeof e.className && e.className) || (typeof e.getAttribute !== G && e.getAttribute("class")) || "");
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (i) {
                var o = oe.attr(i, e);
                return null == o
                  ? "!=" === t
                  : !t ||
                      ((o += ""),
                      "=" === t
                        ? o === n
                        : "!=" === t
                          ? o !== n
                          : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                              ? n && o.indexOf(n) > -1
                              : "$=" === t
                                ? n && o.slice(-n.length) === n
                                : "~=" === t
                                  ? (" " + o + " ").indexOf(n) > -1
                                  : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, i, o) {
              var r = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === i && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      h,
                      p,
                      f,
                      T = r !== a ? "nextSibling" : "previousSibling",
                      g = t.parentNode,
                      m = s && t.nodeName.toLowerCase(),
                      b = !l && !s;
                    if (g) {
                      if (r) {
                        for (; T; ) {
                          for (d = t; (d = d[T]); ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                          f = T = "only" === e && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [a ? g.firstChild : g.lastChild]), a && b)) {
                        for (
                          p = (c = (u = g[S] || (g[S] = {}))[e] || [])[0] === A && c[1], h = c[0] === A && c[2], d = p && g.childNodes[p];
                          (d = (++p && d && d[T]) || (h = p = 0) || f.pop());
                        )
                          if (1 === d.nodeType && ++h && d === t) {
                            u[e] = [A, p, h];
                            break;
                          }
                      } else if (b && (c = (t[S] || (t[S] = {}))[e]) && c[0] === A) h = c[1];
                      else
                        for (
                          ;
                          (d = (++p && d && d[T]) || (h = p = 0) || f.pop()) &&
                          ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (b && ((d[S] || (d[S] = {}))[e] = [A, h]), d !== t));
                        );
                      return (h -= o) === i || (h % i == 0 && h / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
              return o[S]
                ? o(t)
                : o.length > 1
                  ? ((n = [e, e, "", t]),
                    i.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ae(function (e, n) {
                          for (var i, r = o(e, t), a = r.length; a--; ) e[(i = $.call(e, r[a]))] = !(n[i] = r[a]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
            },
          },
          pseudos: {
            not: ae(function (e) {
              var t = [],
                n = [],
                i = s(e.replace(X, "$1"));
              return i[S]
                ? ae(function (e, t, n, o) {
                    for (var r, a = i(e, null, o, []), s = e.length; s--; ) (r = a[s]) && (e[s] = !(t[s] = r));
                  })
                : function (e, o, r) {
                    return ((t[0] = e), i(t, null, r, n), !n.pop());
                  };
            }),
            has: ae(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: ae(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
              };
            }),
            lang: ae(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(ne, ie).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if ((n = T ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === f;
            },
            focus: function (e) {
              return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
            },
            selected: function (e) {
              return (e.parentNode && e.parentNode.selectedIndex, !0 === e.selected);
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !i.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return z.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }),
      (i.pseudos.nth = i.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        i.pseudos[t] = ue(t);
      for (t in { submit: !0, reset: !0 }) i.pseudos[t] = de(t);
      function fe() {}
      function Te(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function ge(e, t, n) {
        var i = t.dir,
          o = n && "parentNode" === i,
          r = P++;
        return t.first
          ? function (t, n, r) {
              for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
            }
          : function (t, n, a) {
              var s,
                l,
                c = [A, r];
              if (a) {
                for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || o) {
                    if ((s = (l = t[S] || (t[S] = {}))[i]) && s[0] === A && s[1] === r) return (c[2] = s[2]);
                    if (((l[i] = c), (c[2] = e(t, n, a)))) return !0;
                  }
            };
      }
      function me(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function be(e, t, n, i, o) {
        for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
        return a;
      }
      function ve(e, t, n, i, o, r) {
        return (
          i && !i[S] && (i = ve(i)),
          o && !o[S] && (o = ve(o, r)),
          ae(function (r, a, s, l) {
            var c,
              u,
              d,
              h = [],
              p = [],
              f = a.length,
              T =
                r ||
                (function (e, t, n) {
                  for (var i = 0, o = t.length; o > i; i++) oe(e, t[i], n);
                  return n;
                })(t || "*", s.nodeType ? [s] : s, []),
              g = !e || (!r && t) ? T : be(T, h, e, s, l),
              m = n ? (o || (r ? e : f || i) ? [] : a) : g;
            if ((n && n(g, m, s, l), i)) for (c = be(m, p), i(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (m[p[u]] = !(g[p[u]] = d));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], u = m.length; u--; ) (d = m[u]) && c.push((g[u] = d));
                  o(null, (m = []), c, l);
                }
                for (u = m.length; u--; ) (d = m[u]) && (c = o ? $.call(r, d) : h[u]) > -1 && (r[c] = !(a[c] = d));
              }
            } else ((m = be(m === a ? m.splice(f, m.length) : m)), o ? o(null, a, m, l) : D.apply(a, m));
          })
        );
      }
      function Se(e) {
        for (
          var t,
            n,
            o,
            r = e.length,
            a = i.relative[e[0].type],
            s = a || i.relative[" "],
            l = a ? 1 : 0,
            u = ge(
              function (e) {
                return e === t;
              },
              s,
              !0,
            ),
            d = ge(
              function (e) {
                return $.call(t, e) > -1;
              },
              s,
              !0,
            ),
            h = [
              function (e, n, i) {
                return (!a && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              },
            ];
          r > l;
          l++
        )
          if ((n = i.relative[e[l].type])) h = [ge(me(h), n)];
          else {
            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[S]) {
              for (o = ++l; r > o && !i.relative[e[o].type]; o++);
              return ve(
                l > 1 && me(h),
                l > 1 && Te(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(X, "$1"),
                n,
                o > l && Se(e.slice(l, o)),
                r > o && Se((e = e.slice(o))),
                r > o && Te(e),
              );
            }
            h.push(n);
          }
        return me(h);
      }
      function ye(e, t) {
        var n = t.length > 0,
          o = e.length > 0,
          r = function (r, a, s, l, u) {
            var d,
              h,
              f,
              T = 0,
              g = "0",
              m = r && [],
              b = [],
              v = c,
              S = r || (o && i.find.TAG("*", u)),
              y = (A += null == v ? 1 : Math.random() || 0.1),
              P = S.length;
            for (u && (c = a !== p && a); g !== P && null != (d = S[g]); g++) {
              if (o && d) {
                for (h = 0; (f = e[h++]); )
                  if (f(d, a, s)) {
                    l.push(d);
                    break;
                  }
                u && (A = y);
              }
              n && ((d = !f && d) && T--, r && m.push(d));
            }
            if (((T += g), n && g !== T)) {
              for (h = 0; (f = t[h++]); ) f(m, b, a, s);
              if (r) {
                if (T > 0) for (; g--; ) m[g] || b[g] || (b[g] = B.call(l));
                b = be(b);
              }
              (D.apply(l, b), u && !r && b.length > 0 && T + t.length > 1 && oe.uniqueSort(l));
            }
            return (u && ((A = y), (c = v)), m);
          };
        return n ? ae(r) : r;
      }
      return (
        (fe.prototype = i.filters = i.pseudos),
        (i.setFilters = new fe()),
        (a = oe.tokenize =
          function (e, t) {
            var n,
              o,
              r,
              a,
              s,
              l,
              c,
              u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = i.preFilter; s; ) {
              for (a in ((!n || (o = j.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
              (n = !1),
              (o = W.exec(s)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(X, " ") }), (s = s.slice(n.length))),
              i.filter))
                !(o = q[a].exec(s)) || (c[a] && !(o = c[a](o))) || ((n = o.shift()), r.push({ value: n, type: a, matches: o }), (s = s.slice(n.length)));
              if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : C(e, l).slice(0);
          }),
        (s = oe.compile =
          function (e, t) {
            var n,
              i = [],
              o = [],
              r = w[e + " "];
            if (!r) {
              for (t || (t = a(e)), n = t.length; n--; ) (r = Se(t[n]))[S] ? i.push(r) : o.push(r);
              (r = w(e, ye(o, i))).selector = e;
            }
            return r;
          }),
        (l = oe.select =
          function (e, t, o, r) {
            var l,
              c,
              u,
              d,
              h,
              p = "function" == typeof e && e,
              f = !r && a((e = p.selector || e));
            if (((o = o || []), 1 === f.length)) {
              if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && T && i.relative[c[1].type]) {
                if (!(t = (i.find.ID(u.matches[0].replace(ne, ie), t) || [])[0])) return o;
                (p && (t = t.parentNode), (e = e.slice(c.shift().value.length)));
              }
              for (l = q.needsContext.test(e) ? 0 : c.length; l-- && ((u = c[l]), !i.relative[(d = u.type)]); )
                if ((h = i.find[d]) && (r = h(u.matches[0].replace(ne, ie), (ee.test(c[0].type) && pe(t.parentNode)) || t))) {
                  if ((c.splice(l, 1), !(e = r.length && Te(c)))) return (D.apply(o, r), o);
                  break;
                }
            }
            return ((p || s(e, f))(r, t, !T, o, (ee.test(e) && pe(t.parentNode)) || t), o);
          }),
        (n.sortStable = S.split("").sort(H).join("") === S),
        (n.detectDuplicates = !!d),
        h(),
        (n.sortDetached = se(function (e) {
          return 1 & e.compareDocumentPosition(p.createElement("div"));
        })),
        se(function (e) {
          return ((e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href"));
        }) ||
          le("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          se(function (e) {
            return ((e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value"));
          })) ||
          le("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
          }),
        se(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          le(L, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
          }),
        oe
      );
    })(e);
    ((p.find = v),
      (p.expr = v.selectors),
      (p.expr[":"] = p.expr.pseudos),
      (p.unique = v.uniqueSort),
      (p.text = v.getText),
      (p.isXMLDoc = v.isXML),
      (p.contains = v.contains));
    var S = p.expr.match.needsContext,
      y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      A = /^.[^:#\[\.,]*$/;
    function P(e, t, n) {
      if (p.isFunction(t))
        return p.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return p.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (A.test(t)) return p.filter(t, e, n);
        t = p.filter(t, e);
      }
      return p.grep(e, function (e) {
        return a.call(t, e) >= 0 !== n;
      });
    }
    ((p.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? p.find.matchesSelector(i, e)
            ? [i]
            : []
          : p.find.matches(
              e,
              p.grep(t, function (e) {
                return 1 === e.nodeType;
              }),
            )
      );
    }),
      p.fn.extend({
        find: function (e) {
          var t,
            n = this.length,
            i = [],
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              p(e).filter(function () {
                for (t = 0; n > t; t++) if (p.contains(o[t], this)) return !0;
              }),
            );
          for (t = 0; n > t; t++) p.find(e, o[t], i);
          return (((i = this.pushStack(n > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e), i);
        },
        filter: function (e) {
          return this.pushStack(P(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(P(this, e || [], !0));
        },
        is: function (e) {
          return !!P(this, "string" == typeof e && S.test(e) ? p(e) : e || [], !1).length;
        },
      }));
    var M,
      C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      w = (p.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
          if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : C.exec(e)) || (!n[1] && t))
            return !t || t.jquery ? (t || M).find(e) : this.constructor(t).find(e);
          if (n[1]) {
            if (
              ((t = t instanceof p ? t[0] : t),
              p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : d, !0)),
              y.test(n[1]) && p.isPlainObject(t))
            )
              for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
          }
          return ((i = d.getElementById(n[2])) && i.parentNode && ((this.length = 1), (this[0] = i)), (this.context = d), (this.selector = e), this);
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : p.isFunction(e)
            ? void 0 !== M.ready
              ? M.ready(e)
              : e(p)
            : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), p.makeArray(e, this));
      });
    ((w.prototype = p.fn), (M = p(d)));
    var H = /^(?:parents|prev(?:Until|All))/,
      G = { children: !0, contents: !0, next: !0, prev: !0 };
    function x(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    (p.extend({
      dir: function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && p(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    }),
      p.fn.extend({
        has: function (e) {
          var t = p(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; n > e; e++) if (p.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          for (var n, i = 0, o = this.length, r = [], a = S.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; o > i; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                r.push(n);
                break;
              }
          return this.pushStack(r.length > 1 ? p.unique(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? a.call(p(e), this[0])
              : a.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function (e, t) {
          return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
      p.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return p.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return p.dir(e, "parentNode", n);
          },
          next: function (e) {
            return x(e, "nextSibling");
          },
          prev: function (e) {
            return x(e, "previousSibling");
          },
          nextAll: function (e) {
            return p.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return p.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return p.dir(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return p.dir(e, "previousSibling", n);
          },
          siblings: function (e) {
            return p.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return p.sibling(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || p.merge([], e.childNodes);
          },
        },
        function (e, t) {
          p.fn[e] = function (n, i) {
            var o = p.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (o = p.filter(i, o)),
              this.length > 1 && (G[e] || p.unique(o), H.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        },
      ));
    var k,
      N = /\S+/g,
      B = {};
    function E() {
      (d.removeEventListener("DOMContentLoaded", E, !1), e.removeEventListener("load", E, !1), p.ready());
    }
    ((p.Callbacks = function (e) {
      e =
        "string" == typeof e
          ? B[e] ||
            (function (e) {
              var t = (B[e] = {});
              return (
                p.each(e.match(N) || [], function (e, n) {
                  t[n] = !0;
                }),
                t
              );
            })(e)
          : p.extend({}, e);
      var t,
        n,
        i,
        o,
        r,
        a,
        s = [],
        l = !e.once && [],
        c = function (d) {
          for (t = e.memory && d, n = !0, a = o || 0, o = 0, r = s.length, i = !0; s && r > a; a++)
            if (!1 === s[a].apply(d[0], d[1]) && e.stopOnFalse) {
              t = !1;
              break;
            }
          ((i = !1), s && (l ? l.length && c(l.shift()) : t ? (s = []) : u.disable()));
        },
        u = {
          add: function () {
            if (s) {
              var n = s.length;
              (!(function t(n) {
                p.each(n, function (n, i) {
                  var o = p.type(i);
                  "function" === o ? (e.unique && u.has(i)) || s.push(i) : i && i.length && "string" !== o && t(i);
                });
              })(arguments),
                i ? (r = s.length) : t && ((o = n), c(t)));
            }
            return this;
          },
          remove: function () {
            return (
              s &&
                p.each(arguments, function (e, t) {
                  for (var n; (n = p.inArray(t, s, n)) > -1; ) (s.splice(n, 1), i && (r >= n && r--, a >= n && a--));
                }),
              this
            );
          },
          has: function (e) {
            return e ? p.inArray(e, s) > -1 : !(!s || !s.length);
          },
          empty: function () {
            return ((s = []), (r = 0), this);
          },
          disable: function () {
            return ((s = l = t = void 0), this);
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return ((l = void 0), t || u.disable(), this);
          },
          locked: function () {
            return !l;
          },
          fireWith: function (e, t) {
            return (!s || (n && !l) || ((t = [e, (t = t || []).slice ? t.slice() : t]), i ? l.push(t) : c(t)), this);
          },
          fire: function () {
            return (u.fireWith(this, arguments), this);
          },
          fired: function () {
            return !!n;
          },
        };
      return u;
    }),
      p.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", p.Callbacks("once memory"), "resolved"],
              ["reject", "fail", p.Callbacks("once memory"), "rejected"],
              ["notify", "progress", p.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return (o.done(arguments).fail(arguments), this);
              },
              then: function () {
                var e = arguments;
                return p
                  .Deferred(function (n) {
                    (p.each(t, function (t, r) {
                      var a = p.isFunction(e[t]) && e[t];
                      o[r[1]](function () {
                        var e = a && a.apply(this, arguments);
                        e && p.isFunction(e.promise)
                          ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                          : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments);
                      });
                    }),
                      (e = null));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? p.extend(e, i) : i;
              },
            },
            o = {};
          return (
            (i.pipe = i.then),
            p.each(t, function (e, r) {
              var a = r[2],
                s = r[3];
              ((i[r[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock,
                  ),
                (o[r[0]] = function () {
                  return (o[r[0] + "With"](this === o ? i : this, arguments), this);
                }),
                (o[r[0] + "With"] = a.fireWith));
            }),
            i.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          var t,
            n,
            o,
            r = 0,
            a = i.call(arguments),
            s = a.length,
            l = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
            c = 1 === l ? e : p.Deferred(),
            u = function (e, n, o) {
              return function (r) {
                ((n[e] = this), (o[e] = arguments.length > 1 ? i.call(arguments) : r), o === t ? c.notifyWith(n, o) : --l || c.resolveWith(n, o));
              };
            };
          if (s > 1)
            for (t = new Array(s), n = new Array(s), o = new Array(s); s > r; r++)
              a[r] && p.isFunction(a[r].promise)
                ? a[r]
                    .promise()
                    .done(u(r, o, a))
                    .fail(c.reject)
                    .progress(u(r, n, t))
                : --l;
          return (l || c.resolveWith(o, a), c.promise());
        },
      }),
      (p.fn.ready = function (e) {
        return (p.ready.promise().done(e), this);
      }),
      p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? p.readyWait++ : p.ready(!0);
        },
        ready: function (e) {
          (!0 === e ? --p.readyWait : p.isReady) ||
            ((p.isReady = !0),
            (!0 !== e && --p.readyWait > 0) || (k.resolveWith(d, [p]), p.fn.triggerHandler && (p(d).triggerHandler("ready"), p(d).off("ready"))));
        },
      }),
      (p.ready.promise = function (t) {
        return (
          k ||
            ((k = p.Deferred()),
            "complete" === d.readyState ? setTimeout(p.ready) : (d.addEventListener("DOMContentLoaded", E, !1), e.addEventListener("load", E, !1))),
          k.promise(t)
        );
      }),
      p.ready.promise());
    var D = (p.access = function (e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === p.type(n)) for (s in ((o = !0), n)) p.access(e, t, s, n[s], !0, r, a);
      else if (
        void 0 !== i &&
        ((o = !0),
        p.isFunction(i) || (a = !0),
        c &&
          (a
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(p(e), n);
              }))),
        t)
      )
        for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    });
    function I() {
      (Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = p.expando + Math.random()));
    }
    ((p.acceptData = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }),
      (I.uid = 1),
      (I.accepts = p.acceptData),
      (I.prototype = {
        key: function (e) {
          if (!I.accepts(e)) return 0;
          var t = {},
            n = e[this.expando];
          if (!n) {
            n = I.uid++;
            try {
              ((t[this.expando] = { value: n }), Object.defineProperties(e, t));
            } catch (i) {
              ((t[this.expando] = n), p.extend(e, t));
            }
          }
          return (this.cache[n] || (this.cache[n] = {}), n);
        },
        set: function (e, t, n) {
          var i,
            o = this.key(e),
            r = this.cache[o];
          if ("string" == typeof t) r[t] = n;
          else if (p.isEmptyObject(r)) p.extend(this.cache[o], t);
          else for (i in t) r[i] = t[i];
          return r;
        },
        get: function (e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t];
        },
        access: function (e, t, n) {
          var i;
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? void 0 !== (i = this.get(e, t))
              ? i
              : this.get(e, p.camelCase(t))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i,
            o,
            r = this.key(e),
            a = this.cache[r];
          if (void 0 === t) this.cache[r] = {};
          else {
            (p.isArray(t) ? (i = t.concat(t.map(p.camelCase))) : ((o = p.camelCase(t)), t in a ? (i = [t, o]) : (i = (i = o) in a ? [i] : i.match(N) || [])),
              (n = i.length));
            for (; n--; ) delete a[i[n]];
          }
        },
        hasData: function (e) {
          return !p.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function (e) {
          e[this.expando] && delete this.cache[e[this.expando]];
        },
      }));
    var $ = new I(),
      L = new I(),
      _ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;
    function V(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (((i = "data-" + t.replace(O, "-$1").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
          try {
            n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : _.test(n) ? p.parseJSON(n) : n));
          } catch (e) {}
          L.set(e, t, n);
        } else n = void 0;
      return n;
    }
    (p.extend({
      hasData: function (e) {
        return L.hasData(e) || $.hasData(e);
      },
      data: function (e, t, n) {
        return L.access(e, t, n);
      },
      removeData: function (e, t) {
        L.remove(e, t);
      },
      _data: function (e, t, n) {
        return $.access(e, t, n);
      },
      _removeData: function (e, t) {
        $.remove(e, t);
      },
    }),
      p.fn.extend({
        data: function (e, t) {
          var n,
            i,
            o,
            r = this[0],
            a = r && r.attributes;
          if (void 0 === e) {
            if (this.length && ((o = L.get(r)), 1 === r.nodeType && !$.get(r, "hasDataAttrs"))) {
              for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = p.camelCase(i.slice(5))), V(r, i, o[i]));
              $.set(r, "hasDataAttrs", !0);
            }
            return o;
          }
          return "object" == typeof e
            ? this.each(function () {
                L.set(this, e);
              })
            : D(
                this,
                function (t) {
                  var n,
                    i = p.camelCase(e);
                  if (r && void 0 === t) {
                    if (void 0 !== (n = L.get(r, e))) return n;
                    if (void 0 !== (n = L.get(r, i))) return n;
                    if (void 0 !== (n = V(r, i, void 0))) return n;
                  } else
                    this.each(function () {
                      var n = L.get(this, i);
                      (L.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && L.set(this, e, t));
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0,
              );
        },
        removeData: function (e) {
          return this.each(function () {
            L.remove(this, e);
          });
        },
      }),
      p.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"), (i = $.get(e, t)), n && (!i || p.isArray(n) ? (i = $.access(e, t, p.makeArray(n))) : i.push(n)), i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = p.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = p._queueHooks(e, t);
          ("inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === t && n.unshift("inprogress"),
              delete r.stop,
              o.call(
                e,
                function () {
                  p.dequeue(e, t);
                },
                r,
              )),
            !i && r && r.empty.fire());
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            $.get(e, n) ||
            $.access(e, n, {
              empty: p.Callbacks("once memory").add(function () {
                $.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      p.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? p.queue(this[0], e)
              : void 0 === t
                ? this
                : this.each(function () {
                    var n = p.queue(this, e, t);
                    (p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e));
                  })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            p.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            o = p.Deferred(),
            r = this,
            a = this.length,
            s = function () {
              --i || o.resolveWith(r, [r]);
            };
          for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = $.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
          return (s(), o.promise(t));
        },
      }));
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      X = function (e, t) {
        return ((e = t || e), "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e));
      },
      j = /^(?:checkbox|radio)$/i;
    !(function () {
      var e = d.createDocumentFragment().appendChild(d.createElement("div")),
        t = d.createElement("input");
      (t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        (u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue));
    })();
    var W = "undefined";
    u.focusinBubbles = "onfocusin" in e;
    var K = /^key/,
      Q = /^(?:mouse|pointer|contextmenu)|click/,
      U = /^(?:focusinfocus|focusoutblur)$/,
      q = /^([^.]*)(?:\.(.+)|)$/;
    function z() {
      return !0;
    }
    function Y() {
      return !1;
    }
    function J() {
      try {
        return d.activeElement;
      } catch (e) {}
    }
    ((p.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r,
          a,
          s,
          l,
          c,
          u,
          d,
          h,
          f,
          T,
          g,
          m = $.get(e);
        if (m)
          for (
            n.handler && ((n = (r = n).handler), (o = r.selector)),
              n.guid || (n.guid = p.guid++),
              (l = m.events) || (l = m.events = {}),
              (a = m.handle) ||
                (a = m.handle =
                  function (t) {
                    return typeof p !== W && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0;
                  }),
              c = (t = (t || "").match(N) || [""]).length;
            c--;
          )
            ((f = g = (s = q.exec(t[c]) || [])[1]),
              (T = (s[2] || "").split(".").sort()),
              f &&
                ((d = p.event.special[f] || {}),
                (f = (o ? d.delegateType : d.bindType) || f),
                (d = p.event.special[f] || {}),
                (u = p.extend(
                  {
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: T.join("."),
                  },
                  r,
                )),
                (h = l[f]) ||
                  (((h = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, T, a)) || (e.addEventListener && e.addEventListener(f, a, !1))),
                d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                (p.event.global[f] = !0)));
      },
      remove: function (e, t, n, i, o) {
        var r,
          a,
          s,
          l,
          c,
          u,
          d,
          h,
          f,
          T,
          g,
          m = $.hasData(e) && $.get(e);
        if (m && (l = m.events)) {
          for (c = (t = (t || "").match(N) || [""]).length; c--; )
            if (((f = g = (s = q.exec(t[c]) || [])[1]), (T = (s[2] || "").split(".").sort()), f)) {
              for (
                d = p.event.special[f] || {},
                  h = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                  s = s[2] && new RegExp("(^|\\.)" + T.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = r = h.length;
                r--;
              )
                ((u = h[r]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (s && !s.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u)));
              a && !h.length && ((d.teardown && !1 !== d.teardown.call(e, T, m.handle)) || p.removeEvent(e, f, m.handle), delete l[f]);
            } else for (f in l) p.event.remove(e, f + t[c], n, i, !0);
          p.isEmptyObject(l) && (delete m.handle, $.remove(e, "events"));
        }
      },
      trigger: function (t, n, i, o) {
        var r,
          a,
          s,
          l,
          u,
          h,
          f,
          T = [i || d],
          g = c.call(t, "type") ? t.type : t,
          m = c.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = s = i = i || d),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !U.test(g + p.event.triggered) &&
            (g.indexOf(".") >= 0 && ((m = g.split(".")), (g = m.shift()), m.sort()),
            (u = g.indexOf(":") < 0 && "on" + g),
            ((t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
            (t.namespace = m.join(".")),
            (t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : p.makeArray(n, [t])),
            (f = p.event.special[g] || {}),
            o || !f.trigger || !1 !== f.trigger.apply(i, n)))
        ) {
          if (!o && !f.noBubble && !p.isWindow(i)) {
            for (l = f.delegateType || g, U.test(l + g) || (a = a.parentNode); a; a = a.parentNode) (T.push(a), (s = a));
            s === (i.ownerDocument || d) && T.push(s.defaultView || s.parentWindow || e);
          }
          for (r = 0; (a = T[r++]) && !t.isPropagationStopped(); )
            ((t.type = r > 1 ? l : f.bindType || g),
              (h = ($.get(a, "events") || {})[t.type] && $.get(a, "handle")) && h.apply(a, n),
              (h = u && a[u]) && h.apply && p.acceptData(a) && ((t.result = h.apply(a, n)), !1 === t.result && t.preventDefault()));
          return (
            (t.type = g),
            o ||
              t.isDefaultPrevented() ||
              (f._default && !1 !== f._default.apply(T.pop(), n)) ||
              !p.acceptData(i) ||
              (u &&
                p.isFunction(i[g]) &&
                !p.isWindow(i) &&
                ((s = i[u]) && (i[u] = null), (p.event.triggered = g), i[g](), (p.event.triggered = void 0), s && (i[u] = s))),
            t.result
          );
        }
      },
      dispatch: function (e) {
        e = p.event.fix(e);
        var t,
          n,
          o,
          r,
          a,
          s = [],
          l = i.call(arguments),
          c = ($.get(this, "events") || {})[e.type] || [],
          u = p.event.special[e.type] || {};
        if (((l[0] = e), (e.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, e))) {
          for (s = p.event.handlers.call(this, e, c), t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
            for (e.currentTarget = r.elem, n = 0; (a = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
              (!e.namespace_re || e.namespace_re.test(a.namespace)) &&
                ((e.handleObj = a),
                (e.data = a.data),
                void 0 !== (o = ((p.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) &&
                  !1 === (e.result = o) &&
                  (e.preventDefault(), e.stopPropagation()));
          return (u.postDispatch && u.postDispatch.call(this, e), e.result);
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          o,
          r,
          a = [],
          s = t.delegateCount,
          l = e.target;
        if (s && l.nodeType && (!e.button || "click" !== e.type))
          for (; l !== this; l = l.parentNode || this)
            if (!0 !== l.disabled || "click" !== e.type) {
              for (i = [], n = 0; s > n; n++)
                (void 0 === i[(o = (r = t[n]).selector + " ")] && (i[o] = r.needsContext ? p(o, this).index(l) >= 0 : p.find(o, this, null, [l]).length),
                  i[o] && i.push(r));
              i.length && a.push({ elem: l, handlers: i });
            }
        return (s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a);
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e);
        },
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n,
            i,
            o,
            r = t.button;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((i = (n = e.target.ownerDocument || d).documentElement),
              (o = n.body),
              (e.pageX = t.clientX + ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) - ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
              (e.pageY = t.clientY + ((i && i.scrollTop) || (o && o.scrollTop) || 0) - ((i && i.clientTop) || (o && o.clientTop) || 0))),
            e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[p.expando]) return e;
        var t,
          n,
          i,
          o = e.type,
          r = e,
          a = this.fixHooks[o];
        for (
          a || (this.fixHooks[o] = a = Q.test(o) ? this.mouseHooks : K.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new p.Event(r),
            t = i.length;
          t--;
        )
          e[(n = i[t])] = r[n];
        return (e.target || (e.target = d), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e);
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== J() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === J() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0;
          },
          _default: function (e) {
            return p.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, i) {
        var o = p.extend(new p.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
        (i ? p.event.trigger(o, null, t) : p.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault());
      },
    }),
      (p.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
      }),
      (p.Event = function (e, t) {
        return this instanceof p.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? z : Y))
              : (this.type = e),
            t && p.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || p.now()),
            void (this[p.expando] = !0))
          : new p.Event(e, t);
      }),
      (p.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function () {
          var e = this.originalEvent;
          ((this.isDefaultPrevented = z), e && e.preventDefault && e.preventDefault());
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          ((this.isPropagationStopped = z), e && e.stopPropagation && e.stopPropagation());
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          ((this.isImmediatePropagationStopped = z), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation());
        },
      }),
      p.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        p.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return ((!i || (i !== this && !p.contains(this, i))) && ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n);
          },
        };
      }),
      u.focusinBubbles ||
        p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0);
          };
          p.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                o = $.access(i, t);
              (o || i.addEventListener(e, n, !0), $.access(i, t, (o || 0) + 1));
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                o = $.access(i, t) - 1;
              o ? $.access(i, t, o) : (i.removeEventListener(e, n, !0), $.remove(i, t));
            },
          };
        }),
      p.fn.extend({
        on: function (e, t, n, i, o) {
          var r, a;
          if ("object" == typeof e) {
            for (a in ("string" != typeof t && ((n = n || t), (t = void 0)), e)) this.on(a, t, n, e[a], o);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = t), (n = t = void 0))
              : null == i && ("string" == typeof t ? ((i = n), (n = void 0)) : ((i = n), (n = t), (t = void 0))),
            !1 === i)
          )
            i = Y;
          else if (!i) return this;
          return (
            1 === o &&
              ((r = i),
              (i = function (e) {
                return (p().off(e), r.apply(this, arguments));
              }),
              (i.guid = r.guid || (r.guid = p.guid++))),
            this.each(function () {
              p.event.add(this, e, i, n, t);
            })
          );
        },
        one: function (e, t, n, i) {
          return this.on(e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return ((i = e.handleObj), p(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this);
          if ("object" == typeof e) {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
            !1 === n && (n = Y),
            this.each(function () {
              p.event.remove(this, e, n, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            p.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? p.event.trigger(e, t, n, !0) : void 0;
        },
      }));
    var Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ee = /<([\w:]+)/,
      te = /<|&#?\w+;/,
      ne = /<(?:script|style|link)/i,
      ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
      oe = /^$|\/(?:java|ecma)script/i,
      re = /^true\/(.*)/,
      ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      se = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function le(e, t) {
      return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function ce(e) {
      return ((e.type = (null !== e.getAttribute("type")) + "/" + e.type), e);
    }
    function ue(e) {
      var t = re.exec(e.type);
      return (t ? (e.type = t[1]) : e.removeAttribute("type"), e);
    }
    function de(e, t) {
      for (var n = 0, i = e.length; i > n; n++) $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"));
    }
    function he(e, t) {
      var n, i, o, r, a, s, l, c;
      if (1 === t.nodeType) {
        if ($.hasData(e) && ((r = $.access(e)), (a = $.set(t, r)), (c = r.events)))
          for (o in (delete a.handle, (a.events = {}), c)) for (n = 0, i = c[o].length; i > n; n++) p.event.add(t, o, c[o][n]);
        L.hasData(e) && ((s = L.access(e)), (l = p.extend({}, s)), L.set(t, l));
      }
    }
    function pe(e, t) {
      var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], n) : n;
    }
    function fe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && j.test(e.type) ? (t.checked = e.checked) : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    ((se.optgroup = se.option),
      (se.tbody = se.tfoot = se.colgroup = se.caption = se.thead),
      (se.th = se.td),
      p.extend({
        clone: function (e, t, n) {
          var i,
            o,
            r,
            a,
            s = e.cloneNode(!0),
            l = p.contains(e.ownerDocument, e);
          if (!(u.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || p.isXMLDoc(e)))
            for (a = pe(s), i = 0, o = (r = pe(e)).length; o > i; i++) fe(r[i], a[i]);
          if (t)
            if (n) for (r = r || pe(e), a = a || pe(s), i = 0, o = r.length; o > i; i++) he(r[i], a[i]);
            else he(e, s);
          return ((a = pe(s, "script")).length > 0 && de(a, !l && pe(e, "script")), s);
        },
        buildFragment: function (e, t, n, i) {
          for (var o, r, a, s, l, c, u = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++)
            if ((o = e[h]) || 0 === o)
              if ("object" === p.type(o)) p.merge(d, o.nodeType ? [o] : o);
              else if (te.test(o)) {
                for (
                  r = r || u.appendChild(t.createElement("div")),
                    a = (ee.exec(o) || ["", ""])[1].toLowerCase(),
                    s = se[a] || se._default,
                    r.innerHTML = s[1] + o.replace(Z, "<$1></$2>") + s[2],
                    c = s[0];
                  c--;
                )
                  r = r.lastChild;
                (p.merge(d, r.childNodes), ((r = u.firstChild).textContent = ""));
              } else d.push(t.createTextNode(o));
          for (u.textContent = "", h = 0; (o = d[h++]); )
            if ((!i || -1 === p.inArray(o, i)) && ((l = p.contains(o.ownerDocument, o)), (r = pe(u.appendChild(o), "script")), l && de(r), n))
              for (c = 0; (o = r[c++]); ) oe.test(o.type || "") && n.push(o);
          return u;
        },
        cleanData: function (e) {
          for (var t, n, i, o, r = p.event.special, a = 0; void 0 !== (n = e[a]); a++) {
            if (p.acceptData(n) && (o = n[$.expando]) && (t = $.cache[o])) {
              if (t.events) for (i in t.events) r[i] ? p.event.remove(n, i) : p.removeEvent(n, i, t.handle);
              $.cache[o] && delete $.cache[o];
            }
            delete L.cache[n[L.expando]];
          }
        },
      }),
      p.fn.extend({
        text: function (e) {
          return D(
            this,
            function (e) {
              return void 0 === e
                ? p.text(this)
                : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || le(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = le(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (var n, i = e ? p.filter(e, this) : this, o = 0; null != (n = i[o]); o++)
            (t || 1 !== n.nodeType || p.cleanData(pe(n)),
              n.parentNode && (t && p.contains(n.ownerDocument, n) && de(pe(n, "script")), n.parentNode.removeChild(n)));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(pe(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return p.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return D(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !ne.test(e) && !se[(ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(Z, "<$1></$2>");
                try {
                  for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (p.cleanData(pe(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              ((e = this.parentNode), p.cleanData(pe(this)), e && e.replaceChild(t, this));
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = o.apply([], e);
          var n,
            i,
            r,
            a,
            s,
            l,
            c = 0,
            d = this.length,
            h = this,
            f = d - 1,
            T = e[0],
            g = p.isFunction(T);
          if (g || (d > 1 && "string" == typeof T && !u.checkClone && ie.test(T)))
            return this.each(function (n) {
              var i = h.eq(n);
              (g && (e[0] = T.call(this, n, i.html())), i.domManip(e, t));
            });
          if (d && ((i = (n = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild), 1 === n.childNodes.length && (n = i), i)) {
            for (a = (r = p.map(pe(n, "script"), ce)).length; d > c; c++)
              ((s = n), c !== f && ((s = p.clone(s, !0, !0)), a && p.merge(r, pe(s, "script"))), t.call(this[c], s, c));
            if (a)
              for (l = r[r.length - 1].ownerDocument, p.map(r, ue), c = 0; a > c; c++)
                ((s = r[c]),
                  oe.test(s.type || "") &&
                    !$.access(s, "globalEval") &&
                    p.contains(l, s) &&
                    (s.src ? p._evalUrl && p._evalUrl(s.src) : p.globalEval(s.textContent.replace(ae, ""))));
          }
          return this;
        },
      }),
      p.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        p.fn[e] = function (e) {
          for (var n, i = [], o = p(e), a = o.length - 1, s = 0; a >= s; s++) ((n = s === a ? this : this.clone(!0)), p(o[s])[t](n), r.apply(i, n.get()));
          return this.pushStack(i);
        };
      }));
    var Te,
      ge = {};
    function me(t, n) {
      var i,
        o = p(n.createElement(t)).appendTo(n.body),
        r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : p.css(o[0], "display");
      return (o.detach(), r);
    }
    function be(e) {
      var t = d,
        n = ge[e];
      return (
        n ||
          (("none" !== (n = me(e, t)) && n) ||
            ((t = (Te = (Te || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
            t.close(),
            (n = me(e, t)),
            Te.detach()),
          (ge[e] = n)),
        n
      );
    }
    var ve = /^margin/,
      Se = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
      ye = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      };
    function Ae(e, t, n) {
      var i,
        o,
        r,
        a,
        s = e.style;
      return (
        (n = n || ye(e)) && (a = n.getPropertyValue(t) || n[t]),
        n &&
          ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)),
          Se.test(a) &&
            ve.test(t) &&
            ((i = s.width),
            (o = s.minWidth),
            (r = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = i),
            (s.minWidth = o),
            (s.maxWidth = r))),
        void 0 !== a ? a + "" : a
      );
    }
    function Pe(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments);
        },
      };
    }
    (!(function () {
      var t,
        n,
        i = d.documentElement,
        o = d.createElement("div"),
        r = d.createElement("div");
      if (r.style) {
        function a() {
          ((r.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (r.innerHTML = ""),
            i.appendChild(o));
          var a = e.getComputedStyle(r, null);
          ((t = "1%" !== a.top), (n = "4px" === a.width), i.removeChild(o));
        }
        ((r.style.backgroundClip = "content-box"),
          (r.cloneNode(!0).style.backgroundClip = ""),
          (u.clearCloneStyle = "content-box" === r.style.backgroundClip),
          (o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
          o.appendChild(r),
          e.getComputedStyle &&
            p.extend(u, {
              pixelPosition: function () {
                return (a(), t);
              },
              boxSizingReliable: function () {
                return (null == n && a(), n);
              },
              reliableMarginRight: function () {
                var t,
                  n = r.appendChild(d.createElement("div"));
                return (
                  (n.style.cssText = r.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                  (n.style.marginRight = n.style.width = "0"),
                  (r.style.width = "1px"),
                  i.appendChild(o),
                  (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                  i.removeChild(o),
                  t
                );
              },
            }));
      }
    })(),
      (p.swap = function (e, t, n, i) {
        var o,
          r,
          a = {};
        for (r in t) ((a[r] = e.style[r]), (e.style[r] = t[r]));
        for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
        return o;
      }));
    var Me = /^(none|table(?!-c[ea]).+)/,
      Ce = new RegExp("^(" + F + ")(.*)$", "i"),
      we = new RegExp("^([+-])=(" + F + ")", "i"),
      He = { position: "absolute", visibility: "hidden", display: "block" },
      Ge = { letterSpacing: "0", fontWeight: "400" },
      xe = ["Webkit", "O", "Moz", "ms"];
    function ke(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = xe.length; o--; ) if ((t = xe[o] + n) in e) return t;
      return i;
    }
    function Ne(e, t, n) {
      var i = Ce.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function Be(e, t, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)
        ("margin" === n && (a += p.css(e, n + R[r], !0, o)),
          i
            ? ("content" === n && (a -= p.css(e, "padding" + R[r], !0, o)), "margin" !== n && (a -= p.css(e, "border" + R[r] + "Width", !0, o)))
            : ((a += p.css(e, "padding" + R[r], !0, o)), "padding" !== n && (a += p.css(e, "border" + R[r] + "Width", !0, o))));
      return a;
    }
    function Ee(e, t, n) {
      var i = !0,
        o = "width" === t ? e.offsetWidth : e.offsetHeight,
        r = ye(e),
        a = "border-box" === p.css(e, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (((0 > (o = Ae(e, t, r)) || null == o) && (o = e.style[t]), Se.test(o))) return o;
        ((i = a && (u.boxSizingReliable() || o === e.style[t])), (o = parseFloat(o) || 0));
      }
      return o + Be(e, t, n || (a ? "border" : "content"), i, r) + "px";
    }
    function De(e, t) {
      for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++)
        (i = e[a]).style &&
          ((r[a] = $.get(i, "olddisplay")),
          (n = i.style.display),
          t
            ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && X(i) && (r[a] = $.access(i, "olddisplay", be(i.nodeName))))
            : ((o = X(i)), ("none" === n && o) || $.set(i, "olddisplay", o ? n : p.css(i, "display"))));
      for (a = 0; s > a; a++) (i = e[a]).style && ((t && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = t ? r[a] || "" : "none"));
      return e;
    }
    function Ie(e, t, n, i, o) {
      return new Ie.prototype.init(e, t, n, i, o);
    }
    (p.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Ae(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            a,
            s = p.camelCase(t),
            l = e.style;
          return (
            (t = p.cssProps[s] || (p.cssProps[s] = ke(l, s))),
            (a = p.cssHooks[t] || p.cssHooks[s]),
            void 0 === n
              ? a && "get" in a && void 0 !== (o = a.get(e, !1, i))
                ? o
                : l[t]
              : ("string" === (r = typeof n) && (o = we.exec(n)) && ((n = (o[1] + 1) * o[2] + parseFloat(p.css(e, t))), (r = "number")),
                void (
                  null != n &&
                  n == n &&
                  ("number" !== r || p.cssNumber[s] || (n += "px"),
                  u.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (l[t] = n))
                ))
          );
        }
      },
      css: function (e, t, n, i) {
        var o,
          r,
          a,
          s = p.camelCase(t);
        return (
          (t = p.cssProps[s] || (p.cssProps[s] = ke(e.style, s))),
          (a = p.cssHooks[t] || p.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
          void 0 === o && (o = Ae(e, t, i)),
          "normal" === o && t in Ge && (o = Ge[t]),
          "" === n || n ? ((r = parseFloat(o)), !0 === n || p.isNumeric(r) ? r || 0 : o) : o
        );
      },
    }),
      p.each(["height", "width"], function (e, t) {
        p.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? Me.test(p.css(e, "display")) && 0 === e.offsetWidth
                ? p.swap(e, He, function () {
                    return Ee(e, t, i);
                  })
                : Ee(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var o = i && ye(e);
            return Ne(0, n, i ? Be(e, t, i, "border-box" === p.css(e, "boxSizing", !1, o), o) : 0);
          },
        };
      }),
      (p.cssHooks.marginRight = Pe(u.reliableMarginRight, function (e, t) {
        return t ? p.swap(e, { display: "inline-block" }, Ae, [e, "marginRight"]) : void 0;
      })),
      p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        ((p.cssHooks[e + t] = {
          expand: function (n) {
            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + R[i] + t] = r[i] || r[i - 2] || r[0];
            return o;
          },
        }),
          ve.test(e) || (p.cssHooks[e + t].set = Ne));
      }),
      p.fn.extend({
        css: function (e, t) {
          return D(
            this,
            function (e, t, n) {
              var i,
                o,
                r = {},
                a = 0;
              if (p.isArray(t)) {
                for (i = ye(e), o = t.length; o > a; a++) r[t[a]] = p.css(e, t[a], !1, i);
                return r;
              }
              return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
        show: function () {
          return De(this, !0);
        },
        hide: function () {
          return De(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                X(this) ? p(this).show() : p(this).hide();
              });
        },
      }),
      (p.Tween = Ie),
      (Ie.prototype = {
        constructor: Ie,
        init: function (e, t, n, i, o, r) {
          ((this.elem = e),
            (this.prop = n),
            (this.easing = o || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (p.cssNumber[n] ? "" : "px")));
        },
        cur: function () {
          var e = Ie.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ie.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = Ie.propHooks[this.prop];
          return (
            (this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ie.propHooks._default.set(this),
            this
          );
        },
      }),
      (Ie.prototype.init.prototype = Ie.prototype),
      (Ie.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop])
              ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0
              : e.elem[e.prop];
          },
          set: function (e) {
            p.fx.step[e.prop]
              ? p.fx.step[e.prop](e)
              : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop])
                ? p.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (Ie.propHooks.scrollTop = Ie.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (p.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (p.fx = Ie.prototype.init),
      (p.fx.step = {}));
    var $e,
      Le,
      _e = /^(?:toggle|show|hide)$/,
      Oe = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
      Ve = /queueHooks$/,
      Fe = [
        function (e, t, n) {
          var i,
            o,
            r,
            a,
            s,
            l,
            c,
            u = this,
            d = {},
            h = e.style,
            f = e.nodeType && X(e),
            T = $.get(e, "fxshow");
          for (i in (n.queue ||
            (null == (s = p._queueHooks(e, "fx")).unqueued &&
              ((s.unqueued = 0),
              (l = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || l();
              })),
            s.unqueued++,
            u.always(function () {
              u.always(function () {
                (s.unqueued--, p.queue(e, "fx").length || s.empty.fire());
              });
            })),
          1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            (c = p.css(e, "display")),
            "inline" === ("none" === c ? $.get(e, "olddisplay") || be(e.nodeName) : c) && "none" === p.css(e, "float") && (h.display = "inline-block")),
          n.overflow &&
            ((h.overflow = "hidden"),
            u.always(function () {
              ((h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]));
            })),
          t))
            if (((o = t[i]), _e.exec(o))) {
              if ((delete t[i], (r = r || "toggle" === o), o === (f ? "hide" : "show"))) {
                if ("show" !== o || !T || void 0 === T[i]) continue;
                f = !0;
              }
              d[i] = (T && T[i]) || p.style(e, i);
            } else c = void 0;
          if (p.isEmptyObject(d)) "inline" === ("none" === c ? be(e.nodeName) : c) && (h.display = c);
          else
            for (i in (T ? "hidden" in T && (f = T.hidden) : (T = $.access(e, "fxshow", {})),
            r && (T.hidden = !f),
            f
              ? p(e).show()
              : u.done(function () {
                  p(e).hide();
                }),
            u.done(function () {
              var t;
              for (t in ($.remove(e, "fxshow"), d)) p.style(e, t, d[t]);
            }),
            d))
              ((a = We(f ? T[i] : 0, i, u)), i in T || ((T[i] = a.start), f && ((a.end = a.start), (a.start = "width" === i || "height" === i ? 1 : 0))));
        },
      ],
      Re = {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t),
              i = n.cur(),
              o = Oe.exec(t),
              r = (o && o[3]) || (p.cssNumber[e] ? "" : "px"),
              a = (p.cssNumber[e] || ("px" !== r && +i)) && Oe.exec(p.css(n.elem, e)),
              s = 1,
              l = 20;
            if (a && a[3] !== r) {
              ((r = r || a[3]), (o = o || []), (a = +i || 1));
              do {
                ((a /= s = s || ".5"), p.style(n.elem, e, a + r));
              } while (s !== (s = n.cur() / i) && 1 !== s && --l);
            }
            return (o && ((a = n.start = +a || +i || 0), (n.unit = r), (n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2])), n);
          },
        ],
      };
    function Xe() {
      return (
        setTimeout(function () {
          $e = void 0;
        }),
        ($e = p.now())
      );
    }
    function je(e, t) {
      var n,
        i = 0,
        o = { height: e };
      for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = R[i])] = o["padding" + n] = e;
      return (t && (o.opacity = o.width = e), o);
    }
    function We(e, t, n) {
      for (var i, o = (Re[t] || []).concat(Re["*"]), r = 0, a = o.length; a > r; r++) if ((i = o[r].call(n, t, e))) return i;
    }
    function Ke(e, t, n) {
      var i,
        o,
        r = 0,
        a = Fe.length,
        s = p.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (var t = $e || Xe(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; a > r; r++)
            c.tweens[r].run(i);
          return (s.notifyWith(e, [c, i, n]), 1 > i && a ? n : (s.resolveWith(e, [c]), !1));
        },
        c = s.promise({
          elem: e,
          props: p.extend({}, t),
          opts: p.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: $e || Xe(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return (c.tweens.push(i), i);
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; i > n; n++) c.tweens[n].run(1);
            return (t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this);
          },
        }),
        u = c.props;
      for (
        (function (e, t) {
          var n, i, o, r, a;
          for (n in e)
            if (
              ((o = t[(i = p.camelCase(n))]),
              (r = e[n]),
              p.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
              n !== i && ((e[i] = r), delete e[n]),
              (a = p.cssHooks[i]) && ("expand" in a))
            )
              for (n in ((r = a.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
            else t[i] = o;
        })(u, c.opts.specialEasing);
        a > r;
        r++
      )
        if ((i = Fe[r].call(c, e, u, c.opts))) return i;
      return (
        p.map(u, We, c),
        p.isFunction(c.opts.start) && c.opts.start.call(e, c),
        p.fx.timer(p.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
      );
    }
    ((p.Animation = p.extend(Ke, {
      tweener: function (e, t) {
        p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        for (var n, i = 0, o = e.length; o > i; i++) ((n = e[i]), (Re[n] = Re[n] || []), Re[n].unshift(t));
      },
      prefilter: function (e, t) {
        t ? Fe.unshift(e) : Fe.push(e);
      },
    })),
      (p.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? p.extend({}, e)
            : { complete: n || (!n && t) || (p.isFunction(e) && e), duration: e, easing: (n && t) || (t && !p.isFunction(t) && t) };
        return (
          (i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            (p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue));
          }),
          i
        );
      }),
      p.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(X).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var o = p.isEmptyObject(e),
            r = p.speed(t, n, i),
            a = function () {
              var t = Ke(this, p.extend({}, e), r);
              (o || $.get(this, "finish")) && t.stop(!0);
            };
          return ((a.finish = a), o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a));
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            (delete e.stop, t(n));
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                o = null != e && e + "queueHooks",
                r = p.timers,
                a = $.get(this);
              if (o) a[o] && a[o].stop && i(a[o]);
              else for (o in a) a[o] && a[o].stop && Ve.test(o) && i(a[o]);
              for (o = r.length; o--; ) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
              (t || !n) && p.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = $.get(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = p.timers,
                a = i ? i.length : 0;
              for (n.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; )
                r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      p.each(["toggle", "show", "hide"], function (e, t) {
        var n = p.fn[t];
        p.fn[t] = function (e, i, o) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(je(t, !0), e, i, o);
        };
      }),
      p.each(
        {
          slideDown: je("show"),
          slideUp: je("hide"),
          slideToggle: je("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          p.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        },
      ),
      (p.timers = []),
      (p.fx.tick = function () {
        var e,
          t = 0,
          n = p.timers;
        for ($e = p.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        (n.length || p.fx.stop(), ($e = void 0));
      }),
      (p.fx.timer = function (e) {
        (p.timers.push(e), e() ? p.fx.start() : p.timers.pop());
      }),
      (p.fx.interval = 13),
      (p.fx.start = function () {
        Le || (Le = setInterval(p.fx.tick, p.fx.interval));
      }),
      (p.fx.stop = function () {
        (clearInterval(Le), (Le = null));
      }),
      (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (p.fn.delay = function (e, t) {
        return (
          (e = (p.fx && p.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var e = d.createElement("input"),
          t = d.createElement("select"),
          n = t.appendChild(d.createElement("option"));
        ((e.type = "checkbox"),
          (u.checkOn = "" !== e.value),
          (u.optSelected = n.selected),
          (t.disabled = !0),
          (u.optDisabled = !n.disabled),
          ((e = d.createElement("input")).value = "t"),
          (e.type = "radio"),
          (u.radioValue = "t" === e.value));
      })());
    var Qe,
      Ue = p.expr.attrHandle;
    (p.fn.extend({
      attr: function (e, t) {
        return D(this, p.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          p.removeAttr(this, e);
        });
      },
    }),
      p.extend({
        attr: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (e && 3 !== r && 8 !== r && 2 !== r)
            return typeof e.getAttribute === W
              ? p.prop(e, t, n)
              : ((1 === r && p.isXMLDoc(e)) || ((t = t.toLowerCase()), (i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Qe : undefined))),
                void 0 === n
                  ? i && "get" in i && null !== (o = i.get(e, t))
                    ? o
                    : null == (o = p.find.attr(e, t))
                      ? void 0
                      : o
                  : null !== n
                    ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                      ? o
                      : (e.setAttribute(t, n + ""), n)
                    : void p.removeAttr(e, t));
        },
        removeAttr: function (e, t) {
          var n,
            i,
            o = 0,
            r = t && t.match(N);
          if (r && 1 === e.nodeType) for (; (n = r[o++]); ) ((i = p.propFix[n] || n), p.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!u.radioValue && "radio" === t && p.nodeName(e, "input")) {
                var n = e.value;
                return (e.setAttribute("type", t), n && (e.value = n), t);
              }
            },
          },
        },
      }),
      (Qe = {
        set: function (e, t, n) {
          return (!1 === t ? p.removeAttr(e, n) : e.setAttribute(n, n), n);
        },
      }),
      p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ue[t] || p.find.attr;
        Ue[t] = function (e, t, i) {
          var o, r;
          return (i || ((r = Ue[t]), (Ue[t] = o), (o = null != n(e, t, i) ? t.toLowerCase() : null), (Ue[t] = r)), o);
        };
      }));
    var qe = /^(?:input|select|textarea|button)$/i;
    (p.fn.extend({
      prop: function (e, t) {
        return D(this, p.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[p.propFix[e] || e];
        });
      },
    }),
      p.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (e && 3 !== r && 8 !== r && 2 !== r)
            return (
              (1 !== r || !p.isXMLDoc(e)) && ((t = p.propFix[t] || t), (o = p.propHooks[t])),
              void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              return e.hasAttribute("tabindex") || qe.test(e.nodeName) || e.href ? e.tabIndex : -1;
            },
          },
        },
      }),
      u.optSelected ||
        (p.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return (t && t.parentNode && t.parentNode.selectedIndex, null);
          },
        }),
      p.each(
        ["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function () {
          p.propFix[this.toLowerCase()] = this;
        },
      ));
    var ze = /[\t\r\n\f]/g;
    p.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s = "string" == typeof e && e,
          l = 0,
          c = this.length;
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).addClass(e.call(this, t, this.className));
          });
        if (s)
          for (t = (e || "").match(N) || []; c > l; l++)
            if ((i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(ze, " ") : " "))) {
              for (r = 0; (o = t[r++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              ((a = p.trim(i)), n.className !== a && (n.className = a));
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s = 0 === arguments.length || ("string" == typeof e && e),
          l = 0,
          c = this.length;
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).removeClass(e.call(this, t, this.className));
          });
        if (s)
          for (t = (e || "").match(N) || []; c > l; l++)
            if ((i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(ze, " ") : ""))) {
              for (r = 0; (o = t[r++]); ) for (; i.indexOf(" " + o + " ") >= 0; ) i = i.replace(" " + o + " ", " ");
              ((a = e ? p.trim(i) : ""), n.className !== a && (n.className = a));
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : this.each(
              p.isFunction(e)
                ? function (n) {
                    p(this).toggleClass(e.call(this, n, this.className, t), t);
                  }
                : function () {
                    if ("string" === n) for (var t, i = 0, o = p(this), r = e.match(N) || []; (t = r[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (n === W || "boolean" === n) &&
                        (this.className && $.set(this, "__className__", this.className),
                        (this.className = this.className || !1 === e ? "" : $.get(this, "__className__") || ""));
                  },
            );
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
          if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ze, " ").indexOf(t) >= 0) return !0;
        return !1;
      },
    });
    var Ye = /\r/g;
    (p.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = p.isFunction(e)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? e.call(this, n, p(this).val()) : e)
                  ? (o = "")
                  : "number" == typeof o
                    ? (o += "")
                    : p.isArray(o) &&
                      (o = p.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                ((t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
            ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
                ? n.replace(Ye, "")
                : null == n
                  ? ""
                  : n
            : void 0;
      },
    }),
      p.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = p.find.attr(e, "value");
              return null != t ? t : p.trim(p.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  o = e.selectedIndex,
                  r = "select-one" === e.type || 0 > o,
                  a = r ? null : [],
                  s = r ? o + 1 : i.length,
                  l = 0 > o ? s : r ? o : 0;
                s > l;
                l++
              )
                if (
                  !(
                    (!(n = i[l]).selected && l !== o) ||
                    (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))
                  )
                ) {
                  if (((t = p(n).val()), r)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              for (var n, i, o = e.options, r = p.makeArray(t), a = o.length; a--; ) ((i = o[a]).selected = p.inArray(i.value, r) >= 0) && (n = !0);
              return (n || (e.selectedIndex = -1), r);
            },
          },
        },
      }),
      p.each(["radio", "checkbox"], function () {
        ((p.valHooks[this] = {
          set: function (e, t) {
            return p.isArray(t) ? (e.checked = p.inArray(p(e).val(), t) >= 0) : void 0;
          },
        }),
          u.checkOn ||
            (p.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            }));
      }),
      p.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " ",
        ),
        function (e, t) {
          p.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
          };
        },
      ),
      p.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
      }));
    var Je = p.now(),
      Ze = /\?/;
    ((p.parseJSON = function (e) {
      return JSON.parse(e + "");
    }),
      (p.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return ((!t || t.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + e), t);
      }));
    var et,
      tt,
      nt = /#.*$/,
      it = /([?&])_=[^&]*/,
      ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      rt = /^(?:GET|HEAD)$/,
      at = /^\/\//,
      st = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lt = {},
      ct = {},
      ut = "*/".concat("*");
    try {
      tt = location.href;
    } catch (e) {
      (((tt = d.createElement("a")).href = ""), (tt = tt.href));
    }
    function dt(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          o = 0,
          r = t.toLowerCase().match(N) || [];
        if (p.isFunction(n)) for (; (i = r[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      };
    }
    function ht(e, t, n, i) {
      var o = {},
        r = e === ct;
      function a(s) {
        var l;
        return (
          (o[s] = !0),
          p.each(e[s] || [], function (e, s) {
            var c = s(t, n, i);
            return "string" != typeof c || r || o[c] ? (r ? !(l = c) : void 0) : (t.dataTypes.unshift(c), a(c), !1);
          }),
          l
        );
      }
      return a(t.dataTypes[0]) || (!o["*"] && a("*"));
    }
    function pt(e, t) {
      var n,
        i,
        o = p.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return (i && p.extend(!0, e, i), e);
    }
    ((et = st.exec(tt.toLowerCase()) || []),
      p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: tt,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(et[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: { "*": ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
          converters: { "* text": String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? pt(pt(e, p.ajaxSettings), t) : pt(p.ajaxSettings, e);
        },
        ajaxPrefilter: dt(lt),
        ajaxTransport: dt(ct),
        ajax: function (e, t) {
          ("object" == typeof e && ((t = e), (e = void 0)), (t = t || {}));
          var n,
            i,
            o,
            r,
            a,
            s,
            l,
            c,
            u = p.ajaxSetup({}, t),
            d = u.context || u,
            h = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
            f = p.Deferred(),
            T = p.Callbacks("once memory"),
            g = u.statusCode || {},
            m = {},
            b = {},
            v = 0,
            S = "canceled",
            y = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === v) {
                  if (!r) for (r = {}; (t = ot.exec(o)); ) r[t[1].toLowerCase()] = t[2];
                  t = r[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === v ? o : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return (v || ((e = b[n] = b[n] || e), (m[e] = t)), this);
              },
              overrideMimeType: function (e) {
                return (v || (u.mimeType = e), this);
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > v) for (t in e) g[t] = [g[t], e[t]];
                  else y.always(e[y.status]);
                return this;
              },
              abort: function (e) {
                var t = e || S;
                return (n && n.abort(t), A(0, t), this);
              },
            };
          if (
            ((f.promise(y).complete = T.add),
            (y.success = y.done),
            (y.error = y.fail),
            (u.url = ((e || u.url || tt) + "").replace(nt, "").replace(at, et[1] + "//")),
            (u.type = t.method || t.type || u.method || u.type),
            (u.dataTypes = p
              .trim(u.dataType || "*")
              .toLowerCase()
              .match(N) || [""]),
            null == u.crossDomain &&
              ((s = st.exec(u.url.toLowerCase())),
              (u.crossDomain = !(
                !s ||
                (s[1] === et[1] && s[2] === et[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (et[3] || ("http:" === et[1] ? "80" : "443")))
              ))),
            u.data && u.processData && "string" != typeof u.data && (u.data = p.param(u.data, u.traditional)),
            ht(lt, u, t, y),
            2 === v)
          )
            return y;
          for (c in ((l = u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"),
          (u.type = u.type.toUpperCase()),
          (u.hasContent = !rt.test(u.type)),
          (i = u.url),
          u.hasContent ||
            (u.data && ((i = u.url += (Ze.test(i) ? "&" : "?") + u.data), delete u.data),
            !1 === u.cache && (u.url = it.test(i) ? i.replace(it, "$1_=" + Je++) : i + (Ze.test(i) ? "&" : "?") + "_=" + Je++)),
          u.ifModified &&
            (p.lastModified[i] && y.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && y.setRequestHeader("If-None-Match", p.etag[i])),
          ((u.data && u.hasContent && !1 !== u.contentType) || t.contentType) && y.setRequestHeader("Content-Type", u.contentType),
          y.setRequestHeader(
            "Accept",
            u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ut + "; q=0.01" : "") : u.accepts["*"],
          ),
          u.headers))
            y.setRequestHeader(c, u.headers[c]);
          if (u.beforeSend && (!1 === u.beforeSend.call(d, y, u) || 2 === v)) return y.abort();
          for (c in ((S = "abort"), { success: 1, error: 1, complete: 1 })) y[c](u[c]);
          if ((n = ht(ct, u, t, y))) {
            ((y.readyState = 1),
              l && h.trigger("ajaxSend", [y, u]),
              u.async &&
                u.timeout > 0 &&
                (a = setTimeout(function () {
                  y.abort("timeout");
                }, u.timeout)));
            try {
              ((v = 1), n.send(m, A));
            } catch (e) {
              if (!(2 > v)) throw e;
              A(-1, e);
            }
          } else A(-1, "No Transport");
          function A(e, t, r, s) {
            var c,
              m,
              b,
              S,
              A,
              P = t;
            2 !== v &&
              ((v = 2),
              a && clearTimeout(a),
              (n = void 0),
              (o = s || ""),
              (y.readyState = e > 0 ? 4 : 0),
              (c = (e >= 200 && 300 > e) || 304 === e),
              r &&
                (S = (function (e, t, n) {
                  for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                    (l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")));
                  if (i)
                    for (o in s)
                      if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) r = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break;
                      }
                      a || (a = o);
                    }
                    r = r || a;
                  }
                  return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
                })(u, y, r)),
              (S = (function (e, t, n, i) {
                var o,
                  r,
                  a,
                  s,
                  l,
                  c = {},
                  u = e.dataTypes.slice();
                if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (r = u.shift(); r; )
                  if (
                    (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (l = r),
                    (r = u.shift()))
                  )
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                      if (!(a = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                          if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? (a = c[o]) : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r };
                          }
                    }
                return { state: "success", data: t };
              })(u, S, y, c)),
              c
                ? (u.ifModified &&
                    ((A = y.getResponseHeader("Last-Modified")) && (p.lastModified[i] = A), (A = y.getResponseHeader("etag")) && (p.etag[i] = A)),
                  204 === e || "HEAD" === u.type ? (P = "nocontent") : 304 === e ? (P = "notmodified") : ((P = S.state), (m = S.data), (c = !(b = S.error))))
                : ((b = P), (e || !P) && ((P = "error"), 0 > e && (e = 0))),
              (y.status = e),
              (y.statusText = (t || P) + ""),
              c ? f.resolveWith(d, [m, P, y]) : f.rejectWith(d, [y, P, b]),
              y.statusCode(g),
              (g = void 0),
              l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [y, u, c ? m : b]),
              T.fireWith(d, [y, P]),
              l && (h.trigger("ajaxComplete", [y, u]), --p.active || p.event.trigger("ajaxStop")));
          }
          return y;
        },
        getJSON: function (e, t, n) {
          return p.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return p.get(e, void 0, t, "script");
        },
      }),
      p.each(["get", "post"], function (e, t) {
        p[t] = function (e, n, i, o) {
          return (p.isFunction(n) && ((o = o || i), (i = n), (n = void 0)), p.ajax({ url: e, type: t, dataType: o, data: n, success: i }));
        };
      }),
      p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        p.fn[t] = function (e) {
          return this.on(t, e);
        };
      }),
      (p._evalUrl = function (e) {
        return p.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
      }),
      p.fn.extend({
        wrapAll: function (e) {
          var t;
          return p.isFunction(e)
            ? this.each(function (t) {
                p(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = p(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return this.each(
            p.isFunction(e)
              ? function (t) {
                  p(this).wrapInner(e.call(this, t));
                }
              : function () {
                  var t = p(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                },
          );
        },
        wrap: function (e) {
          var t = p.isFunction(e);
          return this.each(function (n) {
            p(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (p.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
      }),
      (p.expr.filters.visible = function (e) {
        return !p.expr.filters.hidden(e);
      }));
    var ft = /%20/g,
      Tt = /\[\]$/,
      gt = /\r?\n/g,
      mt = /^(?:submit|button|image|reset|file)$/i,
      bt = /^(?:input|select|textarea|keygen)/i;
    function vt(e, t, n, i) {
      var o;
      if (p.isArray(t))
        p.each(t, function (t, o) {
          n || Tt.test(e) ? i(e, o) : vt(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
        });
      else if (n || "object" !== p.type(t)) i(e, t);
      else for (o in t) vt(e + "[" + o + "]", t[o], n, i);
    }
    ((p.param = function (e, t) {
      var n,
        i = [],
        o = function (e, t) {
          ((t = p.isFunction(t) ? t() : null == t ? "" : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)));
        };
      if ((void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || (e.jquery && !p.isPlainObject(e))))
        p.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) vt(n, e[n], t, o);
      return i.join("&").replace(ft, "+");
    }),
      p.fn.extend({
        serialize: function () {
          return p.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = p.prop(this, "elements");
            return e ? p.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return this.name && !p(this).is(":disabled") && bt.test(this.nodeName) && !mt.test(e) && (this.checked || !j.test(e));
            })
            .map(function (e, t) {
              var n = p(this).val();
              return null == n
                ? null
                : p.isArray(n)
                  ? p.map(n, function (e) {
                      return { name: t.name, value: e.replace(gt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(gt, "\r\n") };
            })
            .get();
        },
      }),
      (p.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      }));
    var St = 0,
      yt = {},
      At = { 0: 200, 1223: 204 },
      Pt = p.ajaxSettings.xhr();
    (e.ActiveXObject &&
      p(e).on("unload", function () {
        for (var e in yt) yt[e]();
      }),
      (u.cors = !!Pt && "withCredentials" in Pt),
      (u.ajax = Pt = !!Pt),
      p.ajaxTransport(function (e) {
        var t;
        return u.cors || (Pt && !e.crossDomain)
          ? {
              send: function (n, i) {
                var o,
                  r = e.xhr(),
                  a = ++St;
                if ((r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                for (o in (e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                n))
                  r.setRequestHeader(o, n[o]);
                ((t = function (e) {
                  return function () {
                    t &&
                      (delete yt[a],
                      (t = r.onload = r.onerror = null),
                      "abort" === e
                        ? r.abort()
                        : "error" === e
                          ? i(r.status, r.statusText)
                          : i(
                              At[r.status] || r.status,
                              r.statusText,
                              "string" == typeof r.responseText ? { text: r.responseText } : void 0,
                              r.getAllResponseHeaders(),
                            ));
                  };
                }),
                  (r.onload = t()),
                  (r.onerror = t("error")),
                  (t = yt[a] = t("abort")));
                try {
                  r.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            }
          : void 0;
      }),
      p.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return (p.globalEval(e), e);
          },
        },
      }),
      p.ajaxPrefilter("script", function (e) {
        (void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"));
      }),
      p.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain)
          return {
            send: function (i, o) {
              ((t = p("<script>")
                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    (t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type));
                  }),
                )),
                d.head.appendChild(t[0]));
            },
            abort: function () {
              n && n();
            },
          };
      }));
    var Mt = [],
      Ct = /(=)\?(?=&|$)|\?\?/;
    (p.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Mt.pop() || p.expando + "_" + Je++;
        return ((this[e] = !0), e);
      },
    }),
      p.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o,
          r,
          a,
          s =
            !1 !== t.jsonp &&
            (Ct.test(t.url)
              ? "url"
              : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ct.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0]
          ? ((o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
            s ? (t[s] = t[s].replace(Ct, "$1" + o)) : !1 !== t.jsonp && (t.url += (Ze.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            (t.converters["script json"] = function () {
              return (a || p.error(o + " was not called"), a[0]);
            }),
            (t.dataTypes[0] = "json"),
            (r = e[o]),
            (e[o] = function () {
              a = arguments;
            }),
            i.always(function () {
              ((e[o] = r), t[o] && ((t.jsonpCallback = n.jsonpCallback), Mt.push(o)), a && p.isFunction(r) && r(a[0]), (a = r = void 0));
            }),
            "script")
          : void 0;
      }),
      (p.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        ("boolean" == typeof t && ((n = t), (t = !1)), (t = t || d));
        var i = y.exec(e),
          o = !n && [];
        return i ? [t.createElement(i[1])] : ((i = p.buildFragment([e], t, o)), o && o.length && p(o).remove(), p.merge([], i.childNodes));
      }));
    var wt = p.fn.load;
    ((p.fn.load = function (e, t, n) {
      if ("string" != typeof e && wt) return wt.apply(this, arguments);
      var i,
        o,
        r,
        a = this,
        s = e.indexOf(" ");
      return (
        s >= 0 && ((i = p.trim(e.slice(s))), (e = e.slice(0, s))),
        p.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 &&
          p
            .ajax({ url: e, type: o, dataType: "html", data: t })
            .done(function (e) {
              ((r = arguments), a.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e));
            })
            .complete(
              n &&
                function (e, t) {
                  a.each(n, r || [e.responseText, t, e]);
                },
            ),
        this
      );
    }),
      (p.expr.filters.animated = function (e) {
        return p.grep(p.timers, function (t) {
          return e === t.elem;
        }).length;
      }));
    var Ht = e.document.documentElement;
    function Gt(e) {
      return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    ((p.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c = p.css(e, "position"),
          u = p(e),
          d = {};
        ("static" === c && (e.style.position = "relative"),
          (s = u.offset()),
          (r = p.css(e, "top")),
          (l = p.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
            ? ((a = (i = u.position()).top), (o = i.left))
            : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          p.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d));
      },
    }),
      p.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  p.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = this[0],
            o = { top: 0, left: 0 },
            r = i && i.ownerDocument;
          return r
            ? ((t = r.documentElement),
              p.contains(t, i)
                ? (typeof i.getBoundingClientRect !== W && (o = i.getBoundingClientRect()),
                  (n = Gt(r)),
                  { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft })
                : o)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === p.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  p.nodeName(e[0], "html") || (i = e.offset()),
                  (i.top += p.css(e[0], "borderTopWidth", !0)),
                  (i.left += p.css(e[0], "borderLeftWidth", !0))),
              { top: t.top - i.top - p.css(n, "marginTop", !0), left: t.left - i.left - p.css(n, "marginLeft", !0) }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent || Ht; e && !p.nodeName(e, "html") && "static" === p.css(e, "position"); ) e = e.offsetParent;
            return e || Ht;
          });
        },
      }),
      p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
        var i = "pageYOffset" === n;
        p.fn[t] = function (o) {
          return D(
            this,
            function (t, o, r) {
              var a = Gt(t);
              return void 0 === r ? (a ? a[n] : t[o]) : void (a ? a.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : (t[o] = r));
            },
            t,
            o,
            arguments.length,
            null,
          );
        };
      }),
      p.each(["top", "left"], function (e, t) {
        p.cssHooks[t] = Pe(u.pixelPosition, function (e, n) {
          return n ? ((n = Ae(e, t)), Se.test(n) ? p(e).position()[t] + "px" : n) : void 0;
        });
      }),
      p.each({ Height: "height", Width: "width" }, function (e, t) {
        p.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
          p.fn[i] = function (i, o) {
            var r = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
            return D(
              this,
              function (t, n, i) {
                var o;
                return p.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                    ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                    : void 0 === i
                      ? p.css(t, n, a)
                      : p.style(t, n, i, a);
              },
              t,
              r ? i : void 0,
              r,
              null,
            );
          };
        });
      }),
      (p.fn.size = function () {
        return this.length;
      }),
      (p.fn.andSelf = p.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return p;
        }));
    var xt = e.jQuery,
      kt = e.$;
    return (
      (p.noConflict = function (t) {
        return (e.$ === p && (e.$ = kt), t && e.jQuery === p && (e.jQuery = xt), p);
      }),
      typeof t === W && (e.jQuery = e.$ = p),
      p
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery);
  })(function (e) {
    var t = /\+/g;
    function n(e) {
      return r.raw ? e : encodeURIComponent(e);
    }
    function i(e) {
      return n(r.json ? JSON.stringify(e) : String(e));
    }
    function o(n, i) {
      var o = r.raw
        ? n
        : (function (e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              return ((e = decodeURIComponent(e.replace(t, " "))), r.json ? JSON.parse(e) : e);
            } catch (e) {}
          })(n);
      return e.isFunction(i) ? i(o) : o;
    }
    var r = (e.cookie = function (t, a, s) {
      if (void 0 !== a && !e.isFunction(a)) {
        if ("number" == typeof (s = e.extend({}, r.defaults, s)).expires) {
          var l = s.expires,
            c = (s.expires = new Date());
          c.setTime(+c + 864e5 * l);
        }
        return (document.cookie = [
          n(t),
          "=",
          i(a),
          s.expires ? "; expires=" + s.expires.toUTCString() : "",
          s.path ? "; path=" + s.path : "",
          s.domain ? "; domain=" + s.domain : "",
          s.secure ? "; secure" : "",
        ].join(""));
      }
      for (var u, d = t ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; p < f; p++) {
        var T = h[p].split("="),
          g = ((u = T.shift()), r.raw ? u : decodeURIComponent(u)),
          m = T.join("=");
        if (t && t === g) {
          d = o(m, a);
          break;
        }
        t || void 0 === (m = o(m)) || (d[g] = m);
      }
      return d;
    });
    ((r.defaults = {}),
      (e.removeCookie = function (t, n) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t));
      }));
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
var original_content;
function isNumber(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ListChapProcess(e, t, n, i, o) {
  ($("#list-chapter .pagination").replaceWith(i),
    $("#list-chapter>.row").html(o),
    $("html, body").animate({ scrollTop: $("#list-chapter").offset().top }, "slow"),
    window.history.pushState(
      { type: "list_chap", truyen_name: e, truyen_ascii: t, page: n },
      "Truyện " + e + " - Trang " + n,
      "/" + t + "/trang-" + n + "/#list-chapter",
    ),
    (document.title = "Truyện " + e + " - Trang " + n),
    ga("send", "pageview", { page: "/" + t + "/trang-" + n + "/", title: "Truyện " + e + " - Trang " + n + " - Ajax" }));
}
function FormError(e, t) {
  t
    ? $("#" + t + " .single-page-status")
        .removeClass("alert-success hide")
        .addClass("alert-danger")
        .html(e)
    : ($(".single-page-status").removeClass("alert-success hide").addClass("alert-danger").html(e),
      $("html, body").animate({ scrollTop: $(".single-page-status").offset().top }, "slow"));
}
function FormSuccess(e, t) {
  t
    ? $("#" + t + " .single-page-status")
        .removeClass("alert-danger hide")
        .addClass("alert-success")
        .html(e)
    : ($(".single-page-status").removeClass("alert-danger hide").addClass("alert-success").html(e),
      $("html, body").animate({ scrollTop: $(".single-page-status").offset().top }, "slow"));
}
function FormDisable(e) {
  $(e + " :input").attr("disabled", !0);
}
function FormEnable(e) {
  $(e + " :input").attr("disabled", !1);
}
function quick_search(e) {
  $.get("/ajax.php", { type: "quick_search", str: e }).done(function (e) {
    $(".list-search-res").html(e);
  });
}
function load_comment(e, t, n = "light") {
  if (
    ($("#" + e).html(
      '<div class="fb-comments" data-href="https://dochay.me/' + t + '/" data-width="100%" width="100%" data-numposts="5" data-colorscheme="' + n + '"></div>',
    ),
    "undefined" != typeof FB)
  )
    FB.XFBML.parse(document.getElementById(e));
  else
    var i = setInterval(function () {
      "undefined" != typeof FB && (FB.XFBML.parse(document.getElementById(e)), clearInterval(i));
    }, 100);
}
function update_views(e, t) {
  $.post("/ajax.php", { type: "update_views", tid: e, add: t, t: new Date().getTime() });
}
function chapter_filter() {
  var e = $(".chapter-c").html();
  ($.each(
    {
      "An Đình Doanh": "AĐD",
      "bán nước": "b*n n**c",
      "biển Đông": "bi*n đ*ng",
      "Bùi Minh Châu": "BMC",
      "Bùi Nhật Quang": "BNQ",
      "Bùi Thanh Sơn": "BTS",
      "Bùi Thị Minh Hoài": "BTMH",
      "Bùi Thị Quỳnh Vân": "BTQV",
      "Bùi Văn Cường": "BVC",
      "Bùi Văn Nghiêm": "BVN",
      "Chẩu Văn Lâm": "CVL",
      "Châu Văn Minh": "CVM",
      "Chu Ngọc Anh": "CAN",
      "Đặng Quốc Khánh": "ĐQK",
      "Đặng Xuân Phong": "ĐXP",
      "Đào Hồng Lan": "ĐHL",
      "Đào Ngọc Dung": "ĐND",
      "Điểu Kré": "ĐK",
      "Đinh Tiến Dũng": "ĐTD",
      "Đỗ Đức Duy": "ĐĐD",
      "Đỗ Thanh Bình": "ĐTB",
      "Đỗ Tiến Sỹ": "ĐTS",
      "Đỗ Trọng Hưng": "ĐTH",
      "Đỗ Văn Chiến": "ĐVC",
      "Đoàn Hồng Phong": "ĐHP",
      "Đoàn Minh Huấn": "ĐMH",
      "Đông Sa": "ĐS",
      "đường chín đoạn": "đlb*",
      "đường chín khúc": "đlb*",
      "đường chữ U": "đlb*",
      "đường lưỡi bò": "đlb*",
      "Dương Thanh Bình": "DTB",
      "Dương Văn An": "DVA",
      "Dương Văn Thái": "DVT",
      "Dương Văn Trang": "DVT",
      "Giàng Páo Mỷ": "GPM",
      "Hà Thị Nga": "HTN",
      "Hầu A Lềnh": "HAL",
      "Hồ Đức Phớc": "HĐP",
      "Hồ Quốc Dũng": "HQD",
      "Hồ Văn Niên": "HVN",
      "Hoàng Đăng Quang": "HĐQ",
      "Hoàng Duy Chinh": "HDC",
      "Hoàng Sa": "HS",
      "Hoàng Thanh Tùng": "HTT",
      "Hoàng Thị Thúy Lan": "HTTL",
      "Hoàng Trung Dũng": "HTD",
      "Hoàng Xuân Chiến": "HXC",
      "Huỳnh Chiến Thắng": "HCT",
      "Huỳnh Tấn Việt": "HTV",
      "Huỳnh Thành Đạt": "HTĐ",
      "Lại Xuân Môn": "LXM",
      "Lâm Thị Phương Thanh": "LTPT",
      "Lâm Văn Mẫn": "LVM",
      "Lê Đức Thái": "LĐT",
      "Lê Đức Thọ": "LĐT",
      "Lê Hoài Trung": "LHT",
      "Lê Hồng Quang": "LHQ",
      "Lê Huy Vịnh": "LHV",
      "Lê Khánh Hải": "LKH",
      "Lê Minh Hoan": "LMH",
      "Lê Minh Hưng": "LMH",
      "Lê Minh Khái": "LMK",
      "Lê Minh Trí": "LMT",
      "Lê Ngọc Quang": "LNQ",
      "Lê Quang Huy": "LQH",
      "Lê Quang Mạnh": "LQM",
      "Lê Quang Tùng": "LQT",
      "Lê Quốc Hùng": "LQH",
      "Lê Quốc Minh": "LQM",
      "Lê Quốc Phong": "LQP",
      "Lê Tấn Tới": "LTT",
      "Lê Thành Long": "LTL",
      "Lê Thị Nga": "LTN",
      "Lê Thị Thủy": "LTT",
      "Lê Tiến Châu": "LTC",
      "Lê Trường Lưu": "LTL",
      "Lê Văn Thành": "LVT",
      "Lê Vĩnh Tân": "LVT",
      "Lữ Văn Hùng": "LVH",
      "Lương Cường": "LC",
      "Lương Quốc Đoàn": "LQĐ",
      "Lương Tam Quang": "LTQ",
      "Mai Tiến Dũng": "MTD",
      "Mai Văn Chính": "MVC",
      "Nghiêm Xuân Thành": "NXT",
      "Ngô Chí Cường": "NCC",
      "Ngô Đông Hải": "NĐH",
      "Ngô Văn Tuấn": "NVT",
      "Ngô Xuân Lịch": "NXL",
      "Nguyễn Anh Tuấn": "NAT",
      "Nguyễn Chí Dũng": "NCD",
      "Nguyễn Đắc Vinh": "NĐV",
      "Nguyễn Đình Khang": "NĐK",
      "Nguyễn Đình Trung": "NĐT",
      "Nguyễn Doãn Anh": "NDA",
      "Nguyễn Đức Hải": "NĐH",
      "Nguyễn Đức Thanh": "NĐT",
      "Nguyễn Duy Ngọc": "NDN",
      "Nguyễn Hải Ninh": "NHN",
      "Nguyễn Hòa Bình": "NHB",
      "Nguyễn Hoàng Anh": "NHA",
      "Nguyễn Hồng Diên": "NHD",
      "Nguyễn Hồng Lĩnh": "NHL",
      "Nguyễn Hồng Thái": "NHT",
      "Nguyễn Hữu Đông": "NHĐ",
      "Nguyễn Hữu Nghĩa": "NHN",
      "Nguyễn Khắc Định": "NKĐ",
      "Nguyễn Kim Sơn": "NKS",
      "Nguyễn Mạnh Cường": "NMC",
      "Nguyễn Mạnh Hùng": "NMH",
      "Nguyễn Ngọc Thiện": "NNT",
      "Nguyễn Phú Cường": "NPC",
      "Nguyễn Phú Trọng": "NPT",
      "Nguyễn Quang Dương": "NQD",
      "Nguyễn Quang Ngọc": "NQN",
      "Nguyễn Quốc Đoàn": "NQĐ",
      "Nguyễn Tân Cương": "NTC",
      "Nguyễn Thanh Hải": "NTH",
      "Nguyễn Thanh Long": "NTL",
      "Nguyễn Thanh Nghị": "NTN",
      "Nguyễn Thành Phong": "NTP",
      "Nguyễn Thành Tâm": "NTT",
      "Nguyễn Thanh Thủy": "NTT",
      "Nguyễn Thị Hồng": "NTH",
      "Nguyễn Thị Thanh": "NTT",
      "Nguyễn Thị Thu Hà": "NTTH",
      "Nguyễn Thị Tuyến": "NTT",
      "Nguyễn Thúy Anh": "NTA",
      "Nguyễn Tiến Hải": "NTH",
      "Nguyễn Trọng Nghĩa": "NTN",
      "Nguyễn Trường Thắng": "NTT",
      "Nguyễn Văn Danh": "NVD",
      "Nguyễn Văn Được": "NVĐ",
      "Nguyễn Văn Gấu": "NVG",
      "Nguyễn Văn Hiền": "NVH",
      "Nguyễn Văn Hùng": "NVH",
      "Nguyễn Văn Lợi": "NVL",
      "Nguyễn Văn Nên": "NVN",
      "Nguyễn Văn Quảng": "NVQ",
      "Nguyễn Văn Thắng": "NVT",
      "Nguyễn Văn Thể": "NVT",
      "Nguyễn Xuân Cường": "NXC",
      "Nguyễn Xuân Ký": "NXK",
      "Nguyễn Xuân Phúc": "NXP",
      "Nguyễn Xuân Thắng": "NXT",
      "Phạm Bình Minh": "PBM",
      "Phạm Đại Dương": "PĐD",
      "Phạm Gia Túc": "PGT",
      "Phạm Hoài Nam": "PHN",
      "Phạm Hồng Hà": "PHH",
      "Phạm Minh Chính": "PMC",
      "Phạm Tất Thắng": "PTT",
      "Phạm Thị Thanh Trà": "PTTT",
      "Phạm Viết Thanh": "PVT",
      "Phạm Xuân Thăng": "PXT",
      "Phan Đình Trạc": "PĐT",
      "Phan Văn Giang": "PVG",
      "Phan Văn Mãi": "PVM",
      "Phan Việt Cường": "PVC",
      "Phùng Xuân Nhạ": "PXN",
      "South China Sea": "NH",
      "Thái Đại Ngọc": "TDN",
      "Thái Thanh Quý": "TTQ",
      "Tô Lâm": "TL",
      "Trần Cẩm Tú": "TCT",
      "Trần Đức Quận": "TĐQ",
      "Trần Đức Thắng": "TĐT",
      "Trần Hồng Hà": "THH",
      "Trần Hồng Minh": "THM",
      "Trần Lưu Quang": "TLQ",
      "Trần Quang Phương": "TQP",
      "Trần Quốc Cường": "TQC",
      "Trần Quốc Tỏ": "TQT",
      "Trần Sỹ Thanh": "TST",
      "Trần Thanh Mẫn": "TTM",
      "Trần Thanh Nghiêm": "TTN",
      "Trần Tiến Hưng": "TTH",
      "Trần Tuấn Anh": "TTA",
      "Trần Văn Nam": "TVN",
      "Trần Văn Rón": "TVR",
      "Trần Văn Sơn": "TVS",
      "Trần Việt Khoa": "TVK",
      "Trịnh Đình Dũng": "TĐD",
      "Trịnh Văn Quyết": "TVQ",
      "Trương Hòa Bình": "THB",
      "Trường Sa": "TS",
      "Trương Thị Mai": "TTM",
      "việt tân": "v*** t**",
      "việt cộng": "v*** c***",
      "việt [+]": "v*** +",
      "Võ Minh Lương": "VML",
      "Võ Thị Ánh Xuân": "VTAX",
      "Võ Văn Dũng": "VVD",
      "Võ Văn Thưởng": "VVT",
      "Vũ Đại Thắng": "VĐT",
      "Vũ Đức Đam": "VĐĐ",
      "Vũ Hải Hà": "VHH",
      "Vũ Hải Quân": "VHQ",
      "Vũ Hải Sản": "VHS",
      "Vũ Hồng Thanh": "VHT",
      "Vương Đình Huệ": "VĐH",
      "Y Thanh Hà Niê Kdăm": "YTHNK",
    },
    function (t, n) {
      var i = new RegExp(t, "ig");
      e = e.replace(i, n);
    },
  ),
    $(".chapter-c").html(e));
}
function setCookie(e, t, n) {
  let i = "";
  if (n) {
    const e = new Date();
    (e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), (i = "; expires=" + e.toUTCString()));
  }
  document.cookie = e + "=" + (t || "") + i + "; path=/";
}
function getCookie(e) {
  const t = e + "=",
    n = document.cookie.split(";");
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    for (; " " === i.charAt(0); ) i = i.substring(1, i.length);
    if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
  }
  return null;
}
function eraseCookie(e) {
  document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
function getUserInfo() {
  var e = localStorage.getItem("info");
  return e ? JSON.parse(e) : null;
}
function jwtDecode() {
  var e = getCookie("token");
  if (!e) return {};
  try {
    let t = e.split("."),
      n = JSON.parse(atob(t[1]));
    return (
      (n.ads_hidden = n.ads_hidden ? n.ads_hidden - new Date().getTime() / 1e3 : 0),
      (n.vip_to = n.vip_to ? n.vip_to - new Date().getTime() / 1e3 : 0),
      n
    );
  } catch (e) {
    return {};
  }
}
(!(function (e) {
  "use strict";
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1) || t[0] > 3)
    throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(),
  (function (e) {
    "use strict";
    function t(t) {
      var n = t.attr("data-target");
      n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && e(n);
      return i && i.length ? i : t.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (e(i).remove(),
        e(o).each(function () {
          var i = e(this),
            o = t(i),
            r = { relatedTarget: this };
          o.hasClass("open") &&
            ((n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target)) ||
              (o.trigger((n = e.Event("hide.bs.dropdown", r))),
              n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))));
        }));
    }
    var i = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      r = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    ((r.VERSION = "3.3.7"),
      (r.prototype.toggle = function (i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
          var r = t(o),
            a = r.hasClass("open");
          if ((n(), !a)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
            var s = { relatedTarget: this };
            if ((r.trigger((i = e.Event("show.bs.dropdown", s))), i.isDefaultPrevented())) return;
            (o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s)));
          }
          return !1;
        }
      }),
      (r.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
          var i = e(this);
          if ((n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled"))) {
            var r = t(i),
              a = r.hasClass("open");
            if ((!a && 27 != n.which) || (a && 27 == n.which)) return (27 == n.which && r.find(o).trigger("focus"), i.trigger("click"));
            var s = r.find(".dropdown-menu li:not(.disabled):visible a");
            if (s.length) {
              var l = s.index(n.target);
              (38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus"));
            }
          }
        }
      }));
    var a = e.fn.dropdown;
    ((e.fn.dropdown = function (t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.dropdown");
        (i || n.data("bs.dropdown", (i = new r(this))), "string" == typeof t && i[t].call(n));
      });
    }),
      (e.fn.dropdown.Constructor = r),
      (e.fn.dropdown.noConflict = function () {
        return ((e.fn.dropdown = a), this);
      }),
      e(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, r.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, r.prototype.keydown)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown));
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n,
        i = t.attr("data-target") || ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return e(i);
    }
    function n(t) {
      return this.each(function () {
        var n = e(this),
          o = n.data("bs.collapse"),
          r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
        (!o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", (o = new i(this, r))), "string" == typeof t && o[t]());
      });
    }
    var i = function (t, n) {
      ((this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')),
        (this.transitioning = null),
        this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle());
    };
    ((i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
          if (!(o && o.length && ((t = o.data("bs.collapse")), t && t.transitioning))) {
            var r = e.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
              var a = this.dimension();
              (this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                (this.transitioning = 1));
              var s = function () {
                (this.$element.removeClass("collapsing").addClass("collapse in")[a](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse"));
              };
              if (!e.support.transition) return s.call(this);
              var l = e.camelCase(["scroll", a].join("-"));
              this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            (this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1));
            var o = function () {
              ((this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse"));
            };
            return e.support.transition
              ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return e(this.options.parent)
          .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
          .each(
            e.proxy(function (n, i) {
              var o = e(i);
              this.addAriaAndCollapsedClass(t(o), o);
            }, this),
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        (e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n));
      }));
    var o = e.fn.collapse;
    ((e.fn.collapse = n),
      (e.fn.collapse.Constructor = i),
      (e.fn.collapse.noConflict = function () {
        return ((e.fn.collapse = o), this);
      }),
      e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
          a = r.data("bs.collapse") ? "toggle" : o.data();
        n.call(r, a);
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    ((e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        i = this;
      e(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      return (
        setTimeout(function () {
          n || e(i).trigger(e.support.transition.end);
        }, t),
        this
      );
    }),
      e(function () {
        ((e.support.transition = (function () {
          var e = document.createElement("bootstrap"),
            t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
          return !1;
        })()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0;
              },
            }));
      }));
  })(jQuery),
  (function (e) {
    "use strict";
    var t = {
      init: function (n) {
        return this.each(function () {
          ((this.self = e(this)),
            t.destroy.call(this.self),
            (this.opt = e.extend(!0, {}, e.fn.raty.defaults, n)),
            t._adjustCallback.call(this),
            t._adjustNumber.call(this),
            t._adjustHints.call(this),
            (this.opt.score = t._adjustedScore.call(this, this.opt.score)),
            "img" !== this.opt.starType && t._adjustStarType.call(this),
            t._adjustPath.call(this),
            t._createStars.call(this),
            this.opt.cancel && t._createCancel.call(this),
            this.opt.precision && t._adjustPrecision.call(this),
            t._createScore.call(this),
            t._apply.call(this, this.opt.score),
            t._setTitle.call(this, this.opt.score),
            t._target.call(this, this.opt.score),
            this.opt.readOnly ? t._lock.call(this) : ((this.style.cursor = "pointer"), t._binds.call(this)));
        });
      },
      _adjustCallback: function () {
        for (var e = ["number", "readOnly", "score", "scoreName", "target"], t = 0; t < e.length; t++)
          "function" == typeof this.opt[e[t]] && (this.opt[e[t]] = this.opt[e[t]].call(this));
      },
      _adjustedScore: function (e) {
        return e ? t._between(e, 0, this.opt.number) : e;
      },
      _adjustHints: function () {
        if ((this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half))
          for (var e = this.opt.precision ? 10 : 2, t = 0; t < this.opt.number; t++) {
            var n = this.opt.hints[t];
            ("[object Array]" !== Object.prototype.toString.call(n) && (n = [n]), (this.opt.hints[t] = []));
            for (var i = 0; i < e; i++) {
              var o = n[i],
                r = n[n.length - 1];
              (void 0 === r && (r = null), (this.opt.hints[t][i] = void 0 === o ? r : o));
            }
          }
      },
      _adjustNumber: function () {
        this.opt.number = t._between(this.opt.number, 1, this.opt.numberMax);
      },
      _adjustPath: function () {
        ((this.opt.path = this.opt.path || ""), this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/"));
      },
      _adjustPrecision: function () {
        this.opt.half = !0;
      },
      _adjustStarType: function () {
        var e = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
        this.opt.path = "";
        for (var t = 0; t < e.length; t++) this.opt[e[t]] = this.opt[e[t]].replace(".", "-");
      },
      _apply: function (e) {
        (t._fill.call(this, e), e && (e > 0 && this.score.val(e), t._roundStars.call(this, e)));
      },
      _between: function (e, t, n) {
        return Math.min(Math.max(parseFloat(e), t), n);
      },
      _binds: function () {
        (this.cancel && (t._bindOverCancel.call(this), t._bindClickCancel.call(this), t._bindOutCancel.call(this)),
          t._bindOver.call(this),
          t._bindClick.call(this),
          t._bindOut.call(this));
      },
      _bindClick: function () {
        var n = this;
        n.stars.on("click.raty", function (i) {
          var o = !0,
            r = n.opt.half || n.opt.precision ? n.self.data("score") : this.alt || e(this).data("alt");
          (n.opt.click && (o = n.opt.click.call(n, +r, i)),
            (o || void 0 === o) && (n.opt.half && !n.opt.precision && (r = t._roundHalfScore.call(n, r)), t._apply.call(n, r)));
        });
      },
      _bindClickCancel: function () {
        var e = this;
        e.cancel.on("click.raty", function (t) {
          (e.score.removeAttr("value"), e.opt.click && e.opt.click.call(e, null, t));
        });
      },
      _bindOut: function () {
        var e = this;
        e.self.on("mouseleave.raty", function (n) {
          var i = +e.score.val() || void 0;
          (t._apply.call(e, i), t._target.call(e, i, n), t._resetTitle.call(e), e.opt.mouseout && e.opt.mouseout.call(e, i, n));
        });
      },
      _bindOutCancel: function () {
        var e = this;
        e.cancel.on("mouseleave.raty", function (n) {
          var i = e.opt.cancelOff;
          if (("img" !== e.opt.starType && (i = e.opt.cancelClass + " " + i), t._setIcon.call(e, this, i), e.opt.mouseout)) {
            var o = +e.score.val() || void 0;
            e.opt.mouseout.call(e, o, n);
          }
        });
      },
      _bindOver: function () {
        var e = this,
          n = e.opt.half ? "mousemove.raty" : "mouseover.raty";
        e.stars.on(n, function (n) {
          var i = t._getScoreByPosition.call(e, n, this);
          (t._fill.call(e, i),
            e.opt.half && (t._roundStars.call(e, i, n), t._setTitle.call(e, i, n), e.self.data("score", i)),
            t._target.call(e, i, n),
            e.opt.mouseover && e.opt.mouseover.call(e, i, n));
        });
      },
      _bindOverCancel: function () {
        var e = this;
        e.cancel.on("mouseover.raty", function (n) {
          var i = e.opt.path + e.opt.starOff,
            o = e.opt.cancelOn;
          ("img" === e.opt.starType ? e.stars.attr("src", i) : ((o = e.opt.cancelClass + " " + o), e.stars.attr("class", i)),
            t._setIcon.call(e, this, o),
            t._target.call(e, null, n),
            e.opt.mouseover && e.opt.mouseover.call(e, null));
        });
      },
      _buildScoreField: function () {
        return e("<input />", { name: this.opt.scoreName, type: "hidden" }).appendTo(this);
      },
      _createCancel: function () {
        var t = this.opt.path + this.opt.cancelOff,
          n = e("<" + this.opt.starType + " />", { title: this.opt.cancelHint, class: this.opt.cancelClass });
        ("img" === this.opt.starType ? n.attr({ src: t, alt: "x" }) : n.attr("data-alt", "x").addClass(t),
          "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(n) : this.self.append("&#160;").append(n),
          (this.cancel = n));
      },
      _createScore: function () {
        var n = e(this.opt.targetScore);
        this.score = n.length ? n : t._buildScoreField.call(this);
      },
      _createStars: function () {
        for (var n = 1; n <= this.opt.number; n++) {
          var i = t._nameForIndex.call(this, n),
            o = { alt: n, src: this.opt.path + this.opt[i] };
          ("img" !== this.opt.starType && (o = { "data-alt": n, class: o.src }),
            (o.title = t._getHint.call(this, n)),
            e("<" + this.opt.starType + " />", o).appendTo(this),
            this.opt.space && this.self.append(n < this.opt.number ? "&#160;" : ""));
        }
        this.stars = this.self.children(this.opt.starType);
      },
      _error: function (t) {
        (e(this).text(t), e.error(t));
      },
      _fill: function (e) {
        for (var n = 0, i = 1; i <= this.stars.length; i++) {
          var o,
            r = this.stars[i - 1],
            a = t._turnOn.call(this, i, e);
          if (this.opt.iconRange && this.opt.iconRange.length > n) {
            var s = this.opt.iconRange[n];
            ((o = t._getRangeIcon.call(this, s, a)), i <= s.range && t._setIcon.call(this, r, o), i === s.range && n++);
          } else ((o = this.opt[a ? "starOn" : "starOff"]), t._setIcon.call(this, r, o));
        }
      },
      _getFirstDecimal: function (e) {
        var t = e.toString().split(".")[1],
          n = 0;
        return (t && ((n = parseInt(t.charAt(0), 10)), "9999" === t.slice(1, 5) && n++), n);
      },
      _getRangeIcon: function (e, t) {
        return t ? e.on || this.opt.starOn : e.off || this.opt.starOff;
      },
      _getScoreByPosition: function (n, i) {
        var o = parseInt(i.alt || i.getAttribute("data-alt"), 10);
        if (this.opt.half) {
          var r = t._getWidth.call(this);
          o = o - 1 + parseFloat((n.pageX - e(i).offset().left) / r);
        }
        return o;
      },
      _getHint: function (e, n) {
        if (0 !== e && !e) return this.opt.noRatedMsg;
        var i = t._getFirstDecimal.call(this, e),
          o = Math.ceil(e),
          r = this.opt.hints[(o || 1) - 1],
          a = r,
          s = !n || this.move;
        return (
          this.opt.precision
            ? (s && (i = 0 === i ? 9 : i - 1), (a = r[i]))
            : (this.opt.halfShow || this.opt.half) && (a = r[(i = (s && 0 === i) || i > 5 ? 1 : 0)]),
          "" === a ? "" : a || e
        );
      },
      _getWidth: function () {
        var e = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
        return (e || t._error.call(this, "Could not get the icon width!"), e);
      },
      _lock: function () {
        var e = t._getHint.call(this, this.score.val());
        ((this.style.cursor = ""),
          (this.title = e),
          this.score.prop("readonly", !0),
          this.stars.prop("title", e),
          this.cancel && this.cancel.hide(),
          this.self.data("readonly", !0));
      },
      _nameForIndex: function (e) {
        return this.opt.score && this.opt.score >= e ? "starOn" : "starOff";
      },
      _resetTitle: function (e) {
        for (var n = 0; n < this.opt.number; n++) this.stars[n].title = t._getHint.call(this, n + 1);
      },
      _roundHalfScore: function (e) {
        var n = parseInt(e, 10),
          i = t._getFirstDecimal.call(this, e);
        return (0 !== i && (i = i > 5 ? 1 : 0.5), n + i);
      },
      _roundStars: function (e, n) {
        var i,
          o = (e % 1).toFixed(2);
        if (
          (n || this.move
            ? (i = o > 0.5 ? "starOn" : "starHalf")
            : o > this.opt.round.down &&
              ((i = "starOn"), this.opt.halfShow && o < this.opt.round.up ? (i = "starHalf") : o < this.opt.round.full && (i = "starOff")),
          i)
        ) {
          var r = this.opt[i],
            a = this.stars[Math.ceil(e) - 1];
          t._setIcon.call(this, a, r);
        }
      },
      _setIcon: function (e, t) {
        e["img" === this.opt.starType ? "src" : "className"] = this.opt.path + t;
      },
      _setTarget: function (e, t) {
        (t && (t = this.opt.targetFormat.toString().replace("{score}", t)), e.is(":input") ? e.val(t) : e.html(t));
      },
      _setTitle: function (e, n) {
        if (e) {
          var i = parseInt(Math.ceil(e), 10);
          this.stars[i - 1].title = t._getHint.call(this, e, n);
        }
      },
      _target: function (n, i) {
        if (this.opt.target) {
          var o = e(this.opt.target);
          o.length || t._error.call(this, "Target selector invalid or missing!");
          var r = i && "mouseover" === i.type;
          if (void 0 === n) n = this.opt.targetText;
          else if (null === n) n = r ? this.opt.cancelHint : this.opt.targetText;
          else {
            "hint" === this.opt.targetType ? (n = t._getHint.call(this, n, i)) : this.opt.precision && (n = parseFloat(n).toFixed(1));
            var a = i && "mousemove" === i.type;
            r || a || this.opt.targetKeep || (n = this.opt.targetText);
          }
          t._setTarget.call(this, o, n);
        }
      },
      _turnOn: function (e, t) {
        return this.opt.single ? e === t : e <= t;
      },
      _unlock: function () {
        ((this.style.cursor = "pointer"), this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1));
        for (var e = 0; e < this.opt.number; e++) this.stars[e].title = t._getHint.call(this, e + 1);
        this.cancel && this.cancel.css("display", "");
      },
      cancel: function (n) {
        return this.each(function () {
          var i = e(this);
          !0 !== i.data("readonly") && (t[n ? "click" : "score"].call(i, null), this.score.removeAttr("value"));
        });
      },
      click: function (n) {
        return this.each(function () {
          !0 !== e(this).data("readonly") &&
            ((n = t._adjustedScore.call(this, n)),
            t._apply.call(this, n),
            this.opt.click && this.opt.click.call(this, n, e.Event("click")),
            t._target.call(this, n));
        });
      },
      destroy: function () {
        return this.each(function () {
          var t = e(this),
            n = t.data("raw");
          n ? t.off(".raty").empty().css({ cursor: n.style.cursor }).removeData("readonly") : t.data("raw", t.clone()[0]);
        });
      },
      getScore: function () {
        var e,
          t = [];
        return (
          this.each(function () {
            ((e = this.score.val()), t.push(e ? +e : void 0));
          }),
          t.length > 1 ? t : t[0]
        );
      },
      move: function (n) {
        return this.each(function () {
          var i = parseInt(n, 10),
            o = t._getFirstDecimal.call(this, n);
          i >= this.opt.number && ((i = this.opt.number - 1), (o = 10));
          var r = t._getWidth.call(this) / 10,
            a = e(this.stars[i]),
            s = a.offset().left + r * o,
            l = e.Event("mousemove", { pageX: s });
          ((this.move = !0), a.trigger(l), (this.move = !1));
        });
      },
      readOnly: function (n) {
        return this.each(function () {
          var i = e(this);
          i.data("readonly") !== n &&
            (n ? (i.off(".raty").children("img").off(".raty"), t._lock.call(this)) : (t._binds.call(this), t._unlock.call(this)), i.data("readonly", n));
        });
      },
      reload: function () {
        return t.set.call(this, {});
      },
      score: function () {
        var n = e(this);
        return arguments.length ? t.setScore.apply(n, arguments) : t.getScore.call(n);
      },
      set: function (t) {
        return this.each(function () {
          e(this).raty(e.extend({}, this.opt, t));
        });
      },
      setScore: function (n) {
        return this.each(function () {
          !0 !== e(this).data("readonly") && ((n = t._adjustedScore.call(this, n)), t._apply.call(this, n), t._target.call(this, n));
        });
      },
    };
    ((e.fn.raty = function (n) {
      return t[n]
        ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
          ? void e.error("Method " + n + " does not exist!")
          : t.init.apply(this, arguments);
    }),
      (e.fn.raty.defaults = {
        cancel: !1,
        cancelClass: "raty-cancel",
        cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange: void 0,
        mouseout: void 0,
        mouseover: void 0,
        noRatedMsg: "Not rated yet!",
        number: 5,
        numberMax: 20,
        path: void 0,
        precision: !1,
        readOnly: !1,
        round: { down: 0.25, full: 0.6, up: 0.76 },
        score: void 0,
        scoreName: "score",
        single: !1,
        space: !0,
        starHalf: "star-half.png",
        starOff: "star-off.png",
        starOn: "star-on.png",
        starType: "img",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetScore: void 0,
        targetText: "",
        targetType: "hint",
      }));
  })(jQuery),
  (function (e) {
    (jQuery.browser = jQuery.browser || {}).mobile =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        e,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4),
      );
  })(navigator.userAgent || navigator.vendor || window.opera),
  (function (e) {
    e.expr[":"].onScreen = function (t) {
      var n = e(window),
        i = n.scrollTop(),
        o = n.height(),
        r = i + o,
        a = e(t),
        s = a.offset().top,
        l = a.height(),
        c = s + l;
      return (s >= i && s < r) || (c > i && c <= r) || (l > o && s <= i && c >= r);
    };
  })(jQuery),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
          ? (exports.postscribe = t())
          : (e.postscribe = t());
  })(this, function () {
    return (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { exports: {}, id: i, loaded: !1 });
        return (e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports);
      }
      var n = {};
      return ((t.m = e), (t.c = n), (t.p = ""), t(0));
    })([
      function (e, t, n) {
        "use strict";
        var i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1));
        e.exports = i.default;
      },
      function (e, t, n) {
        "use strict";
        function i() {}
        function o() {
          var e = h.shift();
          if (e) {
            var t = c.last(e);
            (t.afterDequeue(), (e.stream = r.apply(void 0, e)), t.afterStreamStart());
          }
        }
        function r(e, t, n) {
          function r(e) {
            ((e = n.beforeWrite(e)), p.write(e), n.afterWrite(e));
          }
          (((p = new l.default(e, n)).id = d++), (p.name = n.name || p.id), (a.streams[p.name] = p));
          var c = e.ownerDocument,
            u = { close: c.close, open: c.open, write: c.write, writeln: c.writeln };
          s(c, {
            close: i,
            open: i,
            write: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return r(t.join(""));
            },
            writeln: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return r(t.join("") + "\n");
            },
          });
          var h = p.win.onerror || i;
          return (
            (p.win.onerror = function (e, t, i) {
              (n.error({ msg: e + " - " + t + ": " + i }), h.apply(p.win, [e, t, i]));
            }),
            p.write(t, function () {
              (s(c, u), (p.win.onerror = h), n.done(), (p = null), o());
            }),
            p
          );
        }
        function a(e, t, n) {
          if (c.isFunction(n)) n = { done: n };
          else if ("clear" === n) return ((h = []), (p = null), void (d = 0));
          n = c.defaults(n, u);
          var r = [(e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e), t, n];
          return (
            (e.postscribe = {
              cancel: function () {
                r.stream ? r.stream.abort() : (r[1] = i);
              },
            }),
            n.beforeEnqueue(r),
            h.push(r),
            p || o(),
            e.postscribe
          );
        }
        t.__esModule = !0;
        var s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
        t.default = a;
        var l = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(2)),
          c = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          })(n(4)),
          u = {
            afterAsync: i,
            afterDequeue: i,
            afterStreamStart: i,
            afterWrite: i,
            autoFix: !0,
            beforeEnqueue: i,
            beforeWriteToken: function (e) {
              return e;
            },
            beforeWrite: function (e) {
              return e;
            },
            done: i,
            error: function (e) {
              throw new Error(e.msg);
            },
            releaseAsync: !1,
          },
          d = 0,
          h = [],
          p = null;
        s(a, { streams: {}, queue: h, WriteStream: l.default });
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          var n = l + t,
            i = e.getAttribute(n);
          return s.existy(i) ? String(i) : i;
        }
        function o(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = l + t;
          s.existy(n) && "" !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
        }
        t.__esModule = !0;
        var r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(3)),
          s = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          })(n(4)),
          l = "data-ps-",
          c = "ps-style",
          u = "ps-script",
          d = (function () {
            function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              ((function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.root = t),
                (this.options = n),
                (this.doc = t.ownerDocument),
                (this.win = this.doc.defaultView || this.doc.parentWindow),
                (this.parser = new a.default("", { autoFix: n.autoFix })),
                (this.actuals = [t]),
                (this.proxyHistory = ""),
                (this.proxyRoot = this.doc.createElement(t.nodeName)),
                (this.scriptStack = []),
                (this.writeQueue = []),
                o(this.proxyRoot, "proxyof", 0));
            }
            return (
              (e.prototype.write = function () {
                var e;
                for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length; ) {
                  var t = this.writeQueue.shift();
                  s.isFunction(t) ? this._callFunction(t) : this._writeImpl(t);
                }
              }),
              (e.prototype._callFunction = function (e) {
                var t = { type: "function", value: e.name || e.toString() };
                (this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t));
              }),
              (e.prototype._writeImpl = function (e) {
                this.parser.append(e);
                for (var t = void 0, n = void 0, i = void 0, o = []; (t = this.parser.readToken()) && !(n = s.isScript(t)) && !(i = s.isStyle(t)); )
                  (t = this.options.beforeWriteToken(t)) && o.push(t);
                (o.length > 0 && this._writeStaticTokens(o), n && this._handleScriptToken(t), i && this._handleStyleToken(t));
              }),
              (e.prototype._writeStaticTokens = function (e) {
                var t = this._buildChunk(e);
                return t.actual
                  ? ((t.html = this.proxyHistory + t.actual), (this.proxyHistory += t.proxy), (this.proxyRoot.innerHTML = t.html), this._walkChunk(), t)
                  : null;
              }),
              (e.prototype._buildChunk = function (e) {
                for (var t = this.actuals.length, n = [], i = [], o = [], r = e.length, a = 0; a < r; a++) {
                  var s = e[a],
                    d = s.toString();
                  if ((n.push(d), s.attrs)) {
                    if (!/^noscript$/i.test(s.tagName)) {
                      var h = t++;
                      (i.push(d.replace(/(\/?>)/, " " + l + "id=" + h + " $1")),
                        s.attrs.id !== u &&
                          s.attrs.id !== c &&
                          o.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + l + "proxyof=" + h + (s.unary ? " />" : ">")));
                    }
                  } else (i.push(d), o.push("endTag" === s.type ? d : ""));
                }
                return { tokens: e, raw: n.join(""), actual: i.join(""), proxy: o.join("") };
              }),
              (e.prototype._walkChunk = function () {
                for (var e = void 0, t = [this.proxyRoot]; s.existy((e = t.shift())); ) {
                  var n = 1 === e.nodeType;
                  if (!(n && i(e, "proxyof"))) {
                    n && ((this.actuals[i(e, "id")] = e), o(e, "id"));
                    var r = e.parentNode && i(e.parentNode, "proxyof");
                    r && this.actuals[r].appendChild(e);
                  }
                  t.unshift.apply(t, s.toArray(e.childNodes));
                }
              }),
              (e.prototype._handleScriptToken = function (e) {
                var t = this,
                  n = this.parser.clear();
                (n && this.writeQueue.unshift(n),
                  (e.src = e.attrs.src || e.attrs.SRC),
                  (e = this.options.beforeWriteToken(e)) &&
                    (e.src && this.scriptStack.length ? (this.deferredRemote = e) : this._onScriptStart(e),
                    this._writeScriptToken(e, function () {
                      t._onScriptDone(e);
                    })));
              }),
              (e.prototype._handleStyleToken = function (e) {
                var t = this.parser.clear();
                (t && this.writeQueue.unshift(t),
                  (e.type = e.attrs.type || e.attrs.TYPE || "text/css"),
                  (e = this.options.beforeWriteToken(e)) && this._writeStyleToken(e),
                  t && this.write());
              }),
              (e.prototype._writeStyleToken = function (e) {
                var t = this._buildStyle(e);
                (this._insertCursor(t, c),
                  e.content && (t.styleSheet && !t.sheet ? (t.styleSheet.cssText = e.content) : t.appendChild(this.doc.createTextNode(e.content))));
              }),
              (e.prototype._buildStyle = function (e) {
                var t = this.doc.createElement(e.tagName);
                return (
                  t.setAttribute("type", e.type),
                  s.eachKey(e.attrs, function (e, n) {
                    t.setAttribute(e, n);
                  }),
                  t
                );
              }),
              (e.prototype._insertCursor = function (e, t) {
                this._writeImpl('<span id="' + t + '"/>');
                var n = this.doc.getElementById(t);
                n && n.parentNode.replaceChild(e, n);
              }),
              (e.prototype._onScriptStart = function (e) {
                ((e.outerWrites = this.writeQueue), (this.writeQueue = []), this.scriptStack.unshift(e));
              }),
              (e.prototype._onScriptDone = function (e) {
                return e !== this.scriptStack[0]
                  ? void this.options.error({ msg: "Bad script nesting or script finished twice" })
                  : (this.scriptStack.shift(),
                    this.write.apply(this, e.outerWrites),
                    void (!this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), (this.deferredRemote = null))));
              }),
              (e.prototype._writeScriptToken = function (e, t) {
                var n = this._buildScript(e),
                  i = this._shouldRelease(n),
                  o = this.options.afterAsync;
                e.src &&
                  ((n.src = e.src),
                  this._scriptLoadHandler(
                    n,
                    i
                      ? o
                      : function () {
                          (t(), o());
                        },
                  ));
                try {
                  (this._insertCursor(n, u), (n.src && !i) || t());
                } catch (e) {
                  (this.options.error(e), t());
                }
              }),
              (e.prototype._buildScript = function (e) {
                var t = this.doc.createElement(e.tagName);
                return (
                  s.eachKey(e.attrs, function (e, n) {
                    t.setAttribute(e, n);
                  }),
                  e.content && (t.text = e.content),
                  t
                );
              }),
              (e.prototype._scriptLoadHandler = function (e, t) {
                function n() {
                  e = e.onload = e.onreadystatechange = e.onerror = null;
                }
                function i() {
                  (n(), null != t && t(), (t = null));
                }
                function o(e) {
                  (n(), s(e), null != t && t(), (t = null));
                }
                function a(e, t) {
                  var n = e["on" + t];
                  null != n && (e["_on" + t] = n);
                }
                var s = this.options.error;
                (a(e, "load"),
                  a(e, "error"),
                  r(e, {
                    onload: function () {
                      if (e._onload)
                        try {
                          e._onload.apply(this, Array.prototype.slice.call(arguments, 0));
                        } catch (t) {
                          o({ msg: "onload handler failed " + t + " @ " + e.src });
                        }
                      i();
                    },
                    onerror: function () {
                      if (e._onerror)
                        try {
                          e._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
                        } catch (t) {
                          return void o({ msg: "onerror handler failed " + t + " @ " + e.src });
                        }
                      o({ msg: "remote script failed " + e.src });
                    },
                    onreadystatechange: function () {
                      /^(loaded|complete)$/.test(e.readyState) && i();
                    },
                  }));
              }),
              (e.prototype._shouldRelease = function (e) {
                return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async"));
              }),
              e
            );
          })();
        t.default = d;
      },
      function (e, t, n) {
        e.exports = (function (e) {
          function t(i) {
            if (n[i]) return n[i].exports;
            var o = (n[i] = { exports: {}, id: i, loaded: !1 });
            return (e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports);
          }
          var n = {};
          return ((t.m = e), (t.c = n), (t.p = ""), t(0));
        })([
          function (e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var o = i(n(1));
            e.exports = o.default;
          },
          function (e, t, n) {
            "use strict";
            function i(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function o(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return ((t.default = e), t);
            }
            function r(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            t.__esModule = !0;
            var a = o(n(2)),
              s = o(n(3)),
              l = i(n(6)),
              c = n(5),
              u = { comment: /^<!--/, endTag: /^<\//, atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i, startTag: /^</, chars: /^[^<]/ },
              d = (function () {
                function e() {
                  var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (r(this, e), (this.stream = n));
                  var o = !1,
                    s = {};
                  for (var c in a) a.hasOwnProperty(c) && (i.autoFix && (s[c + "Fix"] = !0), (o = o || s[c + "Fix"]));
                  o
                    ? ((this._readToken = (0, l.default)(this, s, function () {
                        return t._readTokenImpl();
                      })),
                      (this._peekToken = (0, l.default)(this, s, function () {
                        return t._peekTokenImpl();
                      })))
                    : ((this._readToken = this._readTokenImpl), (this._peekToken = this._peekTokenImpl));
                }
                return (
                  (e.prototype.append = function (e) {
                    this.stream += e;
                  }),
                  (e.prototype.prepend = function (e) {
                    this.stream = e + this.stream;
                  }),
                  (e.prototype._readTokenImpl = function () {
                    var e = this._peekTokenImpl();
                    if (e) return ((this.stream = this.stream.slice(e.length)), e);
                  }),
                  (e.prototype._peekTokenImpl = function () {
                    for (var e in u)
                      if (u.hasOwnProperty(e) && u[e].test(this.stream)) {
                        var t = s[e](this.stream);
                        if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : ((t.text = this.stream.substr(0, t.length)), t);
                      }
                  }),
                  (e.prototype.peekToken = function () {
                    return this._peekToken();
                  }),
                  (e.prototype.readToken = function () {
                    return this._readToken();
                  }),
                  (e.prototype.readTokens = function (e) {
                    for (var t = void 0; (t = this.readToken()); ) if (e[t.type] && !1 === e[t.type](t)) return;
                  }),
                  (e.prototype.clear = function () {
                    var e = this.stream;
                    return ((this.stream = ""), e);
                  }),
                  (e.prototype.rest = function () {
                    return this.stream;
                  }),
                  e
                );
              })();
            for (var h in ((t.default = d),
            (d.tokenToString = function (e) {
              return e.toString();
            }),
            (d.escapeAttributes = function (e) {
              var t = {};
              for (var n in e) e.hasOwnProperty(n) && (t[n] = (0, c.escapeQuotes)(e[n], null));
              return t;
            }),
            (d.supports = a),
            a))
              a.hasOwnProperty(h) && (d.browserHasFlaw = d.browserHasFlaw || (!a[h] && h));
          },
          function (e, t) {
            "use strict";
            t.__esModule = !0;
            var n = !1,
              i = !1,
              o = window.document.createElement("div");
            try {
              var r = "<P><I></P></I>";
              ((o.innerHTML = r), (t.tagSoup = n = o.innerHTML !== r));
            } catch (e) {
              t.tagSoup = n = !1;
            }
            try {
              ((o.innerHTML = "<P><i><P></P></i></P>"), (t.selfClose = i = 2 === o.childNodes.length));
            } catch (e) {
              t.selfClose = i = !1;
            }
            ((o = null), (t.tagSoup = n), (t.selfClose = i));
          },
          function (e, t, n) {
            "use strict";
            function i(e) {
              var t = e.indexOf("--\x3e");
              if (t >= 0) return new c.CommentToken(e.substr(4, t - 1), t + 3);
            }
            function o(e) {
              var t = e.indexOf("<");
              return new c.CharsToken(t >= 0 ? t : e.length);
            }
            function r(e) {
              if (-1 !== e.indexOf(">")) {
                var t = e.match(u.startTag);
                if (t) {
                  var n = (function () {
                    var e = {},
                      n = {},
                      i = t[2];
                    return (
                      t[2].replace(u.attr, function (t, o) {
                        (arguments[2] || arguments[3] || arguments[4] || arguments[5]
                          ? arguments[5]
                            ? ((e[arguments[5]] = ""), (n[arguments[5]] = !0))
                            : (e[o] = arguments[2] || arguments[3] || arguments[4] || (u.fillAttr.test(o) && o) || "")
                          : (e[o] = ""),
                          (i = i.replace(t, "")));
                      }),
                      { v: new c.StartTagToken(t[1], t[0].length, e, n, !!t[3], i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) }
                    );
                  })();
                  if ("object" === (void 0 === n ? "undefined" : l(n))) return n.v;
                }
              }
            }
            function a(e) {
              var t = r(e);
              if (t) {
                var n = e.slice(t.length);
                if (n.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) {
                  var i = n.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i"));
                  if (i) return new c.AtomicTagToken(t.tagName, i[0].length + t.length, t.attrs, t.booleanAttrs, i[1]);
                }
              }
            }
            function s(e) {
              var t = e.match(u.endTag);
              if (t) return new c.EndTagToken(t[1], t[0].length);
            }
            t.__esModule = !0;
            var l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  };
            ((t.comment = i), (t.chars = o), (t.startTag = r), (t.atomicTag = a), (t.endTag = s));
            var c = n(4),
              u = {
                startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,
              };
          },
          function (e, t, n) {
            "use strict";
            function i(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            ((t.__esModule = !0), (t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = void 0));
            var o = n(5),
              r =
                ((t.Token = function e(t, n) {
                  (i(this, e), (this.type = t), (this.length = n), (this.text = ""));
                }),
                (t.CommentToken = (function () {
                  function e(t, n) {
                    (i(this, e), (this.type = "comment"), (this.length = n || (t ? t.length : 0)), (this.text = ""), (this.content = t));
                  }
                  return (
                    (e.prototype.toString = function () {
                      return "\x3c!--" + this.content;
                    }),
                    e
                  );
                })()),
                (t.CharsToken = (function () {
                  function e(t) {
                    (i(this, e), (this.type = "chars"), (this.length = t), (this.text = ""));
                  }
                  return (
                    (e.prototype.toString = function () {
                      return this.text;
                    }),
                    e
                  );
                })()),
                (t.TagToken = (function () {
                  function e(t, n, o, r, a) {
                    (i(this, e),
                      (this.type = t),
                      (this.length = o),
                      (this.text = ""),
                      (this.tagName = n),
                      (this.attrs = r),
                      (this.booleanAttrs = a),
                      (this.unary = !1),
                      (this.html5Unary = !1));
                  }
                  return (
                    (e.formatTag = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = "<" + e.tagName;
                      for (var i in e.attrs)
                        if (e.attrs.hasOwnProperty(i)) {
                          n += " " + i;
                          var r = e.attrs[i];
                          (void 0 !== e.booleanAttrs && void 0 !== e.booleanAttrs[i]) || (n += '="' + (0, o.escapeQuotes)(r) + '"');
                        }
                      return (e.rest && (n += " " + e.rest), (n += e.unary && !e.html5Unary ? "/>" : ">"), null != t && (n += t + "</" + e.tagName + ">"), n);
                    }),
                    e
                  );
                })()));
            ((t.StartTagToken = (function () {
              function e(t, n, o, r, a, s) {
                (i(this, e),
                  (this.type = "startTag"),
                  (this.length = n),
                  (this.text = ""),
                  (this.tagName = t),
                  (this.attrs = o),
                  (this.booleanAttrs = r),
                  (this.html5Unary = !1),
                  (this.unary = a),
                  (this.rest = s));
              }
              return (
                (e.prototype.toString = function () {
                  return r.formatTag(this);
                }),
                e
              );
            })()),
              (t.AtomicTagToken = (function () {
                function e(t, n, o, r, a) {
                  (i(this, e),
                    (this.type = "atomicTag"),
                    (this.length = n),
                    (this.text = ""),
                    (this.tagName = t),
                    (this.attrs = o),
                    (this.booleanAttrs = r),
                    (this.unary = !1),
                    (this.html5Unary = !1),
                    (this.content = a));
                }
                return (
                  (e.prototype.toString = function () {
                    return r.formatTag(this, this.content);
                  }),
                  e
                );
              })()),
              (t.EndTagToken = (function () {
                function e(t, n) {
                  (i(this, e), (this.type = "endTag"), (this.length = n), (this.text = ""), (this.tagName = t));
                }
                return (
                  (e.prototype.toString = function () {
                    return "</" + this.tagName + ">";
                  }),
                  e
                );
              })()));
          },
          function (e, t) {
            "use strict";
            function n(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              return e
                ? e.replace(/([^"]*)"/g, function (e, t) {
                    return /\\/.test(t) ? t + '"' : t + '\\"';
                  })
                : t;
            }
            ((t.__esModule = !0), (t.escapeQuotes = n));
          },
          function (e, t) {
            "use strict";
            function n(e) {
              return (e && "startTag" === e.type && ((e.unary = s.test(e.tagName) || e.unary), (e.html5Unary = !/\/>$/.test(e.text))), e);
            }
            function i(e, t) {
              var i = e.stream,
                o = n(t());
              return ((e.stream = i), o);
            }
            function o(e, t) {
              var n = t.pop();
              e.prepend("</" + n.tagName + ">");
            }
            function r() {
              var e = [];
              return (
                (e.last = function () {
                  return this[this.length - 1];
                }),
                (e.lastTagNameEq = function (e) {
                  var t = this.last();
                  return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase();
                }),
                (e.containsTagName = function (e) {
                  for (var t, n = 0; (t = this[n]); n++) if (t.tagName === e) return !0;
                  return !1;
                }),
                e
              );
            }
            function a(e, t, a) {
              function s() {
                var t = i(e, a);
                t && u[t.type] && u[t.type](t);
              }
              var c = r(),
                u = {
                  startTag: function (n) {
                    var i = n.tagName;
                    "TR" === i.toUpperCase() && c.lastTagNameEq("TABLE")
                      ? (e.prepend("<TBODY>"), s())
                      : t.selfCloseFix && l.test(i) && c.containsTagName(i)
                        ? c.lastTagNameEq(i)
                          ? o(e, c)
                          : (e.prepend("</" + n.tagName + ">"), s())
                        : n.unary || c.push(n);
                  },
                  endTag: function (n) {
                    c.last() ? (t.tagSoupFix && !c.lastTagNameEq(n.tagName) ? o(e, c) : c.pop()) : t.tagSoupFix && (a(), s());
                  },
                };
              return function () {
                return (s(), n(a()));
              };
            }
            ((t.__esModule = !0), (t.default = a));
            var s = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
              l = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
          },
        ]);
      },
      function (e, t) {
        "use strict";
        function n(e) {
          return null != e;
        }
        function i(e, t, n) {
          var i = void 0,
            o = (e && e.length) || 0;
          for (i = 0; i < o; i++) t.call(n, e[i], i);
        }
        function o(e, t, n) {
          for (var i in e) e.hasOwnProperty(i) && t.call(n, i, e[i]);
        }
        function r(e, t) {
          return !(!e || ("startTag" !== e.type && "atomicTag" !== e.type) || !("tagName" in e) || !~e.tagName.toLowerCase().indexOf(t));
        }
        t.__esModule = !0;
        var a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              };
        ((t.existy = n),
          (t.isFunction = function (e) {
            return "function" == typeof e;
          }),
          (t.each = i),
          (t.eachKey = o),
          (t.defaults = function (e, t) {
            return (
              (e = e || {}),
              o(t, function (t, i) {
                n(e[t]) || (e[t] = i);
              }),
              e
            );
          }),
          (t.toArray = function (e) {
            try {
              return Array.prototype.slice.call(e);
            } catch (n) {
              var t = (function () {
                var t = [];
                return (
                  i(e, function (e) {
                    t.push(e);
                  }),
                  { v: t }
                );
              })();
              if ("object" === (void 0 === t ? "undefined" : a(t))) return t.v;
            }
          }),
          (t.last = function (e) {
            return e[e.length - 1];
          }),
          (t.isTag = r),
          (t.isScript = function (e) {
            return r(e, "script");
          }),
          (t.isStyle = function (e) {
            return r(e, "style");
          }));
      },
    ]);
  }),
  $(document).ready(function () {
    if (
      ($(".btnModal").click(function () {
        let e = $(this).data("target");
        e && e.length && $(e).addClass("d-flex");
      }),
      $(".btn-modal-close").click(function () {
        $(this).closest(".modal").removeClass("d-flex");
      }),
      $("#modalTrungCauYKien").click(function (e) {
        this == e.target && $(this).removeClass("d-flex");
      }),
      $("body").is("#body_home"))
    ) {
      var e = $("#intro-index").width(),
        t = $("#intro-index").height(),
        n = $("#intro-index").offset().top,
        i = $("#intro-index").offset().left + parseInt($("#intro-index").css("padding-left"));
      $(".index-intro .item").each(function () {
        var o = $(this),
          r = $("img", this),
          a = $(o).width(),
          s = $(o).height(),
          l = $(o).offset().top;
        (o = $(o).offset().left) >= i && l >= n && o + a <= i + e && l + s <= n + t + 1 && (r.attr("src", r.attr("lazysrc")), r.attr("lazysrc", ""));
      });
    }
    $("body").is("#body_truyen") &&
      !$.browser.mobile &&
      ((function () {
        var e = document.createElement("p"),
          t = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform",
          };
        for (var n in (document.body.insertBefore(e, null), t))
          if (t.hasOwnProperty(n) && void 0 !== e.style[n]) {
            e.style[n] = "translate3d(1px,1px,1px)";
            var i = window.getComputedStyle(e).getPropertyValue(t[n]);
          }
        return (document.body.removeChild(e), void 0 !== i && 0 < i.length && "none" !== i);
      })() ||
        $("#truyen").removeClass("csstransforms3d"));
    var o,
      r,
      a,
      s,
      l = $("#truyen-ascii").val(),
      c = $("#ten-truyen").val(),
      u = $("#truyen-id").val();
    if (
      ($("body").is("#body_truyen") && update_views(u, "truyen"),
      $(".navbar, .overlay-container").on("click", ".login-link", function () {
        ($(".overlay-container > div").addClass("hide"), $(".overlay-container, .login-container").removeClass("hide"));
      }),
      $(".navbar, .overlay-container").on("click", ".register-link", function () {
        ($(".overlay-container > div").addClass("hide"), $(".overlay-container, .register-container").removeClass("hide"));
      }),
      $(".overlay-container").on("click", ".forgot-link", function () {
        ($(".overlay-container > div").addClass("hide"),
          $(".forgot-container .captcha-holder").html('<img src="/captcha/' + $("#form-secure").val() + '" id="captcha-img" alt="captcha">'),
          $(".overlay-container, .forgot-container").removeClass("hide"));
      }),
      $(".navbar").on("click", ".logout-link", function () {
        $.post("/login.php", { type: "logout", hash: $(".logout-link").data("hash") }).done(function (e) {
          if ("success" == e.status)
            setTimeout(function () {
              location.reload();
            }, 1e3);
          else if ("error" == e.status) return (alert("Có lỗi xảy ra, vui lòng báo cho admin nếu có thể."), !1);
        });
      }),
      $(".modal-close").click(function () {
        $(".overlay-container, .overlay-container > div").addClass("hide");
      }),
      u)
    ) {
      "/" != window.location.pathname &&
        ((r = "script"),
        (a = "facebook-jssdk"),
        (s = (o = document).getElementsByTagName(r)[0]),
        o.getElementById(a) ||
          (((o = o.createElement(r)).id = a),
          (o.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=1008942907608935"),
          s.parentNode.insertBefore(o, s)));
      var d = $("#truyen-comment").val();
    }
    var h = $.cookie("bgcolor-cookie"),
      p = "light";
    if (
      ("#232323" == h && (p = "dark"),
      h && "#F4F4F4" != h && $("#truyen-background").val(h),
      $("#truyen-background").on("change", function () {
        var e = this.value;
        (c
          ? "hatsan" == e
            ? ($("body")
                .css({
                  "background-color": "#f2f2f2",
                  "background-image": "url('https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/bg_op.png')",
                  "background-repeat": "repeat",
                })
                .removeClass("dark-theme"),
              (p = "light"))
            : "sachcu" == e
              ? ($("body")
                  .css({
                    "background-color": "#c2b49b",
                    "background-image": "url('https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/bg_book_op.png')",
                    "background-repeat": "repeat",
                  })
                  .removeClass("dark-theme"),
                (p = "light"))
              : "#232323" == e
                ? ($("body")
                    .css({ "background-color": e, "background-image": "url('https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/bg_dark.gif')", "background-repeat": "repeat" })
                    .addClass("dark-theme"),
                  (p = "dark"))
                : ($("body").css({ "background-color": e, "background-image": "none" }).removeClass("dark-theme"), (p = "light"))
          : "#232323" == e
            ? ($("body").addClass("dark-theme"), (p = "dark"))
            : ($("body").removeClass("dark-theme"), (p = "light")),
          $.cookie("bgcolor-cookie", e, { expires: 365, path: "/" }));
      }),
      l &&
        setTimeout(function () {
          load_comment("fb-comment-story", d, p);
        }, 2e3),
      c)
    ) {
      h = $.cookie("font-cookie");
      var f = $.cookie("size-cookie"),
        T = $.cookie("lineheight-cookie"),
        g = $.cookie("fluid-switch-cookie"),
        m = $.cookie("onebreak-switch-cookie"),
        b = $("#chapter-bnum").val(),
        v = $("#chapter-num").val();
      (1 == $("#chapter-sac").val() && ga("send", "event", "truyensac"),
        h ? $("#font-chu").val(h) : $.browser.mobile && $("#font-chu").val("Arial, sans-serif"),
        f ? $("#size-chu").val(f) : $.browser.mobile || $("#size-chu").val("22px"),
        T && "180%" != T ? $("#line-height").val(T) : $("#line-height").val("180%"),
        1 == g && ($("#fluid-no").attr("checked", !1), $("#fluid-yes").attr("checked", !0)),
        1 == m ? ($("#onebreak-no").attr("checked", !1), $("#onebreak-yes").attr("checked", !0)) : (original_content = $(".chapter-c").html()),
        $("#font-chu").on("change", function () {
          var e = this.value;
          ($(".chapter-c").css("font-family", e), $.cookie("font-cookie", e, { expires: 365, path: "/" }));
        }),
        $("#size-chu").on("change", function () {
          var e = this.value;
          ($(".chapter-c").css("font-size", e), $.cookie("size-cookie", e, { expires: 365, path: "/" }));
        }),
        $("#line-height").on("change", function () {
          var e = this.value;
          ($(".chapter-c").css("line-height", e), $.cookie("lineheight-cookie", e, { expires: 365, path: "/" }));
        }),
        $(document.body).on("click", ".chapter .toggle-nav-open", function () {
          1 == $.cookie("hidenav-cookie")
            ? ($(".navbar").slideDown(300),
              $(this).html('<span class="glyphicon glyphicon-menu-up"></span>'),
              $(".chapter").css("margin-top", "0"),
              $.removeCookie("hidenav-cookie", { path: "/" }))
            : ($(".navbar").slideUp(300),
              $(this).html('<span class="glyphicon glyphicon-menu-down"></span>'),
              $(".chapter").css("margin-top", "10px"),
              $.cookie("hidenav-cookie", 1, { expires: 365, path: "/" }));
        }),
        $('input[name="fluid-switch"]').click(function () {
          "yes" == this.value
            ? ($(".chapter").removeClass("container").addClass("container-fluid"), $.cookie("fluid-switch-cookie", 1, { expires: 365, path: "/" }))
            : ($(".chapter").removeClass("container-fluid").addClass("container"), $.removeCookie("fluid-switch-cookie", { path: "/" }));
        }),
        $('input[name="onebreak-switch"]').click(function () {
          "yes" == this.value
            ? ($(".chapter-c").html(
                $(".chapter-c")
                  .html()
                  .replace(/(<br\s*\/?>\s*\n?(&nbsp;)?){2,}/gi, "<br>"),
              ),
              $.cookie("onebreak-switch-cookie", 1, { expires: 365, path: "/" }))
            : (original_content && $(".chapter-c").html(original_content), $.removeCookie("onebreak-switch-cookie", { path: "/" }));
        }),
        $(document).keydown(function (e) {
          !1 !== $("input[type='text'], input[type='search']").is(":focus") ||
            e.ctrlKey ||
            (37 == e.which || 65 == e.which
              ? $("#prev_chap")[0].click()
              : 39 == e.which || 68 == e.which
                ? $("#next_chap")[0].click()
                : 83 == e.which
                  ? ((e = $(window).scrollTop()), $(window).scrollTop(e + 37))
                  : 87 == e.which && ((e = $(window).scrollTop()), $(window).scrollTop(e - 37)));
        }),
        $(".chapter-nav").on("click", "button.chapter_jump", function () {
          ($("button.chapter_jump").attr("disabled", !0),
            $.get("/ajax.php", { type: "chapter_option", data: u }).done(function (e) {
              var t = "";
              (b && (t = "quyen-" + b + "-"),
                (e = e.replace(new RegExp(t + "chuong-" + v + '">', "g"), t + "chuong-" + v + '" selected>')),
                $(".chapter_jump").replaceWith(e));
            }));
        }),
        $(".chapter-nav").on("click", "button#chapter_error", function () {
          var e = prompt("Vui lòng mô tả lỗi", "");
          if (null === e || !1 === e) return !1;
          "" === e
            ? alert("Bạn chưa nhập mô tả. Báo lỗi không thành công.")
            : ($("button#chapter_error").addClass("hide"),
              $.post("/ajax.php", { type: "chapter_error", id: $("#chapter-id").val(), message: e }),
              alert("Cảm ơn bạn đã báo nha."));
        }),
        $(".chapter-nav").on("click", "button#chapter_comment", function () {
          load_comment("fb-comment-chapter", d, p);
        }),
        (h = $(".truyen-title").text()),
        $.post("/ajax.php", { type: "chapter_view_history", tid: u, tenfull: h, ten: c, bnum: b, num: v, t: new Date().getTime() }),
        "*Chương này có nội dung ảnh, nếu bạn không thấy nội dung chương, vui lòng bật chế độ hiện hình ảnh của trình duyệt để đọc." ===
          $(".chapter-c").text() && $(".chapter-c").addClass("no-br"));
    }
    $(".dark-theme").on("mouseover", ".pagination li", function () {
      $(this).next().hasClass("active") && $(this).children("a").css({ "border-right": "0", "padding-right": "10px" });
    });
    var S = null;
    if (
      ($("#search-input").keyup(function () {
        var e;
        (clearTimeout(S),
          0 == (e = $(this).val()).length
            ? $(".list-search-res").html("").addClass("hide")
            : 3 <= e.length &&
              ($(".list-search-res").html('<img src="https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/loading-search.gif" alt="loading">').removeClass("hide"),
              (S = setTimeout(function () {
                quick_search(e);
              }, 500))));
      }),
      $("#search-input").bind("paste", function () {
        clearTimeout(S);
        var e = this;
        setTimeout(function () {
          var t = $(e).val();
          0 == t.length
            ? $(".list-search-res").html("").addClass("hide")
            : 3 <= t.length &&
              ($(".list-search-res").html('<img src="https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/loading-search.gif" alt="loading">').removeClass("hide"),
              (S = setTimeout(function () {
                quick_search(t);
              }, 500)));
        }, 0);
      }),
      $("html").click(function (e) {
        "#search-input" != e.target.id && $(".list-search-res").html("").addClass("hide");
      }),
      $(".top-nav").on("click", "div", function () {
        var e = $(this),
          t = e.attr("data-type"),
          n = e.parent().attr("data-limit"),
          i = e.parent().attr("data-cat");
        if (e.hasClass("active")) return !1;
        (e.css({ cursor: "default", "pointer-events": "none", opacity: "0.6" }),
          $.get("/ajax.php", { type: "top_switch", data_type: t, data_limit: n, data_cat: i }).done(function (t) {
            ($(".top-nav div").removeClass("active"),
              e.addClass("active"),
              e.css({ cursor: "pointer", "pointer-events": "auto", opacity: "1" }),
              $(".top-item").remove(),
              $(".top-nav").after(t),
              $(".top-item").hide().fadeIn(300));
          }));
      }),
      $(".desc-text").prop("scrollHeight") > $(".desc-text").height() && $(".showmore .btn").removeClass("hide"),
      $(".dropdown-menu, #list-chapter").on("click", "form", function (e) {
        e.stopPropagation();
      }),
      $("#list-chapter").on("submit", "#page_jump", function (e) {
        e.preventDefault();
        var t = $("#page_jump").find("button[type='submit']"),
          n = $("h1").text();
        e = $("#total-page").val();
        var i = parseInt($("input[name='page']").val(), 10);
        (i > e && (i = e),
          isNumber(i) &&
            0 == i % 1 &&
            (t.css({ cursor: "default", "pointer-events": "none", opacity: "0.6" }),
            $.get("/ajax.php", { type: "list_chapter", tid: u, tascii: l, tname: n, page: i, totalp: e }).done(function (e) {
              (ListChapProcess(n, l, i, e.page_list, e.chap_list), t.css({ cursor: "pointer", "pointer-events": "auto", opacity: "1" }));
            })));
      }),
      $("#list-chapter").on("click", ".pagination li a", function (e) {
        var t = $(this),
          n = $(this).attr("href");
        if ("javascript:void(0)" != n) {
          (e.preventDefault(), t.css({ cursor: "default", "pointer-events": "none", opacity: "0.6" }));
          var i = $("h1").text();
          if (((e = $("#total-page").val()), n == "https://dochay.me/" + l + "/#list-chapter")) o = 1;
          else {
            var o = n.match(/(\d+)(?!.*\d)/);
            o = o[1];
          }
          $.get("/ajax.php", { type: "list_chapter", tid: u, tascii: l, tname: i, page: o, totalp: e }).done(function (e) {
            (ListChapProcess(i, l, o, e.page_list, e.chap_list), t.css({ cursor: "pointer", "pointer-events": "auto", opacity: "1" }));
          });
        }
      }),
      $("#body_home").length)
    ) {
      ($.get("/ajax.php", { type: "read_history", t: new Date().getTime() }).done(function (e) {
        e && ($("#history-holder").replaceWith(e.main), $("#history-holder-side").replaceWith(e.side), $(".account-story-reading").html(e.side));
      }),
        $("#hot-select").on("change", function () {
          var e = $(this).find(":selected").val();
          $.get("/ajax.php", { type: "hot_select", id: e }).done(function (e) {
            $(".index-intro").hide().html(e).fadeIn();
          });
        }));
    }
    if (
      ($("#new-select").on("change", function () {
        var e = $(this).find(":selected").val();
        $.get("/ajax.php", { type: "new_select", id: e }).done(function (e) {
          ($(".list-new .row").remove(), $(".list-new .title-list").after(e), $(".list-new .row").hide().fadeIn());
        });
      }),
      $("#contact-form").submit(function (e) {
        (e.preventDefault(), (e = $("#contact-name").val()));
        var t = $("#contact-email").val(),
          n = $("#contact-subject").val(),
          i = $("#contact-message").val(),
          o = $("#contact-secure").val();
        if (!e || !n || !i) return (FormError("Bạn vui lòng điền đủ thông tin liên hệ.", "contact-container"), !1);
        (FormDisable(".single-page-form"),
          FormSuccess('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Chờ tí / Please wait...', "contact-container"),
          $.post("/ajax.php", { type: "contact", name: e, email: t, subject: n, message: i, secure: o }).done(function (e) {
            (FormEnable(".single-page-form"),
              "success" == e.status
                ? (FormSuccess("Bạn đã gửi nội dung liên hệ thành công! / Your message was sent successfully!", "contact-container"),
                  $("#contact-form").trigger("reset"),
                  $("#contact-secure").val(e.token))
                : FormError(
                    "Gửi nội dung liên hệ thất bại, bạn vui lòng thử lại sau hoặc gửi email trực tiếp đến contact@dochay.me / Error, please try again later or send email directly to contact@dochay.me",
                    "contact-container",
                  ));
          }));
      }),
      $(".pagination-container").on("submit", "#page_jump", function (e) {
        (e.preventDefault(), (e = $("input[name='page_type']").val()));
        var t = $("input[name='page']").val(),
          n = $("input[name='filter']").val();
        e
          ? isNumber(t) && 0 == t % 1 && (window.location.href = "https://dochay.me/" + e + "/" + l + n + "/trang-" + t + "/")
          : isNumber(t) && 0 == t % 1 && (window.location.href = "https://dochay.me/" + l + "/trang-" + t + "/#list-chapter");
      }),
      $("#chapter-nav-top, #chapter-nav-bot").on("change", ".chapter_jump", function () {
        $("option:selected", this);
        var e = this.value;
        e && c && (window.location.href = "https://dochay.me/" + c + "/" + e + "/");
      }),
      $("#truyen").on("click", ".showmore .btn", function (e) {
        (e.preventDefault(), $(".desc-text").css("height", "auto"), $(".showmore").css("height", 0), $(this).addClass("hide"));
      }),
      $(".rate-holder").raty({
        number: 10,
        path: "https://cdn.jsdelivr.net/gh/gassets/dochay.me@2.1.1/assets/images/raty",
        noRatedMsg: "Đã đánh giá",
        hints: "Không còn gì để nói...;WTF;Cái gì thế này ?!;Haizz;Tạm;Cũng được;Khá đấy;Được;Hay;Tuyệt đỉnh!".split(";"),
        target: ".rate-text",
        score: function () {
          return $(this).attr("data-score");
        },
        click: function (e) {
          ($(".rate-holder").raty("readOnly", !0),
            $.post("/ajax.php", { type: "rate", data: e, id: u }),
            localStorage.setItem(u, "rated"),
            alert("Cảm ơn bạn đã đánh giá truyện!"));
        },
        readOnly: function () {
          if ("rated" == localStorage.getItem(u)) return !0;
        },
      }),
      $("div.lazyimg").length)
    ) {
      var y = function () {
        $("div.lazyimg").each(function () {
          if ($(this).is(":onScreen")) {
            var e = $.browser.mobile ? $(this).data("image") : $(this).data("desk-image"),
              t = $(this).data("classname"),
              n = $(this).data("alt");
            ((e = t ? '<img src="' + e + '" class="' + t + '" alt="' + n + '">' : '<img src="' + e + '" alt="' + n + '">'), $(this).replaceWith(e));
          }
        });
      };
      (y(),
        $(window).scroll(function () {
          y();
        }));
    }
    $.browser.mobile && $(".col-truyen-main").addClass("no-hover");
  }),
  (function (e, t) {
    e(function () {
      "use strict";
      function e(e, t) {
        return null != e && null != t && e.toLowerCase() === t.toLowerCase();
      }
      function n(e, t) {
        var n,
          i,
          o = e.length;
        if (!o || !t) return !1;
        for (n = t.toLowerCase(), i = 0; i < o; ++i) if (n === e[i].toLowerCase()) return !0;
        return !1;
      }
      function i(e) {
        for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"));
      }
      function o(e, t) {
        ((this.ua = (function (e) {
          return (e || "").substr(0, 500);
        })(e)),
          (this._cache = {}),
          (this.maxPhoneWidth = t || 600));
      }
      var r,
        a = {
          mobileDetectRules: {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
              Pixel: "; \\bPixel\\b",
              HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
              Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
              LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
              Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              Xiaomi:
                "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo (3DS|Switch)",
              Amoi: "Amoi",
              INQ: "INQ",
              OnePlus: "ONEPLUS",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
              ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
              DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
              MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              iPadOS: "CPU OS 13",
              SailfishOS: "Sailfish",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
              Bolt: "bolt",
              TeaShark: "teashark",
              Blazer: "Blazer",
              Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
              WeChat: "\\bMicroMessenger\\b",
              UCBrowser: "UC.*Browser|UCWEB",
              baiduboxapp: "baiduboxapp",
              baidubrowser: "baidubrowser",
              DiigoBrowser: "DiigoBrowser",
              Mercury: "\\bMercury\\b",
              ObigoBrowser: "Obigo",
              NetFront: "NF-Browser",
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            },
            props: {
              Mobile: "Mobile/[VER]",
              Build: "Build/[VER]",
              Version: "Version/[VER]",
              VendorID: "VendorID/[VER]",
              iPad: "iPad.*CPU[a-z ]+[VER]",
              iPhone: "iPhone.*CPU[a-z ]+[VER]",
              iPod: "iPod.*CPU[a-z ]+[VER]",
              Kindle: "Kindle/[VER]",
              Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
              Coast: ["Coast/[VER]"],
              Dolfin: "Dolfin/[VER]",
              Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
              Fennec: "Fennec/[VER]",
              Edge: "Edge/[VER]",
              IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
              NetFront: "NetFront/[VER]",
              NokiaBrowser: "NokiaBrowser/[VER]",
              Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
              "Opera Mini": "Opera Mini/[VER]",
              "Opera Mobi": "Version/[VER]",
              UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
              MQQBrowser: "MQQBrowser/[VER]",
              MicroMessenger: "MicroMessenger/[VER]",
              baiduboxapp: "baiduboxapp/[VER]",
              baidubrowser: "baidubrowser/[VER]",
              SamsungBrowser: "SamsungBrowser/[VER]",
              Iron: "Iron/[VER]",
              Safari: ["Version/[VER]", "Safari/[VER]"],
              Skyfire: "Skyfire/[VER]",
              Tizen: "Tizen/[VER]",
              Webkit: "webkit[ /][VER]",
              PaleMoon: "PaleMoon/[VER]",
              SailfishBrowser: "SailfishBrowser/[VER]",
              Gecko: "Gecko/[VER]",
              Trident: "Trident/[VER]",
              Presto: "Presto/[VER]",
              Goanna: "Goanna/[VER]",
              iOS: " \\bi?OS\\b [VER][ ;]{1}",
              Android: "Android [VER]",
              Sailfish: "Sailfish [VER]",
              BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
              MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          },
          detectMobileBrowsers: {
            fullPattern:
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern:
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i,
          },
        },
        s = Object.prototype.hasOwnProperty;
      return (
        (a.FALLBACK_PHONE = "UnknownPhone"),
        (a.FALLBACK_TABLET = "UnknownTablet"),
        (a.FALLBACK_MOBILE = "UnknownMobile"),
        (r =
          "isArray" in Array
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              }),
        (function () {
          var e,
            t,
            n,
            o,
            l,
            c,
            u = a.mobileDetectRules;
          for (e in u.props)
            if (s.call(u.props, e)) {
              for (t = u.props[e], r(t) || (t = [t]), l = t.length, o = 0; o < l; ++o)
                ((c = (n = t[o]).indexOf("[VER]")) >= 0 && (n = n.substring(0, c) + "([\\w._\\+]+)" + n.substring(c + 5)), (t[o] = new RegExp(n, "i")));
              u.props[e] = t;
            }
          (i(u.oss),
            i(u.phones),
            i(u.tablets),
            i(u.uas),
            i(u.utils),
            (u.oss0 = { WindowsPhoneOS: u.oss.WindowsPhoneOS, WindowsMobileOS: u.oss.WindowsMobileOS }));
        })(),
        (a.findMatch = function (e, t) {
          for (var n in e) if (s.call(e, n) && e[n].test(t)) return n;
          return null;
        }),
        (a.findMatches = function (e, t) {
          var n = [];
          for (var i in e) s.call(e, i) && e[i].test(t) && n.push(i);
          return n;
        }),
        (a.getVersionStr = function (e, t) {
          var n,
            i,
            o,
            r,
            l = a.mobileDetectRules.props;
          if (s.call(l, e)) for (o = (n = l[e]).length, i = 0; i < o; ++i) if (null !== (r = n[i].exec(t))) return r[1];
          return null;
        }),
        (a.getVersion = function (e, t) {
          var n = a.getVersionStr(e, t);
          return n ? a.prepareVersionNo(n) : NaN;
        }),
        (a.prepareVersionNo = function (e) {
          var t;
          return (1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]), t.length > 1 && ((e = t[0] + "."), t.shift(), (e += t.join(""))), Number(e));
        }),
        (a.isMobileFallback = function (e) {
          return a.detectMobileBrowsers.fullPattern.test(e) || a.detectMobileBrowsers.shortPattern.test(e.substr(0, 4));
        }),
        (a.isTabletFallback = function (e) {
          return a.detectMobileBrowsers.tabletPattern.test(e);
        }),
        (a.prepareDetectionCache = function (e, n, i) {
          var r, s, l;
          if (e.mobile === t)
            return (s = a.findMatch(a.mobileDetectRules.tablets, n))
              ? ((e.mobile = e.tablet = s), void (e.phone = null))
              : (r = a.findMatch(a.mobileDetectRules.phones, n))
                ? ((e.mobile = e.phone = r), void (e.tablet = null))
                : void (a.isMobileFallback(n)
                    ? ((l = o.isPhoneSized(i)),
                      l === t
                        ? ((e.mobile = a.FALLBACK_MOBILE), (e.tablet = e.phone = null))
                        : l
                          ? ((e.mobile = e.phone = a.FALLBACK_PHONE), (e.tablet = null))
                          : ((e.mobile = e.tablet = a.FALLBACK_TABLET), (e.phone = null)))
                    : a.isTabletFallback(n)
                      ? ((e.mobile = e.tablet = a.FALLBACK_TABLET), (e.phone = null))
                      : (e.mobile = e.tablet = e.phone = null));
        }),
        (a.mobileGrade = function (e) {
          var t = null !== e.mobile();
          return (e.os("iOS") && e.version("iPad") >= 4.3) ||
            (e.os("iOS") && e.version("iPhone") >= 3.1) ||
            (e.os("iOS") && e.version("iPod") >= 3.1) ||
            (e.version("Android") > 2.1 && e.is("Webkit")) ||
            e.version("Windows Phone OS") >= 7 ||
            (e.is("BlackBerry") && e.version("BlackBerry") >= 6) ||
            e.match("Playbook.*Tablet") ||
            (e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi")) ||
            e.match("hp.*TouchPad") ||
            (e.is("Firefox") && e.version("Firefox") >= 12) ||
            (e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4) ||
            (e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3) ||
            (e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS")) ||
            e.is("MeeGoOS") ||
            e.is("Tizen") ||
            (e.is("Dolfin") && e.version("Bada") >= 2) ||
            ((e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3) ||
            e.match("Kindle Fire") ||
            (e.is("Kindle") && e.version("Kindle") >= 3) ||
            (e.is("AndroidOS") && e.is("NookTablet")) ||
            (e.version("Chrome") >= 11 && !t) ||
            (e.version("Safari") >= 5 && !t) ||
            (e.version("Firefox") >= 4 && !t) ||
            (e.version("MSIE") >= 7 && !t) ||
            (e.version("Opera") >= 10 && !t)
            ? "A"
            : (e.os("iOS") && e.version("iPad") < 4.3) ||
                (e.os("iOS") && e.version("iPhone") < 3.1) ||
                (e.os("iOS") && e.version("iPod") < 3.1) ||
                (e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6) ||
                (e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS"))) ||
                e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                (e.version("Opera Mobi") >= 11 && e.is("SymbianOS"))
              ? "B"
              : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C");
        }),
        (a.detectOS = function (e) {
          return a.findMatch(a.mobileDetectRules.oss0, e) || a.findMatch(a.mobileDetectRules.oss, e);
        }),
        (a.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        }),
        (o.prototype = {
          constructor: o,
          mobile: function () {
            return (a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile);
          },
          phone: function () {
            return (a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone);
          },
          tablet: function () {
            return (a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet);
          },
          userAgent: function () {
            return (this._cache.userAgent === t && (this._cache.userAgent = a.findMatch(a.mobileDetectRules.uas, this.ua)), this._cache.userAgent);
          },
          userAgents: function () {
            return (this._cache.userAgents === t && (this._cache.userAgents = a.findMatches(a.mobileDetectRules.uas, this.ua)), this._cache.userAgents);
          },
          os: function () {
            return (this._cache.os === t && (this._cache.os = a.detectOS(this.ua)), this._cache.os);
          },
          version: function (e) {
            return a.getVersion(e, this.ua);
          },
          versionStr: function (e) {
            return a.getVersionStr(e, this.ua);
          },
          is: function (t) {
            return (
              n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(a.findMatches(a.mobileDetectRules.utils, this.ua), t)
            );
          },
          match: function (e) {
            return (e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua));
          },
          isPhoneSized: function (e) {
            return o.isPhoneSized(e || this.maxPhoneWidth);
          },
          mobileGrade: function () {
            return (this._cache.grade === t && (this._cache.grade = a.mobileGrade(this)), this._cache.grade);
          },
        }),
        "undefined" != typeof window && window.screen
          ? (o.isPhoneSized = function (e) {
              return e < 0 ? t : a.getDeviceSmallerSide() <= e;
            })
          : (o.isPhoneSized = function () {}),
        (o._impl = a),
        (o.version = "1.4.5 2021-03-13"),
        o
      );
    });
  })(
    (function (e) {
      if ("undefined" != typeof module && module.exports)
        return function (e) {
          module.exports = e();
        };
      if ("function" == typeof define && define.amd) return define;
      if ("undefined" != typeof window)
        return function (e) {
          window.MobileDetect = e();
        };
      throw new Error("unknown environment");
    })(),
  ),
  (function (e, t, n, i, o, r, a) {
    ((e.GoogleAnalyticsObject = o),
      (e[o] =
        e[o] ||
        function () {
          (e[o].q = e[o].q || []).push(arguments);
        }),
      (e[o].l = 1 * new Date()),
      (r = t.createElement(n)),
      (a = t.getElementsByTagName(n)[0]),
      (r.async = 1),
      (r.src = "//static.dochay.me/js/analytics.js"),
      a.parentNode.insertBefore(r, a));
  })(window, document, "script", 0, "ga"),
  ga("create", "UA-189964694-6", "auto"),
  ga("send", "pageview"),
  $(".chapter-c").length && chapter_filter(),
  (window.jwtInfo = jwtDecode()),
  "open" == localStorage.getItem("dochay-test") && $("[data-func='authentication']").addClass("active-func"),
  $(function () {
    ($(".f_register_validate").on("submit", function (e) {
      e.preventDefault();
      const t = $(this),
        n = t.find('button[type="submit"]');
      let i = !0,
        o = t.attr("action");
      t.find("input[required]").each(function () {
        $(this).val().trim() ? $(this).css("border-color", "#ced4da") : ($(this).css("border-color", "#dc3545"), (i = !1));
      });
      const r = t.find('input[name="password"]'),
        a = t.find('input[name="cf_password"]');
      if ((r.length && a.length && r.val() !== a.val() && (a.css("border-color", "#dc3545"), alert("Mật khẩu xác nhận không khớp!"), (i = !1)), i)) {
        const e = n.html();
        (n.prop("disabled", !0).html('<span class="spinner-border spinner-border-sm me-2"role="status"aria-hidden="true"></span>Đang đăng ký...'),
          $.ajax({
            url: o,
            data: t.serialize(),
            type: "POST",
            success: function (e) {
              let t = {};
              try {
                t = JSON.parse(e);
              } catch (e) {}
              t?.ok ? (setCookie("token", t?.token, 30), localStorage.setItem("info", JSON.stringify(t?.data)), (window.location.href = "/")) : alert(e?.msg);
            },
            error: function (e) {
              alert("Có lỗi xảy ra, vui lòng thử lại sau!");
            },
            complete: function () {
              n.prop("disabled", !1).html(e);
            },
          }));
      }
    }),
      $(".f_login_validate").on("submit", function (e) {
        e.preventDefault();
        const t = $(this),
          n = t.find('button[type="submit"]');
        let i = !0,
          o = t.attr("action");
        if (
          (t.find("input[required]").each(function () {
            $(this).val().trim() ? $(this).css("border-color", "#ced4da") : ($(this).css("border-color", "#dc3545"), (i = !1));
          }),
          i)
        ) {
          const e = n.html();
          (n.prop("disabled", !0).html('<span class="spinner-border spinner-border-sm me-2"role="status"aria-hidden="true"></span>Đang đăng nhập...'),
            $.ajax({
              url: o,
              data: t.serialize(),
              type: "POST",
              success: function (e) {
                let t = {};
                try {
                  t = JSON.parse(e);
                } catch (e) {}
                t?.ok ? (setCookie("token", t?.token, 30), localStorage.setItem("info", JSON.stringify(t?.data)), (window.location.href = "/")) : alert(t?.msg);
              },
              error: function (e) {
                alert("Có lỗi xảy ra, vui lòng thử lại sau!");
              },
              complete: function () {
                n.prop("disabled", !1).html(e);
              },
            }));
        }
      }),
      $(".f_forgot_pass_validate").on("submit", function (e) {
        e.preventDefault();
        const t = $(this),
          n = t.find('button[type="submit"]');
        let i = !0,
          o = t.attr("action");
        if (
          (t.find("input[required]").each(function () {
            $(this).val().trim() ? $(this).css("border-color", "#ced4da") : ($(this).css("border-color", "#dc3545"), (i = !1));
          }),
          i)
        ) {
          const e = n.html();
          (n.prop("disabled", !0).html('<span class="spinner-border spinner-border-sm me-2"role="status"aria-hidden="true"></span>Đang gửi email...'),
            $.ajax({
              url: o,
              data: t.serialize(),
              type: "POST",
              success: function (e) {
                let t = {};
                try {
                  t = JSON.parse(e);
                } catch (e) {}
                alert(t?.msg);
              },
              error: function (e) {
                alert("Có lỗi xảy ra, vui lòng thử lại sau!");
              },
              complete: function () {
                n.prop("disabled", !1).html(e);
              },
            }));
        }
      }));
  }),
  $(function () {
    function e() {
      ($("#modalAuth").removeClass("show"), $("body").removeClass("overflow-hidden"));
    }
    ($(window).on("click", function (t) {
      $(t.target).is("#modalAuth") && e();
    }),
      $(document).on("keydown", function (t) {
        "Escape" === t.key && e();
      }),
      $(document).on("click", ".password-toggle", function () {
        const e = $(this).attr("data-target-id");
        (!(function (e) {
          const t = "password" === e.attr("type") ? "text" : "password";
          e.attr("type", t);
        })($(`#${e}`)),
          "password" === $(`#${e}`).attr("type")
            ? $(this).html(
                '<svg width="15"height="15"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>',
              )
            : $(this).html(
                '<svg width="15"height="15"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>',
              ));
      }),
      $(document).on("click", "[data-switch-tab]", function (e) {
        e.preventDefault();
        !(function (e) {
          ($(".nav-link").removeClass("active"),
            $(".tab-pane").removeClass("show active"),
            $("#" + e + "-tab").addClass("active"),
            $("#" + e + "-pane").addClass("show active"),
            $(".modal-title").text({ login: "Đăng nhập thành viên", register: "Đăng ký thành viên", resetPass: "Khôi phục mật khẩu" }[e] || ""));
        })($(this).attr("data-switch-tab"));
      }),
      $(document).on("click", ".modal-auth-btn-close", function (t) {
        e();
      }),
      $(document).on("click", ".btnLogin", function (e) {
        ($("#modalAuth").addClass("show"), $("body").addClass("overflow-hidden"));
      }));
  }),
  $(function () {
    function e(e) {
      const t = new Date(e);
      return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
    }
    function t() {
      ($("#modalTaiKhoan").removeClass("show"), $("body").removeClass("overflow-hidden"));
    }
    function n(e, t) {
      ($(".account-tab-btn").removeClass("active"), $(".account-tab-pane").removeClass("active"), t.addClass("active"), $("#" + e + "-tab").addClass("active"));
    }
    function i() {
      (eraseCookie("token"), localStorage.removeItem("info"), (window.location.href = "/"));
    }
    function o() {
      const e = $("#passwordForm"),
        t = $("#toggleText");
      (e.toggleClass("account-d-none"),
        e.hasClass("account-d-none")
          ? (t.text("Đổi mật khẩu"),
            $("#currentPassword").val(""),
            $("#newPassword").val(""),
            $("#confirmPassword").val(""),
            $("#passwordStrength").text(""),
            $("#passwordMatch").text(""))
          : t.text("Ẩn form đổi mật khẩu"));
    }
    ($("#modalTaiKhoan").on("click", function (e) {
      e.target === this && t();
    }),
      $("#btnEditInfo").on("click", function () {
        "Hủy" === $(this).text().trim()
          ? (function () {
              const t = getUserInfo();
              (t &&
                ($("[name='profile_name']").val(t.name),
                $("[name='profile_email']").val(t.email),
                $("[name='profile_phone']").val(t.phone),
                $("[name='profile_birthday']").val(e(t.birthday))),
                $("#editForm").addClass("account-d-none"),
                $("#infoDisplay").removeClass("account-d-none"),
                $("#btnEditInfo").text("Chỉnh sửa").removeClass("btn-secondary").addClass("btn-primary"));
            })()
          : ($("#infoDisplay").addClass("account-d-none"),
            $("#editForm").removeClass("account-d-none"),
            $("#btnEditInfo").text("Hủy").removeClass("btn-primary").addClass("btn-secondary"));
      }),
      $("#profile_avatar_input").on("change", function (e) {
        const t = e.target.files[0];
        if (t) {
          const e = new FileReader();
          ((e.onload = function (e) {
            $("#profile_avatar").attr("src", e.target.result);
          }),
            e.readAsDataURL(t));
        }
      }),
      $(".account-logout-btn").on("click", function () {
        i();
      }),
      $(".account-tab-btn").on("click", function () {
        n($(this).data("tab-name"), $(this));
      }),
      $(document).on("click", ".btnTaiKhoan", function () {
        var t;
        (t = getUserInfo())
          ? (t.email_verified_at && $(document).find(".account-email-verification").remove(),
            $("[data-name='profile_name']").text(t.name),
            $("[name='profile_name']").val(t.name),
            $("[name='profile_email']").val(t.email),
            $("[name='profile_phone']").val(t.phone),
            $("[name='profile_birthday']").val(e(t.birthday)),
            $("#profile_avatar").attr("src", t.avatar),
            $(document).find(".account-tabs .tab-btn.active").click(),
            t.email_verified_at && $(document).find(".profile_email-verified").removeClass("d-none"),
            $("#modalTaiKhoan").addClass("show"),
            $("body").addClass("overflow-hidden"))
          : i();
      }),
      $(document).on("click", ".account-modal-close", function (e) {
        t();
      }),
      $(document).on("click", ".account-tab-btn", function () {
        n($(this).attr("data-tab-name"), $(this));
      }),
      $(".f_profile_edit_validate").on("submit", function (e) {
        e.preventDefault();
        const t = $(this),
          n = t.find('button[type="submit"]');
        let i = !0,
          o = t.attr("action"),
          r = getCookie("token");
        if (
          (t.find("input[required]").each(function () {
            $(this).val().trim() ? $(this).css("border-color", "#ced4da") : ($(this).css("border-color", "#dc3545"), (i = !1));
          }),
          i)
        ) {
          const e = n.html();
          n.prop("disabled", !0).html('<span class="spinner-border spinner-border-sm me-2"role="status"aria-hidden="true"></span>Đang cập nhật...');
          const i = t.serializeArray();
          $.ajax({
            url: o,
            data: $.param(i),
            type: "POST",
            headers: { Authorization: `Bearer ${r}` },
            success: function (e) {
              let t = {};
              try {
                t = JSON.parse(e);
              } catch (e) {}
              t?.ok
                ? (alert(t?.msg),
                  (function () {
                    const e = $("#profile_name").val(),
                      t = $("#profile_email").val(),
                      n = $("#profile_phone").val(),
                      i = $("#profile_birthday").val(),
                      o = getUserInfo();
                    ((o.name = e),
                      (o.email = t),
                      (o.phone = n),
                      (o.birthday = i),
                      localStorage.setItem("info", JSON.stringify(o)),
                      $('input[name="profile_name"][readonly]').val(e),
                      $('input[name="profile_email"][readonly]').val(t),
                      $('input[name="profile_phone"][readonly]').val(n),
                      $('input[name="profile_birthday"][readonly]').val(i),
                      $('[data-name="profile_name"]').text(e),
                      $("#editForm").addClass("account-d-none"),
                      $("#infoDisplay").removeClass("account-d-none"),
                      $("#btnEditInfo").text("Chỉnh sửa").removeClass("btn-secondary").addClass("btn-primary"));
                  })())
                : alert(t?.msg);
            },
            error: function (e) {
              alert("Có lỗi xảy ra, vui lòng thử lại sau!");
            },
            complete: function () {
              n.prop("disabled", !1).html(e);
            },
          });
        }
      }),
      $(document).on("click", "#btnXacThucEmail", function () {
        const e = $(this);
        (e.html('Đang gửi email xác thực... <i class="fas fa-spinner account-loading-spin"></i>'), e.prop("disabled", !0));
        const t = e.attr("action");
        let n = getCookie("token");
        $.ajax({
          url: t,
          type: "POST",
          headers: { Authorization: `Bearer ${n}` },
          success: function (t) {
            let n = {};
            try {
              n = JSON.parse(t);
            } catch (e) {}
            n?.ok ? (alert(n?.msg), e.prop("disabled", !1).text("Gửi lại email xác thực")) : alert(n?.msg);
          },
          error: function (e) {
            alert("Có lỗi xảy ra, vui lòng thử lại sau!");
          },
        });
      }),
      $(document).on("click", ".account-toggle-password-btn", function () {
        o();
      }),
      $(document).on("click", ".account-change-password-cancel-btn", function () {
        o();
      }),
      $(document).on("click", ".account-change-password-btn", function () {
        const e = $(this),
          t = e.html(),
          n = e.attr("action"),
          i = $("#password_new").val(),
          r = $("#confirm_password").val();
        let a = getCookie("token");
        "" != i
          ? i == r
            ? (e.html('Đang cập nhật ... <i class="fas fa-spinner account-loading-spin"></i>'),
              e.prop("disabled", !0),
              $.ajax({
                url: n,
                type: "POST",
                data: { password_new: i, confirm_password: r },
                headers: { Authorization: `Bearer ${a}` },
                success: function (e) {
                  let t = {};
                  try {
                    t = JSON.parse(e);
                  } catch (e) {}
                  t?.ok ? (alert(t?.msg), o(), $("#password_new").val(""), $("#confirm_password").val("")) : alert(t?.msg);
                },
                error: function (e) {
                  alert("Có lỗi xảy ra, vui lòng thử lại sau!");
                },
                complete: function () {
                  e.prop("disabled", !1).html(t);
                },
              }))
            : alert("Mật khẩu không khớp")
          : alert("Mật khẩu mới không được để trống");
      }));
  }),
  $(function () {
    getCookie("token") && getUserInfo()
      ? ($("#btnTaiKhoan").css("display", "flex"),
        $("#btnTaiKhoan").html(
          '<svg width="20px"height="20px"viewBox="0 0 24 24"fill="#fff"xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round"stroke-linejoin="round"></g><g><path d="M11 21H4C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"stroke="#fff"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"></path></g></svg>Tài khoản',
        ),
        $("#btnMobileAuth").html("Tài khoản"),
        $("#btnMobileAuth").addClass("btnTaiKhoan"),
        $("#btnMobileAuth").removeClass("btnLogin"))
      : ($("#btnLogin").css("display", "flex"),
        $("#btnLogin").html(
          '<svg width="20px"height="20px"viewBox="0 0 24 24"fill="#fff"xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round"stroke-linejoin="round"></g><g><path d="M11 21H4C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"stroke="#fff"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"></path></g></svg>Đăng nhập',
        ),
        $("#btnMobileAuth").html("Đăng nhập"),
        $("#btnMobileAuth").addClass("btnLogin"),
        $("#btnMobileAuth").removeClass("btnTaiKhoan"));
  }),
  $(function () {
    let e = "CONG TY TNHH ECONTENT HUB",
      t = "96488888888",
      n = !1,
      i = null;
    function o() {
      if (!i) return;
      ($("body").addClass("overflow-hidden"),
        $("#blockAdsStepSelectPackage").removeClass("active"),
        $("#blockAdsStepPayment").addClass("active"),
        $("#blockAdsBtnBack").removeClass("hidden"),
        $("#blockAdsQrLoading").show(),
        $(".block-ads-bank-qr-code").addClass("hidden"));
      let n = getCookie("token");
      $.ajax({
        url: "https://tools.8cache.com/auth.php?type=order/create",
        type: "POST",
        data: { order_type: 5, card_type: i.month, story_id: 0, chapter_id: 0 },
        headers: { Authorization: `Bearer ${n}` },
        success: function (n) {
          let i = {};
          try {
            i = JSON.parse(n);
          } catch (e) {}
          if (i?.ok) {
            $("#blockAdsMoneyTransfer").text(new Intl.NumberFormat("vi-VN").format(i?.data?.total_price) + " VNĐ");
            let n = "TF " + i?.data?.id;
            ($("#blockAdsTransferContent").text(n), $("#blockAdsQrLoading").hide());
            const o = $(".block-ads-bank-qr-code");
            let r = "https://img.vietqr.io/image/970418-" + t + "-qr_only.jpg?amount=" + i?.data?.total_price + "&addInfo=" + n + "&accountName=" + e;
            (o.attr("src", r), o.removeClass("hidden"));
          }
        },
        error: function (e) {
          alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        },
      });
    }
    function r() {
      return !!getUserInfo() || ($(".btnLogin").trigger("click"), !1);
    }
    ($(document).on("click", ".block-ads-copy-item", function () {
      !(function (e) {
        const t = $("#" + e),
          n = t.text().trim();
        navigator.clipboard
          ? navigator.clipboard
              .writeText(n)
              .then(() => {
                const e = t.text(),
                  n = t.css("color");
                (t.text("Đã copy!").css("color", "#28a745"),
                  setTimeout(() => {
                    t.text(e).css("color", n);
                  }, 1e3));
              })
              .catch((e) => {
                console.error("Lỗi khi copy:", e);
              })
          : console.error("Trình duyệt không hỗ trợ Clipboard API.");
      })($(this).attr("data-copy"));
    }),
      $(document).on("click", "#blockAdsBtnBack", function () {
        ($("#blockAdsStepPayment").removeClass("active"), $("#blockAdsStepSelectPackage").addClass("active"), $("#blockAdsBtnBack").addClass("hidden"));
      }),
      $(document).on("click", "#cardWidgetToggleBtn", function () {
        const e = $("#cardWidgetContentBox"),
          t = $(".card-widget-tooltip");
        n ? (e.removeClass("show"), t.addClass("show"), (n = !1)) : (e.addClass("show"), t.removeClass("show"), (n = !0));
      }),
      $(document).on("click", ".toogleCardWidget", function () {
        $(document).find("#cardWidgetToggleBtn").click();
      }),
      $(document).on("click", ".block-ads-card-item", function () {
        var e;
        ((e = $(this)),
          (i = { month: e.data("month"), code: e.data("code"), price: e.data("price") }),
          $(".block-ads-card-item").removeClass("block-ads-selected selected"),
          e.addClass("block-ads-selected selected"),
          $("#blockAdsBtnContinue").prop("disabled", !1),
          $(document).find(".blockAdsBtnContinue").attr("disabled", !1));
      }),
      $(document).on("click", ".card-widget-purchase-btn", function () {
        r() && i && ($("#modalPayBlockAds").removeClass("hidden"), $(document).find("#cardWidgetToggleBtn").click(), o());
      }),
      $(document).on("click", "#blockAdsBtnContinue", function () {
        r() && o();
      }),
      $(".block-ads-btn-close").on("click", function () {
        ($("#modalPayBlockAds").addClass("hidden"), $("body").removeClass("overflow-hidden"));
      }),
      setInterval(() => {
        $(".card-widget-tooltip").hasClass("show") && $("#cardWidgetToggleBtn").trigger("click");
      }, 1e4));
  }));
