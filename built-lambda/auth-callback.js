!(function (e, t) {
	for (var r in t) e[r] = t[r];
})(
	exports,
	(function (e) {
		var t = {};
		function r(n) {
			if (t[n]) return t[n].exports;
			var o = (t[n] = { i: n, l: !1, exports: {} });
			return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
		}
		return (
			(r.m = e),
			(r.c = t),
			(r.d = function (e, t, n) {
				r.o(e, t) ||
					Object.defineProperty(e, t, { enumerable: !0, get: n });
			}),
			(r.r = function (e) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module",
					}),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(r.t = function (e, t) {
				if ((1 & t && (e = r(e)), 8 & t)) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (
					(r.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e,
					}),
					2 & t && "string" != typeof e)
				)
					for (var o in e)
						r.d(
							n,
							o,
							function (t) {
								return e[t];
							}.bind(null, o),
						);
				return n;
			}),
			(r.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return r.d(t, "a", t), t;
			}),
			(r.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(r.p = ""),
			r((r.s = 77))
		);
	})([
		function (e, t, r) {
			/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
			var n = r(2),
				o = n.Buffer;
			function i(e, t) {
				for (var r in e) t[r] = e[r];
			}
			function s(e, t, r) {
				return o(e, t, r);
			}
			o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
				? (e.exports = n)
				: (i(n, t), (t.Buffer = s)),
				(s.prototype = Object.create(o.prototype)),
				i(o, s),
				(s.from = function (e, t, r) {
					if ("number" == typeof e)
						throw new TypeError("Argument must not be a number");
					return o(e, t, r);
				}),
				(s.alloc = function (e, t, r) {
					if ("number" != typeof e)
						throw new TypeError("Argument must be a number");
					var n = o(e);
					return (
						void 0 !== t
							? "string" == typeof r
								? n.fill(t, r)
								: n.fill(t)
							: n.fill(0),
						n
					);
				}),
				(s.allocUnsafe = function (e) {
					if ("number" != typeof e)
						throw new TypeError("Argument must be a number");
					return o(e);
				}),
				(s.allocUnsafeSlow = function (e) {
					if ("number" != typeof e)
						throw new TypeError("Argument must be a number");
					return n.SlowBuffer(e);
				});
		},
		function (e, t) {
			e.exports = require("util");
		},
		function (e, t) {
			e.exports = require("buffer");
		},
		function (e, t) {
			var r = function (e, t) {
				Error.call(this, e),
					Error.captureStackTrace &&
						Error.captureStackTrace(this, this.constructor),
					(this.name = "JsonWebTokenError"),
					(this.message = e),
					t && (this.inner = t);
			};
			((r.prototype = Object.create(Error.prototype)).constructor = r),
				(e.exports = r);
		},
		function (e, t, r) {
			"use strict";
			var n = r(37),
				o = Object.prototype.toString;
			function i(e) {
				return "[object Array]" === o.call(e);
			}
			function s(e) {
				return void 0 === e;
			}
			function a(e) {
				return null !== e && "object" == typeof e;
			}
			function u(e) {
				return "[object Function]" === o.call(e);
			}
			function c(e, t) {
				if (null != e)
					if (("object" != typeof e && (e = [e]), i(e)))
						for (var r = 0, n = e.length; r < n; r++)
							t.call(null, e[r], r, e);
					else
						for (var o in e)
							Object.prototype.hasOwnProperty.call(e, o) &&
								t.call(null, e[o], o, e);
			}
			e.exports = {
				isArray: i,
				isArrayBuffer: function (e) {
					return "[object ArrayBuffer]" === o.call(e);
				},
				isBuffer: function (e) {
					return (
						null !== e &&
						!s(e) &&
						null !== e.constructor &&
						!s(e.constructor) &&
						"function" == typeof e.constructor.isBuffer &&
						e.constructor.isBuffer(e)
					);
				},
				isFormData: function (e) {
					return "undefined" != typeof FormData && e instanceof FormData;
				},
				isArrayBufferView: function (e) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
						? ArrayBuffer.isView(e)
						: e && e.buffer && e.buffer instanceof ArrayBuffer;
				},
				isString: function (e) {
					return "string" == typeof e;
				},
				isNumber: function (e) {
					return "number" == typeof e;
				},
				isObject: a,
				isUndefined: s,
				isDate: function (e) {
					return "[object Date]" === o.call(e);
				},
				isFile: function (e) {
					return "[object File]" === o.call(e);
				},
				isBlob: function (e) {
					return "[object Blob]" === o.call(e);
				},
				isFunction: u,
				isStream: function (e) {
					return a(e) && u(e.pipe);
				},
				isURLSearchParams: function (e) {
					return (
						"undefined" != typeof URLSearchParams &&
						e instanceof URLSearchParams
					);
				},
				isStandardBrowserEnv: function () {
					return (
						("undefined" == typeof navigator ||
							("ReactNative" !== navigator.product &&
								"NativeScript" !== navigator.product &&
								"NS" !== navigator.product)) &&
						"undefined" != typeof window &&
						"undefined" != typeof document
					);
				},
				forEach: c,
				merge: function e() {
					var t = {};
					function r(r, n) {
						"object" == typeof t[n] && "object" == typeof r
							? (t[n] = e(t[n], r))
							: (t[n] = r);
					}
					for (var n = 0, o = arguments.length; n < o; n++)
						c(arguments[n], r);
					return t;
				},
				deepMerge: function e() {
					var t = {};
					function r(r, n) {
						"object" == typeof t[n] && "object" == typeof r
							? (t[n] = e(t[n], r))
							: (t[n] = "object" == typeof r ? e({}, r) : r);
					}
					for (var n = 0, o = arguments.length; n < o; n++)
						c(arguments[n], r);
					return t;
				},
				extend: function (e, t, r) {
					return (
						c(t, function (t, o) {
							e[o] = r && "function" == typeof t ? n(t, r) : t;
						}),
						e
					);
				},
				trim: function (e) {
					return e.replace(/^\s*/, "").replace(/\s*$/, "");
				},
			};
		},
		function (e, t) {
			e.exports = require("stream");
		},
		function (e, t, r) {
			var n = r(17),
				o = r(21);
			(t.ALGORITHMS = [
				"HS256",
				"HS384",
				"HS512",
				"RS256",
				"RS384",
				"RS512",
				"PS256",
				"PS384",
				"PS512",
				"ES256",
				"ES384",
				"ES512",
			]),
				(t.sign = n.sign),
				(t.verify = o.verify),
				(t.decode = o.decode),
				(t.isValid = o.isValid),
				(t.createSign = function (e) {
					return new n(e);
				}),
				(t.createVerify = function (e) {
					return new o(e);
				});
		},
		function (e, t, r) {
			e.exports = {
				decode: r(8),
				verify: r(22),
				sign: r(25),
				JsonWebTokenError: r(3),
				NotBeforeError: r(12),
				TokenExpiredError: r(13),
			};
		},
		function (e, t, r) {
			var n = r(6);
			e.exports = function (e, t) {
				t = t || {};
				var r = n.decode(e, t);
				if (!r) return null;
				var o = r.payload;
				if ("string" == typeof o)
					try {
						var i = JSON.parse(o);
						null !== i && "object" == typeof i && (o = i);
					} catch (e) {}
				return !0 === t.complete
					? { header: r.header, payload: o, signature: r.signature }
					: o;
			};
		},
		function (e, t, r) {
			var n = r(0).Buffer,
				o = r(5);
			function i(e) {
				if (
					((this.buffer = null),
					(this.writable = !0),
					(this.readable = !0),
					!e)
				)
					return (this.buffer = n.alloc(0)), this;
				if ("function" == typeof e.pipe)
					return (this.buffer = n.alloc(0)), e.pipe(this), this;
				if (e.length || "object" == typeof e)
					return (
						(this.buffer = e),
						(this.writable = !1),
						process.nextTick(
							function () {
								this.emit("end", e),
									(this.readable = !1),
									this.emit("close");
							}.bind(this),
						),
						this
					);
				throw new TypeError("Unexpected data type (" + typeof e + ")");
			}
			r(1).inherits(i, o),
				(i.prototype.write = function (e) {
					(this.buffer = n.concat([this.buffer, n.from(e)])),
						this.emit("data", e);
				}),
				(i.prototype.end = function (e) {
					e && this.write(e),
						this.emit("end", e),
						this.emit("close"),
						(this.writable = !1),
						(this.readable = !1);
				}),
				(e.exports = i);
		},
		function (e, t, r) {
			var n = r(18),
				o = r(0).Buffer,
				i = r(16),
				s = r(19),
				a = r(1),
				u = "secret must be a string or buffer",
				c = "key must be a string or a buffer",
				f = "function" == typeof i.createPublicKey;
			function p(e) {
				if (!o.isBuffer(e) && "string" != typeof e) {
					if (!f) throw m(c);
					if ("object" != typeof e) throw m(c);
					if ("string" != typeof e.type) throw m(c);
					if ("string" != typeof e.asymmetricKeyType) throw m(c);
					if ("function" != typeof e.export) throw m(c);
				}
			}
			function l(e) {
				if (!o.isBuffer(e) && "string" != typeof e && "object" != typeof e)
					throw m("key must be a string, a buffer or an object");
			}
			function h(e) {
				return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
			}
			function d(e) {
				var t = 4 - ((e = e.toString()).length % 4);
				if (4 !== t) for (var r = 0; r < t; ++r) e += "=";
				return e.replace(/\-/g, "+").replace(/_/g, "/");
			}
			function m(e) {
				var t = [].slice.call(arguments, 1),
					r = a.format.bind(a, e).apply(null, t);
				return new TypeError(r);
			}
			function v(e) {
				var t;
				return (
					(t = e),
					o.isBuffer(t) || "string" == typeof t || (e = JSON.stringify(e)),
					e
				);
			}
			function g(e) {
				return function (t, r) {
					!(function (e) {
						if (!o.isBuffer(e)) {
							if ("string" == typeof e) return e;
							if (!f) throw m(u);
							if ("object" != typeof e) throw m(u);
							if ("secret" !== e.type) throw m(u);
							if ("function" != typeof e.export) throw m(u);
						}
					})(r),
						(t = v(t));
					var n = i.createHmac("sha" + e, r);
					return h((n.update(t), n.digest("base64")));
				};
			}
			function y(e) {
				return function (t, r, i) {
					var s = g(e)(t, i);
					return n(o.from(r), o.from(s));
				};
			}
			function b(e) {
				return function (t, r) {
					l(r), (t = v(t));
					var n = i.createSign("RSA-SHA" + e);
					return h((n.update(t), n.sign(r, "base64")));
				};
			}
			function w(e) {
				return function (t, r, n) {
					p(n), (t = v(t)), (r = d(r));
					var o = i.createVerify("RSA-SHA" + e);
					return o.update(t), o.verify(n, r, "base64");
				};
			}
			function x(e) {
				return function (t, r) {
					l(r), (t = v(t));
					var n = i.createSign("RSA-SHA" + e);
					return h(
						(n.update(t),
						n.sign(
							{
								key: r,
								padding: i.constants.RSA_PKCS1_PSS_PADDING,
								saltLength: i.constants.RSA_PSS_SALTLEN_DIGEST,
							},
							"base64",
						)),
					);
				};
			}
			function C(e) {
				return function (t, r, n) {
					p(n), (t = v(t)), (r = d(r));
					var o = i.createVerify("RSA-SHA" + e);
					return (
						o.update(t),
						o.verify(
							{
								key: n,
								padding: i.constants.RSA_PKCS1_PSS_PADDING,
								saltLength: i.constants.RSA_PSS_SALTLEN_DIGEST,
							},
							r,
							"base64",
						)
					);
				};
			}
			function S(e) {
				var t = b(e);
				return function () {
					var r = t.apply(null, arguments);
					return (r = s.derToJose(r, "ES" + e));
				};
			}
			function E(e) {
				var t = w(e);
				return function (r, n, o) {
					return (
						(n = s.joseToDer(n, "ES" + e).toString("base64")), t(r, n, o)
					);
				};
			}
			function j() {
				return function () {
					return "";
				};
			}
			function R() {
				return function (e, t) {
					return "" === t;
				};
			}
			f && ((c += " or a KeyObject"), (u += "or a KeyObject")),
				(e.exports = function (e) {
					var t = { hs: g, rs: b, ps: x, es: S, none: j },
						r = { hs: y, rs: w, ps: C, es: E, none: R },
						n = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
					if (!n)
						throw m(
							'"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".',
							e,
						);
					var o = (n[1] || n[3]).toLowerCase(),
						i = n[2];
					return { sign: t[o](i), verify: r[o](i) };
				});
		},
		function (e, t, r) {
			var n = r(2).Buffer;
			e.exports = function (e) {
				return "string" == typeof e
					? e
					: "number" == typeof e || n.isBuffer(e)
					? e.toString()
					: JSON.stringify(e);
			};
		},
		function (e, t, r) {
			var n = r(3),
				o = function (e, t) {
					n.call(this, e), (this.name = "NotBeforeError"), (this.date = t);
				};
			((o.prototype = Object.create(n.prototype)).constructor = o),
				(e.exports = o);
		},
		function (e, t, r) {
			var n = r(3),
				o = function (e, t) {
					n.call(this, e),
						(this.name = "TokenExpiredError"),
						(this.expiredAt = t);
				};
			((o.prototype = Object.create(n.prototype)).constructor = o),
				(e.exports = o);
		},
		function (e, t, r) {
			var n = r(23);
			e.exports = function (e, t) {
				var r = t || Math.floor(Date.now() / 1e3);
				if ("string" == typeof e) {
					var o = n(e);
					if (void 0 === o) return;
					return Math.floor(r + o / 1e3);
				}
				return "number" == typeof e ? r + e : void 0;
			};
		},
		function (e, t, r) {
			var n = r(24);
			e.exports = n.satisfies(process.version, "^6.12.0 || >=8.0.0");
		},
		function (e, t) {
			e.exports = require("crypto");
		},
		function (e, t, r) {
			var n = r(0).Buffer,
				o = r(9),
				i = r(10),
				s = r(5),
				a = r(11),
				u = r(1);
			function c(e, t) {
				return n
					.from(e, t)
					.toString("base64")
					.replace(/=/g, "")
					.replace(/\+/g, "-")
					.replace(/\//g, "_");
			}
			function f(e) {
				var t = e.header,
					r = e.payload,
					n = e.secret || e.privateKey,
					o = e.encoding,
					s = i(t.alg),
					f = (function (e, t, r) {
						r = r || "utf8";
						var n = c(a(e), "binary"),
							o = c(a(t), r);
						return u.format("%s.%s", n, o);
					})(t, r, o),
					p = s.sign(f, n);
				return u.format("%s.%s", f, p);
			}
			function p(e) {
				var t = e.secret || e.privateKey || e.key,
					r = new o(t);
				(this.readable = !0),
					(this.header = e.header),
					(this.encoding = e.encoding),
					(this.secret = this.privateKey = this.key = r),
					(this.payload = new o(e.payload)),
					this.secret.once(
						"close",
						function () {
							!this.payload.writable && this.readable && this.sign();
						}.bind(this),
					),
					this.payload.once(
						"close",
						function () {
							!this.secret.writable && this.readable && this.sign();
						}.bind(this),
					);
			}
			u.inherits(p, s),
				(p.prototype.sign = function () {
					try {
						var e = f({
							header: this.header,
							payload: this.payload.buffer,
							secret: this.secret.buffer,
							encoding: this.encoding,
						});
						return (
							this.emit("done", e),
							this.emit("data", e),
							this.emit("end"),
							(this.readable = !1),
							e
						);
					} catch (e) {
						(this.readable = !1),
							this.emit("error", e),
							this.emit("close");
					}
				}),
				(p.sign = f),
				(e.exports = p);
		},
		function (e, t, r) {
			"use strict";
			var n = r(2).Buffer,
				o = r(2).SlowBuffer;
			function i(e, t) {
				if (!n.isBuffer(e) || !n.isBuffer(t)) return !1;
				if (e.length !== t.length) return !1;
				for (var r = 0, o = 0; o < e.length; o++) r |= e[o] ^ t[o];
				return 0 === r;
			}
			(e.exports = i),
				(i.install = function () {
					n.prototype.equal = o.prototype.equal = function (e) {
						return i(this, e);
					};
				});
			var s = n.prototype.equal,
				a = o.prototype.equal;
			i.restore = function () {
				(n.prototype.equal = s), (o.prototype.equal = a);
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(0).Buffer,
				o = r(20);
			function i(e) {
				if (n.isBuffer(e)) return e;
				if ("string" == typeof e) return n.from(e, "base64");
				throw new TypeError(
					"ECDSA signature must be a Base64 string or a Buffer",
				);
			}
			function s(e, t, r) {
				for (var n = 0; t + n < r && 0 === e[t + n]; ) ++n;
				return e[t + n] >= 128 && --n, n;
			}
			e.exports = {
				derToJose: function (e, t) {
					e = i(e);
					var r = o(t),
						s = r + 1,
						a = e.length,
						u = 0;
					if (48 !== e[u++])
						throw new Error('Could not find expected "seq"');
					var c = e[u++];
					if ((129 === c && (c = e[u++]), a - u < c))
						throw new Error(
							'"seq" specified length of "' +
								c +
								'", only "' +
								(a - u) +
								'" remaining',
						);
					if (2 !== e[u++])
						throw new Error('Could not find expected "int" for "r"');
					var f = e[u++];
					if (a - u - 2 < f)
						throw new Error(
							'"r" specified length of "' +
								f +
								'", only "' +
								(a - u - 2) +
								'" available',
						);
					if (s < f)
						throw new Error(
							'"r" specified length of "' +
								f +
								'", max of "' +
								s +
								'" is acceptable',
						);
					var p = u;
					if (((u += f), 2 !== e[u++]))
						throw new Error('Could not find expected "int" for "s"');
					var l = e[u++];
					if (a - u !== l)
						throw new Error(
							'"s" specified length of "' +
								l +
								'", expected "' +
								(a - u) +
								'"',
						);
					if (s < l)
						throw new Error(
							'"s" specified length of "' +
								l +
								'", max of "' +
								s +
								'" is acceptable',
						);
					var h = u;
					if ((u += l) !== a)
						throw new Error(
							'Expected to consume entire buffer, but "' +
								(a - u) +
								'" bytes remain',
						);
					var d = r - f,
						m = r - l,
						v = n.allocUnsafe(d + f + m + l);
					for (u = 0; u < d; ++u) v[u] = 0;
					e.copy(v, u, p + Math.max(-d, 0), p + f);
					for (var g = (u = r); u < g + m; ++u) v[u] = 0;
					return (
						e.copy(v, u, h + Math.max(-m, 0), h + l),
						(v = (v = v.toString("base64"))
							.replace(/=/g, "")
							.replace(/\+/g, "-")
							.replace(/\//g, "_"))
					);
				},
				joseToDer: function (e, t) {
					e = i(e);
					var r = o(t),
						a = e.length;
					if (a !== 2 * r)
						throw new TypeError(
							'"' +
								t +
								'" signatures must be "' +
								2 * r +
								'" bytes, saw "' +
								a +
								'"',
						);
					var u = s(e, 0, r),
						c = s(e, r, e.length),
						f = r - u,
						p = r - c,
						l = 2 + f + 1 + 1 + p,
						h = l < 128,
						d = n.allocUnsafe((h ? 2 : 3) + l),
						m = 0;
					return (
						(d[m++] = 48),
						h ? (d[m++] = l) : ((d[m++] = 129), (d[m++] = 255 & l)),
						(d[m++] = 2),
						(d[m++] = f),
						u < 0
							? ((d[m++] = 0), (m += e.copy(d, m, 0, r)))
							: (m += e.copy(d, m, u, r)),
						(d[m++] = 2),
						(d[m++] = p),
						c < 0 ? ((d[m++] = 0), e.copy(d, m, r)) : e.copy(d, m, r + c),
						d
					);
				},
			};
		},
		function (e, t, r) {
			"use strict";
			function n(e) {
				return ((e / 8) | 0) + (e % 8 == 0 ? 0 : 1);
			}
			var o = { ES256: n(256), ES384: n(384), ES512: n(521) };
			e.exports = function (e) {
				var t = o[e];
				if (t) return t;
				throw new Error('Unknown algorithm "' + e + '"');
			};
		},
		function (e, t, r) {
			var n = r(0).Buffer,
				o = r(9),
				i = r(10),
				s = r(5),
				a = r(11),
				u = r(1),
				c = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
			function f(e) {
				if (
					(function (e) {
						return (
							"[object Object]" === Object.prototype.toString.call(e)
						);
					})(e)
				)
					return e;
				try {
					return JSON.parse(e);
				} catch (e) {
					return;
				}
			}
			function p(e) {
				var t = e.split(".", 1)[0];
				return f(n.from(t, "base64").toString("binary"));
			}
			function l(e) {
				return e.split(".")[2];
			}
			function h(e) {
				return c.test(e) && !!p(e);
			}
			function d(e, t, r) {
				if (!t) {
					var n = new Error("Missing algorithm parameter for jws.verify");
					throw ((n.code = "MISSING_ALGORITHM"), n);
				}
				var o = l((e = a(e))),
					s = (function (e) {
						return e.split(".", 2).join(".");
					})(e);
				return i(t).verify(s, o, r);
			}
			function m(e, t) {
				if (((t = t || {}), !h((e = a(e))))) return null;
				var r = p(e);
				if (!r) return null;
				var o = (function (e, t) {
					t = t || "utf8";
					var r = e.split(".")[1];
					return n.from(r, "base64").toString(t);
				})(e);
				return (
					("JWT" === r.typ || t.json) && (o = JSON.parse(o, t.encoding)),
					{ header: r, payload: o, signature: l(e) }
				);
			}
			function v(e) {
				var t = (e = e || {}).secret || e.publicKey || e.key,
					r = new o(t);
				(this.readable = !0),
					(this.algorithm = e.algorithm),
					(this.encoding = e.encoding),
					(this.secret = this.publicKey = this.key = r),
					(this.signature = new o(e.signature)),
					this.secret.once(
						"close",
						function () {
							!this.signature.writable && this.readable && this.verify();
						}.bind(this),
					),
					this.signature.once(
						"close",
						function () {
							!this.secret.writable && this.readable && this.verify();
						}.bind(this),
					);
			}
			u.inherits(v, s),
				(v.prototype.verify = function () {
					try {
						var e = d(
								this.signature.buffer,
								this.algorithm,
								this.key.buffer,
							),
							t = m(this.signature.buffer, this.encoding);
						return (
							this.emit("done", e, t),
							this.emit("data", e),
							this.emit("end"),
							(this.readable = !1),
							e
						);
					} catch (e) {
						(this.readable = !1),
							this.emit("error", e),
							this.emit("close");
					}
				}),
				(v.decode = m),
				(v.isValid = h),
				(v.verify = d),
				(e.exports = v);
		},
		function (e, t, r) {
			var n = r(3),
				o = r(12),
				i = r(13),
				s = r(8),
				a = r(14),
				u = r(15),
				c = r(6),
				f = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"],
				p = ["RS256", "RS384", "RS512"],
				l = ["HS256", "HS384", "HS512"];
			u &&
				(f.splice(3, 0, "PS256", "PS384", "PS512"),
				p.splice(3, 0, "PS256", "PS384", "PS512")),
				(e.exports = function (e, t, r, u) {
					var h;
					if (
						("function" != typeof r || u || ((u = r), (r = {})),
						r || (r = {}),
						(r = Object.assign({}, r)),
						(h =
							u ||
							function (e, t) {
								if (e) throw e;
								return t;
							}),
						r.clockTimestamp && "number" != typeof r.clockTimestamp)
					)
						return h(new n("clockTimestamp must be a number"));
					if (
						void 0 !== r.nonce &&
						("string" != typeof r.nonce || "" === r.nonce.trim())
					)
						return h(new n("nonce must be a non-empty string"));
					var d = r.clockTimestamp || Math.floor(Date.now() / 1e3);
					if (!e) return h(new n("jwt must be provided"));
					if ("string" != typeof e)
						return h(new n("jwt must be a string"));
					var m,
						v = e.split(".");
					if (3 !== v.length) return h(new n("jwt malformed"));
					try {
						m = s(e, { complete: !0 });
					} catch (e) {
						return h(e);
					}
					if (!m) return h(new n("invalid token"));
					var g,
						y = m.header;
					if ("function" == typeof t) {
						if (!u)
							return h(
								new n(
									"verify must be called asynchronous if secret or public key is provided as a callback",
								),
							);
						g = t;
					} else
						g = function (e, r) {
							return r(null, t);
						};
					return g(y, function (t, s) {
						if (t)
							return h(
								new n(
									"error in secret or public key callback: " +
										t.message,
								),
							);
						var u,
							g = "" !== v[2].trim();
						if (!g && s) return h(new n("jwt signature is required"));
						if (g && !s)
							return h(new n("secret or public key must be provided"));
						if (
							(g || r.algorithms || (r.algorithms = ["none"]),
							r.algorithms ||
								(r.algorithms =
									~s.toString().indexOf("BEGIN CERTIFICATE") ||
									~s.toString().indexOf("BEGIN PUBLIC KEY")
										? f
										: ~s.toString().indexOf("BEGIN RSA PUBLIC KEY")
										? p
										: l),
							!~r.algorithms.indexOf(m.header.alg))
						)
							return h(new n("invalid algorithm"));
						try {
							u = c.verify(e, m.header.alg, s);
						} catch (e) {
							return h(e);
						}
						if (!u) return h(new n("invalid signature"));
						var b = m.payload;
						if (void 0 !== b.nbf && !r.ignoreNotBefore) {
							if ("number" != typeof b.nbf)
								return h(new n("invalid nbf value"));
							if (b.nbf > d + (r.clockTolerance || 0))
								return h(
									new o("jwt not active", new Date(1e3 * b.nbf)),
								);
						}
						if (void 0 !== b.exp && !r.ignoreExpiration) {
							if ("number" != typeof b.exp)
								return h(new n("invalid exp value"));
							if (d >= b.exp + (r.clockTolerance || 0))
								return h(new i("jwt expired", new Date(1e3 * b.exp)));
						}
						if (r.audience) {
							var w = Array.isArray(r.audience)
								? r.audience
								: [r.audience];
							if (
								!(Array.isArray(b.aud) ? b.aud : [b.aud]).some(
									function (e) {
										return w.some(function (t) {
											return t instanceof RegExp
												? t.test(e)
												: t === e;
										});
									},
								)
							)
								return h(
									new n(
										"jwt audience invalid. expected: " +
											w.join(" or "),
									),
								);
						}
						if (
							r.issuer &&
							(("string" == typeof r.issuer && b.iss !== r.issuer) ||
								(Array.isArray(r.issuer) &&
									-1 === r.issuer.indexOf(b.iss)))
						)
							return h(
								new n("jwt issuer invalid. expected: " + r.issuer),
							);
						if (r.subject && b.sub !== r.subject)
							return h(
								new n("jwt subject invalid. expected: " + r.subject),
							);
						if (r.jwtid && b.jti !== r.jwtid)
							return h(new n("jwt jwtid invalid. expected: " + r.jwtid));
						if (r.nonce && b.nonce !== r.nonce)
							return h(new n("jwt nonce invalid. expected: " + r.nonce));
						if (r.maxAge) {
							if ("number" != typeof b.iat)
								return h(
									new n("iat required when maxAge is specified"),
								);
							var x = a(r.maxAge, b.iat);
							if (void 0 === x)
								return h(
									new n(
										'"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60',
									),
								);
							if (d >= x + (r.clockTolerance || 0))
								return h(new i("maxAge exceeded", new Date(1e3 * x)));
						}
						if (!0 === r.complete) {
							var C = m.signature;
							return h(null, { header: y, payload: b, signature: C });
						}
						return h(null, b);
					});
				});
		},
		function (e, t) {
			var r = 1e3,
				n = 6e4,
				o = 60 * n,
				i = 24 * o;
			function s(e, t, r, n) {
				var o = t >= 1.5 * r;
				return Math.round(e / r) + " " + n + (o ? "s" : "");
			}
			e.exports = function (e, t) {
				t = t || {};
				var a = typeof e;
				if ("string" === a && e.length > 0)
					return (function (e) {
						if ((e = String(e)).length > 100) return;
						var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
							e,
						);
						if (!t) return;
						var s = parseFloat(t[1]);
						switch ((t[2] || "ms").toLowerCase()) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return 315576e5 * s;
							case "weeks":
							case "week":
							case "w":
								return 6048e5 * s;
							case "days":
							case "day":
							case "d":
								return s * i;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return s * o;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return s * n;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return s * r;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return s;
							default:
								return;
						}
					})(e);
				if ("number" === a && isFinite(e))
					return t.long
						? (function (e) {
								var t = Math.abs(e);
								if (t >= i) return s(e, t, i, "day");
								if (t >= o) return s(e, t, o, "hour");
								if (t >= n) return s(e, t, n, "minute");
								if (t >= r) return s(e, t, r, "second");
								return e + " ms";
						  })(e)
						: (function (e) {
								var t = Math.abs(e);
								if (t >= i) return Math.round(e / i) + "d";
								if (t >= o) return Math.round(e / o) + "h";
								if (t >= n) return Math.round(e / n) + "m";
								if (t >= r) return Math.round(e / r) + "s";
								return e + "ms";
						  })(e);
				throw new Error(
					"val is not a non-empty string or a valid number. val=" +
						JSON.stringify(e),
				);
			};
		},
		function (e, t) {
			var r;
			(t = e.exports = G),
				(r =
					"object" == typeof process &&
					process.env &&
					process.env.NODE_DEBUG &&
					/\bsemver\b/i.test(process.env.NODE_DEBUG)
						? function () {
								var e = Array.prototype.slice.call(arguments, 0);
								e.unshift("SEMVER"), console.log.apply(console, e);
						  }
						: function () {}),
				(t.SEMVER_SPEC_VERSION = "2.0.0");
			var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
				o = (t.re = []),
				i = (t.src = []),
				s = 0,
				a = s++;
			i[a] = "0|[1-9]\\d*";
			var u = s++;
			i[u] = "[0-9]+";
			var c = s++;
			i[c] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
			var f = s++;
			i[f] = "(" + i[a] + ")\\.(" + i[a] + ")\\.(" + i[a] + ")";
			var p = s++;
			i[p] = "(" + i[u] + ")\\.(" + i[u] + ")\\.(" + i[u] + ")";
			var l = s++;
			i[l] = "(?:" + i[a] + "|" + i[c] + ")";
			var h = s++;
			i[h] = "(?:" + i[u] + "|" + i[c] + ")";
			var d = s++;
			i[d] = "(?:-(" + i[l] + "(?:\\." + i[l] + ")*))";
			var m = s++;
			i[m] = "(?:-?(" + i[h] + "(?:\\." + i[h] + ")*))";
			var v = s++;
			i[v] = "[0-9A-Za-z-]+";
			var g = s++;
			i[g] = "(?:\\+(" + i[v] + "(?:\\." + i[v] + ")*))";
			var y = s++,
				b = "v?" + i[f] + i[d] + "?" + i[g] + "?";
			i[y] = "^" + b + "$";
			var w = "[v=\\s]*" + i[p] + i[m] + "?" + i[g] + "?",
				x = s++;
			i[x] = "^" + w + "$";
			var C = s++;
			i[C] = "((?:<|>)?=?)";
			var S = s++;
			i[S] = i[u] + "|x|X|\\*";
			var E = s++;
			i[E] = i[a] + "|x|X|\\*";
			var j = s++;
			i[j] =
				"[v=\\s]*(" +
				i[E] +
				")(?:\\.(" +
				i[E] +
				")(?:\\.(" +
				i[E] +
				")(?:" +
				i[d] +
				")?" +
				i[g] +
				"?)?)?";
			var R = s++;
			i[R] =
				"[v=\\s]*(" +
				i[S] +
				")(?:\\.(" +
				i[S] +
				")(?:\\.(" +
				i[S] +
				")(?:" +
				i[m] +
				")?" +
				i[g] +
				"?)?)?";
			var O = s++;
			i[O] = "^" + i[C] + "\\s*" + i[j] + "$";
			var A = s++;
			i[A] = "^" + i[C] + "\\s*" + i[R] + "$";
			var T = s++;
			i[T] =
				"(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
			var _ = s++;
			i[_] = "(?:~>?)";
			var k = s++;
			(i[k] = "(\\s*)" + i[_] + "\\s+"), (o[k] = new RegExp(i[k], "g"));
			var B = s++;
			i[B] = "^" + i[_] + i[j] + "$";
			var N = s++;
			i[N] = "^" + i[_] + i[R] + "$";
			var P = s++;
			i[P] = "(?:\\^)";
			var F = s++;
			(i[F] = "(\\s*)" + i[P] + "\\s+"), (o[F] = new RegExp(i[F], "g"));
			var q = s++;
			i[q] = "^" + i[P] + i[j] + "$";
			var L = s++;
			i[L] = "^" + i[P] + i[R] + "$";
			var I = s++;
			i[I] = "^" + i[C] + "\\s*(" + w + ")$|^$";
			var U = s++;
			i[U] = "^" + i[C] + "\\s*(" + b + ")$|^$";
			var M = s++;
			(i[M] = "(\\s*)" + i[C] + "\\s*(" + w + "|" + i[j] + ")"),
				(o[M] = new RegExp(i[M], "g"));
			var D = s++;
			i[D] = "^\\s*(" + i[j] + ")\\s+-\\s+(" + i[j] + ")\\s*$";
			var $ = s++;
			i[$] = "^\\s*(" + i[R] + ")\\s+-\\s+(" + i[R] + ")\\s*$";
			var H = s++;
			i[H] = "(<|>)?=?\\s*\\*";
			for (var V = 0; V < 35; V++)
				r(V, i[V]), o[V] || (o[V] = new RegExp(i[V]));
			function z(e, t) {
				if (
					((t && "object" == typeof t) ||
						(t = { loose: !!t, includePrerelease: !1 }),
					e instanceof G)
				)
					return e;
				if ("string" != typeof e) return null;
				if (e.length > 256) return null;
				if (!(t.loose ? o[x] : o[y]).test(e)) return null;
				try {
					return new G(e, t);
				} catch (e) {
					return null;
				}
			}
			function G(e, t) {
				if (
					((t && "object" == typeof t) ||
						(t = { loose: !!t, includePrerelease: !1 }),
					e instanceof G)
				) {
					if (e.loose === t.loose) return e;
					e = e.version;
				} else if ("string" != typeof e)
					throw new TypeError("Invalid Version: " + e);
				if (e.length > 256)
					throw new TypeError("version is longer than 256 characters");
				if (!(this instanceof G)) return new G(e, t);
				r("SemVer", e, t), (this.options = t), (this.loose = !!t.loose);
				var i = e.trim().match(t.loose ? o[x] : o[y]);
				if (!i) throw new TypeError("Invalid Version: " + e);
				if (
					((this.raw = e),
					(this.major = +i[1]),
					(this.minor = +i[2]),
					(this.patch = +i[3]),
					this.major > n || this.major < 0)
				)
					throw new TypeError("Invalid major version");
				if (this.minor > n || this.minor < 0)
					throw new TypeError("Invalid minor version");
				if (this.patch > n || this.patch < 0)
					throw new TypeError("Invalid patch version");
				i[4]
					? (this.prerelease = i[4].split(".").map(function (e) {
							if (/^[0-9]+$/.test(e)) {
								var t = +e;
								if (t >= 0 && t < n) return t;
							}
							return e;
					  }))
					: (this.prerelease = []),
					(this.build = i[5] ? i[5].split(".") : []),
					this.format();
			}
			(t.parse = z),
				(t.valid = function (e, t) {
					var r = z(e, t);
					return r ? r.version : null;
				}),
				(t.clean = function (e, t) {
					var r = z(e.trim().replace(/^[=v]+/, ""), t);
					return r ? r.version : null;
				}),
				(t.SemVer = G),
				(G.prototype.format = function () {
					return (
						(this.version =
							this.major + "." + this.minor + "." + this.patch),
						this.prerelease.length &&
							(this.version += "-" + this.prerelease.join(".")),
						this.version
					);
				}),
				(G.prototype.toString = function () {
					return this.version;
				}),
				(G.prototype.compare = function (e) {
					return (
						r("SemVer.compare", this.version, this.options, e),
						e instanceof G || (e = new G(e, this.options)),
						this.compareMain(e) || this.comparePre(e)
					);
				}),
				(G.prototype.compareMain = function (e) {
					return (
						e instanceof G || (e = new G(e, this.options)),
						K(this.major, e.major) ||
							K(this.minor, e.minor) ||
							K(this.patch, e.patch)
					);
				}),
				(G.prototype.comparePre = function (e) {
					if (
						(e instanceof G || (e = new G(e, this.options)),
						this.prerelease.length && !e.prerelease.length)
					)
						return -1;
					if (!this.prerelease.length && e.prerelease.length) return 1;
					if (!this.prerelease.length && !e.prerelease.length) return 0;
					var t = 0;
					do {
						var n = this.prerelease[t],
							o = e.prerelease[t];
						if (
							(r("prerelease compare", t, n, o),
							void 0 === n && void 0 === o)
						)
							return 0;
						if (void 0 === o) return 1;
						if (void 0 === n) return -1;
						if (n !== o) return K(n, o);
					} while (++t);
				}),
				(G.prototype.inc = function (e, t) {
					switch (e) {
						case "premajor":
							(this.prerelease.length = 0),
								(this.patch = 0),
								(this.minor = 0),
								this.major++,
								this.inc("pre", t);
							break;
						case "preminor":
							(this.prerelease.length = 0),
								(this.patch = 0),
								this.minor++,
								this.inc("pre", t);
							break;
						case "prepatch":
							(this.prerelease.length = 0),
								this.inc("patch", t),
								this.inc("pre", t);
							break;
						case "prerelease":
							0 === this.prerelease.length && this.inc("patch", t),
								this.inc("pre", t);
							break;
						case "major":
							(0 === this.minor &&
								0 === this.patch &&
								0 !== this.prerelease.length) ||
								this.major++,
								(this.minor = 0),
								(this.patch = 0),
								(this.prerelease = []);
							break;
						case "minor":
							(0 === this.patch && 0 !== this.prerelease.length) ||
								this.minor++,
								(this.patch = 0),
								(this.prerelease = []);
							break;
						case "patch":
							0 === this.prerelease.length && this.patch++,
								(this.prerelease = []);
							break;
						case "pre":
							if (0 === this.prerelease.length) this.prerelease = [0];
							else {
								for (var r = this.prerelease.length; --r >= 0; )
									"number" == typeof this.prerelease[r] &&
										(this.prerelease[r]++, (r = -2));
								-1 === r && this.prerelease.push(0);
							}
							t &&
								(this.prerelease[0] === t
									? isNaN(this.prerelease[1]) &&
									  (this.prerelease = [t, 0])
									: (this.prerelease = [t, 0]));
							break;
						default:
							throw new Error("invalid increment argument: " + e);
					}
					return this.format(), (this.raw = this.version), this;
				}),
				(t.inc = function (e, t, r, n) {
					"string" == typeof r && ((n = r), (r = void 0));
					try {
						return new G(e, r).inc(t, n).version;
					} catch (e) {
						return null;
					}
				}),
				(t.diff = function (e, t) {
					if (W(e, t)) return null;
					var r = z(e),
						n = z(t),
						o = "";
					if (r.prerelease.length || n.prerelease.length) {
						o = "pre";
						var i = "prerelease";
					}
					for (var s in r)
						if (
							("major" === s || "minor" === s || "patch" === s) &&
							r[s] !== n[s]
						)
							return o + s;
					return i;
				}),
				(t.compareIdentifiers = K);
			var J = /^[0-9]+$/;
			function K(e, t) {
				var r = J.test(e),
					n = J.test(t);
				return (
					r && n && ((e = +e), (t = +t)),
					e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
				);
			}
			function Y(e, t, r) {
				return new G(e, r).compare(new G(t, r));
			}
			function Z(e, t, r) {
				return Y(e, t, r) > 0;
			}
			function X(e, t, r) {
				return Y(e, t, r) < 0;
			}
			function W(e, t, r) {
				return 0 === Y(e, t, r);
			}
			function Q(e, t, r) {
				return 0 !== Y(e, t, r);
			}
			function ee(e, t, r) {
				return Y(e, t, r) >= 0;
			}
			function te(e, t, r) {
				return Y(e, t, r) <= 0;
			}
			function re(e, t, r, n) {
				switch (t) {
					case "===":
						return (
							"object" == typeof e && (e = e.version),
							"object" == typeof r && (r = r.version),
							e === r
						);
					case "!==":
						return (
							"object" == typeof e && (e = e.version),
							"object" == typeof r && (r = r.version),
							e !== r
						);
					case "":
					case "=":
					case "==":
						return W(e, r, n);
					case "!=":
						return Q(e, r, n);
					case ">":
						return Z(e, r, n);
					case ">=":
						return ee(e, r, n);
					case "<":
						return X(e, r, n);
					case "<=":
						return te(e, r, n);
					default:
						throw new TypeError("Invalid operator: " + t);
				}
			}
			function ne(e, t) {
				if (
					((t && "object" == typeof t) ||
						(t = { loose: !!t, includePrerelease: !1 }),
					e instanceof ne)
				) {
					if (e.loose === !!t.loose) return e;
					e = e.value;
				}
				if (!(this instanceof ne)) return new ne(e, t);
				r("comparator", e, t),
					(this.options = t),
					(this.loose = !!t.loose),
					this.parse(e),
					this.semver === oe
						? (this.value = "")
						: (this.value = this.operator + this.semver.version),
					r("comp", this);
			}
			(t.rcompareIdentifiers = function (e, t) {
				return K(t, e);
			}),
				(t.major = function (e, t) {
					return new G(e, t).major;
				}),
				(t.minor = function (e, t) {
					return new G(e, t).minor;
				}),
				(t.patch = function (e, t) {
					return new G(e, t).patch;
				}),
				(t.compare = Y),
				(t.compareLoose = function (e, t) {
					return Y(e, t, !0);
				}),
				(t.rcompare = function (e, t, r) {
					return Y(t, e, r);
				}),
				(t.sort = function (e, r) {
					return e.sort(function (e, n) {
						return t.compare(e, n, r);
					});
				}),
				(t.rsort = function (e, r) {
					return e.sort(function (e, n) {
						return t.rcompare(e, n, r);
					});
				}),
				(t.gt = Z),
				(t.lt = X),
				(t.eq = W),
				(t.neq = Q),
				(t.gte = ee),
				(t.lte = te),
				(t.cmp = re),
				(t.Comparator = ne);
			var oe = {};
			function ie(e, t) {
				if (
					((t && "object" == typeof t) ||
						(t = { loose: !!t, includePrerelease: !1 }),
					e instanceof ie)
				)
					return e.loose === !!t.loose &&
						e.includePrerelease === !!t.includePrerelease
						? e
						: new ie(e.raw, t);
				if (e instanceof ne) return new ie(e.value, t);
				if (!(this instanceof ie)) return new ie(e, t);
				if (
					((this.options = t),
					(this.loose = !!t.loose),
					(this.includePrerelease = !!t.includePrerelease),
					(this.raw = e),
					(this.set = e
						.split(/\s*\|\|\s*/)
						.map(function (e) {
							return this.parseRange(e.trim());
						}, this)
						.filter(function (e) {
							return e.length;
						})),
					!this.set.length)
				)
					throw new TypeError("Invalid SemVer Range: " + e);
				this.format();
			}
			function se(e) {
				return !e || "x" === e.toLowerCase() || "*" === e;
			}
			function ae(e, t, r, n, o, i, s, a, u, c, f, p, l) {
				return (
					(t = se(r)
						? ""
						: se(n)
						? ">=" + r + ".0.0"
						: se(o)
						? ">=" + r + "." + n + ".0"
						: ">=" + t) +
					" " +
					(a = se(u)
						? ""
						: se(c)
						? "<" + (+u + 1) + ".0.0"
						: se(f)
						? "<" + u + "." + (+c + 1) + ".0"
						: p
						? "<=" + u + "." + c + "." + f + "-" + p
						: "<=" + a)
				).trim();
			}
			function ue(e, t, n) {
				for (var o = 0; o < e.length; o++) if (!e[o].test(t)) return !1;
				if (t.prerelease.length && !n.includePrerelease) {
					for (o = 0; o < e.length; o++)
						if (
							(r(e[o].semver),
							e[o].semver !== oe && e[o].semver.prerelease.length > 0)
						) {
							var i = e[o].semver;
							if (
								i.major === t.major &&
								i.minor === t.minor &&
								i.patch === t.patch
							)
								return !0;
						}
					return !1;
				}
				return !0;
			}
			function ce(e, t, r) {
				try {
					t = new ie(t, r);
				} catch (e) {
					return !1;
				}
				return t.test(e);
			}
			function fe(e, t, r, n) {
				var o, i, s, a, u;
				switch (((e = new G(e, n)), (t = new ie(t, n)), r)) {
					case ">":
						(o = Z), (i = te), (s = X), (a = ">"), (u = ">=");
						break;
					case "<":
						(o = X), (i = ee), (s = Z), (a = "<"), (u = "<=");
						break;
					default:
						throw new TypeError('Must provide a hilo val of "<" or ">"');
				}
				if (ce(e, t, n)) return !1;
				for (var c = 0; c < t.set.length; ++c) {
					var f = t.set[c],
						p = null,
						l = null;
					if (
						(f.forEach(function (e) {
							e.semver === oe && (e = new ne(">=0.0.0")),
								(p = p || e),
								(l = l || e),
								o(e.semver, p.semver, n)
									? (p = e)
									: s(e.semver, l.semver, n) && (l = e);
						}),
						p.operator === a || p.operator === u)
					)
						return !1;
					if ((!l.operator || l.operator === a) && i(e, l.semver))
						return !1;
					if (l.operator === u && s(e, l.semver)) return !1;
				}
				return !0;
			}
			(ne.prototype.parse = function (e) {
				var t = this.options.loose ? o[I] : o[U],
					r = e.match(t);
				if (!r) throw new TypeError("Invalid comparator: " + e);
				(this.operator = r[1]),
					"=" === this.operator && (this.operator = ""),
					r[2]
						? (this.semver = new G(r[2], this.options.loose))
						: (this.semver = oe);
			}),
				(ne.prototype.toString = function () {
					return this.value;
				}),
				(ne.prototype.test = function (e) {
					return (
						r("Comparator.test", e, this.options.loose),
						this.semver === oe ||
							("string" == typeof e && (e = new G(e, this.options)),
							re(e, this.operator, this.semver, this.options))
					);
				}),
				(ne.prototype.intersects = function (e, t) {
					if (!(e instanceof ne))
						throw new TypeError("a Comparator is required");
					var r;
					if (
						((t && "object" == typeof t) ||
							(t = { loose: !!t, includePrerelease: !1 }),
						"" === this.operator)
					)
						return (r = new ie(e.value, t)), ce(this.value, r, t);
					if ("" === e.operator)
						return (r = new ie(this.value, t)), ce(e.semver, r, t);
					var n = !(
							(">=" !== this.operator && ">" !== this.operator) ||
							(">=" !== e.operator && ">" !== e.operator)
						),
						o = !(
							("<=" !== this.operator && "<" !== this.operator) ||
							("<=" !== e.operator && "<" !== e.operator)
						),
						i = this.semver.version === e.semver.version,
						s = !(
							(">=" !== this.operator && "<=" !== this.operator) ||
							(">=" !== e.operator && "<=" !== e.operator)
						),
						a =
							re(this.semver, "<", e.semver, t) &&
							(">=" === this.operator || ">" === this.operator) &&
							("<=" === e.operator || "<" === e.operator),
						u =
							re(this.semver, ">", e.semver, t) &&
							("<=" === this.operator || "<" === this.operator) &&
							(">=" === e.operator || ">" === e.operator);
					return n || o || (i && s) || a || u;
				}),
				(t.Range = ie),
				(ie.prototype.format = function () {
					return (
						(this.range = this.set
							.map(function (e) {
								return e.join(" ").trim();
							})
							.join("||")
							.trim()),
						this.range
					);
				}),
				(ie.prototype.toString = function () {
					return this.range;
				}),
				(ie.prototype.parseRange = function (e) {
					var t = this.options.loose;
					e = e.trim();
					var n = t ? o[$] : o[D];
					(e = e.replace(n, ae)),
						r("hyphen replace", e),
						(e = e.replace(o[M], "$1$2$3")),
						r("comparator trim", e, o[M]),
						(e = (e = (e = e.replace(o[k], "$1~")).replace(o[F], "$1^"))
							.split(/\s+/)
							.join(" "));
					var i = t ? o[I] : o[U],
						s = e
							.split(" ")
							.map(function (e) {
								return (function (e, t) {
									return (
										r("comp", e, t),
										(e = (function (e, t) {
											return e
												.trim()
												.split(/\s+/)
												.map(function (e) {
													return (function (e, t) {
														r("caret", e, t);
														var n = t.loose ? o[L] : o[q];
														return e.replace(n, function (
															t,
															n,
															o,
															i,
															s,
														) {
															var a;
															return (
																r("caret", e, t, n, o, i, s),
																se(n)
																	? (a = "")
																	: se(o)
																	? (a =
																			">=" +
																			n +
																			".0.0 <" +
																			(+n + 1) +
																			".0.0")
																	: se(i)
																	? (a =
																			"0" === n
																				? ">=" +
																				  n +
																				  "." +
																				  o +
																				  ".0 <" +
																				  n +
																				  "." +
																				  (+o + 1) +
																				  ".0"
																				: ">=" +
																				  n +
																				  "." +
																				  o +
																				  ".0 <" +
																				  (+n + 1) +
																				  ".0.0")
																	: s
																	? (r("replaceCaret pr", s),
																	  (a =
																			"0" === n
																				? "0" === o
																					? ">=" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  i +
																					  "-" +
																					  s +
																					  " <" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  (+i + 1)
																					: ">=" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  i +
																					  "-" +
																					  s +
																					  " <" +
																					  n +
																					  "." +
																					  (+o + 1) +
																					  ".0"
																				: ">=" +
																				  n +
																				  "." +
																				  o +
																				  "." +
																				  i +
																				  "-" +
																				  s +
																				  " <" +
																				  (+n + 1) +
																				  ".0.0"))
																	: (r("no pr"),
																	  (a =
																			"0" === n
																				? "0" === o
																					? ">=" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  i +
																					  " <" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  (+i + 1)
																					: ">=" +
																					  n +
																					  "." +
																					  o +
																					  "." +
																					  i +
																					  " <" +
																					  n +
																					  "." +
																					  (+o + 1) +
																					  ".0"
																				: ">=" +
																				  n +
																				  "." +
																				  o +
																				  "." +
																				  i +
																				  " <" +
																				  (+n + 1) +
																				  ".0.0")),
																r("caret return", a),
																a
															);
														});
													})(e, t);
												})
												.join(" ");
										})(e, t)),
										r("caret", e),
										(e = (function (e, t) {
											return e
												.trim()
												.split(/\s+/)
												.map(function (e) {
													return (function (e, t) {
														var n = t.loose ? o[N] : o[B];
														return e.replace(n, function (
															t,
															n,
															o,
															i,
															s,
														) {
															var a;
															return (
																r("tilde", e, t, n, o, i, s),
																se(n)
																	? (a = "")
																	: se(o)
																	? (a =
																			">=" +
																			n +
																			".0.0 <" +
																			(+n + 1) +
																			".0.0")
																	: se(i)
																	? (a =
																			">=" +
																			n +
																			"." +
																			o +
																			".0 <" +
																			n +
																			"." +
																			(+o + 1) +
																			".0")
																	: s
																	? (r("replaceTilde pr", s),
																	  (a =
																			">=" +
																			n +
																			"." +
																			o +
																			"." +
																			i +
																			"-" +
																			s +
																			" <" +
																			n +
																			"." +
																			(+o + 1) +
																			".0"))
																	: (a =
																			">=" +
																			n +
																			"." +
																			o +
																			"." +
																			i +
																			" <" +
																			n +
																			"." +
																			(+o + 1) +
																			".0"),
																r("tilde return", a),
																a
															);
														});
													})(e, t);
												})
												.join(" ");
										})(e, t)),
										r("tildes", e),
										(e = (function (e, t) {
											return (
												r("replaceXRanges", e, t),
												e
													.split(/\s+/)
													.map(function (e) {
														return (function (e, t) {
															e = e.trim();
															var n = t.loose ? o[A] : o[O];
															return e.replace(n, function (
																t,
																n,
																o,
																i,
																s,
																a,
															) {
																r(
																	"xRange",
																	e,
																	t,
																	n,
																	o,
																	i,
																	s,
																	a,
																);
																var u = se(o),
																	c = u || se(i),
																	f = c || se(s);
																return (
																	"=" === n && f && (n = ""),
																	u
																		? (t =
																				">" === n ||
																				"<" === n
																					? "<0.0.0"
																					: "*")
																		: n && f
																		? (c && (i = 0),
																		  (s = 0),
																		  ">" === n
																				? ((n = ">="),
																				  c
																						? ((o =
																								+o + 1),
																						  (i = 0),
																						  (s = 0))
																						: ((i =
																								+i + 1),
																						  (s = 0)))
																				: "<=" === n &&
																				  ((n = "<"),
																				  c
																						? (o = +o + 1)
																						: (i =
																								+i +
																								1)),
																		  (t =
																				n +
																				o +
																				"." +
																				i +
																				"." +
																				s))
																		: c
																		? (t =
																				">=" +
																				o +
																				".0.0 <" +
																				(+o + 1) +
																				".0.0")
																		: f &&
																		  (t =
																				">=" +
																				o +
																				"." +
																				i +
																				".0 <" +
																				o +
																				"." +
																				(+i + 1) +
																				".0"),
																	r("xRange return", t),
																	t
																);
															});
														})(e, t);
													})
													.join(" ")
											);
										})(e, t)),
										r("xrange", e),
										(e = (function (e, t) {
											return (
												r("replaceStars", e, t),
												e.trim().replace(o[H], "")
											);
										})(e, t)),
										r("stars", e),
										e
									);
								})(e, this.options);
							}, this)
							.join(" ")
							.split(/\s+/);
					return (
						this.options.loose &&
							(s = s.filter(function (e) {
								return !!e.match(i);
							})),
						(s = s.map(function (e) {
							return new ne(e, this.options);
						}, this))
					);
				}),
				(ie.prototype.intersects = function (e, t) {
					if (!(e instanceof ie))
						throw new TypeError("a Range is required");
					return this.set.some(function (r) {
						return r.every(function (r) {
							return e.set.some(function (e) {
								return e.every(function (e) {
									return r.intersects(e, t);
								});
							});
						});
					});
				}),
				(t.toComparators = function (e, t) {
					return new ie(e, t).set.map(function (e) {
						return e
							.map(function (e) {
								return e.value;
							})
							.join(" ")
							.trim()
							.split(" ");
					});
				}),
				(ie.prototype.test = function (e) {
					if (!e) return !1;
					"string" == typeof e && (e = new G(e, this.options));
					for (var t = 0; t < this.set.length; t++)
						if (ue(this.set[t], e, this.options)) return !0;
					return !1;
				}),
				(t.satisfies = ce),
				(t.maxSatisfying = function (e, t, r) {
					var n = null,
						o = null;
					try {
						var i = new ie(t, r);
					} catch (e) {
						return null;
					}
					return (
						e.forEach(function (e) {
							i.test(e) &&
								((n && -1 !== o.compare(e)) || (o = new G((n = e), r)));
						}),
						n
					);
				}),
				(t.minSatisfying = function (e, t, r) {
					var n = null,
						o = null;
					try {
						var i = new ie(t, r);
					} catch (e) {
						return null;
					}
					return (
						e.forEach(function (e) {
							i.test(e) &&
								((n && 1 !== o.compare(e)) || (o = new G((n = e), r)));
						}),
						n
					);
				}),
				(t.minVersion = function (e, t) {
					e = new ie(e, t);
					var r = new G("0.0.0");
					if (e.test(r)) return r;
					if (((r = new G("0.0.0-0")), e.test(r))) return r;
					r = null;
					for (var n = 0; n < e.set.length; ++n) {
						e.set[n].forEach(function (e) {
							var t = new G(e.semver.version);
							switch (e.operator) {
								case ">":
									0 === t.prerelease.length
										? t.patch++
										: t.prerelease.push(0),
										(t.raw = t.format());
								case "":
								case ">=":
									(r && !Z(r, t)) || (r = t);
									break;
								case "<":
								case "<=":
									break;
								default:
									throw new Error(
										"Unexpected operation: " + e.operator,
									);
							}
						});
					}
					if (r && e.test(r)) return r;
					return null;
				}),
				(t.validRange = function (e, t) {
					try {
						return new ie(e, t).range || "*";
					} catch (e) {
						return null;
					}
				}),
				(t.ltr = function (e, t, r) {
					return fe(e, t, "<", r);
				}),
				(t.gtr = function (e, t, r) {
					return fe(e, t, ">", r);
				}),
				(t.outside = fe),
				(t.prerelease = function (e, t) {
					var r = z(e, t);
					return r && r.prerelease.length ? r.prerelease : null;
				}),
				(t.intersects = function (e, t, r) {
					return (e = new ie(e, r)), (t = new ie(t, r)), e.intersects(t);
				}),
				(t.coerce = function (e) {
					if (e instanceof G) return e;
					if ("string" != typeof e) return null;
					var t = e.match(o[T]);
					if (null == t) return null;
					return z(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
				});
		},
		function (e, t, r) {
			var n = r(14),
				o = r(15),
				i = r(6),
				s = r(26),
				a = r(27),
				u = r(28),
				c = r(29),
				f = r(30),
				p = r(31),
				l = r(32),
				h = [
					"RS256",
					"RS384",
					"RS512",
					"ES256",
					"ES384",
					"ES512",
					"HS256",
					"HS384",
					"HS512",
					"none",
				];
			o && h.splice(3, 0, "PS256", "PS384", "PS512");
			var d = {
					expiresIn: {
						isValid: function (e) {
							return u(e) || (p(e) && e);
						},
						message:
							'"expiresIn" should be a number of seconds or string representing a timespan',
					},
					notBefore: {
						isValid: function (e) {
							return u(e) || (p(e) && e);
						},
						message:
							'"notBefore" should be a number of seconds or string representing a timespan',
					},
					audience: {
						isValid: function (e) {
							return p(e) || Array.isArray(e);
						},
						message: '"audience" must be a string or array',
					},
					algorithm: {
						isValid: s.bind(null, h),
						message: '"algorithm" must be a valid string enum value',
					},
					header: { isValid: f, message: '"header" must be an object' },
					encoding: { isValid: p, message: '"encoding" must be a string' },
					issuer: { isValid: p, message: '"issuer" must be a string' },
					subject: { isValid: p, message: '"subject" must be a string' },
					jwtid: { isValid: p, message: '"jwtid" must be a string' },
					noTimestamp: {
						isValid: a,
						message: '"noTimestamp" must be a boolean',
					},
					keyid: { isValid: p, message: '"keyid" must be a string' },
					mutatePayload: {
						isValid: a,
						message: '"mutatePayload" must be a boolean',
					},
				},
				m = {
					iat: {
						isValid: c,
						message: '"iat" should be a number of seconds',
					},
					exp: {
						isValid: c,
						message: '"exp" should be a number of seconds',
					},
					nbf: {
						isValid: c,
						message: '"nbf" should be a number of seconds',
					},
				};
			function v(e, t, r, n) {
				if (!f(r))
					throw new Error('Expected "' + n + '" to be a plain object.');
				Object.keys(r).forEach(function (o) {
					var i = e[o];
					if (i) {
						if (!i.isValid(r[o])) throw new Error(i.message);
					} else if (!t) throw new Error('"' + o + '" is not allowed in "' + n + '"');
				});
			}
			var g = {
					audience: "aud",
					issuer: "iss",
					subject: "sub",
					jwtid: "jti",
				},
				y = [
					"expiresIn",
					"notBefore",
					"noTimestamp",
					"audience",
					"issuer",
					"subject",
					"jwtid",
				];
			e.exports = function (e, t, r, o) {
				"function" == typeof r ? ((o = r), (r = {})) : (r = r || {});
				var s = "object" == typeof e && !Buffer.isBuffer(e),
					a = Object.assign(
						{
							alg: r.algorithm || "HS256",
							typ: s ? "JWT" : void 0,
							kid: r.keyid,
						},
						r.header,
					);
				function u(e) {
					if (o) return o(e);
					throw e;
				}
				if (!t && "none" !== r.algorithm)
					return u(new Error("secretOrPrivateKey must have a value"));
				if (void 0 === e) return u(new Error("payload is required"));
				if (s) {
					try {
						!(function (e) {
							v(m, !0, e, "payload");
						})(e);
					} catch (e) {
						return u(e);
					}
					r.mutatePayload || (e = Object.assign({}, e));
				} else {
					var c = y.filter(function (e) {
						return void 0 !== r[e];
					});
					if (c.length > 0)
						return u(
							new Error(
								"invalid " +
									c.join(",") +
									" option for " +
									typeof e +
									" payload",
							),
						);
				}
				if (void 0 !== e.exp && void 0 !== r.expiresIn)
					return u(
						new Error(
							'Bad "options.expiresIn" option the payload already has an "exp" property.',
						),
					);
				if (void 0 !== e.nbf && void 0 !== r.notBefore)
					return u(
						new Error(
							'Bad "options.notBefore" option the payload already has an "nbf" property.',
						),
					);
				try {
					!(function (e) {
						v(d, !1, e, "options");
					})(r);
				} catch (e) {
					return u(e);
				}
				var f = e.iat || Math.floor(Date.now() / 1e3);
				if (
					(r.noTimestamp ? delete e.iat : s && (e.iat = f),
					void 0 !== r.notBefore)
				) {
					try {
						e.nbf = n(r.notBefore, f);
					} catch (e) {
						return u(e);
					}
					if (void 0 === e.nbf)
						return u(
							new Error(
								'"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60',
							),
						);
				}
				if (void 0 !== r.expiresIn && "object" == typeof e) {
					try {
						e.exp = n(r.expiresIn, f);
					} catch (e) {
						return u(e);
					}
					if (void 0 === e.exp)
						return u(
							new Error(
								'"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60',
							),
						);
				}
				Object.keys(g).forEach(function (t) {
					var n = g[t];
					if (void 0 !== r[t]) {
						if (void 0 !== e[n])
							return u(
								new Error(
									'Bad "options.' +
										t +
										'" option. The payload already has an "' +
										n +
										'" property.',
								),
							);
						e[n] = r[t];
					}
				});
				var p = r.encoding || "utf8";
				if ("function" != typeof o)
					return i.sign({ header: a, payload: e, secret: t, encoding: p });
				(o = o && l(o)),
					i
						.createSign({
							header: a,
							privateKey: t,
							payload: e,
							encoding: p,
						})
						.once("error", o)
						.once("done", function (e) {
							o(null, e);
						});
			};
		},
		function (e, t) {
			var r = /^\s+|\s+$/g,
				n = /^[-+]0x[0-9a-f]+$/i,
				o = /^0b[01]+$/i,
				i = /^0o[0-7]+$/i,
				s = /^(?:0|[1-9]\d*)$/,
				a = parseInt;
			function u(e) {
				return e != e;
			}
			function c(e, t) {
				return (function (e, t) {
					for (var r = -1, n = e ? e.length : 0, o = Array(n); ++r < n; )
						o[r] = t(e[r], r, e);
					return o;
				})(t, function (t) {
					return e[t];
				});
			}
			var f,
				p,
				l = Object.prototype,
				h = l.hasOwnProperty,
				d = l.toString,
				m = l.propertyIsEnumerable,
				v =
					((f = Object.keys),
					(p = Object),
					function (e) {
						return f(p(e));
					}),
				g = Math.max;
			function y(e, t) {
				var r =
						x(e) ||
						(function (e) {
							return (
								(function (e) {
									return E(e) && C(e);
								})(e) &&
								h.call(e, "callee") &&
								(!m.call(e, "callee") ||
									"[object Arguments]" == d.call(e))
							);
						})(e)
							? (function (e, t) {
									for (var r = -1, n = Array(e); ++r < e; )
										n[r] = t(r);
									return n;
							  })(e.length, String)
							: [],
					n = r.length,
					o = !!n;
				for (var i in e)
					(!t && !h.call(e, i)) ||
						(o && ("length" == i || w(i, n))) ||
						r.push(i);
				return r;
			}
			function b(e) {
				if (
					((r = (t = e) && t.constructor),
					(n = ("function" == typeof r && r.prototype) || l),
					t !== n)
				)
					return v(e);
				var t,
					r,
					n,
					o = [];
				for (var i in Object(e))
					h.call(e, i) && "constructor" != i && o.push(i);
				return o;
			}
			function w(e, t) {
				return (
					!!(t = null == t ? 9007199254740991 : t) &&
					("number" == typeof e || s.test(e)) &&
					e > -1 &&
					e % 1 == 0 &&
					e < t
				);
			}
			var x = Array.isArray;
			function C(e) {
				return (
					null != e &&
					(function (e) {
						return (
							"number" == typeof e &&
							e > -1 &&
							e % 1 == 0 &&
							e <= 9007199254740991
						);
					})(e.length) &&
					!(function (e) {
						var t = S(e) ? d.call(e) : "";
						return (
							"[object Function]" == t ||
							"[object GeneratorFunction]" == t
						);
					})(e)
				);
			}
			function S(e) {
				var t = typeof e;
				return !!e && ("object" == t || "function" == t);
			}
			function E(e) {
				return !!e && "object" == typeof e;
			}
			e.exports = function (e, t, s, f) {
				var p;
				(e = C(e)
					? e
					: (p = e)
					? c(
							p,
							(function (e) {
								return C(e) ? y(e) : b(e);
							})(p),
					  )
					: []),
					(s =
						s && !f
							? (function (e) {
									var t = (function (e) {
											if (!e) return 0 === e ? e : 0;
											if (
												(e = (function (e) {
													if ("number" == typeof e) return e;
													if (
														(function (e) {
															return (
																"symbol" == typeof e ||
																(E(e) &&
																	"[object Symbol]" ==
																		d.call(e))
															);
														})(e)
													)
														return NaN;
													if (S(e)) {
														var t =
															"function" == typeof e.valueOf
																? e.valueOf()
																: e;
														e = S(t) ? t + "" : t;
													}
													if ("string" != typeof e)
														return 0 === e ? e : +e;
													e = e.replace(r, "");
													var s = o.test(e);
													return s || i.test(e)
														? a(e.slice(2), s ? 2 : 8)
														: n.test(e)
														? NaN
														: +e;
												})(e)) ===
													1 / 0 ||
												e === -1 / 0
											) {
												return (
													17976931348623157e292 * (e < 0 ? -1 : 1)
												);
											}
											return e == e ? e : 0;
										})(e),
										s = t % 1;
									return t == t ? (s ? t - s : t) : 0;
							  })(s)
							: 0);
				var l = e.length;
				return (
					s < 0 && (s = g(l + s, 0)),
					(function (e) {
						return (
							"string" == typeof e ||
							(!x(e) && E(e) && "[object String]" == d.call(e))
						);
					})(e)
						? s <= l && e.indexOf(t, s) > -1
						: !!l &&
						  (function (e, t, r) {
								if (t != t)
									return (function (e, t, r, n) {
										for (
											var o = e.length, i = r + (n ? 1 : -1);
											n ? i-- : ++i < o;

										)
											if (t(e[i], i, e)) return i;
										return -1;
									})(e, u, r);
								for (var n = r - 1, o = e.length; ++n < o; )
									if (e[n] === t) return n;
								return -1;
						  })(e, t, s) > -1
				);
			};
		},
		function (e, t) {
			var r = Object.prototype.toString;
			e.exports = function (e) {
				return (
					!0 === e ||
					!1 === e ||
					((function (e) {
						return !!e && "object" == typeof e;
					})(e) &&
						"[object Boolean]" == r.call(e))
				);
			};
		},
		function (e, t) {
			var r = /^\s+|\s+$/g,
				n = /^[-+]0x[0-9a-f]+$/i,
				o = /^0b[01]+$/i,
				i = /^0o[0-7]+$/i,
				s = parseInt,
				a = Object.prototype.toString;
			function u(e) {
				var t = typeof e;
				return !!e && ("object" == t || "function" == t);
			}
			e.exports = function (e) {
				return (
					"number" == typeof e &&
					e ==
						(function (e) {
							var t = (function (e) {
									if (!e) return 0 === e ? e : 0;
									if (
										(e = (function (e) {
											if ("number" == typeof e) return e;
											if (
												(function (e) {
													return (
														"symbol" == typeof e ||
														((function (e) {
															return !!e && "object" == typeof e;
														})(e) &&
															"[object Symbol]" == a.call(e))
													);
												})(e)
											)
												return NaN;
											if (u(e)) {
												var t =
													"function" == typeof e.valueOf
														? e.valueOf()
														: e;
												e = u(t) ? t + "" : t;
											}
											if ("string" != typeof e)
												return 0 === e ? e : +e;
											e = e.replace(r, "");
											var c = o.test(e);
											return c || i.test(e)
												? s(e.slice(2), c ? 2 : 8)
												: n.test(e)
												? NaN
												: +e;
										})(e)) ===
											1 / 0 ||
										e === -1 / 0
									) {
										return 17976931348623157e292 * (e < 0 ? -1 : 1);
									}
									return e == e ? e : 0;
								})(e),
								c = t % 1;
							return t == t ? (c ? t - c : t) : 0;
						})(e)
				);
			};
		},
		function (e, t) {
			var r = Object.prototype.toString;
			e.exports = function (e) {
				return (
					"number" == typeof e ||
					((function (e) {
						return !!e && "object" == typeof e;
					})(e) &&
						"[object Number]" == r.call(e))
				);
			};
		},
		function (e, t) {
			var r,
				n,
				o = Function.prototype,
				i = Object.prototype,
				s = o.toString,
				a = i.hasOwnProperty,
				u = s.call(Object),
				c = i.toString,
				f =
					((r = Object.getPrototypeOf),
					(n = Object),
					function (e) {
						return r(n(e));
					});
			e.exports = function (e) {
				if (
					!(function (e) {
						return !!e && "object" == typeof e;
					})(e) ||
					"[object Object]" != c.call(e) ||
					(function (e) {
						var t = !1;
						if (null != e && "function" != typeof e.toString)
							try {
								t = !!(e + "");
							} catch (e) {}
						return t;
					})(e)
				)
					return !1;
				var t = f(e);
				if (null === t) return !0;
				var r = a.call(t, "constructor") && t.constructor;
				return "function" == typeof r && r instanceof r && s.call(r) == u;
			};
		},
		function (e, t) {
			var r = Object.prototype.toString,
				n = Array.isArray;
			e.exports = function (e) {
				return (
					"string" == typeof e ||
					(!n(e) &&
						(function (e) {
							return !!e && "object" == typeof e;
						})(e) &&
						"[object String]" == r.call(e))
				);
			};
		},
		function (e, t) {
			var r = /^\s+|\s+$/g,
				n = /^[-+]0x[0-9a-f]+$/i,
				o = /^0b[01]+$/i,
				i = /^0o[0-7]+$/i,
				s = parseInt,
				a = Object.prototype.toString;
			function u(e, t) {
				var u;
				if ("function" != typeof t)
					throw new TypeError("Expected a function");
				return (
					(e = (function (e) {
						var t = (function (e) {
								if (!e) return 0 === e ? e : 0;
								if (
									(e = (function (e) {
										if ("number" == typeof e) return e;
										if (
											(function (e) {
												return (
													"symbol" == typeof e ||
													((function (e) {
														return !!e && "object" == typeof e;
													})(e) &&
														"[object Symbol]" == a.call(e))
												);
											})(e)
										)
											return NaN;
										if (c(e)) {
											var t =
												"function" == typeof e.valueOf
													? e.valueOf()
													: e;
											e = c(t) ? t + "" : t;
										}
										if ("string" != typeof e) return 0 === e ? e : +e;
										e = e.replace(r, "");
										var u = o.test(e);
										return u || i.test(e)
											? s(e.slice(2), u ? 2 : 8)
											: n.test(e)
											? NaN
											: +e;
									})(e)) ===
										1 / 0 ||
									e === -1 / 0
								) {
									return 17976931348623157e292 * (e < 0 ? -1 : 1);
								}
								return e == e ? e : 0;
							})(e),
							u = t % 1;
						return t == t ? (u ? t - u : t) : 0;
					})(e)),
					function () {
						return (
							--e > 0 && (u = t.apply(this, arguments)),
							e <= 1 && (t = void 0),
							u
						);
					}
				);
			}
			function c(e) {
				var t = typeof e;
				return !!e && ("object" == t || "function" == t);
			}
			e.exports = function (e) {
				return u(2, e);
			};
		},
		function (e, t, r) {
			"use strict";
			/*!
			 * cookie
			 * Copyright(c) 2012-2014 Roman Shtylman
			 * Copyright(c) 2015 Douglas Christopher Wilson
			 * MIT Licensed
			 */ (t.parse = function (e, t) {
				if ("string" != typeof e)
					throw new TypeError("argument str must be a string");
				for (
					var r = {},
						o = t || {},
						s = e.split(i),
						u = o.decode || n,
						c = 0;
					c < s.length;
					c++
				) {
					var f = s[c],
						p = f.indexOf("=");
					if (!(p < 0)) {
						var l = f.substr(0, p).trim(),
							h = f.substr(++p, f.length).trim();
						'"' == h[0] && (h = h.slice(1, -1)),
							null == r[l] && (r[l] = a(h, u));
					}
				}
				return r;
			}),
				(t.serialize = function (e, t, r) {
					var n = r || {},
						i = n.encode || o;
					if ("function" != typeof i)
						throw new TypeError("option encode is invalid");
					if (!s.test(e)) throw new TypeError("argument name is invalid");
					var a = i(t);
					if (a && !s.test(a))
						throw new TypeError("argument val is invalid");
					var u = e + "=" + a;
					if (null != n.maxAge) {
						var c = n.maxAge - 0;
						if (isNaN(c) || !isFinite(c))
							throw new TypeError("option maxAge is invalid");
						u += "; Max-Age=" + Math.floor(c);
					}
					if (n.domain) {
						if (!s.test(n.domain))
							throw new TypeError("option domain is invalid");
						u += "; Domain=" + n.domain;
					}
					if (n.path) {
						if (!s.test(n.path))
							throw new TypeError("option path is invalid");
						u += "; Path=" + n.path;
					}
					if (n.expires) {
						if ("function" != typeof n.expires.toUTCString)
							throw new TypeError("option expires is invalid");
						u += "; Expires=" + n.expires.toUTCString();
					}
					n.httpOnly && (u += "; HttpOnly");
					n.secure && (u += "; Secure");
					if (n.sameSite) {
						switch (
							"string" == typeof n.sameSite
								? n.sameSite.toLowerCase()
								: n.sameSite
						) {
							case !0:
								u += "; SameSite=Strict";
								break;
							case "lax":
								u += "; SameSite=Lax";
								break;
							case "strict":
								u += "; SameSite=Strict";
								break;
							case "none":
								u += "; SameSite=None";
								break;
							default:
								throw new TypeError("option sameSite is invalid");
						}
					}
					return u;
				});
			var n = decodeURIComponent,
				o = encodeURIComponent,
				i = /; */,
				s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
			function a(e, t) {
				try {
					return t(e);
				} catch (t) {
					return e;
				}
			}
		},
		function (e, t, r) {
			e.exports = r(51);
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			function o(e) {
				return encodeURIComponent(e)
					.replace(/%40/gi, "@")
					.replace(/%3A/gi, ":")
					.replace(/%24/g, "$")
					.replace(/%2C/gi, ",")
					.replace(/%20/g, "+")
					.replace(/%5B/gi, "[")
					.replace(/%5D/gi, "]");
			}
			e.exports = function (e, t, r) {
				if (!t) return e;
				var i;
				if (r) i = r(t);
				else if (n.isURLSearchParams(t)) i = t.toString();
				else {
					var s = [];
					n.forEach(t, function (e, t) {
						null != e &&
							(n.isArray(e) ? (t += "[]") : (e = [e]),
							n.forEach(e, function (e) {
								n.isDate(e)
									? (e = e.toISOString())
									: n.isObject(e) && (e = JSON.stringify(e)),
									s.push(o(t) + "=" + o(e));
							}));
					}),
						(i = s.join("&"));
				}
				if (i) {
					var a = e.indexOf("#");
					-1 !== a && (e = e.slice(0, a)),
						(e += (-1 === e.indexOf("?") ? "?" : "&") + i);
				}
				return e;
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(41);
			e.exports = function (e, t, r, o, i) {
				var s = new Error(e);
				return n(s, t, r, o, i);
			};
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e, t) {
				return function () {
					for (
						var r = new Array(arguments.length), n = 0;
						n < r.length;
						n++
					)
						r[n] = arguments[n];
					return e.apply(t, r);
				};
			};
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e) {
				return !(!e || !e.__CANCEL__);
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(56),
				i = { "Content-Type": "application/x-www-form-urlencoded" };
			function s(e, t) {
				!n.isUndefined(e) &&
					n.isUndefined(e["Content-Type"]) &&
					(e["Content-Type"] = t);
			}
			var a,
				u = {
					adapter:
						("undefined" != typeof XMLHttpRequest
							? (a = r(57))
							: "undefined" != typeof process &&
							  "[object process]" ===
									Object.prototype.toString.call(process) &&
							  (a = r(63)),
						a),
					transformRequest: [
						function (e, t) {
							return (
								o(t, "Accept"),
								o(t, "Content-Type"),
								n.isFormData(e) ||
								n.isArrayBuffer(e) ||
								n.isBuffer(e) ||
								n.isStream(e) ||
								n.isFile(e) ||
								n.isBlob(e)
									? e
									: n.isArrayBufferView(e)
									? e.buffer
									: n.isURLSearchParams(e)
									? (s(
											t,
											"application/x-www-form-urlencoded;charset=utf-8",
									  ),
									  e.toString())
									: n.isObject(e)
									? (s(t, "application/json;charset=utf-8"),
									  JSON.stringify(e))
									: e
							);
						},
					],
					transformResponse: [
						function (e) {
							if ("string" == typeof e)
								try {
									e = JSON.parse(e);
								} catch (e) {}
							return e;
						},
					],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					validateStatus: function (e) {
						return e >= 200 && e < 300;
					},
				};
			(u.headers = {
				common: { Accept: "application/json, text/plain, */*" },
			}),
				n.forEach(["delete", "get", "head"], function (e) {
					u.headers[e] = {};
				}),
				n.forEach(["post", "put", "patch"], function (e) {
					u.headers[e] = n.merge(i);
				}),
				(e.exports = u);
		},
		function (e, t, r) {
			"use strict";
			var n = r(36);
			e.exports = function (e, t, r) {
				var o = r.config.validateStatus;
				!o || o(r.status)
					? e(r)
					: t(
							n(
								"Request failed with status code " + r.status,
								r.config,
								null,
								r.request,
								r,
							),
					  );
			};
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e, t, r, n, o) {
				return (
					(e.config = t),
					r && (e.code = r),
					(e.request = n),
					(e.response = o),
					(e.isAxiosError = !0),
					(e.toJSON = function () {
						return {
							message: this.message,
							name: this.name,
							description: this.description,
							number: this.number,
							fileName: this.fileName,
							lineNumber: this.lineNumber,
							columnNumber: this.columnNumber,
							stack: this.stack,
							config: this.config,
							code: this.code,
						};
					}),
					e
				);
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(58),
				o = r(59);
			e.exports = function (e, t) {
				return e && !n(t) ? o(e, t) : t;
			};
		},
		function (e, t) {
			e.exports = require("http");
		},
		function (e, t) {
			e.exports = require("https");
		},
		function (e, t, r) {
			var n = r(46),
				o = r(43),
				i = r(44),
				s = r(64),
				a = r(5).Writable,
				u = r(65)("follow-redirects"),
				c = { GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0 },
				f = Object.create(null);
			function p(e, t) {
				a.call(this),
					(e.headers = e.headers || {}),
					(this._options = e),
					(this._redirectCount = 0),
					(this._redirects = []),
					(this._requestBodyLength = 0),
					(this._requestBodyBuffers = []),
					e.host && (e.hostname || (e.hostname = e.host), delete e.host),
					t && this.on("response", t);
				var r = this;
				if (
					((this._onNativeResponse = function (e) {
						r._processResponse(e);
					}),
					!e.pathname && e.path)
				) {
					var n = e.path.indexOf("?");
					n < 0
						? (e.pathname = e.path)
						: ((e.pathname = e.path.substring(0, n)),
						  (e.search = e.path.substring(n)));
				}
				this._performRequest();
			}
			function l(e) {
				var t = { maxRedirects: 21, maxBodyLength: 10485760 },
					r = {};
				return (
					Object.keys(e).forEach(function (o) {
						var i = o + ":",
							a = (r[i] = e[o]),
							c = (t[o] = Object.create(a));
						(c.request = function (e, o) {
							return (
								"string" == typeof e
									? ((e = n.parse(e)).maxRedirects = t.maxRedirects)
									: (e = Object.assign(
											{
												protocol: i,
												maxRedirects: t.maxRedirects,
												maxBodyLength: t.maxBodyLength,
											},
											e,
									  )),
								(e.nativeProtocols = r),
								s.equal(e.protocol, i, "protocol mismatch"),
								u("options", e),
								new p(e, o)
							);
						}),
							(c.get = function (e, t) {
								var r = c.request(e, t);
								return r.end(), r;
							});
					}),
					t
				);
			}
			["abort", "aborted", "error", "socket", "timeout"].forEach(function (
				e,
			) {
				f[e] = function (t) {
					this._redirectable.emit(e, t);
				};
			}),
				(p.prototype = Object.create(a.prototype)),
				(p.prototype.write = function (e, t, r) {
					if (
						!(
							"string" == typeof e ||
							("object" == typeof e && "length" in e)
						)
					)
						throw new Error(
							"data should be a string, Buffer or Uint8Array",
						);
					"function" == typeof t && ((r = t), (t = null)),
						0 !== e.length
							? this._requestBodyLength + e.length <=
							  this._options.maxBodyLength
								? ((this._requestBodyLength += e.length),
								  this._requestBodyBuffers.push({
										data: e,
										encoding: t,
								  }),
								  this._currentRequest.write(e, t, r))
								: (this.emit(
										"error",
										new Error(
											"Request body larger than maxBodyLength limit",
										),
								  ),
								  this.abort())
							: r && r();
				}),
				(p.prototype.end = function (e, t, r) {
					"function" == typeof e
						? ((r = e), (e = t = null))
						: "function" == typeof t && ((r = t), (t = null));
					var n = this._currentRequest;
					this.write(e || "", t, function () {
						n.end(null, null, r);
					});
				}),
				(p.prototype.setHeader = function (e, t) {
					(this._options.headers[e] = t),
						this._currentRequest.setHeader(e, t);
				}),
				(p.prototype.removeHeader = function (e) {
					delete this._options.headers[e],
						this._currentRequest.removeHeader(e);
				}),
				[
					"abort",
					"flushHeaders",
					"getHeader",
					"setNoDelay",
					"setSocketKeepAlive",
					"setTimeout",
				].forEach(function (e) {
					p.prototype[e] = function (t, r) {
						return this._currentRequest[e](t, r);
					};
				}),
				["aborted", "connection", "socket"].forEach(function (e) {
					Object.defineProperty(p.prototype, e, {
						get: function () {
							return this._currentRequest[e];
						},
					});
				}),
				(p.prototype._performRequest = function () {
					var e = this._options.protocol,
						t = this._options.nativeProtocols[e];
					if (t) {
						if (this._options.agents) {
							var r = e.substr(0, e.length - 1);
							this._options.agent = this._options.agents[r];
						}
						var o = (this._currentRequest = t.request(
							this._options,
							this._onNativeResponse,
						));
						for (var i in ((this._currentUrl = n.format(this._options)),
						(o._redirectable = this),
						f))
							i && o.on(i, f[i]);
						if (this._isRedirect) {
							var s = 0,
								a = this._requestBodyBuffers;
							!(function e() {
								if (s < a.length) {
									var t = a[s++];
									o.write(t.data, t.encoding, e);
								} else o.end();
							})();
						}
					} else
						this.emit("error", new Error("Unsupported protocol " + e));
				}),
				(p.prototype._processResponse = function (e) {
					this._options.trackRedirects &&
						this._redirects.push({
							url: this._currentUrl,
							headers: e.headers,
							statusCode: e.statusCode,
						});
					var t = e.headers.location;
					if (
						t &&
						!1 !== this._options.followRedirects &&
						e.statusCode >= 300 &&
						e.statusCode < 400
					) {
						if (++this._redirectCount > this._options.maxRedirects)
							return void this.emit(
								"error",
								new Error("Max redirects exceeded."),
							);
						var r,
							o = this._options.headers;
						if (307 !== e.statusCode && !(this._options.method in c))
							for (r in ((this._options.method = "GET"),
							(this._requestBodyBuffers = []),
							o))
								/^content-/i.test(r) && delete o[r];
						if (!this._isRedirect)
							for (r in o) /^host$/i.test(r) && delete o[r];
						var i = n.resolve(this._currentUrl, t);
						u("redirecting to", i),
							Object.assign(this._options, n.parse(i)),
							(this._isRedirect = !0),
							this._performRequest(),
							e.destroy();
					} else
						(e.responseUrl = this._currentUrl),
							(e.redirects = this._redirects),
							this.emit("response", e),
							(this._requestBodyBuffers = []);
				}),
				(e.exports = l({ http: o, https: i })),
				(e.exports.wrap = l);
		},
		function (e, t) {
			e.exports = require("url");
		},
		function (e, t, r) {
			function n(e) {
				var r;
				function n() {
					if (n.enabled) {
						var e = n,
							o = +new Date(),
							i = o - (r || o);
						(e.diff = i), (e.prev = r), (e.curr = o), (r = o);
						for (
							var s = new Array(arguments.length), a = 0;
							a < s.length;
							a++
						)
							s[a] = arguments[a];
						(s[0] = t.coerce(s[0])),
							"string" != typeof s[0] && s.unshift("%O");
						var u = 0;
						(s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
							if ("%%" === r) return r;
							u++;
							var o = t.formatters[n];
							if ("function" == typeof o) {
								var i = s[u];
								(r = o.call(e, i)), s.splice(u, 1), u--;
							}
							return r;
						})),
							t.formatArgs.call(e, s);
						var c = n.log || t.log || console.log.bind(console);
						c.apply(e, s);
					}
				}
				return (
					(n.namespace = e),
					(n.enabled = t.enabled(e)),
					(n.useColors = t.useColors()),
					(n.color = (function (e) {
						var r,
							n = 0;
						for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
						return t.colors[Math.abs(n) % t.colors.length];
					})(e)),
					(n.destroy = o),
					"function" == typeof t.init && t.init(n),
					t.instances.push(n),
					n
				);
			}
			function o() {
				var e = t.instances.indexOf(this);
				return -1 !== e && (t.instances.splice(e, 1), !0);
			}
			((t = e.exports = n.debug = n.default = n).coerce = function (e) {
				return e instanceof Error ? e.stack || e.message : e;
			}),
				(t.disable = function () {
					t.enable("");
				}),
				(t.enable = function (e) {
					var r;
					t.save(e), (t.names = []), (t.skips = []);
					var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
						o = n.length;
					for (r = 0; r < o; r++)
						n[r] &&
							("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
								? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
								: t.names.push(new RegExp("^" + e + "$")));
					for (r = 0; r < t.instances.length; r++) {
						var i = t.instances[r];
						i.enabled = t.enabled(i.namespace);
					}
				}),
				(t.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					var r, n;
					for (r = 0, n = t.skips.length; r < n; r++)
						if (t.skips[r].test(e)) return !1;
					for (r = 0, n = t.names.length; r < n; r++)
						if (t.names[r].test(e)) return !0;
					return !1;
				}),
				(t.humanize = r(67)),
				(t.instances = []),
				(t.names = []),
				(t.skips = []),
				(t.formatters = {});
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			e.exports = function (e, t) {
				t = t || {};
				var r = {},
					o = ["url", "method", "params", "data"],
					i = ["headers", "auth", "proxy"],
					s = [
						"baseURL",
						"url",
						"transformRequest",
						"transformResponse",
						"paramsSerializer",
						"timeout",
						"withCredentials",
						"adapter",
						"responseType",
						"xsrfCookieName",
						"xsrfHeaderName",
						"onUploadProgress",
						"onDownloadProgress",
						"maxContentLength",
						"validateStatus",
						"maxRedirects",
						"httpAgent",
						"httpsAgent",
						"cancelToken",
						"socketPath",
					];
				n.forEach(o, function (e) {
					void 0 !== t[e] && (r[e] = t[e]);
				}),
					n.forEach(i, function (o) {
						n.isObject(t[o])
							? (r[o] = n.deepMerge(e[o], t[o]))
							: void 0 !== t[o]
							? (r[o] = t[o])
							: n.isObject(e[o])
							? (r[o] = n.deepMerge(e[o]))
							: void 0 !== e[o] && (r[o] = e[o]);
					}),
					n.forEach(s, function (n) {
						void 0 !== t[n]
							? (r[n] = t[n])
							: void 0 !== e[n] && (r[n] = e[n]);
					});
				var a = o.concat(i).concat(s),
					u = Object.keys(t).filter(function (e) {
						return -1 === a.indexOf(e);
					});
				return (
					n.forEach(u, function (n) {
						void 0 !== t[n]
							? (r[n] = t[n])
							: void 0 !== e[n] && (r[n] = e[n]);
					}),
					r
				);
			};
		},
		function (e, t, r) {
			"use strict";
			function n(e) {
				this.message = e;
			}
			(n.prototype.toString = function () {
				return "Cancel" + (this.message ? ": " + this.message : "");
			}),
				(n.prototype.__CANCEL__ = !0),
				(e.exports = n);
		},
		,
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(37),
				i = r(52),
				s = r(48);
			function a(e) {
				var t = new i(e),
					r = o(i.prototype.request, t);
				return n.extend(r, i.prototype, t), n.extend(r, t), r;
			}
			var u = a(r(39));
			(u.Axios = i),
				(u.create = function (e) {
					return a(s(u.defaults, e));
				}),
				(u.Cancel = r(49)),
				(u.CancelToken = r(75)),
				(u.isCancel = r(38)),
				(u.all = function (e) {
					return Promise.all(e);
				}),
				(u.spread = r(76)),
				(e.exports = u),
				(e.exports.default = u);
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(35),
				i = r(53),
				s = r(54),
				a = r(48);
			function u(e) {
				(this.defaults = e),
					(this.interceptors = { request: new i(), response: new i() });
			}
			(u.prototype.request = function (e) {
				"string" == typeof e
					? ((e = arguments[1] || {}).url = arguments[0])
					: (e = e || {}),
					(e = a(this.defaults, e)).method
						? (e.method = e.method.toLowerCase())
						: this.defaults.method
						? (e.method = this.defaults.method.toLowerCase())
						: (e.method = "get");
				var t = [s, void 0],
					r = Promise.resolve(e);
				for (
					this.interceptors.request.forEach(function (e) {
						t.unshift(e.fulfilled, e.rejected);
					}),
						this.interceptors.response.forEach(function (e) {
							t.push(e.fulfilled, e.rejected);
						});
					t.length;

				)
					r = r.then(t.shift(), t.shift());
				return r;
			}),
				(u.prototype.getUri = function (e) {
					return (
						(e = a(this.defaults, e)),
						o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
					);
				}),
				n.forEach(["delete", "get", "head", "options"], function (e) {
					u.prototype[e] = function (t, r) {
						return this.request(n.merge(r || {}, { method: e, url: t }));
					};
				}),
				n.forEach(["post", "put", "patch"], function (e) {
					u.prototype[e] = function (t, r, o) {
						return this.request(
							n.merge(o || {}, { method: e, url: t, data: r }),
						);
					};
				}),
				(e.exports = u);
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			function o() {
				this.handlers = [];
			}
			(o.prototype.use = function (e, t) {
				return (
					this.handlers.push({ fulfilled: e, rejected: t }),
					this.handlers.length - 1
				);
			}),
				(o.prototype.eject = function (e) {
					this.handlers[e] && (this.handlers[e] = null);
				}),
				(o.prototype.forEach = function (e) {
					n.forEach(this.handlers, function (t) {
						null !== t && e(t);
					});
				}),
				(e.exports = o);
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(55),
				i = r(38),
				s = r(39);
			function a(e) {
				e.cancelToken && e.cancelToken.throwIfRequested();
			}
			e.exports = function (e) {
				return (
					a(e),
					(e.headers = e.headers || {}),
					(e.data = o(e.data, e.headers, e.transformRequest)),
					(e.headers = n.merge(
						e.headers.common || {},
						e.headers[e.method] || {},
						e.headers,
					)),
					n.forEach(
						["delete", "get", "head", "post", "put", "patch", "common"],
						function (t) {
							delete e.headers[t];
						},
					),
					(e.adapter || s.adapter)(e).then(
						function (t) {
							return (
								a(e),
								(t.data = o(t.data, t.headers, e.transformResponse)),
								t
							);
						},
						function (t) {
							return (
								i(t) ||
									(a(e),
									t &&
										t.response &&
										(t.response.data = o(
											t.response.data,
											t.response.headers,
											e.transformResponse,
										))),
								Promise.reject(t)
							);
						},
					)
				);
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			e.exports = function (e, t, r) {
				return (
					n.forEach(r, function (r) {
						e = r(e, t);
					}),
					e
				);
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			e.exports = function (e, t) {
				n.forEach(e, function (r, n) {
					n !== t &&
						n.toUpperCase() === t.toUpperCase() &&
						((e[t] = r), delete e[n]);
				});
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(40),
				i = r(35),
				s = r(42),
				a = r(60),
				u = r(61),
				c = r(36);
			e.exports = function (e) {
				return new Promise(function (t, f) {
					var p = e.data,
						l = e.headers;
					n.isFormData(p) && delete l["Content-Type"];
					var h = new XMLHttpRequest();
					if (e.auth) {
						var d = e.auth.username || "",
							m = e.auth.password || "";
						l.Authorization = "Basic " + btoa(d + ":" + m);
					}
					var v = s(e.baseURL, e.url);
					if (
						(h.open(
							e.method.toUpperCase(),
							i(v, e.params, e.paramsSerializer),
							!0,
						),
						(h.timeout = e.timeout),
						(h.onreadystatechange = function () {
							if (
								h &&
								4 === h.readyState &&
								(0 !== h.status ||
									(h.responseURL &&
										0 === h.responseURL.indexOf("file:")))
							) {
								var r =
										"getAllResponseHeaders" in h
											? a(h.getAllResponseHeaders())
											: null,
									n = {
										data:
											e.responseType && "text" !== e.responseType
												? h.response
												: h.responseText,
										status: h.status,
										statusText: h.statusText,
										headers: r,
										config: e,
										request: h,
									};
								o(t, f, n), (h = null);
							}
						}),
						(h.onabort = function () {
							h &&
								(f(c("Request aborted", e, "ECONNABORTED", h)),
								(h = null));
						}),
						(h.onerror = function () {
							f(c("Network Error", e, null, h)), (h = null);
						}),
						(h.ontimeout = function () {
							var t = "timeout of " + e.timeout + "ms exceeded";
							e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
								f(c(t, e, "ECONNABORTED", h)),
								(h = null);
						}),
						n.isStandardBrowserEnv())
					) {
						var g = r(62),
							y =
								(e.withCredentials || u(v)) && e.xsrfCookieName
									? g.read(e.xsrfCookieName)
									: void 0;
						y && (l[e.xsrfHeaderName] = y);
					}
					if (
						("setRequestHeader" in h &&
							n.forEach(l, function (e, t) {
								void 0 === p && "content-type" === t.toLowerCase()
									? delete l[t]
									: h.setRequestHeader(t, e);
							}),
						n.isUndefined(e.withCredentials) ||
							(h.withCredentials = !!e.withCredentials),
						e.responseType)
					)
						try {
							h.responseType = e.responseType;
						} catch (t) {
							if ("json" !== e.responseType) throw t;
						}
					"function" == typeof e.onDownloadProgress &&
						h.addEventListener("progress", e.onDownloadProgress),
						"function" == typeof e.onUploadProgress &&
							h.upload &&
							h.upload.addEventListener("progress", e.onUploadProgress),
						e.cancelToken &&
							e.cancelToken.promise.then(function (e) {
								h && (h.abort(), f(e), (h = null));
							}),
						void 0 === p && (p = null),
						h.send(p);
				});
			};
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
			};
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e, t) {
				return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = [
					"age",
					"authorization",
					"content-length",
					"content-type",
					"etag",
					"expires",
					"from",
					"host",
					"if-modified-since",
					"if-unmodified-since",
					"last-modified",
					"location",
					"max-forwards",
					"proxy-authorization",
					"referer",
					"retry-after",
					"user-agent",
				];
			e.exports = function (e) {
				var t,
					r,
					i,
					s = {};
				return e
					? (n.forEach(e.split("\n"), function (e) {
							if (
								((i = e.indexOf(":")),
								(t = n.trim(e.substr(0, i)).toLowerCase()),
								(r = n.trim(e.substr(i + 1))),
								t)
							) {
								if (s[t] && o.indexOf(t) >= 0) return;
								s[t] =
									"set-cookie" === t
										? (s[t] ? s[t] : []).concat([r])
										: s[t]
										? s[t] + ", " + r
										: r;
							}
					  }),
					  s)
					: s;
			};
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			e.exports = n.isStandardBrowserEnv()
				? (function () {
						var e,
							t = /(msie|trident)/i.test(navigator.userAgent),
							r = document.createElement("a");
						function o(e) {
							var n = e;
							return (
								t && (r.setAttribute("href", n), (n = r.href)),
								r.setAttribute("href", n),
								{
									href: r.href,
									protocol: r.protocol
										? r.protocol.replace(/:$/, "")
										: "",
									host: r.host,
									search: r.search ? r.search.replace(/^\?/, "") : "",
									hash: r.hash ? r.hash.replace(/^#/, "") : "",
									hostname: r.hostname,
									port: r.port,
									pathname:
										"/" === r.pathname.charAt(0)
											? r.pathname
											: "/" + r.pathname,
								}
							);
						}
						return (
							(e = o(window.location.href)),
							function (t) {
								var r = n.isString(t) ? o(t) : t;
								return r.protocol === e.protocol && r.host === e.host;
							}
						);
				  })()
				: function () {
						return !0;
				  };
		},
		function (e, t, r) {
			"use strict";
			var n = r(4);
			e.exports = n.isStandardBrowserEnv()
				? {
						write: function (e, t, r, o, i, s) {
							var a = [];
							a.push(e + "=" + encodeURIComponent(t)),
								n.isNumber(r) &&
									a.push("expires=" + new Date(r).toGMTString()),
								n.isString(o) && a.push("path=" + o),
								n.isString(i) && a.push("domain=" + i),
								!0 === s && a.push("secure"),
								(document.cookie = a.join("; "));
						},
						read: function (e) {
							var t = document.cookie.match(
								new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
							);
							return t ? decodeURIComponent(t[3]) : null;
						},
						remove: function (e) {
							this.write(e, "", Date.now() - 864e5);
						},
				  }
				: {
						write: function () {},
						read: function () {
							return null;
						},
						remove: function () {},
				  };
		},
		function (e, t, r) {
			"use strict";
			var n = r(4),
				o = r(40),
				i = r(42),
				s = r(35),
				a = r(43),
				u = r(44),
				c = r(45).http,
				f = r(45).https,
				p = r(46),
				l = r(73),
				h = r(74),
				d = r(36),
				m = r(41),
				v = /https:?/;
			e.exports = function (e) {
				return new Promise(function (t, r) {
					var g = function (e) {
							t(e);
						},
						y = function (e) {
							r(e);
						},
						b = e.data,
						w = e.headers;
					if (
						(w["User-Agent"] ||
							w["user-agent"] ||
							(w["User-Agent"] = "axios/" + h.version),
						b && !n.isStream(b))
					) {
						if (Buffer.isBuffer(b));
						else if (n.isArrayBuffer(b))
							b = Buffer.from(new Uint8Array(b));
						else {
							if (!n.isString(b))
								return y(
									d(
										"Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
										e,
									),
								);
							b = Buffer.from(b, "utf-8");
						}
						w["Content-Length"] = b.length;
					}
					var x = void 0;
					e.auth &&
						(x = (e.auth.username || "") + ":" + (e.auth.password || ""));
					var C = i(e.baseURL, e.url),
						S = p.parse(C),
						E = S.protocol || "http:";
					if (!x && S.auth) {
						var j = S.auth.split(":");
						x = (j[0] || "") + ":" + (j[1] || "");
					}
					x && delete w.Authorization;
					var R = v.test(E),
						O = R ? e.httpsAgent : e.httpAgent,
						A = {
							path: s(S.path, e.params, e.paramsSerializer).replace(
								/^\?/,
								"",
							),
							method: e.method.toUpperCase(),
							headers: w,
							agent: O,
							agents: { http: e.httpAgent, https: e.httpsAgent },
							auth: x,
						};
					e.socketPath
						? (A.socketPath = e.socketPath)
						: ((A.hostname = S.hostname), (A.port = S.port));
					var T,
						_ = e.proxy;
					if (!_ && !1 !== _) {
						var k = E.slice(0, -1) + "_proxy",
							B = process.env[k] || process.env[k.toUpperCase()];
						if (B) {
							var N = p.parse(B),
								P = process.env.no_proxy || process.env.NO_PROXY,
								F = !0;
							if (P)
								F = !P.split(",")
									.map(function (e) {
										return e.trim();
									})
									.some(function (e) {
										return (
											!!e &&
											("*" === e ||
												("." === e[0] &&
													S.hostname.substr(
														S.hostname.length - e.length,
													) === e) ||
												S.hostname === e)
										);
									});
							if (
								F &&
								((_ = { host: N.hostname, port: N.port }), N.auth)
							) {
								var q = N.auth.split(":");
								_.auth = { username: q[0], password: q[1] };
							}
						}
					}
					if (
						_ &&
						((A.hostname = _.host),
						(A.host = _.host),
						(A.headers.host = S.hostname + (S.port ? ":" + S.port : "")),
						(A.port = _.port),
						(A.path =
							E +
							"//" +
							S.hostname +
							(S.port ? ":" + S.port : "") +
							A.path),
						_.auth)
					) {
						var L = Buffer.from(
							_.auth.username + ":" + _.auth.password,
							"utf8",
						).toString("base64");
						A.headers["Proxy-Authorization"] = "Basic " + L;
					}
					var I = R && (!_ || v.test(_.protocol));
					e.transport
						? (T = e.transport)
						: 0 === e.maxRedirects
						? (T = I ? u : a)
						: (e.maxRedirects && (A.maxRedirects = e.maxRedirects),
						  (T = I ? f : c)),
						e.maxContentLength &&
							e.maxContentLength > -1 &&
							(A.maxBodyLength = e.maxContentLength);
					var U = T.request(A, function (t) {
						if (!U.aborted) {
							var r = t;
							switch (t.headers["content-encoding"]) {
								case "gzip":
								case "compress":
								case "deflate":
									(r =
										204 === t.statusCode
											? r
											: r.pipe(l.createUnzip())),
										delete t.headers["content-encoding"];
							}
							var n = t.req || U,
								i = {
									status: t.statusCode,
									statusText: t.statusMessage,
									headers: t.headers,
									config: e,
									request: n,
								};
							if ("stream" === e.responseType) (i.data = r), o(g, y, i);
							else {
								var s = [];
								r.on("data", function (t) {
									s.push(t),
										e.maxContentLength > -1 &&
											Buffer.concat(s).length > e.maxContentLength &&
											(r.destroy(),
											y(
												d(
													"maxContentLength size of " +
														e.maxContentLength +
														" exceeded",
													e,
													null,
													n,
												),
											));
								}),
									r.on("error", function (t) {
										U.aborted || y(m(t, e, null, n));
									}),
									r.on("end", function () {
										var t = Buffer.concat(s);
										"arraybuffer" !== e.responseType &&
											(t = t.toString(e.responseEncoding)),
											(i.data = t),
											o(g, y, i);
									});
							}
						}
					});
					U.on("error", function (t) {
						U.aborted || y(m(t, e, null, U));
					}),
						e.timeout &&
							U.setTimeout(e.timeout, function () {
								U.abort(),
									y(
										d(
											"timeout of " + e.timeout + "ms exceeded",
											e,
											"ECONNABORTED",
											U,
										),
									);
							}),
						e.cancelToken &&
							e.cancelToken.promise.then(function (e) {
								U.aborted || (U.abort(), y(e));
							}),
						n.isStream(b)
							? b
									.on("error", function (t) {
										y(m(t, e, null, U));
									})
									.pipe(U)
							: U.end(b);
				});
			};
		},
		function (e, t) {
			e.exports = require("assert");
		},
		function (e, t, r) {
			"undefined" == typeof process || "renderer" === process.type
				? (e.exports = r(66))
				: (e.exports = r(68));
		},
		function (e, t, r) {
			function n() {
				var e;
				try {
					e = t.storage.debug;
				} catch (e) {}
				return (
					!e &&
						"undefined" != typeof process &&
						"env" in process &&
						(e = process.env.DEBUG),
					e
				);
			}
			((t = e.exports = r(47)).log = function () {
				return (
					"object" == typeof console &&
					console.log &&
					Function.prototype.apply.call(console.log, console, arguments)
				);
			}),
				(t.formatArgs = function (e) {
					var r = this.useColors;
					if (
						((e[0] =
							(r ? "%c" : "") +
							this.namespace +
							(r ? " %c" : " ") +
							e[0] +
							(r ? "%c " : " ") +
							"+" +
							t.humanize(this.diff)),
						!r)
					)
						return;
					var n = "color: " + this.color;
					e.splice(1, 0, n, "color: inherit");
					var o = 0,
						i = 0;
					e[0].replace(/%[a-zA-Z%]/g, function (e) {
						"%%" !== e && (o++, "%c" === e && (i = o));
					}),
						e.splice(i, 0, n);
				}),
				(t.save = function (e) {
					try {
						null == e
							? t.storage.removeItem("debug")
							: (t.storage.debug = e);
					} catch (e) {}
				}),
				(t.load = n),
				(t.useColors = function () {
					if (
						"undefined" != typeof window &&
						window.process &&
						"renderer" === window.process.type
					)
						return !0;
					if (
						"undefined" != typeof navigator &&
						navigator.userAgent &&
						navigator.userAgent
							.toLowerCase()
							.match(/(edge|trident)\/(\d+)/)
					)
						return !1;
					return (
						("undefined" != typeof document &&
							document.documentElement &&
							document.documentElement.style &&
							document.documentElement.style.WebkitAppearance) ||
						("undefined" != typeof window &&
							window.console &&
							(window.console.firebug ||
								(window.console.exception && window.console.table))) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/firefox\/(\d+)/) &&
							parseInt(RegExp.$1, 10) >= 31) ||
						("undefined" != typeof navigator &&
							navigator.userAgent &&
							navigator.userAgent
								.toLowerCase()
								.match(/applewebkit\/(\d+)/))
					);
				}),
				(t.storage =
					"undefined" != typeof chrome && void 0 !== chrome.storage
						? chrome.storage.local
						: (function () {
								try {
									return window.localStorage;
								} catch (e) {}
						  })()),
				(t.colors = [
					"#0000CC",
					"#0000FF",
					"#0033CC",
					"#0033FF",
					"#0066CC",
					"#0066FF",
					"#0099CC",
					"#0099FF",
					"#00CC00",
					"#00CC33",
					"#00CC66",
					"#00CC99",
					"#00CCCC",
					"#00CCFF",
					"#3300CC",
					"#3300FF",
					"#3333CC",
					"#3333FF",
					"#3366CC",
					"#3366FF",
					"#3399CC",
					"#3399FF",
					"#33CC00",
					"#33CC33",
					"#33CC66",
					"#33CC99",
					"#33CCCC",
					"#33CCFF",
					"#6600CC",
					"#6600FF",
					"#6633CC",
					"#6633FF",
					"#66CC00",
					"#66CC33",
					"#9900CC",
					"#9900FF",
					"#9933CC",
					"#9933FF",
					"#99CC00",
					"#99CC33",
					"#CC0000",
					"#CC0033",
					"#CC0066",
					"#CC0099",
					"#CC00CC",
					"#CC00FF",
					"#CC3300",
					"#CC3333",
					"#CC3366",
					"#CC3399",
					"#CC33CC",
					"#CC33FF",
					"#CC6600",
					"#CC6633",
					"#CC9900",
					"#CC9933",
					"#CCCC00",
					"#CCCC33",
					"#FF0000",
					"#FF0033",
					"#FF0066",
					"#FF0099",
					"#FF00CC",
					"#FF00FF",
					"#FF3300",
					"#FF3333",
					"#FF3366",
					"#FF3399",
					"#FF33CC",
					"#FF33FF",
					"#FF6600",
					"#FF6633",
					"#FF9900",
					"#FF9933",
					"#FFCC00",
					"#FFCC33",
				]),
				(t.formatters.j = function (e) {
					try {
						return JSON.stringify(e);
					} catch (e) {
						return "[UnexpectedJSONParseError]: " + e.message;
					}
				}),
				t.enable(n());
		},
		function (e, t) {
			var r = 1e3,
				n = 6e4,
				o = 60 * n,
				i = 24 * o;
			function s(e, t, r) {
				if (!(e < t))
					return e < 1.5 * t
						? Math.floor(e / t) + " " + r
						: Math.ceil(e / t) + " " + r + "s";
			}
			e.exports = function (e, t) {
				t = t || {};
				var a,
					u = typeof e;
				if ("string" === u && e.length > 0)
					return (function (e) {
						if ((e = String(e)).length > 100) return;
						var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
							e,
						);
						if (!t) return;
						var s = parseFloat(t[1]);
						switch ((t[2] || "ms").toLowerCase()) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return 315576e5 * s;
							case "days":
							case "day":
							case "d":
								return s * i;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return s * o;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return s * n;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return s * r;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return s;
							default:
								return;
						}
					})(e);
				if ("number" === u && !1 === isNaN(e))
					return t.long
						? s((a = e), i, "day") ||
								s(a, o, "hour") ||
								s(a, n, "minute") ||
								s(a, r, "second") ||
								a + " ms"
						: (function (e) {
								if (e >= i) return Math.round(e / i) + "d";
								if (e >= o) return Math.round(e / o) + "h";
								if (e >= n) return Math.round(e / n) + "m";
								if (e >= r) return Math.round(e / r) + "s";
								return e + "ms";
						  })(e);
				throw new Error(
					"val is not a non-empty string or a valid number. val=" +
						JSON.stringify(e),
				);
			};
		},
		function (e, t, r) {
			var n = r(69),
				o = r(1);
			((t = e.exports = r(47)).init = function (e) {
				e.inspectOpts = {};
				for (var r = Object.keys(t.inspectOpts), n = 0; n < r.length; n++)
					e.inspectOpts[r[n]] = t.inspectOpts[r[n]];
			}),
				(t.log = function () {
					return process.stderr.write(o.format.apply(o, arguments) + "\n");
				}),
				(t.formatArgs = function (e) {
					var r = this.namespace;
					if (this.useColors) {
						var n = this.color,
							o = "[3" + (n < 8 ? n : "8;5;" + n),
							i = "  " + o + ";1m" + r + " [0m";
						(e[0] = i + e[0].split("\n").join("\n" + i)),
							e.push(o + "m+" + t.humanize(this.diff) + "[0m");
					} else
						e[0] =
							(t.inspectOpts.hideDate
								? ""
								: new Date().toISOString() + " ") +
							r +
							" " +
							e[0];
				}),
				(t.save = function (e) {
					null == e ? delete process.env.DEBUG : (process.env.DEBUG = e);
				}),
				(t.load = s),
				(t.useColors = function () {
					return "colors" in t.inspectOpts
						? Boolean(t.inspectOpts.colors)
						: n.isatty(process.stderr.fd);
				}),
				(t.colors = [6, 2, 3, 4, 5, 1]);
			try {
				var i = r(70);
				i &&
					i.level >= 2 &&
					(t.colors = [
						20,
						21,
						26,
						27,
						32,
						33,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						56,
						57,
						62,
						63,
						68,
						69,
						74,
						75,
						76,
						77,
						78,
						79,
						80,
						81,
						92,
						93,
						98,
						99,
						112,
						113,
						128,
						129,
						134,
						135,
						148,
						149,
						160,
						161,
						162,
						163,
						164,
						165,
						166,
						167,
						168,
						169,
						170,
						171,
						172,
						173,
						178,
						179,
						184,
						185,
						196,
						197,
						198,
						199,
						200,
						201,
						202,
						203,
						204,
						205,
						206,
						207,
						208,
						209,
						214,
						215,
						220,
						221,
					]);
			} catch (e) {}
			function s() {
				return process.env.DEBUG;
			}
			(t.inspectOpts = Object.keys(process.env)
				.filter(function (e) {
					return /^debug_/i.test(e);
				})
				.reduce(function (e, t) {
					var r = t
							.substring(6)
							.toLowerCase()
							.replace(/_([a-z])/g, function (e, t) {
								return t.toUpperCase();
							}),
						n = process.env[t];
					return (
						(n =
							!!/^(yes|on|true|enabled)$/i.test(n) ||
							(!/^(no|off|false|disabled)$/i.test(n) &&
								("null" === n ? null : Number(n)))),
						(e[r] = n),
						e
					);
				}, {})),
				(t.formatters.o = function (e) {
					return (
						(this.inspectOpts.colors = this.useColors),
						o
							.inspect(e, this.inspectOpts)
							.split("\n")
							.map(function (e) {
								return e.trim();
							})
							.join(" ")
					);
				}),
				(t.formatters.O = function (e) {
					return (
						(this.inspectOpts.colors = this.useColors),
						o.inspect(e, this.inspectOpts)
					);
				}),
				t.enable(s());
		},
		function (e, t) {
			e.exports = require("tty");
		},
		function (e, t, r) {
			"use strict";
			const n = r(71),
				o = r(72),
				i = process.env;
			let s;
			function a(e) {
				return (function (e) {
					return (
						0 !== e && {
							level: e,
							hasBasic: !0,
							has256: e >= 2,
							has16m: e >= 3,
						}
					);
				})(
					(function (e) {
						if (!1 === s) return 0;
						if (o("color=16m") || o("color=full") || o("color=truecolor"))
							return 3;
						if (o("color=256")) return 2;
						if (e && !e.isTTY && !0 !== s) return 0;
						const t = s ? 1 : 0;
						if ("win32" === process.platform) {
							const e = n.release().split(".");
							return Number(process.versions.node.split(".")[0]) >= 8 &&
								Number(e[0]) >= 10 &&
								Number(e[2]) >= 10586
								? Number(e[2]) >= 14931
									? 3
									: 2
								: 1;
						}
						if ("CI" in i)
							return [
								"TRAVIS",
								"CIRCLECI",
								"APPVEYOR",
								"GITLAB_CI",
							].some((e) => e in i) || "codeship" === i.CI_NAME
								? 1
								: t;
						if ("TEAMCITY_VERSION" in i)
							return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(
								i.TEAMCITY_VERSION,
							)
								? 1
								: 0;
						if ("truecolor" === i.COLORTERM) return 3;
						if ("TERM_PROGRAM" in i) {
							const e = parseInt(
								(i.TERM_PROGRAM_VERSION || "").split(".")[0],
								10,
							);
							switch (i.TERM_PROGRAM) {
								case "iTerm.app":
									return e >= 3 ? 3 : 2;
								case "Apple_Terminal":
									return 2;
							}
						}
						return /-256(color)?$/i.test(i.TERM)
							? 2
							: /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
									i.TERM,
							  ) || "COLORTERM" in i
							? 1
							: (i.TERM, t);
					})(e),
				);
			}
			o("no-color") || o("no-colors") || o("color=false")
				? (s = !1)
				: (o("color") ||
						o("colors") ||
						o("color=true") ||
						o("color=always")) &&
				  (s = !0),
				"FORCE_COLOR" in i &&
					(s =
						0 === i.FORCE_COLOR.length ||
						0 !== parseInt(i.FORCE_COLOR, 10)),
				(e.exports = {
					supportsColor: a,
					stdout: a(process.stdout),
					stderr: a(process.stderr),
				});
		},
		function (e, t) {
			e.exports = require("os");
		},
		function (e, t, r) {
			"use strict";
			e.exports = (e, t) => {
				t = t || process.argv;
				const r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
					n = t.indexOf(r + e),
					o = t.indexOf("--");
				return -1 !== n && (-1 === o || n < o);
			};
		},
		function (e, t) {
			e.exports = require("zlib");
		},
		function (e) {
			e.exports = JSON.parse(
				'{"_from":"axios@^0.19.2","_id":"axios@0.19.2","_inBundle":false,"_integrity":"sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"axios@^0.19.2","name":"axios","escapedName":"axios","rawSpec":"^0.19.2","saveSpec":null,"fetchSpec":"^0.19.2"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.19.2.tgz","_shasum":"3ea36c5d8818d0d5f8a8a97a6d36b86cdc00cb27","_spec":"axios@^0.19.2","_where":"/Users/ZeeEssDoubleU/Desktop/git-the-issue","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"1.5.10"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","version":"0.19.2"}',
			);
		},
		function (e, t, r) {
			"use strict";
			var n = r(49);
			function o(e) {
				if ("function" != typeof e)
					throw new TypeError("executor must be a function.");
				var t;
				this.promise = new Promise(function (e) {
					t = e;
				});
				var r = this;
				e(function (e) {
					r.reason || ((r.reason = new n(e)), t(r.reason));
				});
			}
			(o.prototype.throwIfRequested = function () {
				if (this.reason) throw this.reason;
			}),
				(o.source = function () {
					var e;
					return {
						token: new o(function (t) {
							e = t;
						}),
						cancel: e,
					};
				}),
				(e.exports = o);
		},
		function (e, t, r) {
			"use strict";
			e.exports = function (e) {
				return function (t) {
					return e.apply(null, t);
				};
			};
		},
		function (e, t, r) {
			"use strict";
			r.r(t);
			var n = r(7),
				o = r.n(n),
				i = r(34),
				s = r.n(i);
			var a = r(33),
				u = r.n(a);
			async function c(e, t, r) {
				try {
					const n = 604800,
						i = await o.a.sign(
							{ value: t },
							process.env.REACT_APP_JWT_SECRET,
							{ expiresIn: n },
						);
					return u.a.serialize(e, i, {
						secure: "true" !== process.env.NETLIFY_DEV,
						httpOnly: r,
						path:
							"true" !== process.env.NETLIFY_DEV
								? process.env.REACT_APP_PROD_URL
								: "/",
						maxAge: n,
					});
				} catch (e) {
					return (
						console.error("Error creating cookie:", e.message),
						{
							statusCode: e.statusCode || 500,
							body: JSON.stringify({ error: e.message }),
						}
					);
				}
			}
			exports.handler = async (e, t) => {
				const { code: r, state: n } = e.queryStringParameters,
					{ referer: i, host: a } = e.headers;
				try {
					if (!r)
						throw new Error(
							"Code parameter missing.  Something went wrong with authorization.  Go back and try again.",
						);
					o.a.verify(n, process.env.REACT_APP_JWT_SECRET, (e, t) => {
						if (e)
							throw new Error(
								"Invalid auth state parameter.  Something went wrong with authorization.  Go back and try again.",
							);
					});
					const e = await (async function (e) {
							try {
								const t = await s()({
										method: "POST",
										url:
											process.env.REACT_APP_OAUTH_URL +
											"/access_token",
										headers: { Accept: "application/json" },
										data: {
											client_id:
												process.env.REACT_APP_OAUTH_CLIENT_ID,
											client_secret:
												process.env.REACT_APP_OAUTH_CLIENT_SECRET,
											code: e,
										},
									}),
									{ access_token: r } = t.data;
								return r;
							} catch (e) {
								return (
									console.error(
										"Error getting access token:",
										e.message,
									),
									{
										statusCode: e.statusCode || 500,
										body: JSON.stringify({ error: e.message }),
									}
								);
							}
						})(r),
						t = await (async function (e) {
							try {
								const t = await s()({
										method: "GET",
										url: "https://api.github.com/user",
										headers: {
											Accept: "application/json",
											Authorization: "bearer " + e,
										},
									}),
									{ login: r, email: n } = t.data;
								return { login: r, email: n };
							} catch (e) {
								return (
									console.error("Error getting user data:", e.message),
									{
										statusCode: e.statusCode || 500,
										body: JSON.stringify({ error: e.message }),
									}
								);
							}
						})(e),
						u = await c("access_token", e, !0);
					return {
						statusCode: 302,
						headers: {
							"Set-Cookie": [u, await c("user", t, !1)],
							"Cache-Control": "no-cache",
							"Content-Type": "application/json",
							Location: i || a,
						},
					};
				} catch (e) {
					return (
						console.error("Error getting access token:", e.message),
						{
							statusCode: e.statusCode || 500,
							body: JSON.stringify({ error: e.message }),
						}
					);
				}
			};
		},
	]),
);
