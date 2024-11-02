export interface PinyinPronunciation {
    id: string;
    uri: string;
}

export interface PinyinUnit {
    name: string;
    label: string;
    data: PinyinPronunciation[];
}

export const pinyinUnit1: PinyinUnit = {
    name: "第一单元",
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

export const pinyinUnit2: PinyinUnit = {
    name: "第二单元",
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

export const pinyinUnit3: PinyinUnit = {
    name: "第三单元",
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

export const pinyinUnit4: PinyinUnit = {
    name: "第四单元",
    label: "zh ch sh r z c s y w", data: [
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
            "id": "r",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/r.mp3"
        },
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
            "id": "y",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/y.mp3"
        },
        {
            "id": "w",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/w.mp3"
        },
    ]
}

export const pinyinUnit5: PinyinUnit = {
    name: "第五单元",
    label: "zi ci si ri", data: [
        {
            "id": "zī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zi1.mp3"
        },
        {
            "id": "zí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zi2.mp3"
        },
        {
            "id": "zǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zi3.mp3"
        },
        {
            "id": "zì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zi4.mp3"
        },
        {
            "id": "cī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ci1.mp3"
        },
        {
            "id": "cí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ci2.mp3"
        },
        {
            "id": "cǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ci3.mp3"
        },
        {
            "id": "cì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ci4.mp3"
        },
        {
            "id": "sī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/si1.mp3"
        },
        {
            "id": "sí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/si2.mp3"
        },
        {
            "id": "sǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/si3.mp3"
        },
        {
            "id": "sì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/si4.mp3"
        },
        {
            "id": "rī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ri1.mp3"
        },
        {
            "id": "rí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ri2.mp3"
        },
        {
            "id": "rǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ri3.mp3"
        },
        {
            "id": "rì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ri4.mp3"
        },
    ]
}

export const pinyinUnit6: PinyinUnit = {
    name: "第六单元",
    label: "zhi chi shi", data: [
        {
            "id": "zhī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zhi1.mp3"
        },
        {
            "id": "zhí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zhi2.mp3"
        },
        {
            "id": "zhǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zhi3.mp3"
        },
        {
            "id": "zhì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/zhi4.mp3"
        },
        {
            "id": "chī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/chi1.mp3"
        },
        {
            "id": "chí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/chi2.mp3"
        },
        {
            "id": "chǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/chi3.mp3"
        },
        {
            "id": "chì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/chi4.mp3"
        },
        {
            "id": "shī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/shi1.mp3"
        },
        {
            "id": "shí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/shi2.mp3"
        },
        {
            "id": "shǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/shi3.mp3"
        },
        {
            "id": "shì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/shi4.mp3"
        },
    ]
}

export const pinyinUnit7: PinyinUnit = {
    name: "第七单元",
    label: "yi wu yu", data: [
        {
            "id": "yī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yi1.mp3"
        },
        {
            "id": "yí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yi2.mp3"
        },
        {
            "id": "yǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yi3.mp3"
        },
        {
            "id": "yì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yi4.mp3"
        },
        {
            "id": "wū",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/wu1.mp3"
        },
        {
            "id": "wú",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/wu2.mp3"
        },
        {
            "id": "wǔ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/wu3.mp3"
        },
        {
            "id": "wù",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/wu4.mp3"
        },
        {
            "id": "yū",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yu1.mp3"
        },
        {
            "id": "yú",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yu2.mp3"
        },
        {
            "id": "yǔ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yu3.mp3"
        },
        {
            "id": "yù",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yu4.mp3"
        },
    ]
}


export const pinyinUnit8: PinyinUnit = {
    name: "第八单元",
    label: "ai ei ui", data: [
        {
            "id": "āi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ai1.mp3"
        },
        {
            "id": "ái",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ai2.mp3"
        },
        {
            "id": "ǎi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ai3.mp3"
        },
        {
            "id": "ài",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ai4.mp3"
        },
        {
            "id": "ēi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ei1.mp3"
        },
        {
            "id": "éi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ei2.mp3"
        },
        {
            "id": "ěi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ei3.mp3"
        },
        {
            "id": "èi",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ei4.mp3"
        },
        {
            "id": "uī",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ui1.mp3"
        },
        {
            "id": "uí",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ui2.mp3"
        },
        {
            "id": "uǐ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ui3.mp3"
        },
        {
            "id": "uì",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ui4.mp3"
        },
    ]
}

export const pinyinUnit9: PinyinUnit = {
    name: "第九单元",
    label: "ao ou iu", data: [
        {
            "id": "āo",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ao1.mp3"
        },
        {
            "id": "áo",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ao2.mp3"
        },
        {
            "id": "áo",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ao3.mp3"
        },
        {
            "id": "ào",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ao4.mp3"
        },
        {
            "id": "ōu",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ou1.mp3"
        },
        {
            "id": "óu",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ou2.mp3"
        },
        {
            "id": "ǒu",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ou3.mp3"
        },
        {
            "id": "òu",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ou4.mp3"
        },
        {
            "id": "iū",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/iu1.mp3"
        },
        {
            "id": "iú",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/iu2.mp3"
        },
        {
            "id": "iǔ",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/iu3.mp3"
        },
        {
            "id": "iù",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/iu4.mp3"
        },
    ]
}

export const pinyinUnit10: PinyinUnit = {
    name: "第十单元",
    label: "ie ue er", data: [
        {
            "id": "iē",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie1.mp3"
        },
        {
            "id": "ié",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie2.mp3"
        },
        {
            "id": "iě",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie3.mp3"
        },
        {
            "id": "iè",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie4.mp3"
        },
        {
            "id": "üē",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve1.mp3"
        },
        {
            "id": "üé",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve2.mp3"
        },
        {
            "id": "üě",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve3.mp3"
        },
        {
            "id": "üè",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve4.mp3"
        },
        {
            "id": "ēr",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/er1.mp3"
        },
        {
            "id": "ér",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/er2.mp3"
        },
        {
            "id": "ěr",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/er3.mp3"
        },
        {
            "id": "èr",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/er4.mp3"
        },
    ]
}

export const pinyinUnit11: PinyinUnit = {
    name: "第十一单元",
    label: "ye yue", data: [
        {
            "id": "yē",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie1.mp3"
        },
        {
            "id": "yé",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie2.mp3"
        },
        {
            "id": "yě",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie3.mp3"
        },
        {
            "id": "yè",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ie4.mp3"
        },
        {
            "id": "yuē",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve1.mp3"
        },
        {
            "id": "yué",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve2.mp3"
        },
        {
            "id": "yuě",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve3.mp3"
        },
        {
            "id": "yuè",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ve4.mp3"
        },
    ]
}

export const pinyinUnit12: PinyinUnit = {
    name: "第十二单元",
    label: "an en in un vn", data: [
        {
            "id": "ān",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/an1.mp3"
        },
        {
            "id": "án",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/an2.mp3"
        },
        {
            "id": "ǎn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/an3.mp3"
        },
        {
            "id": "àn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/an4.mp3"
        },
        {
            "id": "ēn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/en1.mp3"
        },
        {
            "id": "én",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/en2.mp3"
        },
        {
            "id": "ěn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/en3.mp3"
        },
        {
            "id": "èn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/en4.mp3"
        },
        {
            "id": "īn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/in1.mp3"
        },
        {
            "id": "ín",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/in2.mp3"
        },
        {
            "id": "ǐn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/in3.mp3"
        },
        {
            "id": "ìn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/in4.mp3"
        },
        {
            "id": "ūn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/un1.mp3"
        },
        {
            "id": "ún",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/un2.mp3"
        },
        {
            "id": "ǔn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/un3.mp3"
        },
        {
            "id": "ùn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/un4.mp3"
        },
        {
            "id": "ǖn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/vn1.mp3"
        },
        {
            "id": "ǘn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/vn2.mp3"
        },
        {
            "id": "ǚn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/vn3.mp3"
        },
        {
            "id": "ǜn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/vn4.mp3"
        },
    ]
}

export const pinyinUnit13: PinyinUnit = {
    name: "第十三单元",
    label: "ang eng ing ong", data: [
        {
            "id": "āng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ang1.mp3"
        },
        {
            "id": "áng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ang2.mp3"
        },
        {
            "id": "ǎng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ang3.mp3"
        },
        {
            "id": "àng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ang4.mp3"
        },
        {
            "id": "ēng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/eng1.mp3"
        },
        {
            "id": "éng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/eng2.mp3"
        },
        {
            "id": "ěng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/eng3.mp3"
        },
        {
            "id": "èng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/eng4.mp3"
        },
        {
            "id": "īng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ing1.mp3"
        },
        {
            "id": "íng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ing2.mp3"
        },
        {
            "id": "ǐng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ing3.mp3"
        },
        {
            "id": "ìng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ing4.mp3"
        },
        {
            "id": "ōng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ong1.mp3"
        },
        {
            "id": "óng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ong2.mp3"
        },
        {
            "id": "ǒng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ong3.mp3"
        },
        {
            "id": "òng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ong4.mp3"
        },
    ]
}

export const pinyinUnit14: PinyinUnit = {
    name: "第十四单元",
    label: "yuan yin yun ying", data: [
        {
            "id": "yuān",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yuan1.mp3"
        },
        {
            "id": "yuán",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yuan2.mp3"
        },
        {
            "id": "yuǎn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yuan3.mp3"
        },
        {
            "id": "yuàn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yuan4.mp3"
        },
        {
            "id": "yīn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yin1.mp3"
        },
        {
            "id": "yín",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yin2.mp3"
        },
        {
            "id": "yǐn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yin3.mp3"
        },
        {
            "id": "yìn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yin4.mp3"
        },
        {
            "id": "yūn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yun1.mp3"
        },
        {
            "id": "yún",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yun2.mp3"
        },
        {
            "id": "yǔn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yun3.mp3"
        },
        {
            "id": "yùn",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/yun4.mp3"
        },
        {
            "id": "yīng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ying1.mp3"
        },
        {
            "id": "yíng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ying2.mp3"
        },
        {
            "id": "yǐng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ying3.mp3"
        },
        {
            "id": "yìng",
            "uri": "http://du.hanyupinyin.cn/du/pinyin/ying4.mp3"
        },
    ]
}

export const pinyinDataBase: PinyinUnit[] = [
    pinyinUnit1,
    pinyinUnit2,
    pinyinUnit3,
    pinyinUnit4,
    pinyinUnit5,
    pinyinUnit6,
    pinyinUnit7,
    pinyinUnit8,
    pinyinUnit9,
    pinyinUnit10,
    pinyinUnit11,
    pinyinUnit12,
    pinyinUnit13,
    pinyinUnit14,
]