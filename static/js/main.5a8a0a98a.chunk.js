(this.webpackJsonpreactjs = this.webpackJsonpreactjs || []).push([
    [0], {
        16: function(e, t, c) {},
        28: function(e, t, c) {
            "use strict";
            c.r(t);
            var s = c(1),
                n = c.n(s),
                a = c(8),
                i = c.n(a),
                l = c(5),
                o = c.n(l),
                r = c(9),
                j = c(2),
                d = (c(16), c(0)),
                h = function(e) {
                    var t = e.preloader;
                    return Object(d.jsx)("div", {
                        className: "preloader",
                        style: t ? {
                            display: "block"
                        } : {
                            display: "none"
                        },
                        children: Object(d.jsxs)("div", {
                            className: "preloader__wrap",
                            children: [Object(d.jsxs)("div", {
                                className: "circle-pulse",
                                children: [Object(d.jsx)("div", {
                                    className: "circle-pulse__1"
                                }), Object(d.jsx)("div", {
                                    className: "circle-pulse__2"
                                })]
                            }), Object(d.jsx)("div", {
                                className: "preloader__progress",
                                children: Object(d.jsx)("span", {})
                            })]
                        })
                    })
                },
                b = c(10),
                m = c.n(b),
                x = function(e) {
                    var t = e.logo,
                        c = e.name,
                        s = e.ctk,
                        n = e.stk,
                        a = function(e) {
                            window.getSelection().removeAllRanges();
                            var t = document.createRange();
                            t.selectNode("string" === typeof e ? document.getElementById(e) : e), window.getSelection().addRange(t), document.execCommand("copy"), window.getSelection().removeAllRanges(), m.a.fire({
                                title: "Th\xf4ng b\xe1o",
                                text: "Sao ch\xe9p th\xe0nh c\xf4ng",
                                icon: "success",
                                confirmButtonText: "T\xf4i \u0111\xe3 hi\u1ec3u",
                                confirmButtonColor: "#3085d6"
                            })
                        };
                    return Object(d.jsx)("div", {
                        className: "col-12 col-lg-6",
                        children: Object(d.jsxs)("div", {
                            className: "case-item",
                            children: [Object(d.jsx)("img", {
                                className: "case-item__icon",
                                src: "/assets/images/bank/".concat(t, ".png"),
                                alt: ""
                            }), Object(d.jsxs)("div", {
                                children: [Object(d.jsx)("h3", {
                                    className: "title title--h4",
                                    children: c
                                }), Object(d.jsx)("p", {
                                    className: "case-item__caption",
                                    id: s,
                                    onClick: function() {
                                        return a(s)
                                    },
                                    children: s
                                }), Object(d.jsx)("p", {
                                    className: "case-item__caption",
                                    id: n,
                                    onClick: function() {
                                        return a(n)
                                    },
                                    children: n
                                })]
                            })]
                        })
                    })
                };
            var g = function() {
                    var e = Object(s.useState)(!0),
                        t = Object(j.a)(e, 2),
                        c = t[0],
                        n = t[1],
                        a = Object(s.useState)(null),
                        i = Object(j.a)(a, 2),
                        l = i[0],
                        b = i[1],
                        m = Object(s.useState)([]),
                        g = Object(j.a)(m, 2),
                        O = g[0],
                        p = g[1],
                        u = function() {
                            var e = Object(r.a)(o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, fetch("https://api.ipify.org?format=json").then((function(e) {
                                                return e.json()
                                            })).then((function(e) {
                                                b(e.ip), n(!1), p([{
                                                    logo: "github",
                                                    name: "Github",
                                                    ctk: "Trần Anh Tuấn",
                                                    stk: "@trananhtuan0309"
                                                }, {
                                                    logo: "facebook",
                                                    name: "Facebook",
                                                    ctk: "Trần Anh Tuấn",
                                                    stk: "@use.milan"
                                                }, {
                                                    logo: "instagram",
                                                    name: "Instagram",
                                                    ctk: "Milan Tran",
                                                    stk: "@milan_trann"
                                                }, {
                                                    logo: "telegram",
                                                    name: "Telegram",
                                                    ctk: "Trần Anh Tuấn",
                                                    stk: "@tranmilan"
                                                }, {
                                                    logo: "paypal",
                                                    name: "Paypal",
                                                    ctk: "Trần Anh Tuấn",
                                                    stk: "@minecraft.milan123@gmail.com"
                                                }, {
                                                    logo: "snap",
                                                    name: "Snapchat",
                                                    ctk: "Trần Tuấn",
                                                    stk: "@tuan_03092004"
                                                }])
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(s.useEffect)((function() {
                        console.log("%c Coder: Trần Anh Tuấn %c", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;"), console.log("%c Contact: https://www.facebook.com/use.milan %c", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:24px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;"), document.title = "Trần Anh Tuấn - Th\xf4ng tin c\xe1 nh\xe2n", u()
                    }), []), Object(d.jsxs)("div", {
                        children: [Object(d.jsx)(h, {
                            preloader: c
                        }), Object(d.jsxs)("main", {
                            className: "main",
                            children: [Object(d.jsx)("div", {
                                className: "header-image",
                                children: Object(d.jsx)("div", {
                                    className: "js-parallax",
                                    style: {
                                        backgroundImage: "url(https://i.pinimg.com/originals/e8/c4/99/e8c4996bdf4f2779fe7bca47df8a3b55.jpg)"
                                    }
                                })
                            }), Object(d.jsxs)("div", {
                                className: "container gutter-top",
                                children: [Object(d.jsxs)("header", {
                                    className: "header box",
                                    children: [Object(d.jsxs)("div", {
                                        className: "header__left",
                                        children: [Object(d.jsx)("div", {
                                            className: "header__photo",
                                            children: Object(d.jsx)("img", {
                                                className: "header__photo-img",
                                                src: "https://vn-test-11.slatic.net/p/fd72711a1641571e8684323b2bf873bd.jpg",
                                                alt: "Trần Anh Tuấn"
                                            })
                                        }), Object(d.jsxs)("div", {
                                            className: "header__base-info",
                                            children: [Object(d.jsx)("h4", {
                                                className: "title titl--h4",
                                                children: "Trần Anh Tuấn"
                                            }), Object(d.jsx)("div", {
                                                className: "status",
                                                children: "Developer"
                                            }), Object(d.jsxs)("ul", {
                                                className: "header__social",
                                                children: [Object(d.jsx)("li", {
                                                    children: Object(d.jsx)("a", {
                                                        href: "https://www.facebook.com/use.milan",
                                                        title: "Facebook",
                                                        target: "_blank",
                                                        children: Object(d.jsx)("i", {
                                                            className: "font-icon icon-facebook1"
                                                        })
                                                    })
                                                }), Object(d.jsx)("li", {
                                                    children: Object(d.jsx)("a", {
                                                        href: "https://www.instagram.com/milan_trann",
                                                        title: "Instagram",
                                                        target: "_blank",
                                                        children: Object(d.jsx)("i", {
                                                            className: "font-icon icon-instagram1"
                                                        })
                                                    })
                                                }), Object(d.jsx)("li", {
                                                    children: Object(d.jsx)("a", {
                                                        href: "https://github.com/trananhtuan0309/",
                                                        title: "Github",
                                                        target: "_blank",
                                                        children: Object(d.jsx)("i", {
                                                            className: "font-icon icon-github"
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), Object(d.jsxs)("div", {
                                        className: "header__right",
                                        children: [Object(d.jsxs)("ul", {
                                            className: "header__contact",
                                            children: [Object(d.jsxs)("li", {
                                                children: [Object(d.jsx)("span", {
                                                    className: "overhead",
                                                    children: "Email"
                                                }), "contact.trananhtuan@"]
                                            }), Object(d.jsxs)("li", {
                                                children: [Object(d.jsx)("span", {
                                                    className: "overhead",
                                                    children: "Phone Number"
                                                }), "+4** *******56"]
                                            })]
                                        }), Object(d.jsxs)("ul", {
                                            className: "header__contact",
                                            children: [Object(d.jsxs)("li", {
                                                children: [Object(d.jsx)("span", {
                                                    className: "overhead",
                                                    children: "Date Of Birth"
                                                }), "3-9-200*"]
                                            }), Object(d.jsxs)("li", {
                                                children: [Object(d.jsx)("span", {
                                                    className: "overhead",
                                                    children: "Adress"
                                                }), "Nghệ An, Việt Nam"]
                                            })]
                                        })]
                                    })]
                                }), Object(d.jsx)("div", {
                                    className: "row sticky-parent",
                                    children: Object(d.jsxs)("div", {
                                        className: "col-12 col-md-12 col-lg-12",
                                        children: [Object(d.jsx)("div", {
                                            className: "box box-content",
                                            id: "content",
                                            children: Object(d.jsx)("div", {
                                                className: "content",
                                                children: Object(d.jsxs)("div", {
                                                    id: "about-tab",
                                                    className: "tabcontent active",
                                                    children: [Object(d.jsx)("div", {
                                                        className: "pb-0 pb-sm-2",
                                                        children: Object(d.jsx)("h1", {
                                                            className: "title title--h1 first-title title__separate",
                                                            children: "Contact"
                                                        })
                                                    }), Object(d.jsx)("div", {
                                                        className: "mt-1",
                                                        children: Object(d.jsx)("div", {
                                                            className: "row",
                                                            children: O.length > 0 ? O.map((function(e, t) {
                                                                return Object(d.jsx)(x, {
                                                                    logo: e.logo,
                                                                    name: e.name,
                                                                    ctk: e.ctk,
                                                                    stk: e.stk
                                                                }, t)
                                                            })) : Object(d.jsx)("div", {
                                                                className: "col-md-12",
                                                                children: Object(d.jsx)("p", {
                                                                    className: "text-center text-warning",
                                                                    children: "Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng n\xe0o!"
                                                                })
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        }), Object(d.jsxs)("footer", {
                                            className: "footer",
                                            children: ["IP truy c\u1eadp : ", l]
                                        })]
                                    })
                                })]
                            })]
                        }), Object(d.jsx)("div", {
                            className: "back-to-top"
                        })]
                    })
                },
                O = function(e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 29)).then((function(t) {
                        var c = t.getCLS,
                            s = t.getFID,
                            n = t.getFCP,
                            a = t.getLCP,
                            i = t.getTTFB;
                        c(e), s(e), n(e), a(e), i(e)
                    }))
                };
            i.a.render(Object(d.jsx)(n.a.StrictMode, {
                children: Object(d.jsx)(g, {})
            }), document.getElementById("root")), O()
        }
    },
    [
        [28, 1, 2]
    ]
]);
// console.log(`                                            
//_____ ____      _    _   _      _    _   _ _   _   _____ _   _   _    _   _ 
//|_   _|  _ \    / \  | \ | |    / \  | \ | | | | | |_   _| | | | / \  | \ | |
//  | | | |_) |  / _ \ |  \| |   / _ \ |  \| | |_| |   | | | | | |/ _ \ |  \| |
//  | | |  _ <  / ___ \| |\  |  / ___ \| |\  |  _  |   | | | |_| / ___ \| |\  |
//  |_| |_| \_\/_/   \_\_| \_| /_/   \_\_| \_|_| |_|   |_|  \___/_/   \_\_| \_|
// Source code by :  Trần Anh Tuấn
// Facebook : https://www.facebook.com/use.milan/
// `);
