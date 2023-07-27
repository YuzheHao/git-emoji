export interface Emoji {
  readonly emoji: any
  readonly entity?: any
  readonly code: any
  readonly description: any
  readonly name: any
}
let emojis: Array<Emoji> = [
   {
        "emoji": "🚀",
        "entity": "&#127881;",
        "code": ":tada:",
        "description": "发布部署级别的新版本",
        "name": "发布"
    },
         {
        "emoji": "🔖",
        "entity": "&#x1f516;",
        "code": ":bookmark:",
        "description": "Merge级别的新版本",
        "name": "书签"
    },
    {
        "emoji": "🚧",
        "entity": "&#x1f6a7;",
        "code": ":construction:",
        "description": "施工中",
        "name": "施工"
    },
    {
        "emoji": "📦",
        "entity": "&#x1f4dd;",
        "code": ":pencil:",
        "description": "添加新文件/引入新功能",
        "name": "添加"
    },
    {
        "emoji": "✨",
        "entity": "&#x1f525;",
        "code": ":fire:",
        "description": "在现有文件上添加新功能",
        "name": "火花"
    },
    {
        "emoji": "👌",
        "entity": "&#x2705;",
        "code": ":white_check_mark:",
        "description": "提高性能/优化",
        "name": "优化"
    },
    {
        "emoji": "🎨",
        "entity": "&#x2728;",
        "code": ":sparkles:",
        "description": "改进代码结构/代码格式",
        "name": "调色板"
    },
    {
        "emoji": "💄",
        "entity": "&#x1f525;",
        "code": ":lipstick:",
        "description": "更新 UI 和样式文件",
        "name": "口红"
    },
    {
        "emoji": "🐛",
        "entity": "&#x1f41b;",
        "code": ":bug:",
        "description": "修复 bug",
        "name": "bug"
    },
    {
        "emoji": "🚑",
        "entity": "&#128657;",
        "code": ":ambulance:",
        "description": "添加重要补丁",
        "name": "急救车"
    },
    {
        "emoji": "🚚",
        "entity": "&#1F69A;",
        "code": ":truck:",
        "description": "移动/重命名文件",
        "name": "搬家"
    },
    {
        "emoji": "🍱",
        "entity": "&#1F371",
        "code": ":bento:",
        "description": "添加/更新Assets",
        "name": "素材"
    },
    {
        "emoji": "🗃",
        "entity": "&#128451;",
        "code": ":card_file_box:",
        "description": "数据库相关的操作/更改",
        "name": "卡片箱"
    },
    {
        "emoji": "📖",
        "entity": "&#ff99cc;",
        "code": ":lipstick:",
        "description": "添加/更新文档/页面文本",
        "name": "文本"
    },
    {
        "emoji": "✏️",
        "entity": "&#59161;",
        "code": ":pencil2:",
        "description": "修正错别字typos",
        "name": "笔误"
    },
    {
        "emoji": "🔧",
        "entity": "&#x1f527;",
        "code": ":wrench:",
        "description": "修改配置文件",
        "name": "配置"
    },
    {
        "emoji": "🔒",
        "entity": "&#x1f512;",
        "code": ":锁:",
        "description": "修正安全相关的部分",
        "name": "锁"
    },
    {
        "emoji": "📝",
        "entity": "&#x1f4dd;",
        "code": ":pencil:",
        "description": "增加代码注释",
        "name": "注释"
    },
    {
        "emoji": "🔥",
        "entity": "&#x1f525;",
        "code": ":fire:",
        "description": "删除文件",
        "name": "烧"
    },  
    {
        "emoji": "🙈",
        "entity": "&#8bdfe7;",
        "code": ":see_no_evil:",
        "description": "添加或修改.gitignore文件",
        "name": "不可见"
    },
    {
        "emoji": "⚡️",
        "entity": "&#x26a1;",
        "code": ":zap:",
        "description": "大幅提升运行性能",
        "name": "闪电"
    },
    {
        "emoji": "🌐",
        "entity": "&#127760;",
        "code": ":globe_with_meridians:",
        "description": "多语言/国际化",
        "name": "国际化"
    },
    {
        "emoji": "🎉",
        "entity": "&#x1f3a8;",
        "code": ":tada:",
        "description": "初次提交/初始化项目",
        "name": "庆祝"
    },
    {
        "emoji": "🍻",
        "entity": "&#x1f37b;",
        "code": ":beers:",
        "description": "像喝多了写的代码",
        "name": "啤酒"
    },
    {
        "emoji": "🥚",
        "entity": "&#129370;",
        "code": ":egg:",
        "description": "添加一个彩蛋",
        "name": "蛋"
    },
        {
        "emoji": "✅",
        "entity": "&#x1f680;",
        "code": ":rocket:",
        "description": "增加测试代码",
        "name": "测试"
    },

    {
        "emoji": "🤔",
        "code": ":ideas:",
        "description": "思考 & 计划",
        "name": "思考"
    },
    {
        "emoji": "💡",
        "entity": "&#128161;",
        "code": ":bulb:",
        "description": "文档源代码",
        "name": "灯泡"
    },
];
export default emojis ;
