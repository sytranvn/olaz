/** This could be the main source */
"object" != typeof globalThis && (globalThis = window),
  (this.webpackJsonp = this.webpackJsonp || []).push([
    [1],
    {
      "+7Kn": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        }),
          n.d(t, "d", function () {
            return a;
          }),
          n.d(t, "b", function () {
            return s;
          }),
          n.d(t, "g", function () {
            return o;
          }),
          n.d(t, "e", function () {
            return l;
          }),
          n.d(t, "f", function () {
            return c;
          }),
          n.d(t, "c", function () {
            return d;
          });
        var r = n("N0Be");
        class i extends Error {
          constructor(e) {
            super(
              `[MigrateActionManager] An action handler has already registered for ${e} action type!`,
            ),
              (this.name = r.a);
          }
        }
        class a extends Error {
          constructor(e) {
            super(
              `[MigrateActionManager] No action handler found for ${e} action type!`,
            ),
              (this.name = r.d);
          }
        }
        class s extends Error {
          constructor() {
            super(
              "[SecureKeysToMigrate] Invalid initialized data for SecureKeysToMigrate",
            ),
              (this.name = r.b);
          }
        }
        class o extends Error {
          constructor() {
            super(
              "[SecureKeysToMigrate] SecureKeysToMigrate hasn't been initialized yet!",
            ),
              (this.name = r.g);
          }
        }
        class l extends Error {
          constructor() {
            super("[SecureKeysToMigrate] Invalid secure indexedDB key"),
              (this.name = r.e);
          }
        }
        class c extends Error {
          constructor() {
            super(
              "[MigrateRule] Can't generate new key name due to the lack of userID",
            ),
              (this.name = r.f);
          }
        }
        class d extends Error {
          constructor() {
            super("[MigrateFlow] Migration stops due to timeout"),
              (this.name = r.c);
          }
        }
      },
      "+ExH": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return m;
        });
        var r = n("oRsZ"),
          i = n("IpiK"),
          a = n("d04y"),
          s = n("pRxM"),
          o = n("b3Jv"),
          l = n("4IGy"),
          c = n("xS/Y"),
          d = n("rdC+"),
          u = n("pP8i"),
          g = n("75G/");
        const m = {
          Core: r.a.schema,
          MsgInfo: i.a.schema,
          Qos: a.a.schema,
          Reaction: s.a.schema,
          Search: o.a.schema,
          Storage: l.a.schema,
          Res: c.a.schema,
          SecureLocalstorage: d.a.schema,
          ZLog: u.a.schema,
          Media: g.a.schema,
        };
      },
      "0Kvb": function (e, t) {},
      "12Ui": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("dal-qos-utils");
      },
      "1UUk": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return o;
          });
        var r = n("jDHv"),
          i = n("AH6j"),
          a = n("pjo1");
        n("PmZf");
        class s extends i.b {
          constructor() {
            super(...arguments), (this.session = void 0);
          }
          createQueryBuilder(e) {
            return r.ModuleContainer.resolve(a.a).createQueryBuilder(e);
          }
        }
        const o = Object(r.define)("database-manager");
      },
      "3EqI": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return i;
          });
        class r {
          constructor() {
            (this.pendings = void 0), (this.pendings = new Map());
          }
          markStart(e) {
            void 0 === e && (e = r.DEFAULT_JOB_ID);
            let t = () => {};
            const n = new Promise((e) => {
              t = e;
            }).finally(() => {
              this.pendings.delete(e);
            });
            this.pendings.set(e, { promise: n, resolver: t, fulfilled: !1 });
          }
          markEnd(e) {
            void 0 === e && (e = r.DEFAULT_JOB_ID);
            const t = this.pendings.get(e);
            t && ((t.fulfilled = !0), t.resolver());
          }
          isPending(e) {
            void 0 === e && (e = r.DEFAULT_JOB_ID);
            const t = this.pendings.get(e);
            return !!t && !t.fulfilled;
          }
          isDone(e) {
            return void 0 === e && (e = r.DEFAULT_JOB_ID), !this.isPending(e);
          }
          async wait(e) {
            void 0 === e && (e = r.DEFAULT_JOB_ID);
            const t = this.pendings.get(e);
            t && (await t.promise);
          }
          countPendings() {
            return this.pendings.size;
          }
        }
        r.DEFAULT_JOB_ID = "z1000";
        class i {
          constructor() {
            (this.jobQueue = {}),
              (this.auditor = void 0),
              (this.auditor = new r());
          }
          exec(e, t) {
            void 0 === e && (e = r.DEFAULT_JOB_ID),
              this.isPending(e) || this.auditor.markStart(e);
            const n = this.jobQueue[e] || Promise.resolve(),
              i = (this.jobQueue[e] = n.then(t, t));
            return (
              i.finally(() => {
                this.jobQueue[e] === i && delete this.jobQueue[e],
                  this.jobQueue[e] || this.auditor.markEnd(e);
              }),
              i
            );
          }
          isPending(e) {
            return this.auditor.isPending(e);
          }
          wait(e) {
            return this.auditor.wait(e);
          }
          countPendings() {
            return this.auditor.countPendings();
          }
        }
        const a = new i();
        t.c = a;
      },
      "3wcW": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return c;
        });
        var r = n("VTBJ"),
          i = n("jDHv"),
          a = n("Mgpg"),
          s = n("UK4g"),
          o = n("DI/x"),
          l = n("rvru");
        class c {
          constructor(e, t, n) {
            (this.partition = e),
              (this.instance = t),
              (this.allowMissingTable = n),
              (this.version = void 0),
              (this.logger = void 0);
            const r = i.ModuleContainer.resolve(a.ZLoggerFactory);
            this.logger = r.createZLogger(s.g, ["migrate-executor"]);
          }
          async upgrade(e, t) {
            if (null !== t) {
              if (
                (this.logger.zsymb(
                  4,
                  14540,
                  3e4,
                  "Database: {} - Version: from {} to {} - Start",
                  this.partition.database,
                  e,
                  t,
                ),
                e < this.partition.milestoneVersion)
              ) {
                0;
                const e = this.partition.tables.map((e) => ({
                  type: "create-table",
                  params: { table: e },
                }));
                this.logger.zsymb(
                  4,
                  14540,
                  30002,
                  "Database: {} - Create ALL tables: {}",
                  this.partition.database,
                  e.map((e) => {
                    let { params: t } = e;
                    return t.table.name;
                  }),
                ),
                  await this._applyMigrations(e);
              } else {
                this.logger.zsymb(
                  4,
                  14540,
                  30003,
                  "Database: {} - Create SOME tables",
                  this.partition.database,
                );
                const n = this.partition.tables;
                for (const i of n) {
                  const n = i.getMigrationInfos(this.partition.type);
                  if (0 === Object.keys(n).length) continue;
                  let a = e + 1;
                  for (; a <= t; ) {
                    const e = n[a];
                    if (e) {
                      const { scripts: t } = e,
                        n = t.map((e) => {
                          let t = e.params || {};
                          return Object(r.a)(
                            Object(r.a)({}, e),
                            {},
                            { params: Object(r.a)({ table: i }, t) },
                          );
                        });
                      this.logger.zsymb(
                        4,
                        14540,
                        30004,
                        "Database: {} - Current schema migrated version: {} - Table: {} - Action: {}",
                        this.partition.database,
                        a,
                        i.name,
                        n.map((e) => {
                          let { type: t } = e;
                          return t;
                        }),
                      ),
                        await this._applyMigrations(n);
                    }
                    a += 1;
                  }
                }
              }
              this.logger.zsymb(
                4,
                14540,
                30005,
                "Database: {} - Version: from {} to {} - Done",
                this.partition.database,
                e,
                t,
              );
            }
          }
          async validate() {
            const e = this.partition.tables,
              t = await this._getTables(),
              n = e.filter((e) => -1 === t.indexOf(e.tableName));
            if (n.length > 0) {
              const e = n.map((e) => e.tableName);
              if (!this.allowMissingTable) {
                0;
                throw (
                  (i.ModuleContainer.resolve(l.a).sendMissingTableQos(
                    this.partition.database,
                    e,
                  ),
                  new o.w(e))
                );
              }
              await this.createMissingTable(n);
            }
          }
          async _applyMigrations(e) {
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              switch (n.type) {
                case "create-table": {
                  const e = n.params.table,
                    t = { partition: this.partition.name, table: e.name };
                  this.logger.zsymb(0, 14540, 30007, "create table", t),
                    await this._createTable(e).catch((e) => {
                      throw (
                        (this.logger.zsymb(
                          18,
                          14540,
                          30008,
                          "create table error",
                          t,
                          e.message,
                        ),
                        e)
                      );
                    }),
                    this.logger.zsymb(0, 14540, 30009, "create table done", t);
                  break;
                }
                case "create-index": {
                  const { table: e, indexName: t } = n.params,
                    r = {
                      partition: this.partition.name,
                      table: e.name,
                      index: t,
                    };
                  this.logger.zsymb(0, 14540, 30010, "create index", r),
                    await this._createIndex(e, t).catch((e) => {
                      throw (
                        (this.logger.zsymb(
                          18,
                          14540,
                          30011,
                          "create index error",
                          r,
                          e.message,
                        ),
                        e)
                      );
                    }),
                    this.logger.zsymb(0, 14540, 30012, "create index done", r);
                  break;
                }
                case "add-column": {
                  const { table: e, columns: t } = n.params,
                    r = {
                      partition: this.partition.name,
                      table: e.name,
                      columns: t,
                    };
                  this.logger.zsymb(0, 14540, 30013, "add columns", r),
                    await this._addColumns(e, t).catch((e) => {
                      throw (
                        (this.logger.zsymb(
                          18,
                          14540,
                          30014,
                          "add columns error",
                          r,
                          e.message,
                        ),
                        e)
                      );
                    });
                  break;
                }
                default:
                  throw new o.z(`Unhandled '${n.type}' migration script.`);
              }
            }
          }
        }
      },
      "45ei": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        }),
          n.d(t, "d", function () {
            return a;
          }),
          n.d(t, "c", function () {
            return o;
          }),
          n.d(t, "b", function () {
            return l;
          }),
          n.d(t, "e", function () {
            return c;
          });
        var r = n("AH6j");
        let i;
        !(function (e) {
          (e.Start = "Start"),
            (e.InitServices = "InitServices"),
            (e.ServicesReady = "ServicesReady"),
            (e.Exit = "Exit"),
            (e.BeforeUnload = "BeforeUnload"),
            (e.Idle = "Idle"),
            (e.Active = "Active"),
            (e.FirstIdle = "FirstIdle"),
            (e.Authenticating = "Authenticating"),
            (e.Authenticated = "Authenticated"),
            (e.LogOut = "LogOut");
        })(i || (i = {}));
        class a extends r.a {
          constructor(e) {
            super(i.InitServices), (this.app = e);
          }
        }
        class s extends r.a {
          constructor(e, t) {
            super(e),
              (this.type = e),
              (this._session = void 0),
              (this.getSession = () => this._session),
              (this._session = t);
          }
        }
        class o extends s {
          constructor(e) {
            super(i.Authenticating, e);
          }
        }
        class l extends s {
          constructor(e) {
            super(i.Authenticated, e);
          }
        }
        class c extends r.a {
          constructor(e) {
            super(i.LogOut), (this.shouldClearData = e);
          }
        }
      },
      "4IGy": function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = {
            CocosRes: new s.d({
              tableName: "cocos-res",
              name: "CocosRes",
              fields: {
                path: { name: "path", type: i.g.string },
                data: { name: "data", type: i.g.json },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "path" }],
                  unique: !0,
                },
              },
            }),
            FriendBlocked: new s.d({
              tableName: "friend-blocked",
              name: "FriendBlocked",
              fields: {
                key: { name: "key", type: i.g.string },
                val: { name: "val", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "key" }],
                  unique: !0,
                },
              },
            }),
            InfoCache: new s.d({
              tableName: "info-cache",
              name: "InfoCache",
              fields: {
                key: { name: "key", type: i.g.string },
                val: { name: "val", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "key" }],
                  unique: !0,
                },
              },
            }),
            RetryCache: new s.d({
              tableName: "retry-cache",
              name: "RetryCache",
              fields: {
                key: { name: "key", type: i.g.string },
                val: { name: "val", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "key" }],
                  unique: !0,
                },
              },
            }),
            StChecksum: new s.d({
              tableName: "db-stchecksum",
              name: "StChecksum",
              fields: {
                checksum: { name: "checksum", type: i.g.string },
                url: { name: "url", type: i.g.string },
                size: { name: "size", type: i.g.integer },
                isGroup: { name: "isGroup", type: i.g.boolean },
                ts: { name: "ts", type: i.g.integer },
                zname: { name: "zname", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "checksum" }],
                  unique: !0,
                },
              },
            }),
          },
          c = { name: "Storage", session: !1 },
          d = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [a.a.const("Storage"), a.a.byTable()],
            partitionsMap: Object(o.a)(l),
          },
          u = {
            partitionNamingStrategy: [a.a.const("zlocalstorage")],
            partitionsMap: Object(o.b)(l),
          },
          g = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), d),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          m = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), u),
            {},
            { version: 5, milestoneVersion: 5, type: i.a.IDB },
          );
        let p = null,
          f = null;
        t.a = {
          schema: l,
          get useSqlite() {
            return null === p && (p = new s.a(g)), p;
          },
          get useIdb() {
            return null === f && (f = new s.a(m)), f;
          },
        };
      },
      "4W2c": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        });
        var r = n("DI/x"),
          i = n("YZti");
        class a extends class {
          constructor() {}
        } {
          constructor(e) {
            super(), (this.secureFields = e), (this.cipcherKey = "");
          }
          init(e) {
            this.cipcherKey = e;
          }
          toDB(e) {
            if ("" === this.cipcherKey)
              throw new r.j("Cipher key is unavailable!");
            for (let t = 0; t < this.secureFields.length; t++) {
              const n = this.secureFields[t];
              e[n] &&
                (e[n] = i.a.encrypt(JSON.stringify(e[n]), this.cipcherKey));
            }
          }
          fromDB(e) {
            if (e) {
              if ("" === this.cipcherKey)
                throw new r.j("Cipher key is unavailable!");
              for (let n = 0; n < this.secureFields.length; n++) {
                const r = this.secureFields[n];
                if ("string" == typeof e[r])
                  try {
                    e[r] = JSON.parse(i.a.decrypt(e[r], this.cipcherKey));
                  } catch (t) {}
              }
            }
          }
        }
      },
      "5Mf1": function (e, t) {},
      "6Sr9": function (e, t, n) {
        "use strict";
        n.d(t, "f", function () {
          return u;
        }),
          n.d(t, "c", function () {
            return g;
          }),
          n.d(t, "b", function () {
            return m;
          }),
          n.d(t, "d", function () {
            return p;
          }),
          n.d(t, "a", function () {
            return f;
          }),
          n.d(t, "e", function () {
            return y;
          });
        var r = n("jDHv"),
          i = n("45ei");
        const a = [],
          s = [],
          o = [],
          l = [],
          c = [],
          d = [];
        function u() {
          return function (e) {
            a.push(e);
          };
        }
        function g() {
          return function (e) {
            s.push(e);
          };
        }
        function m() {
          return function (e) {
            o.push(e);
          };
        }
        function p() {
          return function (e) {
            l.push(e);
          };
        }
        function f() {
          return function (e) {
            c.push(e);
          };
        }
        function y(e) {
          e.addEventListenerOnce(i.a.InitServices, (e) => {
            a.forEach((t) => {
              try {
                r.ModuleContainer.resolveToken(t).onStart(e);
              } catch (n) {}
            });
          }),
            e.addEventListenerOnce(i.a.Authenticating, (e) => {
              s.forEach((t) =>
                r.ModuleContainer.resolveToken(t).onAuthenticating(e),
              );
            }),
            e.addEventListenerOnce(i.a.Authenticated, (e) => {
              o.forEach((t) =>
                r.ModuleContainer.resolveToken(t).onAuthenticated(e),
              );
            }),
            e.addEventListenerOnce(i.a.ServicesReady, (e) => {
              c.forEach((t) =>
                r.ModuleContainer.resolveToken(t).onApplicationReady(e),
              );
            }),
            e.addEventListenerOnce(i.a.Exit, () => {
              l.forEach((e) => r.ModuleContainer.resolveToken(e).onDispose());
            }),
            e.addEventListenerOnce(i.a.LogOut, () => {
              d.forEach((e) =>
                r.ModuleContainer.resolveToken(e).onSessionExpired(),
              );
            });
        }
      },
      "6Vk1": function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
          return i;
        }),
          n.d(t, "c", function () {
            return a;
          }),
          n.d(t, "a", function () {
            return s;
          }),
          n.d(t, "b", function () {
            return o;
          });
        var r = n("jDHv");
        let i;
        !(function (e) {
          (e.LabelChange = "LabelChange"),
            (e.SelectedLabelChange = "SelectedLabelChange"),
            (e.LabelAddConvs = "LabelAddConvs"),
            (e.LabelRemoveConvs = "LabelRemoveConvs"),
            (e.RemoveLabel = "RemoveLabel");
        })(i || (i = {}));
        class a extends Event {
          constructor(e, t) {
            super(e), (this.payload = void 0), (this.payload = t);
          }
        }
        const s = "label-data-manager",
          o = Object(r.define)(s);
      },
      "75G/": function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("teaq"),
          a = n("xI/L"),
          s = n("YEoC"),
          o = n("C9Dv"),
          l = n("wH4e"),
          c = n("4W2c");
        const d = new i.d({
          tableName: "image",
          name: "Image",
          fields: {
            mediaId: { name: "mediaId", type: l.ValidDataType.string },
            convId: { name: "convId", type: l.ValidDataType.string },
            cliMsgId: { name: "cliMsgId", type: l.ValidDataType.string },
            fromUid: { name: "fromUid", type: l.ValidDataType.string },
            content: { name: "content", type: l.ValidDataType.json },
            type: { name: "type", type: l.ValidDataType.integer },
            src: { name: "src", type: l.ValidDataType.string },
            sendDttm: { name: "sendDttm", type: l.ValidDataType.integer },
            ttl: { name: "ttl", type: l.ValidDataType.integer },
            localPath: { name: "localPath", type: l.ValidDataType.string },
            previewThumb: {
              name: "previewThumb",
              type: l.ValidDataType.string,
            },
            modifiedTime: {
              name: "modifiedTime",
              type: l.ValidDataType.integer,
            },
            metadata: { name: "metadata", type: l.ValidDataType.json },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "mediaId" }],
              unique: !0,
            },
            convId_sendDttm_cliMsgId: {
              name: "convId_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !1,
            },
            convId_fromUid_sendDttm_cliMsgId: {
              name: "convId_fromUid_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "fromUid" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !0,
            },
          },
        });
        d.setAdapterSpecificConfigs(l.AdapterType.IDB, {
          transforms: [new c.a(["content", "localPath"])],
        }),
          d.setAdapterSpecificConfigs(l.AdapterType.SQLite, {});
        const u = new i.d({
          tableName: "file",
          name: "File",
          fields: {
            mediaId: { name: "mediaId", type: l.ValidDataType.string },
            convId: { name: "convId", type: l.ValidDataType.string },
            cliMsgId: { name: "cliMsgId", type: l.ValidDataType.string },
            fromUid: { name: "fromUid", type: l.ValidDataType.string },
            content: { name: "content", type: l.ValidDataType.json },
            type: { name: "type", type: l.ValidDataType.integer },
            src: { name: "src", type: l.ValidDataType.string },
            extType: { name: "extType", type: l.ValidDataType.string },
            sendDttm: { name: "sendDttm", type: l.ValidDataType.integer },
            ttl: { name: "ttl", type: l.ValidDataType.integer },
            modifiedTime: {
              name: "modifiedTime",
              type: l.ValidDataType.integer,
            },
            localPath: { name: "localPath", type: l.ValidDataType.string },
            folderPath: { name: "folderPath", type: l.ValidDataType.string },
            thumbMetadata: {
              name: "thumbMetadata",
              type: l.ValidDataType.json,
              nullable: !0,
            },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "mediaId" }],
              unique: !0,
            },
            convId_sendDttm_cliMsgId: {
              name: "convId_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !1,
            },
            convId_fromUid_sendDttm_cliMsgId: {
              name: "convId_fromUid_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "fromUid" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !0,
            },
            convId_extType_sendDttm_cliMsgId: {
              name: "convId_extType_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "extType" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !1,
            },
          },
        });
        u.setAdapterSpecificConfigs(l.AdapterType.IDB, {
          transforms: [new c.a(["content", "localPath", "folderPath"])],
        }),
          u.setAdapterSpecificConfigs(l.AdapterType.SQLite, {});
        const g = new i.d({
          tableName: "link",
          name: "Link",
          fields: {
            mediaId: { name: "mediaId", type: l.ValidDataType.string },
            convId: { name: "convId", type: l.ValidDataType.string },
            cliMsgId: { name: "cliMsgId", type: l.ValidDataType.string },
            fromUid: { name: "fromUid", type: l.ValidDataType.string },
            content: { name: "content", type: l.ValidDataType.json },
            type: { name: "type", type: l.ValidDataType.integer },
            src: { name: "src", type: l.ValidDataType.string },
            sendDttm: { name: "sendDttm", type: l.ValidDataType.integer },
            ttl: { name: "ttl", type: l.ValidDataType.integer },
            modifiedTime: {
              name: "modifiedTime",
              type: l.ValidDataType.integer,
            },
            parsedInfo: {
              name: "parsedInfo",
              type: l.ValidDataType.json,
              nullable: !0,
            },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "mediaId" }],
              unique: !0,
            },
            convId_sendDttm_cliMsgId: {
              name: "convId_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !1,
            },
            convId_fromUid_sendDttm_cliMsgId: {
              name: "convId_fromUid_sendDttm_cliMsgId",
              fields: [
                { type: "raw", field: "convId" },
                { type: "raw", field: "fromUid" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "cliMsgId" },
              ],
              unique: !0,
            },
          },
        });
        g.setAdapterSpecificConfigs(l.AdapterType.IDB, {
          transforms: [new c.a(["content", "parsedInfo"])],
        }),
          g.setAdapterSpecificConfigs(l.AdapterType.SQLite, {});
        const m = new i.d({
          tableName: "utils_media",
          name: "UtilsMedia",
          fields: {
            id: { name: "id", type: l.ValidDataType.string },
            convId: { name: "convId", type: l.ValidDataType.string },
            mediaType: { name: "mediaType", type: l.ValidDataType.string },
            senderIds: { name: "senderIds", type: l.ValidDataType.json },
            fileTypes: { name: "fileTypes", type: l.ValidDataType.json },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "id" }],
              unique: !0,
            },
          },
        });
        m.setAdapterSpecificConfigs(l.AdapterType.IDB, {}),
          m.setAdapterSpecificConfigs(l.AdapterType.SQLite, {});
        const p = { Image: d, File: u, Link: g, UtilsMedia: m },
          f = { name: "Media", session: !0 },
          y = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("Media"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(p),
          },
          h = {
            partitionNamingStrategy: [a.a.const("media"), a.a.byUser()],
            partitionsMap: Object(o.b)(p),
          },
          _ = Object(r.a)(
            Object(r.a)(Object(r.a)({}, f), y),
            {},
            { version: 1, milestoneVersion: 1, type: s.a.SQLite },
          ),
          b = Object(r.a)(
            Object(r.a)(Object(r.a)({}, f), h),
            {},
            { version: 1, milestoneVersion: 1, type: s.a.IDB },
          );
        let I = null,
          v = null;
        t.a = {
          schema: p,
          get useSqlite() {
            return null === I && (I = new i.a(_)), I;
          },
          get useIdb() {
            return null === v && (v = new i.a(b)), v;
          },
        };
      },
      "7FSS": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        const r = globalThis.zconsole || globalThis.console;
      },
      "7xKq": function (e, t) {},
      "8/YW": function (e, t, n) {
        "use strict";
        var r = n("45ei");
        n.d(t, "b", function () {
          return r.a;
        }),
          n.d(t, "c", function () {
            return r.d;
          });
        var i = n("Jcee");
        n.d(t, "a", function () {
          return i.a;
        });
        var a = n("6Sr9");
        n.d(t, "d", function () {
          return a.a;
        }),
          n.d(t, "e", function () {
            return a.b;
          }),
          n.d(t, "f", function () {
            return a.c;
          }),
          n.d(t, "g", function () {
            return a.d;
          }),
          n.d(t, "h", function () {
            return a.f;
          });
      },
      ADPh: function (e, t, n) {
        "use strict";
        n("d/or");
      },
      AH6j: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          });
        class r {
          constructor(e) {
            this.type = e;
          }
        }
        class i {
          constructor() {
            (this.events = void 0), (this.events = new Map());
          }
          getNumberListener() {
            return this.events.size;
          }
          addEventListener(e, t, n) {
            const r = e.toString();
            let i = this.events.get(r);
            i || ((i = []), this.events.set(r, i));
            const a = () => this.removeEventListener(e, t);
            if (!0 === (null == n ? void 0 : n.once)) {
              const e = t;
              t = (t) => (a(), e(t));
            }
            return i.push(t), a;
          }
          addEventListenerOnce(e, t) {
            return this.addEventListener(e, t, { once: !0 });
          }
          removeEventListener(e, t) {
            const n = e.toString(),
              r = this.events.get(n);
            if (!r) return;
            this.events.set(
              n,
              r.filter((e) => e !== t),
            );
          }
          removeAllEventListener() {
            this.events.clear();
          }
          dispatchEvent(e) {
            let t = this.events.get(e.type);
            if (t && 0 !== t.length) {
              t = t.slice();
              for (let n = 0; n < t.length; n++) {
                const r = t[n];
                r && r(e);
              }
            }
          }
        }
      },
      Abbu: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("YEoC");
        let i;
        var a;
        ((a = i || (i = {})).isBeginTransaction = function (e) {
          return e.type === r.d.BeginTransaction;
        }),
          (a.isCommitTransaction = function (e) {
            return e.type === r.d.CommitTransaction;
          }),
          (a.isInsertQuery = function (e) {
            return e.type === r.d.Insert;
          }),
          (a.isCloseDBQuery = function (e) {
            return e.type === r.d.CloseDB;
          }),
          (a.isDeleteDBQuery = function (e) {
            return e.type === r.d.DeleteDB;
          }),
          (a.isCloseAllDBsQuery = function (e) {
            return e.type === r.d.CloseAllDBs;
          }),
          (a.isDeleteAllDBsQuery = function (e) {
            return e.type === r.d.DeleteAllDBs;
          }),
          (a.isInTransaction = function (e) {
            return !!e.transaction;
          }),
          (a.isValid = function (e) {
            return !0;
          }),
          (a.isPartitionlessQuery = function (e) {
            return (
              e.type === r.d.BeginTransaction ||
              e.type === r.d.CommitTransaction
            );
          });
      },
      AoYG: function (e, t, n) {
        "use strict";
        var r;
        !(function (e) {
          (e.TIME = "TIME"),
            (e.MEMORY = "MEMORY"),
            (e.CPU = "CPU"),
            (e.USAGE = "USAGE"),
            (e.APP_USAGE = "APP_USAGE"),
            (e.FPS = "FPS"),
            (e.BINARY_SIZE = "BINARY_SIZE");
        })(r || (r = {})),
          (t.a = r);
      },
      BGEY: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return ue;
        }),
          n.d(t, "b", function () {
            return ge;
          });
        var r = n("Ff2n"),
          i = n("K0f4"),
          a = n("wudS"),
          s = n("bH0y"),
          o = n("buT3"),
          l = n("NFKh"),
          c = n.n(l);
        function d() {
          let e =
            window.localStorage.getItem("sh_z_uuid") ||
            window.localStorage.getItem("z_uuid");
          return (
            e ||
              ((e =
                (function () {
                  let e = new Date().getTime();
                  window.performance &&
                    "function" == typeof window.performance.now &&
                    (e += performance.now());
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/g,
                    function (t) {
                      let n = (e + 16 * Math.random()) % 16 | 0;
                      return (
                        (e = Math.floor(e / 16)),
                        ("x" == t ? n : (3 & n) | 8).toString(16)
                      );
                    },
                  );
                })() +
                "-" +
                c.a.MD5(navigator.userAgent).toString()),
              window.localStorage.setItem("sh_z_uuid", e)),
            e
          );
        }
        var u = n("gNXM");
        function g(e) {
          return "string" == typeof e
            ? e
            : "object" == typeof e
              ? JSON.stringify(e)
              : `${e}`;
        }
        const m = "MIGRATE_ACTION_TYPE/LOCAL_STORAGE/RENAME",
          p = "MIGRATE_ACTION_TYPE/LOCAL_STORAGE/DELETE",
          f =
            "MIGRATE_ACTION_TYPE/LOCAL_STORAGE/RENAME_AND_MARK_FOR_ENCRYPTION",
          y = "MIGRATE_ACTION_TYPE/IDB/RENAME",
          h = "MIGRATE_ACTION_TYPE/IDB/DELETE",
          _ = "MIGRATE_ACTION_TYPE/IDB/RENAME_AND_MARK_FOR_ENCRYPTION";
        class b {
          constructor(e, t, n) {
            (this.versionObject = void 0),
              (this.actionType = void 0),
              (this.data = void 0),
              (this.versionObject = e),
              (this.actionType = t),
              (this.data = n);
          }
        }
        class I {
          constructor(e) {
            (this._rule = null), (this._rule = e);
          }
        }
        class v {}
        class w extends b {
          constructor(e, t) {
            super(e, m, t);
          }
        }
        class D extends I {
          exec(e, t) {
            const { data: n } = this._rule,
              [r, i] = n,
              { dry: a, logger: s } = t || {},
              l = (e, t) => {
                a && s && s.log(`localStorage - Rename ${e} into ${t}`);
              };
            if (Array.isArray(r)) {
              for (const c of r)
                if (o.a.hasItem(c)) {
                  const t = "string" == typeof i ? i : i(e, c);
                  S(c, t), l(c, t);
                }
            } else {
              const t = r(e);
              if (Array.isArray(t)) {
                const n = t;
                for (const t of n)
                  if (o.a.hasItem(t)) {
                    const n = "string" == typeof i ? i : i(e, t);
                    S(t, n), l(t, n);
                  }
              } else {
                const n = t,
                  r = o.a.getAllKeyNames();
                for (const t of r)
                  if (n(t)) {
                    const n = t,
                      r = "string" == typeof i ? i : i(e, n);
                    S(n, r), l(n, r);
                  }
              }
            }
          }
        }
        class M extends v {
          createAction(e) {
            return new D(e);
          }
        }
        function S(e, t) {
          const n = o.a.getItem(e);
          o.a.removeItem(e), o.a.setItem(t, n);
        }
        class T extends I {
          exec(e, t) {
            const { data: n } = this._rule,
              r = n,
              { dry: i, logger: a } = t || {},
              s = (e) => {
                i && a && a.log(`localStorage - Delete ${e} `);
              };
            if (Array.isArray(r))
              for (const l of r) o.a.hasItem(l) && (E(l), s(l));
            else {
              const t = r(e);
              if (Array.isArray(t)) {
                const e = t;
                for (const t of e) o.a.hasItem(t) && (E(t), s(t));
              } else {
                const e = t,
                  n = o.a.getAllKeyNames();
                for (const t of n) e(t) && (E(t), s(t));
              }
            }
          }
        }
        class C extends v {
          createAction(e) {
            return new T(e);
          }
        }
        function E(e) {
          o.a.removeItem(e);
        }
        class A extends I {
          exec(e, t) {
            const { data: n } = this._rule,
              [r, i] = n,
              { dry: a, logger: s } = t || {},
              l = (e, t) => {
                a &&
                  s &&
                  (s.log(`localStorage - Rename ${e} into ${t}`),
                  s.log(
                    `localStorage - Will encrypt ${t} in its next key reading`,
                  ));
              };
            if (Array.isArray(r)) {
              for (const c of r)
                if (o.a.hasItem(c)) {
                  const t = "string" == typeof i ? i : i(e, c);
                  O(c, t), l(c, t);
                }
            } else {
              const t = r(e);
              if (Array.isArray(t)) {
                const n = t;
                for (const t of n)
                  if (o.a.hasItem(t)) {
                    const n = "string" == typeof i ? i : i(e, t);
                    O(t, n), l(t, n);
                  }
              } else {
                const n = t,
                  r = o.a.getAllKeyNames();
                for (const t of r)
                  if (n(t)) {
                    const n = t,
                      r = "string" == typeof i ? i : i(e, n);
                    O(n, r), l(n, r);
                  }
              }
            }
          }
        }
        class N extends v {
          createAction(e) {
            return new A(e);
          }
        }
        function O(e, t) {
          const n = o.a.getItem(e);
          o.a.removeItem(e), o.a.setItem(t, n), s.a.markLocalStorageKey(t);
        }
        var k = n("H/wq"),
          $ = n("gbvv");
        class x extends b {
          constructor(e, t) {
            super(e, y, t);
          }
        }
        class j extends I {
          async exec(e, t) {
            const { data: n } = this._rule,
              [r, i, a, s] = n,
              { dry: o, logger: l } = t || {},
              c = (e, t) => {
                o && l && l.log(`indexedDB - Rename ${e} into ${t}`);
              };
            let d = "";
            d = "string" == typeof r ? r : r(e);
            let g = null;
            try {
              g = await u.a.openExistedDB(d);
            } catch (p) {
              if (p.name === k.a) return;
              throw p;
            }
            const m = g.objectStoreNames;
            if (Array.isArray(i)) {
              const t = i;
              for (const n of t) m.contains(n) && (await L(e, g, n, a, s, c));
            } else {
              const t = i(e);
              if (Array.isArray(t)) {
                const n = t;
                for (const t of n) m.contains(t) && (await L(e, g, t, a, s, c));
              } else {
                const n = t,
                  r = Array.from(m);
                for (const t of r) n(t) && (await L(e, g, t, a, s, c));
              }
            }
          }
        }
        class U extends v {
          createAction(e) {
            return new j(e);
          }
        }
        async function L(e, t, n, r, i, a) {
          const s = t.transaction(n, "readwrite").objectStore(n),
            o = t.name,
            l = Object($.a)(o, n);
          if (!l) return void 0;
          const { keyPath: c } = l;
          if (Array.isArray(r)) {
            const t = r;
            for (const n of t) {
              if (!(await u.a.doesObjectStoreHaveKey(n, s))) continue;
              const t = "string" == typeof i ? i : i(e, n);
              await u.a.renameKeyOfObjectStore(n, t, s, c), a(n, t);
            }
          } else {
            const t = r(e);
            if (Array.isArray(t)) {
              const n = t;
              for (const t of n) {
                if (!(await u.a.doesObjectStoreHaveKey(t, s))) continue;
                const n = "string" == typeof i ? i : i(e, t);
                await u.a.renameKeyOfObjectStore(t, n, s, c), a(t, n);
              }
            } else {
              const n = t,
                r = await u.a.getAllKeyNamesOfObjectStore(s);
              for (const t of r) {
                if (!n(t)) continue;
                const r = "string" == typeof i ? i : i(e, t);
                await u.a.renameKeyOfObjectStore(t, r, s, c), a(t, r);
              }
            }
          }
        }
        class R extends b {
          constructor(e, t) {
            super(e, h, t);
          }
        }
        class z extends I {
          async exec(e, t) {
            const { data: n } = this._rule,
              [r, i, a] = n,
              { dry: s, logger: o } = t || {},
              l = (e) => {
                s && o && o.log(`indexedDB - Delete ${e}}`);
              };
            let c = "";
            c = "string" == typeof r ? r : r(e);
            let d = null;
            try {
              d = await u.a.openExistedDB(c);
            } catch (m) {
              if (m.name === k.a) return;
              throw m;
            }
            const g = d.objectStoreNames;
            if (Array.isArray(i)) {
              const t = i;
              for (const n of t) g.contains(n) && (await B(e, d, n, a, l));
            } else {
              const t = i(e);
              if (Array.isArray(t)) {
                const n = t;
                for (const t of n) g.contains(t) && (await B(e, d, t, a, l));
              } else {
                const n = t,
                  r = Array.from(g);
                for (const t of r) n(t) && (await B(e, d, t, a, l));
              }
            }
          }
        }
        class F extends v {
          createAction(e) {
            return new z(e);
          }
        }
        async function B(e, t, n, r, i) {
          const a = t.transaction(n, "readwrite").objectStore(n);
          if (Array.isArray(r)) {
            const e = r;
            for (const t of e) {
              (await u.a.doesObjectStoreHaveKey(t, a)) &&
                (await u.a.deleteKeyOfObjectStore(t, a), i(t));
            }
          } else {
            const t = r(e);
            if (Array.isArray(t)) {
              const e = t;
              for (const t of e) {
                (await u.a.doesObjectStoreHaveKey(t, a)) &&
                  (await u.a.deleteKeyOfObjectStore(t, a), i(t));
              }
            } else {
              const e = t,
                n = await u.a.getAllKeyNamesOfObjectStore(a);
              for (const t of n)
                e(t) && (await u.a.deleteKeyOfObjectStore(t, a), i(t));
            }
          }
        }
        class K extends b {
          constructor(e, t) {
            super(e, _, t);
          }
        }
        class P extends I {
          async exec(e, t) {
            const { data: n } = this._rule,
              [r, i, a, s] = n,
              { dry: o, logger: l } = t || {},
              c = (e, t) => {
                o &&
                  l &&
                  (l.log(`indexedDB - Rename ${e} into ${t}`),
                  l.log(
                    `indexedDB - Will encrypt ${t} in its next key reading`,
                  ));
              };
            let d = "";
            d = "string" == typeof r ? r : r(e);
            let g = null;
            try {
              g = await u.a.openExistedDB(d);
            } catch (p) {
              if (p.name === k.a) return;
              throw p;
            }
            const m = g.objectStoreNames;
            if (Array.isArray(i)) {
              const t = i;
              for (const n of t) m.contains(n) && (await V(e, g, n, a, s, c));
            } else {
              const t = i(e);
              if (Array.isArray(t)) {
                const n = t;
                for (const t of n) m.contains(t) && (await V(e, g, t, a, s, c));
              } else {
                const n = t,
                  r = Array.from(m);
                for (const t of r) n(t) && (await V(e, g, t, a, s, c));
              }
            }
          }
        }
        class q extends v {
          createAction(e) {
            return new P(e);
          }
        }
        async function V(e, t, n, r, i, a) {
          const o = t.transaction(n, "readwrite").objectStore(n),
            l = t.name,
            c = Object($.a)(l, n);
          if (!c) return void 0;
          const { keyPath: d } = c;
          if (Array.isArray(r)) {
            const t = r;
            for (const r of t) {
              if (!(await u.a.doesObjectStoreHaveKey(r, o))) continue;
              const t = "string" == typeof i ? i : i(e, r);
              await u.a.renameKeyOfObjectStore(r, t, o, d, () => {
                s.a.markIndexedDBKey(l, n, t);
              }),
                a(r, t);
            }
          } else {
            const t = r(e);
            if (Array.isArray(t)) {
              const r = t;
              for (const t of r) {
                if (!(await u.a.doesObjectStoreHaveKey(t, o))) continue;
                const r = "string" == typeof i ? i : i(e, t);
                await u.a.renameKeyOfObjectStore(t, r, o, d, () => {
                  s.a.markIndexedDBKey(l, n, r);
                }),
                  a(t, r);
              }
            } else {
              const r = t,
                c = await u.a.getAllKeyNamesOfObjectStore(o);
              for (const t of c) {
                if (!r(t)) continue;
                const c = "string" == typeof i ? i : i(e, t);
                await u.a.renameKeyOfObjectStore(t, c, o, d, () => {
                  s.a.markIndexedDBKey(l, n, c);
                }),
                  a(t, c);
              }
            }
          }
        }
        var G = n("+7Kn");
        const Q = new (class {
            constructor() {
              (this._actionFactories = new Map()), this.init();
            }
            init() {
              this.registerActionFactory(m, new M()),
                this.registerActionFactory(p, new C()),
                this.registerActionFactory(f, new N()),
                this.registerActionFactory(y, new U()),
                this.registerActionFactory(h, new F()),
                this.registerActionFactory(_, new q());
            }
            registerActionFactory(e, t) {
              if (this._actionFactories.has(e)) throw new G.a(e);
              this._actionFactories.set(e, t);
            }
            getActions(e) {
              const t = [];
              for (const n of e) {
                const { actionType: e } = n,
                  r = this.getActionFactory(e).createAction(n);
                t.push(r);
              }
              return t;
            }
            getActionFactory(e) {
              const t = this._actionFactories.get(e);
              if (!t) throw new G.d(e);
              return t;
            }
          })(),
          H = [
            "captcha_cert",
            "l-lg-t",
            "_config_new_remember",
            "_config_opt_remember",
            "z_admin_config",
            "language",
            "z_uuid",
            "z_recentp",
            "z_recoun",
            "z_reclogtype",
            "quest_cert",
            "already_login",
            "zpw_type",
            "zpw_ver",
            "app_ver",
            "e1cfeb1a59820a1ef96743cac2394fc4",
            "ADD_SYSTEM_INFO",
            "z_nom",
            "zcpu_messure_update",
            "zcpu_messure_recording",
            "last_inject_events",
            "gr_topics__pin_limit",
            "off_socket",
            "z_new_register",
            "FORGOT_PASSWORD",
            "zlast_uid",
            "z_recentin",
            "z_recentuid",
            "zlast_logout",
            "_need_set_remember",
            "_set_value_action_log",
            "FORCE_GET_FRIEND_LIST",
            "z_crdbSyncMsg",
            "z_needSyncMsg",
            "z_syncmsgInfo",
            "singleton_web_app",
            "z_lspop_faildb",
            "zlast_reset_db",
            "reset__zklastefid",
            "qos_url",
            "qos_lastRequestId",
            "_ud_launch_",
            "_remme_",
            "_rupd_",
            "_avblupd_",
            "_ud_what_new_",
            "_ud_new_version_",
            "_stry_cf_",
            "_s_ph_if_",
            "limit_pin_messages",
            "zipKey",
            "last_timeonapp_submit",
            "_firstCall",
            "zpc_log_submitted_at",
            "upload_log_client",
            "z_listroom_",
            "z_c_d_",
            "zv_cu",
            "zavi_download_dir",
            "__cookieStore__",
            "pcinfo",
            "mig_ver_sh",
            "user_ids",
            "zclr_res_pid",
            "domain-tool-v1-db-cache-data",
            "mig_lt_sh",
            "${userID}_viewerkey",
            "${userID}_cl_u_r_",
            "${userID}react_",
            "${userID}_deviceSettings",
          ],
          W = [
            "introduced-ttl-${userID}",
            "${userID}_g_token",
            "${userID}_d_token",
            "__list_recent_search__${userID}",
            "__list_recent_g_search__${userID}v2",
            "ttl-v1-${userID}",
            "ttl-v1-saved-${userID}",
            "fas_${userID}",
            "feat-pro-count-auto-replies-${userID}",
          ],
          Y = [
            "passCode",
            "timeOut",
            "_skip_stk_cat_",
            "lst_force_reset_db",
            "z_rdb_",
            "z_dl_media_setting",
            "z_dl_media_info",
            "recent_save_path",
            "text-file-editor-rect",
            "lstdm_",
            "filesPath",
            "z_lf_frl",
            "DB_TYPE_SETTING_KEY",
            "${userID}_ver_sticker_suggest",
            "${userID}_ver_giphy_suggest",
            "${userID}_ver_sticker_cate_list",
            "${userID}_ver_giphy_cate",
            "${userID}_ver_tenor_to_sticker",
            "zres_mgt_${userID}",
            "${userID}_preload_cache",
            "last_dttm_overflow_queue_${userID}",
            "${userID}_show_onboard_cata",
            "z_stw_${userID}",
            "ztipfol_${userID}",
            "z1gbftip_${userID}",
            "_rso_${userID}",
            "sticker_hint${userID}",
            "tg_hfg${userID}",
            "_lastLogSidebarState_${userID}",
            "z_sendtome_filessent_${userID}",
            "z_del_everyone_${userID}",
            "z_sendtome_supportpage_${userID}",
            "${userID}_gr_topics__force_sync",
            "${userID}_debugsignal",
            "call_st_autoAudioInput_${userID}",
            "call_st_autoAudioOutput_${userID}",
            "call_st_audioInput_${userID}",
            "call_st_audioInputVl_${userID}",
            "call_st_audioOutput_${userID}",
            "call_st_audioOutputVl_${userID}",
            "call_st_videoInput_${userID}",
            "call_auto_adjust_${userID}",
            "z1gbfpop_${userID}",
            "_clipboard_suggestion_${userID}",
            "_auto_sticker_${userID}",
            "_double_click_reply_${userID}",
            "z_sendtome_quicksend_${userID}",
            "${userID}__QM__showDashboardTooltip",
            "${userID}__QM__showEntrypointRedDot",
            "${userID}__QM__showSettingsRedDot",
            "${userID}__QM__showWelcome",
            "${userID}__QM__searchTutorialCount",
            "z_sendtome_bubbledot_${userID}",
            "z_sendtome_suggest_limit_${userID}",
            "${userID}_BUTTON_FRIEND_LIST",
            "${userID}_BUTTON_REQUEST_FRIEND",
            "${userID}_BUTTON_SEND_REQUEST_FRIEND",
            "${userID}_BUTTON_NEW_FRIEND",
            "f_nf_${userID}",
            "z_sendtome_${userID}",
            "z_sendtome_pinned_${userID}",
            "nlst_w_${userID}",
            "${userID}_zinit_sgg",
            "onboarding_flag_${userID}",
            "${userID}__dbtimepc",
            "overflowts_${userID}",
            "${userID}_data_pin_hidden_chat",
            "${userID}_data_ids_hidden_chat",
            "${userID}_config_show_unread_time",
            "${userID}_data_config_hidden_chat",
            "${userID}_zpinc",
            "me_ts_${userID}",
            "${userID}_signal_cur_opid",
            "${userID}_signalenable",
            "${userID}_signalsubdevices",
            "${userID}_signallastinit",
            "${userID}_signalreinitsub",
            "${userID}_signalrk",
            "recent_sticker_event_${userID}",
            "recent_card_event_${userID}",
            "${userID}_version_alias",
            "${userID}_time_alias",
            "${userID}_last_err_alias",
            "${userID}_ver_bl_friend",
            "${userID}_init_fetch_fr",
            "${userID}_last_time_fetch_fr_success",
            "${userID}_key_last_get_fr_status",
            "${userID}_last_time_req_to_me",
            "fr_req_src_${userID}",
            "${userID}_alias_key",
            "${userID}phonebook_ver_key",
            "${userID}_phonebook_key",
            "${userID}_time_update_pbook",
            "${userID}_last_err_pb",
            "${userID}_last_time_verify_fr_list",
            "${userID}_config_alias",
            "${userID}_z_uids_bl",
            "zrgf_${userID}",
            "${userID}_total_mem_per_fetch",
            "muq_${userID}",
            "${userID}_cdkl",
            "${userID}_cdk",
            "${userID}_last_ack_evict",
            "lsmsg_${userID}",
            "askNoti_${userID}",
            "acv2_${userID}",
            "ac_${userID}",
            "aco_${userID}",
            "sock_msg_${userID}",
            "sock_ac_${userID}",
            "sock_aco_${userID}",
            "actrv2_${userID}",
            "actr_${userID}",
            "actro_${userID}",
            "${userID}_show_sidebar_cata",
            "${userID}_cata_ver",
            "${userID}__QM__lastUpdate",
            "zretry_v1__${userID}",
            "mgrk_${userID}",
            "mgripck_v4_${userID}",
            "z_trackfollow_v2${userID}",
            "z_tracktimesearch${userID}",
            "z_his_decay${userID}",
            "z_trackfrecency_v2${userID}",
            "z_sound_${userID}",
            "z_cleardata_${userID}",
            "z_e2ee_times_${userID}",
            "z_chatbg_${userID}",
            "z_capzalo_${userID}",
            "z_scrshot_hotkey_${userID}",
            "z_scrshot_hotkey_withoutZ_${userID}",
            "z_ytpr_${userID}",
            "z_ivap_${userID}",
            "z_ivaps_${userID}",
            "z_tptm_${userID}",
            "z_contact_${userID}",
            "z_copy_excel_${userID}",
            "z_suggestMentions_${userID}",
            "z_todoEventRemind_${userID}",
            "z_file_enable_auto_download_${userID}",
            "z_file_enable_thumbnail_${userID}",
            "z_file_white_list_${userID}",
            "z_text_file_editor_wrap_${userID}",
            "z_enable_notify_call_${userID}",
            "${userID}_z_sc",
            "${userID}_lff_",
            "${userID}_ver_pin",
            "${userID}_LAST_CONTACT_LIST_OPEN",
            "hfresetac355_${userID}",
            "${userID}_rs",
            "${userID}_remo",
            "${userID}_s_stk",
            "${userID}_st-on-dock",
            "${userID}_st-ver_",
            "${userID}_rm_s",
            "lbl_${userID}",
            "z_mdbk_${userID}",
            "${userID}_ib",
            "${userID}_off_tip_",
            "${userID}_cot",
            "${userID}_rate",
            "${userID}_bd",
            "${userID}_lbl-info",
            "${userID}__imlc",
            "${userID}__imlp",
            "${userID}_unrImsg",
            "${userID}_upss",
            "sock_pgm_${userID}",
            "${userID}iurc_",
            "${userID}dmn_",
            "${userID}__gbunread",
            "${userID}_dmar",
            "${userID}_dst",
            "${userID}_wn",
            "${userID}_ri",
            "${userID}_emo",
            "${userID}_h_n_stck",
            "${userID}_efs",
            "${userID}_pfs",
            "${userID}_grv",
            "${userID}_nsp_",
            "${userID}_lstCrS",
            "${userID}_cpa",
            "${userID}___sdbs",
            "${userID}_un_td",
            "${userID}_51area",
            "${userID}_adtd",
            "${userID}_adtdm",
            "${userID}_arotd",
            "${userID}_n_up_t",
            "${userID}_ta",
            "${userID}_fcbt",
            "${userID}_daet",
            "${userID}_bnbs",
            "${userID}_lused-lbl",
            "${userID}_z_jumpurl",
            "${userID}_inc_m_",
            "${userID}_z_cngc",
            "${userID}_tvi",
            "${userID}_tbsh",
            "${userID}_wps",
            "${userID}_wfs",
            "${userID}_m_u_f",
            "${userID}u_l_f",
            "${userID}_z_u_s",
            "${userID}_lbl_coll",
            "${userID}_lbl-intro",
            "${userID}_right_sb",
            "${userID}__update_gi",
            "${userID}_rem_pn",
            "${userID}_conv_ux_ver",
            "${userID}_conv_ux_mul_lbl",
            "${userID}_conv_ux_ec",
            "${userID}_cls_m_b",
            "${userID}_conv_tr_inf",
            "${userID}_bt",
            "${userID}_z_phonebook_version",
            "${userID}_l_r_msg",
            "z_sync_key__${userID}",
            "z_sync_wr_key__${userID}",
            "${userID}_showCf",
            "z_sync_stt${userID}",
            "mgrthreadmsgk_v2_${userID}",
            "zthrpendingact_${userID}",
            "${userID}_room_end_meeting",
            "z_frl_${userID}",
            "lastfilepath_${userID}",
            "lastimagepath_${userID}",
            "_dk_stk_${userID}",
            "${userID}_lbl_ver",
            "${userID}_signalserverenable",
            "${userID}_mig_ver_usr",
            "${userID}_mig_lt_usr",
            "INIT_FRIEND_BA${userID}",
            "${userID}_fdn_",
            "${userID}___recent_catalog__",
            "${userID}_rec_pack",
            "NEED_FETCH_PROFILE_ME${userID}",
            "${userID}sync_cross_settings",
            "${userID}_citk",
            "${userID}_sktmig",
            "${userID}_key_last_fetch_group",
            "${userID}_z_b__a_view_onboarding_state",
            "${userID}_z_b__a_view_business_user_status",
            "${userID}_z_b__a_view_business_profile",
            "${userID}_z_b__a_first_upgrade_business_account",
          ],
          Z = [
            "diskCacheInfos",
            "lastTimeGetDiskCacheInfos",
            "__ta__dev__",
            "isAutoScroll",
            "isAlwaysOnTop",
            "filterByName",
            "sticker_cf_v3",
            "sticker_v3",
            "feedback_clicked",
            "ztypsp_",
            "__STORAGE_WARN_TIMESTAMP__",
            "IS_FACEBOOK_LOGIN",
            "NEED_GET_COOKIE_MP3",
            "z_os_lastSession",
            "zfl_disable_discovery_v2",
            "__lstsbnet_",
            "last-msgid-sock",
            "last-queue-poll",
            "en_zshop",
            "z_auto_dl_msg-setting",
            "z_auto_dl_msg-info",
            "zdb_setting",
            "zroll_qc",
            "${userID}_time_begin_promote",
            "last_stk_${userID}",
            "${userID}_show_popup_del",
            "last_sc${userID}",
            "${userID}_fr_has_convs",
            "zmigrate_${userID}_lastId",
            "zmigrate_${userID}",
            "zmigrate_${userID}_sch",
            "zmigrate_${userID}_total",
            "zmigrate_${userID}_stat",
            "zmigrate_${userID}_er",
            "${userID}_z_spfonl_",
            "z_trackthk${userID}",
            "z_trackfollow${userID}",
            "z_trackfrecency${userID}",
            "z_e2ee_file_times_${userID}",
            "z_theme_${userID}",
            "z_ytcf_${userID}",
            "__list_recent_g_search__${userID}",
            "${userID}_st-first-time",
            "${userID}_st-mg_",
            "${userID}_bn",
            "${userID}_cstk",
            "${userID}_gbrt",
            "${userID}_gbin",
            "${userID}_gbgn",
            "${userID}_awf",
            "${userID}_qe",
            "${userID}_tmem",
            "${userID}_off_pr_st",
            "${userID}_mig_mention_v1",
            "${userID}_nnc",
            "${userID}_rctfm",
            "${userID}_tasks",
            "${userID}_cte",
            "${userID}_tte",
            "${userID}__zptd",
            "${userID}_ztbd",
            "${userID}_c_p_",
            "${userID}_tdlv",
            "${userID}__zlnt",
            "update-to-use-vanish-${userID}",
            "set-vanish--succeed${userID}",
          ];
        function J(e) {
          return e.startsWith("sh_");
        }
        function X(e, t) {
          if (!Object(a.a)(e)) return !1;
          const n = Object(a.b)(e);
          return t.startsWith(`${n}_`);
        }
        function ee(e) {
          return (
            !!["zinsrc", "tmpr"].some((t) => e.startsWith(`${t}_`)) ||
            H.some((t) => {
              const n = "^" + t.replace("${userID}", "[0-9]+") + "$";
              return new RegExp(n, "g").test(e);
            })
          );
        }
        function te(e, t) {
          return (
            !(!t.startsWith("hide-fbadge") || !t.endsWith(e)) ||
            t === `$auto-replies-state-v1-${e}` ||
            W.some((n) => {
              const r = n.replace("${userID}", e);
              return t.includes(r);
            })
          );
        }
        function ne(e, t) {
          if (t.startsWith(`${e}_z_ml_`)) return !0;
          if (t.startsWith(`${e}_`) && t.endsWith("_lastReceiveTs")) return !0;
          if (t.startsWith(`${e}_tabmsg.header_`)) return !0;
          if (t.startsWith(`TIP_CARD_ID_${e}_`)) return !0;
          if (t.startsWith(`TIP_PROMO_ICON_ID_${e}_`)) return !0;
          if (t.startsWith(`TIP_EFFECT_ID_${e}_`)) return !0;
          if (t.startsWith(`_recent_card_p_${e}_`)) return !0;
          if (t.startsWith(`zklastefid_${e}_`)) return !0;
          let n = t.split("_");
          return (
            (2 === n.length && n[0] === e && !isNaN(Number(n[1]))) ||
            !!t.startsWith(`${e}_z_bl_`) ||
            !!t.includes("lstfpmedia") ||
            !!t.startsWith(`${e}_z_frq_`) ||
            !!t.startsWith(`${e}_at_k_`) ||
            !(!t.startsWith(e) || !t.endsWith("_z_clmt")) ||
            !!t.startsWith(`sock_verfy_${e}`) ||
            !!t.startsWith(`z_retry_${e}_`) ||
            !!t.startsWith(`${e}_mact_`) ||
            !!t.startsWith(`${e}_mhasm_`) ||
            ((n = t.split("_")),
            !(
              (3 !== n.length && 4 !== n.length) ||
              n[0] !== e ||
              isNaN(Number(n[2]))
            ) ||
              !!t.startsWith(`${e}_sync_cross_state`) ||
              Y.some((n) => {
                const r = n.replace("${userID}", e);
                return t === r;
              }))
          );
        }
        function re(e) {
          if (e.includes("_rpk_")) return !0;
          if (e.endsWith("_signalssgr")) return !0;
          if (
            [
              "image",
              "fetchedImages",
              "file",
              "fetchedFiles",
              "link",
              "fetchedLinks",
            ].some((t) => e.endsWith(`${t}`))
          )
            return !0;
          if (e.includes("_z_srq_name_")) return !0;
          return (
            !!/^[0-9]{19}_msg_/g.test(e) ||
            Z.some((t) => {
              const n = "^" + t.replace("${userID}", "[0-9]+") + "$";
              return new RegExp(n, "g").test(e);
            })
          );
        }
        var ie = [
          ...[
            new w({ currentSharedKeyVer: 0, targetVer: 1 }, [
              () => (e) => ee(e) && !J(e),
              (e, t) => {
                let n = t;
                const r = ["deviceSettings", "viewerkey", "_cl_u_r_", "react_"];
                for (const i of r)
                  if (t.endsWith(i)) {
                    const e = /^[_-]+|[_-]+$/g;
                    n = i.replace(e, "");
                    break;
                  }
                return `sh_${n}`;
              },
            ]),
            new w({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              (e) => (e ? (t) => ne(e, t) && !X(e, t) : []),
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
            new (class extends b {
              constructor(e, t) {
                super(e, p, t);
              }
            })(
              {
                currentSharedKeyVer: 0,
                currentUserScopedKeyVer: 0,
                targetVer: 1,
              },
              () => (e) => re(e),
            ),
            new (class extends b {
              constructor(e, t) {
                super(e, f, t);
              }
            })({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              (e) => (e ? (t) => te(e, t) && !X(e, t) : []),
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                if (t === `$auto-replies-state-v1-${e}`)
                  return `${n}_auto-replies-state-v1`;
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
            new x({ currentSharedKeyVer: 0, targetVer: 1 }, [
              "zlocalstorage",
              ["friend-blocked", "info-cache", "retry-cache"],
              () => (e) => "string" == typeof e && ee(e) && !J(e),
              (e, t) => {
                let n = t;
                const r = ["deviceSettings", "viewerkey", "_cl_u_r_", "react_"];
                for (const i of r)
                  if (t.endsWith(i)) {
                    const e = /^[_-]+|[_-]+$/g;
                    n = i.replace(e, "");
                    break;
                  }
                return `sh_${n}`;
              },
            ]),
            new x({ currentSharedKeyVer: 0, targetVer: 1 }, [
              "zsecure-localstorage",
              ["async-store"],
              () => (e) => "string" == typeof e && ee(e) && !J(e),
              (e, t) => {
                let n = t;
                const r = ["deviceSettings", "viewerkey", "_cl_u_r_", "react_"];
                for (const i of r)
                  if (t.endsWith(i)) {
                    const e = /^[_-]+|[_-]+$/g;
                    n = i.replace(e, "");
                    break;
                  }
                return `sh_${n}`;
              },
            ]),
            new x({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              "zlocalstorage",
              ["friend-blocked", "info-cache", "retry-cache"],
              (e) =>
                e ? (t) => "string" == typeof t && ne(e, t) && !X(e, t) : [],
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
            new x({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              "zsecure-localstorage",
              ["async-store"],
              (e) =>
                e ? (t) => "string" == typeof t && ne(e, t) && !X(e, t) : [],
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
            new R(
              {
                currentSharedKeyVer: 0,
                currentUserScopedKeyVer: 0,
                targetVer: 1,
              },
              [
                "zlocalstorage",
                ["friend-blocked", "info-cache", "retry-cache"],
                () => (e) => "string" == typeof e && re(e),
              ],
            ),
            new R(
              {
                currentSharedKeyVer: 0,
                currentUserScopedKeyVer: 0,
                targetVer: 1,
              },
              [
                "zsecure-localstorage",
                ["async-store"],
                () => (e) => "string" == typeof e && re(e),
              ],
            ),
            new K({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              "zlocalstorage",
              ["friend-blocked", "info-cache", "retry-cache"],
              (e) =>
                e ? (t) => "string" == typeof t && te(e, t) && !X(e, t) : [],
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                if (t === `$auto-replies-state-v1-${e}`)
                  return `${n}_auto-replies-state-v1`;
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
            new K({ currentUserScopedKeyVer: 0, targetVer: 1 }, [
              "zsecure-localstorage",
              ["async-store"],
              (e) =>
                e ? (t) => "string" == typeof t && te(e, t) && !X(e, t) : [],
              (e, t) => {
                if (!e) throw new G.f();
                const n = Object(a.b)(e);
                if (t === `$auto-replies-state-v1-${e}`)
                  return `${n}_auto-replies-state-v1`;
                let r = t;
                if (t.includes(e))
                  if (t === `${e}_${e}`) r = e;
                  else {
                    const n = /^[_-]+|[_-]+$/gm;
                    r = t
                      .split(e)
                      .filter((e) => "" !== e)
                      .map((e) => e.replace(n, ""))
                      .join("_")
                      .replace(/^(sh_)+/g, "");
                  }
                return `${n}_${r}`;
              },
            ]),
          ],
        ];
        const ae = new (class {
          constructor() {
            (this._ruleMap = new Map()), this._initRuleMap();
          }
          _getRuleMapKey(e) {
            let t = "x",
              n = "x";
            const { targetVer: r } = e;
            return (
              Object.hasOwnProperty.call(e, "currentSharedKeyVer") &&
                (t = g(e.currentSharedKeyVer)),
              Object.hasOwnProperty.call(e, "currentUserScopedKeyVer") &&
                (n = g(e.currentUserScopedKeyVer)),
              `${t}_${n}_${r}`
            );
          }
          _initRuleMap() {
            const e = ie;
            for (const t of e) {
              const { versionObject: e } = t,
                n = this._getRuleMapKey(e);
              let r = [];
              this._ruleMap.has(n) && (r = this._ruleMap.get(n)),
                r.push(t),
                this._ruleMap.set(n, r);
            }
          }
          getRules(e, t, n) {
            const r = this._getRuleMapKey({
                currentSharedKeyVer: e,
                targetVer: n,
              }),
              i = this._ruleMap.get(r) || [],
              a = this._getRuleMapKey({
                currentUserScopedKeyVer: t,
                targetVer: n,
              }),
              s = this._ruleMap.get(a) || [],
              o = this._getRuleMapKey({
                currentSharedKeyVer: e,
                currentUserScopedKeyVer: t,
                targetVer: n,
              });
            return [...i, ...s, ...(this._ruleMap.get(o) || [])];
          }
        })();
        var se = n("N0Be");
        class oe {
          constructor() {
            (this.startTime = null), (this.endTime = null);
          }
          start() {
            (this.startTime = performance.now()), (this.endTime = null);
          }
          end() {
            this.endTime = performance.now();
          }
          reset() {
            (this.startTime = null), (this.endTime = null);
          }
          isDataReady() {
            return null !== this.startTime && null !== this.endTime;
          }
          getDuration() {
            if (!this.isDataReady()) return null;
            return Math.round(this.endTime - this.startTime);
          }
        }
        const le = ["err"];
        async function ce(e, t) {
          const {
              currentSharedKeysVer: s,
              currentUserScopedKeysVer: l,
              targetVer: c,
              err: u,
            } = t,
            g =
              u instanceof Error
                ? `${(function (e) {
                    switch (e) {
                      case se.a:
                        return 1;
                      case se.d:
                        return 2;
                      case se.b:
                        return 3;
                      case se.g:
                        return 4;
                      case se.e:
                        return 5;
                      case se.f:
                        return 6;
                      case se.c:
                        return 7;
                      default:
                        return 0;
                    }
                  })(u.name)}`
                : "0";
          s < c && (o.a.setItem(i.l, "0"), o.a.setItem(i.b, g));
          if (null !== e && l < c) {
            const t = Object(a.b)(e),
              n = `${t}_${i.m}`;
            o.a.setItem(n, "0");
            const r = `${t}_${i.c}`;
            o.a.setItem(r, g);
          }
          const m = await Promise.all([n.e(0), n.e(5), n.e(24)]).then(
            n.bind(null, "agHs"),
          );
          m.withScope((e) => {
            e.setTag(i.j, `${d()}`);
            const { err: n } = t,
              a = Object(r.a)(t, le);
            e.setExtras(a),
              n instanceof Error
                ? m.captureException(n)
                : "string" == typeof n && m.captureMessage(n, m.Severity.Fatal);
          });
        }
        function de(e, t, n) {
          const r = ae.getRules(e, t, n);
          return Q.getActions(r);
        }
        function ue(e) {
          const t = `${Object(a.b)(e)}_${i.n}`;
          if (!o.a.hasItem(t)) return !1;
          return 1 === +o.a.getItem(t);
        }
        async function ge(e, t) {
          void 0 === t && (t = {}), Object(a.d)();
          const n = null !== e,
            r = null !== o.a.getItem(i.b);
          let l = !1;
          if (n) {
            const t = `${Object(a.b)(e)}_${i.c}`;
            l = null !== o.a.getItem(t);
          }
          const { dry: c, logger: d } = t;
          if (
            (c && (o.a.turnOnDryMode(), u.a.turnOnDryMode()),
            n &&
              (s.a.init(e),
              !c &&
                (function () {
                  const e = i.k;
                  return !!o.a.hasItem(e) && 1 == +o.a.getItem(e);
                })() &&
                ue(e)))
          )
            return;
          const m = new oe();
          m.start();
          const p = {
            currentSharedKeysVer: i.d,
            currentUserScopedKeysVer: i.d,
            targetVer: i.d,
            err: null,
          };
          p.targetVer = 1;
          let f = i.d;
          !c &&
            o.a.hasItem(i.k) &&
            ((f = +o.a.getItem(i.k)), (p.currentSharedKeysVer = f)),
            r && (f = i.a);
          let y = i.d;
          if (n) {
            const t = `${Object(a.b)(e)}_${i.n}`;
            !c &&
              o.a.hasItem(t) &&
              ((y = +o.a.getItem(t)), (p.currentUserScopedKeysVer = y));
          }
          l && (y = i.a),
            await new Promise(async (r) => {
              const s = setTimeout(async () => {
                const t = new G.c();
                d && d.error(t.message), (p.err = t), await ce(e, p), r();
              }, i.e);
              try {
                for (;;) {
                  const n = de(f, y, 1);
                  if (0 === n.length) break;
                  for (const r of n) await r.exec(e, t);
                  f < 1 &&
                    f !== i.a &&
                    ((f += 1), (p.currentSharedKeysVer = f)),
                    null !== y &&
                      y !== i.a &&
                      y < 1 &&
                      ((y += 1), (p.currentUserScopedKeysVer = y));
                }
                if (
                  (clearTimeout(s),
                  f !== i.a && (o.a.setItem(i.k, g(1)), o.a.setItem(i.l, "1")),
                  n && y !== i.a)
                ) {
                  const t = Object(a.b)(e),
                    n = `${t}_${i.n}`;
                  o.a.setItem(n, g(1));
                  const r = `${t}_${i.m}`;
                  o.a.setItem(r, "1");
                }
              } catch (l) {
                0, (p.err = l), await ce(e, p);
              } finally {
                r();
              }
            }),
            s.a.save(),
            m.end();
          const h = m.getDuration();
          if (null !== h) {
            if ((o.a.setItem(i.f, `${h}`), n)) {
              const t = Object(a.b)(e);
              o.a.setItem(`${t}_${i.g}`, `${h}`);
            }
            m.reset();
          }
          const _ =
            o.a.getAllKeyNames().length +
            (await (async function () {
              let e = 0;
              const t = ["friend-blocked", "info-cache", "retry-cache"];
              for (const n of t)
                e += await u.a.getTotalKeyCountOfStore("zlocalstorage", n);
              return (
                (e += await u.a.getTotalKeyCountOfStore(
                  "zsecure-localstorage",
                  "async-store",
                )),
                e
              );
            })());
          if ((o.a.setItem(i.h, `${_}`), n)) {
            const t = Object(a.b)(e);
            o.a.setItem(`${t}_${i.i}`, `${_}`);
          }
        }
      },
      C9Dv: function (e, t, n) {
        "use strict";
        function r(e) {
          return { default: { tables: Object.values(e) } };
        }
        function i(e) {
          return Object.values(e).reduce(
            (e, t) => ((e[t.name] = { tables: [t] }), e),
            {},
          );
        }
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return i;
          });
      },
      CHYU: function (e, t, n) {
        "use strict";
        var r;
        !(function (e) {
          (e.Main = "main"),
            (e.Render = "render"),
            (e.SharedWorker = "shared-worker"),
            (e.Notification = "notification"),
            (e.Photo = "photo"),
            (e.Web = "web"),
            (e.Embed = "embed"),
            (e.Login = "login"),
            (e.Unknown = "unknown");
        })(r || (r = {})),
          (t.a = r);
      },
      Cede: function (e, t, n) {
        "use strict";
        n("ipeT");
      },
      Cvfp: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          });
        const r = "-/~^~/-",
          i = {
            zlocalstorage: {
              "cocos-res": { keyPath: "path", dataPath: "data" },
              "db-stchecksum": { keyPath: "checksum", dataPath: "url" },
              "friend-blocked": { keyPath: "key", dataPath: "val" },
              "info-cache": { keyPath: "key", dataPath: "val" },
              "retry-cache": { keyPath: "key", dataPath: "val" },
            },
            "zsecure-localstorage": {
              "async-store": { keyPath: "key", dataPath: "val" },
            },
          };
      },
      "DI/x": function (e, t, n) {
        "use strict";
        n.d(t, "m", function () {
          return r;
        }),
          n.d(t, "k", function () {
            return i;
          }),
          n.d(t, "p", function () {
            return a;
          }),
          n.d(t, "e", function () {
            return s;
          }),
          n.d(t, "a", function () {
            return o;
          }),
          n.d(t, "i", function () {
            return l;
          }),
          n.d(t, "y", function () {
            return c;
          }),
          n.d(t, "A", function () {
            return d;
          }),
          n.d(t, "x", function () {
            return u;
          }),
          n.d(t, "q", function () {
            return g;
          }),
          n.d(t, "r", function () {
            return m;
          }),
          n.d(t, "v", function () {
            return p;
          }),
          n.d(t, "t", function () {
            return f;
          }),
          n.d(t, "s", function () {
            return y;
          }),
          n.d(t, "u", function () {
            return h;
          }),
          n.d(t, "b", function () {
            return _;
          }),
          n.d(t, "g", function () {
            return b;
          }),
          n.d(t, "n", function () {
            return I;
          }),
          n.d(t, "f", function () {
            return v;
          }),
          n.d(t, "j", function () {
            return w;
          }),
          n.d(t, "h", function () {
            return D;
          }),
          n.d(t, "d", function () {
            return M;
          }),
          n.d(t, "o", function () {
            return S;
          }),
          n.d(t, "l", function () {
            return T;
          }),
          n.d(t, "z", function () {
            return C;
          }),
          n.d(t, "w", function () {
            return E;
          }),
          n.d(t, "c", function () {
            return A;
          });
        const r = 306,
          i = 307,
          a = 502;
        class s extends Error {
          constructor(e, t, n) {
            void 0 === n && (n = []),
              super(t),
              (this._code = void 0),
              (this.qosParams = void 0),
              (this.qosParams = [t, ...n]),
              (this._code = e);
          }
          get code() {
            return this._code;
          }
          get codeString() {
            return `0x13${this._code}`;
          }
          setStack(e) {
            const t = `${this.name}: ${this.message}`;
            this.stack = t + (e || "");
          }
        }
        class o extends s {
          constructor(e, t) {
            super(101, `"${e}" is abstract method`, t),
              (this.name = "CallAbstractMethod");
          }
        }
        class l extends s {
          constructor(e, t) {
            super(102, e, t), (this.name = "DBUnknownError");
          }
        }
        class c extends s {
          constructor(e) {
            super(103, "", e), (this.name = "QueryTimeout");
          }
        }
        class d extends s {
          constructor(e, t, n) {
            super(104, `'${e}' - ${t}`, n), (this.name = "WrongUseOfMethod");
          }
        }
        class u extends s {
          constructor(e, t) {
            super(105, `'${e}' hasn't been supported yet!`, t),
              (this.name = "NonSupportedFeature");
          }
        }
        class g extends s {
          constructor(e, t) {
            super(201, `Missing config for '${e}' database`, t),
              (this.name = "MissingDatabaseConfig");
          }
        }
        class m extends s {
          constructor(e, t) {
            super(202, `Missing schema for '${e}' database`, t),
              (this.name = "MissingDatabaseSchema");
          }
        }
        class p extends s {
          constructor(e, t) {
            super(203, `Missing config for '${e}' table`, t),
              (this.name = "MissingTableConfig");
          }
        }
        class f extends s {
          constructor(e, t, n) {
            let r = `Missing partition config for '${e}' table`;
            if (t) {
              const { userId: e } = t;
              r += ` - userId: ${e}`;
            }
            super(204, r, n), (this.name = "MissingPartitionConfig");
          }
        }
        class y extends s {
          constructor(e, t) {
            super(205, `Missing config for'${e}' index!`, t),
              (this.name = "MissingIndexConfig");
          }
        }
        class h extends s {
          constructor(e) {
            super(206, "", e), (this.name = "MissingPartitionKey");
          }
        }
        class _ extends s {
          constructor(e, t) {
            super(208, t, [e]), (this.name = "CreateAdapterError");
          }
        }
        class b extends s {
          constructor(e, t) {
            super(209, e, t), (this.name = "DBSettingsError");
          }
        }
        class I extends s {
          constructor(e, t) {
            super(301, e, t), (this.name = "InvalidQueryParams");
          }
        }
        class v extends s {
          constructor(e, t) {
            super(302, e, t), (this.name = "DBExecutionError");
          }
        }
        class w extends s {
          constructor(e, t) {
            super(303, e, t), (this.name = "DataTransformError");
          }
        }
        class D extends s {
          constructor(e, t) {
            super(304, e, t), (this.name = "DBTransactionError");
          }
        }
        class M extends s {
          constructor(e, t) {
            super(305, e, t), (this.name = "DBConnectionError");
          }
        }
        class S extends s {
          constructor(e, t) {
            const { fullname: n, currentVersion: i, requestedVersion: a } = e;
            super(
              r,
              `An attempt was made to open a database (${n}) using a lower version (${a}) than the existing version (${i}).`,
              t,
            ),
              (this.data = e),
              (this.name = "InvalidVersionError");
          }
        }
        class T extends s {
          constructor(e, t) {
            super(i, e, t), (this.name = "FaildToOpenDBConnectionError");
          }
        }
        class C extends s {
          constructor(e, t) {
            super(501, e, t), (this.name = "SchemaMigrationError");
          }
        }
        class E extends s {
          constructor(e, t) {
            const n = `Found missing table(s): ${JSON.stringify(e)}. But current adapter cannot create table without increasing the database version.`;
            super(a, n, t), (this.name = "MissingTableError");
          }
        }
        class A extends s {
          constructor(e, t, n) {
            super(n, e), (this.name = void 0), (this.name = t);
          }
        }
      },
      FPa7: function (e, t, n) {},
      GhaG: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return d;
        }),
          n.d(t, "a", function () {
            return u;
          }),
          n.d(t, "d", function () {
            return g;
          }),
          n.d(t, "c", function () {
            return m;
          });
        var r = n("N1xz"),
          i = n("KBA3"),
          a = n("CHYU"),
          s = n("h+6H"),
          o = n("d74q");
        const l = {
            start: (e, t) => r.a.MetricManager.start(e, t),
            end: (e, t, n) => r.a.MetricManager.end(e, t, n),
            cancel: (e, t) => r.a.MetricManager.cancel(e, t),
            recordEvent: (e) => r.a.MetricManager.recordEvent(e),
            recordBinarySize: (e, t, n, i) =>
              r.a.MetricManager.recordBinarySize(e, t, n, i),
          },
          c = {
            Fps: {
              record: (e, t) => r.a.UIManager.startRecordSectionFps(e, t),
              endRecord: (e, t, n) =>
                r.a.UIManager.endRecordSectionFps(e, t, n),
              registerSectionRecorder: (e) =>
                r.a.UIManager.registerFpsLongSectionRecorder(e),
            },
          },
          d = {
            mergeSetting: (e) => {
              i.a.mergeSetting(e);
            },
            mergeSettingFromServerInfo: (e) => {
              i.a.mergeSettingFromServerInfo(e);
            },
            registerQosControl: (e) => {
              r.a.MetricResolver.registerQosControl(e);
            },
            pushMessageMain: (e, t) => {
              r.a.MetricTransporter.pushMessageMain(e, t);
            },
            exit: () => r.a.exit(),
            _DEV_export: () => {},
          };
        "render" === __ZaBUNDLENAME__.toLowerCase() &&
          ((d._DEV_export = () => r.a.MetricResolver.exportAll()),
          (window.exportMetrics = d._DEV_export));
        const u = {
            getConfig: (e) => {
              var t;
              return null === (t = i.a.getConfig()) || void 0 === t
                ? void 0
                : t[e];
            },
            getDebugger: () => r.a.ToolboxRenderer.getDebugger(),
            getMainDebugger: () => {
              if (r.a.process === a.a.Main)
                return r.a.ToolboxMain.getDebugger();
            },
          },
          g = {
            requestCpuIdle: (e, t) =>
              r.a.process === a.a.Main
                ? r.a.ToolboxMain.requestCpuIdle(e, t)
                : r.a.ToolboxRenderer.requestCpuIdle(e, t),
            getBinarySize: (e) => Object(s.a)(e),
          };
        l.Fps = c.Fps;
        const m = Object(o.b)();
        t.e = l;
      },
      "H/wq": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          });
        const r = "NonExistedDBError";
        class i extends Error {
          constructor(e) {
            super(e), (this.name = r);
          }
        }
      },
      IpiK: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = new s.d({
            tableName: "ConvMsgStatus",
            name: "ConvMsgStatus",
            fields: {
              userId: { name: "userId", type: i.g.string },
              data: { name: "data", type: i.g.json },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          c = new s.d({
            tableName: "MsgInfo",
            name: "MsgInfo",
            fields: {
              msgId: { name: "msgId", type: i.g.integer },
              seenUids: { name: "seenUids", type: i.g.json },
              deliveredUids: { name: "deliveredUids", type: i.g.json },
              extraJson: { name: "extraJson", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
            },
          });
        var d = n("4W2c");
        const u = new s.d({
          tableName: "MsgUrgency",
          name: "MsgUrgency",
          fields: {
            sendDttm: { name: "sendDttm", type: i.g.string },
            cliMsgId: { name: "cliMsgId", type: i.g.string },
            fromUid: { name: "fromUid", type: i.g.string },
            mentions: { name: "mentions", type: i.g.json, nullable: !0 },
            message: { name: "message", type: i.g.string },
            msgId: { name: "msgId", type: i.g.string },
            msgType: { name: "msgType", type: i.g.integer },
            toUid: { name: "toUid", type: i.g.string },
            src: { name: "src", type: i.g.integer, nullable: !0 },
            quote: { name: "quote", type: i.g.json, nullable: !0 },
            properties: { name: "properties", type: i.g.json, nullable: !0 },
            urgency: { name: "urgency", type: i.g.integer, nullable: !0 },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "msgId" }],
              unique: !0,
            },
            sendDttm: {
              name: "sendDttm",
              fields: [{ type: "raw", field: "sendDttm" }],
              unique: !1,
            },
            conv_msgId: {
              name: "conv_msgId",
              fields: [
                { type: "raw", field: "toUid" },
                { type: "raw", field: "msgId" },
              ],
              unique: !0,
            },
          },
        });
        u.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new d.a(["message"])],
        });
        const g = new s.d({
            tableName: "Quotes",
            name: "Quotes",
            fields: {
              msgId: { name: "msgId", type: i.g.integer },
              convId: { name: "convId", type: i.g.string },
              sendDttm: { name: "sendDttm", type: i.g.integer },
              parentId: { name: "parentId", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              convId_sendDttm: {
                name: "convId_sendDttm",
                fields: [
                  { type: "raw", field: "convId" },
                  { type: "raw", field: "sendDttm" },
                ],
                unique: !1,
              },
            },
          }),
          m = new s.d({
            tableName: "ThreadHis",
            name: "ThreadHis",
            fields: {
              msgId: { name: "msgId", type: i.g.integer },
              toUid: { name: "toUid", type: i.g.string },
              isGroup: { name: "isGroup", type: i.g.boolean },
              childs: { name: "childs", type: i.g.json },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
            },
          }),
          p = new s.d({
            tableName: "ThreadMsg",
            name: "ThreadMsg",
            fields: {
              ownerId: { name: "ownerId", type: i.g.string, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.integer },
              globalMsgId: { name: "globalMsgId", type: i.g.integer },
              cliMsgType: { name: "cliMsgType", type: i.g.integer },
              ts: { name: "ts", type: i.g.integer },
              msg: { name: "msg", type: i.g.string },
              attach: { name: "attach", type: i.g.string },
              fromD: { name: "fromD", type: i.g.string },
              convId: { name: "convId", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "globalMsgId" }],
                unique: !0,
              },
            },
          });
        p.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new d.a(["msg", "attach"])],
        });
        const f = new s.d({
            tableName: "TTLItem",
            name: "TTLItem",
            fields: {
              cliMsgId: { name: "cliMsgId", type: i.g.string },
              fromUid: { name: "fromUid", type: i.g.string },
              toUid: { name: "toUid", type: i.g.string },
              msgId: { name: "msgId", type: i.g.string },
              beginTime: { name: "beginTime", type: i.g.integer },
              sendDttm: { name: "sendDttm", type: i.g.string, nullable: !0 },
              serverTime: { name: "serverTime", type: i.g.string },
              ttl: { name: "ttl", type: i.g.integer },
              ttlType: { name: "ttlType", type: i.g.string },
              expireOn: { name: "expireOn", type: i.g.integer },
              mediaType: { name: "mediaType", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [
                  { type: "raw", field: "msgId" },
                  { type: "raw", field: "ttlType" },
                ],
                unique: !0,
              },
              expireOn_toUid_pk: {
                name: "expireOn_toUid_pk",
                fields: [
                  { type: "raw", field: "expireOn" },
                  { type: "raw", field: "toUid" },
                  { type: "raw", field: "msgId" },
                  { type: "raw", field: "ttlType" },
                ],
                unique: !0,
              },
              toUid_serverTime_pk: {
                name: "toUid_serverTime_pk",
                fields: [
                  { type: "raw", field: "toUid" },
                  { type: "raw", field: "serverTime" },
                  { type: "raw", field: "msgId" },
                  { type: "raw", field: "ttlType" },
                ],
                unique: !0,
              },
            },
          }),
          y = {
            ConvMsgStatus: l,
            MsgInfo: c,
            MsgUrgency: u,
            Quotes: g,
            ThreadMsg: p,
            ThreadHis: m,
            UnreadInfo: new s.d({
              tableName: "unreadInfo",
              name: "UnreadInfo",
              fields: {
                mId: { name: "mId", type: i.g.integer },
                actId: { name: "actId", type: i.g.integer },
                userId: { name: "userId", type: i.g.string },
                timestamp: { name: "timestamp", type: i.g.integer },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "userId" }],
                  unique: !0,
                },
              },
            }),
            TTLItem: f,
          },
          h = { name: "MsgInfo", session: !0 },
          _ = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("MsgInfo"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(y),
          },
          b = {
            partitionNamingStrategy: [a.a.const("msginfo"), a.a.byUser()],
            partitionsMap: Object(o.b)(y),
          },
          I = Object(r.a)(
            Object(r.a)(Object(r.a)({}, h), _),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          v = Object(r.a)(
            Object(r.a)(Object(r.a)({}, h), b),
            {},
            { version: 6, milestoneVersion: 6, type: i.a.IDB },
          );
        let w = null,
          D = null;
        t.a = {
          schema: y,
          get useSqlite() {
            return null === w && (w = new s.a(I)), w;
          },
          get useIdb() {
            return null === D && (D = new s.a(v)), D;
          },
        };
      },
      JMlY: function (e, t, n) {
        "use strict";
        var r = n("LzQZ");
        n.d(t, "a", function () {
          return r.a;
        });
      },
      Jcee: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return m;
        }),
          n.d(t, "a", function () {
            return p;
          });
        var r = n("jDHv"),
          i = n("AH6j"),
          a = n("45ei");
        class s {
          constructor() {
            (this.disposables = void 0), (this.disposables = []);
          }
          add(e) {
            "function" == typeof e
              ? this.disposables.push(e)
              : this.disposables.push(e.dispose);
          }
          remove(e) {
            let t = this.disposables.findIndex((t) => t === e);
            this.disposables.slice(t, 1);
          }
          dispose() {
            for (const e of this.disposables) e();
          }
        }
        var o = n("6Sr9"),
          l = n("8/YW"),
          c = n("WOPK");
        const d = new Map();
        class u extends class {
          constructor() {
            (this.id = void 0), (this.id = Object(c.a)());
          }
          revoke() {
            d.delete(this.id);
          }
        } {
          constructor() {
            if ((super(), (this._status = void 0), u.instance))
              return u.instance;
            u.instance = this;
          }
          get status() {
            return this._status;
          }
          create() {
            (this._status = "create"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.create) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          start() {
            (this._status = "start"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.start) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          running() {
            (this._status = "running"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.running) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          pause() {
            (this._status = "pause"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.pause) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          resume() {
            (this._status = "resume"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.resume) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          restart() {
            (this._status = "restart"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.restart) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
          stop() {
            (this._status = "stop"),
              d.forEach((e) => {
                var t, n;
                return null === (t = r.ModuleContainer.resolveToken(e)) ||
                  void 0 === t ||
                  null === (n = t.stop) ||
                  void 0 === n
                  ? void 0
                  : n.call(t);
              });
          }
        }
        u.instance = void 0;
        const g = new u();
        class m extends i.b {
          constructor(e, t, n) {
            super(),
              (this.name = e),
              (this.config = t),
              (this.disposables = void 0),
              (this.currentSession = null),
              (this.logger = void 0),
              (this.onApplicationStarted = (e) => {
                this.dispatchEvent(e);
              }),
              (this.onInitService = (e) => {
                this.dispatchEvent(e);
              }),
              (this.onServiceReady = (e) => {
                this.dispatchEvent(e);
              }),
              (this.onApplicationExit = (e) => {
                this.dispatchEvent(e);
              }),
              (this.onBeforeUnload = () => {
                this.dispatchEvent(new Event(a.a.BeforeUnload));
              }),
              (this.onApplicationFirstIdle = (e) => {
                this.dispatchEvent(e);
              }),
              (this.onApplicationIdle = (e) => {
                this.logger.zsymb(12, 16244, 30006, "idle"),
                  this.dispatchEvent(e);
              }),
              (this.onApplicationActive = (e) => {
                this.logger.zsymb(12, 16244, 30007, "active"),
                  this.dispatchEvent(e);
              }),
              (this.logger = n.createZLogger("common", ["application"])),
              (this.disposables = new s()),
              g.create();
          }
          async start() {
            this.logger.zsymb(0, 16244, 3e4, "starting"),
              this.listenInternalEvents(),
              Object(o.e)(this),
              this.onApplicationStarted(new Event(a.a.Start)),
              g.start();
          }
          async init() {
            this.logger.zsymb(3, 16244, 30001, "initializing services..."),
              this.onInitService(new l.c(this)),
              window.addEventListener("beforeunload", () => {
                this.onBeforeUnload();
              });
          }
          async ready() {
            this.logger.zsymb(3, 16244, 30002, "application ready"),
              this.onServiceReady(new Event(a.a.ServicesReady)),
              g.running();
          }
          async exit() {
            this.logger.zsymb(3, 16244, 30003, "exiting"),
              this.onApplicationStarted(new Event(a.a.Exit)),
              setTimeout(() => {
                this.disposables.dispose();
              }),
              g.stop();
          }
          authenticating(e) {
            this.logger.zsymb(0, 16244, 30004, () => [
              "authenticating",
              { id: e.userId },
            ]),
              (this.currentSession = e),
              this.dispatchEvent(new a.c(this.currentSession));
          }
          authenticate(e) {
            this.logger.zsymb(0, 16244, 30005, () => [
              "authenticate",
              { id: e.userId },
            ]),
              (this.currentSession = e),
              this.dispatchEvent(new a.c(this.currentSession)),
              this.dispatchEvent(new a.b(this.currentSession));
          }
          logOut(e) {
            this.dispatchEvent(new a.e(e));
          }
          getSession() {
            return this.currentSession;
          }
          setStateToIdle() {
            this.onApplicationIdle(new Event(a.a.Idle));
          }
          setStateToActive() {
            this.onApplicationActive(new Event(a.a.Active));
          }
          listenInternalEvents() {
            this.addEventListenerOnce(a.a.Idle, () =>
              this.onApplicationFirstIdle(new Event(a.a.FirstIdle)),
            );
          }
        }
        const p = Object(r.define)("application");
      },
      "K+9E": function (e, t, n) {
        "use strict";
        var r;
        !(function (e) {
          (e.METRIC_MANAGER = "METRIC_MANAGER"),
            (e.METRIC_SCHEMA_MANAGER = "METRIC_SCHEMA_MANAGER"),
            (e.METRIC_FACTORY = "METRIC_FACTORY"),
            (e.METRIC_TRANSPORTER = "METRIC_TRANSPORTER"),
            (e.METRIC_RESOLVER = "METRIC_RESOLVER"),
            (e.METRIC_USAGE_MONITOR = "METRIC_USAGE_MONITOR"),
            (e.APP_USAGE_MONITOR = "APP_USAGE_MONITOR"),
            (e.PROCESS_MONITOR = "PROCESS_MONITOR"),
            (e.LOCAL_STAT = "LOCAL_STAT"),
            (e.DATA_MANAGER = "DATA_MANAGER"),
            (e.UI_MANAGER = "UI_MANAGER"),
            (e.PROCESS_LIFECYCLE_CONTROLLER = "PROCESS_LIFECYCLE_CONTROLLER"),
            (e.APP_STATE_MANAGER = "APP_STATE_MANAGER"),
            (e.TOOLBOX = "TOOLBOX");
        })(r || (r = {})),
          (t.a = r);
      },
      K0f4: function (e, t, n) {
        "use strict";
        n.d(t, "k", function () {
          return r;
        }),
          n.d(t, "n", function () {
            return i;
          }),
          n.d(t, "b", function () {
            return a;
          }),
          n.d(t, "c", function () {
            return s;
          }),
          n.d(t, "d", function () {
            return o;
          }),
          n.d(t, "a", function () {
            return l;
          }),
          n.d(t, "e", function () {
            return c;
          }),
          n.d(t, "j", function () {
            return d;
          }),
          n.d(t, "l", function () {
            return u;
          }),
          n.d(t, "m", function () {
            return g;
          }),
          n.d(t, "f", function () {
            return m;
          }),
          n.d(t, "g", function () {
            return p;
          }),
          n.d(t, "h", function () {
            return f;
          }),
          n.d(t, "i", function () {
            return y;
          });
        const r = "sh_mig_ver_sh",
          i = "mig_ver_usr",
          a = "sh_mig_lt_sh",
          s = "mig_lt_usr",
          o = 0,
          l = -1,
          c = 1e6,
          d = "migrate_storage_key",
          u = "sh_mig_scs_sh",
          g = "mig_scs_usr",
          m = "sh_mig_d",
          p = "mig_d",
          f = "sh_mig_co",
          y = "mig_co";
      },
      KBA3: function (e, t, n) {
        "use strict";
        var r,
          i = n("VTBJ"),
          a = n("dFSO"),
          s = n("rors"),
          o = n("CHYU");
        !(function (e) {
          (e[(e.PENDING = 0)] = "PENDING"),
            (e[(e.YES = 1)] = "YES"),
            (e[(e.NO = 2)] = "NO");
        })(r || (r = {}));
        var l = r;
        const c = new (class {
          constructor() {
            (this.config = {
              enable: !1,
              enable_for_staging_account: !0,
              enable_submit_qos: !0,
              enable_fps_monitor: !1,
              enable_fps_monitor_v2: !0,
              enable_fps_drop_monitor: !0,
              enable_write_log: !1,
              submit_qos_except_dev: !0,
              allow_measure_usage_by_ps_cmd: !1,
              allow_measure_app_usage: !1,
              allow_submit_os_version_mac: !0,
              allow_submit_os_version_win: !0,
              max_cache_records_resolved: s.a,
              max_starting_process_dictionary: s.b,
              regex_test_cpu_model_mac_arm: "^Apple M\\d+$",
              allow_record_high_fps: !0,
              app_usage_recording_period: 6e4,
              os_architecture: { "32bit": "32-bit", "64bit": "64-bit" },
              processes_whitelist: [
                o.a.Main,
                o.a.Web,
                o.a.Render,
                o.a.SharedWorker,
                o.a.Photo,
                o.a.Notification,
              ],
              processes_enable_cpu_monitor: [
                o.a.Main,
                o.a.Render,
                o.a.SharedWorker,
              ],
              staging_account: !1,
              fps_section: {
                fps_scroll_conv_list: !0,
                fps_switch_conv: !0,
                fps_jump_to_msg: !0,
                fps_scroll_chat_box_view: !0,
                fps_switch_main_tab: !0,
                fps_scroll_global_search_list: !0,
              },
              toolbox: {
                enable_process_lifecycle: !0,
                enable_request_cpu_idle: !0,
                threshold_cpu_idle_renderer_win: 10,
                threshold_cpu_idle_renderer_mac: 10,
                threshold_cpu_idle_main_win: 5,
                threshold_cpu_idle_main_mac: 5,
                threshold_cpu_idle_dbtask_win: 5,
                threshold_cpu_idle_dbtask_mac: 5,
              },
              debug: { enable: !1 },
              config: {},
              custom: {},
            }),
              (this.stagingAccountStatus = l.PENDING),
              (this.listeners = {}),
              (this.listenerChanged = []),
              this.init();
          }
          get enable() {
            return this.config.enable;
          }
          get debugEnabled() {
            var e, t;
            return !(
              null === (e = this.config) ||
              void 0 === e ||
              null === (t = e.debug) ||
              void 0 === t ||
              !t.enable
            );
          }
          init() {
            0;
          }
          mergeSetting(e) {
            var t, n;
            if (!e || "object" != typeof e) return;
            const r = JSON.parse(JSON.stringify(this.config));
            (this.config = Object(i.a)(
              Object(i.a)(Object(i.a)({}, this.config), e || {}),
              {},
              {
                fps_section: Object(i.a)(
                  Object(i.a)({}, this.config.fps_section),
                  (null == e ? void 0 : e.fps_section) || {},
                ),
                toolbox: Object(i.a)(
                  Object(i.a)({}, this.config.toolbox),
                  (null == e ? void 0 : e.toolbox) || {},
                ),
                debug: Object(i.a)(
                  Object(i.a)({}, this.config.debug),
                  (null == e ? void 0 : e.debug) || {},
                ),
                custom: Object(i.a)(
                  Object(i.a)({}, this.config.custom),
                  (null == e ? void 0 : e.custom) || {},
                ),
                config: Object(i.a)(
                  Object(i.a)({}, this.config.config),
                  (null == e ? void 0 : e.config) || {},
                ),
              },
            )),
              ((null != e && e.staging_account) ||
                (null != e &&
                  null !== (t = e.debug) &&
                  void 0 !== t &&
                  t.enable)) &&
                (this.config.debug.enable = !0);
            for (const i in this.config) {
              const t = null == e ? void 0 : e[i];
              if (
                ("staging_account" === i &&
                  (this.stagingAccountStatus = t ? l.YES : l.NO),
                !Object(a.b)(r[i]) && !Object(a.b)(t))
              ) {
                const e = this.listeners[i];
                null != e && e.length && e.forEach((e) => e(t));
              }
            }
            null !== (n = this.listenerChanged) &&
              void 0 !== n &&
              n.length &&
              this.listenerChanged.forEach((e) => e({ fromServerInfo: !1 }));
          }
          mergeSettingFromServerInfo(e) {
            var t;
            e &&
              "object" == typeof e &&
              ("object" == typeof (null == e ? void 0 : e.config) &&
                (this.config.config = Object(i.a)(
                  Object(i.a)({}, this.config.config),
                  e.config,
                )),
              "object" == typeof (null == e ? void 0 : e.custom) &&
                (this.config.custom = Object(i.a)(
                  Object(i.a)({}, this.config.custom),
                  e.custom,
                )),
              null !== (t = this.listenerChanged) &&
                void 0 !== t &&
                t.length &&
                this.listenerChanged.forEach((e) => e({ fromServerInfo: !0 })));
          }
          on(e, t) {
            this.listeners[e] || (this.listeners[e] = []),
              this.listeners[e].push(t);
          }
          removeListener(e, t) {
            var n;
            null !== (n = this.listeners[e]) &&
              void 0 !== n &&
              n.length &&
              (this.listeners[e] = this.listeners[e].filter((e) => e !== t));
          }
          onConfigChange(e) {
            this.listenerChanged.push(e);
          }
          onEnable(e) {
            this.on("enable", (t) => {
              t && e();
            });
          }
          onDisable(e) {
            this.on("enable", (t) => {
              t || e();
            });
          }
          getConfig() {
            return this.config;
          }
          getStagingAccountStatus() {
            return this.stagingAccountStatus;
          }
        })();
        t.a = c;
      },
      KiFO: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("YEoC");
        const i = new (n("teaq").d)({
          tableName: "partition",
          name: "partition",
          fields: {
            database: { name: "database", type: r.g.string },
            table: { name: "table", type: r.g.string },
            key: { name: "key", type: r.g.string },
            value: { name: "value", type: r.g.string },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [
                { type: "raw", field: "database" },
                { type: "raw", field: "table" },
                { type: "raw", field: "key" },
              ],
              unique: !0,
            },
          },
        });
      },
      LzQZ: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("database-transaction-manager");
      },
      MRjZ: function (e, t, n) {
        "use strict";
        function r(e) {
          return Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return `${t}=${JSON.stringify(n)}`;
            })
            .join(",");
        }
        n.d(t, "a", function () {
          return r;
        });
      },
      Mgpg: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("XB6V");
        n.d(t, "ZLoggerFactory", function () {
          return r.a;
        });
        var i = n("7xKq");
        n.d(t, "ZLogger", function () {
          return i.ZLogger;
        });
        var a = n("7FSS");
        n.d(t, "dangerouslyLogConsole", function () {
          return a.a;
        });
        var s = n("OMsT");
        n.d(t, "ZLogCollector", function () {
          return s.a;
        });
        var o = n("jGDt");
        n.d(t, "ZLogSession", function () {
          return o.a;
        });
      },
      N0Be: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "d", function () {
            return i;
          }),
          n.d(t, "b", function () {
            return a;
          }),
          n.d(t, "g", function () {
            return s;
          }),
          n.d(t, "e", function () {
            return o;
          }),
          n.d(t, "f", function () {
            return l;
          }),
          n.d(t, "c", function () {
            return c;
          });
        const r = "ExistedActionHandlerError",
          i = "NonExistedActionHandlerError",
          a = "InvalidInitializedDataForSecureKeysToMigrateError",
          s = "UninitializedSecureKeysToMigrateError",
          o = "SecureKeysToMigrateInvalidIDBKeyError",
          l = "UnavailableUserIDForKeynameGenerationError",
          c = "MigrateTimeoutError";
      },
      N1xz: function (e, t, n) {
        "use strict";
        n("mNvP");
        var r = n("KBA3"),
          i = n("K+9E"),
          a = n("CHYU"),
          s = n("f1TF");
        class o {
          static get EPOCH() {
            return this._epoch;
          }
          static register(e, t) {
            this.tokens || (this.tokens = new Map()), this.tokens.set(e, t);
          }
          static get MetricManager() {
            if (!this._metricManager) {
              const e = i.a.METRIC_MANAGER,
                t = this.tokens.get(e);
              if (!t)
                throw new Error(`[metricz] token "${e}" is not registered`);
              (this._metricManager = new t()), this.tokens.delete(e);
            }
            return this._metricManager;
          }
          static get SchemaManager() {
            if (!this._schemaManager) {
              const e = i.a.METRIC_SCHEMA_MANAGER,
                t = this.tokens.get(e);
              if (!t)
                throw new Error(`[metricz] token "${e}" is not registered`);
              (this._schemaManager = new t()), this.tokens.delete(e);
            }
            return this._schemaManager;
          }
          static get MetricFactory() {
            if (!this._metricFactory) {
              const e = i.a.METRIC_FACTORY,
                t = this.tokens.get(e);
              if (!t)
                throw new Error(`[metricz] token "${e}" is not registered`);
              (this._metricFactory = new t()), this.tokens.delete(e);
            }
            return this._metricFactory;
          }
          static get MetricTransporter() {
            if (!this._metricTransporter) {
              const e = i.a.METRIC_TRANSPORTER,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._metricTransporter = new t()), this.tokens.delete(e);
            }
            return this._metricTransporter;
          }
          static get MetricResolver() {
            if (!this._metricResolver) {
              const e = i.a.METRIC_RESOLVER,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._metricResolver = new t()), this.tokens.delete(e);
            }
            return this._metricResolver;
          }
          static get UsageMonitor() {
            if (!this._usageMonitor) {
              const e = i.a.METRIC_USAGE_MONITOR,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._usageMonitor = new t()), this.tokens.delete(e);
            }
            return this._usageMonitor;
          }
          static get AppUsageMonitor() {
            if (!this._appUsageMonitor) {
              const e = i.a.APP_USAGE_MONITOR,
                t = this.tokens.get(e);
              t && ((this._appUsageMonitor = new t()), this.tokens.delete(e));
            }
            return this._appUsageMonitor;
          }
          static get ProcessMonitor() {
            if (!this._processMonitor) {
              const e = i.a.PROCESS_MONITOR,
                t = this.tokens.get(e);
              t && ((this._processMonitor = new t()), this.tokens.delete(e));
            }
            return this._processMonitor;
          }
          static get LocalStat() {
            if (!this._localStat) {
              const e = i.a.LOCAL_STAT,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._localStat = new t()), this.tokens.delete(e);
            }
            return this._localStat;
          }
          static get DataManager() {
            if (!this._dataManager) {
              const e = i.a.DATA_MANAGER,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._dataManager = new t()), this.tokens.delete(e);
            }
            return this._dataManager;
          }
          static get UIManager() {
            if (!this._uiManager) {
              const e = i.a.UI_MANAGER,
                t = this.tokens.get(e);
              if (!t) throw new Error(`Metric token "${e}" is not registered`);
              (this._uiManager = new t()), this.tokens.delete(e);
            }
            return this._uiManager;
          }
          static get ProcessLifecycleController() {
            if (!this._processLifecycleController) {
              const e = i.a.PROCESS_LIFECYCLE_CONTROLLER,
                t = this.tokens.get(e);
              t &&
                ((this._processLifecycleController = new t()),
                this.tokens.delete(e));
            }
            return this._processLifecycleController;
          }
          static get ToolboxRenderer() {
            if (!this._toolboxRenderer) {
              const e = i.a.TOOLBOX;
              let t = this.tokens.get(e);
              if ((t || (n("aLZP"), (t = this.tokens.get(e))), !t))
                throw new Error(`Metric token "${e}" is not registered`);
              (this._toolboxRenderer = new t()), this.tokens.delete(e);
            }
            return this._toolboxRenderer;
          }
          static get ToolboxMain() {
            if (!this._toolboxMain) {
              const e = i.a.TOOLBOX;
              let t = this.tokens.get(e);
              if ((t || (n("aLZP"), (t = this.tokens.get(e))), !t))
                throw new Error(`Metric token "${e}" is not registered`);
              (this._toolboxMain = new t()), this.tokens.delete(e);
            }
            return this._toolboxMain;
          }
          static get MainAppStateManager() {
            if (!this._appStateManager) {
              const e = i.a.APP_STATE_MANAGER,
                t = this.tokens.get(e);
              t && ((this._appStateManager = new t()), this.tokens.delete(e));
            }
            return this._appStateManager;
          }
          static get AppStateManager() {
            if (!this._appStateManager) {
              const e = i.a.APP_STATE_MANAGER,
                t = this.tokens.get(e);
              t && ((this._appStateManager = new t()), this.tokens.delete(e));
            }
            return this._appStateManager;
          }
          static createLogger(e) {
            return new s.a(e);
          }
          static get Logger() {
            return (
              this._Logger || (this._Logger = this.createLogger("internal")),
              this._Logger
            );
          }
          static install() {
            var e;
            this._installed ||
              ((this._installed = !0),
              (this._exited = !1),
              this.canIUse() &&
                (this.startEpoch(),
                null === (e = this.ProcessLifecycleController) ||
                  void 0 === e ||
                  e.ready(),
                this.SchemaManager.ready(),
                this.UsageMonitor.ready(),
                this.MetricManager.ready(),
                this.MetricResolver.ready(),
                this.LocalStat.ready(),
                this.UIManager.ready(),
                this.process !== a.a.Main && this.MetricTransporter.ready()));
          }
          static isInstalled() {
            return !!this._installed;
          }
          static startEpoch() {
            this._epoch ||
              ((this._epoch = Date.now()),
              this.DataManager.saveEpoch(this.process, this._epoch));
          }
          static get process() {
            return (
              this._process || (this._process = this.getCurrentProcess()),
              this._process
            );
          }
          static getCurrentProcess() {
            switch (__ZaBUNDLENAME__.toLowerCase()) {
              case "main":
                return a.a.Main;
              case "web":
                return a.a.Web;
              case "render":
                return a.a.Render;
              case "login":
                return a.a.Login;
              case "photo":
                return a.a.Photo;
              case "shared-worker":
                return a.a.SharedWorker;
              case "znotification":
                return a.a.Notification;
              default:
                return a.a.Unknown;
            }
          }
          static canIUse() {
            return (
              !(!this._installed || this._exited) &&
              r.a.getConfig().processes_whitelist.includes(this.process)
            );
          }
          static exit() {
            var e, t, n, r;
            ((this._exited = !0),
            (this._installed = !1),
            this.MetricManager.exit(),
            this.MetricResolver.exit(),
            this.MetricTransporter.exit(),
            this.UIManager.exit(),
            this.process === a.a.Main)
              ? this._toolboxMain &&
                (null === (e = (t = this.ToolboxMain).exit) ||
                  void 0 === e ||
                  e.call(t))
              : this._toolboxRenderer &&
                (null === (n = (r = this.ToolboxRenderer).exit) ||
                  void 0 === n ||
                  n.call(r));
          }
        }
        (o._Logger = void 0),
          (o._process = void 0),
          (o._metricManager = void 0),
          (o._schemaManager = void 0),
          (o._metricFactory = void 0),
          (o._metricTransporter = void 0),
          (o._metricResolver = void 0),
          (o._usageMonitor = void 0),
          (o._appUsageMonitor = void 0),
          (o._processMonitor = void 0),
          (o._localStat = void 0),
          (o._dataManager = void 0),
          (o._uiManager = void 0),
          (o._processLifecycleController = void 0),
          (o._toolboxRenderer = void 0),
          (o._toolboxMain = void 0),
          (o._appStateManager = void 0),
          (o.tokens = void 0),
          (o._epoch = void 0),
          (o._installed = void 0),
          (o._exited = void 0),
          (t.a = o);
      },
      OKQc: function (e, t, n) {},
      OMsT: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("log-collector");
      },
      PJuT: function (e, t, n) {
        "use strict";
        var r = n("0Kvb");
        n.o(r, "MetricEvent") &&
          n.d(t, "MetricEvent", function () {
            return r.MetricEvent;
          }),
          n.o(r, "MetricName") &&
            n.d(t, "MetricName", function () {
              return r.MetricName;
            }),
          n.o(r, "MetricTool") &&
            n.d(t, "MetricTool", function () {
              return r.MetricTool;
            }),
          n.o(r, "MetriczDriver") &&
            n.d(t, "MetriczDriver", function () {
              return r.MetriczDriver;
            }),
          n.o(r, "MetriczMessenger") &&
            n.d(t, "MetriczMessenger", function () {
              return r.MetriczMessenger;
            }),
          n.o(r, "MetriczUtilsAPI") &&
            n.d(t, "MetriczUtilsAPI", function () {
              return r.MetriczUtilsAPI;
            });
        var i = n("5Mf1");
        n.o(i, "MetricEvent") &&
          n.d(t, "MetricEvent", function () {
            return i.MetricEvent;
          }),
          n.o(i, "MetricName") &&
            n.d(t, "MetricName", function () {
              return i.MetricName;
            }),
          n.o(i, "MetricTool") &&
            n.d(t, "MetricTool", function () {
              return i.MetricTool;
            }),
          n.o(i, "MetriczDriver") &&
            n.d(t, "MetriczDriver", function () {
              return i.MetriczDriver;
            }),
          n.o(i, "MetriczMessenger") &&
            n.d(t, "MetriczMessenger", function () {
              return i.MetriczMessenger;
            }),
          n.o(i, "MetriczUtilsAPI") &&
            n.d(t, "MetriczUtilsAPI", function () {
              return i.MetriczUtilsAPI;
            });
        var a = n("yevd");
        n.o(a, "MetricEvent") &&
          n.d(t, "MetricEvent", function () {
            return a.MetricEvent;
          }),
          n.o(a, "MetricName") &&
            n.d(t, "MetricName", function () {
              return a.MetricName;
            }),
          n.o(a, "MetricTool") &&
            n.d(t, "MetricTool", function () {
              return a.MetricTool;
            }),
          n.o(a, "MetriczDriver") &&
            n.d(t, "MetriczDriver", function () {
              return a.MetriczDriver;
            }),
          n.o(a, "MetriczMessenger") &&
            n.d(t, "MetriczMessenger", function () {
              return a.MetriczMessenger;
            }),
          n.o(a, "MetriczUtilsAPI") &&
            n.d(t, "MetriczUtilsAPI", function () {
              return a.MetriczUtilsAPI;
            });
      },
      PhBv: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return s;
          });
        var r = n("jDHv"),
          i = n("AH6j");
        n("PmZf");
        class a extends i.b {}
        const s = Object(r.define)("database-query-planner");
      },
      PmZf: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return i;
        }),
          n.d(t, "d", function () {
            return a;
          }),
          n.d(t, "c", function () {
            return s;
          }),
          n.d(t, "g", function () {
            return o;
          }),
          n.d(t, "f", function () {
            return l;
          }),
          n.d(t, "e", function () {
            return c;
          }),
          n.d(t, "a", function () {
            return d;
          });
        var r = n("AH6j");
        let i;
        !(function (e) {
          (e.Close = "close"),
            (e.SessionChange = "session-change"),
            (e.MigrateProgress = "migrate-progress"),
            (e.MigratePhaseChange = "migrate-phase-change"),
            (e.MigrateDone = "migrate-done"),
            (e.TimeConsumingQuery = "time-consuming-query"),
            (e.SuccessOpenDB = "success-open-db"),
            (e.ConnectionClosedAbnormally = "connection-close-abnormally"),
            (e.TransactionEnd = "transaction-end"),
            (e.QueryExec = "query-exe"),
            (e.QueryError = "query-error"),
            (e.UnexpectedError = "unexpected-error");
        })(i || (i = {}));
        r.a;
        class a extends r.a {
          constructor(e) {
            super(i.SessionChange), (this.session = e);
          }
        }
        r.a;
        r.a;
        r.a;
        r.a;
        r.a;
        class s extends r.a {
          constructor(e) {
            super(i.QueryError), (this.error = e);
          }
        }
        class o extends r.a {
          constructor(e) {
            super(i.UnexpectedError), (this.error = e);
          }
        }
        class l extends r.a {
          constructor(e, t) {
            super(i.TimeConsumingQuery),
              (this.logInfo = e),
              (this.totalTime = t);
          }
        }
        class c extends r.a {
          constructor(e) {
            super(i.SuccessOpenDB), (this.data = e);
          }
        }
        class d extends r.a {
          constructor(e) {
            super(i.ConnectionClosedAbnormally), (this.database = e);
          }
        }
      },
      Ro2z: function (e, t, n) {},
      SWKE: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return s;
        });
        var r = n("jDHv"),
          i = n("Mgpg"),
          a = n("fsN4");
        class s {
          constructor() {
            this.logger = void 0;
            const e = r.ModuleContainer.resolve(i.ZLoggerFactory);
            this.logger = e.createZLogger("localstorage", ["cleaner"]);
          }
          static getInstance() {
            return this.instance || (this.instance = new s()), this.instance;
          }
          cleanupLocalStorageMatchConditions(e) {
            void 0 === e && (e = (e) => !1);
            const t = Object.keys(window.localStorage);
            for (const n of t) e(n) && window.localStorage.removeItem(n);
          }
          cleanupKeysOfLocalStorage(e) {
            void 0 === e && (e = []);
            for (const t of e) window.localStorage.removeItem(t);
          }
          clearLocalStorage() {
            window.localStorage.clear();
          }
          async cleanupAsyncLocalStorageMatchConditions(e) {
            void 0 === e && (e = (e) => !1);
            const t = a.default.getInstance(),
              n = [
                t.Storage.FriendBlocked,
                t.Storage.InfoCache,
                t.Storage.RetryCache,
                t.SecureLocalstorage.AsyncStore,
              ],
              r = [];
            for (const i of n) {
              const t = await i.getAllKey();
              if (0 === t.length) continue;
              if (Array.isArray(t[0])) {
                this.logger.zsymb(
                  9,
                  10328,
                  3e4,
                  '"{}" store has array-typed keys; then can\'t be matched for cleaning up',
                  i.name,
                );
                continue;
              }
              const n = [];
              for (const r of t) e(`${r}`) && n.push(r);
              n.length && r.push(i.deleteMulti(n));
            }
            r.length && (await Promise.all(r));
          }
          async clearAsyncLocalStorage() {
            const e = a.default.getInstance(),
              t = [
                e.Storage.FriendBlocked,
                e.Storage.InfoCache,
                e.Storage.RetryCache,
                e.SecureLocalstorage.AsyncStore,
              ];
            return Promise.all(t.map((e) => e.clear()));
          }
        }
        s.instance = null;
      },
      TTNl: function (e, t, n) {
        "use strict";
        var r = n("tHMN");
        n.d(t, "a", function () {
          return r.b;
        });
      },
      UJ0r: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return s;
          });
        var r = n("jDHv"),
          i = n("AH6j");
        n("PmZf");
        class a extends i.b {}
        const s = Object(r.define)("database-adapter-manager");
      },
      UK4g: function (e, t, n) {
        "use strict";
        n.d(t, "k", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          }),
          n.d(t, "j", function () {
            return a;
          }),
          n.d(t, "g", function () {
            return s;
          }),
          n.d(t, "c", function () {
            return o;
          }),
          n.d(t, "d", function () {
            return l;
          }),
          n.d(t, "f", function () {
            return c;
          }),
          n.d(t, "e", function () {
            return d;
          }),
          n.d(t, "h", function () {
            return u;
          }),
          n.d(t, "i", function () {
            return g;
          }),
          n.d(t, "l", function () {
            return m;
          }),
          n.d(t, "a", function () {
            return p;
          });
        const r = 0,
          i = void 0,
          a = 2,
          s = "db",
          o = "db-authenticated",
          l = "db-client-connected",
          c = "db-start-close-dbs",
          d = "db-finish-close-dbs",
          u = 1e4,
          g = 0,
          m = 1e4,
          p = !1;
      },
      Ugdv: function (e, t, n) {
        "use strict";
        n("PhBv");
      },
      WOPK: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        });
        var r = n("kQx2");
        let i = 0;
        const a = () => (i++, Math.floor(Object(r.a)() + i));
      },
      X2RP: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return s;
        });
        var r = n("jDHv"),
          i = n("AH6j"),
          a = n("Mgpg");
        class s extends i.b {
          constructor() {
            super(), (this.logger = void 0);
            const e = r.ModuleContainer.resolve(a.ZLoggerFactory);
            this.logger = e.createZLogger("query-executor", [
              this.getExecutorName(),
            ]);
          }
        }
      },
      XB6V: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("zlogger-factory");
      },
      YEoC: function (e, t, n) {
        "use strict";
        let r, i, a, s, o, l, c;
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "g", function () {
            return i;
          }),
          n.d(t, "f", function () {
            return a;
          }),
          n.d(t, "c", function () {
            return s;
          }),
          n.d(t, "a", function () {
            return o;
          }),
          n.d(t, "d", function () {
            return l;
          }),
          n.d(t, "e", function () {
            return c;
          }),
          (function (e) {
            (e.NEXT = "next"),
              (e.NEXT_UNIQUE = "nextunique"),
              (e.PREV = "prev"),
              (e.PREV_UNIQUE = "prevunique");
          })(r || (r = {})),
          (function (e) {
            (e.integer = "integer"),
              (e.float = "float"),
              (e.string = "string"),
              (e.boolean = "boolean"),
              (e.json = "json"),
              (e.blob = "blob"),
              (e.jsonAndString = "json&string");
          })(i || (i = {})),
          (function (e) {
            (e.READONLY = "readonly"), (e.READWRITE = "readwrite");
          })(a || (a = {})),
          (function (e) {
            (e[(e.BLOCKING = 0)] = "BLOCKING"),
              (e[(e.NON_BLOCKING = 50)] = "NON_BLOCKING"),
              (e[(e.LOW = 100)] = "LOW"),
              (e[(e.IDLE = 250)] = "IDLE"),
              (e[(e.NEVER_TIMEOUT = 1e3)] = "NEVER_TIMEOUT");
          })(s || (s = {})),
          (function (e) {
            (e[(e.IDB = 0)] = "IDB"), (e[(e.SQLite = 1)] = "SQLite");
          })(o || (o = {})),
          (function (e) {
            (e[(e.BeginTransaction = 0)] = "BeginTransaction"),
              (e[(e.CommitTransaction = 1)] = "CommitTransaction"),
              (e[(e.Clear = 2)] = "Clear"),
              (e[(e.Get = 3)] = "Get"),
              (e[(e.GetAndUpdate = 4)] = "GetAndUpdate"),
              (e[(e.GetMulti = 5)] = "GetMulti"),
              (e[(e.GetAll = 6)] = "GetAll"),
              (e[(e.GetAllKey = 7)] = "GetAllKey"),
              (e[(e.Insert = 8)] = "Insert"),
              (e[(e.InsertMulti = 9)] = "InsertMulti"),
              (e[(e.Update = 10)] = "Update"),
              (e[(e.UpdateMulti = 11)] = "UpdateMulti"),
              (e[(e.Delete = 12)] = "Delete"),
              (e[(e.DeleteMulti = 13)] = "DeleteMulti"),
              (e[(e.FindAndDelete = 14)] = "FindAndDelete"),
              (e[(e.Count = 15)] = "Count"),
              (e[(e.CloseDB = 16)] = "CloseDB"),
              (e[(e.CloseAllDBs = 17)] = "CloseAllDBs"),
              (e[(e.DeleteDB = 18)] = "DeleteDB"),
              (e[(e.DeleteAllDBs = 19)] = "DeleteAllDBs");
          })(l || (l = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Background = 1)] = "Background"),
              (e[(e.Host = 2)] = "Host"),
              (e[(e.Client = 3)] = "Client"),
              (e[(e.Worker = 4)] = "Worker"),
              (e[(e.Browser = 5)] = "Browser");
          })(c || (c = {}));
      },
      YZti: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return o;
        }),
          n.d(t, "c", function () {
            return c;
          }),
          n.d(t, "b", function () {
            return d;
          });
        var r = n("YEoC"),
          i = n("DI/x");
        const a =
          "undefined" != typeof window &&
          "Microsoft Internet Explorer" ==
            (null === (s = window.navigator) || void 0 === s
              ? void 0
              : s.appName);
        var s;
        let o;
        var l;
        let c;
        let d;
        var u;
        ((l = o || (o = {})).encrypt = function (e, t) {
          let n = 0,
            r = [];
          if (a) {
            let n = 0,
              i = e.length;
            for (let e = 0; e < t.length; e++) n += t.charCodeAt(e);
            n %= i;
            for (let t = 0; t < e.length; t++)
              r.push(String.fromCharCode(e.charCodeAt((t + n) % i)));
          } else
            for (let i = 0; i < e.length; i++)
              r.push(String.fromCharCode(e.charCodeAt(i) ^ t.charCodeAt(n))),
                n++,
                n > t.length - 1 && (n = 0);
          return r.join("");
        }),
          (l.decrypt = function (e, t) {
            let n = 0,
              r = [];
            if (a) {
              let n = 0,
                i = e.length;
              for (let e = 0; e < t.length; e++) n += t.charCodeAt(e);
              (n %= i), (n = i - n);
              for (let t = 0; t < e.length; t++)
                r.push(String.fromCharCode(e.charCodeAt((t + n) % i)));
            } else
              for (let i = 0; i < e.length; i++)
                r.push(String.fromCharCode(e.charCodeAt(i) ^ t.charCodeAt(n))),
                  n++,
                  n > t.length - 1 && (n = 0);
            return r.join("");
          }),
          ((c || (c = {})).getTypeName = function (e) {
            switch (e) {
              case r.d.BeginTransaction:
                return "begin-transaction";
              case r.d.CommitTransaction:
                return "commit-transaction";
              case r.d.Clear:
                return "clear";
              case r.d.Get:
                return "get";
              case r.d.GetAndUpdate:
                return "get-and-update";
              case r.d.GetMulti:
                return "get-multi";
              case r.d.GetAll:
                return "get-all";
              case r.d.GetAllKey:
                return "get-all-key";
              case r.d.Insert:
                return "insert";
              case r.d.InsertMulti:
                return "insert-multi";
              case r.d.Update:
                return "update";
              case r.d.UpdateMulti:
                return "update-multi";
              case r.d.Delete:
                return "delete";
              case r.d.DeleteMulti:
                return "delete-multi";
              case r.d.FindAndDelete:
                return "find-and-delete";
              case r.d.Count:
                return "count";
              case r.d.CloseDB:
                return "close-db";
              case r.d.CloseAllDBs:
                return "close-all-dbs";
              case r.d.DeleteDB:
                return "delete-db";
              case r.d.DeleteAllDBs:
                return "delete-all-dbs";
            }
          }),
          ((u = d || (d = {})).isMissingTableError = function (e) {
            return e instanceof i.e && e.code === i.p;
          }),
          (u.isInvalidVersionError = function (e) {
            return e instanceof i.e && e.code === i.m;
          }),
          (u.isFailedToOpenConnectionError = function (e) {
            return e instanceof i.e && e.code === i.k;
          });
      },
      ZICu: function (e, t, n) {
        "use strict";
        var r = n("YEoC"),
          i = n("xI/L"),
          a = n("qcQX"),
          s = n("KiFO");
        new a.a({
          name: "internal",
          session: !0,
          version: 1,
          milestoneVersion: 1,
          type: r.a.SQLite,
          partitionNamingStrategy: [i.a.const("internal")],
          partitionsMap: { default: { tables: [s.a] } },
        }),
          s.a;
      },
      ZcVI: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          }),
          n.d(t, "c", function () {
            return a;
          }),
          n.d(t, "d", function () {
            return s;
          }),
          n.d(t, "h", function () {
            return o;
          }),
          n.d(t, "i", function () {
            return l;
          }),
          n.d(t, "j", function () {
            return c;
          }),
          n.d(t, "p", function () {
            return d;
          }),
          n.d(t, "n", function () {
            return u;
          }),
          n.d(t, "o", function () {
            return g;
          }),
          n.d(t, "e", function () {
            return m;
          }),
          n.d(t, "f", function () {
            return p;
          }),
          n.d(t, "g", function () {
            return f;
          }),
          n.d(t, "k", function () {
            return y;
          }),
          n.d(t, "l", function () {
            return h;
          }),
          n.d(t, "m", function () {
            return _;
          });
        const r = "conversation",
          i = "friend",
          a = "group",
          s = "group_info",
          o = "ac",
          l = "acv2",
          c = "aco",
          d = "sock_msg",
          u = "sock_ac",
          g = "sock_aco",
          m = "actr",
          p = "actrv2",
          f = "actro",
          y = "sock_ctrl",
          h = "sock_ctrl_ac",
          _ = "sock_ctrl_aco";
      },
      aLZP: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n("K+9E"),
          i = n("N1xz"),
          a = n("bfOK");
        class s extends a.a {
          constructor() {
            super();
          }
          get Installer() {
            return {
              updateOffsetTime: (e) => {
                this.TimeHelper.updateOffsetTime(e);
              },
            };
          }
          getDebugger() {}
          requestCpuIdle(e, t) {
            setTimeout(
              () => {
                e();
              },
              (null == t ? void 0 : t.timeout) || 1e3,
            );
          }
        }
        i.a.register(r.a.TOOLBOX, s);
      },
      b3Jv: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = {
            IdxQueue: new s.d({
              tableName: "idx_queue",
              name: "IdxQueue",
              fields: {
                msgId: { name: "msgId", type: i.g.string },
                toUid: { name: "toUid", type: i.g.string },
                message: { name: "message", type: i.g.json },
                msgType: { name: "msgType", type: i.g.integer },
                ts: { name: "ts", type: i.g.string },
                fromUid: { name: "fromUid", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "msgId" }],
                  unique: !0,
                },
              },
            }),
            StCont: new s.d({
              tableName: "stcont",
              name: "StCont",
              fields: {
                msgId: { name: "msgId", type: i.g.string },
                convId: { name: "convId", type: i.g.string },
                msgType: { name: "msgType", type: i.g.integer },
                index: { name: "index", type: i.g.integer },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "index" }],
                  unique: !0,
                  autoIncrement: !0,
                },
                msgId: {
                  name: "msgId",
                  fields: [{ type: "raw", field: "msgId" }],
                  unique: !0,
                },
              },
            }),
            StIdx: new s.d({
              tableName: "stidx",
              name: "StIdx",
              fields: {
                keywordId: { name: "keywordId", type: i.g.integer },
                contentId: { name: "contentId", type: i.g.integer },
                freq: { name: "freq", type: i.g.integer },
                index: { name: "index", type: i.g.integer },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "index" }],
                  unique: !0,
                  autoIncrement: !0,
                },
                keywordId: {
                  name: "keywordId",
                  fields: [{ type: "raw", field: "keywordId" }],
                  unique: !1,
                },
              },
            }),
            StKeyword: new s.d({
              tableName: "stkw",
              name: "StKeyword",
              fields: {
                keyword: { name: "keyword", type: i.g.string },
                index: { name: "index", type: i.g.integer },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "index" }],
                  unique: !0,
                  autoIncrement: !0,
                },
                keyword: {
                  name: "keyword",
                  fields: [{ type: "raw", field: "keyword" }],
                  unique: !0,
                },
              },
            }),
          },
          c = { name: "Search", session: !0 },
          d = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("Search"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(l),
          },
          u = {
            partitionNamingStrategy: [a.a.const("sidx"), a.a.byUser()],
            partitionsMap: Object(o.b)(l),
          },
          g = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), d),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          m = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), u),
            {},
            { version: 2, milestoneVersion: 2, type: i.a.IDB },
          );
        let p = null,
          f = null;
        t.a = {
          schema: l,
          get useSqlite() {
            return null === p && (p = new s.a(g)), p;
          },
          get useIdb() {
            return null === f && (f = new s.a(m)), f;
          },
        };
      },
      bH0y: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return s;
        });
        var r = n("+7Kn"),
          i = n("wudS"),
          a = n("Cvfp");
        const s = new (class {
          constructor() {
            (this._localStorageKeys = null),
              (this._indexedDBKeys = null),
              (this._keyName = null);
          }
          init(e) {
            if (!e) throw new r.b();
            const t = `${Object(i.b)(e)}_sktmig`;
            this._keyName = t;
            let n = { l: [], i: [] };
            const a = window.localStorage.getItem(t);
            null !== a && (n = JSON.parse(a));
            const { l: s, i: o } = n;
            (this._localStorageKeys = s), (this._indexedDBKeys = o);
          }
          _hasInitialized() {
            return (
              null !== this._keyName &&
              null !== this._localStorageKeys &&
              null !== this._indexedDBKeys
            );
          }
          _getKeyName() {
            if (!this._hasInitialized()) throw new r.g();
            return this._keyName;
          }
          _getSecureIndexedDBKey(e, t, n) {
            return [e, t, n].join(a.a);
          }
          getSecureIndexedDBKeyObject(e) {
            const t = e.split(a.a);
            if (3 !== t.length) throw new r.e();
            const [n, i, s] = t;
            return { dbName: n, storeName: i, keyName: s };
          }
          getLocalStorageKeys() {
            if (!this._hasInitialized()) throw new r.g();
            return this._localStorageKeys;
          }
          getIndexedDBKeys() {
            if (!this._hasInitialized()) throw new r.g();
            return this._indexedDBKeys;
          }
          isLocalStorageKeyMarked(e) {
            return this.getLocalStorageKeys().includes(e);
          }
          markLocalStorageKey(e) {
            this.isLocalStorageKeyMarked(e) ||
              this.getLocalStorageKeys().push(e);
          }
          unmarkLocalStorageKey(e) {
            if (!this.isLocalStorageKeyMarked(e)) return;
            const t = this.getLocalStorageKeys().indexOf(e);
            this.getLocalStorageKeys().splice(t, 1);
          }
          isIndexedDBKeyMarked(e) {
            return this.getIndexedDBKeys().includes(e);
          }
          markIndexedDBKey(e, t, n) {
            const r = this._getSecureIndexedDBKey(e, t, n);
            this.isIndexedDBKeyMarked(r) || this.getIndexedDBKeys().push(r);
          }
          unmarkIndexedDBKey(e, t, n) {
            const r = this._getSecureIndexedDBKey(e, t, n);
            if (!this.isIndexedDBKeyMarked(r)) return;
            const i = this.getIndexedDBKeys().indexOf(r);
            this.getIndexedDBKeys().splice(i, 1);
          }
          save() {
            if (!this._hasInitialized()) return;
            const e = {
              l: this.getLocalStorageKeys(),
              i: this.getIndexedDBKeys(),
            };
            window.localStorage.setItem(this._getKeyName(), JSON.stringify(e));
          }
        })();
      },
      bSii: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return i;
        }),
          n.d(t, "c", function () {
            return a;
          }),
          n.d(t, "a", function () {
            return s;
          });
        var r = n("igA5");
        n("YEoC");
        function i(e, t) {
          if (!globalThis.localStorage) return t;
          try {
            const t = r.default.getInstance().getItem(e);
            if (t) return JSON.parse(t);
          } catch (n) {}
          return a(e, t), t;
        }
        function a(e, t) {
          r.default.getInstance().setItem(e, JSON.stringify(t));
        }
        function s(e) {
          return 1 === e.length ? e[0] : e;
        }
      },
      bfOK: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        class r {
          constructor() {
            (this.offsetClient = 0),
              (this.updateOffsetTime = (e) => {
                this.offsetClient = e;
              });
          }
          now() {
            return Date.now() + this.offsetClient;
          }
          getOffsetTime() {
            return this.offsetClient;
          }
        }
        class i {
          constructor() {
            (this.timeHelper = void 0), (this.timeHelper = new r());
          }
          get TimeHelper() {
            return this.timeHelper;
          }
        }
      },
      buT3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        });
        const r = "LOCAL_STORAGE_MODE/DEFAULT",
          i = "LOCAL_STORAGE_MODE/DRY";
        const a = new (class {
          constructor() {
            this._mode = r;
          }
          turnOnDryMode() {
            this._mode = i;
          }
          turnOnDefaultMode() {
            this._mode = r;
          }
          hasItem(e) {
            return null !== window.localStorage.getItem(e);
          }
          setItem(e, t) {
            this._mode !== i && window.localStorage.setItem(e, t);
          }
          getItem(e) {
            return window.localStorage.getItem(e);
          }
          removeItem(e) {
            window.localStorage.removeItem(e);
          }
          getAllKeyNames() {
            return Object.keys(window.localStorage);
          }
        })();
      },
      cWDS: function (e, t, n) {
        "use strict";
        n("FPa7"), n("OKQc");
        var r = n("zFSh");
        n.d(t, "MetriczProcessLifecycle", function () {
          return r.b;
        });
        n("gpS1");
        var i = n("PJuT");
        n.o(i, "MetricEvent") &&
          n.d(t, "MetricEvent", function () {
            return i.MetricEvent;
          }),
          n.o(i, "MetricName") &&
            n.d(t, "MetricName", function () {
              return i.MetricName;
            }),
          n.o(i, "MetricTool") &&
            n.d(t, "MetricTool", function () {
              return i.MetricTool;
            }),
          n.o(i, "MetriczDriver") &&
            n.d(t, "MetriczDriver", function () {
              return i.MetriczDriver;
            }),
          n.o(i, "MetriczMessenger") &&
            n.d(t, "MetriczMessenger", function () {
              return i.MetriczMessenger;
            }),
          n.o(i, "MetriczUtilsAPI") &&
            n.d(t, "MetriczUtilsAPI", function () {
              return i.MetriczUtilsAPI;
            });
      },
      cnBV: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          });
        const r = {
            ux_latency: "ux_latency",
            task_latency: "task_latency",
            usage: "usage",
            web_vitals: "web_vitals",
            navigation_timing: "navigation_timing",
            core: "core",
          },
          i = { start_up: "start_up", dal: "dal", chat: "chat", e2ee: "e2ee" };
      },
      "d/or": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("database-settings-manager");
      },
      d04y: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = new s.d({
            tableName: "actionlog",
            name: "Actionlog",
            fields: { type: i.g.string },
            indices: {},
            isNonFieldlikeEntity: !0,
          }),
          c = {
            Qoslogv2: new s.d({
              tableName: "qoslogv2",
              name: "Qoslogv2",
              fields: {
                record: { name: "record", type: i.g.string },
                ts: { name: "ts", type: i.g.integer },
                cmdId: { name: "cmdId", type: i.g.string },
                type: { name: "type", type: i.g.string },
                requestId: {
                  name: "requestId",
                  type: i.g.integer,
                  nullable: !0,
                },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [
                    { type: "raw", field: "ts" },
                    { type: "raw", field: "cmdId" },
                    { type: "raw", field: "type" },
                  ],
                  unique: !0,
                },
                ts: {
                  name: "ts",
                  fields: [{ type: "raw", field: "ts" }],
                  unique: !1,
                },
              },
            }),
            Actionlog: l,
          },
          d = { name: "Qos", session: !1 },
          u = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [a.a.const("Qos"), a.a.byTable()],
            partitionsMap: Object(o.a)(c),
          },
          g = {
            partitionNamingStrategy: [a.a.const("zdb_qos")],
            partitionsMap: Object(o.b)(c),
          },
          m = Object(r.a)(
            Object(r.a)(Object(r.a)({}, d), u),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          p = Object(r.a)(
            Object(r.a)(Object(r.a)({}, d), g),
            {},
            { version: 3, milestoneVersion: 3, type: i.a.IDB },
          );
        let f = null,
          y = null;
        t.a = {
          schema: c,
          get useSqlite() {
            return null === f && (f = new s.a(m)), f;
          },
          get useIdb() {
            return null === y && (y = new s.a(p)), y;
          },
        };
      },
      d74q: function (e, t, n) {
        "use strict";
        let r;
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          }),
          ((r || (r = {})).Channel = class {
            constructor() {
              (this.SharedWorkerChannel = void 0),
                (this.NotificationChannel = void 0),
                (this.send = void 0),
                (this.invoke = void 0),
                (this.registerHandler = void 0),
                (this.handler = void 0),
                (this.invoker = void 0),
                (this.sender = void 0);
            }
          });
        const i = () => new r.Channel();
      },
      dFSO: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
          return s;
        }),
          n.d(t, "b", function () {
            return o;
          }),
          n.d(t, "d", function () {
            return l;
          }),
          n.d(t, "c", function () {
            return d;
          }),
          n.d(t, "a", function () {
            return m;
          });
        const r = 36e5,
          i = 24 * r,
          a = { W: 6048e5, D: i, h: r, m: 6e4, s: 1e3 },
          s = (e) => {
            var t;
            const n =
              null === (t = /(\d+)(ms)/g.exec(e)) || void 0 === t
                ? void 0
                : t[1];
            if (n) return Number(n);
            const r = /(\d+)([WDhms])/g;
            let i,
              s = 0;
            for (; (i = r.exec(e)); ) s += parseInt(i[1]) * a[i[2]];
            return s;
          },
          o = (e) => null == e,
          l = (e, t) => {
            let n = e;
            const r = [];
            for (const i in a) {
              const e = a[i],
                t = Math.trunc(n / e);
              t > 0 && (r.push(`${t}`.padStart(2, "0") + i), (n -= t * e));
            }
            return (
              n > 0 &&
                (null != t && (n = Number(n.toFixed(t))), r.push(n + "ms")),
              r.join(":")
            );
          },
          c = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          d = (e) => {
            let t = 0,
              n = parseInt(e.toString(), 10) || 0;
            for (; n >= 1024 && ++t; ) n /= 1024;
            return n.toFixed(n < 10 && t > 0 ? 1 : 0) + " " + c[t];
          };
        let u,
          g = {};
        const m = (e) => {
          if (!u) {
            let e = "";
            [...c].reverse().forEach((t, n) => {
              (g[t] = 1024 ** (c.length - 1 - n)), (e += 0 === n ? t : `|${t}`);
            }),
              (u = new RegExp(`^(\\d+(\\.\\d+)?)\\s*(${e})$`));
          }
          let t = 0,
            n = u.exec(e);
          if (n && n[1] && c.includes(n[3])) {
            const e = parseFloat(n[1]),
              r = n[3];
            isNaN(e) || (t += e * g[r]);
          }
          return t;
        };
      },
      f1TF: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return s;
        }),
          n.d(t, "a", function () {
            return o;
          });
        var r = n("N1xz"),
          i = n("CHYU"),
          a = n("fbdB");
        const s = (e) =>
          null != e && e.message && null != e && e.name
            ? `${e.name}: ${e.message}`
            : e;
        class o {
          constructor(e) {
            var t = this;
            (this.moduleName = e),
              (this._logger = void 0),
              (this.pendingLogs = void 0),
              (this.zsymb = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zsymb", ...n);
              }),
              (this.zinfo = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zinfo", ...n);
              }),
              (this.zwarn = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zwarn", ...n);
              }),
              (this.zerror = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zerror", ...n);
              }),
              (this.zdebug = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zdebug", ...n);
              }),
              (this.zsentry = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zsentry", ...n);
              }),
              (this.zfatal = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zfatal", ...n);
              }),
              (this.zinfoC = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zinfoC", ...n);
              }),
              (this.zinfoF = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zinfoF", ...n);
              }),
              (this.zwarnC = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zwarnC", ...n);
              }),
              (this.zwarnF = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zwarnF", ...n);
              }),
              (this.zerrorC = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zerrorC", ...n);
              }),
              (this.zerrorF = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zerrorF", ...n);
              }),
              (this.zdebugC = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zdebugC", ...n);
              }),
              (this.zdebugF = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                t.logDefault("zdebugF", ...n);
              }),
              (this.pendingLogs = new Map());
          }
          isEnabled() {
            return (
              !!r.a.canIUse() &&
              (!(
                r.a.process !== i.a.Main ||
                !r.a.DataManager.getEvent(a.a.main_ready)
              ) ||
                !(
                  r.a.process !== i.a.Render ||
                  !r.a.DataManager.getEvent(a.a.app_did_mount)
                ) ||
                r.a.process === i.a.SharedWorker ||
                !!r.a.DataManager.getEvent(a.a.app_did_mount))
            );
          }
          createZlogger() {
            if (this.isEnabled() && !this._logger)
              try {
                const { ModuleContainer: e } = n("jDHv"),
                  { ZLoggerFactory: t } = n("Mgpg"),
                  { ZLoggerNametags: r } = n("h0S/");
                (this._logger = e
                  .resolve(t)
                  .createZLogger(r.metricz, [this.moduleName])),
                  this.resolvePendingLogs();
              } catch (e) {}
          }
          resolvePendingLogs() {
            this.pendingLogs.forEach((e, t) => {
              e.forEach((e) => {
                this.logDefault(t, ...e);
              });
            }),
              this.pendingLogs.clear();
          }
          addPendingLogs(e, t) {
            this.pendingLogs.has(e) || this.pendingLogs.set(e, []);
            const n = this.pendingLogs.get(e);
            n && (n.push(t), n.length > 200 && n.shift());
          }
          pause() {
            this.logDefault("pause");
          }
          resume() {
            this.logDefault("resume");
          }
          disableFile() {
            this.logDefault("disableFile");
          }
          enableFile() {
            this.logDefault("enableFile");
          }
          disableConsole() {
            this.logDefault("disableConsole");
          }
          enableConsole() {
            this.logDefault("enableConsole");
          }
          logDefault(e) {
            this.createZlogger();
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var i, a;
            this._logger
              ? null === (i = (a = this._logger)[e]) ||
                void 0 === i ||
                i.call(a, ...n)
              : this.addPendingLogs(e, [...n]);
          }
        }
      },
      fbdB: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return r.a;
        }),
          n.d(t, "a", function () {
            return i;
          });
        var r = n("uzza");
        var i = {
          bootstrap: "bootstrap",
          main_ready: "main_ready",
          main_window_finish_load: "main_window_finish_load",
          main_receive_server_config: "main_receive_server_config",
          app_did_mount: "app_did_mount",
          app_done_preload_data: "app_done_preload_data",
          app_ready: "app_ready",
          app_receive_server_config: "app_receive_server_config",
          before_log_out: "before_log_out",
        };
        n("cnBV");
      },
      fsN4: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "default", function () {
            return s;
          });
        var r = n("jDHv"),
          i = n("+ExH"),
          a = n("1UUk");
        class s {
          static getInstance() {
            if (!this.instance) {
              const e = r.ModuleContainer.resolve(a.b);
              this.instance = e.createQueryBuilder(i.a);
            }
            return this.instance;
          }
        }
        s.instance = null;
      },
      fsQs: function (e, t, n) {
        "use strict";
        n.d(t, "h", function () {
          return r;
        }),
          n.d(t, "f", function () {
            return a;
          }),
          n.d(t, "g", function () {
            return s;
          }),
          n.d(t, "e", function () {
            return o;
          }),
          n.d(t, "i", function () {
            return l;
          }),
          n.d(t, "j", function () {
            return c;
          }),
          n.d(t, "l", function () {
            return d;
          }),
          n.d(t, "o", function () {
            return u;
          }),
          n.d(t, "a", function () {
            return g;
          }),
          n.d(t, "m", function () {
            return m;
          }),
          n.d(t, "k", function () {
            return p;
          }),
          n.d(t, "d", function () {
            return f;
          }),
          n.d(t, "b", function () {
            return y;
          }),
          n.d(t, "c", function () {
            return h;
          }),
          n.d(t, "n", function () {
            return b;
          });
        const r = 1024,
          i = r * r,
          a = 1e3,
          s = 2e3,
          o = 5e3,
          l = 1e5,
          c = 1e3,
          d = 3e5,
          u = 61,
          g = 100,
          m = { SESSION_MAX: 32767, SESSION_LINE_MAX: 4294967295 },
          p = {
            mem_batch_lim: 500 * r,
            line_hard_lim: 30 + 50 * r,
            line_soft_lim: 30 + 2 * r,
            file_lim: 10 * i,
            page_limit: 10 * i,
          },
          f = {
            mem_batch_lim: 150 * r,
            line_hard_lim: 30 + 50 * r,
            line_soft_lim: 30 + 2 * r,
            file_lim: 5 * i,
            page_limit: 250 * r,
          },
          y = {
            i8: 1,
            ui8: 1,
            i16: 2,
            ui16: 2,
            i32: 4,
            ui32: 4,
            float32: 4,
            float64: 4,
            big64: 8,
            ubig64: 8,
          };
        let h, _;
        !(function (e) {
          (e[(e.OK = 0)] = "OK"),
            (e[(e.ENCODE_LATER = 1)] = "ENCODE_LATER"),
            (e[(e.REWIND = 2)] = "REWIND"),
            (e[(e.OVERSIZE_NEXTPAGE = 3)] = "OVERSIZE_NEXTPAGE");
        })(h || (h = {})),
          (function (e) {
            (e.TRUNCATED_ALL = "SLEE0"),
              (e.ENCODE_BUFF_HARD_LIMIT = "SLEE1"),
              (e.ENCODE_BUFF_SOFT_LIMIT = "SLEE2"),
              (e.MAX_LOGSIZE = "SLEE3"),
              (e.LINE_LIMIT_SOFT = "SLEE4"),
              (e.LINE_LIMIT_HARD = "SLEE5"),
              (e.LIME_LIMIT_HARD_NOTRUNC = "SLEE6");
          })(_ || (_ = {}));
        const b = !1;
      },
      gNXM: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return o;
        });
        var r = n("VTBJ"),
          i = n("H/wq");
        const a = "INDEXED_DB_MODE/DEFAULT",
          s = "INDEXED_DB_MODE/DRY";
        const o = new (class {
          constructor() {
            this._mode = a;
          }
          turnOnDryMode() {
            this._mode = s;
          }
          turnOnDefaultMode() {
            this._mode = a;
          }
          async openExistedDB(e) {
            const t = window.indexedDB.open(e);
            return await new Promise((n, r) => {
              (t.onupgradeneeded = function () {
                var n;
                null === (n = t.transaction) || void 0 === n || n.abort(),
                  r(new i.b(`No database whose name is ${e} exists`));
              }),
                (t.onsuccess = function () {
                  n(t.result);
                }),
                (t.onerror = function () {
                  r(t.error);
                });
            });
          }
          getKeyDataInObjectStore(e, t) {
            return new Promise((n, r) => {
              const i = t.get(e);
              (i.onsuccess = function () {
                n(i.result);
              }),
                (i.onerror = function () {
                  r(i.error);
                });
            });
          }
          getAllKeyNamesOfObjectStore(e) {
            return new Promise((t, n) => {
              const r = e.getAllKeys();
              (r.onsuccess = function () {
                t(r.result);
              }),
                (r.onerror = function () {
                  n(r.error);
                });
            });
          }
          async doesObjectStoreHaveKey(e, t) {
            return void 0 !== (await this.getKeyDataInObjectStore(e, t));
          }
          async renameKeyOfObjectStore(e, t, n, i, a) {
            void 0 === a && (a = () => {});
            const o = await this.getKeyDataInObjectStore(e, n);
            this._mode !== s &&
              (await new Promise((t, r) => {
                const i = n.delete(e);
                (i.onsuccess = function () {
                  t();
                }),
                  (i.onerror = function () {
                    r(i.error);
                  });
              }),
              await new Promise((e, a) => {
                const s = n.put(
                  Object(r.a)(Object(r.a)({}, o), {}, { [i]: t }),
                );
                (s.onsuccess = function () {
                  e();
                }),
                  (s.onerror = function () {
                    a(s.error);
                  });
              }),
              a());
          }
          async deleteKeyOfObjectStore(e, t) {
            this._mode !== s &&
              (await new Promise((n, r) => {
                const i = t.delete(e);
                (i.onsuccess = function () {
                  n();
                }),
                  (i.onerror = function () {
                    r(i.error);
                  });
              }));
          }
          async updateKeyOfObjectStore(e, t) {
            this._mode !== s &&
              (await new Promise((n, r) => {
                const i = t.put(e);
                (i.onsuccess = function () {
                  n();
                }),
                  (i.onerror = function () {
                    r(i.error);
                  });
              }));
          }
          async getTotalKeyCountOfStore(e, t) {
            let n = null;
            try {
              n = await this.openExistedDB(e);
            } catch (i) {
              return -1;
            }
            if (!n.objectStoreNames.contains(t)) return -1;
            const r = n.transaction(t, "readwrite").objectStore(t);
            return (await this.getAllKeyNamesOfObjectStore(r)).length;
          }
        })();
      },
      gbvv: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("Cvfp");
        function i(e, t) {
          const n = r.b[e];
          if (!n) return null;
          const i = n[t];
          return i || null;
        }
      },
      gpS1: function (e, t, n) {},
      "h+6H": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        });
        const r = (e) =>
          "string" == typeof e
            ? new TextEncoder().encode(e).length
            : e instanceof ArrayBuffer
              ? e.byteLength
              : ArrayBuffer.isView(e)
                ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                    .byteLength
                : new TextEncoder().encode(JSON.stringify(e)).length;
      },
      "h0S/": function (e, t, n) {
        "use strict";
        let r;
        n.r(t),
          n.d(t, "ZLoggerNametags", function () {
            return r;
          }),
          n.d(t, "ZLoggerNametagsMap", function () {
            return i;
          }),
          n.d(t, "ZLogNametagsWhitelist", function () {
            return a;
          }),
          (function (e) {
            (e.moduleA = "moduleA"),
              (e.featA = "featA"),
              (e.featPhoto = "photo"),
              (e.featPhotoLoadCache = "photoLoadCache"),
              (e.featPhotoDomCache = "photoDomCache"),
              (e.featPhotoReduxAction = "photoReduxAction"),
              (e.staging = "staging"),
              (e.onlyAdminChatSettings = "only-admin-chat-setting"),
              (e.contactTabV2 = "contact-tab-v2"),
              (e.conversationSetting = "conversation-setting"),
              (e.appStatus = "app-status"),
              (e.focusDetectorManager = "focus-detector-manager"),
              (e.focusStatus = "focus-status"),
              (e.syncDownload = "sync-download"),
              (e.entriesTransferManager = "entries-transfer-manager"),
              (e.e2eeNotifyMissingMsg = "e2ee-notify-missing-msg"),
              (e.widget = "widget"),
              (e.activeDeactive = "active-deactive"),
              (e.signalProtocolManager = "signal-protocol-manager"),
              (e.resendManager = "resend-manager"),
              (e.iidManager = "iid-manager"),
              (e.signalStore = "signal-protocol-store"),
              (e.conversation = "conversation"),
              (e.groupPollManager = "group-poll-manager"),
              (e.uiBannerController = "ui-banner-controller"),
              (e.uiBannerQueue = "ui-banner-queue"),
              (e.liteIDB = "liteIDB"),
              (e.msgSync = "msg-sync"),
              (e.cbiCommandController = "cbi-command-controller"),
              (e.cbiAnimationController = "cbi-animation-controller"),
              (e.cbiController = "cbi-controller"),
              (e.auditCBIFlagCoordinator = "audit-cbi-flag-coordinator"),
              (e.imageLoader = "image-loader"),
              (e.wss = "wss"),
              (e.download = "download"),
              (e.downloadValidate = "download-validate"),
              (e.downloadSingle = "download-single"),
              (e.downloadStaging = "download-staging"),
              (e.controller = "controller"),
              (e.service = "service"),
              (e.stateMachine = "state-machine"),
              (e.convList = "conv-list"),
              (e.e2ee = "e2ee"),
              (e.metricz = "metricz"),
              (e.unread = "unread"),
              (e.pollV3 = "pollV3"),
              (e.blobHelper = "blob-helper"),
              (e.imgNormalizer = "img-normalizer"),
              (e.pinTopic = "pin-topic"),
              (e.zinstant = "zns"),
              (e.autoRetry = "auto-retry"),
              (e.mediaStatus = "media-status"),
              (e.popupPortal = "popup-portal"),
              (e.popupPV = "popup-pv"),
              (e.previewMsgTime = "preview-msg-time"),
              (e.animation = "animation"),
              (e.photoMessageUploader = "photoMessageUploader"),
              (e.diskChecker = "disk-checker"),
              (e.common = "common"),
              (e.syncMetrics = "sync-metrics"),
              (e.cbiCommandMode = "cbi-command-mode"),
              (e.manageCBIAnimation = "manage-cbi-animation"),
              (e.controllCbi = "controll-cbi"),
              (e.coordinateAuditCBIFlag = "coordinate-audit-cbi-flag"),
              (e.fallbackTracker = "fallback-tracker"),
              (e.parser = "parser"),
              (e.linkParser = "link-parser"),
              (e.parseLinkBuilder = "parse-link-builder"),
              (e.mediaSizeParser = "media-size-parser"),
              (e.uploadThumbPreview = "upload-thumb-preview"),
              (e.imageLoad = "image-load"),
              (e.zCloudKey = "key"),
              (e.zCloudQueue = "queue"),
              (e.zCloudDownloadMultiSrc = "download-multi-src"),
              (e.zCloudFetchMultiSrc = "fetch-multi-src"),
              (e.zCloudShareWeb = "share-media-web"),
              (e.zCloudShareWebE2ee = "share-media-web-e2ee"),
              (e.zCloud = "zalo-cloud"),
              (e.zCloudQuotaTool = "zCloudQuotaTool"),
              (e.zCloudOnboarding = "zCloudOnboarding"),
              (e.zCloudStatusController = "status-controller"),
              (e.zCloudStatusEventsResolver = "status-events-resolver"),
              (e.zCloudStatusRepository = "status-repository"),
              (e.zCloudKeyServices = "key-services"),
              (e.zCloudStatusServices = "status-services"),
              (e.mediaDiskFetcher = "mediaDiskFetcher"),
              (e.community = "community"),
              (e.autoFetchMsgCloud = "auto-fetch-msg-cloud"),
              (e.message = "message"),
              (e.messageCloudSegment = "message-cloud-segment"),
              (e.messageCloud = "message-cloud"),
              (e.messageLocal = "message-local"),
              (e.messageUI = "message-ui"),
              (e.inAppPayment = "inapp-payment");
          })(r || (r = {}));
        const i = {
            [r.moduleA]: !0,
            [r.featA]: !0,
            [r.featPhoto]: !0,
            [r.featPhotoLoadCache]: !0,
            [r.featPhotoDomCache]: !0,
            [r.featPhotoReduxAction]: !0,
            [r.staging]: !0,
            [r.onlyAdminChatSettings]: !0,
            [r.contactTabV2]: !0,
            [r.conversationSetting]: !0,
            [r.appStatus]: !0,
            [r.focusDetectorManager]: !0,
            [r.focusStatus]: !0,
            [r.syncDownload]: !0,
            [r.widget]: !0,
            [r.activeDeactive]: !0,
            [r.controller]: !0,
            [r.service]: !0,
            [r.stateMachine]: !0,
            [r.metricz]: !0,
            [r.blobHelper]: !0,
            [r.imgNormalizer]: !0,
            [r.pinTopic]: !0,
            [r.autoRetry]: !0,
            [r.mediaStatus]: !0,
            [r.popupPortal]: !0,
            [r.popupPV]: !0,
            [r.entriesTransferManager]: !0,
            [r.e2eeNotifyMissingMsg]: !0,
            [r.uiBannerController]: !0,
            [r.uiBannerQueue]: !0,
            [r.previewMsgTime]: !0,
            [r.animation]: !0,
            [r.photoMessageUploader]: !0,
            [r.diskChecker]: !0,
            [r.parser]: !0,
            [r.linkParser]: !0,
            [r.mediaSizeParser]: !0,
            [r.imageLoader]: !0,
            [r.imageLoad]: !0,
            [r.zCloud]: !0,
            [r.zCloudOnboarding]: !0,
            [r.mediaDiskFetcher]: !0,
          },
          a = [];
      },
      iZzu: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "SIDEBAR_CONTROLLER", function () {
            return i;
          }),
          n.d(t, "SidebarController", function () {
            return a;
          }),
          n.d(t, "SidebarTab", function () {
            return s;
          }),
          n.d(t, "LabelEvents", function () {
            return o.d;
          }),
          n.d(t, "LabelEvent", function () {
            return o.c;
          }),
          n.d(t, "LABEL_DATA_MANAGER", function () {
            return o.a;
          }),
          n.d(t, "LabelDataManager", function () {
            return o.b;
          }),
          n.d(t, "FilterType", function () {
            return l.d;
          }),
          n.d(t, "FilterSrcType", function () {
            return l.c;
          }),
          n.d(t, "CONV_LIST_CONTROLLER", function () {
            return l.a;
          }),
          n.d(t, "ConvListController", function () {
            return l.b;
          }),
          n.d(t, "SearchUIList", function () {
            return c.c;
          }),
          n.d(t, "SEARCH_CONTROLLER", function () {
            return c.a;
          }),
          n.d(t, "SearchController", function () {
            return c.b;
          }),
          n.d(t, "CONV_MENU_CONTROLLER", function () {
            return d.a;
          }),
          n.d(t, "ConvMenuController", function () {
            return d.b;
          });
        var r = n("jDHv");
        const i = "sidebar-controller",
          a = Object(r.define)(i);
        let s;
        !(function (e) {
          (e.MESSAGE_TAB = "message"),
            (e.CONTACT_TAB = "contact"),
            (e.PINNED_TAB = "pinned"),
            (e.MORE_TAB = "more"),
            (e.SHOP_TAB = "shop"),
            (e.NOTIFY_TAB = "noti"),
            (e.MP3_TAB = "mp3"),
            (e.MENTION_TAB = "mention"),
            (e.FILE_TAB = "file"),
            (e.STAR_TAB = "star"),
            (e.EVENT_TAB = "eventTab"),
            (e.TODO_TAB = "todo"),
            (e.ZAVI_TAB = "zavi"),
            (e.SETTING_SHORTCUT = "setting"),
            (e.SCREENCAP_SHORTCUT = "screencap"),
            (e.FILE_TRANSFER_SHORTCUT = "filetransfer"),
            (e.ZCLOUD_TAB = "zcloud"),
            (e.QUICK_MESSAGE_TAB = "quickMessageTab"),
            (e.BROADCAST_MESSAGE_TAB = "broadcastMessageTab"),
            (e.AUTO_REPLY_TAB = "autoReplyTab"),
            (e.BROADCAST_SHORTCUT = "broadcast"),
            (e.CATALOG_TAB = "catalogTab"),
            (e.CPU_PERF_TAB = "cpuPerfTab"),
            (e.MAC_MIGRATE_SQLITE = "macMigrateSqlite"),
            (e.BA_TAB = "baTab");
        })(s || (s = {}));
        var o = n("6Vk1"),
          l = n("rQsU"),
          c = n("kTC5"),
          d = n("vQ8b");
      },
      ibl3: function (e, t) {},
      igA5: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "default", function () {
            return _;
          });
        var r = n("jDHv"),
          i = n("Mgpg"),
          a = n("fsN4"),
          s = n("wudS");
        const o =
          "undefined" != typeof window &&
          "Microsoft Internet Explorer" ==
            (null === (l = window) ||
            void 0 === l ||
            null === (c = l.navigator) ||
            void 0 === c
              ? void 0
              : c.appName);
        var l, c;
        class d {
          static encrypt(e, t) {
            if (!t) throw new Error("key is not set!");
            let n = 0,
              r = [];
            if (o) {
              let n = 0,
                i = e.length;
              for (let e = 0; e < t.length; e++) n += t.charCodeAt(e);
              n %= i;
              for (let t = 0; t < e.length; t++)
                r.push(String.fromCharCode(e.charCodeAt((t + n) % i)));
            } else
              for (let i = 0; i < e.length; i++)
                r.push(String.fromCharCode(e.charCodeAt(i) ^ t.charCodeAt(n))),
                  n++,
                  n > t.length - 1 && (n = 0);
            return r.join("");
          }
          static decrypt(e, t) {
            if (!t) throw new Error("key is not set!");
            let n = 0,
              r = [];
            if (o) {
              let n = 0,
                i = e.length;
              for (let e = 0; e < t.length; e++) n += t.charCodeAt(e);
              (n %= i), (n = i - n);
              for (let t = 0; t < e.length; t++)
                r.push(String.fromCharCode(e.charCodeAt((t + n) % i)));
            } else
              for (let i = 0; i < e.length; i++)
                r.push(String.fromCharCode(e.charCodeAt(i) ^ t.charCodeAt(n))),
                  n++,
                  n > t.length - 1 && (n = 0);
            return r.join("");
          }
        }
        const u = "citk",
          g = "citv",
          m = "default_cache_map";
        var p,
          f,
          y = n("SWKE"),
          h = n("8/YW");
        let _ =
          Object(h.f)()(
            (p =
              Reflect.metadata(
                "design:type",
                Function,
              )(
                (p =
                  Reflect.metadata(
                    "design:paramtypes",
                    [],
                  )(
                    ((f = class e {
                      constructor() {
                        (this.userScopedPrefix = void 0),
                          (this.secretKey = void 0),
                          (this._decryptFn = void 0),
                          (this._encryptFn = void 0),
                          (this._canModifyData = void 0),
                          (this._disableCipher = void 0),
                          (this._cacheMaps = {}),
                          (this._flushAndSaveToStorage = void 0),
                          (this._logger = void 0),
                          (this.userScopedPrefix = null),
                          (this.secretKey = null),
                          (this._decryptFn = d.decrypt),
                          (this._encryptFn = d.encrypt),
                          (this._canModifyData = !0),
                          (this._disableCipher = !1),
                          (this._flushAndSaveToStorage = ((e, t) => {
                            let n = null;
                            return function () {
                              for (
                                var r = arguments.length,
                                  i = new Array(r),
                                  a = 0;
                                a < r;
                                a++
                              )
                                i[a] = arguments[a];
                              n && clearTimeout(n),
                                (n = setTimeout(() => {
                                  e(...i);
                                }, t));
                            };
                          })(this._flushAndSaveToStorageReal.bind(this), 500));
                      }
                      get logger() {
                        if (!this._logger) {
                          const e = r.ModuleContainer.resolve(i.ZLoggerFactory);
                          this._logger = e.createZLogger("localstorage", [
                            "secure",
                          ]);
                        }
                        return this._logger;
                      }
                      static getInstance() {
                        return (
                          this.instance || (this.instance = new e()),
                          this.instance
                        );
                      }
                      onAuthenticating(t) {
                        const { userId: n, UIN: r } = t.getSession();
                        e.getInstance().init(n, r);
                      }
                      setCanModifyDataFlag(e) {
                        this._canModifyData = e;
                      }
                      isEncryptedValue(e) {
                        return e.startsWith("z_ecrp_");
                      }
                      disableCipher() {
                        this._disableCipher = !0;
                      }
                      _warnIfKeyCannotBeModified(e) {
                        this._canModifyData;
                      }
                      init(e, t) {
                        (this.secretKey = t), this._initUserIDList(e);
                        try {
                          this._testCipher();
                        } catch (n) {}
                      }
                      hasAlreadyInitialized() {
                        return (
                          null !== this.secretKey &&
                          null !== this.userScopedPrefix
                        );
                      }
                      _initUserIDList(e) {
                        try {
                          this._validateUserIDList(),
                            (this.userScopedPrefix = `${Object(s.b)(e)}`);
                        } catch (t) {}
                      }
                      _validateUserIDList() {}
                      _testCipher() {
                        if (this.checkExistForCurrentUser(u)) {
                          if (this.getSecureItemForCurrentUser(u) !== g)
                            throw new Error(
                              "SecureLocalStorage encryption and decryption produce incorrect results",
                            );
                        } else this.setSecureItemForCurrentUser(u, g);
                      }
                      async _recoverCipher() {
                        const e = [
                            "z_recentp",
                            "quest_cert",
                            "z_recentin",
                            "s_ph_if",
                            "z_listroom",
                            "z_c_d",
                            "zv_cu",
                            "auto-replies-state-v1",
                            "introduced-ttl",
                            "hide-fbadge",
                            "g_token",
                            "d_token",
                            "list_recent_search",
                            "list_recent_search_v2",
                            "ttl-v1",
                            "ttl-v1-saved",
                            "fas",
                            "feat-pro-count-auto-replies",
                          ],
                          t = (t) =>
                            !(
                              !t.includes("list_recent_g_search") ||
                              !t.endsWith("v2")
                            ) || e.some((e) => t.includes(e)),
                          n = y.a.getInstance();
                        n.cleanupLocalStorageMatchConditions(t);
                        await n.cleanupAsyncLocalStorageMatchConditions(
                          (e) => "string" == typeof e && t(e),
                        ),
                          this.setSecureItemForCurrentUser(u, g);
                      }
                      hasOwnProperty(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        let n = null;
                        return (
                          this.hasAlreadyInitialized() &&
                            (n = this.getKeyNameForCurrentUser(e)),
                          Object.hasOwnProperty.call(this, e) ||
                            null !== window.localStorage.getItem(t) ||
                            (null !== n &&
                              null !== window.localStorage.getItem(n)) ||
                            null !== window.localStorage.getItem(e)
                        );
                      }
                      getKeyNameForSharedItem(e) {
                        return `sh_${e}`;
                      }
                      getKeyNameForCurrentUser(e) {
                        if (null === this.userScopedPrefix)
                          throw new Error(
                            "SecureLocalStorage instance hasn't been initialized yet!",
                          );
                        return `${this.userScopedPrefix}_${e}`;
                      }
                      getItemPlain(e) {
                        return window.localStorage.getItem(e);
                      }
                      setItemPlain(e, t) {
                        this._warnIfKeyCannotBeModified(e),
                          window.localStorage.setItem(e, t);
                      }
                      async getItemPlainAsync(e) {
                        const t = a.default.getInstance(),
                          { val: n } =
                            (await t.SecureLocalstorage.AsyncStore.get(e)) || {
                              val: null,
                            };
                        return n;
                      }
                      async setItemPlainAsync(e, t) {
                        this._warnIfKeyCannotBeModified(e);
                        const n = a.default.getInstance();
                        await n.SecureLocalstorage.AsyncStore.insert(
                          { key: e, val: t },
                          { replace: !0 },
                        );
                      }
                      getItem(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        return window.localStorage.getItem(t);
                      }
                      setItem(e, t) {
                        const n = this.getKeyNameForSharedItem(e);
                        this._warnIfKeyCannotBeModified(n),
                          window.localStorage.setItem(n, t);
                      }
                      async getItemAsync(e) {
                        const t = this.getKeyNameForSharedItem(e),
                          n = a.default.getInstance(),
                          { val: r } =
                            (await n.SecureLocalstorage.AsyncStore.get(t)) || {
                              val: null,
                            };
                        return r;
                      }
                      async setItemAsync(e, t) {
                        const n = this.getKeyNameForSharedItem(e);
                        this._warnIfKeyCannotBeModified(n);
                        const r = a.default.getInstance();
                        await r.SecureLocalstorage.AsyncStore.insert(
                          { key: n, val: t },
                          { replace: !0 },
                        );
                      }
                      getItemForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        return window.localStorage.getItem(t);
                      }
                      setItemForCurrentUser(e, t) {
                        const n = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(n),
                          window.localStorage.setItem(n, t);
                      }
                      async getItemForCurrentUserAsync(e) {
                        const t = this.getKeyNameForCurrentUser(e),
                          n = a.default.getInstance(),
                          { val: r } =
                            (await n.SecureLocalstorage.AsyncStore.get(t)) || {
                              val: null,
                            };
                        return r;
                      }
                      async setItemForCurrentUserAsync(e, t) {
                        const n = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(n);
                        const r = a.default.getInstance();
                        await r.SecureLocalstorage.AsyncStore.insert(
                          { key: n, val: t },
                          { replace: !0 },
                        );
                      }
                      getSecureItemForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e),
                          n = window.localStorage.getItem(t);
                        if (null === n) return null;
                        return this._disableCipher && !this.isEncryptedValue(n)
                          ? n
                          : this.decryptValue(n);
                      }
                      setSecureItemForCurrentUser(e, t) {
                        const n = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(n);
                        const r = t;
                        if (null === this.secretKey)
                          throw new Error(
                            "SecureLocalStorage instance hasn't been initialized yet!",
                          );
                        const i = this._disableCipher
                          ? r
                          : this.encryptValue(r);
                        window.localStorage.setItem(n, i);
                      }
                      async getSecureItemForCurrentUserAsync(e) {
                        const t = this.getKeyNameForCurrentUser(e),
                          n = a.default.getInstance(),
                          r = await n.SecureLocalstorage.AsyncStore.get(t);
                        if (!r) return null;
                        const { val: i } = r;
                        return this._disableCipher && !this.isEncryptedValue(i)
                          ? i
                          : this.decryptValue(i);
                      }
                      async setSecureItemForCurrentUserAsync(e, t) {
                        const n = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(n);
                        const r = t;
                        if (null === this.secretKey)
                          throw new Error(
                            "SecureLocalStorage instance hasn't been initialized yet!",
                          );
                        const i = this._disableCipher
                            ? r
                            : this.encryptValue(r),
                          s = a.default.getInstance();
                        await s.SecureLocalstorage.AsyncStore.insert(
                          { key: n, val: i },
                          { replace: !0 },
                        );
                      }
                      removeItemPlain(e) {
                        this._warnIfKeyCannotBeModified(e),
                          window.localStorage.removeItem(e);
                      }
                      removeItem(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        this._warnIfKeyCannotBeModified(t),
                          window.localStorage.removeItem(t);
                      }
                      removeItemForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(t),
                          window.localStorage.removeItem(t);
                      }
                      async removeItemPlainAsync(e) {
                        this._warnIfKeyCannotBeModified(e);
                        const t = a.default.getInstance();
                        await t.SecureLocalstorage.AsyncStore.delete(e);
                      }
                      async removeItemAsync(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        this._warnIfKeyCannotBeModified(t);
                        const n = a.default.getInstance();
                        await n.SecureLocalstorage.AsyncStore.delete(t);
                      }
                      async removeItemForCurrentUserAsync(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        this._warnIfKeyCannotBeModified(t);
                        const n = a.default.getInstance();
                        await n.SecureLocalstorage.AsyncStore.delete(t);
                      }
                      setItemForAllLoggedUsers(e, t) {
                        const n = Object(s.c)().length;
                        if (0 !== n)
                          for (let r = 0; r < n; r += 1) {
                            const n = `${r}_${e}`;
                            window.localStorage.setItem(n, t);
                          }
                      }
                      static forTestingOnly_getNewInstance() {
                        return new e();
                      }
                      getInt(e, t) {
                        void 0 === t && (t = {});
                        const n =
                          void 0 === t.defaultInt || isNaN(t.defaultInt)
                            ? -1
                            : +t.defaultInt;
                        try {
                          const t = this.getKeyNameForSharedItem(e),
                            n = window.localStorage.getItem(t);
                          if (null != n) {
                            const e = +n;
                            if (!isNaN(e)) return e;
                          }
                        } catch (r) {}
                        return n;
                      }
                      getIntForCurrentUser(e, t) {
                        void 0 === t && (t = {});
                        const n =
                          void 0 === t.defaultInt || isNaN(t.defaultInt)
                            ? -1
                            : +t.defaultInt;
                        try {
                          const t = this.getKeyNameForCurrentUser(e);
                          let n = window.localStorage.getItem(t);
                          if (null != n) {
                            const e = +n;
                            if (!isNaN(e)) return e;
                          }
                        } catch (r) {}
                        return n;
                      }
                      setObject(e, t) {
                        try {
                          const n = this.getKeyNameForSharedItem(e);
                          this._warnIfKeyCannotBeModified(e),
                            window.localStorage.setItem(n, JSON.stringify(t));
                        } catch (n) {}
                      }
                      setObjectForCurrentUser(e, t) {
                        try {
                          const n = this.getKeyNameForCurrentUser(e);
                          this._warnIfKeyCannotBeModified(n),
                            window.localStorage.setItem(n, JSON.stringify(t));
                        } catch (n) {}
                      }
                      getObject(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        let n = window.localStorage.getItem(t);
                        return null === n
                          ? null
                          : ((n = JSON.parse(n)),
                            n && "object" == typeof n ? n : null);
                      }
                      getObjectForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        let n = window.localStorage.getItem(t);
                        return null === n
                          ? null
                          : ((n = JSON.parse(n)),
                            n && "object" == typeof n ? n : null);
                      }
                      getParsedItem(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        let n = window.localStorage.getItem(t);
                        if (n)
                          try {
                            const e = JSON.parse(n);
                            null != e && (n = e);
                          } catch (r) {}
                        return n;
                      }
                      getParsedItemForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        let n = window.localStorage.getItem(t);
                        if (n)
                          try {
                            const e = JSON.parse(n);
                            null != e && (n = e);
                          } catch (r) {}
                        return n;
                      }
                      forEachKeyName(e) {
                        void 0 === e && (e = (e, t) => {});
                        Object.keys(window.localStorage).forEach(e);
                      }
                      _getCacheMap(e) {
                        if (!this._cacheMaps[e]) {
                          let n = new Map(),
                            r = window.localStorage.getItem(e);
                          if (r)
                            try {
                              n = JSON.parse(r).reduce((e, t) => {
                                const [n, r] = t;
                                return e.set(n, r), e;
                              }, n);
                            } catch (t) {}
                          this._cacheMaps[e] = n;
                        }
                        return this._cacheMaps[e];
                      }
                      _flushAndSaveToStorageReal(e) {
                        const t = this._getCacheMap(e),
                          n = [];
                        t.forEach((e, t) => {
                          n.push([t, e]);
                        }),
                          window.localStorage.setItem(e, JSON.stringify(n));
                      }
                      addEntryToCacheMap(e, t, n) {
                        void 0 === n && (n = m);
                        const r = this.getKeyNameForSharedItem(n);
                        this._getCacheMap(r).set(e, t),
                          this._flushAndSaveToStorage(r);
                      }
                      addEntryToCacheMapForCurrentUser(e, t, n) {
                        void 0 === n && (n = m);
                        const r = this.getKeyNameForCurrentUser(n);
                        this._getCacheMap(r).set(e, t),
                          this._flushAndSaveToStorage(r);
                      }
                      deleteEntryFromCacheMap(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForSharedItem(t);
                        this._getCacheMap(n).delete(e),
                          this._flushAndSaveToStorage(n);
                      }
                      deleteEntryFromCacheMapForCurrentUser(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForCurrentUser(t);
                        this._getCacheMap(n).delete(e),
                          this._flushAndSaveToStorage(n);
                      }
                      getEntryOfCacheMap(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForSharedItem(t);
                        return this._getCacheMap(n).get(e) || null;
                      }
                      getEntryOfCacheMapForCurrentUser(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForCurrentUser(t);
                        return this._getCacheMap(n).get(e) || null;
                      }
                      forEachEntryOfCacheMap(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForSharedItem(t);
                        this._getCacheMap(n).forEach(e);
                      }
                      forEachEntryOfCacheMapForCurrentUser(e, t) {
                        void 0 === t && (t = m);
                        const n = this.getKeyNameForCurrentUser(t);
                        this._getCacheMap(n).forEach(e);
                      }
                      getCacheMapSize(e) {
                        void 0 === e && (e = m);
                        const t = this.getKeyNameForSharedItem(e);
                        return this._getCacheMap(t).size;
                      }
                      getCacheMapSizeForCurrentUser(e) {
                        void 0 === e && (e = m);
                        const t = this.getKeyNameForCurrentUser(e);
                        return this._getCacheMap(t).size;
                      }
                      hasCacheMap(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        return void 0 !== this._cacheMaps[t];
                      }
                      hasCacheMapForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        return void 0 !== this._cacheMaps[t];
                      }
                      checkExist(e) {
                        const t = this.getKeyNameForSharedItem(e);
                        return null !== window.localStorage.getItem(t);
                      }
                      checkExistForCurrentUser(e) {
                        const t = this.getKeyNameForCurrentUser(e);
                        return null !== window.localStorage.getItem(t);
                      }
                      isUserScopedKeyOfCurrentUser(e) {
                        return e.startsWith(`${this.userScopedPrefix}_`);
                      }
                      getKeySignatureOfUserScopedKeyOfCurrentUser(e) {
                        if (!this.isUserScopedKeyOfCurrentUser(e))
                          throw new Error(
                            `${e} doesn't belong to the current user`,
                          );
                        const t = `^${this.userScopedPrefix}_`,
                          n = new RegExp(t, "g");
                        return e.replace(n, "");
                      }
                      encryptValue(e) {
                        if ("string" != typeof e)
                          throw new Error(
                            "SecureLocalStorage cannot encrypt non string value",
                          );
                        if (null === this.secretKey)
                          throw new Error(
                            "SecureLocalStorage instance hasn't been initialized yet!",
                          );
                        return `z_ecrp_${this._encryptFn(e, this.secretKey)}`;
                      }
                      decryptValue(e) {
                        if ("string" != typeof e)
                          throw new Error(
                            "SecureLocalStorage cannot decrypt non string value",
                          );
                        if (null === this.secretKey)
                          throw new Error(
                            "SecureLocalStorage instance hasn't been initialized yet!",
                          );
                        return (
                          (e = e.slice("z_ecrp_".length)),
                          this._decryptFn(e, this.secretKey)
                        );
                      }
                    }),
                    (f.instance = null),
                    (p = f)),
                  ) || p),
              ) || p),
          ) || p;
      },
      ipeT: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return u;
        });
        var r = n("VTBJ"),
          i = n("jDHv"),
          a = n("UK4g"),
          s = n("YEoC"),
          o = n("DI/x"),
          l = n("YZti"),
          c = n("MRjZ"),
          d = n("rvru");
        class u {
          constructor(e, t, n, r, i) {
            void 0 === n && (n = 0),
              (this.database = e),
              (this.tableConfig = t),
              (this.transaction = n),
              (this.doQuery = r),
              (this.databaseConfig = i),
              (this.bindedIndex = void 0);
          }
          get name() {
            return this.tableConfig.name;
          }
          queryBuilderReject(e, t) {
            const n = {
                method: l.c.getTypeName(t.type),
                database: t.database,
                table: t.table,
                step: t.meta.step,
                partition: t.meta.partitionKey,
                trans: t.transaction,
                deadline: t.meta.timeout,
              },
              r = Object(c.a)(n);
            e.message += ` (${r})`;
            return (
              i.ModuleContainer.resolve(d.a).sendDBErrorQos(e),
              Promise.reject(e)
            );
          }
          index(e) {
            if (e == this.bindedIndex) return this;
            if (this.bindedIndex) {
              const t = `Attempt to bind '${e}' to already-binded '${this.bindedIndex}' index`;
              throw new o.A("index", t);
            }
            const t = new u(
              this.database,
              this.tableConfig,
              this.transaction,
              this.doQuery,
              this.databaseConfig,
            );
            return (t.bindedIndex = e), t;
          }
          clear() {
            return this.doQuery({
              trace: function () {},
              type: s.d.Clear,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: s.c.BLOCKING,
              retry: a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                error: new Error(),
                dead: !1,
                step: -1,
              },
            });
          }
          get(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.Get,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                key: e,
                index: this.bindedIndex || t.index || "primary",
              },
            };
            if (this.tableConfig.isNonFieldlikeEntity)
              return this.queryBuilderReject(
                new o.A(
                  "get",
                  "This method cannot be performed on non-fieldlike table!",
                ),
                n,
              );
            return this.doQuery(n);
          }
          getMulti(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.GetMulti,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                index: this.bindedIndex || t.index || "primary",
                keys: e,
                onValue: t.onValue,
              },
            };
            return this.tableConfig.isNonFieldlikeEntity
              ? this.queryBuilderReject(
                  new o.A(
                    "getMulti",
                    "This method cannot be performed on non-fieldlike table!",
                  ),
                  n,
                )
              : this.doQuery(n);
          }
          getAll(e, t) {
            void 0 === t && (t = {});
            const n = g(t.limit),
              r = {
                trace: function () {},
                type: s.d.GetAll,
                database: this.database,
                table: this.tableConfig.name,
                transaction: this.transaction,
                priority: t.priority || s.c.NON_BLOCKING,
                retry: t.retry || a.i,
                timing: {},
                meta: {
                  databaseConfig: this.databaseConfig,
                  partitionKey: t.partition,
                  error: new Error(),
                  timeout: a.l,
                  step: -1,
                  dead: !1,
                },
                params: {
                  index: this.bindedIndex || t.index || "primary",
                  range: e,
                  limit: n,
                  direction: t.direction || s.b.NEXT,
                  filter: t.filter,
                  predicate: t.predicate,
                  aborted: t.aborted,
                  onValue: t.onValue,
                  onProgress: t.onProgress,
                  advance: t.advance,
                  stepCount: t.stepCount,
                },
              };
            return this.tableConfig.isNonFieldlikeEntity && e
              ? this.queryBuilderReject(
                  new o.A(
                    "getAll",
                    "'getAll()' with range cannot be performed on non-fieldlike table!",
                  ),
                  r,
                )
              : this.doQuery(r);
          }
          getAllKey(e, t) {
            void 0 === t && (t = {});
            const n = g(t.limit),
              r = {
                trace: function () {},
                type: s.d.GetAllKey,
                database: this.database,
                table: this.tableConfig.name,
                transaction: this.transaction,
                priority: t.priority || s.c.NON_BLOCKING,
                retry: t.retry || a.i,
                timing: {},
                meta: {
                  databaseConfig: this.databaseConfig,
                  partitionKey: t.partition,
                  error: new Error(),
                  timeout: a.l,
                  step: -1,
                  dead: !1,
                },
                params: {
                  index: this.bindedIndex || t.index || "primary",
                  range: e,
                  limit: n,
                  direction: t.direction || s.b.NEXT,
                },
              };
            return this.tableConfig.isNonFieldlikeEntity && e
              ? this.queryBuilderReject(
                  new o.A(
                    "getAllKey",
                    "'getAllKey()' with range cannot be performed on non-fieldlike table!",
                  ),
                  r,
                )
              : this.doQuery(r);
          }
          getAndUpdate(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.GetAndUpdate,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                index: this.bindedIndex || t.index || "primary",
                key: e,
                updater: (e) => e,
                ignoreNotFound: !1 !== t.filterNotFound,
              },
            };
            return t.updater
              ? ((n.params = Object(r.a)(
                  Object(r.a)({}, n.params),
                  {},
                  { updater: t.updater },
                )),
                this.tableConfig.isNonFieldlikeEntity
                  ? this.queryBuilderReject(
                      new o.A(
                        "getAndUpdate",
                        "This method cannot be performed on non-fieldlike table!",
                      ),
                      n,
                    )
                  : this.doQuery(n))
              : this.queryBuilderReject(
                  new o.n("'updater' option is required!"),
                  n,
                );
          }
          insert(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.Insert,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: { replace: !1 !== t.replace, value: e },
            };
            if (Array.isArray(e))
              return this.queryBuilderReject(
                new o.A(
                  "insert",
                  "Receive an array as input! Please use 'insertMulti' instead!",
                ),
                n,
              );
            return this.doQuery(n);
          }
          put(e, t) {
            throw (
              (void 0 === t && (t = {}),
              new o.A(
                "put",
                "This method is legacy! Please use 'insert' instead",
              ))
            );
          }
          insertMulti(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.InsertMulti,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: { replace: !1 !== t.replace, values: e },
            };
            return Array.isArray(e)
              ? 1 === e.length
                ? this.insert(e[0], t)
                    .then((e) => ({ success: [e], fail: [] }))
                    .catch(() => ({ success: [], fail: [e[0]] }))
                : this.doQuery(n)
              : this.queryBuilderReject(
                  new o.A(
                    "insertMulti",
                    "Receive a non-array value as input! Please use 'insert' instead!",
                  ),
                  n,
                );
          }
          update(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.Update,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                index: "primary",
                key: e,
                attributes: [],
                value: {},
                ignoreNotFound: !0 === t.ignoreNotFound,
              },
            };
            return t.value && t.attributes
              ? ((n.params = Object(r.a)(
                  Object(r.a)({}, n.params),
                  {},
                  { attributes: t.attributes, value: t.value },
                )),
                this.tableConfig.isNonFieldlikeEntity
                  ? this.queryBuilderReject(
                      new o.A(
                        "update",
                        "This method cannot be performed on non-fieldlike table!",
                      ),
                      n,
                    )
                  : this.doQuery(n))
              : this.queryBuilderReject(
                  new o.n(
                    `'${t.value ? "attributes" : "value"}' option is required!`,
                  ),
                  n,
                );
          }
          updateMulti(e) {
            void 0 === e && (e = {});
            const t = {
              trace: function () {},
              type: s.d.UpdateMulti,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: e.priority || s.c.NON_BLOCKING,
              retry: e.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: e.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                patches: e.patches || [],
                ignoreNotFound: !0 === e.ignoreNotFound,
              },
            };
            return this.tableConfig.isNonFieldlikeEntity
              ? this.queryBuilderReject(
                  new o.A(
                    "updateMulti",
                    "This method cannot be performed on non-fieldlike table!",
                  ),
                  t,
                )
              : this.doQuery(t);
          }
          delete(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.Delete,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: { key: e, index: "primary" },
            };
            return this.tableConfig.isNonFieldlikeEntity
              ? this.queryBuilderReject(
                  new o.A(
                    "delete",
                    "This method cannot be performed on non-fieldlike table!",
                  ),
                  n,
                )
              : this.doQuery(n);
          }
          remove(e, t) {
            throw (
              (void 0 === t && (t = {}),
              new o.A(
                "remove",
                "This method is legacy. Please use 'delete' instead!",
              ))
            );
          }
          deleteMulti(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.DeleteMulti,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: { keys: e },
            };
            return this.tableConfig.isNonFieldlikeEntity
              ? this.queryBuilderReject(
                  new o.A(
                    "deleteMulti",
                    "This method cannot be performed on non-fieldlike table!",
                  ),
                  n,
                )
              : this.doQuery(n);
          }
          findAndDelete(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.FindAndDelete,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: { range: e, filter: t.filter },
            };
            return this.tableConfig.isNonFieldlikeEntity && e
              ? this.queryBuilderReject(
                  new o.A(
                    "findAndDelete",
                    "'findAndDelete()' with range cannot be performed on non-fieldlike table!",
                  ),
                  n,
                )
              : this.doQuery(n);
          }
          count(e, t) {
            void 0 === t && (t = {});
            const n = {
              trace: function () {},
              type: s.d.Count,
              database: this.database,
              table: this.tableConfig.name,
              transaction: this.transaction,
              priority: t.priority || s.c.NON_BLOCKING,
              retry: t.retry || a.i,
              timing: {},
              meta: {
                databaseConfig: this.databaseConfig,
                partitionKey: t.partition,
                error: new Error(),
                timeout: a.l,
                step: -1,
                dead: !1,
              },
              params: {
                index: this.bindedIndex || t.index || "primary",
                range: e,
              },
            };
            return this.tableConfig.isNonFieldlikeEntity && e
              ? this.queryBuilderReject(
                  new o.A(
                    "count",
                    "'count()' with range cannot be performed on non-fieldlike table!",
                  ),
                  n,
                )
              : this.doQuery(n);
          }
          get isNonFieldlikeEntity() {
            return this.tableConfig.isNonFieldlikeEntity;
          }
          getIndexConfig(e) {
            return this.tableConfig.getIndex(e);
          }
        }
        function g(e) {
          let t = e || a.h;
          return t > a.h && (t = a.h), t;
        }
      },
      jDHv: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, "define", function () {
            return i;
          }),
          n.d(t, "Container", function () {
            return a;
          }),
          n.d(t, "ModuleContainer", function () {
            return s;
          }),
          n.d(t, "autoInjectable", function () {
            return o;
          }),
          n.d(t, "injectable", function () {
            return l;
          }),
          n.d(t, "inject", function () {
            return c;
          }),
          n.d(t, "singleton", function () {
            return d;
          });
        var r = n("S8fy");
        n("h6tn");
        function i(e) {
          return { service: e, token: e };
        }
        class a {
          constructor() {
            (this.inject = (e) => r.d(e.token)),
              (this.injectToken = (e) => r.d(e)),
              (this.singleton = r.g),
              (this.injectable = r.e),
              (this.register = (e, t) => {
                r.c.register(e.token, { useClass: t }),
                  this.hookAfferResolution(e);
              }),
              (this.registerValue = (e, t) => {
                r.c.register(e.token, { useValue: t }),
                  this.hookAfferResolution(e);
              }),
              (this.registerSingleton = (e, t) => {
                r.c.registerSingleton(t),
                  r.c.register(e.token, { useFactory: (e) => e.resolve(t) }),
                  this.hookAfferResolution(e);
              }),
              (this.registerFactory = (e, t) => {
                r.c.register(e.token, { useFactory: t }),
                  this.hookAfferResolution(e);
              }),
              (this.resolve = (e) => r.c.resolve(e.token)),
              (this.resolveToken = (e) => r.c.resolve(e)),
              (this.resolveAll = (e) => r.c.resolveAll(e.token)),
              (this.resolveIfExist = (e) => {
                try {
                  return r.c.resolve(e.token);
                } catch (t) {
                  return;
                }
              });
          }
          hookAfferResolution(e) {}
        }
        const s = new a(),
          o = r.b,
          l = r.e,
          c = (e) => r.d(e.token);
        function d(e) {
          return function (t) {
            e ? s.registerSingleton(e, t) : s.singleton()(t);
          };
        }
      },
      jGDt: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("zlog-session");
      },
      jvA1: function (e, t, n) {
        "use strict";
        n("x9oK"), n("UJ0r"), n("3wcW"), n("X2RP");
      },
      k6Bk: function (e, t) {},
      kFM4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        const r = { RunMode: n("YEoC").e.Unknown };
        function i(e, t) {
          r[e] = t;
        }
      },
      kQx2: function (e, t, n) {
        "use strict";
        function r() {
          var e;
          return "function" ==
            typeof (null === globalThis ||
            void 0 === globalThis ||
            null === (e = globalThis.performance) ||
            void 0 === e
              ? void 0
              : e.now)
            ? globalThis.performance.now()
            : Date.now();
        }
        n.d(t, "a", function () {
          return r;
        });
      },
      kTC5: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
          return i;
        }),
          n.d(t, "a", function () {
            return a;
          }),
          n.d(t, "b", function () {
            return s;
          });
        var r = n("jDHv");
        let i;
        !(function (e) {
          (e[(e.RECENT_SEARCH = 0)] = "RECENT_SEARCH"),
            (e[(e.SEARCH_RESULT = 1)] = "SEARCH_RESULT");
        })(i || (i = {}));
        const a = "search-controller",
          s = Object(r.define)(a);
      },
      oRsZ: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = new s.d({
            tableName: "avatar",
            name: "Avatar",
            fields: {
              userId: { name: "userId", type: i.g.string },
              url: { name: "url", type: i.g.string },
              blob: { name: "blob", type: i.g.blob },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          c = new s.d({
            tableName: "ava_history",
            name: "AvaHistory",
            fields: {
              submit_dttm: { name: "submit_dttm", type: i.g.integer },
              avaBlob: { name: "avaBlob", type: i.g.blob },
              orient: { name: "orient", type: i.g.json },
              size: { name: "size", type: i.g.json },
              fileName: { name: "fileName", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "submit_dttm" }],
                unique: !0,
              },
            },
          }),
          d = new s.d({
            tableName: "board_suggest",
            name: "BoardSuggest",
            fields: {
              groupId: { name: "groupId", type: i.g.string },
              actionId: { name: "actionId", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [
                  { type: "raw", field: "groupId" },
                  { type: "raw", field: "actionId" },
                ],
                unique: !0,
              },
            },
          }),
          u = new s.d({
            tableName: "catalog_db",
            name: "CatalogDb",
            fields: {
              ownerId: { name: "ownerId", type: i.g.string },
              isDefault: { name: "isDefault", type: i.g.boolean },
              created_time: { name: "created_time", type: i.g.integer },
              catalog_id: { name: "catalog_id", type: i.g.string },
              catalog_name: { name: "catalog_name", type: i.g.string },
              version_catalog: { name: "version_catalog", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "catalog_id" }],
                unique: !0,
              },
            },
          }),
          g = new s.d({
            tableName: "cloud_segment",
            name: "CloudSegment",
            fields: {
              cloudFirstSmsLocalId: {
                name: "cloudFirstSmsLocalId",
                type: i.g.string,
                nullable: !0,
              },
              cloudSegmentCheck: {
                name: "cloudSegmentCheck",
                type: i.g.json,
                default: [],
              },
              cloudSegmentCheckAutoFetch: {
                name: "cloudSegmentCheckAutoFetch",
                type: i.g.json,
                default: [],
              },
              conversationId: { name: "conversationId", type: i.g.string },
              hasMore: { name: "hasMore", type: i.g.integer, default: 1 },
              lastCloudVerifiedDttm: {
                name: "lastCloudVerifiedDttm",
                type: i.g.integer,
                nullable: !0,
              },
              lastDeletedMsgID: {
                name: "lastDeletedMsgID",
                type: i.g.integer,
                nullable: !0,
              },
              lastGetMaxRecentTs: {
                name: "lastGetMaxRecentTs",
                type: i.g.integer,
                nullable: !0,
              },
              maxCloudMsgId: {
                name: "maxCloudMsgId",
                type: i.g.integer,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "conversationId" }],
                unique: !0,
              },
            },
          });
        var m = n("4W2c");
        const p = new s.d({
          tableName: "conversation",
          name: "Conversation",
          fields: {
            userId: { name: "userId", type: i.g.string },
            localType: { name: "localType", type: i.g.integer, nullable: !0 },
            outside: { name: "outside", type: i.g.integer, nullable: !0 },
            isGroup: { name: "isGroup", type: i.g.boolean, nullable: !0 },
            firstSmsLocalId: {
              name: "firstSmsLocalId",
              type: i.g.string,
              nullable: !0,
            },
            respondedByMe: {
              name: "respondedByMe",
              type: i.g.boolean,
              nullable: !0,
            },
            numMsg: { name: "numMsg", type: i.g.integer, nullable: !0 },
            infoCheckSearch: {
              name: "infoCheckSearch",
              type: i.g.json,
              nullable: !0,
            },
            syncFromMobile: {
              name: "syncFromMobile",
              type: i.g.boolean,
              nullable: !0,
            },
            lastActionId: {
              name: "lastActionId",
              type: i.g.string,
              nullable: !0,
            },
            lastSmsLocalId: {
              name: "lastSmsLocalId",
              type: i.g.string,
              nullable: !0,
            },
            topOut: { name: "topOut", type: i.g.string, nullable: !0 },
            topOutImprTimeOut: {
              name: "topOutImprTimeOut",
              type: i.g.string,
              nullable: !0,
            },
            topOutTimeOut: {
              name: "topOutTimeOut",
              type: i.g.string,
              nullable: !0,
            },
            pinned: { name: "pinned", type: i.g.integer, nullable: !0 },
            label: { name: "label", type: i.g.integer, nullable: !0 },
            preLastSmsLocalId: {
              name: "preLastSmsLocalId",
              type: i.g.string,
              nullable: !0,
            },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "userId" }],
              unique: !0,
            },
          },
        });
        p.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new m.a(["previewMessage"])],
        });
        const f = new s.d({
            tableName: "download_retry",
            name: "DownloadRetry",
            fields: { url: { name: "url", type: i.g.string } },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "url" }],
                unique: !0,
              },
            },
          }),
          y = new s.d({
            tableName: "e2ee_group",
            name: "E2eeGroup",
            fields: {
              id: { name: "id", type: i.g.string },
              sessions: { name: "sessions", type: i.g.json, nullable: !0 },
              sessionsInfo: {
                name: "sessionsInfo",
                type: i.g.json,
                nullable: !0,
              },
              enabledGroups: {
                name: "enabledGroups",
                type: i.g.json,
                nullable: !0,
              },
              refetchedUsers: {
                name: "refetchedUsers",
                type: i.g.json,
                nullable: !0,
              },
              rqdReinitGroups: {
                name: "rqdReinitGroups",
                type: i.g.json,
                nullable: !0,
              },
              rqdResetKey: {
                name: "rqdResetKey",
                type: i.g.json,
                nullable: !0,
              },
              staleUsers: { name: "staleUsers", type: i.g.json, nullable: !0 },
              ts: { name: "ts", type: i.g.integer, nullable: !0 },
              cipherId: { name: "cipherId", type: i.g.string, nullable: !0 },
              resetKeyAt: {
                name: "resetKeyAt",
                type: i.g.integer,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "id" }],
                unique: !0,
              },
            },
          });
        y.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            55: {
              version: 55,
              scripts: [
                { type: "create-table" },
                {
                  type: "add-column",
                  params: { columns: ["cipherId", "rqdResetKey"] },
                },
              ],
            },
            60: {
              version: 60,
              scripts: [
                { type: "add-column", params: { columns: ["resetKeyAt"] } },
              ],
            },
          },
        });
        const h = new s.d({
          tableName: "e2ee_hash",
          name: "E2eeHash",
          fields: {
            sha256: { name: "sha256", type: i.g.string },
            ts: { name: "ts", type: i.g.integer },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "sha256" }],
              unique: !0,
            },
          },
        });
        h.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            53: { version: 53, scripts: [{ type: "create-table" }] },
          },
        });
        const _ = new s.d({
          tableName: "e2ee_identity",
          name: "E2eeIdentity",
          fields: {
            keyId: { name: "keyId", type: i.g.string },
            keyPair: { name: "keyPair", type: i.g.json },
            ts: { name: "ts", type: i.g.integer, nullable: !0 },
            regId: { name: "regId", type: i.g.integer, nullable: !0 },
            version: { name: "version", type: i.g.integer, nullable: !0 },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "keyId" }],
              unique: !0,
            },
          },
        });
        _.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            55: { version: 55, scripts: [{ type: "create-table" }] },
          },
        });
        const b = new s.d({
            tableName: "e2ee_meta",
            name: "E2eeMeta",
            fields: {
              identifier: { name: "identifier", type: i.g.string },
              devices: { name: "devices", type: i.g.json },
              errorInitAll: {
                name: "errorInitAll",
                type: i.g.boolean,
                nullable: !0,
              },
              waiting: { name: "waiting", type: i.g.boolean, nullable: !0 },
              upgrading: { name: "upgrading", type: i.g.boolean, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "identifier" }],
                unique: !0,
              },
            },
          }),
          I = new s.d({
            tableName: "e2ee_prekey",
            name: "E2eePrekey",
            fields: {
              keyId: { name: "keyId", type: i.g.integer },
              keyPair: { name: "keyPair", type: i.g.json },
              ts: { name: "ts", type: i.g.integer, nullable: !0 },
              regId: { name: "regId", type: i.g.integer, nullable: !0 },
              version: { name: "version", type: i.g.integer, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "keyId" }],
                unique: !0,
              },
              regId: {
                name: "regId",
                fields: [{ type: "raw", field: "regId" }],
                unique: !1,
              },
            },
          });
        I.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            55: {
              version: 55,
              scripts: [
                {
                  type: "add-column",
                  params: { columns: ["ts", "regId", "version"] },
                },
                { type: "create-index", params: { indexName: "regId" } },
              ],
            },
          },
        });
        const v = new s.d({
            tableName: "e2ee_session",
            name: "E2eeSession",
            fields: {
              identifier: { name: "identifier", type: i.g.string },
              record: { name: "record", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "identifier" }],
                unique: !0,
              },
            },
          }),
          w = new s.d({
            tableName: "e2ee_signed_prekey",
            name: "E2eeSignedPrekey",
            fields: {
              keyId: { name: "keyId", type: i.g.integer },
              keyPair: { name: "keyPair", type: i.g.json },
              ts: { name: "ts", type: i.g.integer, nullable: !0 },
              regId: { name: "regId", type: i.g.integer, nullable: !0 },
              version: { name: "version", type: i.g.integer, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "keyId" }],
                unique: !0,
              },
            },
          });
        w.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            55: { version: 55, scripts: [{ type: "create-table" }] },
          },
        });
        const D = new s.d({
            tableName: "file",
            name: "File",
            fields: {
              msgId: { name: "msgId", type: i.g.string },
              userId: { name: "userId", type: i.g.string },
              message: { name: "message", type: i.g.json },
              sendDttm: { name: "sendDttm", type: i.g.integer },
              fromUid: { name: "fromUid", type: i.g.string, nullable: !0 },
              type: { name: "type", type: i.g.string, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.string, nullable: !0 },
              id: { name: "id", type: i.g.integer, nullable: !0 },
              updateTime: {
                name: "updateTime",
                type: i.g.integer,
                nullable: !0,
              },
              localPath: { name: "localPath", type: i.g.string, nullable: !0 },
              downloadError: {
                name: "downloadError",
                type: i.g.boolean,
                nullable: !0,
              },
              folderPath: {
                name: "folderPath",
                type: i.g.string,
                nullable: !0,
              },
              dimension: { name: "dimension", type: i.g.json, nullable: !0 },
              previewThumb: {
                name: "previewThumb",
                nullable: !0,
                type: i.g.string,
              },
              ttl: { name: "ttl", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              sendDttm: {
                name: "sendDttm",
                fields: [{ type: "raw", field: "sendDttm" }],
                unique: !1,
              },
              userId_sendDttm_msgId: {
                name: "userId_sendDttm_msgId",
                fields: [
                  { type: "raw", field: "userId" },
                  { type: "length", field: "msgId" },
                  { type: "raw", field: "msgId" },
                ],
                unique: !1,
              },
            },
          }),
          M = new s.d({
            tableName: "friend",
            name: "Friend",
            fields: {
              userId: { name: "userId", type: i.g.string },
              username: { name: "username", type: i.g.string, nullable: !0 },
              displayName: { name: "displayName", type: i.g.string },
              zaloName: { name: "zaloName", type: i.g.string },
              avatar: { name: "avatar", type: i.g.string },
              bgavatar: { name: "bgavatar", type: i.g.string, nullable: !0 },
              cover: { name: "cover", type: i.g.string, nullable: !0 },
              gender: { name: "gender", type: i.g.integer, nullable: !0 },
              dob: { name: "dob", type: i.g.integer, nullable: !0 },
              sdob: { name: "sdob", type: i.g.string, nullable: !0 },
              status: { name: "status", type: i.g.string, nullable: !0 },
              phoneNumber: {
                name: "phoneNumber",
                type: i.g.string,
                nullable: !0,
              },
              isFr: { name: "isFr", type: i.g.integer },
              isBlocked: { name: "isBlocked", type: i.g.boolean, nullable: !0 },
              lastActionTime: {
                name: "lastActionTime",
                type: i.g.integer,
                nullable: !0,
              },
              lastUpdateTime: {
                name: "lastUpdateTime",
                type: i.g.integer,
                nullable: !0,
              },
              isActive: { name: "isActive", type: i.g.integer, nullable: !0 },
              key: { name: "key", type: i.g.integer, nullable: !0 },
              type: { name: "type", type: i.g.integer },
              isActivePC: {
                name: "isActivePC",
                type: i.g.integer,
                nullable: !0,
              },
              isActiveWeb: {
                name: "isActiveWeb",
                type: i.g.integer,
                nullable: !0,
              },
              isValid: { name: "isValid", type: i.g.integer, nullable: !0 },
              userKey: { name: "userKey", type: i.g.string, nullable: !0 },
              accountStatus: {
                name: "accountStatus",
                type: i.g.integer,
                nullable: !0,
              },
              oaInfo: { name: "oaInfo", type: i.g.json, nullable: !0 },
              user_mode: { name: "user_mode", type: i.g.integer, nullable: !0 },
              globalId: { name: "globalId", type: i.g.string, nullable: !0 },
              createdTs: { name: "createdTs", type: i.g.integer, nullable: !0 },
              lastOnlineTime: {
                name: "lastOnlineTime",
                type: i.g.integer,
                nullable: !0,
              },
              _lastRequestTime: {
                name: "_lastRequestTime",
                type: i.g.integer,
                nullable: !0,
              },
              bizInfo: { name: "bizInfo", type: i.g.json, nullable: !0 },
              globalNoiseId: {
                name: "globalNoiseId",
                type: i.g.string,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          S = new s.d({
            tableName: "friends_info",
            name: "FriendsInfo",
            fields: {
              userId: { name: "userId", type: i.g.string },
              username: { name: "username", type: i.g.string, nullable: !0 },
              displayName: { name: "displayName", type: i.g.string },
              zaloName: { name: "zaloName", type: i.g.string },
              avatar: { name: "avatar", type: i.g.string },
              bgavatar: { name: "bgavatar", type: i.g.string },
              cover: { name: "cover", type: i.g.string },
              gender: { name: "gender", type: i.g.integer },
              dob: { name: "dob", type: i.g.integer },
              sdob: { name: "sdob", type: i.g.string },
              status: { name: "status", type: i.g.string, nullable: !0 },
              phoneNumber: { name: "phoneNumber", type: i.g.string },
              isFr: { name: "isFr", type: i.g.integer },
              isBlocked: { name: "isBlocked", type: i.g.boolean },
              lastActionTime: {
                name: "lastActionTime",
                type: i.g.integer,
                nullable: !0,
              },
              lastUpdateTime: { name: "lastUpdateTime", type: i.g.integer },
              isActive: { name: "isActive", type: i.g.integer },
              key: { name: "key", type: i.g.integer },
              type: { name: "type", type: i.g.integer },
              isActivePC: { name: "isActivePC", type: i.g.integer },
              isActiveWeb: { name: "isActiveWeb", type: i.g.integer },
              isValid: { name: "isValid", type: i.g.integer },
              userKey: { name: "userKey", type: i.g.string },
              accountStatus: { name: "accountStatus", type: i.g.integer },
              oaInfo: { name: "oaInfo", type: i.g.json, nullable: !0 },
              user_mode: { name: "user_mode", type: i.g.integer },
              globalId: { name: "globalId", type: i.g.string, nullable: !0 },
              createdTs: { name: "createdTs", type: i.g.integer, nullable: !0 },
              lastOnlineTime: {
                name: "lastOnlineTime",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestFetchTime: {
                name: "friendRequestFetchTime",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestRead: {
                name: "friendRequestRead",
                type: i.g.boolean,
                nullable: !0,
              },
              _lastRequestTime: {
                name: "_lastRequestTime",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestMsg: {
                name: "friendRequestMsg",
                type: i.g.string,
                nullable: !0,
              },
              friendRequestSource: {
                name: "friendRequestSource",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestType: {
                name: "friendRequestType",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestSrc: {
                name: "friendRequestSrc",
                type: i.g.integer,
                nullable: !0,
              },
              friendRequestSortOrder: {
                name: "friendRequestSortOrder",
                type: i.g.integer,
                nullable: !0,
              },
              userRank: { name: "userRank", type: i.g.string, nullable: !0 },
              bizPkg: { name: "bizPkg", type: i.g.json, nullable: !0 },
              bizInfo: { name: "bizInfo", type: i.g.json, nullable: !0 },
              globalNoiseId: {
                name: "globalNoiseId",
                type: i.g.string,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          T = new s.d({
            tableName: "global_noiseid",
            name: "GlobalNoiseid",
            fields: {
              userId: { name: "userId", type: i.g.string },
              globalId: { name: "globalId", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "globalId" }],
                unique: !0,
              },
            },
          }),
          C = new s.d({
            tableName: "group",
            name: "Group",
            fields: {
              desc: { name: "desc", type: i.g.string },
              type: { name: "type", type: i.g.integer },
              creatorId: { name: "creatorId", type: i.g.string },
              totalMember: { name: "totalMember", type: i.g.integer },
              topMember: { name: "topMember", type: i.g.json },
              topic: { name: "topic", type: i.g.json, nullable: !0 },
              visibility: { name: "visibility", type: i.g.integer },
              userId: { name: "userId", type: i.g.string },
              isGroup: { name: "isGroup", type: i.g.boolean },
              displayName: { name: "displayName", type: i.g.string },
              avatar: { name: "avatar", type: i.g.string },
              bgavatar: { name: "bgavatar", type: i.g.string },
              authorId: { name: "authorId", type: i.g.string, nullable: !0 },
              lastUpdate: {
                name: "lastUpdate",
                type: i.g.integer,
                nullable: !0,
              },
              defaultAvatar: {
                name: "defaultAvatar",
                type: i.g.boolean,
                nullable: !0,
              },
              memberIds: { name: "memberIds", type: i.g.json, nullable: !0 },
              e2ee: { name: "e2ee", type: i.g.integer, nullable: !0 },
              version: { name: "version", type: i.g.string, nullable: !0 },
              subType: { name: "subType", type: i.g.integer, nullable: !0 },
              globalId: { name: "globalId", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          E = new s.d({
            tableName: "group_info",
            name: "GroupInfo",
            fields: {
              memberIds: { name: "memberIds", type: i.g.json },
              maxMember: { name: "maxMember", type: i.g.integer },
              setting: { name: "setting", type: i.g.json },
              lastUpdate: { name: "lastUpdate", type: i.g.integer },
              topMember: { name: "topMember", type: i.g.json },
              pendingApproveHintShow: {
                name: "pendingApproveHintShow",
                type: i.g.integer,
                nullable: !0,
              },
              pendingApproveUsers: {
                name: "pendingApproveUsers",
                type: i.g.json,
                nullable: !0,
              },
              userId: { name: "userId", type: i.g.string },
              pendingApprove: {
                name: "pendingApprove",
                type: i.g.integer,
                nullable: !0,
              },
              adminIds: { name: "adminIds", type: i.g.json, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "userId" }],
                unique: !0,
              },
            },
          }),
          A = new s.d({
            tableName: "group_topics",
            name: "GroupTopics",
            fields: {
              conversationId: { name: "conversationId", type: i.g.string },
              topics: { name: "topics", type: i.g.json },
              boardVersion: { name: "boardVersion", type: i.g.integer },
              lastFetch: { name: "lastFetch", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "conversationId" }],
                unique: !0,
              },
            },
          }),
          N = new s.d({
            tableName: "image",
            name: "Image",
            fields: {
              msgId: { name: "msgId", type: i.g.string },
              userId: { name: "userId", type: i.g.string },
              message: { name: "message", type: i.g.json },
              sendDttm: { name: "sendDttm", type: i.g.integer },
              fromUid: { name: "fromUid", type: i.g.string, nullable: !0 },
              subType: { name: "subType", type: i.g.integer, nullable: !0 },
              type: { name: "type", type: i.g.string, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.string, nullable: !0 },
              localPath: { name: "localPath", type: i.g.string, nullable: !0 },
              id: { name: "id", type: i.g.integer, nullable: !0 },
              previewThumb: {
                name: "previewThumb",
                type: i.g.string,
                nullable: !0,
              },
              updateTime: {
                name: "updateTime",
                type: i.g.integer,
                nullable: !0,
              },
              ttl: { name: "ttl", type: i.g.integer },
              width: { name: "width", type: i.g.integer, nullable: !0 },
              height: { name: "height", type: i.g.integer, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              userId_sendDttm_msgId: {
                name: "userId_sendDttm_msgId",
                fields: [
                  { type: "raw", field: "userId" },
                  { type: "length", field: "msgId" },
                  { type: "raw", field: "msgId" },
                ],
                unique: !1,
              },
            },
          }),
          O = new s.d({
            tableName: "label",
            name: "Label",
            fields: {
              color: { name: "color", type: i.g.string },
              createTime: { name: "createTime", type: i.g.integer },
              emoji: { name: "emoji", type: i.g.string },
              id: { name: "id", type: i.g.integer },
              conversations: { name: "conversations", type: i.g.json },
              offset: { name: "offset", type: i.g.integer },
              text: { name: "text", type: i.g.string },
              totalImage: {
                name: "totalImage",
                type: i.g.integer,
                nullable: !0,
              },
              textKey: { name: "textKey", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "id" }],
                unique: !0,
              },
            },
          }),
          k = new s.d({
            tableName: "link",
            name: "Link",
            fields: {
              msgId: { name: "msgId", type: i.g.string },
              userId: { name: "userId", type: i.g.string },
              message: { name: "message", type: i.g.json },
              sendDttm: { name: "sendDttm", type: i.g.integer },
              fromUid: { name: "fromUid", type: i.g.string, nullable: !0 },
              type: { name: "type", type: i.g.string, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.string, nullable: !0 },
              id: { name: "id", type: i.g.integer, nullable: !0 },
              updateTime: {
                name: "updateTime",
                type: i.g.integer,
                nullable: !0,
              },
              ttl: { name: "ttl", type: i.g.integer },
              previewThumb: {
                name: "previewThumb",
                type: i.g.string,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              userId_sendDttm_msgId: {
                name: "userId_sendDttm_msgId",
                fields: [
                  { type: "raw", field: "userId" },
                  { type: "length", field: "msgId" },
                  { type: "raw", field: "msgId" },
                ],
                unique: !1,
              },
            },
          }),
          $ = new s.d({
            tableName: "mention",
            name: "Mention",
            fields: {
              msgId: { name: "msgId", type: i.g.integer },
              userId: { name: "userId", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
            },
          });
        let x;
        !(function (e) {
          (e[(e.UNKNOWN = -1)] = "UNKNOWN"),
            (e[(e.POLL = 1)] = "POLL"),
            (e[(e.SYNC_MOBILE_MESSAGE = 2)] = "SYNC_MOBILE_MESSAGE"),
            (e[(e.CLOUD = 3)] = "CLOUD"),
            (e[(e.LOCAL = 5)] = "LOCAL"),
            (e[(e.SYNC_MOBILE_DB = 7)] = "SYNC_MOBILE_DB"),
            (e[(e.GET_PREVIEW = 8)] = "GET_PREVIEW"),
            (e[(e.CLOUD_FIRST = 9)] = "CLOUD_FIRST"),
            (e[(e.SOCKET = 10)] = "SOCKET"),
            (e[(e.MISS_MSG = 11)] = "MISS_MSG"),
            (e[(e.CLOUD_LOADER = 12)] = "CLOUD_LOADER");
        })(x || (x = {}));
        const j = new s.d({
          tableName: "message",
          name: "Message",
          fields: {
            msgId: { name: "msgId", type: i.g.string },
            cliMsgId: { name: "cliMsgId", type: i.g.string },
            toUid: { name: "toUid", type: i.g.string, nullable: !0 },
            msgType: { name: "msgType", type: i.g.integer },
            sendDttm: { name: "sendDttm", type: i.g.string },
            message: { name: "message", type: i.g.json },
            updateMemberIds: {
              name: "updateMemberIds",
              type: i.g.json,
              nullable: !0,
            },
            act: { name: "act", type: i.g.string, nullable: !0 },
            action: { name: "action", type: i.g.string, nullable: !0 },
            eventInfo: { name: "eventInfo", type: i.g.json, nullable: !0 },
            zglobalMsgId: {
              name: "zglobalMsgId",
              type: i.g.string,
              nullable: !0,
            },
            src: { name: "src", type: i.g.integer, nullable: !0 },
            status: { name: "status", type: i.g.integer, nullable: !0 },
            notify: { name: "notify", type: i.g.string, nullable: !0 },
            mentions: { name: "mentions", type: i.g.json, nullable: !0 },
            quote: { name: "quote", type: i.g.json, nullable: !0 },
            serverTime: { name: "serverTime", type: i.g.string, nullable: !0 },
            fromUid: { name: "fromUid", type: i.g.string, nullable: !0 },
            dName: { name: "dName", type: i.g.string, nullable: !0 },
            localDttm: { name: "localDttm", type: i.g.integer, nullable: !0 },
            ttl: { name: "ttl", type: i.g.integer, nullable: !0 },
            st: { name: "st", type: i.g.integer, nullable: !0 },
            at: { name: "at", type: i.g.integer, nullable: !0 },
            cmd: { name: "cmd", type: i.g.integer, nullable: !0 },
            originMsgType: {
              name: "originMsgType",
              type: i.g.string,
              nullable: !0,
            },
            subState: { name: "subState", type: i.g.integer, nullable: !0 },
            e2eeStatus: { name: "e2eeStatus", type: i.g.integer, nullable: !0 },
            sequenseId: { name: "sequenseId", type: i.g.integer, nullable: !0 },
            isLocalMsgId: {
              name: "isLocalMsgId",
              type: i.g.boolean,
              nullable: !0,
            },
            properties: { name: "properties", type: i.g.json, nullable: !0 },
            originTs: { name: "originTs", type: i.g.string, nullable: !0 },
            subType: { name: "subType", type: i.g.integer, nullable: !0 },
            localPath: { name: "localPath", type: i.g.string, nullable: !0 },
            folderPath: { name: "folderPath", type: i.g.string, nullable: !0 },
            root: { name: "root", type: i.g.integer, nullable: !0 },
            syncFromMobile: {
              name: "syncFromMobile",
              type: i.g.boolean,
              nullable: !0,
            },
            topOut: { name: "topOut", type: i.g.string, nullable: !0 },
            topOutTimeOut: {
              name: "topOutTimeOut",
              type: i.g.string,
              nullable: !0,
            },
            topOutImprTimeOut: {
              name: "topOutImprTimeOut",
              type: i.g.string,
              nullable: !0,
            },
            previewThumb: {
              name: "previewThumb",
              type: i.g.string,
              nullable: !0,
            },
            refMessageId: {
              name: "refMessageId",
              type: i.g.string,
              nullable: !0,
            },
            urgency: { name: "urgency", type: i.g.integer, nullable: !0 },
            dimension: { name: "dimension", type: i.g.json, nullable: !0 },
            extra: { name: "extra", type: i.g.json, nullable: !0 },
            _friendRequestData: {
              name: "_friendRequestData",
              type: i.g.json,
              nullable: !0,
            },
            content: { name: "content", type: i.g.string, nullable: !0 },
            isErrorInfo: {
              name: "isErrorInfo",
              type: i.g.boolean,
              nullable: !0,
            },
            hasReact: { name: "hasReact", type: i.g.boolean, nullable: !0 },
            uidSenderDel: {
              name: "uidSenderDel",
              type: i.g.string,
              nullable: !0,
            },
            footer: { name: "footer", type: i.g.json, nullable: !0 },
            sendErrorCode: {
              name: "sendErrorCode",
              type: i.g.integer,
              nullable: !0,
            },
            __isUpdateMessage: {
              name: "__isUpdateMessage",
              type: i.g.boolean,
              nullable: !0,
            },
            __updateData: {
              name: "__updateData",
              type: i.g.json,
              nullable: !0,
            },
            width: { name: "width", type: i.g.integer, nullable: !0 },
            height: { name: "height", type: i.g.integer, nullable: !0 },
            zipKey: { name: "zipKey", type: i.g.string, nullable: !0 },
            resend: { name: "resend", type: i.g.json, nullable: !0 },
            cancelled: { name: "cancelled", type: i.g.boolean, nullable: !0 },
            z_parsedTokens: {
              name: "z_parsedTokens",
              type: i.g.json,
              nullable: !0,
            },
            isLastMsg: { name: "isLastMsg", type: i.g.boolean, nullable: !0 },
            isSelected: { name: "isSelected", type: i.g.boolean, nullable: !0 },
            textArguments: {
              name: "textArguments",
              type: i.g.json,
              nullable: !0,
            },
            msgText: { name: "msgText", type: i.g.string, nullable: !0 },
            actionText: { name: "actionText", type: i.g.string, nullable: !0 },
            platformType: {
              name: "platformType",
              type: i.g.integer,
              nullable: !0,
            },
            oldMsgId: { name: "oldMsgId", type: i.g.string, nullable: !0 },
            vOrient: { name: "vOrient", type: i.g.integer, nullable: !0 },
            fileSize: { name: "fileSize", type: i.g.integer, nullable: !0 },
            upSrc: { name: "upSrc", type: i.g.integer, nullable: !0 },
            reader: { name: "reader", type: i.g.integer, nullable: !0 },
            sequenceId: { name: "sequenceId", type: i.g.integer, nullable: !0 },
            staredDttm: { name: "staredDttm", type: i.g.integer, nullable: !0 },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "msgId" }],
              unique: !0,
            },
            userId_sendDttm_msgId: {
              name: "userId_sendDttm_msgId",
              fields: [
                { type: "raw", field: "toUid" },
                { type: "raw", field: "sendDttm" },
                { type: "raw", field: "msgId" },
              ],
              unique: !0,
            },
            cliMsgIdIndex: {
              name: "cliMsgIdIndex",
              table: !0,
              fields: [{ type: "raw", field: "cliMsgId" }],
              unique: !1,
            },
            status_sendDttm: {
              name: "status_sendDttm",
              table: !0,
              fields: [
                { type: "raw", field: "status" },
                { type: "raw", field: "sendDttm" },
              ],
              unique: !1,
            },
          },
        });
        j.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new m.a(["message"])],
        }),
          j.setAdapterSpecificConfigs(i.a.SQLite, { partitionField: "toUid" });
        const U = new s.d({
            tableName: "notifications",
            name: "Notifications",
            fields: {
              type: { name: "type", type: i.g.integer },
              uid: { name: "uid", type: i.g.string },
              ts: { name: "ts", type: i.g.integer },
              toUid: { name: "toUid", type: i.g.string, nullable: !0 },
              msgId: { name: "msgId", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "ts" }],
                unique: !0,
              },
            },
          }),
          L = new s.d({
            tableName: "poll",
            name: "Poll",
            fields: {
              group_id: { name: "group_id", type: i.g.string, nullable: !0 },
              updater: { name: "updater", type: i.g.string, nullable: !0 },
              creator: { name: "creator", type: i.g.string },
              question: { name: "question", type: i.g.string },
              options: { name: "options", type: i.g.json },
              joined: { name: "joined", type: i.g.boolean },
              closed: { name: "closed", type: i.g.boolean },
              poll_id: { name: "poll_id", type: i.g.integer },
              allow_multi_choices: {
                name: "allow_multi_choices",
                type: i.g.boolean,
              },
              allow_add_new_option: {
                name: "allow_add_new_option",
                type: i.g.boolean,
              },
              is_anonymous: { name: "is_anonymous", type: i.g.boolean },
              poll_type: { name: "poll_type", type: i.g.integer },
              created_time: { name: "created_time", type: i.g.integer },
              updated_time: { name: "updated_time", type: i.g.integer },
              expired_time: { name: "expired_time", type: i.g.integer },
              is_hide_vote_preview: {
                name: "is_hide_vote_preview",
                type: i.g.boolean,
                nullable: !0,
              },
              poll_version: {
                name: "poll_version",
                type: i.g.integer,
                nullable: !0,
              },
              msgId: { name: "msgId", type: i.g.string, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.string, nullable: !0 },
              id: { name: "id", type: i.g.integer, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "poll_id" }],
                unique: !0,
              },
            },
          }),
          R = new s.d({
            tableName: "preview_message",
            name: "PreviewMsg",
            fields: {
              convId: { name: "convId", type: i.g.string },
              msgId: { name: "msgId", type: i.g.string },
              dName: { name: "dName", type: i.g.string },
              message: { name: "message", type: i.g.json },
              messageType: { name: "messageType", type: i.g.json },
              messageTime: { name: "messageTime", type: i.g.string },
              isGroup: { name: "isGroup", type: i.g.boolean },
              fromUid: { name: "fromUid", type: i.g.string, nullable: !0 },
              toUid: { name: "toUid", type: i.g.string, nullable: !0 },
              urgencyLevel: {
                name: "urgencyLevel",
                type: i.g.integer,
                nullable: !0,
              },
              properties: { name: "properties", type: i.g.json, nullable: !0 },
              mentions: { name: "mentions", type: i.g.json, nullable: !0 },
              ttl: { name: "ttl", type: i.g.integer, nullable: !0 },
              cliMsgId: { name: "cliMsgId", type: i.g.string, nullable: !0 },
              status: { name: "status", type: i.g.integer },
              substate: { name: "substate", type: i.g.integer, nullable: !0 },
              computedMessage: {
                name: "computedMessage",
                type: i.g.string,
                nullable: !0,
              },
              computedIcon: {
                name: "computedIcon",
                type: i.g.string,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "convId" }],
                unique: !0,
              },
              userId_sendDttm_msgId: {
                name: "messageTime",
                fields: [{ type: "raw", field: "messageTime" }],
                unique: !1,
              },
            },
          });
        R.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new m.a(["message"])],
          migrations: {
            52: { version: 52, scripts: [{ type: "create-table" }] },
          },
        });
        const z = new s.d({
            tableName: "product_db",
            name: "ProductDb",
            fields: {
              price: { name: "price", type: i.g.string },
              description: { name: "description", type: i.g.string },
              product_id: { name: "product_id", type: i.g.string },
              product_name: { name: "product_name", type: i.g.string },
              currency_unit: { name: "currency_unit", type: i.g.string },
              product_photos: { name: "product_photos", type: i.g.json },
              create_time: { name: "create_time", type: i.g.integer },
              catalog_id: { name: "catalog_id", type: i.g.string },
              owner_id: { name: "owner_id", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "product_id" }],
                unique: !0,
              },
            },
          }),
          F = new s.d({
            tableName: "quick_message",
            name: "QuickMessage",
            fields: {
              id: { name: "id", type: i.g.integer },
              keyword: { name: "keyword", type: i.g.string },
              type: { name: "type", type: i.g.integer },
              createdTime: { name: "createdTime", type: i.g.integer },
              lastModified: { name: "lastModified", type: i.g.integer },
              message: { name: "message", type: i.g.string },
              media: { name: "media", type: i.g.json, nullable: !0 },
              version: { name: "version", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "id" }],
                unique: !0,
              },
            },
          });
        F.setAdapterSpecificConfigs(i.a.IDB, {
          transforms: [new m.a(["message"])],
        });
        const B = new s.d({
            tableName: "star_message",
            name: "StarMessage",
            fields: {
              msgId: { name: "msgId", type: i.g.string },
              userId: { name: "userId", type: i.g.string },
              staredDttm: { name: "staredDttm", type: i.g.integer },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              staredDttm: {
                name: "staredDttm",
                fields: [{ type: "raw", field: "staredDttm" }],
                unique: !1,
              },
            },
          }),
          K = new s.d({
            tableName: "sticker",
            name: "Sticker",
            fields: {
              id: { name: "id", type: i.g.integer },
              cateId: { name: "cateId", type: i.g.integer },
              type: { name: "type", type: i.g.integer },
              text: { name: "text", type: i.g.string },
              uri: { name: "uri", type: i.g.string },
              fkey: { name: "fkey", type: i.g.integer },
              status: { name: "status", type: i.g.integer },
              stickerUrl: { name: "stickerUrl", type: i.g.string },
              stickerSpriteUrl: { name: "stickerSpriteUrl", type: i.g.string },
              stickerWebpUrl: {
                name: "stickerWebpUrl",
                type: i.g.string,
                nullable: !0,
              },
              totalFrames: { name: "totalFrames", type: i.g.integer },
              duration: { name: "duration", type: i.g.integer },
              effectId: { name: "effectId", type: i.g.integer },
              checksum: { name: "checksum", type: i.g.string, nullable: !0 },
              ext: { name: "ext", type: i.g.integer, nullable: !0 },
              source: { name: "source", type: i.g.integer, nullable: !0 },
              fss: { name: "fss", type: i.g.string, nullable: !0 },
              fssInfo: { name: "fssInfo", type: i.g.string, nullable: !0 },
              version: { name: "version", type: i.g.integer, nullable: !0 },
              extInfo: { name: "extInfo", type: i.g.json, nullable: !0 },
              fetchTs: { name: "fetchTs", type: i.g.integer },
              updateState: {
                name: "updateState",
                type: i.g.integer,
                nullable: !0,
              },
              recentItemType: {
                name: "recentItemType",
                type: i.g.string,
                nullable: !0,
              },
              recentItemId: {
                name: "recentItemId",
                type: i.g.string,
                nullable: !0,
              },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [
                  { type: "raw", field: "cateId" },
                  { type: "raw", field: "id" },
                ],
                unique: !0,
              },
            },
          }),
          P = new s.d({
            tableName: "todo",
            name: "Todo",
            fields: {
              id: { name: "id", type: i.g.string },
              creator: { name: "creator", type: i.g.string },
              updateTime: { name: "updateTime", type: i.g.integer },
              createTime: { name: "createTime", type: i.g.integer },
              assignees: { name: "assignees", type: i.g.json },
              dueDate: { name: "dueDate", type: i.g.integer },
              content: { name: "content", type: i.g.string },
              description: { name: "description", type: i.g.string },
              extra: { name: "extra", type: i.g.json },
              dateDefaultType: { name: "dateDefaultType", type: i.g.integer },
              status: { name: "status", type: i.g.integer },
              watchers: { name: "watchers", type: i.g.json },
              personalBoardType: {
                name: "personalBoardType",
                type: i.g.integer,
              },
              dingTimes: { name: "dingTimes", type: i.g.integer },
              schedule: { name: "schedule", type: i.g.json, nullable: !0 },
              attach: { name: "attach", type: i.g.json },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "id" }],
                unique: !0,
              },
            },
          }),
          q = new s.d({
            tableName: "topic_v2",
            name: "Topic",
            fields: {
              editorId: { name: "editorId", type: i.g.string, nullable: !0 },
              emoji: { name: "emoji", type: i.g.string },
              color: { name: "color", type: i.g.integer },
              groupId: { name: "groupId", type: i.g.string },
              creatorId: { name: "creatorId", type: i.g.string, nullable: !0 },
              editTime: { name: "editTime", type: i.g.integer },
              eventType: { name: "eventType", type: i.g.integer, nullable: !0 },
              responseMem: {
                name: "responseMem",
                type: i.g.json,
                nullable: !0,
              },
              params: { name: "params", type: i.g.json },
              type: { name: "type", type: i.g.integer },
              duration: { name: "duration", type: i.g.integer, nullable: !0 },
              repeatData: { name: "repeatData", type: i.g.json, nullable: !0 },
              createTime: { name: "createTime", type: i.g.integer },
              repeat: { name: "repeat", type: i.g.integer },
              startTime: { name: "startTime", type: i.g.integer },
              id: { name: "id", type: i.g.string },
              action: { name: "action", type: i.g.integer, nullable: !0 },
              listRespMem: {
                name: "listRespMem",
                type: i.g.json,
                nullable: !0,
              },
              creatorUid: {
                name: "creatorUid",
                type: i.g.string,
                nullable: !0,
              },
              toUid: { name: "toUid", type: i.g.string, nullable: !0 },
              editorUid: { name: "editorUid", type: i.g.string, nullable: !0 },
              repeatInfo: { name: "repeatInfo", type: i.g.json, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [
                  { type: "raw", field: "groupId" },
                  { type: "raw", field: "id" },
                ],
                unique: !0,
              },
            },
          }),
          V = new s.d({
            tableName: "ttlmsg",
            name: "TTLMessage",
            fields: {
              globalDelMsgId: { name: "globalDelMsgId", type: i.g.string },
              ts: { name: "ts", type: i.g.string },
              expired: { name: "expired", type: i.g.integer },
              type: { name: "type", type: i.g.integer },
              conversationId: { name: "conversationId", type: i.g.string },
              clientDelMsgId: { name: "clientDelMsgId", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "globalDelMsgId" }],
                unique: !0,
              },
              expired: {
                name: "expired",
                fields: [{ type: "raw", field: "expired" }],
                unique: !1,
              },
            },
          }),
          G = new s.d({
            tableName: "unread_conv",
            name: "UnreadConv",
            fields: {
              convId: { name: "convId", type: i.g.string },
              smsUnreadCount: { name: "smsUnreadCount", type: i.g.integer },
              smsUnreadNotCount: {
                name: "smsUnreadNotCount",
                type: i.g.integer,
              },
              mentionUnreadCount: {
                name: "mentionUnreadCount",
                type: i.g.integer,
              },
              strangerUnreadCount: {
                name: "strangerUnreadCount",
                type: i.g.integer,
              },
              lastProcessMsgId: { name: "lastProcessMsgId", type: i.g.string },
              lastSeenReactId: { name: "lastSeenReactId", type: i.g.string },
              unreadMark: { name: "unreadMark", type: i.g.json, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "convId" }],
                unique: !0,
              },
              userId_sendDttm_msgId: {
                name: "lastProcessMsgId",
                fields: [{ type: "raw", field: "lastProcessMsgId" }],
                unique: !1,
              },
            },
          });
        G.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            52: { version: 52, scripts: [{ type: "create-table" }] },
          },
        });
        const Q = new s.d({
            tableName: "uploaded_file_thumb",
            name: "UploadFileThumb",
            fields: {
              checksum: { name: "checksum", type: i.g.string },
              url: { name: "url", type: i.g.string },
              dimension: { name: "dimension", type: i.g.json },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "checksum" }],
                unique: !0,
              },
            },
          }),
          H = new s.d({
            tableName: "zinstant_db",
            name: "ZInstant",
            fields: {
              data: { name: "data", type: i.g.string },
              modify_time: { name: "modify_time", type: i.g.integer },
              key: { name: "key", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "key" }],
                unique: !0,
              },
            },
          });
        H.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            60: { version: 60, scripts: [{ type: "create-table" }] },
          },
        });
        const W = new s.d({
          tableName: "zcloud",
          name: "ZCloud",
          fields: {
            action: { name: "action", type: i.g.integer },
            noiseId: { name: "noiseId", type: i.g.string },
            actionType: { name: "actionType", type: i.g.integer },
            ts: { name: "ts", type: i.g.integer },
            cliTs: { name: "cliTs", type: i.g.integer },
            msgInfo: { name: "msgInfo", type: i.g.json },
            mediaInfo: { name: "mediaInfo", type: i.g.json },
            verified: { name: "verified", type: i.g.integer, nullable: !0 },
            encryptInfo: { name: "encryptInfo", type: i.g.json, nullable: !0 },
            zKey: { name: "zKey", type: i.g.string },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "noiseId" }],
              unique: !0,
            },
            zKey: {
              name: "zKey",
              fields: [{ type: "raw", field: "zKey" }],
              unique: !1,
            },
          },
        });
        W.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            58: { version: 58, scripts: [{ type: "create-table" }] },
            61: {
              version: 61,
              scripts: [
                { type: "create-index", params: { indexName: "zKey" } },
              ],
            },
          },
        });
        const Y = {
          Avatar: l,
          AvaHistory: c,
          BoardSuggest: d,
          CloudSegment: g,
          Conversation: p,
          DownloadRetry: f,
          File: D,
          Friend: M,
          FriendsInfo: S,
          Group: C,
          GroupInfo: E,
          GroupTopics: A,
          Image: N,
          Label: O,
          Link: k,
          Mention: $,
          Message: j,
          Notifications: U,
          Poll: L,
          StarMessage: B,
          Sticker: K,
          Todo: P,
          Topic: q,
          TTLMessage: V,
          E2eeMeta: b,
          E2eePrekey: I,
          E2eeSession: v,
          E2eeIdentity: _,
          E2eeSignedPrekey: w,
          E2eeGroup: y,
          E2eeHash: h,
          QuickMessage: F,
          GlobalNoiseid: T,
          UploadFileThumb: Q,
          ProductDb: z,
          CatalogDb: u,
          PreviewMsg: R,
          UnreadConv: G,
          ZCloud: W,
        };
        Y.ZInstant = H;
        const Z = { name: "Core", session: !0 },
          J = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("Core"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(Y),
          },
          X = {
            partitionNamingStrategy: [a.a.const("zdb"), a.a.byUser()],
            partitionsMap: Object(o.b)(Y),
          },
          ee = Object(r.a)(
            Object(r.a)(Object(r.a)({}, Z), J),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          te = Object(r.a)(
            Object(r.a)(Object(r.a)({}, Z), X),
            {},
            { version: 62, milestoneVersion: 51, type: i.a.IDB },
          );
        let ne = null,
          re = null;
        t.a = {
          schema: Y,
          get useSqlite() {
            return null === ne && (ne = new s.a(ee)), ne;
          },
          get useIdb() {
            return null === re && (re = new s.a(te)), re;
          },
        };
      },
      ohhZ: function (e, t, n) {},
      pAGP: function (e, t, n) {
        "use strict";
        n("jvA1");
        var r = n("qcQX");
        n.d(t, "TableConfig", function () {
          return r.b;
        });
        n("TTNl"),
          n("qAG0"),
          n("Ro2z"),
          n("Cede"),
          n("Ugdv"),
          n("ADPh"),
          n("JMlY");
      },
      pP8i: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv"),
          l = n("pAGP");
        const c = new l.TableConfig({
          tableName: "metas",
          name: "Metas",
          fields: {
            id: { name: "id", type: i.g.integer },
            current: { name: "current", type: i.g.integer, default: 0 },
            startups: {
              name: "startups",
              type: i.g.json,
              default: [],
              nullable: !0,
            },
            currentPage: { name: "currentPage", type: i.g.integer, default: 0 },
            ss: { name: "ss", type: i.g.integer, default: -1 },
            ss_ln: { name: "ss_ln", type: i.g.integer, default: -1 },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "id" }],
              unique: !0,
            },
          },
        });
        var d = n("fsQs");
        const u = new l.TableConfig({
            tableName: "modules",
            name: "Modules",
            fields: {
              id: { name: "id", type: i.g.integer },
              hash: { name: "hash", type: i.g.string },
              encver: { name: "encver", type: i.g.integer, default: d.o },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "hash" }],
                unique: !0,
              },
            },
          }),
          g = {
            Pages: new l.TableConfig({
              tableName: "pages",
              name: "Pages",
              fields: {
                id: { name: "id", type: i.g.integer },
                mtime: { name: "mtime", type: i.g.integer },
                data: { name: "data", type: i.g.blob, nullable: !0 },
                curoffs: { name: "curoffs", type: i.g.integer, default: 0 },
                max: { name: "max", type: i.g.integer, default: 250 * d.h },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "id" }],
                  unique: !0,
                },
              },
            }),
            Metas: c,
            Modules: u,
          },
          m = { name: "ZLog", session: !1 },
          p = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [a.a.const("ZLog"), a.a.byTable()],
            partitionsMap: Object(o.a)(g),
          },
          f = {
            partitionNamingStrategy: [a.a.const("zdb_log")],
            partitionsMap: Object(o.b)(g),
          },
          y = Object(r.a)(
            Object(r.a)(Object(r.a)({}, m), p),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          h = Object(r.a)(
            Object(r.a)(Object(r.a)({}, m), f),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.IDB },
          );
        let _ = null,
          b = null;
        t.a = {
          schema: g,
          get useSqlite() {
            return null === _ && (_ = new s.a(y)), _;
          },
          get useIdb() {
            return null === b && (b = new s.a(h)), b;
          },
        };
      },
      pRxM: function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = {
            EffectRes: new s.d({
              tableName: "effect_res",
              name: "EffectRes",
              fields: {
                icon: { name: "icon", type: i.g.string },
                iconBlob: { name: "iconBlob", type: i.g.blob },
                genDate: { name: "genDate", type: i.g.integer },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "icon" }],
                  unique: !0,
                },
              },
            }),
            LiveEmoji: new s.d({
              tableName: "live_emoji",
              name: "LiveEmoji",
              fields: {
                rType: { name: "rType", type: i.g.integer },
                rIcon: { name: "rIcon", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "rType" }],
                  unique: !0,
                },
              },
            }),
            Reaction: new s.d({
              tableName: "reaction",
              name: "Reaction",
              fields: {
                idTo: { name: "idTo", type: i.g.string },
                msgType: { name: "msgType", type: i.g.string },
                rClientMsgId: { name: "rClientMsgId", type: i.g.integer },
                rMsgId: { name: "rMsgId", type: i.g.string },
                rMsgType: { name: "rMsgType", type: i.g.integer, nullable: !0 },
                currentIcon: { name: "currentIcon", type: i.g.integer },
                reactions: { name: "reactions", type: i.g.json, nullable: !0 },
                lastSender: {
                  name: "lastSender",
                  type: i.g.string,
                  nullable: !0,
                },
                lastUpdate: {
                  name: "lastUpdate",
                  type: i.g.integer,
                  nullable: !0,
                },
                lastReceiveReactId: {
                  name: "lastReceiveReactId",
                  type: i.g.integer,
                  nullable: !0,
                },
                lastReactIcon: {
                  name: "lastReactIcon",
                  type: i.g.integer,
                  nullable: !0,
                },
                ts: { name: "ts", type: i.g.string, nullable: !0 },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "rMsgId" }],
                  unique: !0,
                },
              },
            }),
            UnreadReact: new s.d({
              tableName: "unread_react",
              name: "UnreadReact",
              fields: {
                userId: { name: "userId", type: i.g.string },
                conversationId: { name: "conversationId", type: i.g.string },
                msgId: { name: "msgId", type: i.g.string },
                reactIcon: { name: "reactIcon", type: i.g.string },
                reactionId: { name: "reactionId", type: i.g.string },
                reactionCliId: { name: "reactionCliId", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "conversationId" }],
                  unique: !0,
                },
              },
            }),
          },
          c = { name: "Reaction", session: !0 },
          d = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("Reaction"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(l),
          },
          u = {
            partitionNamingStrategy: [a.a.const("r_db"), a.a.byUser()],
            partitionsMap: Object(o.b)(l),
          },
          g = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), d),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          m = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), u),
            {},
            { version: 4, milestoneVersion: 4, type: i.a.IDB },
          );
        let p = null,
          f = null;
        t.a = {
          schema: l,
          get useSqlite() {
            return null === p && (p = new s.a(g)), p;
          },
          get useIdb() {
            return null === f && (f = new s.a(m)), f;
          },
        };
      },
      pjo1: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        });
        var r = n("jDHv");
        const i = Object(r.define)("database-client");
      },
      qAG0: function (e, t, n) {
        "use strict";
        n("ZICu"), n("KiFO"), n("k6Bk");
      },
      qcQX: function (e, t, n) {
        "use strict";
        var r = n("teaq");
        n.d(t, "a", function () {
          return r.a;
        }),
          n.d(t, "b", function () {
            return r.d;
          });
      },
      rFEu: function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
          return C;
        }),
          n.d(t, "d", function () {
            return E;
          }),
          n.d(t, "g", function () {
            return A;
          }),
          n.d(t, "a", function () {
            return N;
          }),
          n.d(t, "c", function () {
            return k;
          }),
          n.d(t, "f", function () {
            return x;
          }),
          n.d(t, "b", function () {
            return T;
          });
        class r {
          constructor() {
            (this.name = void 0),
              (this.checkingMode = void 0),
              (this.points = void 0);
          }
        }
        class i {}
        class a extends r {
          constructor(e) {
            super(),
              (this.name = void 0),
              (this.checkingMode = void 0),
              (this.points = void 0),
              (this.name = e.name),
              (this.checkingMode = e.checkingMode || a.DEFAULT_CHECKING_MODE),
              (this.points = e.points);
          }
        }
        a.DEFAULT_CHECKING_MODE = "sequential";
        var s = a;
        class o {
          constructor(e) {
            (this.version = void 0),
              (this.version =
                (null == e ? void 0 : e.version) || o.DEFAULT_VERSION);
          }
        }
        o.DEFAULT_VERSION = 1;
        var l = o;
        var c = class extends l {
          constructor(e) {
            super(e),
              (this.name = void 0),
              (this.condition = void 0),
              (this.qos = void 0),
              (this.points = void 0),
              (this.disabled = void 0),
              (this.name = e.name),
              (this.condition = e.condition),
              (this.qos = e.qos),
              (this.points = e.points),
              (this.disabled = e.disabled);
          }
        };
        var d = class extends i {
          constructor() {
            super(), (this.statements = void 0);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.statements = t;
          }
          getAll() {
            return this.statements;
          }
        };
        var u = class extends l {
            constructor(e) {
              super(e),
                (this.metrics = void 0),
                e.metrics.length && (this.metrics = e.metrics);
            }
            getMetrics() {
              return this.metrics || [];
            }
          },
          g = n("AoYG");
        var m = class extends l {
          constructor(e) {
            super(e),
              (this.name = void 0),
              (this.type = void 0),
              (this.config = void 0),
              (this.features = void 0),
              (this.categories = void 0),
              (this.fromProcess = void 0),
              (this.startFromEpoch = void 0),
              (this.showStackTrace = void 0),
              (this.statement = void 0),
              (this.disabled = void 0),
              (this.mode = void 0),
              (this.name = e.name),
              (this.type = e.type || g.a.TIME),
              (this.config = e.config),
              (this.features = e.features),
              (this.categories = e.categories),
              (this.fromProcess = e.fromProcess),
              (this.startFromEpoch = e.startFromEpoch),
              (this.showStackTrace = e.showStackTrace),
              (this.disabled = e.disabled),
              (this.mode = e.mode),
              e.statement instanceof i
                ? (this.statement = e.statement)
                : e.statement instanceof r &&
                  (this.statement = w.StatementGroup(e.statement));
          }
        };
        var p = class extends l {
          constructor(e) {
            super(),
              (this.schemas = void 0),
              (this.schemas = new Map(Object.entries(e)));
          }
          getSchemas() {
            return this.schemas ? Array.from(this.schemas.values()) : [];
          }
        };
        var f = class extends m {
          constructor(e) {
            super(e),
              (this.timeline = void 0),
              (this.type = g.a.MEMORY),
              (this.timeline = e.timeline);
          }
        };
        var y = class extends m {
          constructor(e) {
            super(e),
              (this.timeline = void 0),
              (this.type = g.a.CPU),
              (this.timeline = e.timeline);
          }
        };
        var h = class extends m {
          constructor(e) {
            super(e),
              (this.timeout = void 0),
              (this.type = g.a.FPS),
              (this.timeout = e.timeout);
          }
        };
        const _ = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new e(...n);
        };
        var b = class extends l {
          constructor() {
            super(), (this.timeNodes = void 0);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            this.timeNodes = (t || []).map((e) => ({ time: e }));
          }
        };
        var I = class {
          constructor(e, t) {
            (this.defaultValue = e), (this.externalConfigs = t);
          }
          getDefaultValue() {
            return this.defaultValue;
          }
          getExternalConfigs() {
            return this.externalConfigs;
          }
        };
        class v {
          constructor() {}
        }
        (v.SchemaGroup = (e) => _(p, e)),
          (v.Schema = (e) => _(u, e)),
          (v.Metric = (e) => _(m, "string" == typeof e ? { name: e } : e)),
          (v.MetricMemory = (e) => _(f, e)),
          (v.MetricCPU = (e) => _(y, e)),
          (v.MetricFps = (e) => _(h, e)),
          (v.Statement = (e) => _(s, e)),
          (v.StatPoint = (e) => _(c, e)),
          (v.StatementGroup = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return _(d, ...t);
          }),
          (v.Timeline = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return _(b, ...t);
          }),
          (v.Config = (e, t) => _(I, e, t));
        var w = v,
          D = n("dFSO");
        let M;
        var S;
        ((S = M || (M = {})).time = D.e),
          (S.bytes = D.a),
          (S.notNil = (e) => !Object(D.b)(e)),
          (S.extractCPUUsage = (e) => {
            var t, n, r;
            return null === (t = e.data) ||
              void 0 === t ||
              null === (n = t.usage) ||
              void 0 === n ||
              null === (r = n.cpu) ||
              void 0 === r
              ? void 0
              : r.percent;
          }),
          (S.extractHeapUsed = (e) => {
            var t, n, r;
            return null === (t = e.data) ||
              void 0 === t ||
              null === (n = t.usage) ||
              void 0 === n ||
              null === (r = n.memory) ||
              void 0 === r
              ? void 0
              : r.heapUsed;
          }),
          (S.extractPassedTime = (e) => {
            var t;
            return null === (t = e.data) || void 0 === t
              ? void 0
              : t.passedTime;
          }),
          (S.extractRAM = (e) => {
            var t;
            return null === (t = e.systemInfo) || void 0 === t
              ? void 0
              : t.totalMem;
          }),
          (S.isM1 = (e) => {
            var t, n;
            return (
              "arm" ===
                (null == e || null === (t = e.systemInfo) || void 0 === t
                  ? void 0
                  : t.arch) ||
              "arm64" ===
                (null == e || null === (n = e.systemInfo) || void 0 === n
                  ? void 0
                  : n.arch)
            );
          });
        var T = M;
        const C = w.SchemaGroup,
          E = w.Schema,
          A = w.Timeline,
          N = w.Config,
          O = w.Metric;
        (O.Memory = w.MetricMemory),
          (O.CPU = w.MetricCPU),
          (O.Fps = w.MetricFps);
        const k = O,
          $ = w.Statement;
        ($.Group = w.StatementGroup), ($.Point = w.StatPoint);
        const x = $;
      },
      rQsU: function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
          return i;
        }),
          n.d(t, "c", function () {
            return a;
          }),
          n.d(t, "a", function () {
            return s;
          }),
          n.d(t, "b", function () {
            return o;
          });
        var r = n("jDHv");
        let i, a;
        !(function (e) {
          (e[(e.ALL = 0)] = "ALL"),
            (e[(e.UNREAD = 1)] = "UNREAD"),
            (e[(e.STRANGER = 2)] = "STRANGER"),
            (e[(e.FOCUSED = 3)] = "FOCUSED"),
            (e[(e.ARCHIVED = 4)] = "ARCHIVED"),
            (e[(e.NONE = -1)] = "NONE");
        })(i || (i = {})),
          (function (e) {
            (e[(e.ALL = 0)] = "ALL"), (e[(e.UNREAD = 1)] = "UNREAD");
          })(a || (a = {}));
        const s = "convlist-controller",
          o = Object(r.define)(s);
      },
      "rdC+": function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = {
            AsyncStore: new s.d({
              tableName: "async-store",
              name: "AsyncStore",
              fields: {
                key: { name: "key", type: i.g.string },
                val: { name: "val", type: i.g.string },
              },
              indices: {
                primary: {
                  name: "primary",
                  fields: [{ type: "raw", field: "key" }],
                  unique: !0,
                },
              },
            }),
          },
          c = { name: "SecureLocalstorage", session: !1 },
          d = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [a.a.const("SecureLocalstorage")],
            partitionsMap: Object(o.a)(l),
          },
          u = {
            partitionNamingStrategy: [a.a.const("zsecure-localstorage")],
            partitionsMap: Object(o.b)(l),
          },
          g = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), d),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          m = Object(r.a)(
            Object(r.a)(Object(r.a)({}, c), u),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.IDB },
          );
        let p = null,
          f = null;
        t.a = {
          schema: l,
          get useSqlite() {
            return null === p && (p = new s.a(g)), p;
          },
          get useIdb() {
            return null === f && (f = new s.a(m)), f;
          },
        };
      },
      rkiK: function (e, t, n) {
        "use strict";
        var r = n("cWDS");
        n.o(r, "MetricEvent") &&
          n.d(t, "MetricEvent", function () {
            return r.MetricEvent;
          }),
          n.o(r, "MetricName") &&
            n.d(t, "MetricName", function () {
              return r.MetricName;
            }),
          n.o(r, "MetricTool") &&
            n.d(t, "MetricTool", function () {
              return r.MetricTool;
            }),
          n.o(r, "MetriczDriver") &&
            n.d(t, "MetriczDriver", function () {
              return r.MetriczDriver;
            }),
          n.o(r, "MetriczMessenger") &&
            n.d(t, "MetriczMessenger", function () {
              return r.MetriczMessenger;
            }),
          n.o(r, "MetriczProcessLifecycle") &&
            n.d(t, "MetriczProcessLifecycle", function () {
              return r.MetriczProcessLifecycle;
            }),
          n.o(r, "MetriczUtilsAPI") &&
            n.d(t, "MetriczUtilsAPI", function () {
              return r.MetriczUtilsAPI;
            });
        var i = n("fbdB");
        n.d(t, "MetricEvent", function () {
          return i.a;
        }),
          n.d(t, "MetricName", function () {
            return i.b;
          });
        var a = n("GhaG");
        n.d(t, "MetricTool", function () {
          return a.a;
        }),
          n.d(t, "MetriczDriver", function () {
            return a.b;
          }),
          n.d(t, "MetriczMessenger", function () {
            return a.c;
          }),
          n.d(t, "MetriczUtilsAPI", function () {
            return a.d;
          }),
          (t.default = a.e);
      },
      rors: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return r;
        }),
          n.d(t, "b", function () {
            return i;
          }),
          n.d(t, "c", function () {
            return a;
          });
        const r = 25,
          i = 500,
          a = {
            getProcessMemory: "MetriczInternal.getProcessMemory",
            updateOffsetTime: "MetriczInternal.updateOffsetTime",
            saveLogsFromRenderer: "MetriczInternal.saveLogsFromRenderer",
            getPersistedDebugObj: "MetriczInternal.getPersistedDebugObj",
          };
      },
      rvru: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return l;
        });
        var r,
          i = n("jDHv"),
          a = n("DI/x"),
          s = n("12Ui");
        let o =
          Object(i.injectable)()(
            (r =
              (function (e, t) {
                return Object(i.inject)(s.a)(e, void 0, 0);
              })(
                (r =
                  Reflect.metadata(
                    "design:type",
                    Function,
                  )(
                    (r =
                      Reflect.metadata("design:paramtypes", [
                        void 0 === s.a ? Object : s.a,
                      ])(
                        (r = class {
                          constructor(e) {
                            (this.qos = e),
                              (this.stopDBErrorQos = !1),
                              (this.dbErrorQosCount = 0),
                              (this.stopMissingTablesQos = {});
                          }
                          sendTimeConsumingQueryQos(e, t) {
                            let n = 0;
                            (n = t < 3e4 ? 1 : t < 6e4 ? 2 : 3),
                              this.qos.increaseFailed(
                                111023,
                                -0,
                                t,
                                n,
                                Date.now(),
                                [JSON.stringify(e)],
                              );
                          }
                          sendDBErrorQos(e) {
                            if (!this.stopDBErrorQos) {
                              if (e instanceof a.e)
                                e instanceof a.c
                                  ? this.sendDOMExceptionErrorQos(e)
                                  : this.sendDALErrorQos(e);
                              else {
                                let t = "";
                                "string" == typeof e
                                  ? (t = e)
                                  : e instanceof Error &&
                                    (t = e.message || e.name);
                                const n = new a.i(t);
                                this.sendDALErrorQos(n);
                              }
                              return (
                                (this.dbErrorQosCount += 1),
                                this.dbErrorQosCount > 10
                                  ? ((this.stopDBErrorQos = !0),
                                    (this.dbErrorQosCount = 0),
                                    void setTimeout(() => {
                                      this.stopDBErrorQos = !1;
                                    }, 9e5))
                                  : void 0
                              );
                            }
                          }
                          sendSuccessOpenDBDurationQos(e, t, n) {
                            let r = 1;
                            n > 2e4
                              ? (r = 6)
                              : n > 15e3
                                ? (r = 5)
                                : n > 1e4
                                  ? (r = 4)
                                  : n > 5e3
                                    ? (r = 3)
                                    : n > 1e3 && (r = 2),
                              this.qos.increaseFailed(91063, 0, 0, r, t, [e]);
                          }
                          sendLongOpenRequestQos(e) {
                            this.qos.increaseFailed(
                              97126,
                              0,
                              0,
                              0,
                              Date.now(),
                              [e],
                            );
                          }
                          sendMissingTableQos(e, t) {
                            this.stopMissingTablesQos[e] ||
                              (this.qos.increaseFailed(
                                91073,
                                0,
                                0,
                                0,
                                Date.now(),
                                [e, ...t],
                              ),
                              (this.stopMissingTablesQos[e] = !0));
                          }
                          sendDALErrorQos(e) {
                            this.qos.increaseFailed(
                              97125,
                              0,
                              0,
                              e.code,
                              Date.now(),
                              e.qosParams,
                            );
                          }
                          sendDOMExceptionErrorQos(e) {
                            let t = -1;
                            switch (e.name) {
                              case "IndexSizeError":
                                t = 1;
                                break;
                              case "HierarchyRequestError":
                                t = 3;
                                break;
                              case "WrongDocumentError":
                                t = 4;
                                break;
                              case "InvalidCharacterError":
                                t = 5;
                                break;
                              case "NoModificationAllowedError":
                                t = 7;
                                break;
                              case "NotFoundError":
                                t = 8;
                                break;
                              case "NotSupportedError":
                                t = 9;
                                break;
                              case "InUseAttributeError":
                                t = 10;
                                break;
                              case "InvalidStateError":
                                t = 11;
                                break;
                              case "SyntaxError":
                                t = 12;
                                break;
                              case "InvalidModificationError":
                                t = 13;
                                break;
                              case "NamespaceError":
                                t = 14;
                                break;
                              case "InvalidAccessError":
                                t = 15;
                                break;
                              case "SecurityError":
                                t = 18;
                                break;
                              case "NetworkError":
                                t = 19;
                                break;
                              case "AbortError":
                                t = 20;
                                break;
                              case "URLMismatchError":
                                t = 21;
                                break;
                              case "QuotaExceededError":
                                t = 22;
                                break;
                              case "TimeoutError":
                                t = 23;
                                break;
                              case "InvalidNodeTypeError":
                                t = 24;
                                break;
                              case "DataCloneError":
                                t = 25;
                                break;
                              case "EncodingError":
                                t = 26;
                                break;
                              case "NotReadableError":
                                t = 27;
                                break;
                              case "UnknownError":
                                t = -1;
                                break;
                              case "ConstraintError":
                                t = 28;
                                break;
                              case "DataError":
                                t = 29;
                                break;
                              case "TransactionInactiveError":
                                t = 30;
                                break;
                              case "ReadOnlyError":
                                t = 31;
                                break;
                              case "VersionError":
                                t = 32;
                                break;
                              case "OperationError":
                                t = 33;
                                break;
                              default:
                                void 0 !== e.code && (t = e.code);
                            }
                            const n = e.message || "";
                            this.qos.increaseFailed(
                              91009,
                              0,
                              0,
                              t,
                              Date.now(),
                              [n],
                            );
                          }
                        }),
                      ) || r),
                  ) || r),
              ) || r),
          ) || r;
        const l = Object(i.define)("database-qos");
        i.ModuleContainer.registerSingleton(l, o);
      },
      tHMN: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return s;
          });
        var r = n("jDHv"),
          i = n("AH6j");
        n("PmZf");
        class a extends i.b {}
        const s = Object(r.define)("database-engine");
      },
      teaq: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
          return m;
        }),
          n.d(t, "d", function () {
            return f;
          }),
          n.d(t, "a", function () {
            return h;
          }),
          n.d(t, "b", function () {
            return _;
          });
        var r = n("VTBJ"),
          i = n("75pU"),
          a = n.n(i),
          s = n("jDHv"),
          o = n("UK4g"),
          l = n("YEoC"),
          c = n("DI/x");
        class d {}
        class u extends d {
          constructor(e) {
            super(),
              (this.fieldConfigs = void 0),
              (this.fieldConfigs = Object.values(e).map((e) => new m(e)));
          }
          getFields(e) {
            return e
              ? this.fieldConfigs.filter((t) => t.type === e)
              : this.fieldConfigs;
          }
          getFieldValues(e) {
            return this.getFields().map((t) => e[t.name]);
          }
          createValidator(e) {
            const t = this.getFields().filter((e) => !e.autoIncrement),
              n = e ? t.filter((t) => e.includes(t.name)) : t;
            let r = [
              `const vldFls = ${JSON.stringify(t.map((e) => e.name))}`,
              "const curFlds = Object.keys(v)",
              "for (const field of curFlds) { if (!vldFls.includes(field)) return { ok: false, reason: 3, field }}",
            ].join(";");
            return (
              (r += n
                .map((e) =>
                  e.type === l.g.json
                    ? e.nullable || void 0 !== e.defaultValue
                      ? ""
                      : `if (v[${e.escapedName}] === null || v[${e.escapedName}] === undefined) return { ok: false, reason: 1, field: ${e.escapedName}, expected: "object - non-nullable", actual: v[${e.escapedName}] }`
                    : e.nullable
                      ? [
                          "if (",
                          `v[${e.escapedName}] !== null &&`,
                          `v[${e.escapedName}] !== undefined &&`,
                          `typeof v[${e.escapedName}] !== "${e.jsType}")`,
                          `return { ok: false, reason: 2, field: ${e.escapedName}, expected: "${e.jsType} - nullable", actual: typeof v[${e.escapedName}] }`,
                        ].join("")
                      : [
                          `if (v[${e.escapedName}] === null || v[${e.escapedName}] === undefined) return ${void 0 !== e.defaultValue ? "{ ok: true }" : `{ ok: false, reason: 1, field: ${e.escapedName}, expected: "non-nullable", actual: typeof v[${e.escapedName}] }`};`,
                          `if (typeof v[${e.escapedName}] !== "${e.jsType}") return { ok: false, reason: 2, field: ${e.escapedName}, expected: "${e.jsType}", actual: typeof v[${e.escapedName}] }`,
                        ].join(";"),
                )
                .join(";")
                .concat(";return { ok: true };")),
              new Function("v", r)
            );
          }
        }
        class g extends d {
          constructor(e) {
            super(),
              (this.fieldConfig = void 0),
              (this.fieldConfig = new m(Object(r.a)({ name: "data" }, e)));
          }
          getFieldValues(e) {
            return [e];
          }
          createValidator() {
            const e = this.fieldConfig;
            let t = `const v = { ${e.escapedName}: x };`;
            return (
              e.type === l.g.json
                ? e.nullable || void 0 !== e.defaultValue
                  ? (t = "")
                  : (t += `if (v[${e.escapedName}] === null || v[${e.escapedName}] === undefined) return { ok: false, reason: 1, field: ${e.escapedName}, expected: "object - non-nullable", actual: v[${e.escapedName}] }`)
                : e.nullable
                  ? (t += [
                      "if (",
                      `v[${e.escapedName}] !== null &&`,
                      `v[${e.escapedName}] !== undefined &&`,
                      `typeof v[${e.escapedName}] !== "${e.jsType}")`,
                      `return { ok: false, reason: 2, field: ${e.escapedName}, expected: "${e.jsType} - nullable", actual: typeof v[${e.escapedName}] }`,
                    ].join(""))
                  : (t += [
                      `if (v[${e.escapedName}] === null || v[${e.escapedName}] === undefined) return ${void 0 !== e.defaultValue ? "{ ok: true }" : `{ ok: false, reason: 1, field: ${e.escapedName}, expected: "non-nullable", actual: v[${e.escapedName}] }`};`,
                      `if (typeof v[${e.escapedName}] !== "${e.jsType}") return { ok: false, reason: 2, field: ${e.escapedName}, expected: "${e.jsType}", actual: typeof v[${e.escapedName}] }`,
                    ].join(";")),
              (t = t.concat(";return { ok: true };")),
              new Function("x", t)
            );
          }
          getFields(e) {
            return e
              ? this.fieldConfig.type === e
                ? [this.fieldConfig]
                : []
              : [this.fieldConfig];
          }
        }
        class m {
          constructor(e) {
            (this._config = e),
              (this.name = void 0),
              (this.nullable = void 0),
              (this.escapedName = void 0),
              (this.type = void 0),
              (this.jsType = void 0),
              (this.autoIncrement = void 0),
              (this.defaultValue = void 0),
              (this.name = e.name),
              (this.nullable = !0 === e.nullable),
              (this.escapedName = '"' + this.name + '"'),
              (this.type = e.type),
              (this.jsType = this.getJsType()),
              (this.autoIncrement = e.autoIncrement),
              (this.defaultValue = e.default);
          }
          getJsType() {
            switch (this._config.type) {
              case l.g.blob:
                return "object";
              case l.g.boolean:
                return "boolean";
              case l.g.float:
              case l.g.integer:
                return "number";
              case l.g.json:
                return "object";
              case l.g.string:
              default:
                return "string";
            }
          }
        }
        class p {
          constructor(e) {
            this._config = e;
          }
          get name() {
            return this._config.name;
          }
          get fields() {
            return this._config.fields;
          }
          get unique() {
            return this._config.unique;
          }
          get autoIncrement() {
            return this._config.autoIncrement;
          }
          getRealFields() {
            return this._config.fields
              .filter((e) => "raw" === e.type)
              .map((e) => e.field);
          }
          createKey(e) {
            return this.getRealFields().map((t) => e[t]);
          }
          getValue(e, t) {
            if (Array.isArray(e)) {
              return e[this._config.fields.findIndex((e) => e.field === t)];
            }
            if (
              1 === this._config.fields.length &&
              this._config.fields[0].field === t
            )
              return e;
          }
          validateKey(e) {
            let t = !0;
            return (
              (t = Array.isArray(e)
                ? this._config.fields.length === e.length
                : null != e && 1 === this._config.fields.length),
              t
            );
          }
        }
        class f {
          constructor(e) {
            (this.commonConfig = e),
              (this.entity = void 0),
              (this.isNonFieldlikeEntity = void 0),
              (this.fieldManager = void 0),
              (this.indices = void 0),
              (this.tableName = void 0),
              (this.name = void 0),
              (this.partitionField = void 0),
              (this.usePartitionTable = void 0),
              (this.primaryIndex = void 0),
              (this.mapNameToIndices = void 0),
              (this.validators = void 0),
              (this.adapterSpecificConfigs = null),
              (this.doesUsePartitionTableCache = new Map()),
              (this.dbName = void 0),
              (this.isNonFieldlikeEntity = e.isNonFieldlikeEntity || !1),
              (this.indices = Object.values(e.indices).map((e) => new p(e)));
            let t = e.fields;
            if (!this.isNonFieldlikeEntity) {
              const n = new Set();
              this.indices.forEach((e) => {
                if (e.autoIncrement) {
                  e.fields.forEach((e) => {
                    let { field: t } = e;
                    n.add(t);
                  });
                }
              }),
                n.size &&
                  (t = Object.entries(e.fields).reduce((e, t) => {
                    let [i, a] = t;
                    const s = Object(r.a)({}, a);
                    return (
                      n.has(s.name) && (s.autoIncrement = !0), (e[i] = s), e
                    );
                  }, {}));
            }
            (this.fieldManager = this.createConfigFieldManager(t)),
              (this.mapNameToIndices = new Map(
                this.indices.map((e) => [e.name, e]),
              )),
              (this.primaryIndex = this.getPrimaryIndex() || null),
              e.partitionField
                ? (this.usePartitionTable =
                    !this.isNonFieldlikeEntity &&
                    -1 ===
                      this.primaryIndex.fields.findIndex(
                        (t) => t.field === e.partitionField,
                      ))
                : (this.usePartitionTable = !1),
              (this.name = e.name),
              (this.tableName = e.tableName),
              (this.validators = new Map()),
              (this.getIndexPartitionField = a()(
                this.getIndexPartitionField.bind(this),
              )),
              (this.getRawConfigByAdapterType = a()(
                this.getRawConfigByAdapterType.bind(this),
              ));
          }
          doesUsePartitionTable(e) {
            if (void 0 === this.doesUsePartitionTableCache.get(e)) {
              let t = !1;
              const n = this.getRawConfigByAdapterType(e, "partitionField");
              (t =
                !!n &&
                !this.isNonFieldlikeEntity &&
                -1 ===
                  this.primaryIndex.fields.findIndex((e) => e.field === n)),
                this.doesUsePartitionTableCache.set(e, t);
            }
            return this.doesUsePartitionTableCache.get(e);
          }
          doesHavePartitionByField(e) {
            return (
              !this.isNonFieldlikeEntity &&
              !!this.getRawConfigByAdapterType(e, "partitionField")
            );
          }
          getTransformConfigs(e) {
            return this.getRawConfigByAdapterType(e, "transforms") || [];
          }
          getPartitionField(e) {
            var t;
            return null ===
              (t = this.getRawConfigByAdapterType(e, "partitionField")) ||
              void 0 === t
              ? void 0
              : t.toString();
          }
          getMigrationInfos(e) {
            return this.getRawConfigByAdapterType(e, "migrations") || {};
          }
          createConfigFieldManager(e) {
            return this.isNonFieldlikeEntity ? new g(e) : new u(e);
          }
          getPrimaryIndex() {
            if (
              !this.mapNameToIndices.has("primary") &&
              !this.isNonFieldlikeEntity
            )
              throw new c.s("primary");
            return this.mapNameToIndices.get("primary");
          }
          getIndex(e) {
            const t = this.mapNameToIndices.get(e);
            if (!t) throw new c.s(e);
            return t;
          }
          getIndexPartitionField(e, t) {
            return this.getIndex(t)
              .getRealFields()
              .indexOf(this.getPartitionField(e));
          }
          validateFields(e, t) {
            if (o.a) {
              return this.getValidator(t)(e);
            }
            return { ok: !0 };
          }
          validate(e, t) {
            void 0 === t && (t = !0);
            const n =
                t || this.isNonFieldlikeEntity ? void 0 : Object.keys(e).sort(),
              r = this.validateFields(e, n);
            let i = null;
            if (!1 === r.ok)
              switch (r.reason) {
                case 1:
                  i = new c.n(`'${r.field}' field is missing!`);
                  break;
                case 2:
                  i = new c.n(
                    `'${r.field}' field has invalid data type - Expected: ${r.expected} - Actual: ${r.actual}`,
                  );
                  break;
                case 3:
                  i = new c.n(`'${r.field}' field is unknown!`);
              }
            if (i) throw i;
          }
          getValidator(e) {
            const t = e ? e.join("-") : "all_fields";
            if (!this.validators.get(t)) {
              const n = this.fieldManager.createValidator(e);
              this.validators.set(t, n);
            }
            return this.validators.get(t);
          }
          getFieldValues(e) {
            return this.fieldManager.getFieldValues(e);
          }
          getFields() {
            return this.fieldManager.getFields();
          }
          prepareValue(e, t, n) {
            if (!t) return e;
            const i = this.getFields().filter((e) => void 0 !== e.defaultValue);
            if (0 === i.length) return e;
            if (n) {
              if (void 0 !== e) return e;
              const { defaultValue: t } = i[0];
              return "function" == typeof t ? t() : t;
            }
            {
              const t = Object(r.a)({}, e);
              return (
                i.forEach((e) => {
                  let { name: n, defaultValue: r } = e;
                  if (void 0 === t[n]) {
                    const e = "function" == typeof r ? r() : r;
                    t[n] = e;
                  }
                }),
                t
              );
            }
          }
          getRawConfigByAdapterType(e, t) {
            if (null === this.adapterSpecificConfigs)
              return this.commonConfig[t];
            const n = this.adapterSpecificConfigs.get(e);
            if (void 0 === n) return this.commonConfig[t];
            {
              let e = n[t];
              return void 0 === e ? this.commonConfig[t] : e;
            }
          }
          setAdapterSpecificConfigs(e, t) {
            null === this.adapterSpecificConfigs &&
              (this.adapterSpecificConfigs = new Map()),
              this.adapterSpecificConfigs.set(e, t);
          }
        }
        class y {
          constructor(e, t, n, r, i, a, s) {
            (this.database = e),
              (this.type = t),
              (this.name = n),
              (this.version = r),
              (this.milestoneVersion = i),
              (this.cipherKey = a),
              (this.tablesMap = void 0),
              (this.tables = void 0),
              (this.tablesMap = new Map(s.tables.map((e) => [e.name, e]))),
              (this.tables = s.tables),
              this.tables.forEach((t) => {
                t.dbName = e;
              });
          }
          getTableConfig(e) {
            return this.tablesMap.get(e);
          }
        }
        class h {
          get isSqlite() {
            return this.type === l.a.SQLite;
          }
          get isIDB() {
            return this.type === l.a.IDB;
          }
          get typeName() {
            return this.type === l.a.IDB ? "idb" : "sql";
          }
          constructor(e) {
            (this.partitionsConfigCache = void 0),
              (this.name = void 0),
              (this.version = void 0),
              (this.milestoneVersion = void 0),
              (this.session = void 0),
              (this.available = void 0),
              (this.type = void 0),
              (this.tables = void 0),
              (this.partitionsMap = void 0),
              (this.partitionNamingStrategy = void 0),
              (this.partitionStrategies = void 0),
              (this.supportPartitionByField = void 0),
              (this.name = e.name),
              (this.session = e.session),
              (this.version = e.version),
              (this.milestoneVersion = e.milestoneVersion),
              (this.type = e.type),
              (this.partitionsMap = e.partitionsMap),
              (this.partitionNamingStrategy = e.partitionNamingStrategy),
              (this.partitionStrategies = e.partitionStrategies || []),
              (this.supportPartitionByField = e.type === l.a.SQLite),
              (this.available = !0),
              (this.tables = []),
              (this.partitionsConfigCache = new Map()),
              (this.computeDatabaseName = a()(
                this.computeDatabaseName.bind(this),
              )),
              (this.computePartitionName = a()(
                this.computePartitionName.bind(this),
              ));
          }
          clearCache() {
            this.partitionsConfigCache.clear();
          }
          configure() {
            const e = Object.values(this.partitionsMap);
            this.tables = e.map((e) => e.tables).flat();
          }
          getPartition(e, t) {
            const n = (null == t ? void 0 : t.userId) || "",
              r = (null == t ? void 0 : t.UIN) || "",
              i = this.computePartitionName(n, e);
            let a = this.partitionsConfigCache.get(i);
            return (
              a ||
                ((a = this.createPartitionConfig(i, r)),
                a && this.partitionsConfigCache.set(i, a)),
              a
            );
          }
          computeDatabaseName(e, t) {
            const n = this.partitionNamingStrategy || [],
              r = this.type === l.a.IDB ? "_" : "/",
              i = { session: e, table: t };
            return n.map((e) => i[e] || e).join(r);
          }
          computePartitionName(e, t) {
            const n = this.partitionStrategies;
            if (!n || 0 === n.length) return "default";
            const r = { session: e, table: t };
            return n.map((e) => r[e] || e).join("_");
          }
          createPartitionConfig(e, t) {
            const n = this.partitionsMap[e];
            return new y(
              this.name,
              this.type,
              e,
              this.version,
              this.milestoneVersion,
              t,
              n,
            );
          }
        }
        const _ = Object(s.define)("database-config-manager");
      },
      uzza: function (e, t, n) {
        "use strict";
        t.a = {
          usage_memory: "usage_memory",
          usage_cpu: "usage_cpu",
          app_cpu_usage: "app_cpu_usage",
          app_ram_usage: "app_ram_usage",
          start_up_time: "start_up_time",
          query_resolution_time: "query_resolution_time",
          db_ready: "db_ready",
          authenticate: "authenticate",
          open_conversation: "open_conversation",
          conv_load_1st_msg: "conv_1st_load_msg",
          fps: "fps",
          fps_lowest_drop: "fps_lowest_drop",
          fps_scroll_conv_list: "fps_scroll_conv_list",
          fps_switch_conv: "fps_switch_conv",
          fps_jump_to_msg: "fps_jump_to_msg",
          fps_scroll_chat_box_view: "fps_scroll_chat_box_view",
          fps_switch_main_tab: "fps_switch_main_tab",
          fps_scroll_global_search_list: "fps_scroll_global_search_list",
          e2ee_session_record_data_size: "e2ee_session_record_data_size",
        };
      },
      vQ8b: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return i;
        }),
          n.d(t, "b", function () {
            return a;
          });
        var r = n("jDHv");
        const i = "convmenu-controller",
          a = Object(r.define)(i);
      },
      wH4e: function (e, t, n) {
        "use strict";
        var r = n("UK4g");
        n.d(t, "GET_ALL_RANGE", function () {
          return r.b;
        }),
          n.d(t, "MAXIMUM_QUERY_RESULT_LIMIT", function () {
            return r.h;
          }),
          n.d(t, "NO_TRANSACTION_ID", function () {
            return r.k;
          });
        var i = n("YEoC");
        n.d(t, "AdapterType", function () {
          return i.a;
        }),
          n.d(t, "CursorDirection", function () {
            return i.b;
          }),
          n.d(t, "RunMode", function () {
            return i.e;
          }),
          n.d(t, "TransactionMode", function () {
            return i.f;
          }),
          n.d(t, "ValidDataType", function () {
            return i.g;
          });
        var a = n("DI/x");
        n.d(t, "MissingTableConfigError", function () {
          return a.v;
        });
        var s = n("PmZf");
        n.d(t, "Events", function () {
          return s.b;
        }),
          n.d(t, "SessionChangeEvent", function () {
            return s.d;
          });
        var o = n("bSii");
        n.d(t, "firstOrArray", function () {
          return o.a;
        });
        var l = n("ibl3");
        n.o(l, "QueryUtils") &&
          n.d(t, "QueryUtils", function () {
            return l.QueryUtils;
          });
        n("xI/L"), n("ohhZ"), n("4W2c");
        var c = n("YZti");
        n.d(t, "QueryUtils", function () {
          return c.c;
        });
        n("kFM4");
      },
      wudS: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
          return a;
        }),
          n.d(t, "d", function () {
            return s;
          }),
          n.d(t, "b", function () {
            return o;
          }),
          n.d(t, "a", function () {
            return l;
          });
        var r = n("ZcVI");
        const i = "sh_user_ids";
        function a() {
          const e = window.localStorage.getItem(i);
          let t = [];
          try {
            e && (t = JSON.parse(e));
          } catch (n) {}
          return t;
        }
        function s() {
          if (null !== window.localStorage.getItem(i)) return;
          const e = (function () {
            let e = new Set();
            for (let t in localStorage)
              for (let n of [r.i, r.h, r.p])
                if (t && t.startsWith(n + "_")) {
                  let r = t.substring(n.length + 1, t.length);
                  if (r && !isNaN(+r)) {
                    e.add(r);
                    break;
                  }
                }
            return 0 == e.size ? [] : Array.from(e);
          })();
          window.localStorage.setItem(i, JSON.stringify(e));
        }
        function o(e) {
          let t = a(),
            n = t.indexOf(e);
          return (
            -1 === n &&
              (t.push(e),
              (n = t.length - 1),
              window.localStorage.setItem(i, JSON.stringify(t))),
            n
          );
        }
        function l(e) {
          const t = window.localStorage.getItem(i);
          if (null === t) return !1;
          return -1 !== JSON.parse(t).indexOf(e);
        }
      },
      x9oK: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return u;
        }),
          n.d(t, "b", function () {
            return p;
          }),
          n.d(t, "c", function () {
            return f;
          });
        var r = n("jDHv"),
          i = n("AH6j"),
          a = n("Mgpg"),
          s = n("YEoC"),
          o = n("DI/x"),
          l = n("PmZf"),
          c = n("YZti"),
          d = n("Abbu");
        class u extends i.b {
          constructor(e, t, n, i, o, l, c) {
            super(),
              (this.partition = e),
              (this.fullName = t),
              (this.transactionManager = n),
              (this.instance = i),
              (this.queryExecutor = o),
              (this.transactionExecutor = l),
              (this.options = c),
              (this.queryExecutorMap = void 0),
              (this.logger = void 0),
              (this.queryExecutorMap = {
                [s.d.Clear]: o.clear.bind(o),
                [s.d.Get]: o.get.bind(o),
                [s.d.GetAndUpdate]: o.getAndUpdate.bind(o),
                [s.d.GetMulti]: o.getMulti.bind(o),
                [s.d.GetAll]: o.getAll.bind(o),
                [s.d.GetAllKey]: o.getAllKey.bind(o),
                [s.d.Insert]: o.insert.bind(o),
                [s.d.InsertMulti]: o.insertMulti.bind(o),
                [s.d.Update]: o.update.bind(o),
                [s.d.UpdateMulti]: o.updateMulti.bind(o),
                [s.d.Delete]: o.delete.bind(o),
                [s.d.DeleteMulti]: o.deleteMulti.bind(o),
                [s.d.FindAndDelete]: o.findAndDelete.bind(o),
                [s.d.Count]: o.count.bind(o),
              });
            const d = r.ModuleContainer.resolve(a.ZLoggerFactory);
            this.logger = d.createZLogger("db", ["adapter"]);
          }
          get type() {
            return this.partition.type;
          }
          getFullName() {
            return this.fullName;
          }
          execute(e) {
            (e.meta.step = 11),
              d.a.isBeginTransaction(e)
                ? this.transactionExecutor.beginTransaction(e)
                : d.a.isCommitTransaction(e) ||
                  (d.a.isCloseDBQuery(e)
                    ? this.closeThisDatabase()
                        .then(e.deferrer.resolve)
                        .catch(e.deferrer.reject)
                    : d.a.isDeleteDBQuery(e)
                      ? this.deleteThisDatabase()
                          .then(e.deferrer.resolve)
                          .catch(e.deferrer.reject)
                      : d.a.isCloseAllDBsQuery(e) || d.a.isDeleteAllDBsQuery(e)
                        ? this.logger.zsymb(
                            21,
                            14392,
                            3e4,
                            "Unhandled query type: {}",
                            e.type,
                          )
                        : this.executeByQueryExecutor(e));
          }
          async closeThisDatabase() {
            throw new o.a("closeThisDatabase");
          }
          async deleteThisDatabase() {
            throw new o.a("deleteThisDatabase");
          }
          executeByQueryExecutor(e) {
            e.timing.handled = Date.now();
            const t = (t) => {
              const n = {
                adapter: this.partition.type,
                database: e.database,
                table: e.table,
                trans: e.transaction,
              };
              this.logger.zsymb(18, 14392, 30001, () => [
                c.c.getTypeName(e.type),
                { logInfo: n, error: t },
              ]),
                e.deferrer.reject(t);
            };
            try {
              if (e.transaction) {
                const t = this.transactionManager.get(e.transaction),
                  n = performance.now();
                t.execute(() => this.queryExecutorMap[e.type](e))
                  .then((t) => {
                    const r = performance.now() - n;
                    this.checkTimeConsumingQuery(e, r), e.deferrer.resolve(t);
                  })
                  .catch(e.deferrer.reject);
              } else {
                const t = performance.now();
                this.queryExecutorMap[e.type](e)
                  .then((n) => {
                    const r = performance.now() - t;
                    this.checkTimeConsumingQuery(e, r), e.deferrer.resolve(n);
                  })
                  .catch(e.deferrer.reject);
              }
            } catch (n) {
              t(n);
            }
          }
          checkTimeConsumingQuery(e, t) {
            if (t >= 5e3) {
              const n = {
                adapter: this.partition.type,
                database: e.database,
                table: e.table,
                trans: e.transaction,
                type: c.c.getTypeName(e.type),
              };
              this.logger.zsymb(
                18,
                14392,
                30002,
                "Time consuming query:",
                n,
                "- Total time: ",
                t,
              ),
                this.dispatchEvent(new l.f(n, t));
            }
          }
        }
        const g = `database-adapter-${s.a.IDB}`,
          m = `database-adapter-${s.a.SQLite}`,
          p = Object(r.define)(g),
          f = Object(r.define)(m);
      },
      "xI/L": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
          return r;
        }),
          n.d(t, "a", function () {
            return i;
          });
        const r = {
            const: (e) => e,
            byUser: () => "session",
            byTable: () => "table",
          },
          i = {
            const: (e) => e,
            byUser: () => "session",
            byTable: () => "table",
          };
      },
      "xS/Y": function (e, t, n) {
        "use strict";
        var r = n("VTBJ"),
          i = n("YEoC"),
          a = n("xI/L"),
          s = n("teaq"),
          o = n("C9Dv");
        const l = new s.d({
            tableName: "ref",
            name: "Ref",
            fields: {
              msgId: { name: "msgId", type: i.g.string },
              convId: { name: "convId", type: i.g.string },
              uid: { name: "uid", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "msgId" }],
                unique: !0,
              },
              uid_msgId: {
                name: "uid_msgId",
                fields: [
                  { type: "raw", field: "uid" },
                  { type: "raw", field: "msgId" },
                ],
                unique: !0,
              },
              convId: {
                name: "convId",
                fields: [{ type: "raw", field: "convId" }],
                unique: !1,
              },
              uid: {
                name: "uid",
                fields: [{ type: "raw", field: "uid" }],
                unique: !1,
              },
            },
          }),
          c = new s.d({
            tableName: "res",
            name: "Res",
            fields: {
              uid: { name: "uid", type: i.g.string },
              size: { name: "size", type: i.g.integer },
              type: { name: "type", type: i.g.integer },
              atime: { name: "atime", type: i.g.integer },
              params: { name: "params", type: i.g.string },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [{ type: "raw", field: "uid" }],
                unique: !0,
              },
            },
          }),
          d = new s.d({
            tableName: "SyncDownload",
            name: "SyncDownload",
            fields: {
              fromId: { name: "fromId", type: i.g.string },
              convId: { name: "convId", type: i.g.string },
              actionId: { name: "actionId", type: i.g.string, nullable: !0 },
              clientMsgId: { name: "clientMsgId", type: i.g.integer },
              globalMsgId: {
                name: "globalMsgId",
                type: i.g.string,
                nullable: !0,
              },
              platform: { name: "platform", type: i.g.integer },
              deviceId: { name: "deviceId", type: i.g.string },
              actionSource: { name: "actionSource", type: i.g.integer },
              sendDttm: { name: "sendDttm", type: i.g.integer },
              status: { name: "status", type: i.g.integer },
              sendDate: { name: "sendDate", type: i.g.integer },
              submited: { name: "submited", type: i.g.boolean },
              mediaType: { name: "mediaType", type: i.g.string, nullable: !0 },
              metaData: { name: "metaData", type: i.g.json, nullable: !0 },
              errorName: { name: "errorName", type: i.g.string, nullable: !0 },
            },
            indices: {
              primary: {
                name: "primary",
                fields: [
                  { type: "raw", field: "convId" },
                  { type: "raw", field: "fromId" },
                  { type: "raw", field: "clientMsgId" },
                ],
                unique: !0,
              },
              sendDate_status: {
                name: "sendDate_status",
                fields: [
                  { type: "raw", field: "sendDate" },
                  { type: "raw", field: "status" },
                ],
                unique: !1,
              },
              actionSource_status_clientMsgId: {
                name: "actionSource_status_clientMsgId",
                fields: [
                  { type: "raw", field: "actionSource" },
                  { type: "raw", field: "status" },
                  { type: "raw", field: "clientMsgId" },
                ],
                unique: !1,
              },
            },
          });
        d.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            2: { version: 2, scripts: [{ type: "create-table" }] },
            3: {
              version: 3,
              scripts: [
                { type: "add-column", params: { columns: ["errorName"] } },
              ],
            },
          },
        });
        const u = new s.d({
          tableName: "meta",
          name: "Meta",
          fields: {
            id: { name: "id", type: i.g.string },
            expiredFlag: {
              name: "expiredFlag",
              type: i.g.integer,
              nullable: !0,
            },
          },
          indices: {
            primary: {
              name: "primary",
              fields: [{ type: "raw", field: "id" }],
              unique: !0,
            },
          },
        });
        u.setAdapterSpecificConfigs(i.a.IDB, {
          migrations: {
            3: { version: 3, scripts: [{ type: "create-table" }] },
          },
        });
        const g = { Ref: l, Res: c, SyncDownload: d, Meta: u },
          m = { name: "Res", session: !0 },
          p = {
            partitionStrategies: [a.b.byTable()],
            partitionNamingStrategy: [
              a.a.byUser(),
              a.a.const("Res"),
              a.a.byTable(),
            ],
            partitionsMap: Object(o.a)(g),
          },
          f = {
            partitionNamingStrategy: [a.a.const("zres"), a.a.byUser()],
            partitionsMap: Object(o.b)(g),
          },
          y = Object(r.a)(
            Object(r.a)(Object(r.a)({}, m), p),
            {},
            { version: 1, milestoneVersion: 1, type: i.a.SQLite },
          ),
          h = Object(r.a)(
            Object(r.a)(Object(r.a)({}, m), f),
            {},
            { version: 3, milestoneVersion: 1, type: i.a.IDB },
          );
        let _ = null,
          b = null;
        t.a = {
          schema: g,
          get useSqlite() {
            return null === _ && (_ = new s.a(y)), _;
          },
          get useIdb() {
            return null === b && (b = new s.a(h)), b;
          },
        };
      },
      yevd: function (e, t) {},
      zFSh: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
          return a;
        }),
          n.d(t, "b", function () {
            return s;
          }),
          n.d(t, "c", function () {
            return o;
          });
        var r = n("N1xz"),
          i = n("CHYU");
        class a {
          get Lock() {
            throw new Error("Method not implemented.");
          }
          get MetriczLogWriter() {
            throw new Error("Method not implemented.");
          }
          useConfig(e) {
            throw new Error("Method not implemented.");
          }
          createLogger(e) {
            throw new Error("Method not implemented.");
          }
          createStorage(e) {
            throw new Error("Method not implemented.");
          }
          submitQos(e) {
            throw new Error("Method not implemented.");
          }
          getConfig() {
            throw new Error("Method not implemented.");
          }
        }
        let s, o;
        !(function (e) {
          e.Web = class extends a {};
          e.Renderer = class extends a {};
          e.Main = class extends a {};
        })(s || (s = {})),
          ((o || (o = {})).install = (e) => {
            r.a.process === i.a.Render
              ? (s.Renderer = class extends e {
                  constructor() {
                    super(...arguments);
                  }
                })
              : r.a.process === i.a.Web
                ? (s.Web = class extends e {
                    constructor() {
                      super(...arguments);
                    }
                  })
                : r.a.process === i.a.Main &&
                  (s.Main = class extends e {
                    constructor() {
                      super(...arguments);
                    }
                  });
          });
      },
    },
  ]);
//# sourceMappingURL=../sourcemaps/lazy/default-embed-render.77b9ffe636173da70beb.js.map
