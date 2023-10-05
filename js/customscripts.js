/*
 * Theme Name: SmallBiz Startup Pro
*/

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    $('.primary-navigation').append('<div id="mobile-menu-overlay" />');

    $('.toggle-mobile-menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('body').toggleClass('mobile-menu-active');

        if ( $('body').hasClass('mobile-menu-active') ) {
            if ( $(document).height() > $(window).height() ) {
                var scrollTop = ( $('html').scrollTop() ) ? $('html').scrollTop() : $('body').scrollTop();
                $('html').addClass('noscroll').css( 'top', -scrollTop );
            }
            $('#mobile-menu-overlay').fadeIn();
        } else {
            var scrollTop = parseInt( $('html').css('top') );
            $('html').removeClass('noscroll');
            $('html,body').scrollTop( -scrollTop );
            $('#mobile-menu-overlay').fadeOut();
        }
    });
}).on('click', function(event) {

    var $target = jQuery(event.target);
    if ( ( $target.hasClass("publishable-icon") && $target.parent().hasClass("toggle-caret") ) ||  $target.hasClass("toggle-caret") ) {// allow clicking on menu toggles
        return;
    }
    jQuery('body').removeClass('mobile-menu-active');
    jQuery('html').removeClass('noscroll');
    jQuery('#mobile-menu-overlay').fadeOut();
});

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
    
    function mtsDropdownMenu() {
        var wWidth = $(window).width();
        if(wWidth > 865) {
            $('#navigation ul.sub-menu, #navigation ul.children').hide();
            var timer;
            var delay = 100;
            $('#navigation li').hover( 
              function() {
                var $this = $(this);
                timer = setTimeout(function() {
                    $this.children('ul.sub-menu, ul.children').slideDown('fast');
                }, delay);
                
              },
              function() {
                $(this).children('ul.sub-menu, ul.children').hide();
                clearTimeout(timer);
              }
            );
        } else {
            $('#navigation li').unbind('hover');
            $('#navigation li.active > ul.sub-menu, #navigation li.active > ul.children').show();
        }
    }

    mtsDropdownMenu();

    $(window).resize(function() {
        mtsDropdownMenu();
    });
});

/*---------------------------------------------------
/*  Vertical menus toggles
/* -------------------------------------------------*/
jQuery(document).ready(function($) {

    $('.widget_nav_menu, #navigation .menu').addClass('toggle-menu');
    $('.toggle-menu ul.sub-menu, .toggle-menu ul.children').addClass('toggle-submenu');
    $('.toggle-menu ul.sub-menu').parent().addClass('toggle-menu-item-parent');

    $('.toggle-menu .toggle-menu-item-parent').append('<span class="toggle-caret"><i class="publishable-icon icon-plus"></i></span>');

    $('.toggle-caret').click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').children('.toggle-submenu').slideToggle('fast');
    });
});

