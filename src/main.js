import 'uigg/uigg.css'
import './app.css'

import 'uigg'

import App from './App.svelte'

const app = new App({
    target: document.getElementById('app'),
    props: {
		logo: '/images/logo.svg',
		copy: 'copyrights &copy; <a href="/">lll.cm</a> 本站源码：<a href="//github.com/mixice/lll.cm" target="_blank">github</a>',
		consult: [
			{type: 'pay',descript: '部分内容付费',ico:'ico-circular-star',},
			{type: 'vpn',descript: '可能需要翻墙',ico:'ico-earth',},
			{type: 'adult',descript: '包含16+内容',ico:'ico-circular-disable',},
		],
		list: [
			{classfly: '直播', href: 'live', ico: 'ico-aperture', link: [
				{connect: '电视直播', href: 'live-tv',web: [
					{site: 'CCTV', href: 'tv.cctv.com/live', pay: '', vpn: '', adult: '', info: 'CCTV节目官网'},
					{site: '芒果TV', href: 'live.mgtv.com', pay: 'ture', vpn: '', adult: '', info: '芒果TV直播频道'},
					{site: '好趣网', href: 'tv.haoqu99.com', pay: '', vpn: '', adult: '', info: '2000套高清网络电视直播在线观看'},
					{site: '看全球', href: 'tvquanqiu.com', pay: '', vpn: '', adult: '', info: '世界各国电视台直播在线观看'},
				],},
				{connect: '网络直播', href: 'live-web',web: [
					{site: 'Just Live', href: 'live.yj1211.work', pay: '', vpn: '', adult: '', info: '最新推荐直播'},
					{site: '斗鱼', href: 'douyu.com', pay: 'ture', vpn: '', adult: '', info: '斗鱼游戏直播'},
					{site: '虎牙', href: 'huya.com', pay: 'ture', vpn: '', adult: '', info: '虎牙游戏直播'},
				],},
			],},
			{classfly: '影视', href: 'movie', ico: 'ico-movie', link: [
				{connect: '在线影视', href: 'movie-online',web: [
					{site: '555电影', href: '55vid.shop', pay: '', vpn: '', adult: '', info: '最新Netflix新剧韩国电影免费在线观看'},
					{site: '低端影视', href: 'ddys.art', pay: '', vpn: '', adult: '', info: '超清在线视频站'},
					{site: 'Gimy TV', href: 'gimytv.io', pay: '', vpn: '', adult: '', info: '剧迷线上看'},
					{site: '94i影城', href: '94itv.app', pay: '', vpn: '', adult: '', info: '免费电影线上看'},
					{site: '555电影', href: '555dd1.com', pay: '', vpn: '', adult: '', info: '最新Netflix电视剧'},
					{site: '蓝光影院', href: 'fuxiafood.com', pay: '', vpn: '', adult: '', info: '电影电视剧'},
					{site: 'Voflix', href: 'voflix.me', pay: '', vpn: '', adult: '', info: 'Voflix HD'},
					{site: 'Vidhub', href: 'vidhub.tv', pay: '', vpn: '', adult: '', info: 'Vidhub影视库'},
					{site: '大米星球', href: 'dmflm.com', pay: '', vpn: '', adult: '', info: '最新Netflix剧'},
					{site: '缘觉影视', href: 'yjys.me', pay: '', vpn: '', adult: '', info: '热门电影'},
					{site: '看看屋', href: 'kkw361.com', pay: '', vpn: '', adult: '', info: '电影电视剧'},
					{site: '豌豆PRO', href: 'wandou.la', pay: '', vpn: '', adult: '', info: '云播影院'},
					{site: '片吧影院', href: 'ipbpb.com', pay: '', vpn: '', adult: '', info: '最新电影电视剧免费影视网'},
					{site: '看片狂人', href: 'kpkuang.fun', pay: '', vpn: '', adult: '', info: '免费超前点播'},
					{site: '影视工场', href: 'ysgc.fun', pay: '', vpn: '', adult: '', info: '免费在线观看电影电视剧'},
					{site: '美剧行星', href: 'nfyingshi.com', pay: '', vpn: '', adult: '', info: '如果生活很无趣但至少我可以陪你看剧'},
					{site: '影视TV', href: 'yingshi.tv', pay: '', vpn: '', adult: '', info: '大陆剧美剧韩剧动漫免费高清无广告'},
					{site: 'LIBVIO', href: 'libvio.pro', pay: '', vpn: '', adult: '', info: '电影电视剧'},
					{site: '在线之家', href: 'zxzja.com', pay: '', vpn: '', adult: '', info: '在线观看最新美剧'},
					{site: '大师兄影视', href: 'dsxys.pro', pay: '', vpn: '', adult: '', info: '永久免费的福利超清影视站'},
					{site: '厂长资源', href: 'czzy.top', pay: '', vpn: '', adult: '', info: '超清视频站'},
					{site: 'Gimy小鴨影音', href: 'gimy.cc', pay: '', vpn: '', adult: '', info: '免费电影线上看'},
					{site: '影视网', href: 'yingshi.cc', pay: '', vpn: '', adult: '', info: '电影电视剧'},
					{site: '蓝光影院', href: 'lgyy.fun', pay: '', vpn: '', adult: '', info: '最新电视剧'},
					{site: 'Vidhub视频库', href: 'vidhub.me', pay: '', vpn: '', adult: '', info: '海量高清视频在线观看'},
					{site: '爱迪影视', href: 'adys.tv', pay: '', vpn: '', adult: '', info: '最新韩剧电视剧'},
					{site: '秋霞影视', href: 'qiuxia678.com', pay: '', vpn: '', adult: '', info: '热播电影电视剧'},
					{site: '片吧', href: 'yespb.com', pay: '', vpn: '', adult: '', info: '最新电影电视剧免费影视网'},
					{site: '你牛影视', href: '06ys.com', pay: '', vpn: '', adult: '', info: '提供资源高清免费视频在线观看'},
					{site: '美柏影视', href: 'mp4br.com', pay: '', vpn: '', adult: '', info: '永久免费最新最快的影视网站'},
					{site: '真不卡影院', href: 'bkyb.net', pay: '', vpn: '', adult: '', info: '最新电视剧'},
				],},
				{connect: '影视下载', href: 'movie-down',web: [
					{site: '片库网', href: 'btnull.org', pay: '', vpn: '', adult: '', info: '资源非常全的影视站'},
					{site: 'BT之家', href: 'btbtt12.com', pay: '', vpn: '', adult: '', info: '分享快乐如此简单'},
					{site: '迷客电影', href: 'mini4k.com', pay: '', vpn: '', adult: '', info: '最好的高清'},
				],},
				{connect: '影视搜索', href: 'movie-search',web: [
					{site: '茶杯狐', href: 'cupfox.app', pay: '', vpn: '', adult: '', info: '努力让找电影变得简单'},
					{site: 'MVCAT', href: 'mvcat.com', pay: '', vpn: '', adult: '', info: '电影推荐'},
				],},
				{connect: '字幕', href: 'movie-subtitles',web: [
					{site: '字幕库', href: 'zimuku.org', pay: '', vpn: '', adult: '', info: '字幕下载网'},
					{site: '伪射手', href: 'assrt.net', pay: '', vpn: '', adult: '', info: '字幕下载'},
				],},
			],},
			{classfly: '动漫', href: 'comic', ico: 'ico-naruto', link: [
				{connect: '动画', href: 'comic-animation',web: [
					{site: '菲特动漫', href: 'fitacg.com', pay: '', vpn: '', adult: '', info: '动画新番动画音乐'},
					{site: '樱花动漫', href: 'yinghuavideo.com', pay: '', vpn: '', adult: '', info: '专注动漫的门户网站'},
					{site: '動漫狂', href: 'cartoonmad.com', pay: '', vpn: '', adult: '', info: '免費動畫漫畫分享社群'},
					{site: '动漫之家', href: 'dmzj.com', pay: '', vpn: '', adult: '', info: '动漫之家'},
				],},
				{connect: '漫画', href: 'comic-cartoon',web: [
					{site: '动漫之家', href: 'dmzj.com', pay: '', vpn: '', adult: '', info: '在线漫画原创漫画'},
					{site: 'DM5漫画人', href: 'dm5.com', pay: '', vpn: '', adult: '', info: '为看漫画的人而'},
				],},
			],},
			{classfly: '磁力', href: 'magnetic', ico: 'ico-link', link: [
				{connect: '磁力搜索', href: 'magnetic-search',web: [
					{site: '吴签磁力', href: 'wuqianun.top', pay: '', vpn: '', adult: '', info: '最懂你的磁力链接搜索引擎'},
					{site: 'BTSOW', href: 'btsow.motorcycles', pay: '', vpn: '', adult: '', info: '磁力搜索引擎'},
					{site: '老王磁力', href: 'laowanggb.top', pay: '', vpn: '', adult: '', info: '磁力搜索'},
					{site: '磁力柠檬', href: 'lemongb.top', pay: '', vpn: '', adult: '', info: '最懂你的磁力链接搜索引擎'},
					{site: 'SkrBT', href: 'skrbtgb.top', pay: '', vpn: '', adult: '', info: '专业的种子搜索'},
				],},
			],},
			{classfly: '网盘', href: 'dropbox', ico: 'ico-server', link: [
				{connect: '网盘空间', href: 'dropbox-box',web: [
					{site: '阿里云盘', href: 'aliyundrive.com', pay: 'ture', vpn: '', adult: '', info: '新用户100G'},
					{site: '天翼云盘', href: 'cloud.189.cn', pay: 'ture', vpn: '', adult: '', info: '不限速电信用户10T'},
					{site: '蓝奏云', href: 'lanzoux.com', pay: 'ture', vpn: '', adult: '', info: '限制上传不限下载'},
					{site: '123云盘', href: '123pan.com', pay: 'ture', vpn: '', adult: '', info: '新用户2T'},
					{site: 'Gofile', href: 'gofile.io', pay: 'ture', vpn: 'ture', adult: '', info: '免费文件分享但文件活跃度低会被删除'},
					{site: 'MUSE文件传输', href: 'musetransfer.com', pay: 'ture', vpn: '', adult: '', info: '速度快，临时分享比较好用'},
					{site: '图仓', href: 'tucang.cc', pay: '', vpn: '', adult: '', info: '据说不丢图'},
					{site: 'File Doge', href: 'filedoge.com', pay: 'ture', vpn: '', adult: '', info: '匿名文件分享平台适合临时用'},
					{site: 'Amazon CloudDrive', href: 'amazon.com/clouddrive', pay: 'ture', vpn: 'ture', adult: '', info: '上传快下载慢新用户5G'},
					{site: '奶牛快传', href: 'cowtransfer.com', pay: 'ture', vpn: '', adult: '', info: '新用户10G可永久'},
					{site: '夸克网盘', href: 'pan.quark.cn', pay: 'ture', vpn: '', adult: '', info: '新用户1TB速度可以'},
				],},
				{connect: '网盘工具', href: 'dropbox-tool',web: [
					{site: 'Xdown', href: 'xdown.org', pay: '', vpn: '', adult: '', info: '专业的文件下载与分享工具'},
					{site: '千帆搜索', href: 'pan.qianfan.app', pay: '', vpn: '', adult: '', info: '资源超丰富的聚合网盘搜索引擎'},
					{site: '秒搜', href: 'miaosou.fun', pay: '', vpn: '', adult: '', info: '坚持做最好用的网盘资源搜索引擎'},
					{site: '盘他', href: 'panothers.com', pay: '', vpn: '', adult: '', info: '盘他一下'},
					{site: 'UP云搜', href: 'upyunso.com', pay: '', vpn: '', adult: '', info: '最全阿里云盘资源搜索神器'},
					{site: '易搜', href: 'yiso.fun', pay: '', vpn: '', adult: '', info: '努力做最好用的云盘资源搜索引擎'},
					{site: '猫狸盘搜', href: 'alipansou.com', pay: '', vpn: '', adult: '', info: '阿里云盘搜索神器'},
					{site: '奈斯搜索', href: 'niceso.net', pay: '', vpn: '', adult: '', info: '坚持做最好用的阿里云盘资源搜索引擎'},
					{site: '小云搜索', href: 'yunso.net', pay: '', vpn: '', adult: '', info: '资源多更新快'},
				],},
			],},
			{classfly: '游戏', href: 'game', ico: 'ico-game-key', link: [
				{connect: '在线游戏', href: 'game-online',web: [
					{site: 'Crazy Games', href: 'crazygames.com', pay: '', vpn: '', adult: '', info: '游戏很多速度一般'},
					{site: 'IO Games', href: 'iogames.space', pay: '', vpn: '', adult: '', info: '老牌小游戏大全'},
					{site: 'Y8 Games', href: 'zh.y8.com', pay: '', vpn: '', adult: '', info: '卡成狗要不是看他域名叼早删掉了'},
					{site: 'Pacogames', href: 'pacogames.com', pay: '', vpn: '', adult: '', info: '速度一般的小游戏大全'},
				],},
				{connect: '游戏下载', href: 'game-down',web: [
					{site: '游民星空', href: 'gamersky.com', pay: '', vpn: '', adult: '', info: '大型单机游戏门户'},
					{site: '游侠网', href: 'ali213.net', pay: '', vpn: '', adult: '', info: '单机游戏下载'},
				],},
				{connect: '小游戏', href: 'game-mini',web: [
					{site: 'Yorg 3 超级塔防', href: 'yorg3.io', pay: 'ture', vpn: '', adult: '', info: 'Yorg 3 超级塔防'},
					{site: 'Yorg 超级塔防', href: 'yorg.io', pay: 'ture', vpn: '', adult: '', info: 'Yorg 超级塔防'},
					{site: 'FC在线游戏', href: 'yikm.net', pay: '', vpn: '', adult: '', info: '小霸王其乐无穷'},
					{site: 'Black Hole 城市黑洞', href: 'yumy.io', pay: '', vpn: '', adult: '', info: '城市黑洞'},
					{site: '无限扫雷', href: '1000mines.com', pay: '', vpn: '', adult: '', info: '无限扫雷'},
					{site: '坦克大作战', href: 'arras.io', pay: 'ture', vpn: '', adult: '', info: '坦克大作战'},
					{site: 'TAMING', href: 'taming.io', pay: '', vpn: '', adult: '', info: '生存大作战'},
					{site: 'Venge', href: 'venge.io', pay: '', vpn: '', adult: '', info: '射击游戏'},
					{site: '二维星际战争', href: '2starwar.top', pay: '', vpn: '', adult: '', info: '简笔画星际战争'},
					{site: '进化', href: 'g8hh.github.io/evolve', pay: '', vpn: 'ture', adult: '', info: '生物进化文字游戏'},
				],},
			],},
			{classfly: '音乐', href: 'music', ico: 'ico-music', link: [
				{connect: '在线音乐', href: 'music-online',web: [
					{site: 'Audiomack', href: 'audiomack.com', pay: '', vpn: 'ture', adult: 'ture', info: '因为不限制内容现在需要梯子才能访问'},
					{site: '酷狗', href: 'kugou.com', pay: 'ture', vpn: '', adult: '', info: '就是歌多'},
					{site: 'QQ音乐', href: 'y.qq.com', pay: 'ture', vpn: '', adult: '', info: '千万正版音乐'},
					{site: '网易云音乐', href: 'music.163.com', pay: 'ture', vpn: '', adult: '', info: '精准推荐'},
				],},
				{connect: '音乐资源', href: 'music-down',web: [
					{site: '无损音乐吧', href: 'dtshot.com', pay: '', vpn: '', adult: '', info: '无损音乐下载'},
					{site: '下歌吧', href: 'xiageba.com', pay: '', vpn: '', adult: '', info: '全网音乐高品质'},
				],},
			],},
			{classfly: '图片', href: 'image', ico: 'ico-image', link: [
				{connect: '壁纸', href: 'image-wallpaper',web: [
					{site: 'Wallhaven', href: 'wallhaven.cc', pay: '', vpn: 'ture', adult: 'ture', info: '著名壁纸平台注册后有惊喜'},
					{site: 'Wallpaper Scraft', href: 'wallpaperscraft.com', pay: '', vpn: '', adult: '', info: '速度一般的壁纸平台'},
					{site: 'I Love Papers', href: 'ilovepapers.com', pay: '', vpn: '', adult: '', info: '图片质量一般'},
					{site: '10 Wallpaper', href: '10wallpaper.com', pay: '', vpn: '', adult: '', info: '质量尚可的壁纸平台'},
				],},
			],},
			{classfly: '阅读', href: 'book', ico: 'ico-book', link: [
				{connect: '在线阅读', href: 'book-online',web: [
					{site: '豆瓣阅读', href: 'read.douban.com', pay: 'ture', vpn: '', adult: '', info: '高质量文学内容平台'},
					{site: '番茄小说网', href: 'fanqienovel.com', pay: 'ture', vpn: '', adult: '', info: '番茄小说旗下原创文学平台'},
					{site: '中国大学MOOC(慕课)', href: 'icourse163.org', pay: '', vpn: '', adult: '', info: '国家精品课程在线学习平台'},
				],},
				{connect: '电子书', href: 'book-file',web: [
					{site: 'NMOD 优质电子书', href: 'nmod.net', pay: '', vpn: '', adult: '', info: '电子书下载需要关注公众号'},
					{site: '书格', href: 'shuge.org', pay: '', vpn: '', adult: '', info: '在线古籍图书馆'},
					{site: '苦瓜书盘', href: 'kgbook.com', pay: '', vpn: '', adult: '', info: '苦瓜书盘'},
				],},
			],},
			{classfly: '软件', href: 'software', ico: 'ico-app', link: [
				{connect: '软件搜索', href: 'software-search',web: [
					{site: '小众软件', href: 'appinn.com', pay: '', vpn: '', adult: '', info: '分享免费小巧实用有趣绿色的软件'},
					{site: '异次元软件世界', href: 'iplaysoft.com', pay: '', vpn: '', adult: '', info: '软件改变生活'},
					{site: 'Windows Apps', href: 'amazing-apps.gitbook.io/windows-apps-that-amaze-us/zh-cn', pay: '', vpn: '', adult: '', info: ' Windows 绝妙项目'},
					{site: '果核剥壳', href: 'ghxi.com', pay: '', vpn: '', adult: '', info: ' 互联网的净土'},
				],},
			],},
			{classfly: '素材', href: 'material', ico: 'ico-knowledge', link: [
				{connect: '图片素材', href: 'material-image',web: [
					{site: '昵图网', href: 'www.nipic.com', pay: 'ture', vpn: '', adult: '', info: '老牌素材站可上传素材获取积分'},
					{site: '美工云', href: 'meigongyun.com', pay: 'ture', vpn: '', adult: '', info: '新晋素材站素材质量高会员也贵'},
					{site: '千库网', href: '588ku.com', pay: 'ture', vpn: '', adult: '', info: '套路多会员贵'},
					{site: '包图网', href: 'ibaotu.com', pay: 'ture', vpn: '', adult: '', info: '套路多会员贵'},
					{site: '16素材网', href: '16sucai.com', pay: 'ture', vpn: '', adult: '', info: '价格一般质量尚可'},
					{site: '图精灵', href: '616pic.com', pay: 'ture', vpn: '', adult: '', info: '资源一般价格便宜'},
					{site: '站长素材', href: 'sc.chinaz.com', pay: 'ture', vpn: '', adult: '', info: '大部分免费质量一般但种类全'},
					{site: 'Pexels', href: 'pexels.com', pay: '', vpn: '', adult: '', info: '无版权是核心'},
					{site: 'SVG背景图', href: 'svg.ee', pay: '', vpn: '', adult: '', info: '免费提供不大于10KG的SVG背景图'},
					{site: 'loading 动画', href: 'icons8.com/preloaders', pay: '', vpn: '', adult: '', info: '提供各种loading小图'},
					{site: 'Svg Backgrounds', href: 'svgbackgrounds.com', pay: '', vpn: '', adult: '', info: '提供可编辑的SVG背景图'},
					{site: '无版权素材', href: 'pixabay.com/zh/photos', pay: '', vpn: '', adult: '', info: '无版权图片素材'},
					{site: 'Pixeden', href: 'pixeden.com', pay: '', vpn: '', adult: '', info: '资源不错但下载麻烦'},
					{site: 'Free Resources', href: 'freebiesbug.com', pay: '', vpn: 'ture', adult: '', info: '免费素材库下载有点慢'},
					{site: 'GraphBerry', href: 'graphberry.com', pay: '', vpn: '', adult: '', info: '免费的设计源文件'},
					{site: 'Free Stock Photos', href: 'stocksnap.io', pay: '', vpn: '', adult: '', info: '高清图片资源'},
					{site: 'ISO Republic', href: 'isorepublic.com', pay: '', vpn: '', adult: '', info: '免费的高清图片库'},
					{site: 'Beautiful Free Images', href: 'unsplash.com', pay: '', vpn: '', adult: '', info: '漂亮的免费图片库'},
					{site: 'Free Premium Mockups', href: 'mockups-design.com', pay: '', vpn: '', adult: '', info: '样品展示素材库'},
					{site: 'Foodiesfeed', href: 'foodiesfeed.com', pay: '', vpn: '', adult: '', info: '美食素材库'},
					{site: 'Free Stock Photos', href: 'burst.shopify.com', pay: '', vpn: '', adult: '', info: '免费可商用图片库'},
					{site: 'illustAC', href: 'illustac-cn.com', pay: '', vpn: '', adult: '', info: '免费矢量剪贴画'},
					{site: 'Reshot', href: 'reshot.com', pay: '', vpn: '', adult: '', info: '免费图标矢量照片搜索'},
					{site: '优图库', href: 'utu.cool', pay: 'ture', vpn: '', adult: '', info: '精品国内外素材图库共享平台'},
					{site: 'VectorPortal', href: 'vectorportal.com', pay: '', vpn: '', adult: '', info: '免费的SVG图形'},
					{site: 'Psdrepo', href: 'psdrepo.com', pay: '', vpn: '', adult: '', info: '免费PSD'},
					{site: 'Negativespace', href: 'negativespace.co', pay: '', vpn: '', adult: '', info: 'Beautiful free images'},
					{site: 'Yandex', href: 'yandex.com/images', pay: '', vpn: 'ture', adult: '', info: '以图搜图'},
					{site: 'Free3dicon', href: 'free3dicon.com', pay: '', vpn: '', adult: '', info: '免费3D'},
					{site: '小洋丁插画', href: 'xiaonail.com', pay: 'ture', vpn: '', adult: '', info: '可定制的插画组件'},
				],},
				{connect: '音频素材', href: 'material-audio',web: [
					{site: '爱给网', href: 'aigei.com', pay: 'ture', vpn: '', adult: '', info: '免费用户限制下载次数'},
					{site: '无版权音乐', href: 'pixabay.com/zh/music', pay: '', vpn: '', adult: '', info: '免费的无版权音乐'},
					{site: 'MixKit', href: 'mixkit.co/free-stock-music', pay: '', vpn: 'ture', adult: '', info: '大部分免费'},
					{site: '站长之家', href: 'sc.chinaz.com/yinxiao', pay: 'ture', vpn: '', adult: '', info: '音效下载'},
					{site: 'Sampld', href: 'open.sampld.app', pay: '', vpn: '', adult: '', info: '免费商用音乐片段素材库'},
					{site: 'NoCopyrightSounds', href: 'ncs.io', pay: '', vpn: 'ture', adult: '', info: '来自英国的免费音乐库'},
				],},
				{connect: '视频素材', href: 'material-video',web: [
					{site: '视频特效下载', href: 'videocopilot.net.cn', pay: '', vpn: '', adult: '', info: '主要是AE资源'},
					{site: '无版权视频', href: 'pixabay.com/zh/videos', pay: '', vpn: '', adult: '', info: '免费正版高清视频素材库'},
					{site: '新CG儿', href: 'newcger.com', pay: '', vpn: '', adult: '', info: 'AE素材和工程文件'},
					{site: 'CG资源网', href: 'cgown.com', pay: 'ture', vpn: '', adult: '', info: '各种CG资源大部分收费'},
					{site: 'MixKit', href: 'mixkit.co/free-stock-video', pay: '', vpn: 'ture', adult: '', info: '大部分免费'},
					{site: 'Free Stock Video Footage', href: 'coverr.co', pay: '', vpn: '', adult: '', info: '免费专业视频资源'},
					{site: 'Free Stock Video', href: 'mazwai.com', pay: '', vpn: '', adult: '', info: '免费专业视频资源'},
					{site: 'Videvo', href: 'videvo.net', pay: '', vpn: '', adult: '', info: '英国免费视频素材'},
					{site: '潮点视频', href: 'shipin520.com', pay: 'ture', vpn: '', adult: '', info: '版权高清视频素材下载'},
					{site: 'Dronestock', href: 'dronestock.com', pay: 'ture', vpn: '', adult: '', info: '无人机航拍素材'},
				],},
				{connect: '其他素材', href: 'material-other',web: [
					{site: 'Shapefest free 3D', href: 'shapefest.com', pay: '', vpn: 'ture', adult: '', info: '免费的3D图样素材内容少'},
					{site: 'C4D之家', href: 'c4d.cn', pay: 'ture', vpn: '', adult: '', info: '提供一些C4D素材但收费'},
					{site: '阿里图标', href: 'iconfont.cn', pay: '', vpn: '', adult: '', info: '打包下载限制20个产品经理是脑残么'},
					{site: 'IconFinder', href: 'iconfinder.com', pay: 'ture', vpn: '', adult: '', info: '大部分收费'},
					{site: 'Remix Icon', href: 'remixicon.com', pay: '', vpn: '', adult: '', info: '一个开源的图标库'},
					{site: 'Flaticon', href: 'flaticon.com', pay: 'ture', vpn: '', adult: '', info: '图标搜索平台有点贵'},
					{site: 'Uigg Ico', href: 'ui.gg/ico.php', pay: '', vpn: '', adult: '', info: 'UI框架中的免费图标'},
					{site: 'Pixelsquid 3D', href: 'pixelsquid.com', pay: '', vpn: 'ture', adult: '', info: '可以用于PS的3D素材收费'},
					{site: 'CSS ICO', href: 'css.gg', pay: '', vpn: '', adult: '', info: '基于CSS的图标库'},
					{site: 'Wannathis', href: 'wannathis.one', pay: 'ture', vpn: 'ture', adult: '', info: '高质量低格3D素材'},
					{site: 'Free customizable 3D icons', href: 'vertex.im', pay: '', vpn: '', adult: '', info: '免费的3D图标库'},
					{site: 'Health Icons', href: 'healthicons.org', pay: '', vpn: '', adult: '', info: '医疗行业图标'},
					{site: 'iconshock', href: 'www.iconshock.com/vectoricons', pay: 'ture', vpn: 'ture', adult: '', info: 'ICO定制'},
				],},
			],},
			{classfly: '开发', href: 'develop', ico: 'ico-alone-verification', link: [
				{connect: '前端', href: 'develop-frontend',web: [
					{site: 'Bootstrap', href: 'v5.bootcss.com', pay: '', vpn: '', adult: '', info: 'Twitter的前端框架'},
					{site: 'npm 中文网', href: 'npmjs.cn', pay: '', vpn: '', adult: '', info: 'NPM中文内容'},
					{site: 'Vue 渐进式框架', href: 'v3.cn.vuejs.org', pay: '', vpn: '', adult: '', info: 'VUEV3的官网'},
					{site: 'React 中文文档', href: 'react.docschina.org', pay: '', vpn: '', adult: '', info: 'Facebook的前端框架'},
					{site: 'Angular 中文文档', href: 'angular.cn', pay: '', vpn: '', adult: '', info: 'Google的前端框架'},
					{site: 'Svelte', href: 'svelte.dev', pay: '', vpn: '', adult: '', info: '构建Web应用程序的一种新方法'},
					{site: 'UIGG', href: 'ui.gg', pay: '', vpn: '', adult: '', info: 'WEB原生框架'},
					{site: 'Node 中文文档', href: 'nodeapp.cn', pay: '', vpn: '', adult: '', info: 'NODE中文文档'},
					{site: 'GreenSock', href: 'greensock.com', pay: '', vpn: 'ture', adult: '', info: '最健全的web动画库'},
					{site: 'Swiper', href: 'swiperjs.com', pay: '', vpn: '', adult: '', info: '轮播图幻灯片JS插件'},
					{site: 'Anime', href: 'www.animejs.com', pay: '', vpn: '', adult: '', info: '动画JS插件'},
					{site: 'Element', href: 'element.eleme.cn', pay: '', vpn: '', adult: '', info: '基于VUE的界面组件'},
					{site: 'Less', href: 'less.bootcss.com', pay: '', vpn: '', adult: '', info: '给CSS加一点料'},
					{site: 'Apache ECharts', href: 'echarts.apache.org', pay: '', vpn: '', adult: '', info: '基于JavaScript的数据可视化图表库'},
					{site: 'Chartjs', href: 'chartjs.org', pay: '', vpn: '', adult: '', info: '开源的HTML5图表工具'},
					{site: 'Grabient', href: 'grabient.com', pay: '', vpn: '', adult: '', info: '渐变优选'},
					{site: '渐变编辑器', href: 'colorzilla.com/gradient-editor', pay: '', vpn: '', adult: '', info: '用于创建渐变的编辑器'},
					{site: '视差滚动', href: 'scrollrevealjs.org', pay: 'ture', vpn: '', adult: '', info: '视差滚动JS插件'},
					{site: 'Uppy 上传组件', href: 'uppy.io', pay: '', vpn: '', adult: '', info: '处理上传的JS插件'},
					{site: 'Stackblitz', href: 'stackblitz.com', pay: '', vpn: '', adult: '', info: '在线IDE'},
					{site: 'Apifox', href: 'apifox.cn', pay: 'ture', vpn: '', adult: '', info: 'API测试一体化协作平台'},
					{site: 'CodeFun', href: 'code.fun', pay: 'ture', vpn: '', adult: '', info: '设计稿智能生成前端源代码'},
					{site: 'BuildAdmin', href: 'buildadmin.com', pay: 'ture', vpn: '', adult: '', info: '基于ThinkPHP8和Vue3打造的商业级后台管理系统'},
				],},
				{connect: '编程', href: 'develop-program',web: [
					{site: 'Codepen', href: 'codepen.io', pay: '', vpn: '', adult: '', info: '在线代码编辑器'},
					{site: 'Github', href: 'github.com', pay: '', vpn: 'ture', adult: '', info: 'GIT开源分享平台'},
					{site: 'Gitee', href: 'gitee.com', pay: 'ture', vpn: '', adult: '', info: '国内GIT开源分享平台'},
					{site: 'CodeGen', href: 'codegen.cc', pay: '', vpn: '', adult: '', info: '面向开发人员的工具箱'},
				],},
				{connect: '游戏', href: 'develop-game',web: [
					{site: 'GGAC', href: 'ggac.com', pay: '', vpn: '', adult: '', info: 'CG艺术创作分享平台'},
				],},
			],},
			{classfly: '工具', href: 'tool', ico: 'ico-spanner', link: [
				{connect: '协作效率', href: 'tool-efficiency',web: [
					{site: '腾讯文档', href: 'docs.qq.com', pay: 'ture', vpn: '', adult: '', info: '文档表格幻灯片收集表思维导图流程图'},
					{site: '蓝湖', href: 'lanhuapp.com', pay: 'ture', vpn: '', adult: '', info: '蓝湖协作平台'},
					{site: '蓝湖设计图转代码', href: 'lanhuapp.com/dds', pay: '', vpn: '', adult: '', info: '将设计图一键生成代码'},
					{site: 'MasterGo在线设计', href: 'mastergo.com', pay: '', vpn: '', adult: '', info: '在线设计器'},
					{site: 'Pixso', href: 'pixso.cn', pay: '', vpn: '', adult: '', info: '多人协作原型设计工具'},
					{site: 'CoDesign', href: 'codesign.qq.com', pay: '', vpn: '', adult: '', info: '腾讯协作平台'},
					{site: '即时设计', href: 'js.design', pay: '', vpn: '', adult: '', info: '在线设计'},
					{site: 'Figma', href: 'figma.com', pay: 'ture', vpn: 'ture', adult: '', info: '三大UI设计器之一可在线使用'},
					{site: '腾讯问卷', href: 'wj.qq.com', pay: 'ture', vpn: '', adult: '', info: '腾讯问卷生成工具'},
					{site: 'TeamBition 协作', href: 'teambition.com', pay: 'ture', vpn: '', adult: '', info: '阿里办公流程协作平台'},
					{site: '属性兼容搜索', href: 'caniuse.com', pay: '', vpn: '', adult: '', info: '属性兼容性搜索工具'},
					{site: 'Gitmind 脑图', href: 'gitmind.cn', pay: 'ture', vpn: '', adult: '', info: '一款好看的脑图工具但收费'},
					{site: '腾讯兔小巢', href: 'support.qq.com', pay: '', vpn: '', adult: '', info: '收集用户留言的工具'},
					{site: '看得见协作的远程会议', href: 'teamind.co', pay: 'ture', vpn: '', adult: '', info: '看得见协作的远程互动会议'},
					{site: '知犀思维导图', href: 'zhixi.com', pay: '', vpn: '', adult: '', info: '完全免费好看的思维导图'},
					{site: 'Pixelart', href: 'pixelart.liveblocks.app', pay: '', vpn: '', adult: '', info: '像素画多人协作绘画'},
					{site: '智能PPT', href: 'aippt.wps.cn', pay: '', vpn: '', adult: '', info: '自动美化的在线PPT工具'},
					{site: 'iiisometric', href: 'fffuel.co/iiisometric', pay: '', vpn: '', adult: '', info: '快速绘制方块矢量插图'},
					{site: '金数据', href: 'jinshuju.net', pay: 'ture', vpn: '', adult: '', info: '数据表单收集工具'},
					{site: 'Billfish', href: 'billfish.cn', pay: '', vpn: '', adult: '', info: '素材管理工具'},
					{site: '语雀', href: 'yuque.com', pay: 'ture', vpn: '', adult: '', info: '帮助文档内容组织器'},
					{site: 'UPDF', href: 'updf.cn', pay: 'ture', vpn: '', adult: '', info: '免费的PDF编辑器'},
					{site: 'ilovePDF', href: 'ilovepdf.com', pay: '', vpn: '', adult: '', info: 'PDF全格式转换'},
					{site: 'PDFlux', href: 'pdflux.com', pay: '', vpn: '', adult: '', info: 'PDF文档内容识别提取'},
				],},
				{connect: '图文处理', href: 'tool-image',web: [
					{site: 'PhotoKit', href: 'photokit.com', pay: '', vpn: '', adult: '', info: '抠图工具'},
					{site: 'Tinypng 图片压缩', href: 'tinypng.com', pay: 'ture', vpn: '', adult: '', info: 'PNG压缩专业插件收费'},
					{site: '智能图像压缩', href: 'img.top', pay: 'ture', vpn: '', adult: '', info: '图片压缩'},
					{site: '压缩图', href: 'yasuotu.com', pay: 'ture', vpn: '', adult: '', info: '图片压缩付费才能超过60张'},
					{site: 'Squoosh 图片压缩', href: 'squoosh.app', pay: '', vpn: '', adult: '', info: '又一个图片压缩'},
					{site: '在线抠图', href: 'clippingmagic.com', pay: 'ture', vpn: 'ture', adult: '', info: '在线抠图'},
					{site: '快速抠图', href: 'backgrounderaser.io', pay: '', vpn: '', adult: '', info: '又一个在线抠图'},
					{site: 'Base64 编码', href: 'tool.css-js.com/base64.html', pay: '', vpn: '', adult: '', info: '将图片转换成base64编码'},
					{site: 'Vectary 3D', href: 'vectary.com', pay: 'ture', vpn: 'ture', adult: '', info: '生成3D广告图收费'},
					{site: 'WeaveSilk', href: 'weavesilk.com', pay: '', vpn: '', adult: '', info: '对称波纹线条生成器'},
					{site: '纸张艺术', href: 'pissang.github.io/paper-quilling-art', pay: '', vpn: '', adult: '', info: '纸张艺术生成器'},
					{site: '飞行光点', href: 'wangyasai.github.io/Stars-Emmision', pay: '', vpn: '', adult: '', info: '飞行光点生成器'},
					{site: '照片擦除元素', href: 'cleanup.pictures', pay: 'ture', vpn: '', adult: '', info: '照片擦除元素小工具'},
					{site: 'Vector Halftone Maker', href: 'halftone.xoihazard.com', pay: '', vpn: '', adult: '', info: '点状图生成器'},
					{site: 'Imagetosketch', href: 'imagetosketch.com', pay: '', vpn: '', adult: '', info: '素描化你的照片'},
					{site: 'Image to Cartoon', href: 'imagetocartoon.com', pay: '', vpn: '', adult: '', info: '照片转卡通'},
					{site: 'ANIMATED DRAWINGS', href: 'sketch.metademolab.com/canvas', pay: '', vpn: '', adult: '', info: '将你作品中的角色动画化'},
					{site: 'PhotoMosh', href: 'photomosh.com', pay: '', vpn: '', adult: '', info: '赛博朋克图片生成器'},
					{site: 'Mesh gradients', href: 'meshgradient.in', pay: '', vpn: '', adult: '', info: '一键生成弥散渐变'},
					{site: 'SVG Waves', href: 'svgwave.in', pay: '', vpn: '', adult: '', info: 'SVG 波浪生成器'},
					{site: 'SVG generator', href: 'fffuel.co', pay: '', vpn: '', adult: '', info: 'SVG 图形生成器'},
					{site: 'BgSub', href: 'bgsub.cn', pay: '', vpn: '', adult: '', info: '消除或者替换图像背景'},
					{site: 'Palette', href: 'palette.fm', pay: 'ture', vpn: '', adult: '', info: '照片自动上色'},
					{site: 'Haikei', href: 'haikei.app', pay: 'ture', vpn: '', adult: '', info: 'SVG生成器'},
					{site: 'Spline', href: 'spline.design', pay: 'ture', vpn: '', adult: '', info: '3D设计工具'},
				],},
				{connect: '音视频处理', href: 'tool-media',web: [
					{site: '分秒帧', href: 'mediatrack.cn', pay: 'ture', vpn: '', adult: '', info: '音视频生产协作平台'},
					{site: 'Clipchamp', href: 'app.clipchamp.com', pay: 'ture', vpn: 'ture', adult: '', info: '视频在线编辑'},
					{site: '智影', href: 'zenvideo.qq.com', pay: '', vpn: '', adult: '', info: '多媒体处理平台'},
					{site: 'AE动画预览', href: 'lottiefiles.com/preview', pay: '', vpn: 'ture', adult: '', info: 'AE动画预览'},
					{site: '网易天音', href: 'tianyin.163.com', pay: '', vpn: '', adult: '', info: '网易AI编曲工具'},
					{site: '新片场', href: 'xinpianchang.com', pay: 'ture', vpn: '', adult: '', info: '发现全球优质视频与创作人'},
					{site: '人声音乐分离', href: 'lalal.ai', pay: 'ture', vpn: '', adult: '', info: '人声音乐分离收费'},
					{site: '闪电分镜', href: 'app.mediastory.cc', pay: 'ture', vpn: '', adult: '', info: '分镜绘制通告制作场景管理'},
					{site: '快剪辑', href: 'kuaijianji.com', pay: 'ture', vpn: '', adult: '', info: '强大的在线视频剪辑'},
					{site: '必剪', href: 'bcut.drawyoo.com', pay: '', vpn: '', adult: '', info: 'B站剪辑软件'},
					{site: '剪映', href: 'lv.ulikecam.com', pay: '', vpn: '', adult: '', info: '抖音剪辑软件'},
					{site: 'OBS Studio', href: 'obsproject.com', pay: '', vpn: '', adult: '', info: '免费的录屏和直播软件'},
					{site: '歌叽歌叽', href: 'gejigeji.kugou.com', pay: '', vpn: '', adult: '', info: '虚拟歌手歌曲创作软件'},
					{site: 'Vocalremover', href: 'vocalremover.org', pay: '', vpn: '', adult: '', info: '超强声音处理器'},
					{site: 'Unscreen', href: 'unscreen.com', pay: 'ture', vpn: '', adult: '', info: '可去除视频背景'},
					{site: '小镜故事板', href: 'xjstoryboard.com', pay: '', vpn: '', adult: '', info: 'AI分镜创作'},
					{site: 'TME studio', href: 'y.qq.com/tme_studio/', pay: '', vpn: '', adult: '', info: '音乐创作助手'},
				],},
				{connect: '人工智能', href: 'tool-ai',web: [
					{site: 'ChatGPT', href: 'chat.openai.com', pay: 'ture', vpn: 'ture', adult: '', info: 'AI创世'},
					{site: '扣子', href: 'coze.cn', pay: '', vpn: '', adult: '', info: 'AI智能体开发平台'},
					{site: '豆包', href: 'doubao.com', pay: '', vpn: '', adult: '', info: '抖音旗下AI智能助手'},
					{site: 'Akuma', href: 'akuma.ai', pay: 'ture', vpn: '', adult: '', info: 'AI绘画'},
					{site: '度加创作工具', href: 'aigc.baidu.com', pay: '', vpn: '', adult: '', info: '百度AIGC创作平台'},
					{site: '天工AI', href: 'tiangong.cn', pay: '', vpn: '', adult: '', info: '全能AI助手'},
					{site: '既梦', href: 'dreamina.jianying.com/ai-tool', pay: '', vpn: '', adult: '', info: 'AI绘图视频助手'},
					{site: 'Stable video', href: 'stablevideo.com', pay: '', vpn: '', adult: '', info: '视频AI生成'},
				],},
				{connect: '小工具', href: 'tool-min',web: [
					{site: '草料二维码', href: 'cli.im', pay: 'ture', vpn: '', adult: '', info: '老牌二维码创意工具'},
					{site: '字体CDN', href: 'cdnfonts.com', pay: '', vpn: '', adult: '', info: '字体CDN服务资源只有英文字体'},
					{site: '字体格式转换', href: 'everythingfonts.com/font-face', pay: '', vpn: '', adult: '', info: '讲电脑文字转换成WEB文字'},
					{site: 'Google字体中文版', href: 'googlefonts.cn', pay: '', vpn: 'ture', adult: '', info: 'Google字体中文镜像'},
					{site: '字体识别搜索', href: 'qiuziti.com', pay: 'ture', vpn: '', adult: '', info: '识别图片上的字体下载收费'},
					{site: '酷家乐', href: 'kujiale.com', pay: 'ture', vpn: '', adult: '', info: '在线室内设计工具高级功能收费'},
					{site: '油条工具箱', href: 'utils.fun', pay: '', vpn: '', adult: '', info: '在线工具箱'},
					{site: '文本转语音', href: 'toolb.cn/textspeech', pay: '', vpn: '', adult: '', info: '微软AI语音'},
					{site: 'ToolB在线工具', href: 'toolb.cn', pay: '', vpn: '', adult: '', info: '在线工具箱'},
					{site: '在线工具', href: 'tools.fun', pay: '', vpn: '', adult: '', info: '在线工具要你命3000'},
					{site: '自由钢琴', href: 'autopiano.cn', pay: '', vpn: '', adult: '', info: '在线钢琴'},
					{site: 'Ele Types', href: 'eletypes.com', pay: '', vpn: '', adult: '', info: '在线打字练习工具'},
					{site: '微工具', href: 'wetools.com', pay: '', vpn: '', adult: '', info: '开发者在线工具大全'},
				],},
			],},
			{classfly: '资讯', href: 'idle', ico: 'ico-archive', link: [
				{connect: '博客', href: 'idle-blog',web: [
					{site: 'CSDN', href: 'blog.csdn.net', pay: 'ture', vpn: '', adult: '', info: '专业IT技术发表平台'},
					{site: '掘金', href: 'juejin.cn', pay: '', vpn: '', adult: '', info: '代码不止掘金不停'},
					{site: '不会笑青年', href: 'buhuixiao.com', pay: '', vpn: '', adult: '', info: '以程序员为主题的漫画'},
				],},
				{connect: '热榜', href: 'idle-news',web: [
					{site: '抽屉新热榜', href: 'dig.chouti.com', pay: '', vpn: '', adult: '', info: '聚合每日热门搞笑有趣资讯'},
					{site: '摸摸鱼', href: 'momoyu.cc', pay: '', vpn: '', adult: '', info: '摸摸鱼热榜'},
				],},
			],},
		],
		link: [
			{site: 'UIGG', href: 'ui.gg', info: '静态前端框架'},
			{site: '秒速科技', href: 'mssay.com', info: '网络服务供应商'},
			{site: 'mixice', href: 'mixice.com', info: '众里寻他千百度'},
			{site: 'SVG 背景', href: 'svg.ee', info: '提供10KB以内的SVG背景'},
			{site: 'MIX', href: 'mix.vc', info: '客户服务'},
			{site: 'ICO图标库', href: 'ico.im', info: '我的图标库'},
			{site: 'VERY VISION', href: 'vv.chat', info: 'VERY VISION'},
		],
	}
})

export default app

$('.consult li.pay').on('click',function(){$('.list li a u i[data-pay="ture"]').parents('li').toggle()})
$('.consult li.vpn').on('click',function(){$('.list li a u i[data-vpn="ture"]').parents('li').toggle()})
$('.consult li.adult').on('click',function(){$('.list li a u i[data-adult="ture"]').parents('li').toggle()})










