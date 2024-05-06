"object" != typeof globalThis && (globalThis = window),
    (function(t) {
        function e(e) {
            for (
                var o, i, a = e[0], c = e[1], d = e[2], m = 0, u = []; m < a.length; m++
            )
                (i = a[m]),
                Object.prototype.hasOwnProperty.call(s, i) && s[i] && u.push(s[i][0]),
                (s[i] = 0);
            for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
            for (l && l(e); u.length;) u.shift()();
            return r.push.apply(r, d || []), n();
        }

        function n() {
            for (var t, e = 0; e < r.length; e++) {
                for (var n = r[e], o = !0, i = 1; i < n.length; i++) {
                    var c = n[i];
                    0 !== s[c] && (o = !1);
                }
                o && (r.splice(e--, 1), (t = a((a.s = n[0]))));
            }
            return t;
        }
        var o = {},
            i = {
                16: 0
            },
            s = {
                16: 0
            },
            r = [];

        function a(e) {
            if (o[e]) return o[e].exports;
            var n = (o[e] = {
                i: e,
                l: !1,
                exports: {}
            });
            return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
        }
        (a.e = function(t) {
            var e = [];
            i[t] ?
                e.push(i[t]) :
                0 !== i[t] && {
                    2: 1,
                    4: 1,
                    21: 1,
                    26: 1,
                    27: 1,
                    28: 1
                } [t] &&
                e.push(
                    (i[t] = new Promise(function(e, n) {
                        for (
                            var o =
                                ({
                                    2: "default-embed-web-startup",
                                    4: "vendors-embed-web-startup",
                                    7: "countries",
                                    11: "lang-en",
                                    12: "lang-vi",
                                    20: "vendors-web-startup",
                                    21: "web-startup",
                                } [t] || t) +
                                "." + {
                                    0: "31d6cfe0d16ae931b73c",
                                    2: "c74076b5055445f98284",
                                    4: "f85daca1da58d70b76b1",
                                    6: "31d6cfe0d16ae931b73c",
                                    7: "31d6cfe0d16ae931b73c",
                                    11: "31d6cfe0d16ae931b73c",
                                    12: "31d6cfe0d16ae931b73c",
                                    20: "31d6cfe0d16ae931b73c",
                                    21: "bebb0dfbd4af03ace6c9",
                                    23: "31d6cfe0d16ae931b73c",
                                    24: "31d6cfe0d16ae931b73c",
                                    25: "31d6cfe0d16ae931b73c",
                                    26: "e825a1b74e838412ba79",
                                    27: "5b44b09f4bd3fd4559e6",
                                    28: "84100e106a70cbc174dd",
                                    29: "31d6cfe0d16ae931b73c",
                                    30: "31d6cfe0d16ae931b73c",
                                    31: "31d6cfe0d16ae931b73c",
                                    32: "31d6cfe0d16ae931b73c",
                                    33: "31d6cfe0d16ae931b73c",
                                } [t] +
                                ".css",
                                s = a.p + o,
                                r = document.getElementsByTagName("link"),
                                c = 0; c < r.length; c++
                        ) {
                            var d =
                                (l = r[c]).getAttribute("data-href") ||
                                l.getAttribute("href");
                            if ("stylesheet" === l.rel && (d === o || d === s)) return e();
                        }
                        var m = document.getElementsByTagName("style");
                        for (c = 0; c < m.length; c++) {
                            var l;
                            if ((d = (l = m[c]).getAttribute("data-href")) === o || d === s)
                                return e();
                        }
                        var u = document.createElement("link");
                        (u.rel = "stylesheet"),
                        (u.type = "text/css"),
                        (u.onload = e),
                        (u.onerror = function(e) {
                            var o = (e && e.target && e.target.src) || s,
                                r = new Error(
                                    "Loading CSS chunk " + t + " failed.\n(" + o + ")",
                                );
                            (r.code = "CSS_CHUNK_LOAD_FAILED"),
                            (r.request = o),
                            delete i[t],
                                u.parentNode.removeChild(u),
                                n(r);
                        }),
                        (u.href = s),
                        document.getElementsByTagName("head")[0].appendChild(u);
                    }).then(function() {
                        i[t] = 0;
                    })),
                );
            var n = s[t];
            if (0 !== n)
                if (n) e.push(n[2]);
                else {
                    var o = new Promise(function(e, o) {
                        n = s[t] = [e, o];
                    });
                    e.push((n[2] = o));
                    var r,
                        c = document.createElement("script");
                    (c.charset = "utf-8"),
                    (c.timeout = 120),
                    a.nc && c.setAttribute("nonce", a.nc),
                        (c.src = (function(t) {
                            return (
                                a.p +
                                "lazy/" +
                                ({
                                    2: "default-embed-web-startup",
                                    4: "vendors-embed-web-startup",
                                    7: "countries",
                                    11: "lang-en",
                                    12: "lang-vi",
                                    20: "vendors-web-startup",
                                    21: "web-startup",
                                } [t] || t) +
                                "." + {
                                    0: "2976a992fe057899c2d2",
                                    2: "bcc1c046274c24db9bac",
                                    4: "b01d848c29b401a76cec",
                                    6: "862406490ede37721810",
                                    7: "77b06aec3e0fd8c8c330",
                                    11: "49361ba841e0638617c0",
                                    12: "506969ce1d53a13e2ed5",
                                    20: "df8dbf4c9b86ea6a81b7",
                                    21: "780509e22ef0c5bb5889",
                                    23: "da801936ec8ee6308fd1",
                                    24: "6dbf289c8fa83df2273b",
                                    25: "fe45f59e70673dbe7457",
                                    26: "b4a6e72dd403bc341f06",
                                    27: "f58f4d89b4fc88af599d",
                                    28: "1a2dee0f7cf5aa4eafc9",
                                    29: "81c5933e557e705d1f96",
                                    30: "d4d6cb8926dd8ac405a7",
                                    31: "09c07908cddf7118dc48",
                                    32: "5debeab6fbff6ed09718",
                                    33: "0e61690b489fd38110e0",
                                } [t] +
                                ".js"
                            );
                        })(t));
                    var d = new Error();
                    r = function(e) {
                        (c.onerror = c.onload = null), clearTimeout(m);
                        var n = s[t];
                        if (0 !== n) {
                            if (n) {
                                var o = e && ("load" === e.type ? "missing" : e.type),
                                    i = e && e.target && e.target.src;
                                (d.message =
                                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                                (d.name = "ChunkLoadError"),
                                (d.type = o),
                                (d.request = i),
                                n[1](d);
                            }
                            s[t] = void 0;
                        }
                    };
                    var m = setTimeout(function() {
                        r({
                            type: "timeout",
                            target: c
                        });
                    }, 12e4);
                    (c.onerror = c.onload = r), document.head.appendChild(c);
                }
            return Promise.all(e);
        }),
        (a.m = t),
        (a.c = o),
        (a.d = function(t, e, n) {
            a.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }),
        (a.r = function(t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
        }),
        (a.t = function(t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (a.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && "string" != typeof t)
            )
                for (var o in t)
                    a.d(
                        n,
                        o,
                        function(e) {
                            return t[e];
                        }.bind(null, o),
                    );
            return n;
        }),
        (a.n = function(t) {
            var e =
                t && t.__esModule ?
                function() {
                    return t.default;
                } :
                function() {
                    return t;
                };
            return a.d(e, "a", e), e;
        }),
        (a.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = "https://zalo-chat-static.zadn.vn/v1/"),
        (a.oe = function(t) {
            throw t;
        });
        var c = (this.webpackJsonp = this.webpackJsonp || []),
            d = c.push.bind(c);
        (c.push = e), (c = c.slice());
        for (var m = 0; m < c.length; m++) e(c[m]);
        var l = d;
        r.push([17, 3, 5, 1]), n();
    })({
        "/Pmb": function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n("VTBJ"),
                i = n("N1xz"),
                s = n("igRa");
            e.default = class {
                constructor(t) {
                    (this.flsData = void 0),
                    (this.recordedData = void 0),
                    (this.listener = void 0),
                    (this.droppedListener = void 0),
                    (this.startAt = void 0),
                    (this.safeFps = void 0),
                    (this.calcFallingFps = (t) => {
                        const {
                            fps: e,
                            now: n
                        } = t;
                        if (null == this.flsData.beforeDrop)
                            e >= this.safeFps &&
                            ((this.flsData.beforeDrop = e),
                                (this.flsData.beforeDropTs = n));
                        else if (this.flsData.beforeDrop > e && e < this.safeFps)
                            (null == this.flsData.lowestDrop ||
                                this.flsData.lowestDrop > e) &&
                            ((this.flsData.lowestDrop = e),
                                (this.flsData.lowestDropTs = n));
                        else {
                            if (
                                null != this.flsData.lowestDrop &&
                                this.flsData.lowestDropTs
                            ) {
                                var i;
                                if (
                                    ((this.flsData.afterRecover = e),
                                        (this.flsData.recoverTs = n),
                                        (this.flsData.recoverTime = n - this.flsData.lowestDropTs),
                                        null == this.recordedData.lowestDrop ||
                                        this.recordedData.lowestDrop > this.flsData.lowestDrop)
                                ) {
                                    var s;
                                    this.recordedData = Object(o.a)({}, this.flsData);
                                    const t = {
                                        beforeDrop: this.flsData.beforeDrop,
                                        lowestDrop: this.flsData.lowestDrop,
                                        recoverTime: this.flsData.recoverTime,
                                        afterRecover: this.flsData.afterRecover,
                                        beforeDropTs: this.flsData.beforeDropTs,
                                        recoverTs: this.flsData.recoverTs,
                                        lowestDropTs: this.flsData.lowestDropTs,
                                    };
                                    null === (s = this.listener) ||
                                        void 0 === s ||
                                        s.call(this, t);
                                }
                                null === (i = this.droppedListener) ||
                                    void 0 === i ||
                                    i.call(this, Object(o.a)({}, this.flsData)),
                                    (this.flsData = {});
                            }
                            null == this.flsData.lowestDrop &&
                                e >= this.safeFps &&
                                ((this.flsData.beforeDrop = e),
                                    (this.flsData.beforeDropTs = n));
                        }
                    }),
                    (this.flsData = {}),
                    (this.recordedData = {});
                    const {
                        safeFpsGap: e = 10,
                        maxFps: n = 60
                    } = t || {};
                    this.safeFps = n - e;
                }
                onData(t) {
                    this.listener = t;
                }
                onDropped(t) {
                    this.droppedListener = t;
                }
                start() {
                    i.a.UIManager.on(s.a.FPS, this.calcFallingFps),
                        (this.startAt = Date.now());
                }
                end() {
                    if (!this.startAt) return {};
                    let t;
                    null != this.flsData.lowestDrop &&
                        this.flsData.lowestDropTs &&
                        this.flsData.beforeDropTs !== this.recordedData.beforeDropTs &&
                        (t = Object(o.a)({}, this.flsData));
                    const e = {
                        beforeDrop: this.recordedData.beforeDrop,
                        lowestDrop: this.recordedData.lowestDrop,
                        recoverTime: this.recordedData.recoverTime,
                        afterRecover: this.recordedData.afterRecover,
                        beforeDropTs: this.recordedData.beforeDropTs,
                        recoverTs: this.recordedData.recoverTs,
                        lowestDropTs: this.recordedData.lowestDropTs,
                        startAt: this.startAt,
                        endAt: Date.now(),
                        pendingResult: t,
                    };
                    return (
                        (this.flsData = {}),
                        (this.recordedData = {}),
                        (this.listener = void 0),
                        (this.droppedListener = void 0),
                        i.a.UIManager.removeListener(s.a.FPS, this.calcFallingFps),
                        (this.startAt = void 0),
                        e
                    );
                }
            };
        },
        17: function(t, e, n) {
            t.exports = n("cKAe");
        },
        "5BYM": function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n("igRa");
            e.default = class {
                constructor(t) {
                    (this.isOpenFallingRecorder = void 0),
                    (this.uiManager = void 0),
                    (this.uiManager = t);
                }
                isOpen() {
                    return !!this.isOpenFallingRecorder;
                }
                toggleFpsFallingRecorder(t) {
                    (this.isOpenFallingRecorder =
                        "boolean" == typeof t ? t : !this.isOpenFallingRecorder),
                    this.uiManager.triggerEvent(
                        o.a.TOGGLE_FPS_FALLING,
                        this.isOpenFallingRecorder,
                    );
                }
                visualizeInfo(t) {
                    this.uiManager.triggerEvent(o.a.VISUALIZE_INFO, t);
                }
            };
        },
        BiGr: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n("VTBJ"),
                i = n("rkiK"),
                s = n("dFSO");
            const r = {
                    enable_for_staging_account: !0,
                    count_total_msgs: !0,
                    sqlite_supported: !1,
                    measure_indexeddb_size: !1,
                    measure_sqlite_size: !1,
                    measure_localstorage_size: !1,
                    measure_localstorage_physical_files_size: !1,
                    interval_time_measure_total_msgs: 6048e5,
                    interval_time_measure_db_size: 6048e5,
                },
                a = "msgsize",
                c = "lssize";
            var d = n("KBA3"),
                m = n("f1TF");
            class l extends i.MetriczProcessLifecycle.Web {
                constructor() {
                    super(),
                        (this._logger = void 0),
                        (this._storage = void 0),
                        this.useConfig(r);
                }
                get Logger() {
                    return (
                        this._logger ||
                        (this._logger = this.createLogger("storage-metrics")),
                        this._logger
                    );
                }
                get Storage() {
                    return (
                        this._storage || (this._storage = this.createStorage("mz_storage")),
                        this._storage
                    );
                }
                async appReady(t) {
                    if (t.count_total_msgs) {
                        const e = await this.Storage.get(a);
                        (!e || Date.now() - e >= t.interval_time_measure_total_msgs) &&
                        setTimeout(() => {
                            this.Logger.zsymb(
                                    3,
                                    12946,
                                    3e4,
                                    "StorageMetrics/countTotalMsgs: start. {}",
                                    e,
                                ),
                                requestIdleCallback(async () => {
                                    try {
                                        const t = await (async (t) => {
                                            try {
                                                const e = n("fsN4").default.getInstance(),
                                                    o = await e.Core.Message.count();
                                                if (null != o && o > 0) {
                                                    const e = 99808,
                                                        n =
                                                        o <= 5e4 ?
                                                        1 :
                                                        o <= 1e5 ?
                                                        2 :
                                                        o <= 5e5 ?
                                                        3 :
                                                        o <= 1e6 ?
                                                        4 :
                                                        o <= 2e6 ?
                                                        5 :
                                                        o > 2e6 ?
                                                        6 :
                                                        0;
                                                    n &&
                                                        (null == t ||
                                                            t({
                                                                success: !1,
                                                                cmdId: e,
                                                                subCmdId: 0,
                                                                errorCode: n,
                                                                params: [o],
                                                                duration: o,
                                                                startTime: Date.now(),
                                                            }));
                                                }
                                                return o;
                                            } catch (e) {
                                                throw e;
                                            }
                                        })(this.submitQos);
                                        this.Logger.zsymb(
                                            3,
                                            12946,
                                            30001,
                                            "StorageMetrics/countTotalMsgs: end. totalMsgs: {}",
                                            t,
                                        );
                                    } catch (t) {
                                        this.Logger.zsymb(
                                            21,
                                            12946,
                                            30002,
                                            "StorageMetrics/countTotalMsgs: ERR {}",
                                            Object(m.b)(t),
                                        );
                                    }
                                    await this.Storage.set(a, Date.now());
                                });
                        }, 18e4);
                    }
                    const e = d.a.getConfig().staging_account;
                    if (
                        t.measure_localstorage_size ||
                        (e && t.enable_for_staging_account)
                    ) {
                        const e = await this.Storage.get(c);
                        !e || Date.now() - e >= t.interval_time_measure_db_size ?
                            setTimeout(async () => {
                                await this.measureLocalStorageSize(),
                                    await this.Storage.set(c, Date.now());
                            }, 18e4) :
                            this.Logger.zsymb(
                                3,
                                12946,
                                30003,
                                "StorageMetrics/measureLocalStorageSize: skip. lastTs {}",
                                e,
                            );
                    }
                }
                async measureLocalStorageSize() {
                    try {
                        let t = 0;
                        const e = window.localStorage.length;
                        if (!e) return;
                        let n,
                            r = {},
                            a = Date.now();
                        for (let o = 0; o < e; o++) {
                            const t = localStorage.key(o);
                            if (t) {
                                const e = {
                                    keySize: i.MetriczUtilsAPI.getBinarySize(t),
                                    valueSize: 0,
                                };
                                this.Lock.exec(
                                    "measureLocalStorageSize",
                                    async () =>
                                        new Promise((n) => {
                                            setTimeout(() => {
                                                try {
                                                    const n = window.localStorage.getItem(t);
                                                    null != n &&
                                                        (e.valueSize = i.MetriczUtilsAPI.getBinarySize(n));
                                                } catch (o) {}
                                                c(t, e), n();
                                            }, 1e3);
                                        }),
                                );
                            }
                        }
                        const c = (i, c) => {
                            const d = c.keySize + c.valueSize;
                            (t += d),
                            (r[i] = c),
                            (!n || n.size < d) &&
                            (n = Object(o.a)(
                                Object(o.a)({}, n || {}), {}, {
                                    key: i,
                                    size: d
                                },
                            ));
                            let m = Date.now();
                            Object.keys(r).length === e &&
                                (((t, e) => {
                                        if (t) {
                                            const n = 99811,
                                                o =
                                                t <= Object(s.a)("2.5MB") ?
                                                1 :
                                                t <= Object(s.a)("5MB") ?
                                                2 :
                                                t <= Object(s.a)("8MB") ?
                                                3 :
                                                t <= Object(s.a)("10MB") ?
                                                4 :
                                                t > Object(s.a)("10MB") ?
                                                5 :
                                                0;
                                            o &&
                                                (null == e ||
                                                    e({
                                                        success: !1,
                                                        cmdId: n,
                                                        subCmdId: 0,
                                                        errorCode: o,
                                                        params: [t],
                                                        duration: t,
                                                        startTime: Date.now(),
                                                    }));
                                        }
                                    })(t, this.submitQos),
                                    this.Logger.zsymb(
                                        3,
                                        12946,
                                        30004,
                                        "StorageMetrics/measureLocalStorageSize: totalSize {}; readableSize {}; largestKeySize {}; took {}",
                                        t,
                                        Object(s.c)(t),
                                        n ? `"${n.key}" - ${Object(s.c)(n.size)}` : "",
                                        Object(s.d)(m - a),
                                    ));
                        };
                    } catch (t) {
                        this.Logger.zsymb(
                            21,
                            12946,
                            30006,
                            "StorageMetrics/measureLocalStorageSize: ERR {}",
                            Object(m.b)(t),
                        );
                    }
                }
            }
            e.default = [l];
        },
        EqIC: function(t, e, n) {
            "use strict";
            var o = n("N1xz"),
                i = n("d74q");
            var s;
            (s = class {
                constructor() {
                    (this.send = function(t) {}),
                    (this.invoke = function(t) {
                        return Promise.resolve(void 0);
                    }),
                    (this.registerHandler = (t, e) => {}),
                    (this.handler = (t) => (t, e, n) => (
                        (n.value = function() {
                            for (
                                var e = arguments.length, o = new Array(e), i = 0; i < e; i++
                            )
                                o[i] = arguments[i];
                            return n.value.apply(t, o);
                        }),
                        n
                    )),
                    (this.invoker = (t) => (t, e, n) => (
                        (n.value = function() {
                            for (
                                var e = arguments.length, o = new Array(e), i = 0; i < e; i++
                            )
                                o[i] = arguments[i];
                            return n.value.apply(t, o);
                        }),
                        n
                    )),
                    (this.sender = (t) => (t, e, n) => (
                        (n.value = function() {
                            for (
                                var e = arguments.length, o = new Array(e), i = 0; i < e; i++
                            )
                                o[i] = arguments[i];
                            return n.value.apply(t, o);
                        }),
                        n
                    ));
                }
                get SharedWorkerChannel() {
                    return this;
                }
                get NotificationChannel() {
                    return this;
                }
            }),
            (i.a.Channel = class extends s {
                constructor() {
                    super(...arguments);
                }
            });
            var r,
                a = n("VTBJ"),
                c = n("K+9E");
            !(function(t) {
                (t.TRANSMIT_RECORDS = "TRANSMIT_RECORDS"),
                (t.TRANSMIT_ALL = "TRANSMIT_ALL"),
                (t.TRANSMIT_EVENTS = "TRANSMIT_EVENTS"),
                (t.TRANSMIT_CONFIG = "TRANSMIT_CONFIG"),
                (t.TRANSMIT_CONFIG_FROM_SERVERINFO =
                    "TRANSMIT_CONFIG_FROM_SERVERINFO"),
                (t.TRANSMIT_FPS = "TRANSMIT_FPS"),
                (t.TRANSMIT_FPS_SECTION = "TRANSMIT_FPS_SECTION"),
                (t.REGISTER = "REGISTER"),
                (t.SEND_STATS = "SEND_STATS"),
                (t.REQUEST_RUN = "REQUEST_RUN"),
                (t.REQUEST_FROM_MESSENGER = "REQUEST_FROM_MESSENGER"),
                (t.RESPONSE_FROM_MESSENGER = "RESPONSE_FROM_MESSENGER");
            })(r || (r = {}));
            var d = r,
                m = n("CHYU");
            var l = class {
                    constructor(t) {
                        (this.messageChannel = void 0),
                        (this.transportDataHolder = void 0),
                        (this.sending = void 0),
                        (this.sendingTimeout = void 0),
                        (this.idleRequestId = void 0),
                        (this.lastSentDataManagerHash = void 0),
                        (this.rendererClientId = void 0),
                        (this.requestIdle = (t) => {
                            try {
                                var e;
                                if (o.a.process !== m.a.Main)
                                    if (
                                        window &&
                                        "function" ==
                                        typeof(null === (e = window) || void 0 === e ?
                                            void 0 :
                                            e.requestIdleCallback)
                                    )
                                        return window.requestIdleCallback(t);
                            } catch (n) {}
                            return setTimeout(() => {
                                t();
                            }, 1);
                        }),
                        (this.cancelRequestIdle = () => {
                            try {
                                var t;
                                if (o.a.process !== m.a.Main)
                                    if ("number" == typeof this.idleRequestId)
                                        return (
                                            window &&
                                            "function" ==
                                            typeof(null === (t = window) || void 0 === t ?
                                                void 0 :
                                                t.requestIdleCallback) &&
                                            window.cancelIdleCallback(this.idleRequestId),
                                            void(this.idleRequestId = void 0)
                                        );
                            } catch (e) {}
                            clearTimeout(this.idleRequestId);
                        }),
                        (this.messageChannel = t),
                        (this.transportDataHolder = {}),
                        (this.sending = !1);
                    }
                    send(t, e, n, o) {
                        var i;
                        if (!this.messageChannel) return;
                        let s = n,
                            r = t;
                        if (
                            (null != (null == o ? void 0 : o.fromClientId) &&
                                (r += `_${o.fromClientId}`),
                                null != (null == o ? void 0 : o.toClientId) &&
                                (r += `_${o.toClientId}`),
                                Array.isArray(n))
                        ) {
                            var c, d;
                            let t = [];
                            const o =
                                null === (c = this.transportDataHolder[r]) ||
                                void 0 === c ||
                                null === (d = c.data) ||
                                void 0 === d ?
                                void 0 :
                                d[e];
                            Array.isArray(o) &&
                                null != o &&
                                o.length &&
                                ((t = [...o, ...n]), (s = t));
                        } else if ("object" == typeof n) {
                            var m, l;
                            const t =
                                null === (m = this.transportDataHolder[r]) ||
                                void 0 === m ||
                                null === (l = m.data) ||
                                void 0 === l ?
                                void 0 :
                                l[e];
                            t && (s = Object(a.a)(Object(a.a)({}, t || {}), s));
                        }
                        const u = {
                            action: t,
                            data: Object(a.a)(
                                Object(a.a)({},
                                    (null === (i = this.transportDataHolder[r]) || void 0 === i ?
                                        void 0 :
                                        i.data) || {},
                                ), {}, {
                                    [e]: s
                                },
                            ),
                            fromClientId: null == o ? void 0 : o.fromClientId,
                            toClientId: null == o ? void 0 : o.toClientId,
                        };
                        (this.transportDataHolder[r] = u),
                        this.startSend(null == o ? void 0 : o.immediate);
                    }
                    sendToRenderer(t, e, n, o) {
                        return this.send(
                            t,
                            e,
                            n,
                            o ?
                            Object(a.a)(
                                Object(a.a)({}, o), {}, {
                                    toClientId: this.rendererClientId
                                },
                            ) :
                            void 0,
                        );
                    }
                    saveRendererClientId(t) {
                        this.rendererClientId = t;
                    }
                    exit() {
                        this.sending &&
                            (clearTimeout(this.sendingTimeout), this.cancelRequestIdle());
                    }
                    startSend(t) {
                        if (this.sending) return;
                        (this.sending = !0),
                        clearTimeout(this.sendingTimeout),
                            this.cancelRequestIdle();
                        const e = () => {
                            if (this.messageChannel) {
                                const t = this.transportDataHolder;
                                this.transportDataHolder = {};
                                const e = this.getExtraTransferInfo();
                                let n = !!e;
                                const o = [];
                                Object.values(t).forEach((t) => {
                                        const i = {
                                            action: t.action,
                                            data: t.data,
                                            fromClientId: null == t ? void 0 : t.fromClientId,
                                            toClientId: null == t ? void 0 : t.toClientId,
                                        };
                                        n &&
                                            "object" == typeof i.data &&
                                            ((i.data.extraInfo = e), (n = !1)),
                                            o.push(i);
                                    }),
                                    o.length && this.messageChannel.send(o);
                            }
                            this.sending = !1;
                        };
                        if (t) return e();
                        this.sendingTimeout = setTimeout(() => {
                            this.idleRequestId = this.requestIdle(() => {
                                e();
                            });
                        }, 3e3);
                    }
                    getExtraTransferInfo() {
                        if (
                            this.lastSentDataManagerHash !== o.a.DataManager.getHashCode()
                        ) {
                            this.lastSentDataManagerHash = o.a.DataManager.getHashCode();
                            const t = o.a.DataManager.getCurrentProcessData();
                            return {
                                processData: o.a.DataManager.freezeProcessData(t)
                            };
                        }
                    }
                },
                u = n("KBA3");
            let f;
            !(function(t) {
                (t.SEND = "SEND"), (t.INVOKE = "INVOKE");
            })(f || (f = {}));
            class p {
                constructor(t) {
                    (this.reqId = void 0),
                    (this.type = void 0),
                    (this.func = void 0),
                    (this.args = void 0),
                    (this.toProcess = void 0),
                    (this.reqId = t.reqId),
                    (this.func = t.func),
                    (this.args = t.args || []),
                    (this.type = t.type || f.SEND);
                    let e = t.toProcess;
                    o.a.process === e && (e = void 0),
                        e || (e = o.a.process === m.a.Main ? m.a.Render : m.a.Main),
                        (this.toProcess = e);
                }
                get toClientId() {
                    if (o.a.process === m.a.Main) {
                        const t = o.a.MetricTransporter.getClients().find(
                            (t) => t.name === this.toProcess,
                        );
                        if (t) return t.id;
                    }
                }
                getKey() {
                    return `${this.reqId}_${this.type}_${this.func}`;
                }
                serialize() {
                    return {
                        reqId: this.reqId,
                        type: this.type,
                        func: this.func,
                        args: this.args,
                    };
                }
                static deserialize(t) {
                    return null != (null == t ? void 0 : t.reqId) &&
                        null != t &&
                        t.func &&
                        null != t &&
                        t.type ?
                        new this({
                            reqId: t.reqId,
                            func: t.func,
                            type: t.type,
                            args: null == t ? void 0 : t.args,
                        }) :
                        null;
                }
            }
            class h {
                constructor(t) {
                    (this.key = void 0),
                    (this.data = void 0),
                    (this.toClientId = void 0),
                    (this.error = void 0),
                    (this.key = t.key),
                    (this.data = t.data),
                    (this.error = t.error),
                    (this.toClientId = t.toClientId);
                }
                getError() {
                    if (this.error) {
                        let t = new Error(this.error.message);
                        return (
                            this.error.name && (t.name = this.error.name),
                            this.error.stack && (t.stack = this.error.stack),
                            t
                        );
                    }
                }
                serialize() {
                    return {
                        key: this.key,
                        data: this.data,
                        error: this.error
                    };
                }
                static deserialize(t) {
                    return null == (null == t ? void 0 : t.key) ?
                        null :
                        new this({
                            key: t.key,
                            data: null == t ? void 0 : t.data,
                            error: null == t ? void 0 : t.error,
                        });
                }
            }
            var g = class {
                constructor() {
                    (this.messageChannel = void 0),
                    (this.sender = void 0),
                    (this.onMessage = (t) => {
                        t.forEach((t) => {
                            if (o.a.process === m.a.Main) {
                                var e;
                                const {
                                    fromClientId: b,
                                    action: P,
                                    data: I
                                } = t;
                                var n;
                                if (
                                    (this.onReceiveProcessEventData(
                                            null == I || null === (e = I.extraInfo) || void 0 === e ?
                                            void 0 :
                                            e.processData,
                                        ),
                                        P === d.TRANSMIT_RECORDS)
                                ) {
                                    if (
                                        null != I &&
                                        null !== (n = I.records) &&
                                        void 0 !== n &&
                                        n.length
                                    ) {
                                        const t = [];
                                        I.records.forEach((e) => {
                                            const n = this.hydrateMetricRecord(e);
                                            n && t.push(n);
                                        });
                                        const e = o.a.MetricManager.onReceivePartialRecords(t);
                                        if (e.length) {
                                            const t = this.messageChannel
                                                .getClients()
                                                .filter((t) => t.id !== b);
                                            if (t.length)
                                                for (const n of t) {
                                                    var i;
                                                    null === (i = this.sender) ||
                                                        void 0 === i ||
                                                        i.send(d.TRANSMIT_RECORDS, "records", e, {
                                                            fromClientId: b,
                                                            toClientId: n.id,
                                                        });
                                                }
                                        }
                                    }
                                } else if (P === d.REGISTER) {
                                    var s, r;
                                    if ((null == I ? void 0 : I.processName) !== m.a.Render)
                                        null === (s = this.sender) ||
                                        void 0 === s ||
                                        s.send(d.TRANSMIT_CONFIG, "config", u.a.getConfig(), {
                                            toClientId: b,
                                        });
                                    else
                                        null != b &&
                                        (null === (r = this.sender) ||
                                            void 0 === r ||
                                            r.saveRendererClientId(b));
                                } else if (P === d.TRANSMIT_ALL) {
                                    var a;
                                    null != I &&
                                        null !== (a = I.records) &&
                                        void 0 !== a &&
                                        a.length &&
                                        I.records.forEach((t) => {
                                            const e = this.hydrateMetricRecord(t);
                                            e && o.a.LocalStat.record(e);
                                        });
                                } else if (P === d.SEND_STATS)
                                    try {
                                        const t = I.processStats;
                                        t && o.a.UsageMonitor.onReceiveProcessStats(t);
                                    } catch (w) {}
                                else if (P === d.TRANSMIT_EVENTS)
                                    this.onReceiveProcessEventData(I.processData);
                                else if (P === d.TRANSMIT_CONFIG) {
                                    (null == I ? void 0 : I.config) &&
                                    u.a.mergeSetting(I.config);
                                    const t = this.messageChannel
                                        .getClients()
                                        .filter((t) => t.id !== b);
                                    if (t.length)
                                        for (const e of t) {
                                            var c;
                                            null === (c = this.sender) ||
                                                void 0 === c ||
                                                c.send(d.TRANSMIT_CONFIG, "config", u.a.getConfig(), {
                                                    toClientId: e.id,
                                                });
                                        }
                                } else if (P === d.TRANSMIT_CONFIG_FROM_SERVERINFO)
                                    (null == I ? void 0 : I.config) &&
                                    u.a.mergeSettingFromServerInfo(I.config);
                                else if (P === d.TRANSMIT_FPS)
                                    null != I && I.fps && o.a.LocalStat.recordFps(I.fps);
                                else if (P === d.TRANSMIT_FPS_SECTION)
                                    null != I && I.fps && o.a.LocalStat.recordFpsSection(I.fps);
                                else if (P === d.REQUEST_RUN) {
                                    var l, f, g;
                                    if (null != I && I.reqRun)
                                        null === (l = o.a.ToolboxMain.getDebugger()) ||
                                        void 0 === l ||
                                        l
                                        .handleRequestRun(
                                            null === (f = I.reqRun) || void 0 === f ?
                                            void 0 :
                                            f.func,
                                            ...((null === (g = I.reqRun) || void 0 === g ?
                                                void 0 :
                                                g.args) || []),
                                        )
                                        .then((t) => {
                                            var e, n, o;
                                            null === (e = this.sender) ||
                                                void 0 === e ||
                                                e.send(
                                                    d.REQUEST_RUN,
                                                    "resRun", {
                                                        response: t,
                                                        func: null === (n = I.reqRun) || void 0 === n ?
                                                            void 0 :
                                                            n.func,
                                                        args: (null === (o = I.reqRun) || void 0 === o ?
                                                            void 0 :
                                                            o.args) || [],
                                                    }, {
                                                        immediate: !0,
                                                        toClientId: b
                                                    },
                                                );
                                        });
                                } else if (P === d.REQUEST_FROM_MESSENGER) {
                                    const t = p.deserialize(null == I ? void 0 : I.data);
                                    t && o.a.MetricTransporter.Messenger.handleRequest(t, b);
                                } else if (P === d.RESPONSE_FROM_MESSENGER) {
                                    const t = h.deserialize(null == I ? void 0 : I.data);
                                    t && o.a.MetricTransporter.Messenger.handleResponse(t);
                                }
                            } else {
                                const {
                                    action: e,
                                    data: n
                                } = t;
                                var b;
                                if (e === d.TRANSMIT_RECORDS)
                                    null != n &&
                                    null !== (b = n.records) &&
                                    void 0 !== b &&
                                    b.length &&
                                    o.a.MetricManager.onReceivePartialRecords(n.records);
                                else if (e === d.TRANSMIT_CONFIG)
                                    (null == n ? void 0 : n.config) &&
                                    o.a.process !== m.a.Render &&
                                    u.a.mergeSetting(n.config);
                                else if (e === d.REQUEST_RUN) {
                                    var P, I, M, v;
                                    if (null != n && n.resRun)
                                        null === (P = o.a.ToolboxRenderer.getDebugger()) ||
                                        void 0 === P ||
                                        P.handleResponseRequestRun(
                                            null === (I = n.resRun) || void 0 === I ?
                                            void 0 :
                                            I.response,
                                            null === (M = n.resRun) || void 0 === M ?
                                            void 0 :
                                            M.func,
                                            null === (v = n.resRun) || void 0 === v ?
                                            void 0 :
                                            v.args,
                                        );
                                } else if (e === d.REQUEST_FROM_MESSENGER) {
                                    const t = p.deserialize(null == n ? void 0 : n.data);
                                    t && o.a.MetricTransporter.Messenger.handleRequest(t);
                                } else if (e === d.RESPONSE_FROM_MESSENGER) {
                                    const t = h.deserialize(null == n ? void 0 : n.data);
                                    t && o.a.MetricTransporter.Messenger.handleResponse(t);
                                }
                            }
                        });
                    });
                }
                listen(t) {
                    var e;
                    (this.messageChannel = t),
                    null === (e = this.messageChannel) ||
                        void 0 === e ||
                        e.onMessage(this.onMessage);
                }
                bindSender(t) {
                    this.sender = t;
                }
                onReceiveProcessEventData(t) {
                    if (t) {
                        const e = o.a.DataManager.hydrateProcessData(t);
                        e && o.a.DataManager.mergeProcessData(e);
                    }
                }
                hydrateMetricRecord(t) {
                    try {
                        return o.a.MetricFactory.clone(t);
                    } catch (e) {}
                }
            };
            class b {
                constructor() {
                    (this.requestId = void 0),
                    (this.registeredHandlers = void 0),
                    (this.invokedRequestHolder = void 0),
                    (this.requestId = 0),
                    (this.registeredHandlers = {}),
                    (this.invokedRequestHolder = new Map());
                }
                getNextRequestId() {
                    return ++this.requestId;
                }
                registerHandler(t, e) {
                    this.registeredHandlers[t] = e;
                }
                send(t, e, n) {
                    const i = new p({
                        reqId: this.getNextRequestId(),
                        func: t,
                        args: e,
                        toProcess: n,
                        type: f.SEND,
                    });
                    o.a.MetricTransporter.requestFromMessenger(i);
                }
                async invoke(t, e, n) {
                    const i = new p({
                            reqId: this.getNextRequestId(),
                            func: t,
                            args: e,
                            toProcess: n,
                            type: f.INVOKE,
                        }),
                        s = {};
                    return (
                        (s.promise = new Promise((t, e) => {
                            (s.resolve = t), (s.reject = e);
                        })),
                        this.invokedRequestHolder.set(i.getKey(), s),
                        o.a.MetricTransporter.requestFromMessenger(i),
                        s.promise
                    );
                }
                handleRequest(t, e) {
                    const n = (n, i) => {
                            if (t.type === f.INVOKE) {
                                const s = new h({
                                    key: t.getKey(),
                                    data: n,
                                    error: i,
                                    toClientId: e,
                                });
                                o.a.MetricTransporter.responseFromMessenger(s);
                            }
                        },
                        i = this.registeredHandlers[t.func];
                    if (!i) {
                        const e = new Error(`Cannot find handler for request ${t.func}`);
                        return void n(null, {
                            message: e.message,
                            name: e.name
                        });
                    }
                    const s = i(...t.args);
                    s instanceof Promise
                        ?
                        s
                        .then((t) => {
                            n(t);
                        })
                        .catch((t) => {
                            var e;
                            n(null, {
                                message: null !== (e = null == t ? void 0 : t.message) &&
                                    void 0 !== e ?
                                    e :
                                    t,
                                name: null == t ? void 0 : t.name,
                                stack: null == t ? void 0 : t.stack,
                            });
                        }) :
                        n(s);
                }
                handleResponse(t) {
                    const e = this.invokedRequestHolder.get(t.key);
                    if (e) {
                        const n = t.getError();
                        n ? e.reject(n) : e.resolve(t.data),
                            this.invokedRequestHolder.delete(t.key);
                    }
                }
            }
            o.a.register(
                c.a.METRIC_TRANSPORTER,
                class {
                    constructor() {
                        (this.messageChannel = void 0),
                        (this.isReady = !1),
                        (this.registered = void 0),
                        (this._sender = void 0),
                        (this._receiver = void 0),
                        (this._logger = void 0),
                        (this._messenger = void 0);
                    }
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("transporter")),
                            this._logger
                        );
                    }
                    createMessageChannel() {
                        if (this.messageChannel) return;
                        let t;
                        try {
                            0;
                        } catch (e) {}
                        this.receiver.listen(this.messageChannel);
                    }
                    get sender() {
                        return (
                            this._sender || (this._sender = new l(this.messageChannel)),
                            this._sender
                        );
                    }
                    get receiver() {
                        return (
                            this._receiver || (this._receiver = new g()),
                            this._receiver.bindSender(this.sender),
                            this._receiver
                        );
                    }
                    ready() {
                        this.isReady ||
                            ((this.isReady = !0),
                                this.createMessageChannel(),
                                this.checkConnection());
                    }
                    onMainReady() {
                        this.createMessageChannel();
                    }
                    transmit(t) {
                        if (o.a.process !== m.a.Main) {
                            const e = [this.freezeMetricRecord(t)];
                            this.sender.send(d.TRANSMIT_RECORDS, "records", e);
                        }
                    }
                    checkConnection() {
                        this.registered ||
                            o.a.process === m.a.Main ||
                            this.registered ||
                            ((this.registered = !0),
                                this.sender.send(d.REGISTER, "processName", o.a.process, {
                                    immediate: !0,
                                }));
                    }
                    transmitProcessStats(t) {
                        o.a.process !== m.a.Main &&
                            this.sender.send(d.SEND_STATS, "processStats", t);
                    }
                    transmitRecords(t) {
                        if (o.a.process !== m.a.Main) {
                            const e = t.map((t) => this.freezeMetricRecord(t));
                            this.sender.send(d.TRANSMIT_ALL, "records", e);
                        }
                    }
                    transmitEvents() {
                        this.sender.send(
                            d.TRANSMIT_EVENTS,
                            "extraInfo", {}, {
                                immediate: !0
                            },
                        );
                    }
                    transmitConfig(t) {
                        this.sender.send(
                            null != t && t.fromServerInfo ?
                            d.TRANSMIT_CONFIG_FROM_SERVERINFO :
                            d.TRANSMIT_CONFIG,
                            "config",
                            u.a.getConfig(), {
                                immediate: !0
                            },
                        );
                    }
                    transmitFps(t, e, n) {
                        this.sender.send(
                            d.TRANSMIT_FPS,
                            "fps",
                            Object(a.a)({
                                    processName: o.a.process,
                                    recordAt: e,
                                    usageTime: n
                                },
                                t,
                            ),
                        );
                    }
                    transmitFpsSection(t, e) {
                        this.sender.send(
                            d.TRANSMIT_FPS_SECTION,
                            "fps",
                            Object(a.a)({
                                processName: o.a.process,
                                taskKey: e
                            }, t),
                        );
                    }
                    requestFromMessenger(t) {
                        this.sender.send(d.REQUEST_FROM_MESSENGER, "data", t.serialize(), {
                            immediate: !0,
                            toClientId: t.toClientId,
                        });
                    }
                    responseFromMessenger(t) {
                        this.sender.send(d.RESPONSE_FROM_MESSENGER, "data", t.serialize(), {
                            immediate: !0,
                            toClientId: t.toClientId,
                        });
                    }
                    requestRun(t) {
                        for (
                            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++
                        )
                            n[o - 1] = arguments[o];
                        this.sender.send(
                            d.REQUEST_RUN,
                            "reqRun", {
                                func: t,
                                args: n
                            }, {
                                immediate: !0
                            },
                        );
                    }
                    postDataToRenderer(t, e) {
                        for (
                            var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++
                        )
                            o[i - 2] = arguments[i];
                        this.sender.sendToRenderer(
                            d.REQUEST_RUN,
                            "resRun", {
                                response: t,
                                func: e,
                                args: o || []
                            }, {
                                immediate: !0
                            },
                        );
                    }
                    exit() {
                        this.sender.exit();
                    }
                    freezeMetricRecord(t) {
                        return JSON.parse(
                            JSON.stringify(
                                Object(a.a)(
                                    Object(a.a)({}, t), {}, {
                                        info: JSON.stringify(t.info)
                                    },
                                ),
                            ),
                        );
                    }
                    pushMessageMain(t, e) {
                        var n, i;
                        o.a.process === m.a.Main &&
                            (null === (n = this.messageChannel) ||
                                void 0 === n ||
                                null === (i = n.pushMessage) ||
                                void 0 === i ||
                                i.call(n, t, e));
                    }
                    getClients() {
                        return o.a.process === m.a.Main ?
                            this.messageChannel.getClients() :
                            [];
                    }
                    get Messenger() {
                        return (
                            this._messenger || (this._messenger = new b()), this._messenger
                        );
                    }
                },
            );
            const P = (t) => (t ? t - o.a.EPOCH : Date.now() - o.a.EPOCH),
                I = (t) => {
                    let e = 0;
                    if (t.trim())
                        for (let o = 0; o < t.length; o++)
                            (e = 31 * e + t.charCodeAt(o)),
                            (e =
                                (n = e) > 2147483647 || n < -2147483648 ? 4294967295 & n : n);
                    var n;
                    return e;
                };
            var M = n("fbdB");
            var v = class {
                constructor(t) {
                    (this.epoch = void 0),
                    (this.processName = void 0),
                    (this.events = void 0),
                    (this.processName = t),
                    (this.events = []);
                }
                getName() {
                    return this.processName;
                }
                add(t, e) {
                    this.events.some((n) => n.name === t && n.time === e) ||
                        this.events.push({
                            name: t,
                            time: e
                        });
                }
                saveEpoch(t) {
                    this.epoch || (this.epoch = t), this.add(M.a.bootstrap, t);
                }
                getEpoch() {
                    return this.epoch;
                }
                get(t) {
                    return this.events.filter((e) => e.name === t)[0];
                }
                getAll() {
                    return this.events;
                }
                merge(t) {
                    const e = t.getEpoch();
                    e && this.saveEpoch(e),
                        t.getAll().forEach((t) => {
                            this.add(t.name, t.time);
                        }),
                        (this.events = this.events.sort((t, e) => t.time - e.time));
                }
                hashCode() {
                    return (
                        I(`${this.epoch}`) ^
                        I(this.processName) ^
                        I(JSON.stringify(this.events))
                    );
                }
                cleanUp() {
                    this.events = [];
                }
            };
            o.a.register(
                c.a.DATA_MANAGER,
                class {
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("data-manager")),
                            this._logger
                        );
                    }
                    constructor() {
                        (this.process = void 0),
                        (this.processEvents = {}),
                        (this._logger = void 0),
                        (this._lastTsEventSignal = void 0),
                        (this.process = new v(o.a.process)),
                        u.a.onDisable(() => this.cleanUp);
                    }
                    cleanUp() {
                        (this.processEvents = {}), this.process.cleanUp();
                    }
                    getProcess(t) {
                        return t && t !== o.a.process ?
                            (this.processEvents[t] || (this.processEvents[t] = new v(t)),
                                this.processEvents[t]) :
                            this.process;
                    }
                    saveEvent(t, e) {
                        var n;
                        this.getProcess().add(t, e),
                            null === (n = o.a.ProcessLifecycleController) ||
                            void 0 === n ||
                            n.on(t, e);
                    }
                    getEvent(t) {
                        return this.getProcess().get(t);
                    }
                    saveEpoch(t, e) {
                        this.getProcess(t).saveEpoch(e);
                    }
                    getEpoch(t) {
                        return this.getProcess(t).getEpoch();
                    }
                    getCurrentProcessData() {
                        return this.process;
                    }
                    getOtherProcessData() {
                        return Object.values(this.processEvents);
                    }
                    mergeProcessData(t) {
                        if (
                            (this.getProcess(t.getName()).merge(t),
                                o.a.ProcessLifecycleController)
                        ) {
                            const e = t
                                .getAll()
                                .filter((t) => t.time > (this._lastTsEventSignal || 0));
                            e.forEach((t) => {
                                    var e;
                                    let {
                                        name: n,
                                        time: i
                                    } = t;
                                    null === (e = o.a.ProcessLifecycleController) ||
                                        void 0 === e ||
                                        e.on(n, i);
                                }),
                                (this._lastTsEventSignal = Math.max(...e.map((t) => t.time)));
                        }
                    }
                    freezeProcessData(t) {
                        return {
                            epoch: t.getEpoch(),
                            processName: t.getName(),
                            events: t.getAll(),
                        };
                    }
                    hydrateProcessData(t) {
                        try {
                            if (t.processName) {
                                var e;
                                const n = new v(t.processName);
                                return (
                                    t.epoch &&
                                    !isNaN(Number(t.epoch)) &&
                                    n.saveEpoch(Number(t.epoch)),
                                    null !== (e = t.events) &&
                                    void 0 !== e &&
                                    e.length &&
                                    t.events.forEach((t) => {
                                        t.name &&
                                            !isNaN(Number(t.time)) &&
                                            n.add(t.name, Number(t.time));
                                    }),
                                    n
                                );
                            }
                        } catch (o) {
                            var n;
                            null === (n = this.Logger) ||
                                void 0 === n ||
                                n.zsymb(
                                    23,
                                    16649,
                                    3e4,
                                    "Fail on hydrate process data. ERR {}",
                                    String(o),
                                );
                        }
                    }
                    getHashCode() {
                        const t = this.process.hashCode();
                        let e = 0;
                        return (
                            Object.values(this.processEvents).forEach(
                                (t) => (e += t.hashCode()),
                            ),
                            t + e
                        );
                    }
                },
            );
            var w = class {
                constructor(t) {
                    (this.record = void 0), (this.record = t);
                }
                end(t) {
                    if (!this.record || this.record.isDone) return;
                    const e = Date.now();
                    o.a.MetricManager.endRecord(this.record, e, t);
                }
                pushInfo(t) {
                    this.record && !this.record.isDone && this.record.pushInfo(t);
                }
            };
            var q = class {
                constructor() {
                    (this.startingProcess = void 0), (this.startingProcess = new Map());
                }
                findStartingProcess(t) {
                    return this.startingProcess.get(t);
                }
                saveStartingProcess(t, e) {
                    if (!this.startingProcess.has(t)) {
                        if (
                            this.startingProcess.size >=
                            u.a.getConfig().max_starting_process_dictionary
                        ) {
                            const [t] = Array.from(this.startingProcess.keys());
                            this.startingProcess.delete(t);
                        }
                        return this.startingProcess.set(t, e);
                    }
                }
                cleanUp() {
                    this.startingProcess = new Map();
                }
            };
            const y = new Set([M.b.start_up_time]),
                R = new Set([M.b.start_up_time]),
                S = new Set([
                    M.b.start_up_time,
                    M.b.open_conversation,
                    M.b.app_ram_usage,
                    M.b.e2ee_session_record_data_size,
                ]);
            var T = n("MNz0"),
                _ = n("h+6H");
            class D {
                constructor() {
                    (this._items = void 0),
                    (this._running = void 0),
                    (this._items = []),
                    (this._running = !1);
                }
                enqueue(t) {
                    return new Promise((e, n) => {
                        this._items.push({
                                task: t,
                                resolve: e,
                                reject: n
                            }),
                            setTimeout(() => {
                                this.execute();
                            }, 0);
                    });
                }
                async execute() {
                    if (this._running) return !1;
                    let t = this._items.shift();
                    if (!t) return !1;
                    try {
                        this._running = !0;
                        const e = await t.task();
                        (this._running = !1), t.resolve(e);
                    } catch (e) {
                        (this._running = !1), t.reject(e);
                    } finally {
                        this.execute();
                    }
                    return !0;
                }
            }
            var A = n("dFSO");
            o.a.register(
                c.a.METRIC_MANAGER,
                class {
                    constructor() {
                        (this._records = void 0),
                        (this._logger = void 0),
                        (this._history = void 0),
                        (this._autoQueue = void 0),
                        (this._oneTimeMetrics = void 0);
                    }
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("manager")),
                            this._logger
                        );
                    }
                    get AutoQueue() {
                        return (
                            this._autoQueue || (this._autoQueue = new D()), this._autoQueue
                        );
                    }
                    get records() {
                        return (
                            this._records || (this._records = {}), {
                                set: (t) => {
                                    const e = t.key;
                                    this._records[e] || (this._records[e] = []),
                                        this._records[e].push(t);
                                },
                                get: (t, e, n) => {
                                    const i = o.a.MetricFactory.getKey(t, e),
                                        s = this._records[i];
                                    return null != s && s.length && n ?
                                        s.find(n) :
                                        null == s ?
                                        void 0 :
                                        s[0];
                                },
                                delete: (t) => {
                                    const e = t.key;
                                    if (this._records[e]) {
                                        const n = this._records[e].findIndex((e) => e == t);
                                        n > -1 && this._records[e].splice(n, 1),
                                            0 === this._records[e].length && delete this._records[e];
                                    }
                                },
                                deleteByName: (t) => {
                                    Object.keys(this._records).forEach((e) => {
                                        e.startsWith(t) && delete this._records[e];
                                    });
                                },
                            }
                        );
                    }
                    get OneTimeMetrics() {
                        return {
                            setStart: (t) => {
                                this._oneTimeMetrics || (this._oneTimeMetrics = new Set());
                                const e = `${t}_start`;
                                this._oneTimeMetrics.add(e);
                            },
                            hasStart: (t) => {
                                var e;
                                const n = `${t}_start`;
                                return !(
                                    null === (e = this._oneTimeMetrics) ||
                                    void 0 === e ||
                                    !e.has(n)
                                );
                            },
                            setEnd: (t) => {
                                this._oneTimeMetrics || (this._oneTimeMetrics = new Set());
                                const e = `${t}_end`;
                                this._oneTimeMetrics.add(e);
                            },
                            hasEnd: (t) => {
                                var e;
                                const n = `${t}_end`;
                                return !(
                                    null === (e = this._oneTimeMetrics) ||
                                    void 0 === e ||
                                    !e.has(n)
                                );
                            },
                        };
                    }
                    get history() {
                        return this._history || (this._history = new q()), this._history;
                    }
                    ready() {
                        u.a.onConfigChange((t) => {
                            o.a.process === m.a.Render &&
                                (null != t &&
                                    t.fromServerInfo &&
                                    this.recordEvent(M.a.app_receive_server_config),
                                    o.a.MetricTransporter.transmitConfig(t));
                        });
                    }
                    cleanUp() {
                        (this._records = {}),
                        (this._oneTimeMetrics = new Set()),
                        this.history.cleanUp();
                    }
                    exit() {
                        o.a.process === m.a.Main &&
                            (o.a.UsageMonitor.exit(), o.a.LocalStat.export(!0));
                    }
                    recordEvent(t) {
                        var e;
                        if (!o.a.isInstalled() || !o.a.canIUse()) return;
                        const n = Date.now();
                        o.a.DataManager.saveEvent(t, n),
                            t === M.a.main_ready &&
                            o.a.process === m.a.Main &&
                            o.a.MetricTransporter.onMainReady(),
                            t === M.a.main_window_finish_load &&
                            o.a.process === m.a.Main &&
                            o.a.UsageMonitor.onMainFinishLoad();
                        const i = u.a.getConfig().enable_write_log || !1,
                            s =
                            null === (e = u.a.getConfig().toolbox) || void 0 === e ?
                            void 0 :
                            e.enable_process_lifecycle;
                        o.a.process !== m.a.Main &&
                            (i || s) &&
                            o.a.MetricResolver.resolveEvent(t, n);
                    }
                    recordBinarySize(t, e, n, i) {
                        if (!o.a.canIUse() || this.OneTimeMetrics.hasStart(t)) return;
                        const s = o.a.SchemaManager.loadSchema(t);
                        if (s.disabled) return;
                        this.handleOneTimeMetric(t, !0);
                        const r = o.a.MetricFactory.create(t, n, s);
                        r.setStartAt(Date.now()),
                            this.processStackTrace(r),
                            this.AutoQueue.enqueue(async () => {
                                const n = Object(_.a)(e),
                                    s = {
                                        dataSize: n,
                                        readableDataSize: Object(A.c)(n)
                                    };
                                r.setData(s),
                                    r.setDuration(n),
                                    r.pushInfo(s),
                                    i && r.pushInfo(i),
                                    r.evaluate(),
                                    this.processStackTrace(r, !0),
                                    r.resolve(),
                                    o.a.MetricResolver.resolve(r),
                                    this.handleOneTimeMetric(t, !1);
                            });
                    }
                    handleOneTimeMetric(t, e) {
                        y.has(t) &&
                            (e ?
                                this.OneTimeMetrics.setStart(t) :
                                this.OneTimeMetrics.setEnd(t));
                    }
                    start(t, e) {
                        if (!o.a.canIUse() || this.OneTimeMetrics.hasStart(t))
                            return this.createSection();
                        const n = Date.now(),
                            i = o.a.SchemaManager.loadSchema(t);
                        if (i.disabled) return this.createSection();
                        i.mode === T.a.ACCEPT_LAST && this.records.deleteByName(t),
                            this.handleOneTimeMetric(t, !0);
                        const s = o.a.MetricFactory.create(t, e, i);
                        return (
                            s.setStartAt(n),
                            this.processStackTrace(s),
                            this.records.set(s),
                            this.history.saveStartingProcess(t, o.a.process),
                            this.createSection(s)
                        );
                    }
                    end(t, e, n) {
                        if (!o.a.canIUse() || this.OneTimeMetrics.hasEnd(t)) return;
                        const i = Date.now(),
                            s = o.a.SchemaManager.loadSchema(t);
                        if (s.disabled) return;
                        this.handleOneTimeMetric(t, !1);
                        let r = this.records.get(
                            t,
                            e,
                            (t) => !!(t.startAt && t.startAt <= i),
                        );
                        if (
                            (!r &&
                                this.isFromCurrentEpoch(t) &&
                                (r = this.createPartialFromCurrentEpoch(t, e)),
                                r)
                        )
                            this.endRecord(r, i, n);
                        else {
                            if (this.isFromCurrentProcess(t)) return;
                            const r = o.a.MetricFactory.create(t, e, s, !0);
                            r.setEndAt(i),
                                r.pushInfo(n),
                                r.evaluate(),
                                o.a.MetricTransporter.transmit(r);
                        }
                    }
                    cancel(t, e) {
                        if (!o.a.canIUse() || this.OneTimeMetrics.hasEnd(t)) return;
                        this.handleOneTimeMetric(t, !1);
                        const n = Date.now();
                        let i = this.records.get(
                            t,
                            e,
                            (t) => !!(t.startAt && t.startAt <= n),
                        );
                        if (
                            (!i &&
                                this.isFromCurrentEpoch(t) &&
                                (i = this.createPartialFromCurrentEpoch(t, e)),
                                i)
                        )
                            this.records.delete(i),
                            this.Logger.zsymb(
                                3,
                                16648,
                                3e4,
                                "cancelled metric {}; at {}",
                                t,
                                n,
                            );
                        else {
                            const n = o.a.MetricFactory.create(t, e, void 0, !0);
                            n.cancel(), o.a.MetricTransporter.transmit(n);
                        }
                    }
                    endRecord(t, e, n) {
                        t.isDone ||
                            (null != n && t.pushInfo(n),
                                t.setEndAt(e),
                                t.evaluate(),
                                this.processStackTrace(t, !0),
                                this.resolve(t));
                    }
                    createSection(t) {
                        return new w(t);
                    }
                    resolve(t) {
                        this.records.delete(t), o.a.MetricResolver.resolve(t, !0);
                    }
                    onReceivePartialRecords(t) {
                        var e;
                        const n = [];
                        return (
                            t.forEach((t) => {
                                if (this.OneTimeMetrics.hasStart(t.name)) return;
                                let e = this.records.get(
                                    t.name,
                                    t.key,
                                    (e) =>
                                    !!(
                                        t.type === e.type &&
                                        e.startAt &&
                                        t.endAt &&
                                        e.startAt <= t.endAt
                                    ),
                                );
                                if (
                                    (!e &&
                                        this.isFromCurrentProcess(t.name) &&
                                        (e = this.createPartialFromCurrentEpoch(t.name, t.key)),
                                        e)
                                ) {
                                    if (!e.isDone) {
                                        if (t.isCancelled) return void this.cancel(t.name, t.key);
                                        this.handleOneTimeMetric(t.name, !1),
                                            e.evaluate(t),
                                            this.processStackTrace(e, !0),
                                            this.resolve(e);
                                    }
                                } else n.push(t);
                            }),
                            n.length &&
                            (null === (e = this.Logger) ||
                                void 0 === e ||
                                e.zsymb(
                                    11,
                                    16648,
                                    30001,
                                    "[WARN] receive unknownRecords: {}",
                                    n,
                                )),
                            n
                        );
                    }
                    isFromCurrentEpoch(t, e) {
                        let n = e;
                        return (
                            n || (n = o.a.SchemaManager.loadSchema(t)),
                            !!n.startFromEpoch &&
                            (Array.isArray(n.fromProcess) ?
                                n.fromProcess.some((t) => t === o.a.process) :
                                !n.fromProcess || n.fromProcess === o.a.process)
                        );
                    }
                    isFromCurrentProcess(t, e) {
                        var n;
                        if (this.history.findStartingProcess(t) === o.a.process) return !0;
                        let i = e;
                        return (
                            i || (i = o.a.SchemaManager.loadSchema(t)),
                            !(null === (n = i) || void 0 === n || !n.fromProcess) &&
                            (Array.isArray(i.fromProcess) ?
                                i.fromProcess.some((t) => t === o.a.process) :
                                i.fromProcess === o.a.process)
                        );
                    }
                    createPartialFromCurrentEpoch(t, e) {
                        this.handleOneTimeMetric(t, !0);
                        const n = o.a.SchemaManager.loadSchema(t),
                            i = o.a.MetricFactory.create(t, e, n);
                        return i.setStartAt(o.a.EPOCH), this.records.set(i), i;
                    }
                    processStackTrace(t, e) {
                        if (e || t.stackTrace) {
                            if (e && t.stackTrace) {
                                const e = t.getSchema();
                                let n = !1;
                                null != e &&
                                    e.showStackTrace &&
                                    (n =
                                        "boolean" == typeof e.showStackTrace ?
                                        e.showStackTrace :
                                        e.showStackTrace()),
                                    n || t.deleteStackTrace();
                            }
                        } else {
                            let e = [];
                            const n = new Error().stack.split("\n");
                            0 === n[0].indexOf("Error") && (e = n.slice(1)),
                                (e = e.slice(3).map((t) => t.replace(/\s+at\s+/, ""))),
                                t.addStackTrace(e);
                        }
                    }
                },
            );
            var x = n("rFEu"),
                N = n("AoYG");
            o.a.register(
                c.a.METRIC_SCHEMA_MANAGER,
                class {
                    constructor() {
                        (this.metricSchemas = void 0),
                        (this._customMetrics = void 0),
                        (this.isReady = void 0);
                    }
                    get customMetrics() {
                        return (
                            this._customMetrics || (this._customMetrics = new Map()),
                            this._customMetrics
                        );
                    }
                    ready() {
                        if (this.isReady) return;
                        this.metricSchemas = new Map();
                        n("K6Wi")
                            .default.getSchemas()
                            .forEach((t) => {
                                t.getMetrics().forEach((t) => {
                                    this.metricSchemas.set(t.name, t);
                                });
                            }),
                            (this.isReady = !0),
                            u.a.onDisable(() => this.cleanUp);
                    }
                    cleanUp() {
                        this.metricSchemas.clear(),
                            this._customMetrics && this._customMetrics.clear();
                    }
                    loadSchema(t) {
                        this.isReady || this.ready();
                        const e = this.metricSchemas.get(t);
                        if (e) return e;
                        const n = Object(x.c)(t);
                        return this.customMetrics.set(t, n), n;
                    }
                    getMemoryUsageSchemas() {
                        this.isReady || this.ready();
                        let t = [];
                        return (
                            this.metricSchemas.forEach((e) => {
                                e.type === N.a.MEMORY && t.push(e);
                            }),
                            t
                        );
                    }
                    getCPUUsageSchemas() {
                        this.isReady || this.ready();
                        let t = [];
                        return (
                            this.metricSchemas.forEach((e) => {
                                e.type === N.a.CPU && t.push(e);
                            }),
                            t
                        );
                    }
                    hasUsageSchemas() {
                        return (
                            !!this.getMemoryUsageSchemas().length ||
                            !!this.getCPUUsageSchemas().length
                        );
                    }
                },
            );
            class B {
                constructor(t) {
                    (this.schema = void 0),
                    (this.id = void 0),
                    (this.name = void 0),
                    (this.key = void 0),
                    (this.type = void 0),
                    (this.startAt = void 0),
                    (this.endAt = void 0),
                    (this.stackTrace = void 0),
                    (this.duration = void 0),
                    (this.durationText = void 0),
                    (this.version = void 0),
                    (this.isDone = void 0),
                    (this.info = void 0),
                    (this.usageTime = void 0),
                    (this.usageTimeText = void 0),
                    (this.data = void 0),
                    (this.isCancelled = void 0),
                    (this.id = t.id),
                    (this.name = t.name),
                    (this.key = t.key),
                    (this.type = t.type || N.a.TIME),
                    (this.schema = t.metricSchema),
                    (this.version = t.version || B.DEFAULT_VERSION);
                }
                setStartAt(t) {
                    this.startAt = t;
                }
                setEndAt(t) {
                    this.endAt = t;
                }
                setDuration(t) {
                    this.duration = t;
                }
                addStackTrace(t) {
                    this.stackTrace = [...(this.stackTrace || []), ...t];
                }
                deleteStackTrace() {
                    this.stackTrace = void 0;
                }
                exposeInfo() {
                    var t;
                    return null !== (t = this.data) && void 0 !== t ? t : null;
                }
                setData(t) {
                    this.data = t;
                }
                resolve() {
                    this.isDone = !0;
                }
                getSchema() {
                    return this.schema;
                }
                pushInfo(t) {
                    this.info || (this.info = []), this.info.push(t);
                }
                evaluate(t) {
                    this.isDone ||
                        (t && t.endAt && (this.endAt = t.endAt),
                            this.startAt &&
                            this.endAt &&
                            (this.duration = this.endAt - this.startAt),
                            this.duration &&
                            this.type === N.a.TIME &&
                            (this.durationText = Object(A.d)(this.duration)),
                            this.endAt &&
                            ((this.usageTime = P(this.endAt)),
                                this.usageTime &&
                                (this.usageTimeText = Object(A.d)(this.usageTime))));
                }
                clone(t) {
                    null != t.startAt && (this.startAt = Number(t.startAt)),
                        null != t.endAt && (this.endAt = Number(t.endAt)),
                        null != t.duration && (this.duration = Number(t.duration)),
                        null != t.data && (this.data = t.data),
                        (this.durationText = t.durationText),
                        (this.isDone = !0 === t.isDone),
                        (this.usageTime = t.usageTime),
                        (this.usageTimeText = t.usageTimeText),
                        (this.isCancelled = t.isCancelled);
                    try {
                        t.stackTrace && (this.stackTrace = t.stackTrace),
                            t.info && (this.info = JSON.parse(t.info) || []);
                    } catch (e) {}
                }
                cancel() {
                    this.isCancelled = !0;
                }
            }
            B.DEFAULT_VERSION = 1;
            var C = B;
            class O extends C {
                constructor(t) {
                    super(t), (this.type = N.a.TIME), (this.version = O.VERSION);
                }
                evaluate(t) {
                    super.evaluate(t);
                }
                exposeInfo() {
                    return {
                        name: this.name,
                        duration: this.duration,
                        startAt: this.startAt,
                        endAt: this.endAt,
                    };
                }
                resolve() {
                    this.isDone ||
                        ((this.info = [
                                ...(this.info || []),
                                {
                                    duration: this.duration,
                                    startAt: this.startAt,
                                    endAt: this.endAt,
                                },
                            ]),
                            super.resolve());
                }
            }
            O.VERSION = 1;
            var E = O;
            class F extends C {
                constructor(t) {
                    super(t),
                        (this.usage = void 0),
                        (this.passedTime = void 0),
                        (this.type = N.a.USAGE),
                        (this.version = F.VERSION);
                }
                evaluate() {
                    super.evaluate();
                }
                exposeInfo() {
                    return {
                        usage: this.usage,
                        passedTime: this.passedTime
                    };
                }
                resolve() {
                    super.resolve();
                }
                setData(t, e) {
                    (this.usage = t), (this.passedTime = e);
                }
            }
            F.VERSION = 1;
            var U = F;
            o.a.register(
                c.a.METRIC_FACTORY,
                class {
                    constructor() {
                        this.idCounter = void 0;
                    }
                    generateId() {
                        return (
                            null == this.idCounter && (this.idCounter = 0),
                            this.idCounter++,
                            this.idCounter
                        );
                    }
                    getKey(t, e) {
                        return t + (null != e ? `_${e}` : "");
                    }
                    create(t, e, n, o) {
                        let i;
                        const s = (null == n ? void 0 : n.type) || N.a.TIME;
                        return (
                            (i =
                                s === N.a.CPU || s === N.a.MEMORY ?
                                new U({
                                    id: this.generateId(),
                                    name: t,
                                    key: this.getKey(t, e),
                                    metricSchema: n,
                                }) :
                                s === N.a.TIME ?
                                new E({
                                    id: o ? 0 : this.generateId(),
                                    name: t,
                                    key: this.getKey(t, e),
                                    metricSchema: n,
                                }) :
                                new C({
                                    id: o ? 0 : this.generateId(),
                                    type: s,
                                    name: t,
                                    key: this.getKey(t, e),
                                    metricSchema: n,
                                })),
                            i
                        );
                    }
                    clone(t) {
                        let e;
                        const n = (null == t ? void 0 : t.type) || N.a.TIME,
                            o = {
                                id: this.generateId(),
                                type: n,
                                name: t.name,
                                key: t.key,
                                version: t.version,
                            };
                        return (
                            (e =
                                n === N.a.USAGE ?
                                new U(Object(a.a)({}, o)) :
                                n === N.a.TIME ?
                                new E(Object(a.a)({}, o)) :
                                new C(Object(a.a)({}, o))),
                            e.clone(t),
                            e
                        );
                    }
                },
            );
            var G = class {
                constructor() {
                    (this.qosLogControl = void 0),
                    (this.reservedLogs = void 0),
                    (this.enabled = !0),
                    (this.tsMaxReserved = void 0),
                    (this.MAX_RESERVED_LOGS = 1e3),
                    (this.MAX_TIMEOUT_DISABLE = Object(A.e)("5m"));
                }
                register(t) {
                    this.qosLogControl = t;
                }
                send(t) {
                    var e, n, i, s, r;
                    if (this.qosLogControl)
                        if (o.a.process === m.a.Main)
                            if (
                                null !== (e = this.qosLogControl) &&
                                void 0 !== e &&
                                e._readyQos &&
                                null !== (n = this.qosLogControl) &&
                                void 0 !== n &&
                                null !== (i = n.config) &&
                                void 0 !== i &&
                                i.enable
                            ) {
                                var c;
                                this.handleReservedLogs();
                                const e = {};
                                t.success ||
                                    ((e.errorCode = t.errorCode || 0),
                                        (e.startTime = t.startTime || Date.now())),
                                    null === (c = this.qosLogControl) ||
                                    void 0 === c ||
                                    c.logQos(
                                        Object(a.a)({
                                                success: t.success,
                                                commandId: t.cmdId,
                                                subCommandId: t.subCmdId || 0,
                                                duration: t.duration || 0,
                                                params: t.params,
                                            },
                                            e,
                                        ),
                                        !(null == t || !t.forceLog),
                                    );
                            } else this.reserve(t);
                    else
                        this.handleReservedLogs(),
                        t.success ?
                        null === (s = this.qosLogControl) ||
                        void 0 === s ||
                        s.increaseSuccess(
                            t.cmdId,
                            t.subCmdId || 0,
                            t.duration || 0,
                            t.params,
                        ) :
                        null === (r = this.qosLogControl) ||
                        void 0 === r ||
                        r.increaseFailed(
                            t.cmdId,
                            t.subCmdId || 0,
                            t.duration || 0,
                            t.errorCode || 0,
                            t.startTime || Date.now(),
                            t.params,
                        );
                    else this.reserve(t);
                }
                handleReservedLogs() {
                    var t;
                    if (null !== (t = this.reservedLogs) && void 0 !== t && t.length) {
                        const t = this.reservedLogs;
                        (this.reservedLogs = []),
                        t.forEach((t) => {
                            this.send(t);
                        });
                    }
                }
                reserve(t) {
                    this.reservedLogs &&
                        this.reservedLogs.length >= this.MAX_RESERVED_LOGS &&
                        (this.reservedLogs.shift(),
                            this.tsMaxReserved ?
                            Date.now() - this.tsMaxReserved >= this.MAX_TIMEOUT_DISABLE &&
                            (this.enabled = !1) :
                            (this.tsMaxReserved = Date.now())),
                        this.enabled &&
                        (this.reservedLogs || (this.reservedLogs = []),
                            this.reservedLogs.push(t));
                }
            };
            var k = class {
                    constructor() {
                        (this._qosSender = void 0),
                        (this._logger = void 0),
                        (this.pendingQosLogs = void 0),
                        (this.disabled = void 0),
                        (this.syncedServerConfig = void 0),
                        (this.MAX_LOGS_ROLL_OUT = 1e3);
                    }
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("qos")),
                            this._logger
                        );
                    }
                    get qosSender() {
                        return (
                            this._qosSender || (this._qosSender = new G()), this._qosSender
                        );
                    }
                    registerQosControl(t) {
                        this.qosSender.register(t);
                    }
                    onSyncedServerConfig() {
                        var t;
                        this.syncedServerConfig = !0;
                        const e = u.a.getConfig().enable_submit_qos;
                        u.a.getConfig().submit_qos_except_dev;
                        var n;
                        if (
                            (e || (this.disabled = !0),
                                null === (t = this.Logger) ||
                                void 0 === t ||
                                t.zsymb(
                                    3,
                                    15093,
                                    3e4,
                                    "metrics/qos-manager: {}",
                                    this.disabled ? "disabled!" : "enabled",
                                ),
                                this.disabled)
                        )
                            this.pendingQosLogs = [];
                        else if (
                            null !== (n = this.pendingQosLogs) &&
                            void 0 !== n &&
                            n.length
                        ) {
                            const t = [...this.pendingQosLogs];
                            (this.pendingQosLogs = []),
                            t.forEach((t) => {
                                this.logQos(t);
                            });
                        }
                    }
                    async send(t, e) {
                        if (!e.qos || e.disabled || !t.isDone) return;
                        const n = {
                            success: !0,
                            cmdId: e.qos.cmdId,
                            subCmdId: e.qos.subCmdId || 0,
                            duration: t.duration,
                            startTime: t.startAt,
                            params: [],
                        };
                        null != e.qos.errCode &&
                            ((n.success = !1), (n.errorCode = e.qos.errCode)),
                            this.logQos(n);
                    }
                    logQos(t) {
                        if (!this.disabled)
                            if (this.syncedServerConfig)
                                try {
                                    this.qosSender.send(t);
                                } catch (n) {
                                    var e;
                                    null === (e = this.Logger) ||
                                        void 0 === e ||
                                        e.zsymb(20, 15093, 30001, "metric logQos ERR: {}", n);
                                }
                        else
                            this.pendingQosLogs || (this.pendingQosLogs = []),
                            this.pendingQosLogs.length >= this.MAX_LOGS_ROLL_OUT &&
                            this.pendingQosLogs.shift(),
                            this.pendingQosLogs.push(t);
                    }
                    async buildQoSParams(t) {
                        const e = {},
                            n = [...(t.info || [])];
                        if (
                            (n.length && (e.info = n),
                                t.stackTrace && (e.stackTrace = t.stackTrace),
                                t.key && (e.key = t.key),
                                Object.keys(e).length)
                        ) {
                            return [
                                await new Promise((t) => {
                                    setTimeout(() => {
                                        t(JSON.stringify(e));
                                    }, 0);
                                }),
                            ];
                        }
                        return [];
                    }
                },
                L = n("f1TF");
            o.a.register(
                c.a.METRIC_RESOLVER,
                class {
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("resolver")),
                            this._logger
                        );
                    }
                    get qosManager() {
                        return this._qosManager;
                    }
                    constructor() {
                        (this._logger = void 0),
                        (this._qosManager = void 0),
                        (this.isReady = void 0),
                        (this.timerSendRecord = void 0),
                        (this.syncedServerConfig = void 0),
                        (this.pendingMetricRecords = void 0),
                        (this._qosManager = new k());
                    }
                    ready() {
                        this.isReady ||
                            (u.a.onConfigChange((t) => {
                                    var e;
                                    if (
                                        (null == t || !t.fromServerInfo) &&
                                        ((this.syncedServerConfig = !0),
                                            this.qosManager.onSyncedServerConfig(),
                                            null !== (e = this.pendingMetricRecords) &&
                                            void 0 !== e &&
                                            e.length)
                                    ) {
                                        const t = [...this.pendingMetricRecords];
                                        (this.pendingMetricRecords = []),
                                        t.forEach((t) => {
                                            this.analyze(t);
                                        });
                                    }
                                }),
                                (this.isReady = !0));
                    }
                    resolve(t) {
                        t.isDone || t.resolve(),
                            this.processResolvedMetrics(t),
                            this.syncedServerConfig ?
                            this.analyze(t) :
                            (this.pendingMetricRecords ||
                                (this.pendingMetricRecords = []),
                                this.pendingMetricRecords.push(t));
                    }
                    resolveEvent(t, e) {
                        o.a.MetricTransporter.transmitEvents();
                    }
                    exportAll() {}
                    registerQosControl(t) {
                        this.qosManager.registerQosControl(t);
                    }
                    exit() {
                        this.timerSendRecord && clearTimeout(this.timerSendRecord);
                    }
                    analyze(t) {
                        var e;
                        const n = t.getSchema();
                        if (null == n || !n.statement) return;
                        let o = u.a.enable;
                        const i =
                            null === (e = n.config) || void 0 === e ?
                            void 0 :
                            e.getDefaultValue();
                        if (null != i) {
                            o = !!i;
                            const e = u.a.getConfig().config || {};
                            null != e[t.name] && (o = e[t.name]);
                        }
                        const s = u.a.getConfig().staging_account,
                            r = u.a.getConfig().enable_for_staging_account;
                        if ((s && r && (o = !0), !o)) return;
                        n.statement.getAll().forEach((e) => {
                            this.scanStatement(e, t).catch((e) => {
                                this.Logger.zsymb(
                                    21,
                                    16647,
                                    3e4,
                                    "metrics/resolver: analyze {} fail; err {}",
                                    t.key,
                                    Object(L.b)(e),
                                );
                            });
                        });
                    }
                    async scanStatement(t, e) {
                        let n;
                        const o = async (t) => {
                            if (t.disabled) return;
                            let n;
                            var i;
                            if (
                                (await this.checkStatPoint(t, e)) &&
                                ((n = t), null !== (i = t.points) && void 0 !== i && i.length)
                            )
                                for (const e of t.points) {
                                    const t = await o(e);
                                    if (t) {
                                        n = t;
                                        break;
                                    }
                                }
                            return n;
                        };
                        for (const i of t.points)
                            if (
                                ((n = await o(i)),
                                    n && this.qosManager.send(e, n),
                                    "sequential" === t.checkingMode && n)
                            )
                                break;
                    }
                    async checkStatPoint(t, e) {
                        const n = ((t) => {
                            var e, n;
                            const i = {
                                duration: null !== (e = t.duration) && void 0 !== e ? e : 0,
                                usageTime: P(t.endAt),
                                data: t.exposeInfo(),
                                processName: o.a.process,
                                systemInfo: o.a.UsageMonitor.getSystemInfo(),
                            };
                            return (
                                null !== (n = t.stackTrace) &&
                                void 0 !== n &&
                                n.length &&
                                (i.stackTrace = t.stackTrace),
                                [i, ...(t.info || [])]
                            );
                        })(e);
                        return "boolean" == typeof t.condition ?
                            t.condition :
                            t.condition(...n);
                    }
                    processResolvedMetrics(t) {
                        try {
                            const s = (t) => {
                                if ("object" != typeof t) return `${t}`;
                                let e = "",
                                    n = 0;
                                for (const o in t) {
                                    const i = t[o];
                                    if (void 0 !== i) {
                                        if ((0 !== n && (e += "; "), Array.isArray(i)))
                                            e += `${o}:${JSON.stringify(i)}`;
                                        else if ("object" == typeof i) {
                                            e += `${o}:{`;
                                            for (const t in i)
                                                void 0 !== i[t] &&
                                                ("object" == typeof i[t] ?
                                                    (e += ` {k}:${JSON.stringify(i[t])},`) :
                                                    (e += ` {k}:${i[t]},`));
                                            e += " }";
                                        } else e += `${o}:${i}`;
                                        n++;
                                    }
                                }
                                return e;
                            };
                            if (S.has(t.name)) {
                                let e = "";
                                (e =
                                    t.type == N.a.TIME ?
                                    `cost ${t.durationText} - ${t.duration}ms; startAt ${t.startAt}; endAt ${t.endAt}` :
                                    s(t.exposeInfo())),
                                this.Logger.zsymb(
                                    3,
                                    16647,
                                    30001,
                                    "metrics/{}: {}",
                                    t.key ? t.key : t.name,
                                    e,
                                );
                            }
                            if (R.has(t.name) && u.a.getConfig().staging_account) {
                                let r = "";
                                var e, n, i;
                                if (
                                    ((r =
                                            t.type == N.a.TIME ?
                                            `${t.durationText || t.duration || ""}` :
                                            s(t.exposeInfo())),
                                        o.a.process === m.a.Main)
                                )
                                    null === (e = o.a.ToolboxMain.getDebugger()) ||
                                    void 0 === e ||
                                    e.persistInfo({
                                        persistKey: t.name,
                                        info: {
                                            text: `metrics/${t.name}: ${r}`
                                        },
                                    });
                                else
                                    null === (n = o.a.ToolboxRenderer.getDebugger()) ||
                                    void 0 === n ||
                                    n.persistInfo({
                                        persistKey: t.name,
                                        info: {
                                            text: `metrics/${t.name}: ${r}`
                                        },
                                    }),
                                    null === (i = o.a.ToolboxRenderer.getDebugger()) ||
                                    void 0 === i ||
                                    i.requestRun("getPersisted", t.name);
                            }
                        } catch (s) {}
                    }
                },
            );
            var j = n("bfOK");
            class z extends j.a {
                constructor() {
                    super(), (this.DEFAULT_TIMEOUT = 1e3), (this.debugger = void 0);
                }
                get Installer() {
                    return {
                        updateOffsetTime: (t) => {
                            this.TimeHelper.updateOffsetTime(t);
                        },
                    };
                }
                getDebugger() {
                    if (u.a.getConfig().staging_account) {
                        if (!this.debugger) {
                            const t = n("UxIX").default;
                            this.debugger = new t();
                        }
                        return this.debugger;
                    }
                }
                requestCpuIdle(t, e) {
                    requestIdleCallback(
                        () => {
                            t();
                        }, {
                            timeout: (null == e ? void 0 : e.timeout) || this.DEFAULT_TIMEOUT,
                        },
                    );
                }
            }
            o.a.register(c.a.TOOLBOX, z);
            var H = n("zFSh"),
                W = n("3EqI");
            class $ extends H.a {
                constructor() {
                    super(...arguments),
                        (this.config = void 0),
                        (this._lock = void 0),
                        (this._metriczLogWriter = void 0);
                }
                get Lock() {
                    return this._lock || (this._lock = new W.a()), this._lock;
                }
                get MetriczLogWriter() {
                    return (
                        this._metriczLogWriter ||
                        (this._metriczLogWriter = {
                            write: (t) => {}
                        }),
                        this._metriczLogWriter
                    );
                }
                createLogger(t) {
                    return o.a.createLogger(t);
                }
                useConfig(t) {
                    this.config = t;
                }
                submitQos(t) {
                    var e, n;
                    return null === (e = o.a.MetricResolver) ||
                        void 0 === e ||
                        null === (n = e.qosManager) ||
                        void 0 === n ?
                        void 0 :
                        n.logQos(t);
                }
                writeLog(t) {
                    var e, n;
                    return null === (e = o.a.MetricResolver) ||
                        void 0 === e ||
                        null === (n = e.qosManager) ||
                        void 0 === n ?
                        void 0 :
                        n.logQos(t);
                }
                getConfig() {
                    return this.config;
                }
            }
            var K = n("rkiK");
            class V extends $ {
                constructor() {
                    super(...arguments),
                        (this.storageKeyName = void 0),
                        (this.storage = void 0),
                        (this.storageCache = {}),
                        (this.isStorageReady = void 0);
                }
                createStorage(t) {
                    if (!this.storage) {
                        this.storageKeyName = t;
                        const e = async () => {
                                await this.Lock.exec("loadSavedKeyValues", async () => {
                                    if (!this.isStorageReady)
                                        return new Promise((t) => {
                                            if (!this.isStorageReady) {
                                                try {
                                                    const t = n("igA5").default.getInstance(),
                                                        o = t.getItemForCurrentUser(this.storageKeyName);
                                                    if (o)
                                                        try {
                                                            const t = JSON.parse(o);
                                                            this.storageCache || (this.storageCache = {});
                                                            for (const e in t) this.storageCache[e] = t[e];
                                                        } catch (e) {
                                                            t.removeItem(this.storageKeyName);
                                                        }
                                                    this.isStorageReady = !0;
                                                } catch (e) {}
                                                t();
                                            }
                                        });
                                });
                            },
                            o = async () =>
                                new Promise((t) => {
                                    setTimeout(() => {
                                        if (this.storageCache) {
                                            n("igA5")
                                                .default.getInstance()
                                                .setItemForCurrentUser(
                                                    this.storageKeyName,
                                                    JSON.stringify(this.storageCache),
                                                );
                                        }
                                        t();
                                    }, 0);
                                }),
                                i = async () =>
                                    new Promise((t) => {
                                        setTimeout(() => {
                                            if (this.storageCache) {
                                                n("igA5")
                                                    .default.getInstance()
                                                    .removeItemForCurrentUser(this.storageKeyName);
                                            }
                                            t();
                                        }, 0);
                                    });
                        this.storage = {
                            get: async (t) => {
                                var n;
                                return (
                                    this.isStorageReady || (await e()),
                                    null === (n = this.storageCache) || void 0 === n ?
                                    void 0 :
                                    n[t]
                                );
                            },
                            set: async (t, n) => {
                                this.isStorageReady || (await e()),
                                    this.storageCache || (this.storageCache = {}),
                                    (this.storageCache[t] = n),
                                    o();
                            },
                            delete: async (t) => {
                                this.isStorageReady || (await e()),
                                    this.storageCache && (delete this.storageCache[t], i());
                            },
                        };
                    }
                    return this.storage;
                }
                get MetriczLogWriter() {
                    return (
                        this._metriczLogWriter ||
                        (this._metriczLogWriter = {
                            write: (t) => {
                                var e;
                                return null === (e = K.MetricTool.getDebugger()) ||
                                    void 0 === e ?
                                    void 0 :
                                    e.saveLog(t);
                            },
                        }),
                        this._metriczLogWriter
                    );
                }
            }
            o.a.register(
                c.a.PROCESS_LIFECYCLE_CONTROLLER,
                class extends class {
                    constructor() {
                        (this.metricConstructors = void 0),
                        (this.lifecycleMetrics = void 0),
                        (this._logger = void 0),
                        (this._initAt = void 0),
                        (this.metricConstructors = []),
                        (this.lifecycleMetrics = []);
                    }
                    get Logger() {
                        return (
                            this._logger ||
                            (this._logger = o.a.createLogger("process-lifecycle")),
                            this._logger
                        );
                    }
                    isValidEvent(t) {
                        var e;
                        return (
                            !1 !==
                            (null === (e = u.a.getConfig().toolbox) || void 0 === e ?
                                void 0 :
                                e.enable_process_lifecycle)
                        );
                    }
                    ready() {
                        this.install();
                    }
                    install() {
                        throw new Error("Method not implemented.");
                    }
                    init() {
                        throw new Error("Method not implemented.");
                    }
                    on(t, e) {
                        throw new Error("Method not implemented.");
                    }
                    register(t) {
                        this.metricConstructors.push(...t);
                    }
                    getMetrics() {
                        return (
                            this._initAt || (this.init(), (this._initAt = Date.now())),
                            this.metricConstructors.length &&
                            (this.metricConstructors.forEach((t) => {
                                    try {
                                        const e = new t();
                                        this.lifecycleMetrics.push(e);
                                    } catch (e) {
                                        this.Logger.zsymb(
                                            21,
                                            16657,
                                            3e4,
                                            "failed on create metric instance. ERR {}",
                                            Object(L.b)(e),
                                        );
                                    }
                                }),
                                (this.metricConstructors = [])),
                            this.lifecycleMetrics
                        );
                    }
                } {
                    install() {
                        H.c.install(V);
                    }
                    init() {
                        try {
                            const t = n("BiGr").default;
                            null != t && t.length && this.register(t);
                        } catch (t) {
                            this.Logger.zsymb(
                                21,
                                16640,
                                3e4,
                                "Failed on init web metric lifecycle. err {}",
                                Object(L.b)(t),
                            );
                        }
                    }
                    isValidEvent(t) {
                        return (
                            !!super.isValidEvent(t) && [M.a.app_did_mount, M.a.app_ready].includes(t)
                        );
                    }
                    getMetricInstances() {
                        return this.getMetrics();
                    }
                    triggerLifecycle(t, e) {
                        try {
                            const i = t.getConfig(),
                                s = u.a.getConfig().custom || {},
                                r = Object(a.a)(Object(a.a)({}, i || {}), s);
                            var n, o;
                            if (e === M.a.app_did_mount)
                                null === (n = t.appDidMount) || void 0 === n || n.call(t, r);
                            if (e === M.a.app_ready)
                                null === (o = t.appReady) || void 0 === o || o.call(t, r);
                        } catch (i) {
                            this.Logger.zsymb(
                                21,
                                16640,
                                30001,
                                "failed on trigger lifecycle. ERR {}",
                                Object(L.b)(i),
                            );
                        }
                    }
                    on(t, e) {
                        if (!this.isValidEvent(t)) return;
                        this.getMetricInstances().forEach((e) => {
                            this.triggerLifecycle(e, t);
                        });
                    }
                },
            );
            class Q {
                constructor(t) {
                    (this.time = void 0),
                    (this.metrics = void 0),
                    (this.time = t),
                    (this.metrics = []);
                }
                setTime(t) {
                    this.time = t;
                }
                add(t) {
                    this.metrics.push(t);
                }
                static clone(t) {
                    const e = new Q(t.time);
                    return t.metrics.forEach((t) => e.add(t)), e;
                }
            }
            var X = class {
                    constructor() {
                        (this.timeNodes = void 0),
                        (this.startTime = void 0),
                        (this.isRunning = void 0),
                        (this.enabled = void 0),
                        (this.everyTimeNode = void 0),
                        (this.timer = void 0),
                        (this.listener = void 0),
                        (this.everyPassedTime = void 0),
                        (this.sort = (t) => {
                            for (let e = 1; e < t.length; e++) {
                                const n = t[e];
                                let o;
                                for (o = e - 1; o >= 0 && t[o].time > n.time; o--)
                                    t[o + 1] = t[o];
                                t[o + 1] = n;
                            }
                            return t;
                        }),
                        (this.timeNodes = []),
                        (this.startTime = 0),
                        (this.isRunning = !1),
                        (this.enabled = !1),
                        (this.everyPassedTime = 0);
                    }
                    onMessage(t) {
                        this.listener = t;
                    }
                    startUp(t) {
                        this.isRunning ||
                            ((this.enabled = !0),
                                (this.timeNodes = this.sort(t)),
                                this.timeNodes.length &&
                                ((this.startTime = Date.now()), this.run()));
                    }
                    startEvery(t) {
                        (this.everyTimeNode = t),
                        this.isRunning ||
                            ((this.enabled = !0),
                                (this.startTime = Date.now()),
                                (this.everyPassedTime = 0),
                                this.runEvery());
                    }
                    stop() {
                        clearTimeout(this.timer),
                            (this.enabled = !1),
                            (this.timeNodes = []),
                            (this.everyTimeNode = void 0);
                    }
                    execTimeNode(t) {
                        if (this.enabled && this.listener) {
                            const e = {
                                startTime: this.startTime,
                                passedTime: t.time,
                                metrics: t.metrics,
                            };
                            this.listener(e);
                        }
                    }
                    run() {
                        if (!this.enabled) return void this.stop();
                        this.isRunning = !0;
                        const t = Date.now() - this.startTime,
                            e = this.timeNodes.shift();
                        if (e) {
                            const n = e.time - t;
                            this.timer = setTimeout(() => {
                                this.execTimeNode(e),
                                    (this.everyPassedTime = e.time),
                                    this.run(),
                                    (this.isRunning = !1);
                            }, n);
                        } else(this.isRunning = !1), this.runEvery();
                    }
                    runEvery() {
                        if (!this.everyTimeNode) return;
                        if (!this.enabled) return void this.stop();
                        this.isRunning = !0;
                        const t = this.everyTimeNode.time;
                        t
                            ?
                            (this.timer = setTimeout(() => {
                                if (this.everyTimeNode) {
                                    const e = this.everyPassedTime + t,
                                        n = Q.clone(this.everyTimeNode);
                                    n.setTime(e),
                                        this.execTimeNode(n),
                                        (this.everyPassedTime = e),
                                        this.runEvery(),
                                        (this.isRunning = !1);
                                }
                            }, t)) :
                            (this.isRunning = !1);
                    }
                },
                J = n("Na1p");
            o.a.register(
                c.a.METRIC_USAGE_MONITOR,
                class {
                    constructor() {
                        (this._timelineEngine = void 0),
                        (this.timeline = void 0),
                        (this._logger = void 0),
                        (this._isReady = void 0),
                        (this.webSystemInfo = void 0),
                        (this.submittedSystemInfo = void 0),
                        (this.execTimeNode = (t) => {
                            const {
                                metrics: e
                            } = t,
                            n = e.filter(
                                (t) => t.type === N.a.CPU || t.type === N.a.MEMORY,
                            );
                            var i;
                            n.length &&
                                (null === (i = o.a.ProcessMonitor) ||
                                    void 0 === i ||
                                    i.recordAtTime(t, n));
                        }),
                        (this.timeline = []);
                    }
                    get Logger() {
                        return (
                            this._logger ||
                            (this._logger = o.a.createLogger("usage-monitor")),
                            this._logger
                        );
                    }
                    get timelineEngine() {
                        return (
                            this._timelineEngine ||
                            ((this._timelineEngine = new X()),
                                this._timelineEngine.onMessage(this.execTimeNode)),
                            this._timelineEngine
                        );
                    }
                    getSystemInfo() {
                        return this.webSystemInfo;
                    }
                    async loadWebSystemInfo() {
                        try {
                            var t, e;
                            if (
                                null !== (t = navigator) &&
                                void 0 !== t &&
                                null !== (e = t.userAgentData) &&
                                void 0 !== e &&
                                e.getHighEntropyValues
                            ) {
                                const t = await navigator.userAgentData.getHighEntropyValues([
                                    "architecture",
                                ]);
                                null != t &&
                                    t.architecture &&
                                    (this.webSystemInfo = {
                                        arch: t.architecture
                                    });
                            }
                        } catch (n) {}
                    }
                    ready() {
                        if (!this._isReady) {
                            var t;
                            if ((this.loadWebSystemInfo(), o.a.process !== m.a.Main));
                            else
                                null !== (t = u.a.getConfig().processes_enable_cpu_monitor) &&
                                void 0 !== t &&
                                t.includes(o.a.process) &&
                                J.a.start();
                            u.a.onConfigChange((t) => {}), (this._isReady = !0);
                        }
                    }
                    onMainFinishLoad() {
                        o.a.process, m.a.Main;
                    }
                    async getOsArchitecture() {
                        var t, e;
                        return null === (t = o.a.ProcessMonitor) ||
                            void 0 === t ||
                            null === (e = t.getOsArchitecture) ||
                            void 0 === e ?
                            void 0 :
                            e.call(t);
                    }
                    async checkToSubmitSystemInfo() {}
                    startUp() {
                        const t = o.a.SchemaManager.getMemoryUsageSchemas(),
                            e = o.a.SchemaManager.getCPUUsageSchemas(),
                            n = t.filter((t) => {
                                var e;
                                return null === (e = t.timeline) || void 0 === e ?
                                    void 0 :
                                    e.timeNodes.length;
                            }),
                            i = e.filter((t) => {
                                var e;
                                return null === (e = t.timeline) || void 0 === e ?
                                    void 0 :
                                    e.timeNodes.length;
                            }),
                            s = [];
                        [...n, ...i].forEach((t) => {
                                var e;
                                (
                                    (null === (e = t.timeline) || void 0 === e ?
                                        void 0 :
                                        e.timeNodes) || []
                                ).forEach((e) => {
                                    let {
                                        time: n
                                    } = e;
                                    const o = s.find((t) => t.time === n);
                                    if (o) o.add(t);
                                    else {
                                        const e = new Q(n);
                                        e.add(t), s.push(e);
                                    }
                                });
                            }),
                            s.length && ((this.timeline = s), this.timelineEngine.startUp(s));
                    }
                    onReceiveProcessStats(t) {
                        var e, n;
                        null != t &&
                            t.pid &&
                            t.name !== m.a.Main &&
                            (null === (e = o.a.ProcessMonitor) ||
                                void 0 === e ||
                                null === (n = e.combineRendererStats) ||
                                void 0 === n ||
                                n.call(e, t));
                    }
                    exit() {
                        var t;
                        this.timelineEngine.stop(),
                            null === (t = o.a.AppUsageMonitor) || void 0 === t || t.stop(),
                            o.a.process !== m.a.Main || J.a.stop();
                    }
                },
            );
            var Z = n("igRa");
            o.a.register(
                c.a.UI_MANAGER,
                class {
                    constructor() {
                        (this._fpsTimeline = void 0),
                        (this.fpsEngineStartAt = void 0),
                        (this.fpsState = void 0),
                        (this.maxFps = void 0),
                        (this._logger = void 0),
                        (this._tool = void 0),
                        (this.isActive = void 0),
                        (this.controllerId = void 0),
                        (this._avgFpsCounter = void 0),
                        (this.lowestDroppedFpsMonitor = void 0),
                        (this._listeners = void 0),
                        (this._fpsSections = void 0),
                        (this._fpsLongSections = void 0),
                        (this.FPS_SECTION_EXPIRATION_TIME = 6e4),
                        (this.fpsFallingConfig = {
                            safeFpsGap: 10
                        }),
                        (this.startLowestDroppedFpsMonitor = () => {
                            this.lowestDroppedFpsMonitor &&
                                this.lowestDroppedFpsMonitor.end(),
                                (this.lowestDroppedFpsMonitor = this.getFpsFallingRecorder()),
                                this.lowestDroppedFpsMonitor.onData((t) => {
                                    var e;
                                    const n =
                                        (null === (e = this.lowestDroppedFpsMonitor) ||
                                            void 0 === e ?
                                            void 0 :
                                            e.end()) || t;
                                    this.recordLowestDroppedFpsMetric(n),
                                        this.triggerEvent(Z.a.DROP_FPS, n),
                                        (this.lowestDroppedFpsMonitor = void 0),
                                        this.startLowestDroppedFpsMonitor();
                                }),
                                this.lowestDroppedFpsMonitor.start();
                        }),
                        (this.recordFpsMetric = (t) => {
                            if (
                                !this.fpsState ||
                                !this.isActive ||
                                !u.a.getConfig().enable_fps_monitor
                            )
                                return;
                            const e = Date.now(),
                                {
                                    metrics: n,
                                    passedTime: i,
                                    startTime: s
                                } = t,
                                r = n.find((t) => t.name === M.b.fps);
                            if (r) {
                                const t = o.a.MetricFactory.create(
                                    r.name,
                                    `${r.name}.${i}`,
                                    r,
                                );
                                t.setStartAt(s),
                                    t.setEndAt(e),
                                    t.pushInfo({
                                        fps: this.fpsState.fps,
                                        avgFps: this.fpsState.avgFps,
                                        maxFps: this.fpsState.maxFps,
                                        usageTime: i,
                                    }),
                                    t.evaluate(),
                                    t.resolve(),
                                    o.a.MetricResolver.resolve(t);
                            }
                            (u.a.getConfig().enable_write_log || !1) &&
                            o.a.MetricTransporter.transmitFps(this.fpsState, e, i);
                        }),
                        (this.recordLowestDroppedFpsMetric = (t) => {
                            if (null == t.lowestDrop) return;
                            const e = o.a.SchemaManager.loadSchema(M.b.fps_lowest_drop),
                                n = o.a.MetricFactory.create(
                                    e.name,
                                    `${e.name}.${Date.now()}`,
                                    e,
                                );
                            n.setDuration(t.lowestDrop),
                                n.pushInfo(
                                    Object(a.a)(
                                        Object(a.a)({}, t), {}, {
                                            maxFps: this.maxFps
                                        },
                                    ),
                                ),
                                n.evaluate(),
                                n.resolve(),
                                o.a.MetricResolver.resolve(n);
                        });
                    }
                    get Logger() {
                        return (
                            this._logger || (this._logger = o.a.createLogger("ui-manager")),
                            this._logger
                        );
                    }
                    get fpsTimeline() {
                        return (
                            this._fpsTimeline ||
                            ((this._fpsTimeline = new X()),
                                this._fpsTimeline.onMessage(this.recordFpsMetric)),
                            this._fpsTimeline
                        );
                    }
                    get avgFpsCounter() {
                        return (
                            this._avgFpsCounter ||
                            (this._avgFpsCounter = {
                                _columnNo: 0,
                                _total: 0
                            }),
                            this._avgFpsCounter
                        );
                    }
                    get fpsSections() {
                        return (
                            this._fpsSections || (this._fpsSections = new Map()),
                            this._fpsSections
                        );
                    }
                    get fpsLongSections() {
                        return (
                            this._fpsLongSections || (this._fpsLongSections = new Map()),
                            this._fpsLongSections
                        );
                    }
                    get listeners() {
                        return this._listeners || (this._listeners = {}), this._listeners;
                    }
                    get Tool() {
                        if (!this._tool) {
                            const t = n("5BYM").default;
                            this._tool = new t(this);
                        }
                        return this._tool;
                    }
                    ready() {}
                    exit() {
                        this._fpsTimeline && this.fpsTimeline.stop(),
                            this.lowestDroppedFpsMonitor &&
                            (this.lowestDroppedFpsMonitor.end(),
                                (this.lowestDroppedFpsMonitor = void 0)),
                            (this.fpsEngineStartAt = void 0);
                    }
                    registerController() {
                        if (this.controllerId) return;
                        this.controllerId = Date.now();
                        return {
                            id: this.controllerId,
                            setIsActive: (t) => {
                                this.isActive = t;
                            },
                        };
                    }
                    unregisterController(t) {
                        this.controllerId === t && (this.controllerId = void 0);
                    }
                    registerFpsMonitor() {
                        if (
                            this.fpsEngineStartAt ||
                            (o.a.process !== m.a.Render && o.a.process !== m.a.Web)
                        )
                            return;
                        if (
                            ((this.fpsEngineStartAt = Date.now()),
                                u.a.getConfig().enable_fps_monitor)
                        ) {
                            const t = new Q(Object(A.e)("1m")),
                                e = o.a.SchemaManager.loadSchema(M.b.fps);
                            e.categories && (t.add(e), this.fpsTimeline.startEvery(t));
                        }
                        if (
                            u.a.getConfig().enable_fps_monitor_v2 &&
                            u.a.getConfig().enable_fps_drop_monitor
                        ) {
                            o.a.SchemaManager.loadSchema(M.b.fps_lowest_drop).categories &&
                                this.startLowestDroppedFpsMonitor();
                        }
                        return {
                            id: this.fpsEngineStartAt,
                            recordFps: (t, e, n) => this.recordFps(t, e, n),
                        };
                    }
                    unregisterFpsMonitor(t) {
                        this.fpsEngineStartAt === t &&
                            ((this.fpsEngineStartAt = void 0),
                                this.lowestDroppedFpsMonitor &&
                                (this.lowestDroppedFpsMonitor.end(),
                                    (this.lowestDroppedFpsMonitor = void 0)),
                                this._fpsTimeline && this.fpsTimeline.stop());
                    }
                    getRegisteredFpsMonitor() {
                        return this.fpsEngineStartAt;
                    }
                    recordFps(t, e, n) {
                        this.isActive &&
                            (this.avgFpsCounter._columnNo++,
                                (this.avgFpsCounter._total += t.fps),
                                (this.fpsState = t),
                                (this.fpsState.avgFps = Number(
                                    (
                                        this.avgFpsCounter._total / this.avgFpsCounter._columnNo
                                    ).toFixed(0),
                                )),
                                (this.maxFps = Math.max(e, this.maxFps || 60)),
                                120 === this.maxFps && (this.fpsFallingConfig.safeFpsGap = 20),
                                this.triggerEvent(Z.a.FPS, {
                                    fps: t.fps,
                                    now: n
                                }));
                    }
                    getFps() {
                        return this.fpsState;
                    }
                    on(t, e) {
                        this.listeners[t] || (this.listeners[t] = []),
                            this.listeners[t].push(e);
                    }
                    removeListener(t, e) {
                        var n;
                        null !== (n = this.listeners[t]) &&
                            void 0 !== n &&
                            n.length &&
                            (this.listeners[t] = this.listeners[t].filter((t) => t !== e));
                    }
                    triggerEvent(t, e) {
                        const n = this.listeners[t];
                        null != n && n.length && n.forEach((t) => t(e));
                    }
                    getFpsFallingRecorder(t) {
                        return new(0, n("/Pmb").default)(
                            Object(a.a)(
                                Object(a.a)({
                                        safeFpsGap: this.fpsFallingConfig.safeFpsGap
                                    },
                                    t || {},
                                ), {}, {
                                    maxFps: this.maxFps
                                },
                            ),
                        );
                    }
                    startRecordSectionFps(t, e) {
                        var n;
                        const i = !!u.a.getConfig().fps_section[t],
                            s = u.a.getConfig().enable_fps_drop_monitor;
                        if (!this.getRegisteredFpsMonitor() || !i || !s) return;
                        const r = o.a.SchemaManager.loadSchema(t);
                        if (r.disabled) return;
                        const c = o.a.MetricFactory.getKey(t, e);
                        if (
                            null === (n = this.fpsSections.get(c)) ||
                            void 0 === n ||
                            !n.listener
                        ) {
                            const n = (n) => {
                                if (null != n.lowestDrop) {
                                    const o = this.fpsSections.get(c);
                                    if (!o) return;
                                    o.result ?
                                        null != o.result.lowestDrop &&
                                        o.result.lowestDrop > n.lowestDrop &&
                                        (o.result = n) :
                                        (o.result = n),
                                        (null == o || !o.timer) &&
                                        o.startAt &&
                                        Date.now() - o.startAt >=
                                        this.FPS_SECTION_EXPIRATION_TIME &&
                                        this.endRecordSectionFps(t, e);
                                }
                            };
                            this.on(Z.a.DROP_FPS, n),
                                this.fpsSections.set(
                                    c,
                                    Object(a.a)(
                                        Object(a.a)({}, this.fpsSections.get(c) || {}), {}, {
                                            startAt: Date.now(),
                                            listener: n
                                        },
                                    ),
                                );
                        }
                        const d = this.fpsSections.get(c);
                        d &&
                            (d.timer && clearTimeout(d.timer),
                                (d.timer =
                                    null != r.timeout ?
                                    setTimeout(() => {
                                        this.endRecordSectionFps(t, e);
                                    }, r.timeout) :
                                    void 0));
                    }
                    endRecordSectionFps(t, e, n) {
                        const i = o.a.MetricFactory.getKey(t, e),
                            s = this.fpsSections.get(i);
                        if (!s) return;
                        const r = Date.now(),
                            c = s.listener;
                        c && this.removeListener(Z.a.DROP_FPS, c),
                            null != s && s.timer && clearTimeout(s.timer);
                        const d = Object(a.a)(
                            Object(a.a)({}, s.result || {}), {}, {
                                startAt: s.startAt,
                                endAt: r,
                                maxFps: this.maxFps
                            },
                        );
                        if (
                            (this.fpsSections.delete(i),
                                null != (null == d ? void 0 : d.lowestDrop) ||
                                u.a.getConfig().allow_record_high_fps)
                        ) {
                            var m;
                            (null == d ? void 0 : d.lowestDrop) &&
                            (null === (m = this.Logger) ||
                                void 0 === m ||
                                m.zsymb(5, 16639, 30001, "metrics/fps_drop/{}: {}", i, d));
                            const s = o.a.SchemaManager.loadSchema(t);
                            if (!s.disabled) {
                                const i = o.a.MetricFactory.create(t, e, s);
                                i.setData(d),
                                    i.setDuration(d.lowestDrop || this.maxFps || 0),
                                    i.pushInfo(d),
                                    n && i.pushInfo(n),
                                    i.evaluate(),
                                    i.resolve(),
                                    o.a.MetricResolver.resolve(i);
                            }
                        }
                        return d;
                    }
                    registerFpsLongSectionRecorder(t) {
                        let e = this.fpsLongSections.get(t);
                        if (e) return e;
                        {
                            const e = new(0, n("Xq9V").default)(
                                () => {
                                    this.fpsLongSections.has(t) && this.fpsLongSections.delete(t);
                                }, {
                                    safeFpsGap: this.fpsFallingConfig.safeFpsGap,
                                    maxFps: this.maxFps,
                                },
                            );
                            return this.fpsLongSections.set(t, e), e;
                        }
                    }
                },
            );
            o.a.register(
                c.a.LOCAL_STAT,
                class {
                    ready() {}
                    record() {}
                    recordUsage() {}
                    recordProcessStats() {}
                    recordFps() {}
                    recordFpsSection() {}
                    recordAppUsage() {}
                    export () {}
                },
            );
            (() => {
                o.a.install();
            })();
        },
        K6Wi: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {};
            n.r(o),
                n.d(o, "scrollConvList", function() {
                    return W;
                }),
                n.d(o, "switchJumpConv", function() {
                    return V;
                }),
                n.d(o, "scrollChatBoxView", function() {
                    return X;
                }),
                n.d(o, "switchMainTab", function() {
                    return Z;
                }),
                n.d(o, "scrollGlobalSearchList", function() {
                    return tt;
                });
            var i = {};
            n.r(i),
                n.d(i, "e2eeSessionRecordDataSize", function() {
                    return it;
                });
            var s = n("VTBJ"),
                r = n("rFEu"),
                a = n("cnBV"),
                c = n("uzza"),
                d = n("CHYU");
            const m = Object(r.g)(
                    r.b.time("1m"),
                    r.b.time("5m"),
                    r.b.time("10m"),
                    r.b.time("30m"),
                    r.b.time("1h"),
                    r.b.time("3h"),
                    r.b.time("5h"),
                    r.b.time("8h"),
                    r.b.time("24h"),
                ),
                l = r.c.Memory({
                    name: c.a.usage_memory,
                    categories: [a.a.usage],
                    timeline: m,
                    statement: Object(r.f)({
                        name: "memory usage",
                        points: [
                            r.f.Point({
                                name: "usage after 1m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("1m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 50 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("50MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99108
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99140
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99172
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 MB < heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99109
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99141
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99173
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99110
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99142
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99174
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99111
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99143
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99175
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 5m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("5m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 50 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("50MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99112
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99144
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99176
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 MB < heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99113
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99145
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99177
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99114
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99146
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99178
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99115
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99147
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99179
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 10m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("10m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 50 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("50MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99116
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99148
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99180
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 MB < heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99117
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99149
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99181
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99118
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99150
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99182
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99119
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99151
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99183
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 30m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("30m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 50 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("50MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99120
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99152
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99184
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 MB < heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99121
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99153
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99185
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99122
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99154
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99186
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99123
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99155
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99187
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 1h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("1h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 50 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("50MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99124
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99156
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99188
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 MB < heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99125
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99157
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99189
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99126
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99158
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99190
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99127
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99159
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99191
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 3h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("3h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99128
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99160
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99192
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99129
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99161
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99193
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99130
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99162
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99194
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 5h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("5h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99131
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99163
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99195
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99132
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99164
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99196
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99133
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99165
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99197
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 8h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("8h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99134
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99166
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99198
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99135
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99167
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99199
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99136
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99168
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99200
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 24h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e >= r.b.time("24h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "heapUsed <= 100 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("100MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99137
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99169
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99201
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "100 MB < heapUsed <= 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e <= r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99138
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99170
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99202
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "heapUsed > 200 MB",
                                        condition: (t) => {
                                            const e = r.b.extractHeapUsed(t);
                                            return !!(null != e && e > r.b.bytes("200MB"));
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99139
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99171
                                                },
                                            }),
                                            r.f.Point({
                                                name: "dbtask",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99203
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                u = r.c.CPU({
                    name: c.a.usage_cpu,
                    categories: [a.a.usage],
                    timeline: m,
                    statement: Object(r.f)({
                        name: "percent CPU usage",
                        points: [
                            r.f.Point({
                                name: "usage after 1m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("1m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99e3
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99036
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99072
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99001
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99037
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99073
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99002
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99038
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99074
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99003
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99039
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99075
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 5m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("5m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99004
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99040
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99076
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99005
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99041
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99077
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99006
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99042
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99078
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99007
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99043
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99079
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 10m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("10m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99008
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99044
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99080
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99009
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99045
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99081
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99010
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99046
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99082
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99011
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99047
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99083
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 30m",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("30m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99012
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99048
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99084
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99013
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99049
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99085
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99014
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99050
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99086
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99015
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99051
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99087
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 1h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("1h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99016
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99052
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99088
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99017
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99053
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99089
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99018
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99054
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99090
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99019
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99055
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99091
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 3h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("3h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99020
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99056
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99092
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99021
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99057
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99093
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99022
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99058
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99094
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99023
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99059
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99095
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 5h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("5h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99024
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99060
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99096
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99025
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99061
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99097
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99026
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99062
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99098
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99027
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99063
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99099
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 8h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e <= r.b.time("8h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99028
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99064
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99100
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99029
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99065
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99204
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99030
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99066
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99205
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99031
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99067
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99206
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usage after 24h",
                                condition: (t) => {
                                    const e = r.b.extractPassedTime(t);
                                    return !!(e && e >= r.b.time("24h"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "<= 10%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99032
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99068
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99104
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10% < percentCPUUsage <= 30%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 30);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99033
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99069
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99105
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "30% < percentCPUUsage <= 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e <= 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99034
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99070
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99106
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "percentCPUUsage > 70%",
                                        condition: (t) => {
                                            const e = r.b.extractCPUUsage(t);
                                            return !!(null != e && e > 70);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "main",
                                                condition: (t) => t.processName === d.a.Main,
                                                qos: {
                                                    cmdId: 99035
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                qos: {
                                                    cmdId: 99071
                                                },
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.SharedWorker,
                                                qos: {
                                                    cmdId: 99107
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            var f = Object(r.d)({
                    metrics: [l, u]
                }),
                p = n("rkiK");
            const h = (t) =>
                "get" === t ||
                "get-multi" === t ||
                "get-all" === t ||
                "get-all-key" === t ||
                "count" === t ?
                "read" :
                "insert" === t ||
                "insert-multi" === t ||
                "update" === t ||
                "update-multi" === t ||
                "get-and-update" === t ?
                "write" :
                "delete" === t ||
                "delete-multi" === t ||
                "find-and-delete" === t ||
                "clear" === t ?
                "delete" :
                void 0,
                g = new(class {
                    constructor() {
                        (this.TIME_TO_RERUN_QUERY = 36e5),
                        (this._couting = void 0),
                        (this._lastCountedAt = void 0),
                        (this._lastCount = void 0);
                    }
                    async countTotalMessages() {
                        if (this._couting) return await this._couting;
                        if (
                            this._lastCount &&
                            this._lastCountedAt &&
                            Date.now() - this._lastCountedAt < this.TIME_TO_RERUN_QUERY
                        )
                            return this._lastCount;
                        const t = (async () =>
                            new Promise((t) => {
                                setTimeout(() => {
                                    p.MetriczUtilsAPI.requestCpuIdle(async () => {
                                        try {
                                            const e = n("fsN4").default.getInstance(),
                                                o = await e.Core.Message.count();
                                            (this._lastCount = o),
                                            (this._lastCountedAt = Date.now()),
                                            t(o);
                                        } catch (e) {
                                            t(NaN);
                                        }
                                    });
                                }, 1e4);
                            }))();
                        this._couting = t;
                        try {
                            return await t;
                        } catch (e) {
                            throw e;
                        } finally {
                            this._couting = void 0;
                        }
                    }
                })(),
                b = Object(r.c)({
                    name: c.a.query_resolution_time,
                    config: Object(r.a)(!0),
                    features: [a.b.dal],
                    categories: [a.a.core],
                    showStackTrace: () => !1,
                    statement: r.f.Group(
                        Object(r.f)({
                            name: "db execution time - by messages size",
                            points: [
                                r.f.Point({
                                    name: "totalMsgs <= 50k",
                                    condition: async () => (await g.countTotalMessages()) <= 5e4,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99817,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99817,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99817,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99817,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99817,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "50k < totalMsgs <= 100k",
                                    condition: async () => (await g.countTotalMessages()) <= 1e5,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99818,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99818,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99818,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99818,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99818,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "100k < totalMsgs <= 500k",
                                    condition: async () => (await g.countTotalMessages()) <= 5e5,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99819,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99819,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99819,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99819,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99819,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500k < totalMsgs <= 1mil",
                                    condition: async () => (await g.countTotalMessages()) <= 1e6,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99820,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99820,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99820,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99820,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99820,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1mil < totalMsgs <= 2mil",
                                    condition: async () => (await g.countTotalMessages()) <= 2e6,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99821,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99821,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99821,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99821,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99821,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "totalMsgs > 2mil",
                                    condition: async () => (await g.countTotalMessages()) > 2e6,
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99822,
                                                errCode: 1
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99822,
                                                errCode: 2
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99822,
                                                errCode: 3
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99822,
                                                errCode: 4
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99822,
                                                errCode: 5
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "duration by query type",
                            points: [
                                r.f.Point({
                                    name: "queryType: READ",
                                    condition: (t, e) =>
                                        "read" === h(null == e ? void 0 : e.method),
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99504
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99505
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99506
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99507
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99508
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "queryType: WRITE",
                                    condition: (t, e) =>
                                        "write" === h(null == e ? void 0 : e.method),
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e < r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99509
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99510
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99511
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99512
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99513
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "queryType: DELETE",
                                    condition: (t, e) =>
                                        "delete" === h(null == e ? void 0 : e.method),
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99514
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99515
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99516
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99517
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99518
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "usage time: within first 10m",
                            checkingMode: "all",
                            points: [
                                r.f.Point({
                                    name: "usageTime <= 1m",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e <= r.b.time("1m");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99519
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99520
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99521
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99522
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99523
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "usageTime <= 5m",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e <= r.b.time("5m");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99524
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99525
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99526
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99527
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99528
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "usageTime <= 10m",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e <= r.b.time("10m");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99529
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99530
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99531
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99532
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99533
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "usage time: 10m - 5h",
                            checkingMode: "all",
                            points: [
                                r.f.Point({
                                    name: "10m < usageTime <= 1h",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e > r.b.time("10m") && e <= r.b.time("1h");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99534
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99535
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99536
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99537
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99538
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1h < usageTime <= 5h",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e > r.b.time("1h") && e <= r.b.time("5h");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99539
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99540
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99541
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99542
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99543
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "usage time: long session",
                            points: [
                                r.f.Point({
                                    name: "usageTime > 5h",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e > r.b.time("5h");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "<= 500ms",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("500ms");
                                            },
                                            qos: {
                                                cmdId: 99544
                                            },
                                        }),
                                        r.f.Point({
                                            name: "500ms < duration <= 1s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("1s");
                                            },
                                            qos: {
                                                cmdId: 99545
                                            },
                                        }),
                                        r.f.Point({
                                            name: "1s < duration <= 5s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("5s");
                                            },
                                            qos: {
                                                cmdId: 99546
                                            },
                                        }),
                                        r.f.Point({
                                            name: "5s < duration <= 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e <= r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99547
                                            },
                                        }),
                                        r.f.Point({
                                            name: "duration > 10s",
                                            condition: (t) => {
                                                let {
                                                    duration: e
                                                } = t;
                                                return e > r.b.time("10s");
                                            },
                                            qos: {
                                                cmdId: 99548
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "duration > 10s",
                            points: [
                                r.f.Point({
                                    name: "duration > 10s",
                                    condition: (t) => {
                                        let {
                                            duration: e
                                        } = t;
                                        return e > r.b.time("10s");
                                    },
                                    qos: {
                                        cmdId: 99549
                                    },
                                }),
                            ],
                        }),
                    ),
                }),
                P = Object(r.c)({
                    name: c.a.db_ready,
                    config: Object(r.a)(!0),
                    features: [a.b.dal],
                    categories: [a.a.core],
                    statement: Object(r.f)({
                        name: "DB open time",
                        points: [
                            r.f.Point({
                                name: "<= 1s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("1s");
                                },
                                qos: {
                                    cmdId: 99500
                                },
                            }),
                            r.f.Point({
                                name: "1s-5s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("5s");
                                },
                                qos: {
                                    cmdId: 99501
                                },
                            }),
                            r.f.Point({
                                name: "5s-10s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("10s");
                                },
                                qos: {
                                    cmdId: 99502
                                },
                            }),
                            r.f.Point({
                                name: "> 10s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e > r.b.time("10s");
                                },
                                qos: {
                                    cmdId: 99503
                                },
                            }),
                        ],
                    }),
                });
            var I = Object(r.d)({
                metrics: [b, P]
            });
            const M = Object(r.c)({
                    name: c.a.authenticate,
                    features: [a.b.start_up],
                    categories: [a.a.task_latency],
                    statement: Object(r.f)({
                        name: "authenticate",
                        points: [
                            r.f.Point({
                                name: "<= 1s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("1s");
                                },
                                qos: {
                                    cmdId: 99605
                                },
                            }),
                            r.f.Point({
                                name: "<= 2s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("2s");
                                },
                                qos: {
                                    cmdId: 99606
                                },
                            }),
                            r.f.Point({
                                name: "<= 5s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("5s");
                                },
                                qos: {
                                    cmdId: 99607
                                },
                            }),
                            r.f.Point({
                                name: "> 5s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e > r.b.time("5s");
                                },
                                qos: {
                                    cmdId: 99608
                                },
                            }),
                        ],
                    }),
                }),
                v = Object(r.c)({
                    name: c.a.start_up_time,
                    features: [a.b.start_up],
                    categories: [a.a.ux_latency],
                    fromProcess: [d.a.Main, d.a.Web],
                    startFromEpoch: !0,
                    disabled: !1,
                    statement: Object(r.f)({
                        name: "startup duration",
                        points: [
                            r.f.Point({
                                name: "<= 5s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("5s");
                                },
                                qos: {
                                    cmdId: 99600
                                },
                            }),
                            r.f.Point({
                                name: "5s-10s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("10s");
                                },
                                qos: {
                                    cmdId: 99601
                                },
                            }),
                            r.f.Point({
                                name: "10s-30s",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("30s");
                                },
                                qos: {
                                    cmdId: 99602
                                },
                            }),
                            r.f.Point({
                                name: "30s-1m",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e <= r.b.time("1m");
                                },
                                qos: {
                                    cmdId: 99603
                                },
                            }),
                            r.f.Point({
                                name: "> 1m",
                                condition: (t) => {
                                    let {
                                        duration: e
                                    } = t;
                                    return e > r.b.time("1m");
                                },
                                qos: {
                                    cmdId: 99604
                                },
                            }),
                        ],
                    }),
                });
            var w = Object(r.d)({
                    metrics: [M, v]
                }),
                q = n("MNz0");
            Object(r.c)({
                name: c.a.conv_load_1st_msg,
                features: [a.b.chat],
                categories: [a.a.ux_latency],
            });
            const y = Object(r.c)({
                name: c.a.open_conversation,
                features: [a.b.chat],
                categories: [a.a.ux_latency],
                mode: q.a.ACCEPT_LAST,
                statement: Object(r.f)({
                    name: "open conversation time",
                    points: [
                        r.f.Point({
                            name: "duration <= 1s",
                            condition: (t) => {
                                let {
                                    duration: e
                                } = t;
                                return e <= r.b.time("1s");
                            },
                            qos: {
                                cmdId: 99625
                            },
                        }),
                        r.f.Point({
                            name: "1s < duration <= 3s",
                            condition: (t) => {
                                let {
                                    duration: e
                                } = t;
                                return e <= r.b.time("3s");
                            },
                            qos: {
                                cmdId: 99626
                            },
                        }),
                        r.f.Point({
                            name: "3s < duration <= 10s",
                            condition: (t) => {
                                let {
                                    duration: e
                                } = t;
                                return e <= r.b.time("10s");
                            },
                            qos: {
                                cmdId: 99627
                            },
                        }),
                        r.f.Point({
                            name: "duration > 10s",
                            condition: (t) => {
                                let {
                                    duration: e
                                } = t;
                                return e > r.b.time("10s");
                            },
                            qos: {
                                cmdId: 99628
                            },
                        }),
                    ],
                }),
            });
            var R = Object(r.d)({
                metrics: [y]
            });
            const S = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    const [o] = e || [];
                    return {
                        avgFps: null == o ? void 0 : o.avgFps,
                        usageTime: null == o ? void 0 : o.usageTime,
                    };
                },
                T = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    const [o] = e || [];
                    return {
                        lowestDrop: null == o ? void 0 : o.lowestDrop,
                        maxFps: null == o ? void 0 : o.maxFps,
                    };
                },
                _ = (t) => {
                    var e, n;
                    return (
                        "arm" ===
                        (null == t || null === (e = t.systemInfo) || void 0 === e ?
                            void 0 :
                            e.arch) ||
                        "arm64" ===
                        (null == t || null === (n = t.systemInfo) || void 0 === n ?
                            void 0 :
                            n.arch)
                    );
                },
                D = Object(r.c)({
                    name: c.a.fps,
                    categories: [a.a.ux_latency],
                    statement: Object(r.f)({
                        name: "fps",
                        points: [
                            r.f.Point({
                                name: "usageTime <= 2m",
                                condition: function(t) {
                                    for (
                                        var e = arguments.length,
                                            n = new Array(e > 1 ? e - 1 : 0),
                                            o = 1; o < e; o++
                                    )
                                        n[o - 1] = arguments[o];
                                    const {
                                        usageTime: i
                                    } = S(...n);
                                    return !!(i && i <= r.b.time("2m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 12",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 12);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99609
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99629
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99617
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99637
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "12 < fps <= 23",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 23);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99610
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99630
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99618
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99638
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "[23,24] < fps <= 29",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 29);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99611
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99631
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99619
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99639
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "[29,30] < fps <= 60",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 60);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99612
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99632
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99620
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99640
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "usageTime > 2m",
                                condition: function(t) {
                                    for (
                                        var e = arguments.length,
                                            n = new Array(e > 1 ? e - 1 : 0),
                                            o = 1; o < e; o++
                                    )
                                        n[o - 1] = arguments[o];
                                    const {
                                        usageTime: i
                                    } = S(...n);
                                    return !!(i && i > r.b.time("2m"));
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 12",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 12);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99613
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99633
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99621
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99641
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "12 < fps <= 23",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 23);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99614
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99634
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99622
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99642
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "[23,24] < fps <= 29",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 29);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99615
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99635
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99623
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99643
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "[29,30] < fps <= 60",
                                        condition: function(t) {
                                            for (
                                                var e = arguments.length,
                                                    n = new Array(e > 1 ? e - 1 : 0),
                                                    o = 1; o < e; o++
                                            )
                                                n[o - 1] = arguments[o];
                                            const {
                                                avgFps: i
                                            } = S(...n);
                                            return !!(i && i <= 60);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Render,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99616
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99636
                                                        },
                                                    }),
                                                ],
                                            }),
                                            r.f.Point({
                                                name: "render",
                                                condition: (t) => t.processName === d.a.Web,
                                                points: [
                                                    r.f.Point({
                                                        name: "window & mac intel",
                                                        condition: (t) => !_(t),
                                                        qos: {
                                                            cmdId: 99624
                                                        },
                                                    }),
                                                    r.f.Point({
                                                        name: "mac m1",
                                                        condition: (t) => _(t),
                                                        qos: {
                                                            cmdId: 99644
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                A = Object(r.c)({
                    name: c.a.fps_lowest_drop,
                    categories: [a.a.ux_latency],
                    statement: r.f.Group(
                        Object(r.f)({
                            name: "lowest drop",
                            points: [
                                r.f.Point({
                                    name: "usageTime <= 2m",
                                    condition: (t) => {
                                        let {
                                            usageTime: e
                                        } = t;
                                        return e <= r.b.time("1m");
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "maxFps = 60",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    maxFps: i
                                                } = T(...n);
                                                return !!(null != i && i <= 60);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "fps <= 10",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i <= 10);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99645
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99653
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "10 < fps <= 25",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 10 && i <= 25);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99646
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99654
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "25 < fps <= 39",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 25 && i <= 39);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99647
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99655
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "39 < fps <= 49",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 39 && i <= 49);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99648
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99656
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "maxFps = 120",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    maxFps: i
                                                } = T(...n);
                                                return !!(null != i && i > 60 && i <= 120);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "fps <= 20",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i <= 20);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99661
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99669
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "20 < fps <= 50",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 20 && i <= 50);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99662
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99670
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "50 < fps <= 79",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 50 && i <= 79);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99663
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99671
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                r.f.Point({
                                                    name: "79 < fps <= 99",
                                                    condition: function(t) {
                                                        for (
                                                            var e = arguments.length,
                                                                n = new Array(e > 1 ? e - 1 : 0),
                                                                o = 1; o < e; o++
                                                        )
                                                            n[o - 1] = arguments[o];
                                                        const {
                                                            lowestDrop: i
                                                        } = T(...n);
                                                        return !!(null != i && i > 79 && i <= 99);
                                                    },
                                                    points: [
                                                        r.f.Point({
                                                            name: "window & mac intel",
                                                            condition: (t) => !_(t),
                                                            qos: {
                                                                cmdId: 99664
                                                            },
                                                        }),
                                                        r.f.Point({
                                                            name: "mac m1",
                                                            condition: (t) => _(t),
                                                            qos: {
                                                                cmdId: 99672
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.f)({
                            name: "lowest drop - all time",
                            points: [
                                r.f.Point({
                                    name: "maxFps = 60",
                                    condition: function(t) {
                                        for (
                                            var e = arguments.length,
                                                n = new Array(e > 1 ? e - 1 : 0),
                                                o = 1; o < e; o++
                                        )
                                            n[o - 1] = arguments[o];
                                        const {
                                            maxFps: i
                                        } = T(...n);
                                        return !!(null != i && i <= 60);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "fps <= 10",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i <= 10);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99649
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99657
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "10 < fps <= 25",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 10 && i <= 25);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99650
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99658
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "25 < fps <= 39",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 25 && i <= 39);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99651
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99659
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "39 < fps <= 49",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 39 && i <= 49);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99652
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99660
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "maxFps = 120",
                                    condition: function(t) {
                                        for (
                                            var e = arguments.length,
                                                n = new Array(e > 1 ? e - 1 : 0),
                                                o = 1; o < e; o++
                                        )
                                            n[o - 1] = arguments[o];
                                        const {
                                            maxFps: i
                                        } = T(...n);
                                        return !!(null != i && i > 60 && i <= 120);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "fps <= 20",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i <= 20);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99665
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99673
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "20 < fps <= 50",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 20 && i <= 50);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99666
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99674
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "50 < fps <= 79",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 50 && i <= 79);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99667
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99675
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "79 < fps <= 99",
                                            condition: function(t) {
                                                for (
                                                    var e = arguments.length,
                                                        n = new Array(e > 1 ? e - 1 : 0),
                                                        o = 1; o < e; o++
                                                )
                                                    n[o - 1] = arguments[o];
                                                const {
                                                    lowestDrop: i
                                                } = T(...n);
                                                return !!(null != i && i > 79 && i <= 99);
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window & mac intel",
                                                    condition: (t) => !_(t),
                                                    qos: {
                                                        cmdId: 99668
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "mac m1",
                                                    condition: (t) => _(t),
                                                    qos: {
                                                        cmdId: 99676
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ),
                });
            var x = Object(r.d)({
                    metrics: [D, A]
                }),
                N = n("AoYG");
            const B = (t) => {
                    var e;
                    return null == t || null === (e = t.data) || void 0 === e ?
                        void 0 :
                        e.cpuTotal;
                },
                C = (t) => {
                    var e;
                    return null == t || null === (e = t.data) || void 0 === e ?
                        void 0 :
                        e.memoryTotal;
                },
                O = Object(r.f)({
                    name: "CPU used",
                    points: [
                        r.f.Point({
                            name: "usage after 1m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("1m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99351
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99387
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99352
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99388
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99353
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99389
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99354
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99390
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 5m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("5m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99355
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99391
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99356
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99392
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99357
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99393
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99358
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99394
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 10m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("10m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99359
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99395
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99360
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99396
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99361
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99397
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99362
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99398
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 30m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("30m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99363
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99399
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99364
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99400
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99365
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99401
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99366
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99402
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 1h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("1h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99367
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99403
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99368
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99404
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99369
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99405
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99370
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99406
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 3h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("3h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99371
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99407
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99372
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99408
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99373
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99409
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99374
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99410
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 5h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("5h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99375
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99411
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99376
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99412
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99377
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99413
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99378
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99414
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 8h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("8h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99379
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99415
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99380
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99416
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99381
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99417
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99382
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99418
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 24h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("24h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99383
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99419
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99384
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99420
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99385
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99421
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99386
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99422
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 2 days",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("48h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99827
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99831
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99828
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99832
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99829
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99833
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99830
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99834
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 3 days",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("72h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "<= 20%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99835
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99839
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20% < cpuTotal <= 40%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 40);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99836
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99840
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "40% < cpuTotal <= 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e <= 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99837
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99841
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "cpuTotal > 70%",
                                    condition: (t) => {
                                        const e = B(t);
                                        return !!(null != e && e > 70);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99838
                                            },
                                        }),
                                        r.f.Point({
                                            name: "macos",
                                            condition: () => !1,
                                            qos: {
                                                cmdId: 99842
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                E = Object(r.f)({
                    name: "Memory used",
                    points: [
                        r.f.Point({
                            name: "usage after 1m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("1m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99207
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99243
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99279
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99315
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99208
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99244
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99280
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99316
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99209
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99245
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99281
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99317
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99210
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99246
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99282
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99318
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 5m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("5m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99211
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99247
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99283
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99319
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99212
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99248
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99284
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99320
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99213
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99249
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99285
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99321
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99214
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99250
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99286
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99322
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 10m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("10m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99215
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99251
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99287
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99323
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99216
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99252
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99288
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99324
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99217
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99253
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99289
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99325
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99218
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99254
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99290
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99326
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 30m",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("30m"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99219
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99255
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99291
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99327
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99220
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99256
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99292
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99328
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99221
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99257
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99293
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99329
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99222
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99258
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99294
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99330
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 1h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("1h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99223
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99259
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99295
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99331
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99224
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99260
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99296
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99332
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99225
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99261
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99297
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99333
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99226
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99262
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99298
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99334
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 3h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("3h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99227
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99263
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99299
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99335
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99228
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99264
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99300
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99336
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99229
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99265
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99301
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99337
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99230
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99266
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99302
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99338
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 5h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("5h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99231
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99267
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99303
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99339
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99232
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99268
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99304
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99340
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99233
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99269
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99305
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99341
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99234
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99270
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99306
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99342
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 8h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("8h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99235
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99271
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99307
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99343
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99236
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99272
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99308
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99344
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99237
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99273
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99309
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99345
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99238
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99274
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99310
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99346
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 24h",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("24h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99239
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99275
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99311
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99347
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99240
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99276
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99312
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99348
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99241
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99277
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99313
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99349
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99242
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99278
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99314
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99350
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 2 days",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("48h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99843
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99847
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99851
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99855
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99844
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99848
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99852
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99856
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99845
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99849
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99853
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99857
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99846
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99850
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99854
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99858
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "usage after 3 days",
                            condition: (t) => {
                                const e = r.b.extractPassedTime(t);
                                return !!(e && e <= r.b.time("72h"));
                            },
                            points: [
                                r.f.Point({
                                    name: "realMem <= 500MB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("500MB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99859
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99863
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99867
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99871
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "500MB < realMem <= 1GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("1GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99860
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99864
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99868
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99872
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "1GB < realMem <= 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e <= r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99861
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99865
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99869
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99873
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "realMem > 2GB",
                                    condition: (t) => {
                                        const e = C(t);
                                        return !!(null != e && e > r.b.bytes("2GB"));
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "RAM <= 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e <= r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99862
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99866
                                                    },
                                                }),
                                            ],
                                        }),
                                        r.f.Point({
                                            name: "RAM > 8GB",
                                            condition: (t) => {
                                                const e = r.b.extractRAM(t);
                                                return !!(null != e && e > r.b.bytes("8GB"));
                                            },
                                            points: [
                                                r.f.Point({
                                                    name: "window",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99870
                                                    },
                                                }),
                                                r.f.Point({
                                                    name: "macos",
                                                    condition: () => !1,
                                                    qos: {
                                                        cmdId: 99874
                                                    },
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                F = Object(r.f)({
                    name: "RAM usage summary",
                    points: [
                        r.f.Point({
                            name: "RAM <= 8GB",
                            condition: (t) => {
                                const e = r.b.extractRAM(t);
                                return !!(null != e && e <= r.b.bytes("8GB"));
                            },
                            qos: {
                                cmdId: 99773
                            },
                        }),
                        r.f.Point({
                            name: "RAM > 8GB",
                            condition: (t) => {
                                const e = r.b.extractRAM(t);
                                return !!(null != e && e > r.b.bytes("8GB"));
                            },
                            qos: {
                                cmdId: 99774
                            },
                        }),
                    ],
                }),
                U = Object(r.f)({
                    name: "CPU usage summary",
                    points: [
                        r.f.Point({
                            name: "",
                            condition: !0,
                            qos: {
                                cmdId: 99775
                            }
                        }),
                    ],
                }),
                G = Object(r.c)({
                    name: c.a.app_cpu_usage,
                    type: N.a.APP_USAGE,
                    categories: [a.a.usage],
                    statement: r.f.Group(O, U),
                }),
                k = Object(r.c)({
                    name: c.a.app_ram_usage,
                    type: N.a.APP_USAGE,
                    categories: [a.a.usage],
                    statement: r.f.Group(E, F),
                });
            var L = Object(r.d)({
                metrics: [G, k]
            });
            let j;
            (j || (j = {})).extractLowestFpsDrop = (t) => {
                var e, n;
                return {
                    lowestDrop: null == t || null === (e = t.data) || void 0 === e ?
                        void 0 :
                        e.lowestDrop,
                    maxFps: null == t || null === (n = t.data) || void 0 === n ?
                        void 0 :
                        n.maxFps,
                };
            };
            var z = j;
            const H = r.c.Fps({
                name: c.a.fps_scroll_conv_list,
                categories: [a.a.ux_latency],
                timeout: 5e3,
                statement: Object(r.f)({
                    name: "lowest FPS drop - scroll conv list",
                    points: [
                        r.f.Point({
                            name: "maxFps = 60",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e <= 60);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 10",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 10);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99677
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99681
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "10 < fps <= 25",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 10 && e <= 25);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99678
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99682
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "25 < fps <= 39",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 25 && e <= 39);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99679
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99683
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "39 < fps <= 49",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 39 && e <= 49);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99680
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99684
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "fps >= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return null == e;
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99786
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99787
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "maxFps = 120",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e > 60 && e <= 120);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 20",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99685
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99689
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20 < fps <= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 20 && e <= 50);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99686
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99690
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "50 < fps <= 79",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 50 && e <= 79);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99687
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99691
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "79 < fps <= 99",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 79 && e <= 99);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99688
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99692
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            });
            var W = Object(r.d)({
                metrics: [H]
            });
            const $ = r.c.Fps({
                    name: c.a.fps_switch_conv,
                    categories: [a.a.ux_latency],
                    timeout: 5e3,
                    statement: Object(r.f)({
                        name: "lowest FPS drop - switch conversation",
                        points: [
                            r.f.Point({
                                name: "maxFps = 60",
                                condition: (t) => {
                                    const {
                                        maxFps: e
                                    } = z.extractLowestFpsDrop(t);
                                    return !!(null != e && e <= 60);
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 10",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99693
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99697
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10 < fps <= 25",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 10 && e <= 25);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99694
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99698
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "25 < fps <= 39",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 25 && e <= 39);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99695
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99699
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "39 < fps <= 49",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 39 && e <= 49);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99696
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99700
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "fps >= 50",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return null == e;
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99788
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99789
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "maxFps = 120",
                                condition: (t) => {
                                    const {
                                        maxFps: e
                                    } = z.extractLowestFpsDrop(t);
                                    return !!(null != e && e > 60 && e <= 120);
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 20",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e <= 20);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99701
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99705
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "20 < fps <= 50",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 20 && e <= 50);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99702
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99706
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 < fps <= 79",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 50 && e <= 79);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99703
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99707
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "79 < fps <= 99",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 79 && e <= 99);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99704
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99708
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                K = r.c.Fps({
                    name: c.a.fps_jump_to_msg,
                    categories: [a.a.ux_latency],
                    timeout: 5e3,
                    statement: Object(r.f)({
                        name: "lowest FPS drop - jump to message",
                        points: [
                            r.f.Point({
                                name: "maxFps = 60",
                                condition: (t) => {
                                    const {
                                        maxFps: e
                                    } = z.extractLowestFpsDrop(t);
                                    return !!(null != e && e <= 60);
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 10",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e <= 10);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99709
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99713
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "10 < fps <= 25",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 10 && e <= 25);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99710
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99714
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "25 < fps <= 39",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 25 && e <= 39);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99711
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99715
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "39 < fps <= 49",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 39 && e <= 49);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99712
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99716
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "fps >= 50",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return null == e;
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99790
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99791
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            r.f.Point({
                                name: "maxFps = 120",
                                condition: (t) => {
                                    const {
                                        maxFps: e
                                    } = z.extractLowestFpsDrop(t);
                                    return !!(null != e && e > 60 && e <= 120);
                                },
                                points: [
                                    r.f.Point({
                                        name: "fps <= 20",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e <= 20);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99717
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99721
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "20 < fps <= 50",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 20 && e <= 50);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99718
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99722
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "50 < fps <= 79",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 50 && e <= 79);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99719
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99723
                                                },
                                            }),
                                        ],
                                    }),
                                    r.f.Point({
                                        name: "79 < fps <= 99",
                                        condition: (t) => {
                                            const {
                                                lowestDrop: e
                                            } = z.extractLowestFpsDrop(t);
                                            return !!(null != e && e > 79 && e <= 99);
                                        },
                                        points: [
                                            r.f.Point({
                                                name: "window & mac intel",
                                                condition: (t) => !r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99720
                                                },
                                            }),
                                            r.f.Point({
                                                name: "mac m1",
                                                condition: (t) => r.b.isM1(t),
                                                qos: {
                                                    cmdId: 99724
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            var V = Object(r.d)({
                metrics: [$, K]
            });
            const Q = r.c.Fps({
                name: c.a.fps_scroll_chat_box_view,
                categories: [a.a.ux_latency],
                timeout: 5e3,
                statement: Object(r.f)({
                    name: "lowest FPS drop - scroll chat box view",
                    points: [
                        r.f.Point({
                            name: "maxFps = 60",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e <= 60);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 10",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 10);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99725
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99729
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "10 < fps <= 25",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 10 && e <= 25);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99726
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99730
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "25 < fps <= 39",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 25 && e <= 39);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99727
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99731
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "39 < fps <= 49",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 39 && e <= 49);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99728
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99732
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "fps >= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return null == e;
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99792
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99793
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "maxFps = 120",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e > 60 && e <= 120);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 20",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99733
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99737
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20 < fps <= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 20 && e <= 50);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99734
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99738
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "50 < fps <= 79",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 50 && e <= 79);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99735
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99739
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "79 < fps <= 99",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 79 && e <= 99);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99736
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99740
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            });
            var X = Object(r.d)({
                metrics: [Q]
            });
            const J = r.c.Fps({
                name: c.a.fps_switch_main_tab,
                categories: [a.a.ux_latency],
                timeout: 5e3,
                statement: Object(r.f)({
                    name: "lowest FPS drop - switch main tab",
                    points: [
                        r.f.Point({
                            name: "maxFps = 60",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e <= 60);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 10",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 10);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99741
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99745
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "10 < fps <= 25",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 10 && e <= 25);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99742
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99746
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "25 < fps <= 39",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 25 && e <= 39);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99743
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99747
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "39 < fps <= 49",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 39 && e <= 49);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99744
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99748
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "fps >= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return null == e;
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99794
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99795
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "maxFps = 120",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e > 60 && e <= 120);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 20",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99749
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99753
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20 < fps <= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 20 && e <= 50);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99750
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99754
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "50 < fps <= 79",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 50 && e <= 79);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99751
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99755
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "79 < fps <= 99",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 79 && e <= 99);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99752
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99756
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            });
            var Z = Object(r.d)({
                metrics: [J]
            });
            const Y = r.c.Fps({
                name: c.a.fps_scroll_global_search_list,
                categories: [a.a.ux_latency],
                timeout: 5e3,
                statement: Object(r.f)({
                    name: "lowest FPS drop - scroll global search list",
                    points: [
                        r.f.Point({
                            name: "maxFps = 60",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e <= 60);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 10",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 10);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99757
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99761
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "10 < fps <= 25",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 10 && e <= 25);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99758
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99762
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "25 < fps <= 39",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 25 && e <= 39);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99759
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99763
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "39 < fps <= 49",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 39 && e <= 49);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99760
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99764
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "fps >= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return null == e;
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99796
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99797
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        r.f.Point({
                            name: "maxFps = 120",
                            condition: (t) => {
                                const {
                                    maxFps: e
                                } = z.extractLowestFpsDrop(t);
                                return !!(null != e && e > 60 && e <= 120);
                            },
                            points: [
                                r.f.Point({
                                    name: "fps <= 20",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e <= 20);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99765
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99769
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "20 < fps <= 50",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 20 && e <= 50);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99766
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99770
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "50 < fps <= 79",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 50 && e <= 79);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99767
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99771
                                            },
                                        }),
                                    ],
                                }),
                                r.f.Point({
                                    name: "79 < fps <= 99",
                                    condition: (t) => {
                                        const {
                                            lowestDrop: e
                                        } = z.extractLowestFpsDrop(t);
                                        return !!(null != e && e > 79 && e <= 99);
                                    },
                                    points: [
                                        r.f.Point({
                                            name: "window & mac intel",
                                            condition: (t) => !r.b.isM1(t),
                                            qos: {
                                                cmdId: 99768
                                            },
                                        }),
                                        r.f.Point({
                                            name: "mac m1",
                                            condition: (t) => r.b.isM1(t),
                                            qos: {
                                                cmdId: 99772
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            });
            var tt = Object(r.d)({
                metrics: [Y]
            });
            let et;
            (et || (et = {})).extractDataSize = (t) => {
                var e, n;
                return {
                    dataSize: null == t || null === (e = t.data) || void 0 === e ?
                        void 0 :
                        e.dataSize,
                    readableDataSize: null == t || null === (n = t.data) || void 0 === n ?
                        void 0 :
                        n.readableDataSize,
                };
            };
            var nt = et;
            const ot = Object(r.c)({
                name: c.a.e2ee_session_record_data_size,
                type: N.a.BINARY_SIZE,
                features: [a.b.e2ee],
                categories: [a.a.usage],
                statement: Object(r.f)({
                    name: "e2ee session record data size",
                    points: [
                        r.f.Point({
                            name: "< 64KB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e < r.b.bytes("64KB"));
                            },
                            qos: {
                                cmdId: 99780
                            },
                        }),
                        r.f.Point({
                            name: "64KB <= sessionSize < 128KB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e < r.b.bytes("128KB"));
                            },
                            qos: {
                                cmdId: 99781
                            },
                        }),
                        r.f.Point({
                            name: "128KB <= sessionSize < 512KB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e < r.b.bytes("512KB"));
                            },
                            qos: {
                                cmdId: 99782
                            },
                        }),
                        r.f.Point({
                            name: "512KB <= sessionSize < 2MB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e < r.b.bytes("2MB"));
                            },
                            qos: {
                                cmdId: 99783
                            },
                        }),
                        r.f.Point({
                            name: "2MB <= sessionSize < 5MB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e < r.b.bytes("5MB"));
                            },
                            qos: {
                                cmdId: 99784
                            },
                        }),
                        r.f.Point({
                            name: ">= 5MB",
                            condition: (t) => {
                                const {
                                    dataSize: e
                                } = nt.extractDataSize(t);
                                return !!(null != e && e >= r.b.bytes("5MB"));
                            },
                            qos: {
                                cmdId: 99785
                            },
                        }),
                    ],
                }),
            });
            var it = Object(r.d)({
                metrics: [ot]
            });
            e.default = Object(r.e)(
                Object(s.a)(
                    Object(s.a)({
                            usage: f,
                            dal: I,
                            fps: x,
                            startUp: w,
                            conversation: R,
                            appUsage: L,
                        },
                        o,
                    ),
                    i,
                ),
            );
        },
        MNz0: function(t, e, n) {
            "use strict";
            var o;
            !(function(t) {
                t.ACCEPT_LAST = "ACCEPT_LAST";
            })(o || (o = {})),
            (e.a = o);
        },
        Na1p: function(t, e, n) {
            "use strict";
            (function(t) {
                var o = n("VTBJ"),
                    i = n("ZgEe");
                const s = new(class {
                    constructor() {
                        (this.cpuTimer = void 0),
                        (this.cpuUsage = void 0),
                        (this.started = void 0),
                        (this.timer = void 0),
                        (this.usageHistory = void 0),
                        (this.listeners = void 0),
                        (this.config = {
                            PERIOD: 3e3,
                            HISTORY_SIZE: 100
                        }),
                        (this.usageHistory = []),
                        (this.listeners = []);
                    }
                    start(e) {
                        var n;
                        this.started ||
                            (!this.started &&
                                null !== (n = t) &&
                                void 0 !== n &&
                                n.cpuUsage &&
                                ((this.started = !0),
                                    (this.cpuTimer = new i.a()),
                                    (this.cpuUsage = t.cpuUsage()),
                                    e && (this.config.PERIOD = e.period),
                                    (this.timer = setTimeout(() => {
                                        this.calcUsage();
                                    }, this.config.PERIOD))));
                    }
                    stop() {
                        this.started && (clearTimeout(this.timer), (this.started = !1));
                    }
                    onChange(t, e) {
                        this.listeners.length &&
                            (this.listeners = this.listeners.filter((e) => e.id !== t)),
                            this.listeners.push({
                                id: t,
                                callback: e
                            });
                    }
                    removeListener(t) {
                        this.listeners.length &&
                            (this.listeners = this.listeners.filter((e) => e.id !== t));
                    }
                    calcUsage() {
                        var e;
                        const n = t.cpuUsage(),
                            s = this.cpuTimer.us,
                            r =
                            ((n.user -
                                    this.cpuUsage.user +
                                    (n.system - this.cpuUsage.system)) /
                                s) *
                            100,
                            a = Object(o.a)(Object(o.a)({}, n), {}, {
                                time: s,
                                percent: r
                            });
                        (this.cpuUsage = n),
                        (this.cpuTimer = new i.a()),
                        this.usageHistory.push({
                                data: a,
                                ts: Date.now()
                            }),
                            this.usageHistory.length > this.config.HISTORY_SIZE &&
                            this.usageHistory.shift(),
                            null !== (e = this.listeners) &&
                            void 0 !== e &&
                            e.length &&
                            this.listeners.forEach((t) => t.callback(a)),
                            this.started &&
                            (this.timer = setTimeout(() => {
                                this.calcUsage();
                            }, this.config.PERIOD));
                    }
                    getUsage() {
                        if (this.usageHistory.length)
                            return this.usageHistory[this.usageHistory.length - 1].data;
                        if (!this.cpuTimer) throw new Error("CPU Monitor does not started");
                        const e = t.cpuUsage(this.cpuUsage),
                            n = this.cpuTimer.us,
                            i = ((e.system + e.user) / n) * 100;
                        return Object(o.a)(Object(o.a)({}, e), {}, {
                            time: n,
                            percent: i
                        });
                    }
                })();
                e.a = s;
            }).call(this, n("ckNr"));
        },
        UxIX: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "default", function() {
                    return k;
                });
            var o = n("VTBJ"),
                i = n("EhJb"),
                s = n("Y65e"),
                r = n("dFSO"),
                a = n("f1TF"),
                c = n("N1xz"),
                d = n("CHYU"),
                m = n("h+6H");
            var l,
                u = n("rkiK"),
                f = n("KBA3"),
                p = n("rors");
            class h {
                constructor() {
                    (this.MAX_CACHED_LOGS = 500),
                    (this._logs = void 0),
                    (this.isEnabled = void 0);
                }
                get logs() {
                    return this._logs || (this._logs = []), this._logs;
                }
                setEnabled(t) {}
                write(t, e, n) {}
                checkAbleToEnable() {
                    if (null == this.isEnabled) {
                        var t;
                        "1" ===
                        (null === (t = c.a.ToolboxRenderer.getDebugger()) || void 0 === t ?
                            void 0 :
                            t.getPersistedDebugObj("mzLog")) &&
                        ((this.isEnabled = !0),
                            c.a.MetricTransporter.requestRun(
                                l || (l = Object(i.decrypt)("^UZYW^wT\\lIRO^I", ";")),
                            ));
                    }
                }
                flush() {
                    const t = [...this.logs];
                    (this._logs = []),
                    u.MetriczMessenger.send(p.c.saveLogsFromRenderer, t);
                }
            }
            var g,
                b,
                P,
                I,
                M,
                v,
                w,
                q,
                y,
                R,
                S,
                T,
                _,
                D,
                A,
                x,
                N,
                B,
                C,
                O,
                E,
                F,
                U,
                G;
            let k =
                ((g = u.MetriczMessenger.handler(p.c.getPersistedDebugObj)),
                    (b = Reflect.metadata("design:type", Function)),
                    (P = Reflect.metadata("design:paramtypes", [String])),
                    (I = class {
                        constructor() {
                            (this._logger = void 0),
                            (this._logWriter = void 0),
                            (this.persistedInfo = void 0),
                            (this.usageMonitor = void 0),
                            (this.persistedDebugObj = void 0),
                            this.createDebugCmds();
                        }
                        get Logger() {
                            return (
                                this._logger ||
                                (this._logger = c.a.createLogger("metrics-debugger")),
                                this._logger
                            );
                        }
                        toggleFpsFallingRecorder() {
                            if (c.a.process === d.a.Render || c.a.process === d.a.Web) {
                                var t;
                                const {
                                    ModuleContainer: e
                                } = n("jDHv"), {
                                    SidebarController: o
                                } = n("iZzu");
                                e.resolve(o).togglePerfTab(!0),
                                    null === (t = c.a.UIManager.Tool) ||
                                    void 0 === t ||
                                    t.toggleFpsFallingRecorder();
                            }
                        }
                        requestRun(t) {
                            for (
                                var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++
                            )
                                n[o - 1] = arguments[o];
                            return t ===
                                (M || (M = Object(i.decrypt)("\\^OwTXZWhOTIZ\\^hRA^", ";"))) ?
                                this._measureLocalStorageSize() :
                                t === (v || (v = Object(i.decrypt)("XTNUOoTOZWvH\\H", ";"))) ?
                                this._countTotalMsgs() :
                                t ===
                                (w ||
                                    (w = Object(i.decrypt)("I^H^OxNHOTVv^OIRX}WZ\\H", ";"))) ?
                                this._resetCustomMetricFlags(t, ...n) :
                                t === (q || (q = Object(i.decrypt)("\\^Ok^IHRHO^_", ";"))) ?
                                this._getPersisted((null == n ? void 0 : n[0]) || "") :
                                t ===
                                (y || (y = Object(i.decrypt)("\\^OkITX^HHv^VTIB", ";"))) ?
                                this.getProcessMemory() :
                                [
                                    R || (R = Object(i.decrypt)("\\^Or_YhRA^", ";")),
                                    S ||
                                    (S = Object(i.decrypt)(
                                        "\\^OwTXZWhOTIZ\\^kSBHRXZW}RW^HhRA^",
                                        ";",
                                    )),
                                    T || (T = Object(i.decrypt)("\\^OhJWRO^hRA^", ";")),
                                    _ ||
                                    (_ = Object(i.decrypt)("\\^OkITX^HHwRHO", ";")),
                                    D ||
                                    (D = Object(i.decrypt)(
                                        "\\^Oi^ZWv^VTIBhOZORHORXH",
                                        ";",
                                    )),
                                    A ||
                                    (A = Object(i.decrypt)(
                                        "\\^OkITX^HHv^VTIBhOZORHORXH",
                                        ";",
                                    )),
                                ].includes(t) ?
                                c.a.MetricTransporter.requestRun(t, ...n) :
                                void 0;
                        }
                        persistInfo(t) {
                            this.persistedInfo || (this.persistedInfo = new Map()),
                                this.persistedInfo.set(t.persistKey, t.info);
                        }
                        requestAppUsageMonitor(t, e) {
                            var n;
                            return null === (n = this.getUsageMonitor()) || void 0 === n ?
                                void 0 :
                                n.createSection(t, e);
                        }
                        async handleResponseRequestRun(t, e, n) {
                            var o;
                            if (e === (x || (x = Object(i.decrypt)("\\^Or_YhRA^", ";"))))
                                (null == t || !t.error) &&
                                (null == t ? void 0 : t.readableTotalSize) &&
                                (null === (o = c.a.UIManager.Tool) ||
                                    void 0 === o ||
                                    o.visualizeInfo({
                                        text: `metrics/idb_size: ${t.readableTotalSize}`,
                                    })),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    3e4,
                                    "MetricsDebugger/idbSize: {}",
                                    t,
                                );
                            else if (
                                e ===
                                (N ||
                                    (N = Object(i.decrypt)(
                                        "\\^OwTXZWhOTIZ\\^kSBHRXZW}RW^HhRA^",
                                        ";",
                                    )))
                            ) {
                                var s;
                                (null == t || !t.error) &&
                                (null == t ? void 0 : t.readableTotalSize) &&
                                (null === (s = c.a.UIManager.Tool) ||
                                    void 0 === s ||
                                    s.visualizeInfo({
                                        text: `metrics/localstorage_physical_files_size: ${t.readableTotalSize}`,
                                    })),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    30001,
                                    "MetricsDebugger/localStoragePhysicalFilesSize: {}",
                                    t,
                                );
                            } else if (
                                e === (B || (B = Object(i.decrypt)("\\^OhJWRO^hRA^", ";")))
                            ) {
                                var r;
                                (null == t || !t.error) &&
                                (null == t ? void 0 : t.readableTotalSize) &&
                                (null === (r = c.a.UIManager.Tool) ||
                                    void 0 === r ||
                                    r.visualizeInfo({
                                        text: `metrics/sqlite_db_size: ${t.readableTotalSize}`,
                                    })),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    30002,
                                    "MetricsDebugger/sqliteSize: {}",
                                    t,
                                );
                            } else if (
                                e === (C || (C = Object(i.decrypt)("MRHNZWRA^rU]T", ";")))
                            ) {
                                var a;
                                t.text &&
                                    (null === (a = c.a.UIManager.Tool) ||
                                        void 0 === a ||
                                        a.visualizeInfo({
                                            text: t.text
                                        }));
                            } else if (
                                e === (O || (O = Object(i.decrypt)("\\^Ok^IHRHO^_", ";")))
                            ) {
                                var d;
                                if (null != t && t.text)
                                    null === (d = c.a.UIManager.Tool) ||
                                    void 0 === d ||
                                    d.visualizeInfo({
                                        text: t.text
                                    }),
                                    this.Logger.zsymb(
                                        5,
                                        16652,
                                        30003,
                                        "MetricsDebugger/{}",
                                        t.text,
                                    );
                            } else if (
                                e ===
                                (E || (E = Object(i.decrypt)("nuhz}~d\\^OzWWkITX^HHnHZ\\^", ";")))
                            ) {
                                var m;
                                null === (m = this.getUsageMonitor()) ||
                                    void 0 === m ||
                                    m.onData(t);
                            } else if (
                                e === (F || (F = Object(i.decrypt)("\\^OkITX^HHwRHO", ";")))
                            )
                                this.visualizeProcessList(t),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    30004,
                                    "MetricsDebugger/process_list: {}",
                                    t,
                                );
                            else if (
                                e ===
                                (U || (U = Object(i.decrypt)("\\^Oi^ZWv^VTIBhOZORHORXH", ";")))
                            ) {
                                var l;
                                (null == t || !t.error) &&
                                (null == t ? void 0 : t.totalReadable) &&
                                (null === (l = c.a.UIManager.Tool) ||
                                    void 0 === l ||
                                    l.visualizeInfo({
                                        text: `metrics/real_memory_statistics: ${t.totalReadable}`,
                                    })),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    30005,
                                    "MetricsDebugger/realMemoryStatistics: {}",
                                    t,
                                );
                            } else if (
                                e ===
                                (G || (G = Object(i.decrypt)("\\^OkITX^HHv^VTIBhOZORHORXH", ";")))
                            ) {
                                var u;
                                (null == t || !t.error) &&
                                (null == t ? void 0 : t.totalReadable) &&
                                (null === (u = c.a.UIManager.Tool) ||
                                    void 0 === u ||
                                    u.visualizeInfo({
                                        text: `metrics/process_memory_statistics: ${t.totalReadable}`,
                                    })),
                                this.Logger.zsymb(
                                    5,
                                    16652,
                                    30006,
                                    "MetricsDebugger/processMemoryStatistics: {}",
                                    t,
                                );
                            }
                        }
                        createDebugCmds() {}
                        saveLog(t) {
                            this.LogWriter.write(Date.now(), c.a.process, t);
                        }
                        handleGetPersistedDebugObj(t) {
                            var e;
                            return null === (e = c.a.ToolboxRenderer.getDebugger()) ||
                                void 0 === e ?
                                void 0 :
                                e.getPersistedDebugObj(t);
                        }
                        get LogWriter() {
                            return (
                                this._logWriter || (this._logWriter = new h()), this._logWriter
                            );
                        }
                        _getPersisted(t) {
                            {
                                var e;
                                const o =
                                    null === (e = this.persistedInfo) || void 0 === e ?
                                    void 0 :
                                    e.get(t);
                                var n;
                                if (o)
                                    null === (n = c.a.UIManager.Tool) ||
                                    void 0 === n ||
                                    n.visualizeInfo({
                                        text: o.text
                                    }),
                                    this.Logger.zsymb(
                                        5,
                                        16652,
                                        30007,
                                        "MetricsDebugger/{}",
                                        o.text,
                                    );
                            }
                        }
                        async _measureLocalStorageSize() {
                            try {
                                var t, e;
                                let n = 0;
                                const i = window.localStorage.length;
                                if (!i) return;
                                let s,
                                    a = {},
                                    d = Date.now();
                                const l = [];
                                for (let t = 0; t < i; t++) {
                                    const e = localStorage.key(t);
                                    if (e) {
                                        const t = {
                                            keySize: Object(m.a)(e),
                                            valueSize: 0
                                        };
                                        l.push(
                                            new Promise((i) => {
                                                try {
                                                    const n = window.localStorage.getItem(e);
                                                    null != n && (t.valueSize = Object(m.a)(n));
                                                } catch (c) {}
                                                const r = t.keySize + t.valueSize;
                                                (n += r),
                                                (a[e] = t),
                                                (!s || s.size < r) &&
                                                (s = Object(o.a)(
                                                    Object(o.a)({}, s || {}), {}, {
                                                        key: e,
                                                        size: r
                                                    },
                                                )),
                                                i();
                                            }),
                                        );
                                    }
                                }
                                await Promise.all(l);
                                let u = Date.now();
                                const f = {
                                    totalSize: n,
                                    readableTotalSize: Object(r.c)(n),
                                    largestKey: Object(o.a)(
                                        Object(o.a)({}, s || {}), {}, {
                                            readableSize: null !== (t = s) && void 0 !== t && t.size ?
                                                Object(r.c)(s.size) :
                                                "",
                                        },
                                    ),
                                    took: `${Object(r.d)(u - d)}`,
                                    details: a,
                                };
                                null === (e = c.a.UIManager.Tool) ||
                                    void 0 === e ||
                                    e.visualizeInfo({
                                        text: `metrics/local_storage_size: ${f.readableTotalSize}`,
                                    }),
                                    this.Logger.zsymb(
                                        5,
                                        16652,
                                        30008,
                                        "MetricsDebugger/localStorageSize: {}",
                                        f,
                                    );
                            } catch (n) {
                                this.Logger.zsymb(
                                    23,
                                    16652,
                                    30009,
                                    "MetricsDebugger/localStorageSize: ERR {}",
                                    Object(a.b)(n),
                                );
                            }
                        }
                        async _countTotalMsgs() {
                            try {
                                var t;
                                const e = n("fsN4").default.getInstance(),
                                    o = await e.Core.Message.count();
                                null === (t = c.a.UIManager.Tool) ||
                                    void 0 === t ||
                                    t.visualizeInfo({
                                        text: `metrics/total_msgs: ${o}`
                                    }),
                                    this.Logger.zsymb(
                                        5,
                                        16652,
                                        30010,
                                        "MetricsDebugger/totalMsgs: {}",
                                        o,
                                    );
                            } catch (e) {
                                this.Logger.zsymb(
                                    23,
                                    16652,
                                    30011,
                                    "MetricsDebugger/totalMsgs: ERR {}",
                                    Object(a.b)(e),
                                );
                            }
                        }
                        async _resetCustomMetricFlags(t) {
                            try {
                                const t = n("igA5").default.getInstance();
                                new Promise((e) => {
                                    t.removeItemForCurrentUser("mz_storage"), e();
                                });
                            } catch (e) {}
                        }
                        getUsageMonitor() {}
                        visualizeProcessList(t, e) {
                            if (null != t && t.length) {
                                let o = e || 0,
                                    i = t[o];
                                var n;
                                if (i)
                                    null === (n = c.a.UIManager.Tool) ||
                                    void 0 === n ||
                                    n.visualizeInfo({
                                        text: `${i.name || i.type}|${i.pid} 👊🏽`
                                    }),
                                    setTimeout(() => {
                                        requestAnimationFrame(() => {
                                            this.visualizeProcessList(t, o + 1);
                                        });
                                    }, 1e3);
                            }
                        }
                        getProcessMemory() {
                            MetriczGlobal.getProcessMemory()
                                .then((t) => {
                                    var e;
                                    null === (e = c.a.UIManager.Tool) ||
                                        void 0 === e ||
                                        e.visualizeInfo({
                                            text: `metrics/memory: ${Object(r.c)(t)}`,
                                        }),
                                        this.Logger.zsymb(
                                            5,
                                            16652,
                                            30012,
                                            "MetricsDebugger/processMemory: {} ({})",
                                            t,
                                            Object(r.c)(t),
                                        );
                                })
                                .catch((t) => {
                                    this.Logger.zsymb(
                                        23,
                                        16652,
                                        30013,
                                        "MetricsDebugger/processMemory: ERR {}",
                                        Object(a.b)(t),
                                    );
                                });
                        }
                        persistDebugObj(t, e) {
                            if (!f.a.debugEnabled) return !1;
                            const i = n("igA5").default.getInstance();
                            if (!this.persistedDebugObj) {
                                this.persistedDebugObj = {};
                                const t = i.getItemForCurrentUser("debugmetricz");
                                if (t)
                                    try {
                                        const e = JSON.parse(t);
                                        this.persistedDebugObj = Object(o.a)({}, e);
                                    } catch (s) {}
                            }
                            return (
                                (this.persistedDebugObj[t] = e),
                                i.setItemForCurrentUser(
                                    "debugmetricz",
                                    JSON.stringify(this.persistedDebugObj),
                                ),
                                !0
                            );
                        }
                        deleteDebugObj(t) {
                            if (t) {
                                if (
                                    (this.getPersistedDebugObj(t) &&
                                        delete this.persistedDebugObj[t],
                                        Object.keys(this.persistedDebugObj).length)
                                ) {
                                    return void n("igA5")
                                        .default.getInstance()
                                        .setItemForCurrentUser(
                                            "debugmetricz",
                                            JSON.stringify(this.persistedDebugObj),
                                        );
                                }
                            }
                            this.persistedDebugObj = void 0;
                            n("igA5")
                                .default.getInstance()
                                .removeItemForCurrentUser("debugmetricz");
                        }
                        getPersistedDebugObj(t) {
                            if (f.a.debugEnabled) {
                                if (!this.persistedDebugObj) {
                                    const t = n("igA5").default.getInstance();
                                    this.persistedDebugObj = {};
                                    const i = t.getItemForCurrentUser("debugmetricz");
                                    if (i)
                                        try {
                                            const t = JSON.parse(i);
                                            this.persistedDebugObj = Object(o.a)({}, t);
                                        } catch (e) {}
                                }
                                return this.persistedDebugObj[t];
                            }
                        }
                    }),
                    Object(s.a)(
                        I.prototype,
                        "handleGetPersistedDebugObj",
                        [g, b, P],
                        Object.getOwnPropertyDescriptor(
                            I.prototype,
                            "handleGetPersistedDebugObj",
                        ),
                        I.prototype,
                    ),
                    I);
        },
        Xq9V: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n("N1xz"),
                i = n("igRa"),
                s = n("/Pmb");
            e.default = class {
                constructor(t, e) {
                    (this.onRevoke = t),
                    (this.config = e),
                    (this.fpsDropMonitor = void 0),
                    (this.fpsResult = void 0),
                    (this.finished = void 0),
                    (this.recordFpsHistory = (t) => {
                        this.fpsResult.fpsHistory.push({
                            fps: t.fps,
                            ts: t.now
                        });
                    }),
                    (this.fpsDropMonitor = new s.default(this.config)),
                    (this.fpsResult = {
                        fpsHistory: [],
                        dropped: []
                    });
                }
                start() {
                    this.fpsDropMonitor.onDropped((t) => {
                            this.fpsResult.dropped.push(t);
                        }),
                        this.fpsDropMonitor.start(),
                        o.a.UIManager.on(i.a.FPS, this.recordFpsHistory);
                }
                end() {
                    var t;
                    if (this.finished) return this.fpsResult;
                    this.finished = !0;
                    const e = this.fpsDropMonitor.end();
                    return (
                        o.a.UIManager.removeListener(i.a.FPS, this.recordFpsHistory),
                        null != e.lowestDrop &&
                        (this.fpsResult.lowestDropped = {
                            beforeDrop: e.beforeDrop,
                            lowestDrop: e.lowestDrop,
                            recoverTime: e.recoverTime,
                            afterRecover: e.afterRecover,
                            beforeDropTs: e.beforeDropTs,
                            recoverTs: e.recoverTs,
                            lowestDropTs: e.lowestDropTs,
                        }),
                        e.pendingResult && this.fpsResult.dropped.push(e.pendingResult),
                        (this.fpsResult.startAt = e.startAt),
                        (this.fpsResult.endAt = e.endAt),
                        (this.fpsResult.fpsHistory = this.fpsResult.fpsHistory.sort(
                            (t, e) => t.ts - e.ts,
                        )),
                        (this.fpsResult.dropped = this.fpsResult.dropped.sort((t, e) =>
                            t.beforeDropTs && e.beforeDropTs ?
                            t.beforeDropTs - e.beforeDropTs :
                            0,
                        )),
                        null === (t = this.onRevoke) || void 0 === t || t.call(this),
                        this.fpsResult
                    );
                }
            };
        },
        ZgEe: function(t, e, n) {
            "use strict";
            (function(t) {
                e.a = class {
                    constructor() {
                        (this.t0 = void 0), (this.t0 = t.hrtime.bigint());
                    }
                    get ms() {
                        const e = t.hrtime.bigint();
                        return Number((e - this.t0) / BigInt(1e6));
                    }
                    get us() {
                        const e = t.hrtime.bigint();
                        return Number((e - this.t0) / BigInt(1e3));
                    }
                };
            }).call(this, n("ckNr"));
        },
        cKAe: function(t, e, n) {
            "use strict";
            n.r(e);
            n("EqIC");
            var o = n("BGEY");
            var i = {
                enable: !0,
                allowLog: !1,
                mechanism: ["onunhandledrejection"],
                blacklistOriginException: [
                    "not support",
                    "reaction db timeout",
                    "off-feature",
                    "aborted!!",
                    "search: aborted!!",
                    "abort running too long",
                    "Message key not found. The counter was repeated or the key was not filled.",
                    "Bad MAC",
                    "timeout of 10000ms exceeded",
                    "Network Error",
                    "entry/data is not valid",
                    "invalid msg",
                ],
                blacklistSentryException: [
                    "Non-Error promise rejection captured with value: undefined",
                    "Non-Error promise rejection captured with keys:",
                    "Non-Error promise rejection captured with value:",
                    "DataError: Failed to execute 'put' on 'IDBObjectStore': Evaluating the object store's key path yielded a value that is not a valid key.",
                    "DataError: Failed to execute 'put' on 'IDBObjectStore': Evaluating the object store's key path did not yield a value.",
                    "DataError: Failed to execute 'delete' on 'IDBObjectStore': No key or key range specified.",
                    "InvalidStateError: Failed to execute 'transaction' on 'IDBDatabase': The database connection is closing.",
                    "FAIL_TO_OPEN_INVALID_STATE",
                    "Failed to PutOrAdd in database because not enough space for domain",
                    "Encountered full disk while opening backing store for indexedDB.open",
                    "The transaction is inactive or finished",
                ],
                preventAll: !1,
            };
            const s = {
                config: {
                    dsn: "https://182d4db70da74cf3adbc4e844aeb4256@senpc.api.zalo.me/2",
                    submitURL: "https://senpc.api.zalo.me/api/2/minidump/?sentry_key=182d4db70da74cf3adbc4e844aeb4256",
                    integrationFilter: i,
                },
            };
            var r = n("Lw/n"),
                a = n("VTBJ");
            var c = class {
                constructor(t) {
                    this.tag = t;
                }
                info() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                }
                error() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                }
            };
            var d = class {
                constructor(t) {
                    (this.name = "IntegrationEventFilter"),
                    (this.config = void 0),
                    (this.logger = new c("sentry-uhrf")),
                    (this.config =
                        "object" == typeof t ? Object(a.a)(Object(a.a)({}, i), t) : i),
                    this.logInfo("init success");
                }
                logInfo() {
                    this.config.allowLog && this.logger.info(...arguments);
                }
                _checkMatchMechanism(t) {
                    return (
                        !(!t.exception || "object" != typeof t.exception) &&
                        !!Array.isArray(t.exception.values) &&
                        !!t.exception.values.find((t) => {
                            const e = t.mechanism || {};
                            return (
                                !(!e.type && !Array.isArray(this.config.mechanism)) &&
                                this.config.mechanism.includes(e.type)
                            );
                        })
                    );
                }
                _checkInBlacklistOriginException(t) {
                    if (!t || "object" != typeof t) return !1;
                    const e = this.config.blacklistOriginException || [],
                        n = t.originalException || {};
                    if ("string" != typeof n.name) return !1;
                    if ("string" != typeof n.message) return !1;
                    return !!e.find((t) => {
                        if (t === n) return !0;
                        if (t && n instanceof Error) {
                            if (n.name.includes(t)) return !0;
                            if (n.message.includes(t)) return !0;
                        }
                        return !1;
                    });
                }
                _checkInBlacklistSentryException(t) {
                    const e = this.config.blacklistSentryException || [];
                    if (!t.exception || "object" != typeof t.exception) return !1;
                    if (!Array.isArray(t.exception.values)) return !1;
                    return !!t.exception.values.find((t) => {
                        const n = (t || {}).value;
                        return !!n && e.find((t) => n.includes(t));
                    });
                }
                _handleFilter(t, e) {
                    return this._checkMatchMechanism(t) &&
                        (this.config.preventAll ||
                            this._checkInBlacklistOriginException(e) ||
                            this._checkInBlacklistSentryException(t)) ?
                        null :
                        t;
                }
                setupOnce(t, e) {
                    t((t, e) => {
                        if (
                            (this.logInfo("receive event", {
                                    event: t,
                                    hint: e
                                }),
                                this.config.enable)
                        ) {
                            const n = this._handleFilter(t, e);
                            return this.logInfo("result filter", n), n;
                        }
                        return t;
                    });
                }
            };

            function m(t) {
                const e = (t) => (t ? `${t.function} ${t.colno} ${t.lineno}` : ""),
                    n = (function(t) {
                        const {
                            exception: e
                        } = t;
                        if (e)
                            try {
                                const t = e.values[0].type;
                                return `${t} ${e.values[0].value}`;
                            } catch (n) {
                                return "no message";
                            }
                        return "no message";
                    })(t),
                    o = (function(t) {
                        const {
                            exception: e,
                            stacktrace: n
                        } = t;
                        if (e)
                            try {
                                return e.values[0].stacktrace.frames;
                            } catch (o) {
                                return;
                            }
                        else if (n) return n.frames;
                        return;
                    })(t),
                    i = o && o.length;
                if (i && i > 0) {
                    const t = o[0],
                        s = o[i - 1];
                    return `${n} ${e(t)} ${e(s)}`;
                }
                return n;
            }
            var l = class {
                constructor(t, e) {
                    (this.sentry = t), (this.logger = e);
                }
                initSentry(t) {
                    let e = new Map();
                    const {
                        enable: n,
                        config: o
                    } = t;
                    if (n && o.dsn)
                        try {
                            this.sentry.init({
                                    dsn: o.dsn,
                                    integrations: (t) => (t.push(new d(o.integrationFilter)), t),
                                    release: "Zalo24.4.1",
                                    beforeSend: (t) => {
                                        let n = m(t);
                                        return (
                                            this.logger.info(`Message key error: ${n}`),
                                            e.has(n) ?
                                            (this.logger.info(
                                                    "Error already exists!. Not sent to server",
                                                ),
                                                null) :
                                            (e.set(n, !0),
                                                this.logger.info("sent error to sentry server"),
                                                t)
                                        );
                                    },
                                }),
                                this.logger.info("sentry init success");
                        } catch (i) {
                            this.logger.error("sentry init error", i);
                        }
                    else this.logger.info("Sentry is disable");
                }
            };
            class u extends l {
                constructor() {
                    super({
                        init: r.a
                    }, new c("sentry-web"));
                }
                static getInstance() {
                    return null === u._instance && (u._instance = new u()), u._instance;
                }
                install() {
                    const t = this.loadConfig();
                    this.initSentry(t);
                }
                loadConfig() {
                    const t = localStorage.getItem(`sh_${"stry_cf"}`);
                    try {
                        return t ? JSON.parse(t) : s;
                    } catch (e) {
                        return (
                            this.logger.error(
                                "Error when load config from storage, use default config",
                                e,
                            ),
                            s
                        );
                    }
                }
            }
            (u._instance = null),
            u.getInstance().install(),
                (async function() {
                    const t =
                        window.localStorage.getItem("sh_z_recentuid") ||
                        window.localStorage.getItem("z_recentuid");
                    await Object(o.b)(t);
                })().then(() =>
                    Promise.all([n.e(0), n.e(4), n.e(20), n.e(2), n.e(21)]).then(
                        n.bind(null, "qLCR"),
                    ),
                );
        },
        igRa: function(t, e, n) {
            "use strict";
            let o;
            n.d(e, "a", function() {
                    return o;
                }),
                (function(t) {
                    (t.FPS = "receive-fps"),
                    (t.DROP_FPS = "drop-fps"),
                    (t.TOGGLE_FPS_FALLING = "toggle-fps-falling-recorder"),
                    (t.VISUALIZE_INFO = "visualize-info");
                })(o || (o = {}));
        },
    });
//# sourceMappingURL=sourcemaps/render.9f33b1dcf7c950b8d2ae.js.map