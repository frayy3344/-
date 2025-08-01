//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)
main = () => {
    zuox = 800
    youx = 1200
    zuoy = 200
    youy = 200
    ylbz = [0, 0, 0, 0]
    yltz = [255, 255, 0, 0]
    ylby = [0, 0, 0, 0]
    ylty = [255, 255, 0, 0]
    tsizez = 30
    tsizey = 30
    xshuz = 2
    xshuy = 2
    window = {}
    window.hintText = "替身\n已经\n好了"
    function 初始化(h) {
        try {
            data = captureScreen()
            n = data.getWidth() < data.getHeight()
            if (n) {
                初始化(!h)
            }
        } catch (e) {
            if (!requestScreenCapture(h)) {
                toast("请求截图失败");
            }
            sleep(2000);
            初始化(h)
        }
    }
    // launchApp("火影忍者");
    // sleep(5000)
    初始化(true)
    toast("开始")
    t = Date.now()
    window.numz = [t, 0]
    window.numy = [t, 0]
    window.dynamicText = (num, zy) => {
        data = num[0] - Date.now()
        if (data < -300) {
            return "豆" + num[1]
        } else if (data > 300) {
            return ((data / 1000)).toFixed(zy ? xshuy : xshuz)
        } else if (data > -300) {
            return window.hintText
        }
    }
//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)
    window.fc = function () {
        raw = "window"
        zuo = floaty[raw](
            <frame gravity="center">
                <text id="text" textSize="{{tsizez}}" textColor="#ff0000" />
            </frame>
        );
        you = floaty[raw](
            <frame gravity="center">
                <text id="text" textSize="{{tsizey}}" textColor="#ff0000" />
            </frame>
        );
        ui.run(function () {
            zuo.setPosition(zuox, zuoy);
            ylbz1 = colors.argb(ylbz[0], ylbz[1], ylbz[2], ylbz[3])
            yltz1 = colors.argb(yltz[0], yltz[1], yltz[2], yltz[3])
            zuo.text.setTextColor(yltz1)
            zuo.text.setBackgroundColor(ylbz1)
            you.setPosition(youx, youy);
            ylby1 = colors.argb(ylby[0], ylby[1], ylby[2], ylby[3])
            ylty1 = colors.argb(ylty[0], ylty[1], ylty[2], ylty[3])
            you.text.setTextColor(ylty1)
            you.text.setBackgroundColor(ylby1)
        });
//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)
       
            zuo.exitOnClose();
            you.exitOnClose();
            zuo.text.click(() => {
                zuo.setAdjustEnabled(!zuo.isAdjustEnabled());
                tsjs.put("zuox", zuo.getX())
                tsjs.put("zuoy", zuo.getY())
            });
            you.text.click(() => {
                you.setAdjustEnabled(!you.isAdjustEnabled());
                tsjs.put("youx", you.getX())
                tsjs.put("youy", you.getY())
            });
        
        setInterval(() => {
            //对控件的操作需要在UI线程中执行
            ui.run(function () {
                try {
                    you.text.setText(window.dynamicText(window.numy, true));
                } catch (e) {
                }
            });
        }, 50);
        setInterval(() => {
            //对控件的操作需要在UI线程中执行
            ui.run(function () {
                try {
                    zuo.text.setText(window.dynamicText(window.numz, false));
                } catch (e) {
                }
            });
        }, 50);
    }
    //显示浮窗
    window.fc()
    window.zbjs = () => {
        var h = device.height
        var w = device.width
        if (w < h) {
            var h0 = w
            var w = h
            var h = h0
        }

        var range1 = (a, b, c) => {
            var body = []
            for (let i = a; i < b; i = i + c) {
                body.push(i)
            }
            return body
        }

        if ((w * 1080 / h) < 1942) {
            var 豆 = range1(208, 208 + (30 * 6), 30)
            var zb = 豆.map(i => w * i / 1920)
            var zb1 = zb.map(i => w - (4 * h / 1080) - i)
            var data = [zb, zb1]
            var y = w - 1200 + 103
            var y = y > 110 ? 110 : y
            var y = y / 1920 * w
        } else {
            var 豆 = range1(307, 307 + (31 * 6), 31)
            var zb = 豆.map(i => h * i / 1080)
            var zb1 = zb.map(i => w - (6 * h / 1080) - i)
            var data = [zb, zb1]
            var y = h * 110 / 1080
        }
        return [data, y]
    }
    

    比例 = (a, b) => {
        if (!(a % 5 || b % 5)) {
            return 比例(a / 5, b / 5)
        } else if (!(a % 3 || b % 3)) {
            return 比例(a / 3, b / 3)
        } else if (!(a % 2 || b % 2)) {
            return 比例(a / 2, b / 2)
        } else {
            return `${a}:${b}`
        }
    }
    window.黑白化 = a => {
        r = colors.red(a)
        g = colors.green(a)
        b = colors.blue(a)
        return Math.max(r, g, b)
    }
    
//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)

    window.color = (x, y, data) => {
        c = images.pixel(data, x, y)
        a = window.黑白化(c)
        return a > 200
    }
    window.colors = (x, y, data, n) => {
        for (let i = 0; i < 6; i++) {
            x1 = window.color(x[i], y, data)
            if (!x1) {
                return i
            }
        }
        return 6
    }
    window.豆 = (x, y) => {
        data = captureScreen()
        if (!window.黑白化(images.pixel(data, x[0][1], y))) {
            return [-2, -2]
        }
        n0 = window.colors(x[0], y, data)
        n1 = window.colors(x[1], y, data)
        return [n0, n1]
    }
    window.pd = (a, b) => {
        t = Date.now()
        //灵敏度
        if (b[1].length < 30) {
            b[1].push([a, t + 15000])
            return b
        } else {
            for (let i = 0; i < b[1].length - 1; i++) {
                b[1][i] = b[1][i + 1]
            }
            b[1][b[1].length - 1] = [a, t + 15000]
        }
        for (let i = 1; i < b[1].length; i++) {
            if (b[1][i][0] != b[1][0][0]) {
                return b
            }
        }
        if (b[0][0] > 3) {
            b[3] = t + 800
        }
        if (b[0][0] == b[1][0][0] + 1 && b[2] <= t + 1000 && (b[3] <= t || b[0][0] > 0)) {
            b[2] = b[1][0][1]
        }
        b[0] = b[1][0]
        return b
    }
    window.pds = (a, b) => {
        return [window.pd(a[0], a[1]), window.pd(b[0], b[1])]
    }
//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)
    threads.start(() => {
        t = Date.now()
        jg = t + 35
        var [x, y] = window.zbjs();
        var [d0, d1] = window.豆(x, y)
        var [n0, n1] = window.pds([d0, [[0, 0], [[d0, 0]], 0, 0]], [d1, [[0, 0], [[d1, 0]], 0, 0]])
        while (true) {
            try {
                t = Date.now()
                if (jg > t) {
                    continue
                }
                jg = t + 35
                if (n0[0] != n0[1] || n1[0] != n1[1]) {
                    log(n0[1][0][0], n1[1][0][0])
                }
                [d0, d1] = window.豆(x, y)
                if (d0 == -2 || d1 == -2) {
                    [n0, n1] = window.pds([0, [[0, 0], [[0, 0]], 0, 0]], [0, [[0, 0], [[0, 0]], 0, 0]])
                    continue
                }
                [n0, n1] = window.pds([d0, n0], [d1, n1])
                window.numz = [n0[2], n0[0][0]]
                window.numy = [n1[2], n1[0][0]]
            } catch (e) {
                log(e)
            }
        }
    })
}
main()








//源码水印(欢迎进群交流探讨)
//官方群:1038174927
//官方tg:https://t.me/YJBR982
//b站UID一:335069986(十里序ovo)
//b站UID二:34334588(一颗红心永向党zre)