var menu = {
    base_href: "/2017/zh-cn",
    name: "目录",
    children: [{
        name: "密院学习",
        children: [{
            name: "大一秋季课程",
            href: "/fall-course.html"
        }, {
            name: "常用网站",
            href: "/website.html"
        }, {
            name: "选课指南",
            href: "/course-selection.html"
        }, {
            name: "诚信守则和平均绩点",
            href: "/hc-gpa.html"
        }]
    }]
};

var generateContent = function (level, content, href) {
    level = Math.min(Math.max(level, 0), 5);
    var html = '';
    html += '<h' + level + '>';
    if (href) {
        html += '<a href="' + base_url + href + '">';
        html += content;
        html += '</a>'
    } else {
        html += content;
    }
    html += '</h' + level + '>\n';
    return html;
};

var generateChildren = function (level, data) {
    if (!data) return "";
    var html = "";
    for (var i = 0; i < data.length; i++) {
        html += generateContent(level, data[i].name, data[i].href);
        html += generateChildren(level + 1, data[i].children);
    }
    return html;
};

//var div = document.getElementById("menu");
var html = "";
var base_url = menu.base_href || '/';
html += generateContent(2, menu.name, '/');
html += generateChildren(3, menu.children);

console.log(html);