/*----------------------------------------------------
/* Back to top smooth scrolling
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
    jQuery('a[href=#top]').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});

// Slider & Testimonials Scripts

 $('#section__slider .owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            dots:false,
            nav:false,
            mouseDrag:false,
            autoplay:true,
            animateOut: 'zoomOut',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })  

  $('#ct-sec5 .owl-carousel').owlCarousel({
                  loop:true,
                  margin:0,
                  dots:false,
                  nav:false,
                  mouseDrag:true,
                  autoplay:true,
                  animateOut: 'zoomOut',
                  responsive:{
                    0:{
                      items:1
                    },
                    600:{
                      items:1
                    },
                    1000:{
                      items:1
                    }
                  }
                })


$('#sb-sec6 .owl-carousel').owlCarousel({
                loop:true,
                margin:40,
                dots:false,
                nav:false,
                mouseDrag:true,
                autoplay:true,
                animateOut: 'zoomOut',
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            }) 
$('main#sb--smallbiz-inner_box .all-services .owl-carousel').owlCarousel({
                loop:true,
                margin:5,
                dots:false,
                nav:false,
                mouseDrag:true,
                autoplay:true,
                animateOut: 'zoomOut',
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:8
                    }
                }
            }) 


// For Cubic Bezier Animations

! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ae, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? oe.parseJSON(n) : n)
                } catch (i) {}
                Se.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            c = (oe.cssNumber[t] || "px" !== l && +u) && Ne.exec(oe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }

    function d(e, t, n, r, i) {
        for (var o, s, a, u, l, d, p = t.createDocumentFragment(), h = [], m = 0, g = e.length; m < g; m++)
            if (o = e[m], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Oe.test(o)) {
            for (s = s || p.appendChild(t.createElement("div")), a = (Ie.exec(o) || ["", ""])[1].toLowerCase(), u = Fe[a] || Fe._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], d = u[0]; d--;) s = s.lastChild;
            oe.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(o));
        for (p.textContent = "", m = 0; o = h[m++];)
            if (r && oe.inArray(o, r) > -1) i && i.push(o);
            else if (l = oe.contains(o.ownerDocument, o), s = c(p.appendChild(o), "script"), l && f(s), n)
            for (d = 0; o = s[d++];) He.test(o.type || "") && n.push(o);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function g(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) g(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
        else if (!i) return e;
        return 1 === o && (s = i, i = function(e) {
            return oe().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, i, r, n)
        })
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), s = Ee.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) oe.event.add(t, i, l[i][n])
            }
            Se.hasData(e) && (a = Se.access(e), u = oe.extend({}, a), Se.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && $e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = J.apply([], t);
        var i, o, s, a, u, l, f = 0,
            p = e.length,
            h = p - 1,
            m = t[0],
            g = oe.isFunction(m);
        if (g || p > 1 && "string" == typeof m && !re.checkClone && _e.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            g && (t[0] = m.call(this, i, o.html())), T(o, t, n, r)
        });
        if (p && (i = d(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = oe.map(c(i, "script"), y), a = s.length; f < p; f++) u = i, f !== h && (u = oe.clone(u, !0, !0), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
            if (a)
                for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; f < a; f++) u = s[f], He.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Xe, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function k(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            r = oe.css(n[0], "display");
        return n.detach(), r
    }

    function E(e) {
        var t = G,
            n = Ve[e];
        return n || (n = k(e, t), "none" !== n && n || (Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), n = k(e, t), Ue.detach()), Ve[e] = n), n
    }

    function S(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Qe(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !re.pixelMarginRight() && Ge.test(s) && Ye.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in rt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in rt) return e
    }

    function D(e, t, n) {
        var r = Ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function N(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += oe.css(e, n + Le[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + Le[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + Le[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + Le[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + Le[o] + "Width", !0, i)));
        return s
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Qe(e),
            s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = S(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ge.test(i)) return i;
            r = s && (re.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function q(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) r = e[s], r.style && (o[s] = Ee.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && qe(r) && (o[s] = Ee.access(r, "olddisplay", E(r.nodeName)))) : (i = qe(r), "none" === n && i || Ee.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (s = 0; s < a; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function I() {
        return e.setTimeout(function() {
            it = void 0
        }), it = oe.now()
    }

    function H(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Le[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function F(e, t, n) {
        for (var r, i = (M.tweeners[t] || []).concat(M.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            d = {},
            p = e.style,
            h = e.nodeType && qe(e),
            m = Ee.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = oe.css(e, "display"), c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], st.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                d[r] = m && m[r] || oe.style(e, r)
            } else l = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = Ee.access(e, "fxshow", {}), o && (m.hidden = !h), h ? oe(e).show() : f.done(function() {
                oe(e).hide()
            }), f.done(function() {
                var t;
                Ee.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (r in d) s = F(h ? m[r] : 0, r, f), r in m || (m[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = oe.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function M(e, t, n) {
        var r, i, o = 0,
            s = M.prefilters.length,
            a = oe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = it || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (P(c, l.opts.specialEasing); o < s; o++)
            if (r = M.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
        return oe.map(c, F, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function W(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === St;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function _(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e
    }

    function z(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function X(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, r) {
        var i;
        if (oe.isArray(t)) oe.each(t, function(t, i) {
            n || Nt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else
            for (i in t) U(e + "[" + i + "]", t[i], n, r)
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        G = e.document,
        Q = Y.slice,
        J = Y.concat,
        K = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        ie = "2.2.4",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(ue, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++);
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, s = 0,
                a = [];
            if (n(e))
                for (i = e.length; s < i; s++) o = t(e[s], s, r), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, r), null != o && a.push(o);
            return J.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return r = Q.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(Q.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i
        },
        now: Date.now,
        support: re
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, p, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== q && L(t), t = t || q, I)) {
                if (11 !== m && (l = ve.exec(e)))
                    if (i = l[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (h && (s = h.getElementById(i)) && P(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (w.qsa && !X[e + " "] && (!H || !H.test(e))) {
                    if (1 !== m) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = M), f = E(e), o = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + d(f[o]);
                        p = f.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n
                    } catch (g) {} finally {
                        a === M && t.removeAttribute("id")
                    }
                }
            }
            return j(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l, c = [B, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[M] || (t[M] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === B && a[1] === o) return c[2] = a[2];
                            if (u[r] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, d = [],
                    p = [],
                    h = s.length,
                    v = r || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : g(v, d, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = g(x, p), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = g(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = p(function(e) {
                    return e === t
                }, s, !0), l = p(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; a < i; a++)
                if (n = T.relative[e[a].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                        for (r = ++a; r < i && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, d, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        x = r || o && T.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (A = s === q || s || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === q || (L(c), a = !I); d = e[f++];)
                                if (d(c, s || q, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !d && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(m, v, s, a);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(u));
                            v = g(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, A = y), m
                };
            return i ? r(s) : s
        }
        var b, w, T, C, k, E, S, j, A, D, N, L, q, $, I, H, F, O, P, M = "sizzle" + 1 * new Date,
            R = e.document,
            B = 0,
            W = 0,
            _ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (N = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                L()
            };
        try {
            K.apply(G = Z.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, $ = q.documentElement, I = !k(q), (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(q.getElementsByClassName), w.getById = i(function(e) {
                return $.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, F = [], H = [], (w.qsa = ge.test(q.querySelectorAll)) && (i(function(e) {
                $.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]")
            }), i(function(e) {
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = ge.test(O = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", oe)
            }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), t = ge.test($.compareDocumentPosition), P = t || ge.test($.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === R && P(R, e) ? -1 : t === q || t.ownerDocument === R && P(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === R ? -1 : u[r] === R ? 1 : 0
            }, q) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && I && !X[n + " "] && (!F || !F.test(n)) && (!H || !H.test(n))) try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== r ? r : w.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (N = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), N) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            x = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (d = g, f = d[M] || (d[M] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === B && l[1], x = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (x = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [B, p, x];
                                        break
                                    }
                            } else if (y && (d = t, f = d[M] || (d[M] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === B && l[1], x = p), x === !1)
                                for (;
                                    (d = ++p && d && d[m] || (x = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (f = d[M] || (d[M] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [B, x]), d !== t)););
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(ae, "$1"));
                    return i[M] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === $
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, E = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) !(i = pe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, S = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[M] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, j = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && E(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && I && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
                        break
                    }
            }
            return (l || S(e, f))(r, t, !I, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!N, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var fe = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && oe(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        de = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        pe = oe.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        me = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || ge, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(r[1]) && oe.isPlainObject(t))
                        for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = G.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ye.prototype = oe.fn, ge = oe(G);
    var xe = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return de((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return de(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (be[e] || oe.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, r, i, s = [],
            a = [],
            u = -1,
            l = function() {
                for (i = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function r(t) {
                        oe.each(t, function(t, n) {
                            oe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var n;
                            (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return i = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return i = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, oe.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : oe.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var Te;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return Te || (Te = oe.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
    }, oe.ready.promise();
    var Ce = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === oe.type(n)) {
                i = !0;
                for (a in n) Ce(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(oe(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        ke = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!ke(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(we) || [])), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ee = new a,
        Se = new a,
        je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Se.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function(e, t) {
            Se.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Se.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Se.set(this, e)
            }) : Ce(this, function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = Se.get(o, e) || Se.get(o, e.replace(Ae, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (r = oe.camelCase(e), n = Se.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else r = oe.camelCase(e), this.each(function() {
                    var n = Se.get(this, r);
                    Se.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Se.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Ee.get(e, t), n && (!r || oe.isArray(n) ? r = Ee.access(e, t, oe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = oe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Ee.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        qe = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        $e = /^(?:checkbox|radio)$/i,
        Ie = /<([\w:-]+)/,
        He = /^$|\/(?:java|ecma)script/i,
        Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
    var Oe = /<|&#?\w+;/;
    ! function() {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Pe = /^key/,
        Me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Re = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, m, g = Ee.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(we) || [""], l = t.length; l--;) a = Re.exec(t[l]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (f = oe.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = oe.event.special[p] || {}, c = oe.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && oe.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), oe.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, d, p, h, m, g = Ee.hasData(e) && Ee.get(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(we) || [""], l = t.length; l--;)
                    if (a = Re.exec(t[l]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = oe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) oe.event.remove(e, p + t[l], n, r, !0);
                oe.isEmptyObject(u) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, r, i, o, s = [],
                a = Q.call(arguments),
                u = (Ee.get(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Me.test(i) ? this.mouseHooks : Pe.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== m() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, r) {
            return g(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return g(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        We = /<script|<style|<link/i,
        _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Be, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a), o = c(e), r = 0, i = o.length; r < i; r++) w(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || c(e), s = s || c(a), r = 0, i = o.length; r < i; r++) b(o[r], s[r]);
                else b(e, a);
            return s = c(a, "script"), s.length > 0 && f(s, !u && c(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ke(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !We.test(e) && !Fe[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), oe(i[s])[t](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ue, Ve = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Ge = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
        Qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Je = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        Ke = G.documentElement;
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Ke.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(re, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelMarginRight: function() {
                return null == r && t(), i
            },
            reliableMarginLeft: function() {
                return null == r && t(), o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ke.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        rt = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = oe.camelCase(t),
                    u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ne.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = S(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function() {
                    return L(e, t, r)
                }) : L(e, t, r)
            },
            set: function(e, n, r) {
                var i, o = r && Qe(e),
                    s = r && N(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (i = Ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), D(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = j(re.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), oe.cssHooks.marginRight = j(re.reliableMarginRight, function(e, t) {
        if (t) return Je(e, {
            display: "inline-block"
        }, S, [e, "marginRight"])
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = D)
    }), oe.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (r = Qe(e), i = t.length; s < i; s++) o[t[s]] = oe.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                qe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = $.prototype.init, oe.fx.step = {};
    var it, ot, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    oe.Animation = oe.extend(M, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, Ne.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t)
            },
            prefilters: [O],
            prefilter: function(e, t) {
                t ? M.prefilters.unshift(e) : M.prefilters.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
            }, r
        }, oe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(qe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = oe.isEmptyObject(e),
                    o = oe.speed(t, n, r),
                    s = function() {
                        var t = M(this, oe.extend({}, e), o);
                        (i || Ee.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = oe.timers,
                        s = Ee.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Ee.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = oe.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
            }
        }), oe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                n = oe.timers;
            for (it = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), it = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            e.clearInterval(ot), ot = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
        }();
    var ut, lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), ut = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || oe.find.attr;
        lt[t] = function(e, t, r) {
            var i, o;
            return r || (o = lt[t], lt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, lt[t] = o), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), re.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = R(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + R(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = oe.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, re.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, d = [r || G],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !oe.isWindow(r)) {
                    for (u = f.delegateType || p, mt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (r.ownerDocument || G) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && ke(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !ke(r) || l && oe.isFunction(r[p]) && !oe.isWindow(r) && (a = r[l], a && (r[l] = null), oe.event.triggered = p, r[p](), oe.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t)
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t);
                i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t) - 1;
                i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t))
            }
        }
    });
    var gt = e.location,
        vt = oe.now(),
        yt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var xt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ct = /^(?:GET|HEAD)$/,
        kt = /^\/\//,
        Et = {},
        St = {},
        jt = "*/".concat("*"),
        At = G.createElement("a");
    At.href = gt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Tt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e)
        },
        ajaxPrefilter: B(Et),
        ajaxTransport: B(St),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var l, f, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (x = z(d, T, r)), x = X(d, x, T, l), l ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, y = x.error, l = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", l ? m.resolveWith(p, [f, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? f : y]), g.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, d = oe.ajaxSetup({}, n),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                m = oe.Deferred(),
                g = oe.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = wt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || gt.href) + "").replace(xt, "").replace(kt, gt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain) {
                l = G.createElement("a");
                try {
                    l.href = d.url, l.href = l.href, d.crossDomain = At.protocol + "//" + At.host != l.protocol + "//" + l.host
                } catch (C) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), W(Et, d, n, T), 2 === b) return T;
            c = oe.event && d.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ct.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (yt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = bt.test(o) ? o.replace(bt, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)), d.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](d[f]);
            if (i = W(St, d, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, i.send(y, r)
                } catch (C) {
                    if (!(b < 2)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, i) {
            return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Dt = /%20/g,
        Nt = /\[\]$/,
        Lt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(Dt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && $t.test(this.nodeName) && !qt.test(e) && (this.checked || !$e.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Ht = oe.ajaxSettings.xhr();
    re.cors = !!Ht && "withCredentials" in Ht, re.ajax = Ht = !!Ht, oe.ajaxTransport(function(t) {
        var n, r;
        if (re.cors || Ht && !t.crossDomain) return {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ft = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || oe.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || oe.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ft.push(i)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var r = he.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
    };
    var Pt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = oe.css(e, "position"),
                f = oe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0), r.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(r) {
            return Ce(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = j(re.pixelPosition, function(e, n) {
            if (n) return n = S(e, t), Ge.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ce(this, function(t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, s) : oe.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Mt = e.jQuery,
        Rt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Rt), t && e.jQuery === oe && (e.jQuery = Mt), oe
    }, t || (e.jQuery = e.$ = oe), oe
}), ! function(e, t, n) {
    "use strict";

    function r(n) {
        if (i = t.documentElement, o = t.body, X(), ae = this, n = n || {}, de = n.constants || {}, n.easing)
            for (var r in n.easing) Y[r] = n.easing[r];
        xe = n.edgeStrategy || "set", ce = {
            beforerender: n.beforerender,
            render: n.render,
            keyframe: n.keyframe
        }, fe = n.forceHeight !== !1, fe && (Fe = n.scale || 1), pe = n.mobileDeceleration || k, me = n.smoothScrolling !== !1, ge = n.smoothScrollingDuration || S, ve = {
            targetTop: ae.getScrollTop()
        }, ze = (n.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), ze ? (le = t.getElementById(n.skrollrBody || E), le && se(), G(), Ne(i, [y, w], [x])) : Ne(i, [y, b], [x]), ae.refresh(), Te(e, "resize orientationchange", function() {
            var e = i.clientWidth,
                t = i.clientHeight;
            (t !== Be || e !== Re) && (Be = t, Re = e, We = !0)
        });
        var s = U();
        return function a() {
            K(), we = s(a)
        }(), ae
    }
    var i, o, s = {
            get: function() {
                return ae
            },
            init: function(e) {
                return ae || new r(e)
            },
            VERSION: "0.6.29"
        },
        a = Object.prototype.hasOwnProperty,
        u = e.Math,
        l = e.getComputedStyle,
        c = "touchstart",
        f = "touchmove",
        d = "touchcancel",
        p = "touchend",
        h = "skrollable",
        m = h + "-before",
        g = h + "-between",
        v = h + "-after",
        y = "skrollr",
        x = "no-" + y,
        b = y + "-desktop",
        w = y + "-mobile",
        T = "linear",
        C = 1e3,
        k = .004,
        E = "skrollr-body",
        S = 200,
        j = "start",
        A = "end",
        D = "center",
        N = "bottom",
        L = "___skrollable_id",
        q = /^(?:input|textarea|button|select)$/i,
        $ = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        H = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        F = /^(@?[a-z\-]+)\[(\w+)\]$/,
        O = /-([a-z0-9_])/g,
        P = function(e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        R = /\{\?\}/g,
        B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        W = /[a-z\-]+-gradient/g,
        _ = "",
        z = "",
        X = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (l) {
                var t = l(o, null);
                for (var n in t)
                    if (_ = n.match(e) || +n == n && t[n].match(e)) break;
                if (!_) return void(_ = z = "");
                _ = _[0], "-" === _.slice(0, 1) ? (z = _, _ = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[_]) : z = "-" + _.toLowerCase() + "-"
            }
        },
        U = function() {
            var t = e.requestAnimationFrame || e[_.toLowerCase() + "RequestAnimationFrame"],
                n = $e();
            return (ze || !t) && (t = function(t) {
                var r = $e() - n,
                    i = u.max(0, 1e3 / 60 - r);
                return e.setTimeout(function() {
                    n = $e(), t()
                }, i)
            }), t
        },
        V = function() {
            var t = e.cancelAnimationFrame || e[_.toLowerCase() + "CancelAnimationFrame"];
            return (ze || !t) && (t = function(t) {
                return e.clearTimeout(t)
            }), t
        },
        Y = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -u.cos(e * u.PI) / 2 + .5
            },
            sqrt: function(e) {
                return u.sqrt(e)
            },
            outCubic: function(e) {
                return u.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - u.abs(3 * u.cos(e * t * 1.028) / t)
            }
        };
    r.prototype.refresh = function(e) {
        var r, i, o = !1;
        for (e === n ? (o = !0, ue = [], _e = 0, e = t.getElementsByTagName("*")) : e.length === n && (e = [e]), r = 0, i = e.length; i > r; r++) {
            var s = e[r],
                a = s,
                u = [],
                l = me,
                c = xe,
                f = !1;
            if (o && L in s && delete s[L], s.attributes) {
                for (var d = 0, p = s.attributes.length; p > d; d++) {
                    var m = s.attributes[d];
                    if ("data-anchor-target" !== m.name)
                        if ("data-smooth-scrolling" !== m.name)
                            if ("data-edge-strategy" !== m.name)
                                if ("data-emit-events" !== m.name) {
                                    var g = m.name.match(I);
                                    if (null !== g) {
                                        var v = {
                                            props: m.value,
                                            element: s,
                                            eventType: m.name.replace(O, P)
                                        };
                                        u.push(v);
                                        var y = g[1];
                                        y && (v.constant = y.substr(1));
                                        var x = g[2];
                                        /p$/.test(x) ? (v.isPercentage = !0, v.offset = (0 | x.slice(0, -1)) / 100) : v.offset = 0 | x;
                                        var b = g[3],
                                            w = g[4] || b;
                                        b && b !== j && b !== A ? (v.mode = "relative", v.anchors = [b, w]) : (v.mode = "absolute", b === A ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * Fe))
                                    }
                                } else f = !0;
                    else c = m.value;
                    else l = "off" !== m.value;
                    else if (a = t.querySelector(m.value), null === a) throw 'Unable to find anchor target "' + m.value + '"'
                }
                if (u.length) {
                    var T, C, k;
                    !o && L in s ? (k = s[L], T = ue[k].styleAttr, C = ue[k].classAttr) : (k = s[L] = _e++, T = s.style.cssText, C = De(s)), ue[k] = {
                        element: s,
                        styleAttr: T,
                        classAttr: C,
                        anchorTarget: a,
                        keyFrames: u,
                        smoothScrolling: l,
                        edgeStrategy: c,
                        emitEvents: f,
                        lastFrameIndex: -1
                    }, Ne(s, [h], [])
                }
            }
        }
        for (Se(), r = 0, i = e.length; i > r; r++) {
            var E = ue[e[r][L]];
            E !== n && (Z(E), te(E))
        }
        return ae
    }, r.prototype.relativeToAbsolute = function(e, t, n) {
        var r = i.clientHeight,
            o = e.getBoundingClientRect(),
            s = o.top,
            a = o.bottom - o.top;
        return t === N ? s -= r : t === D && (s -= r / 2), n === N ? s += a : n === D && (s += a / 2), s += ae.getScrollTop(), s + .5 | 0
    }, r.prototype.animateTo = function(e, t) {
        t = t || {};
        var r = $e(),
            i = ae.getScrollTop(),
            o = t.duration === n ? C : t.duration;
        return he = {
            startTop: i,
            topDiff: e - i,
            targetTop: e,
            duration: o,
            startTime: r,
            endTime: r + o,
            easing: Y[t.easing || T],
            done: t.done
        }, he.topDiff || (he.done && he.done.call(ae, !1), he = n), ae
    }, r.prototype.stopAnimateTo = function() {
        he && he.done && he.done.call(ae, !0), he = n
    }, r.prototype.isAnimatingTo = function() {
        return !!he
    }, r.prototype.isMobile = function() {
        return ze
    }, r.prototype.setScrollTop = function(t, n) {
        return ye = n === !0, ze ? Xe = u.min(u.max(t, 0), He) : e.scrollTo(0, t), ae
    }, r.prototype.getScrollTop = function() {
        return ze ? Xe : e.pageYOffset || i.scrollTop || o.scrollTop || 0
    }, r.prototype.getMaxScrollTop = function() {
        return He
    }, r.prototype.on = function(e, t) {
        return ce[e] = t, ae
    }, r.prototype.off = function(e) {
        return delete ce[e], ae
    }, r.prototype.destroy = function() {
        var e = V();
        e(we), ke(), Ne(i, [x], [y, b, w]);
        for (var t = 0, r = ue.length; r > t; t++) oe(ue[t].element);
        i.style.overflow = o.style.overflow = "", i.style.height = o.style.height = "", le && s.setStyle(le, "transform", "none"), ae = n, le = n, ce = n, fe = n, He = 0, Fe = 1, de = n, pe = n, Oe = "down", Pe = -1, Re = 0, Be = 0, We = !1, he = n, me = n, ge = n, ve = n, ye = n, _e = 0, xe = n, ze = !1, Xe = 0, be = n
    };
    var G = function() {
            var r, s, a, l, h, m, g, v, y, x, b, w;
            Te(i, [c, f, d, p].join(" "), function(e) {
                var i = e.changedTouches[0];
                for (l = e.target; 3 === l.nodeType;) l = l.parentNode;
                switch (h = i.clientY, m = i.clientX, x = e.timeStamp, q.test(l.tagName) || e.preventDefault(), e.type) {
                    case c:
                        r && r.blur(), ae.stopAnimateTo(), r = l, s = g = h, a = m, y = x;
                        break;
                    case f:
                        q.test(l.tagName) && t.activeElement !== l && e.preventDefault(), v = h - g, w = x - b, ae.setScrollTop(Xe - v, !0), g = h, b = x;
                        break;
                    default:
                    case d:
                    case p:
                        var o = s - h,
                            T = a - m,
                            C = T * T + o * o;
                        if (49 > C) {
                            if (!q.test(r.tagName)) {
                                r.focus();
                                var k = t.createEvent("MouseEvents");
                                k.initMouseEvent("click", !0, !0, e.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), r.dispatchEvent(k)
                            }
                            return
                        }
                        r = n;
                        var E = v / w;
                        E = u.max(u.min(E, 3), -3);
                        var S = u.abs(E / pe),
                            j = E * S + .5 * pe * S * S,
                            A = ae.getScrollTop() - j,
                            D = 0;
                        A > He ? (D = (He - A) / j, A = He) : 0 > A && (D = -A / j, A = 0), S *= 1 - D, ae.animateTo(A + .5 | 0, {
                            easing: "outCubic",
                            duration: S
                        })
                }
            }), e.scrollTo(0, 0), i.style.overflow = o.style.overflow = "hidden"
        },
        Q = function() {
            var e, t, n, r, o, s, a, l, c, f, d, p = i.clientHeight,
                h = je();
            for (l = 0, c = ue.length; c > l; l++)
                for (e = ue[l], t = e.element, n = e.anchorTarget, r = e.keyFrames, o = 0, s = r.length; s > o; o++) a = r[o], f = a.offset, d = h[a.constant] || 0, a.frame = f, a.isPercentage && (f *= p, a.frame = f), "relative" === a.mode && (oe(t), a.frame = ae.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - f, oe(t, !0)), a.frame += d, fe && !a.isEnd && a.frame > He && (He = a.frame);
            for (He = u.max(He, Ae()), l = 0, c = ue.length; c > l; l++) {
                for (e = ue[l], r = e.keyFrames, o = 0, s = r.length; s > o; o++) a = r[o], d = h[a.constant] || 0, a.isEnd && (a.frame = He - a.offset + d);
                e.keyFrames.sort(Ie)
            }
        },
        J = function(e, t) {
            for (var n = 0, r = ue.length; r > n; n++) {
                var i, o, u = ue[n],
                    l = u.element,
                    c = u.smoothScrolling ? e : t,
                    f = u.keyFrames,
                    d = f.length,
                    p = f[0],
                    y = f[f.length - 1],
                    x = c < p.frame,
                    b = c > y.frame,
                    w = x ? p : y,
                    T = u.emitEvents,
                    C = u.lastFrameIndex;
                if (x || b) {
                    if (x && -1 === u.edge || b && 1 === u.edge) continue;
                    switch (x ? (Ne(l, [m], [v, g]), T && C > -1 && (Ee(l, p.eventType, Oe), u.lastFrameIndex = -1)) : (Ne(l, [v], [m, g]), T && d > C && (Ee(l, y.eventType, Oe), u.lastFrameIndex = d)), u.edge = x ? -1 : 1, u.edgeStrategy) {
                        case "reset":
                            oe(l);
                            continue;
                        case "ease":
                            c = w.frame;
                            break;
                        default:
                        case "set":
                            var k = w.props;
                            for (i in k) a.call(k, i) && (o = ie(k[i].value), 0 === i.indexOf("@") ? l.setAttribute(i.substr(1), o) : s.setStyle(l, i, o));
                            continue
                    }
                } else 0 !== u.edge && (Ne(l, [h, g], [m, v]), u.edge = 0);
                for (var E = 0; d - 1 > E; E++)
                    if (c >= f[E].frame && c <= f[E + 1].frame) {
                        var S = f[E],
                            j = f[E + 1];
                        for (i in S.props)
                            if (a.call(S.props, i)) {
                                var A = (c - S.frame) / (j.frame - S.frame);
                                A = S.props[i].easing(A), o = re(S.props[i].value, j.props[i].value, A), o = ie(o), 0 === i.indexOf("@") ? l.setAttribute(i.substr(1), o) : s.setStyle(l, i, o)
                            }
                        T && C !== E && ("down" === Oe ? Ee(l, S.eventType, Oe) : Ee(l, j.eventType, Oe), u.lastFrameIndex = E);
                        break
                    }
            }
        },
        K = function() {
            We && (We = !1, Se());
            var e, t, r = ae.getScrollTop(),
                i = $e();
            if (he) i >= he.endTime ? (r = he.targetTop, e = he.done, he = n) : (t = he.easing((i - he.startTime) / he.duration), r = he.startTop + t * he.topDiff | 0), ae.setScrollTop(r, !0);
            else if (!ye) {
                var o = ve.targetTop - r;
                o && (ve = {
                    startTop: Pe,
                    topDiff: r - Pe,
                    targetTop: r,
                    startTime: Me,
                    endTime: Me + ge
                }), i <= ve.endTime && (t = Y.sqrt((i - ve.startTime) / ge), r = ve.startTop + t * ve.topDiff | 0)
            }
            if (ye || Pe !== r) {
                Oe = r > Pe ? "down" : Pe > r ? "up" : Oe, ye = !1;
                var a = {
                        curTop: r,
                        lastTop: Pe,
                        maxTop: He,
                        direction: Oe
                    },
                    u = ce.beforerender && ce.beforerender.call(ae, a);
                u !== !1 && (J(r, ae.getScrollTop()), ze && le && s.setStyle(le, "transform", "translate(0, " + -Xe + "px) " + be), Pe = r, ce.render && ce.render.call(ae, a)), e && e.call(ae, !1)
            }
            Me = i
        },
        Z = function(e) {
            for (var t = 0, n = e.keyFrames.length; n > t; t++) {
                for (var r, i, o, s, a = e.keyFrames[t], u = {}; null !== (s = H.exec(a.props));) o = s[1], i = s[2], r = o.match(F), null !== r ? (o = r[1], r = r[2]) : r = T, i = i.indexOf("!") ? ee(i) : [i.slice(1)], u[o] = {
                    value: i,
                    easing: Y[r]
                };
                a.props = u
            }
        },
        ee = function(e) {
            var t = [];
            return B.lastIndex = 0, e = e.replace(B, function(e) {
                return e.replace(M, function(e) {
                    return e / 255 * 100 + "%"
                })
            }), z && (W.lastIndex = 0, e = e.replace(W, function(e) {
                return z + e
            })), e = e.replace(M, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        te = function(e) {
            var t, n, r = {};
            for (t = 0, n = e.keyFrames.length; n > t; t++) ne(e.keyFrames[t], r);
            for (r = {}, t = e.keyFrames.length - 1; t >= 0; t--) ne(e.keyFrames[t], r)
        },
        ne = function(e, t) {
            var n;
            for (n in t) a.call(e.props, n) || (e.props[n] = t[n]);
            for (n in e.props) t[n] = e.props[n]
        },
        re = function(e, t, n) {
            var r, i = e.length;
            if (i !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var o = [e[0]];
            for (r = 1; i > r; r++) o[r] = e[r] + (t[r] - e[r]) * n;
            return o
        },
        ie = function(e) {
            var t = 1;
            return R.lastIndex = 0, e[0].replace(R, function() {
                return e[t++]
            })
        },
        oe = function(e, t) {
            e = [].concat(e);
            for (var n, r, i = 0, o = e.length; o > i; i++) r = e[i], n = ue[r[L]], n && (t ? (r.style.cssText = n.dirtyStyleAttr, Ne(r, n.dirtyClassAttr)) : (n.dirtyStyleAttr = r.style.cssText, n.dirtyClassAttr = De(r), r.style.cssText = n.styleAttr, Ne(r, n.classAttr)))
        },
        se = function() {
            be = "translateZ(0)", s.setStyle(le, "transform", be);
            var e = l(le),
                t = e.getPropertyValue("transform"),
                n = e.getPropertyValue(z + "transform"),
                r = t && "none" !== t || n && "none" !== n;
            r || (be = "")
        };
    s.setStyle = function(e, t, n) {
        var r = e.style;
        if (t = t.replace(O, P).replace("-", ""), "zIndex" === t) isNaN(n) ? r[t] = n : r[t] = "" + (0 | n);
        else if ("float" === t) r.styleFloat = r.cssFloat = n;
        else try {
            _ && (r[_ + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), r[t] = n
        } catch (i) {}
    };
    var ae, ue, le, ce, fe, de, pe, he, me, ge, ve, ye, xe, be, we, Te = s.addEvent = function(t, n, r) {
            var i = function(t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), r.call(this, t)
            };
            n = n.split(" ");
            for (var o, s = 0, a = n.length; a > s; s++) o = n[s], t.addEventListener ? t.addEventListener(o, r, !1) : t.attachEvent("on" + o, i), Ue.push({
                element: t,
                name: o,
                listener: r
            })
        },
        Ce = s.removeEvent = function(e, t, n) {
            t = t.split(" ");
            for (var r = 0, i = t.length; i > r; r++) e.removeEventListener ? e.removeEventListener(t[r], n, !1) : e.detachEvent("on" + t[r], n)
        },
        ke = function() {
            for (var e, t = 0, n = Ue.length; n > t; t++) e = Ue[t], Ce(e.element, e.name, e.listener);
            Ue = []
        },
        Ee = function(e, t, n) {
            ce.keyframe && ce.keyframe.call(ae, e, t, n)
        },
        Se = function() {
            var e = ae.getScrollTop();
            He = 0, fe && !ze && (o.style.height = ""), Q(), fe && !ze && (o.style.height = He + i.clientHeight + "px"), ze ? ae.setScrollTop(u.min(ae.getScrollTop(), He)) : ae.setScrollTop(e, !0), ye = !0
        },
        je = function() {
            var e, t, n = i.clientHeight,
                r = {};
            for (e in de) t = de[e], "function" == typeof t ? t = t.call(ae) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n), r[e] = t;
            return r
        },
        Ae = function() {
            var e, t = 0;
            return le && (t = u.max(le.offsetHeight, le.scrollHeight)), e = u.max(t, o.scrollHeight, o.offsetHeight, i.scrollHeight, i.offsetHeight, i.clientHeight), e - i.clientHeight
        },
        De = function(t) {
            var n = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
        },
        Ne = function(t, r, i) {
            var o = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[o], o = "baseVal"), i === n) return void(t[o] = r);
            for (var s = t[o], a = 0, u = i.length; u > a; a++) s = qe(s).replace(qe(i[a]), " ");
            s = Le(s);
            for (var l = 0, c = r.length; c > l; l++) - 1 === qe(s).indexOf(qe(r[l])) && (s += " " + r[l]);
            t[o] = Le(s)
        },
        Le = function(e) {
            return e.replace($, "")
        },
        qe = function(e) {
            return " " + e + " "
        },
        $e = Date.now || function() {
            return +new Date
        },
        Ie = function(e, t) {
            return e.frame - t.frame
        },
        He = 0,
        Fe = 1,
        Oe = "down",
        Pe = -1,
        Me = $e(),
        Re = 0,
        Be = 0,
        We = !1,
        _e = 0,
        ze = !1,
        Xe = 0,
        Ue = [];
    "function" == typeof define && define.amd ? define([], function() {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document), ! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}(this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                r = n[e] = n[e] || [];
            return -1 == r.indexOf(t) && r.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {},
                r = n[e] = n[e] || [];
            return r[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var r = n.indexOf(t);
            return -1 != r && n.splice(r, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var r = 0,
                i = n[r];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; i;) {
                var s = o && o[i];
                s && (this.off(e, i), delete o[i]), i.apply(this, t), r += s ? 0 : 1, i = n[r]
            }
            return this
        }
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }

    function i(e, t, o) {
        return this instanceof i ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = n({}, this.options), "function" == typeof t ? o = t : n(this.options, t), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new i(e, t, o)
    }

    function o(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var a = e.jQuery,
        u = e.console;
    i.prototype = Object.create(t.prototype), i.prototype.options = {}, i.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, i.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && l[t]) {
            for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
                var i = n[r];
                this.addImage(i)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (r = 0; r < o.length; r++) {
                    var s = o[r];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var l = {
        1: !0,
        9: !0,
        11: !0
    };
    return i.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage); null !== r;) {
                var i = r && r[2];
                i && this.addBackground(i, e), r = n.exec(t.backgroundImage)
            }
    }, i.prototype.addImage = function(e) {
        var t = new o(e);
        this.images.push(t)
    }, i.prototype.addBackground = function(e, t) {
        var n = new s(e, t);
        this.images.push(n)
    }, i.prototype.check = function() {
        function e(e, n, r) {
            setTimeout(function() {
                t.progress(e, n, r)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, i.prototype.progress = function(e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && u && u.log("progress: " + n, e, t)
    }, i.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, o.prototype = Object.create(t.prototype), o.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(o.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, i.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(e, t) {
            var n = new i(this, e, t);
            return n.jqDeferred.promise(a(this))
        })
    }, i.makeJQueryPlugin(), i
}),
function(e) {
    function t() {
        o = !1;
        for (var t = 0, n = r.length; t < n; t++) {
            var i = e(r[t]).filter(function() {
                return e(this).is(":appeared")
            });
            if (i.trigger("appear", [i]), u[t]) {
                var s = u[t].not(i);
                s.trigger("disappear", [s])
            }
            u[t] = i
        }
    }

    function n(e) {
        r.push(e), u.push()
    }
    var r = [],
        i = !1,
        o = !1,
        s = {
            interval: 250,
            force_process: !1
        },
        a = e(window),
        u = [];
    e.expr[":"].appeared = function(t) {
        var n = e(t);
        if (!n.is(":visible")) return !1;
        var r = a.scrollLeft(),
            i = a.scrollTop(),
            o = n.offset(),
            s = o.left,
            u = o.top;
        return u + n.height() >= i && u - (n.data("appear-top-offset") || 0) <= i + a.height() && s + n.width() >= r && s - (n.data("appear-left-offset") || 0) <= r + a.width()
    }, e.fn.extend({
        appear: function(r) {
            var a = e.extend({}, s, r || {}),
                u = this.selector || this;
            if (!i) {
                var l = function() {
                    o || (o = !0, setTimeout(t, a.interval))
                };
                e(window).scroll(l).resize(l), i = !0
            }
            return a.force_process && setTimeout(t, a.interval), n(u), e(u)
        }
    }), e.extend({
        force_appear: function() {
            return !!i && (t(), !0)
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}()), window.addEventListener("DOMContentLoaded", function() {
    "use strict";

    function e() {
        return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
    }

    function t() {
        r.addClass("state-visible")
    }

    function n() {
        $(document).on("click", ".js-close-banner", function(e) {
            e.preventDefault(), r.hide()
        })
    }! function() {
        e() ? $("body").addClass("body--mobile") : $("body").addClass("body--desktop")
    }();
    var r = $(".js-banner");
    n();
    var i = /constructor/i.test(window.HTMLElement) || function(e) {
        return "[object SafariRemoteNotification]" === e.toString()
    }(!window.safari || safari.pushNotification);
    ! function() {
        i && $("body").addClass("body--safari")
    }();
    var o = function() {
        function e() {
            l.addClass("state-reveal-intro"), r(), setTimeout(function() {
                l.removeClass("state-fixed-body").addClass("state-show-slider").addClass("state-show-text").addClass("state-show-corners").addClass("state-intro-lines-started-moving"), c.remove()
            }, f.revealIntro), setTimeout(function() {
                l.addClass("state-slider-children-visible")
            }, f.revealIntro + f.showIntroSlider), setTimeout(function() {
                l.removeClass("state-intro-slides-shift").addClass("state-intro-slides-dots-visible")
            }, f.revealIntro + f.showIntroSlider + f.showIntroSlides), setTimeout(function() {
                l.removeClass("state-intro-slides-transition"), s.init()
            }, f.revealIntro + f.showIntroSlider + f.showIntroSlides + f.introSlidesShift)
        }

        function n(e) {
            d.html(e + "%")
        }

        function r() {
            p.css("transform", "translateX(0%) translateZ(0)")
        }

        function i() {
            h++, a = Math.floor(m * h), a >= 98 && (a = 98), n(a)
        }

        function o() {
            setInterval(function() {
                i()
            }, 35), u.imagesLoaded({
                background: !1
            }).always(function(n) {
                setTimeout(function() {
                    e()
                }, f.percentFakeIncrementing), setTimeout(function() {
                    t()
                }, 9e3)
            }).done(function(e) {
                console.log("All images successfully loaded.")
            }).fail(function() {
                console.log("Images loaded, at least one is broken.")
            }).progress(function(e, t) {})
        }
        var a, u = $(".js-intro-image-section"),
            l = $("body"),
            c = $(".js-loader-section"),
            f = {
                revealIntro: 1700,
                showIntroSlider: 1e3,
                showIntroSlides: 1e3,
                introSlidesShift: 1500,
                percentFakeIncrementing: 1e3
            },
            d = $(".js-percent"),
            p = $(".js-loader-finishing-overlay"),
            h = 0,
            m = 1.5;
        return l.addClass("state-fixed-body"), {
            revealIntro: e,
            init: o
        }
    }();
    o.init();
    var s = function() {
            function e(e) {
                o.caseTitle.removeClass(s.activeTitle), $(".js-case-title[" + a.index + '="' + e + '"]').addClass(s.activeTitle)
            }

            function t(e) {
                o.dot.removeClass(s.activeDot), $(".js-slider-dot[" + a.index + '="' + e + '"]').addClass(s.activeDot)
            }

            function n(n, r) {
                if (void 0 !== n && void 0 !== r) var i = n,
                    l = r;
                else {
                    var i = $("." + s.activeSlide),
                        l = i.next(".js-main-slider-item");
                    0 === l.length && (l = o.item.eq(0))
                }
                i.addClass(s.leavingSlide).removeClass(s.activeSlide), setTimeout(function() {
                    i.removeClass(s.leavingSlide)
                }, u.slideLeaving), l.addClass(s.activeSlide).removeClass(s.leavingSlide);
                var c = l.attr(a.index);
                e(c), t(c)
            }

            function r() {
                o.dot.on("click", function(e) {
                    e.preventDefault();
                    var t = $(this).attr(a.index),
                        r = $("." + s.activeSlide),
                        i = $(".js-main-slider-item[" + a.index + "=" + t + "]");
                    n(r, i)
                })
            }
            var i, o = {
                    item: $(".js-main-slider-item"),
                    caseTitle: $(".js-case-title"),
                    dot: $(".js-slider-dot")
                },
                s = {
                    activeSlide: "state-active-slide",
                    leavingSlide: "state-leaving-slide",
                    activeTitle: "state-visible",
                    activeDot: "state-active"
                },
                a = {
                    index: "data-slide-index"
                },
                u = ({
                    slidesCount: o.item.length
                }, {
                    slideChange: 5e3,
                    slideLeaving: 800
                }),
                l = function() {
                    i = setInterval(function() {
                        n()
                    }, u.slideChange)
                },
                c = function() {
                    clearInterval(i)
                },
                f = function() {
                    l()
                },
                d = function() {
                    n(), f(), r()
                };
            return {
                startAutoplay: l,
                stopAutoplay: c,
                init: d
            }
        }(),
        a = function() {
            var e = function() {
                skrollr.init({
                    smoothScrolling: !0,
                    smoothScrollingDuration: 2e3,
                    easing: "linear",
                    forceHeight: !1
                })
            };
            return {
                bind: e
            }
        }();
    e() || (window.onload = function() {
        a.bind()
    });
    var u = function() {
        function e(e) {
            var t = e.find($(".js-submit-button")),
                n = e.find($(".js-submit-button")).val();
            t.val(n + "...");
            var r = e.find(".js-success-message"),
                i = e.find(".js-error-message"),
                o = 200;
            $.ajax({
                type: e.attr("method"),
                url: e.attr("action"),
                data: e.serialize(),
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=utf-8"
            }).done(function(e) {
                function t(e) {
                    return 0 === e.indexOf("0 -") ? e.slice(4) : e
                }
                "success" != e.result ? (console.log("err"), i.slideUp(o), r.slideUp(o), setTimeout(function() {
                    i.html(t(e.msg)), i.slideDown(o)
                }, o)) : i.slideUp(o, function() {
                    r.slideDown(o)
                })
            }).fail(function(e) {
                i.slideUp(o), r.slideUp(o, function() {
                    i.slideDown(o, function() {
                        i.html("Could not connect to the registration server. Please try again later.")
                    })
                })
            }).always(function(e) {
                console.log(e), t.val(n)
            })
        }
        var t = {
                $form: $(".js-subscribe-form")
            },
            n = function() {
                t.$form.on("submit", function(t) {
                    t.preventDefault(), e($(this))
                })
            };
        return {
            bind: n
        }
    }();
    u.bind();
    var l = function() {
        function e() {
            $(document).on("click", ".js-scroll-intro-section-down", function(e) {
                e.preventDefault(), $("html,body").animate({
                    scrollTop: t - n
                }, 800)
            })
        }
        var t = $(".js-intro-section").outerHeight(),
            n = $(".js-header").outerHeight();
        return {
            init: e
        }
    }();
    l.init();
    var c = function() {
        function e() {
            $("html,body").animate({
                scrollTop: r - 100
            }, 800)
        }

        function t() {
            $(document).on("click", '[href="#purchase"]', function(t) {
                t.preventDefault(), e()
            })
        }
        var n = $("#purchase"),
            r = n.offset().top;
        return {
            goToBuySection: e,
            init: t
        }
    }();
    c.init();
    var f = function() {
        function e() {
            h.removeClass(d.prevTestimonial).removeClass(d.nextTestimonial).removeClass(d.active.testimonialItem), h.filter("[data-index=" + y + "]").addClass(d.active.testimonialItem), h.filter("[data-index=" + u + "]").addClass(d.nextTestimonial), h.filter("[data-index=" + l + "]").addClass(d.prevTestimonial)
        }

        function t() {
            f = g.filter("." + d.active.header), f.removeClass(d.active.header), g.filter("[data-index=" + y + "]").addClass(d.active.header)
        }

        function n() {
            c = m.filter("." + d.active.number), c.removeClass(d.active.number), m.filter("[data-index=" + y + "]").addClass(d.active.number)
        }

        function r() {
            e(), t(), n()
        }

        function i() {
            y === v ? (y = 1, u = y + 1, l = v) : (y++, u = y === v ? 1 : y + 1, l = y - 1), r()
        }

        function o() {
            1 === y ? (y = v, u = 1, l = y - 1) : (y--, l = 1 === y ? v : y - 1, u = y + 1), r()
        }

        function s() {
            function e() {
                t.addClass(d.disabledArrow), n.addClass(d.disabledArrow), setTimeout(function() {
                    t.removeClass(d.disabledArrow), n.removeClass(d.disabledArrow)
                }, p.slideChange)
            }
            var t = $(".js-next-testimonial"),
                n = $(".js-prev-testimonial"),
                r = $(".js-testimonials-wrapper");
            $(document).on("click", ".js-next-testimonial", function(n) {
                return r.addClass(d.hideNext), n.preventDefault(), !t.hasClass(d.disabledArrow) && (i(), void e())
            }), $(document).on("click", ".js-prev-testimonial", function(t) {
                return r.removeClass(d.hideNext), t.preventDefault(), !n.hasClass(d.disabledArrow) && (o(), void e())
            })
        }

        function a() {
            s()
        }
        var u, l, c, f, d = {
                active: {
                    header: "state-active",
                    number: "state-visible",
                    testimonialItem: "state-active"
                },
                nextTestimonial: "state-next",
                prevTestimonial: "state-previous",
                disabledArrow: "state-disabled",
                hideNext: "state-hide-next-item"
            },
            p = {
                slideChange: 1e3
            },
            h = $(".js-testimonials-slider-item"),
            m = $(".js-testimonials-number"),
            g = $(".js-testimonials-header"),
            v = h.length,
            y = 1;
        return {
            init: a
        }
    }();
    f.init();
    var d = function() {
        function e() {
            $(window).scroll(function(e) {
                var t = $("body"),
                    n = "state-at-top-position";
                $(this).scrollTop() > 50 && t.removeClass(n), $(this).scrollTop() <= 50 && t.addClass(n)
            })
        }
        return {
            init: e
        }
    }();
    d.init();
    var p = function() {
        function e() {
            $(document).on("click", ".js-hide-feature", function(e) {
                console.log($(e.target)), $(e.target).hasClass("js-show-feature") || n.removeClass("state-opened")
            }), $(document).on("click", ".js-show-feature", function(e) {
                e.preventDefault(), e.stopPropagation(), n.removeClass("state-opened"), $(this).siblings(".js-inner-feature").addClass("state-opened")
            })
        }

        function t() {
            e()
        }
        var n = $(".js-inner-feature");
        return {
            init: t
        }
    }();
    p.init();
    var h = function() {
        var e = function() {
            var e = $(".js-appearing-content");
            e.appear();
            var t = function() {
                var t = -.7,
                    n = e.eq(0).innerHeight();
                e.attr("data-appear-top-offset", n * t)
            };
            t(), $(document.body).on("appear", ".js-appearing-content", function(e, t) {
                $(this).addClass("skrollable-between")
            }).on("disappear", ".js-appearing-content", function(e, t) {
                $(this).removeClass("skrollable-between")
            })
        };
        return {
            bind: e
        }
    }();
    h.bind();
    var m = function() {
        function e() {
            var e = $(".js-input-to-show");
            $(document).on("click", ".js-show-footer-input", function(t) {
                t.preventDefault(), $("html, body").animate({
                    scrollTop: $(document).height()
                }, 700), e.addClass("state-blinking"), setTimeout(function() {
                    e.removeClass("state-blinking")
                }, 2250)
            }), $(document).on("focus", ".js-input-to-show", function(t) {
                t.preventDefault(), e.removeClass("state-blinking")
            })
        }
        return {
            init: e
        }
    }();
    m.init();
    var g = function() {
        function e() {
            var e = ($("body"), $(".js-loader-section")),
                t = window.location.hash;
            "#purchase" === t && (o.revealIntro(), e.remove(), window.location = "#purchase")
        }
        return {
            init: e
        }
    }();
    g.init()
});

