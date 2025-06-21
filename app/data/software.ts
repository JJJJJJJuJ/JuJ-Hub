export interface Software {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
  officialUrl?: string;
  iconType?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  { 
    id: 'common', 
    name: '常用软件', 
    description: '日常生活和工作中经常使用的基础软件' 
  },
  { 
    id: 'gaming', 
    name: '游戏必备', 
    description: '游戏玩家必备的工具软件，助您畅玩各类游戏' 
  },
  { 
    id: 'drivers', 
    name: '驱动下载', 
    description: '各类硬件驱动程序，保持设备正常运行' 
  },
  { 
    id: 'testing', 
    name: '检测工具', 
    description: '检测键盘、鼠标、网络等各项硬件和性能的工具' 
  },
  { 
    id: 'streaming', 
    name: '直播推流', 
    description: '帮助您进行直播和视频制作的专业工具' 
  },
  { 
    id: 'desktop', 
    name: '桌面美化', 
    description: '让您的电脑桌面更加美观的软件和资源' 
  },
  { 
    id: 'utilities', 
    name: '好用的小软件', 
    description: '实用的小工具，解决特定问题' 
  },
];

export const software: Software[] = [
  // 常用软件
  {
    id: 'wechat',
    name: '微信',
    category: '常用软件',
    categoryId: 'common',
    description: '微信是一款跨平台的通讯工具。支持单人、多人参与。通过手机网络发送语音、图片、视频和文字。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAhT0.png',
    downloadUrl: 'https://pc.weixin.qq.com/',
    officialUrl: 'https://weixin.qq.com/',
    iconType: 'icon-wechat'
  },
  {
    id: 'qq',
    name: 'QQ',
    category: '常用软件',
    categoryId: 'common',
    description: '腾讯QQ，全新版本QQ9上线了！ QQ9，不仅是轻松聊天，更是兴趣社区的聚集地。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAIYT.png',
    downloadUrl: 'https://im.qq.com/pcqq/index.shtml',
    officialUrl: 'https://im.qq.com/',
    iconType: 'icon-QQ'
  },
  {
    id: 'netease-music',
    name: '网易云音乐',
    category: '常用软件',
    categoryId: 'common',
    description: '网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAHl4.png',
    downloadUrl: 'https://music.163.com/download',
    officialUrl: 'https://music.163.com/',
    iconType: 'icon-netease-cloud-music-line'
  },
  {
    id: 'qqmusic',
    name: 'QQ音乐',
    category: '常用软件',
    categoryId: 'common',
    description: '千万正版音乐海量无损曲库新歌热歌天天畅听的高品质音乐平台！',
    imageUrl: 'https://www.5114.com.cn/uploads/allimg/20240912/1-2409121T139105.png',
    downloadUrl: 'https://y.qq.com/download/index.html',
    officialUrl: 'https://y.qq.com/',
    iconType: 'icon-qqmusic'
  },
  {
    id: 'sogou-input',
    name: '搜狗输入法',
    category: '常用软件',
    categoryId: 'common',
    description: '搜狗输入法是搜狗推出的一款汉字输入法。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAb6J.png',
    downloadUrl: 'https://shurufa.sogou.com/windows',
    officialUrl: 'https://shurufa.sogou.com/windows',
    iconType: 'icon-sogou'
  },
  {
    id: 'wechat-input',
    name: '微信输入法',
    category: '常用软件',
    categoryId: 'common',
    description: '微信输入法是由腾讯开发的一款输入法产品。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAqX9.png',
    downloadUrl: 'https://z.weixin.qq.com/',
    officialUrl: 'https://z.weixin.qq.com/'
  },
  {
    id: 'qq-pinyin',
    name: 'QQ拼音输入法',
    category: '常用软件',
    categoryId: 'common',
    description: 'QQ拼音输入法是腾讯公司推出的一款汉字输入法。',
    imageUrl: 'https://s21.ax1x.com/2025/06/19/pVVAOmR.png',
    downloadUrl: 'https://qq.pinyin.cn/',
    officialUrl: 'https://qq.pinyin.cn/'
  },
  {
    id: 'winrar',
    name: 'WinRAR',
    category: '常用软件',
    categoryId: 'common',
    description: 'WinRAR是一款强大的压缩解压缩软件，可以备份数据、减小邮件附件大小、解压RAR、ZIP等文件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/WinRAR%207.00%20(64-%CE%BB).png?sign=-Q6dVKgZrBRLt9X15UR6NDQYnS7dYyKRKF4i5MNcyS8=:0',
    downloadUrl: 'https://www.winrar.com.cn/',
    officialUrl: 'https://www.winrar.com.cn/'
  },

  // 游戏必备
  {
    id: 'perfectworld',
    name: '完美世界竞技平台',
    category: '游戏必备',
    categoryId: 'gaming',
    description: '完美世界竞技平台-专业赛事对战平台，提供128tick高主频服务器，自研反作弊系统，绿色认证对局环境。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/tray.ico?sign=UhSBEkn3n3mKJCbSEAQq5f-TIoy_qwm-8-4GMbZiwQc=:0',
    downloadUrl: 'https://pvp.wanmei.com/',
    officialUrl: 'https://pvp.wanmei.com/',
    iconType: 'icon-csgo'
  },
  {
    id: '5eplay',
    name: '5EPlay',
    category: '游戏必备',
    categoryId: 'gaming',
    description: 'CSGO中文网,5E对战平台官网,提供CSGO下载、购买、新手教程等服务。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/5Eplay%20(1).png?sign=2IcS8YvBIkSxAHtqsrhubW_Wj04IB09EQ2RHiPfI2BM=:0',
    downloadUrl: 'https://www.5eplay.com/download',
    officialUrl: 'https://www.5eplay.com/',
    iconType: 'icon-game'
  },
  {
    id: 'uu-accelerator',
    name: '网易UU加速器',
    category: '游戏必备',
    categoryId: 'gaming',
    description: '网易UU加速器，独家自研多项黑科技，提供"不止快，还很稳"的加速服务！为游戏玩家解决延迟、掉线、卡机，高ping等网络问题。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/uu.png?sign=aPas0nOokbJ7XGXZNhKAh8VdGxdlJbiJy6Dfxk7Uab8=:0',
    downloadUrl: 'https://uu.163.com/',
    officialUrl: 'https://uu.163.com/',
    iconType: 'icon-netease'
  },
  {
    id: 'leigod-accelerator',
    name: '雷神加速器',
    category: '游戏必备',
    categoryId: 'gaming',
    description: '雷神科技旗下的雷神加速器,使用金融级内网传输专线,玩家用户使用按分钟计费,不用可随时暂停时间。',
    imageUrl: 'https://www.leigodco.com/img/index/section-logo.png',
    downloadUrl: 'https://www.leigod.com/',
    officialUrl: 'https://www.leigod.com/',
    iconType: 'icon-accelerate'
  },
  {
    id: 'steampp',
    name: 'Watt Toolkit',
    category: '游戏必备',
    categoryId: 'gaming',
    description: 'Watt Toolkit 是一个包含多种Steam工具功能的工具箱。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/watt_toolkit.png?sign=TDhGZmUQZfo8FXnCz8nM1YWiqYuNdQb70JGCwMLLyb8=:0',
    downloadUrl: 'https://steampp.net/',
    officialUrl: 'https://steampp.net/',
    iconType: 'icon-steam'
  },
  {
    id: 'kook',
    name: 'KOOK',
    category: '游戏必备',
    categoryId: 'gaming',
    description: '一个好用的语音沟通工具，支持多种主题的服务器，适合游戏、音乐、阅读等交流。',
    imageUrl: 'https://img.kookapp.cn/assets/item/resources/logo.png',
    downloadUrl: 'https://www.kookapp.cn/',
    officialUrl: 'https://www.kookapp.cn/',
    iconType: 'icon-voice'
  },
  {
    id: 'yy',
    name: 'YY语音',
    category: '游戏必备',
    categoryId: 'gaming',
    description: 'YY致力于打造全民娱乐的互动直播平台，以多样的美女互动、优质的直播内容、极致的互动体验，满足用户音乐、舞蹈等直播需求。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/yyyuyin-S%402x.png?sign=JLNpaEnAsUf-Wds_28KqOOfFxEerZXS-iphAzf8cTe8=:0',
    downloadUrl: 'https://www.yy.com/yy8',
    officialUrl: 'https://www.yy.com/yy8',
    iconType: 'icon-YY'
  },
  {
    id: 'oopz',
    name: 'Oopz语音',
    category: '游戏必备',
    categoryId: 'gaming',
    description: 'Oopz语音是一款专为游戏玩家设计的语音交流软件。',
    imageUrl: 'https://staticcdn.oopz.cn/images/logo.svg',
    downloadUrl: 'https://oopz.cn/',
  },
  {
    id: 'teamspeak3',
    name: 'Teamspeak3语音',
    category: '游戏必备',
    categoryId: 'gaming',
    description: 'TeamSpeak是一款VoIP语音通讯软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/icon-TeamSpeak.png?sign=HDHvIJiC68_DmUpeCF7EymNonZW4xRMR9UnyV-gYALg=:0',
    downloadUrl: 'https://ts3.com.cn/',
  },
  {
    id: 'gamepp',
    name: '游戏加加',
    category: '游戏必备',
    categoryId: 'gaming',
    description: '游戏加加是一款针对网络游戏优化的加速软件。',
    imageUrl: 'https://gamepp.com/public/web/images/foot_logo.png',
    downloadUrl: 'https://gamepp.com/',
  },

  // 驱动下载
  {
    id: 'amd',
    name: 'AMD',
    category: '驱动下载',
    categoryId: 'drivers',
    description: 'AMD驱动程序及软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/Amd.png?sign=uIxKronU6sGEGwpquzkZPIhRvDiBy-070rSlvF54cFk=:0',
    downloadUrl: 'https://www.amd.com/zh-hans/support',
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    category: '驱动下载',
    categoryId: 'drivers',
    description: 'NVIDIA显卡驱动。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/nvidia-copy.png?sign=fzRNrLE-NBNfOx3SxZnArGU69I56piiWKoFkeXFzYRw=:0',
    downloadUrl: 'https://www.nvidia.cn/Download/index.aspx?lang=cn',
  },
  {
    id: 'leiyun4',
    name: '雷云4',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '雷神键盘鼠标的驱动程序。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/LOGO_Razer_%E9%9B%B7%E8%9B%87.png?sign=AgiKtAuOHBY90VYXo_IVz2ceYk88JXxFhtJFeWfZHeU=:0',
    downloadUrl: 'https://cn.razerzone.com/synapse-4',
  },
  {
    id: 'ghub',
    name: 'Ghub',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '罗技G系列产品的驱动程序。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/lghub_installer.png?sign=Xk_2ADtA0IMP6TH9p6lvdrXr9kKHMYmSgirJ-oYBQcA=:0',
    downloadUrl: 'https://www.logitechg.com/zh-cn/innovation/g-hub.html',
  },
  {
    id: 'jufeng',
    name: '飓风',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '飓风外设的驱动程序。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E9%A3%93%E9%A3%8E.png?sign=T3hLpSX2vl_Y20WbKYIXWccJMawjqKF5bW6f34eG668=:0',
    downloadUrl: 'https://hyperx.com/pages/ngenuity',
  },
  {
    id: 'aochuang',
    name: '华硕奥创',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '华硕RGB灯光控制软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E5%A5%A5%E5%88%9B.png?sign=M_Dc14xOx9Z8M8zQlu5B2tv4yUMU-Qgbn7HgLN-DPPs=:0',
    downloadUrl: 'https://www.asus.com/campaign/aura/cn/download.html',
  },
  {
    id: 'wooting',
    name: 'wooting',
    category: '驱动下载',
    categoryId: 'drivers',
    description: 'Wooting键盘驱动程序。',
    imageUrl: 'https://wooting.io/wf/612ca8920bc3a648125ffac3/67b5fbb4667427a1e5530074_Logo_Wooting_2024.svg',
    downloadUrl: 'https://wooting.io/wootility',
  },
  {
    id: 'melgeek',
    name: 'Melgeek',
    category: '驱动下载',
    categoryId: 'drivers',
    description: 'Melgeek键盘的驱动程序。',
    imageUrl: 'https://hive.melgeek.cn/images/switch_view/logo_0.svg',
    downloadUrl: 'https://hive.melgeek.cn/',
  },
  {
    id: 'ajazz',
    name: '美加狮',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '美加狮(Ajazz)外设的驱动程序。',
    imageUrl: 'https://cdn.vxe.com/about/fgg-logo.webp',
    downloadUrl: 'https://hub.fgg.com.cn/',
  },
  {
    id: 'atk',
    name: 'Atk',
    category: '驱动下载',
    categoryId: 'drivers',
    description: '华硕主板的驱动程序。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/ATK.png?sign=W-D7tyhZ9QjFKpvlSiAFz8CHnrdkXyZawdrLZzmft7c=:0',
    downloadUrl: 'https://www.asus.com/support/Download-Center/',
  },


  // 检测工具
  {
    id: 'zfrontier-keyboard',
    name: '在线键盘测试',
    category: '检测工具',
    categoryId: 'testing',
    description: '在线键盘测试工具，测试按键的响应情况。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/19-%E9%94%AE%E7%9B%98.png?sign=FcwQjFFUKWambtYIjYT9ox3vgBz5T1qZ1LZq-EPyxiI=:0',
    downloadUrl: 'https://www.zfrontier.com/lab/keyboardTester',
  },
  {
    id: 'bmcx-keyboard',
    name: '在线屏幕测试',
    category: '检测工具',
    categoryId: 'testing',
    description: '在线屏幕测试工具，检测显示器屏幕功能是否正常。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E6%98%BE%E7%A4%BA%E5%99%A8.png?sign=jBdUwQtvi-hDJDSc5IDIVrwBBd8pgAwm3jSH0GKjv7c=:0',
    downloadUrl: 'https://screen.bmcx.com/#welcome',
  },
  {
    id: 'mousetester',
    name: '在线鼠标测试',
    category: '检测工具',
    categoryId: 'testing',
    description: '在线鼠标测试工具，测试鼠标的基本功能和性能。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E9%BC%A0%E6%A0%87.png?sign=YO45S8tLNhAJ65DlkDoBLyTr22UxMSa_WBVJo04SN_Y=:0',
    downloadUrl: 'https://www.mousetester.cn/',
  },
  {
    id: 'ustc-network',
    name: '在线网络测试',
    category: '检测工具',
    categoryId: 'testing',
    description: '中国科学技术大学网络测试，测试网络连接速度和稳定性。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E5%B7%A5%E5%85%B7%E7%AE%B1-%E6%B5%8B%E7%BD%91%E9%80%9F.png?sign=W2k2WqN8U2TaQMT2_46Dk4GD1EfHOk-zAlqNyztnE1U=:0',
    downloadUrl: 'https://test.ustc.edu.cn/',
  },

  // 直播推流
  {
    id: 'obs',
    name: 'Obs',
    category: '直播推流',
    categoryId: 'streaming',
    description: 'OBS Studio是一款开源的视频录制和直播推流软件。',
    imageUrl: 'https://obsproject.com/assets/images/new_icon_small-r.png',
    downloadUrl: 'https://obsproject.com/download',
  },
  {
    id: 'livematepc',
    name: '直播伴侣',
    category: '直播推流',
    categoryId: 'streaming',
    description: '直播伴侣是一款专业的电脑直播软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E4%BC%B4%E4%BE%A3.png?sign=EN1BUW_nhqdirqa4p37tGOKJYpXQDxtoYM3Kb1UZ6EI=:0',
    downloadUrl: 'https://streamingtool.douyin.com/',
  },
  {
    id: 'tuiliutool',
    name: '推流工具',
    category: '直播推流',
    categoryId: 'streaming',
    description: '推流工具是用于将本地媒体内容推送到流媒体服务器的软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E6%8E%A8%E6%B5%81.png?sign=_LI6Crnrw5dwLuKLmG6jCrrxb_44xKL6wmPRnAjAKjA=:0',
    downloadUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E5%B7%A5%E5%85%B7/%E6%96%B0%E6%9C%BA%E5%BC%80%E8%8D%92/Obs/%E6%8E%A8%E6%B5%81.exe?sign=u_0WqfyXfIhcI9Cjcd_X3W7NMdOGC6QjO1SCPQFm_xw=:0',
  },
  {
    id: 'jianying',
    name: '剪映',
    category: '直播推流',
    categoryId: 'streaming',
    description: '剪映是一款专业的视频剪辑软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E5%89%AA%E6%98%A0.png?sign=9GrmkaLhjDdvZhRnLYQ5QFEyHJ66MDvDsYgouSC5Ggo=:0',
    downloadUrl: 'https://lv.ulikecam.com/',
  },

  // 桌面美化
  {
    id: 'tb-taskbar',
    name: 'TB透明任务栏',
    category: '桌面美化',
    categoryId: 'desktop',
    description: '让Windows任务栏变得透明的工具。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/tb.png?sign=g9m5rRsyy7ZPIKQnnHj_Zb8euNcOJy8cA95qEpUwCOk=:0',
    downloadUrl: 'https://github.com/TranslucentTB/TranslucentTB/releases',
  },
  {
    id: 'rainmeter',
    name: '雨滴桌面',
    category: '桌面美化',
    categoryId: 'desktop',
    description: 'Rainmeter是一款自定义Windows桌面的软件。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E9%9B%A8%E6%BB%B4.png?sign=9n5klBra8vTxOfTZuLRjXVxQa3e73HcUA8qMlJdH7g8=:0',
    downloadUrl: 'https://www.rainmeter.net/',
  },
  {
    id: 'zhimeihua',
    name: '致美化',
    category: '桌面美化',
    categoryId: 'desktop',
    description: '致美化是一个桌面美化交流平台。',
    imageUrl: 'https://dl.zhutix.net/2022/11/logo.svg',
    downloadUrl: 'https://zhutix.com/',
  },
  {
    id: 'zhetui',
    name: '哲风推荐',
    category: '桌面美化',
    categoryId: 'desktop',
    description: '哲风推荐的壁纸网站。',
    imageUrl: 'https://haowallpaper.com/favicon.ico',
    downloadUrl: 'https://haowallpaper.com/',
  },
  {
    id: 'jijian',
    name: '极简壁纸',
    category: '桌面美化',
    categoryId: 'desktop',
    description: '提供高质量壁纸下载的网站。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E6%9E%81%E7%AE%80%E5%A3%81%E7%BA%B8.png?sign=OGJn3vVyh-f-nMH8YjWt7bhIdxS0zAGsfDkmpCGL8og=:0',
    downloadUrl: 'https://bz.zzzmh.cn/index',
  },

  // 好用的小软件
  {
    id: 'geek',
    name: 'Geek卸载',
    category: '好用的小软件',
    categoryId: 'utilities',
    description: 'Geek Uninstaller是一款小巧高效的软件卸载工具。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/geek.png?sign=-_rD5X4zHYJ-axcEWHDx1hEzHUj2_6MhVSTYWYnomow=:0',
    downloadUrl: 'https://geekuninstaller.com/download',
  },
  {
    id: 'hrc',
    name: 'HRC分辨率切换',
    category: '好用的小软件',
    categoryId: 'utilities',
    description: 'HRC分辨率切换器是一个快速切换显示器分辨率的工具。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/HRC.png?sign=x5lr07BcuDyNfCvIO_YeoSDfyD5Ttd3aNtwbnMRUKSw=:0',
    downloadUrl: 'https://funk.eu/hrc/',
  },
  {
    id: 'spacesniffer',
    name: 'SpaceSniffer硬盘文件分析',
    category: '好用的小软件',
    categoryId: 'utilities',
    description: 'SpaceSniffer是一款磁盘空间分析工具。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/%E7%A3%81%E7%9B%98.png?sign=hhyLdAyC_JKXGoASg7a22dIYfltlvAwXSCm_MAYa-ic=:0',
    downloadUrl: 'https://www.uderzo.it/main_products/space_sniffer/download.html',
  },
  {
    id: 'everything',
    name: 'Everything搜索',
    category: '好用的小软件',
    categoryId: 'utilities',
    description: 'Everything是一款文件搜索工具，以速度快著称。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/every.png?sign=CT6653O5tgZDSvzkDFnV9zzuBjMuTK3JmwYz1uZw00U=:0',
    downloadUrl: 'https://www.voidtools.com/downloads/',
  },
  {
    id: 'idm',
    name: 'iDM下载',
    category: '好用的小软件',
    categoryId: 'utilities',
    description: 'Internet Download Manager是一款下载工具。',
    imageUrl: 'https://www.jujcsgo.cn:5243/d/TianYi/%E4%B8%8B%E8%BD%BD/LOGO/idm.png?sign=Fr5DmwilgIOD7ZwDBZguAGz753XjVBs2AkHkyrxLe3Q=:0',
    downloadUrl: 'https://www.internetdownloadmanager.com/download.html',
  },
];

export const getSoftwareByCategory = (categoryId: string): Software[] => {
  return software.filter(item => item.categoryId === categoryId);
};

export const getAllSoftwareCategories = (): CategoryInfo[] => {
  return categories;
}; 