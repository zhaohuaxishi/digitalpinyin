export interface PinyinPronunciation {
    id: string;
    uri: string;
}

export interface PinyinUnit {
    label: string;
    data: PinyinPronunciation[];
}

export const pinyinUnitOne: PinyinUnit = {
    label: "a o e", data: [
        {
            id: "ā",
            uri: "http://du.hanyupinyin.cn/du/pinyin/a1.mp3"
        },
        {
            id: "á",
            uri: "http://du.hanyupinyin.cn/du/pinyin/a2.mp3"
        },
        {
            id: "ǎ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/a3.mp3"
        },
        {
            id: "à",
            uri: "http://du.hanyupinyin.cn/du/pinyin/a4.mp3"
        },
        {
            id: "ō",
            uri: "http://du.hanyupinyin.cn/du/pinyin/o1.mp3"
        },
        {
            id: "ó",
            uri: "http://du.hanyupinyin.cn/du/pinyin/o2.mp3"
        },
        {
            id: "ǒ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/o3.mp3"
        },
        {
            id: "ò",
            uri: "http://du.hanyupinyin.cn/du/pinyin/o4.mp3"
        },
        {
            id: "ē",
            uri: "http://du.hanyupinyin.cn/du/pinyin/e1.mp3"
        },
        {
            id: "é",
            uri: "http://du.hanyupinyin.cn/du/pinyin/e2.mp3"
        },
        {
            id: "ě",
            uri: "http://du.hanyupinyin.cn/du/pinyin/e3.mp3"
        },
        {
            id: "è",
            uri: "http://du.hanyupinyin.cn/du/pinyin/e4.mp3"
        },
        {
            id: "ī",
            uri: "http://du.hanyupinyin.cn/du/pinyin/i1.mp3"
        },
        {
            id: "í",
            uri: "http://du.hanyupinyin.cn/du/pinyin/i2.mp3"
        },
        {
            id: "ǐ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/i3.mp3"
        },
        {
            id: "ì",
            uri: "http://du.hanyupinyin.cn/du/pinyin/i4.mp3"
        },
        {
            id: "ū",
            uri: "http://du.hanyupinyin.cn/du/pinyin/u1.mp3"
        },
        {
            id: "ú",
            uri: "http://du.hanyupinyin.cn/du/pinyin/u2.mp3"
        },
        {
            id: "ǔ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/u3.mp3"
        },
        {
            id: "ù",
            uri: "http://du.hanyupinyin.cn/du/pinyin/u4.mp3"
        },
        {
            id: "ǖ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/v1.mp3"
        },
        {
            id: "ǘ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/v2.mp3"
        },
        {
            id: "ǚ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/v3.mp3"
        },
        {
            id: "ǜ",
            uri: "http://du.hanyupinyin.cn/du/pinyin/v4.mp3"
        }
    ]
}

export const pinyinUnitTwo: PinyinUnit = {
    label: "b p m f d t n l", data: [
        {
            "id": "b",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/b.mp3"
        },
        {
            "id": "p",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/p.mp3"
        },
        {
            "id": "m",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/m.mp3"
        },
        {
            "id": "f",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/f.mp3"
        },
        {
            "id": "d",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/d.mp3"
        },
        {
            "id": "t",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/t.mp3"
        },
        {
            "id": "n",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/n.mp3"
        },
        {
            "id": "l",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/l.mp3"
        },
    ]
}

export const pinyinUnitThree: PinyinUnit = {
    label: "g k h j q x", data: [
        {
            "id": "g",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/g.mp3"
        },
        {
            "id": "k",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/k.mp3"
        },
        {
            "id": "h",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/h.mp3"
        },
        {
            "id": "j",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/j.mp3"
        },
        {
            "id": "q",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/q.mp3"
        },
        {
            "id": "x",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/x.mp3"
        },
    ]
}

export const pinyinUnitFour: PinyinUnit = {
    label: "zh ch sh r z c s", data: [
        {
            "id": "zh",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zh.mp3"
        },
        {
            "id": "ch",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ch.mp3"
        },
        {
            "id": "sh",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/sh.mp3"
        },
        {
            "id": "r",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/r.mp3"
        },
        {
            "id": "z",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/z.mp3"
        },
        {
            "id": "c",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/c.mp3"
        },
        {
            "id": "s",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/s.mp3"
        },
        {
            "id": "y",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/y.mp3"
        },
        {
            "id": "w",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/w.mp3"
        },
    ]
}

export const pinyinDataBase: PinyinUnit[] = [
    pinyinUnitOne,
    pinyinUnitTwo,
    pinyinUnitThree,
    pinyinUnitFour,
]