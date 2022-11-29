import 'uigg/uigg.css'
import './app.css'

import 'uigg'

import App from './App.svelte'

const app = new App({
    target: document.getElementById('app'),
    props: {
		logo: '/images/logo.svg',
		copy: 'copyrights &copy; <a href="/">lll.cm</a>',
		consult: [
			{descript: '部分内容付费',ico:'ico-circular-star',},
			{descript: '可能需要翻墙',ico:'ico-earth',},
			{descript: '包含16+内容',ico:'ico-circular-disable',},
		],
		list: [
			{classfly: '推荐', href: 'recommend', ico: 'ico-heart', link: [
				{connect: '优质推荐', href: 'recommend-good', web: [

				],},
				{connect: 'APP', href: 'recommend-app',web: [

				],},
			],},
			{classfly: '直播', href: 'live', ico: 'ico-aperture', link: [
				{connect: '电视直播', href: 'live-tv',web: [
					{site: 'CCTV', href: 'tv.cctv.com/live', pay: '', vpn: '', adult: '', info: 'CCTV节目官网'},
					{site: '芒果TV', href: 'live.mgtv.com', pay: 'ture', vpn: '', adult: '', info: '芒果TV直播频道'},
					{site: '电视眼', href: 'tvyan.com', pay: '', vpn: '', adult: '', info: '网络电视直播网'},
					{site: '好趣网', href: 'tv.haoqu99.com', pay: '', vpn: '', adult: '', info: '2000套高清网络电视直播在线观看'},
					{site: '看全球', href: 'tvquanqiu.com', pay: '', vpn: '', adult: '', info: '世界各国电视台直播在线观看'},
				],},
				{connect: '网络直播', href: 'live-web',web: [
					{site: 'Just Live', href: 'live.yj1211.work', pay: '', vpn: '', adult: '', info: '最新推荐直播'},
				],},
			],},
			{classfly: '影视', href: 'movie', ico: 'ico-movie', link: [
				{connect: '在线影视', href: 'movie-online',web: [
					{site: '蛋蛋赞影院', href: 'dandanzan10.top', pay: '', vpn: '', adult: '', info: '最新最全高清在线影院'},
					{site: 'NO视频', href: 'novipnoad.com', pay: '', vpn: '', adult: '', info: '致力于最轻松的追剧体验'},
					{site: 'APP影院', href: 'app.movie', pay: '', vpn: '', adult: '', info: '全网最全视频库'},
					{site: '鸭奈飞电影', href: 'yanetflix.com', pay: '', vpn: '', adult: '', info: '专注于为国内用户提供免费的奈飞影剧'},
					{site: '555电影', href: '555dy.vip', pay: '', vpn: '', adult: '', info: '最新Netflix新剧韩国电影免费在线观看'},
					{site: 'YY影视', href: 'yyzone.net', pay: '', vpn: '', adult: '', info: '最新电影最新电视剧'},
					{site: '凌云影视', href: 'lingyun.in', pay: '', vpn: '', adult: '', info: '全网最近好看的影视聚合下载'},
					{site: '天天视频', href: 'ttsp.tv', pay: '', vpn: '', adult: '', info: '免费影视在线看'},
					{site: 'Gimy TV', href: 'gimytv.app', pay: '', vpn: '', adult: '', info: '剧迷线上看'},
					{site: '电影先生', href: 'dyxs6.xyz', pay: '', vpn: '', adult: '', info: '聚合全网高清影视在线观看、下载'},
					{site: '88影视网', href: '88hd.com', pay: '', vpn: '', adult: '', info: '电影在线观看'},
					{site: 'COKEMV影视', href: 'cokemv.me', pay: '', vpn: '', adult: '', info: '蓝光在线无广告'},
					{site: 'Hdmoli', href: 'hdmoli.com', pay: '', vpn: '', adult: '', info: '高品质在线影视'},
					{site: '看韩剧', href: 'kan.cc', pay: '', vpn: '', adult: '', info: '最新韩剧'},
					{site: '泰剧网', href: 'taijuaa.com', pay: '', vpn: '', adult: '', info: '最新热门泰剧泰影免费在线看'},
				],},
				{connect: '影视下载', href: 'movie-down',web: [
					{site: '片库网', href: 'btnull.re', pay: '', vpn: '', adult: '', info: '资源非常全的影视站'},
					{site: '豌豆PRO', href: 'wandou.pro', pay: '', vpn: '', adult: '', info: '影视下载'},
				],},
				{connect: '影视搜索', href: 'movie-search',web: [
					{site: '茶杯狐', href: 'cupfox.app', pay: '', vpn: '', adult: '', info: '努力让找电影变得简单'},
					{site: '橘子盘搜', href: 'nmme.cc', pay: '', vpn: '', adult: '', info: '好用的影视资源搜索引擎'},
					{site: 'MVCAT', href: 'mvcat.com', pay: '', vpn: '', adult: '', info: '电影推荐'},
				],},
				{connect: '字幕', href: 'movie-subtitles',web: [
					{site: '字幕库', href: 'zimuku.org', pay: '', vpn: '', adult: '', info: '字幕下载网'},
					{site: 'SUBHD', href: 'subhd.tv', pay: '', vpn: '', adult: '', info: '分享交流下载字幕平台'},
					{site: '伪射手', href: 'assrt.net', pay: '', vpn: '', adult: '', info: '字幕下载'},
					{site: '人人字幕组', href: 'yysub.net/subtitle', pay: '', vpn: '', adult: '', info: '字幕组网站'},
				],},
			],},
			{classfly: '动漫', href: 'comic', ico: 'ico-naruto', link: [
				{connect: '动画', href: 'comic-animation',web: [
					{site: '漫岛TV', href: 'www.mandao.tv', pay: '', vpn: '', adult: '', info: '好看的动漫大全聚合网站'},
					{site: '菲特动漫', href: 'fitacg.com', pay: '', vpn: '', adult: '', info: '动画新番动画音乐'},
				],},
				{connect: '漫画', href: 'comic-cartoon',web: [
					{site: '动漫之家', href: 'dmzj.com', pay: '', vpn: '', adult: '', info: '在线漫画原创漫画'},
					{site: 'DM5漫画人', href: 'dm5.com', pay: '', vpn: '', adult: '', info: '为看漫画的人而'},
					{site: '搜漫', href: 'soman.com', pay: '', vpn: '', adult: '', info: '一站式漫画搜索引擎'},
					{site: 'COCOMANGA', href: 'cocomanga.com', pay: '', vpn: '', adult: '', info: '提供优质的漫画阅读体验'},
					{site: '57漫画网', href: 'wuqimh.com', pay: '', vpn: '', adult: '', info: '更新最快的漫画网'},
				],},
			],},
			{classfly: '磁力', href: 'magnetic', ico: 'ico-link', link: [
				{connect: '磁力搜索', href: 'magnetic-search',web: [
					{site: '磁力狗', href: 'clg.cm', pay: '', vpn: '', adult: '', info: '懂你的搜索'},
					{site: '老王磁力', href: 'laowangbo.xyz', pay: '', vpn: '', adult: '', info: '专业的磁力链接搜索引擎'},
					{site: '磁力蚂蚁', href: 'eclmy.vip', pay: '', vpn: '', adult: '', info: '磁力搜索引擎'},
					{site: '磁力王', href: 'movih.com', pay: '', vpn: '', adult: '', info: '全球最大BT种子搜索引擎'},
					{site: '磁力天堂', href: 'cltt.vip', pay: '', vpn: '', adult: '', info: '种子搜索引擎'},
				],},
			],},
			{classfly: '网盘', href: 'dropbox', ico: 'ico-server', link: [
				{connect: '网盘空间', href: 'dropbox-box',web: [
					{site: '阿里云盘', href: 'aliyundrive.com', pay: 'ture', vpn: '', adult: '', info: '不限速新用户100G'},
					{site: '天翼云盘', href: 'cloud.189.cn', pay: 'ture', vpn: '', adult: '', info: '不限速电信用户10T'},
					{site: '蓝奏云', href: 'lanzoux.com', pay: 'ture', vpn: '', adult: '', info: '限制上传不限下载'},
					{site: '123云盘', href: '123pan.com', pay: 'ture', vpn: '', adult: '', info: '不限速新用户2T'},
					{site: 'Gofile', href: 'gofile.io', pay: 'ture', vpn: '', adult: '', info: '免费文件分享但文件活跃度低会被删除'},
					{site: 'MUSE文件传输', href: 'musetransfer.com', pay: 'ture', vpn: '', adult: '', info: '临时分享比较好用'},
					{site: '图仓', href: 'tucang.cc', pay: '', vpn: '', adult: '', info: '据说不丢图'},
					{site: 'File Doge', href: 'filedoge.com', pay: 'ture', vpn: '', adult: '', info: '匿名文件分享平台适合临时用'},
					{site: 'Amazon CloudDrive', href: 'amazon.com/clouddrive', pay: 'ture', vpn: '', adult: '', info: '上传快下载慢新用户5G'},
					{site: '奶牛快传', href: 'cowtransfer.com', pay: 'ture', vpn: '', adult: '', info: '新用户10G可永久'},
					{site: 'Secufiles', href: 'secufiles.com', pay: 'ture', vpn: '', adult: '', info: '新用户1TB'},
					{site: '夸克网盘', href: 'pan.quark.cn', pay: 'ture', vpn: '', adult: '', info: '新用户1TB速度可以'},
				],},
				{connect: '网盘工具', href: 'dropbox-tool',web: [
					{site: 'Xdown', href: 'xdown.org', pay: '', vpn: '', adult: '', info: '专业的文件下载与分享工具'},
					{site: '千帆搜索', href: 'pan.qianfan.app', pay: '', vpn: '', adult: '', info: '资源超丰富的聚合网盘搜索引擎'},
				],},
			],},
			{classfly: '游戏', href: 'game', ico: 'ico-game-key', link: [
				{connect: '在线游戏', href: 'game-online',web: [
					{site: 'GamePix', href: 'gamepix.com', pay: '', vpn: '', adult: '', info: '速度很快的小游戏大全'},
					{site: 'Crazy Games', href: 'crazygames.com', pay: '', vpn: '', adult: '', info: '游戏很多速度一般'},
					{site: 'IO Games', href: 'iogames.space', pay: '', vpn: '', adult: '', info: '老牌小游戏大全'},
					{site: 'Y8 Games', href: 'zh.y8.com', pay: '', vpn: 'ture', adult: '', info: '卡成狗要不是看他域名叼早删掉了'},
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
					{site: 'slither 贪吃蛇', href: 'slither.io', pay: '', vpn: '', adult: '', info: '贪吃蛇'},
					{site: '无限扫雷', href: '1000mines.com', pay: '', vpn: '', adult: '', info: '无限扫雷'},
					{site: '坦克大作战', href: 'arras.io', pay: 'ture', vpn: '', adult: '', info: '坦克大作战'},
					{site: '超苦逼冒险者', href: 'zcsuper.cn', pay: 'ture', vpn: '', adult: '', info: '超苦逼冒险者'},
					{site: 'TAMING', href: 'taming.io', pay: '', vpn: '', adult: '', info: '生存大作战'},
					{site: 'Venge', href: 'venge.io', pay: '', vpn: '', adult: '', info: '射击游戏'},
					{site: '二维星际战争', href: '2starwar.top', pay: '', vpn: '', adult: '', info: '简笔画星际战争'},
					{site: '在线CS', href: 'playcsol.com', pay: '', vpn: '', adult: '', info: '网页版CS'},
				],},
			],},
			{classfly: '音乐', href: 'music', ico: 'ico-music', link: [
				{connect: '在线音乐', href: 'music-online',web: [
					{site: 'Audiomack', href: 'audiomack.com', pay: '', vpn: 'ture', adult: 'ture', info: '因为不限制内容现在需要梯子才能访问'},
				],},
				{connect: '音乐资源', href: 'music-down',web: [
					{site: '魔迷士音乐', href: 'momishi.com', pay: '', vpn: '', adult: '', info: '无损音乐下载'},
					{site: '百乐米', href: 'bailemi.com', pay: '', vpn: '', adult: '', info: '专注于分享好听稀有音乐'},
					{site: '下歌吧音乐下载', href: 'music.y444.cn', pay: '', vpn: '', adult: '', info: '免费提供音乐在线试听下载服务'},
					{site: '无名音乐', href: 'thewind.xyz', pay: '', vpn: '', adult: '', info: '音乐搜索下载神器'},
				],},
			],},
			{classfly: '图片', href: 'image', ico: 'ico-image', link: [
				{connect: '壁纸', href: 'image-wallpaper',web: [
					{site: 'Wallhaven', href: 'wallhaven.cc', pay: '', vpn: '', adult: 'ture', info: '著名壁纸平台注册后有惊喜'},
					{site: 'Wallpaper Scraft', href: 'wallpaperscraft.com', pay: '', vpn: '', adult: '', info: '速度一般的壁纸平台'},
					{site: 'Wallroom', href: 'wallroom.io', pay: '', vpn: '', adult: '', info: '速度一般'},
					{site: '天堂图片网', href: 'ivsky.com', pay: '', vpn: '', adult: '', info: '优质订阅分类型壁纸平台'},
					{site: 'I Love Papers', href: 'ilovepapers.com', pay: '', vpn: '', adult: '', info: '图片质量一般'},
					{site: 'Desktop Wallpapers', href: 'wallpapermaiden.com', pay: '', vpn: '', adult: '', info: '提供多种格式的壁纸平台'},
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
					{site: 'The Pattern Library', href: 'thepatternlibrary.com', pay: '', vpn: '', adult: '', info: '提供PNG格式的背景图'},
					{site: '无版权素材', href: 'pixabay.com/zh/photos', pay: '', vpn: '', adult: '', info: '无版权图片素材'},
					{site: 'FreePik', href: 'freepik.com', pay: 'ture', vpn: '', adult: '', info: '大部分免费的素材库'},
					{site: '365PSD', href: '365psd.com', pay: '', vpn: '', adult: '', info: '素材资源一般'},
					{site: 'Pixeden', href: 'pixeden.com', pay: '', vpn: '', adult: '', info: '资源不错但下载麻烦'},
					{site: 'Free Resources', href: 'freebiesbug.com', pay: '', vpn: '', adult: '', info: '免费素材库下载有点慢'},
					{site: 'GraphBerry', href: 'graphberry.com', pay: '', vpn: '', adult: '', info: '免费的设计源文件'},
					{site: 'Free Stock Photos', href: 'stocksnap.io', pay: '', vpn: '', adult: '', info: '高清图片资源'},
					{site: 'ISO Republic', href: 'isorepublic.com', pay: '', vpn: '', adult: '', info: '免费的高清图片库'},
					{site: 'Beautiful Free Images', href: 'unsplash.com', pay: '', vpn: '', adult: '', info: '漂亮的免费图片库'},
					{site: 'Eboy 像素画', href: 'hello.eboy.com', pay: '', vpn: '', adult: '', info: '像素画图片库'},
					{site: 'Free Premium Mockups', href: 'mockups-design.com', pay: '', vpn: '', adult: '', info: '样品展示素材库'},
					{site: 'Foodiesfeed', href: 'foodiesfeed.com', pay: '', vpn: '', adult: '', info: '美食素材库'},
					{site: 'Free Stock Photos', href: 'burst.shopify.com', pay: '', vpn: '', adult: '', info: '免费可商用图片库'},
					{site: 'illustAC', href: 'illustac-cn.com', pay: '', vpn: '', adult: '', info: '免费矢量剪贴画'},
					{site: 'Reshot', href: 'reshot.com', pay: '', vpn: '', adult: '', info: '免费图标矢量照片搜索'},
					{site: '优图库', href: 'utu.cool', pay: 'ture', vpn: '', adult: '', info: '精品国内外素材图库共享平台'},
					{site: 'VectorPortal', href: 'vectorportal.com', pay: '', vpn: '', adult: '', info: '免费的SVG图形'},
					{site: 'Psdrepo', href: 'psdrepo.com', pay: '', vpn: '', adult: '', info: '免费PSD'},
					{site: 'Negativespace', href: 'negativespace.co', pay: '', vpn: '', adult: '', info: 'Beautiful free images'},
					{site: 'Yandex', href: 'yandex.com/images', pay: '', vpn: '', adult: '', info: '以图搜图'},
				],},
				{connect: '音频素材', href: 'material-audio',web: [
					{site: '爱给网', href: 'aigei.com', pay: 'ture', vpn: '', adult: '', info: '免费用户限制下载次数'},
					{site: '无版权音乐', href: 'pixabay.com/zh/music', pay: '', vpn: '', adult: '', info: '免费的无版权音乐'},
					{site: 'MixKit', href: 'mixkit.co/free-stock-music', pay: '', vpn: '', adult: '', info: '大部分免费专业资源跳转到ENVATO收费'},
					{site: '站长之家', href: 'sc.chinaz.com/yinxiao', pay: 'ture', vpn: '', adult: '', info: '音效下载'},
					{site: 'Sampld', href: 'open.sampld.app', pay: '', vpn: '', adult: '', info: '免费商用音乐片段素材库'},
				],},
				{connect: '视频素材', href: 'material-video',web: [
					{site: '视频特效下载', href: 'videocopilot.net.cn', pay: '', vpn: '', adult: '', info: '主要是AE资源'},
					{site: '无版权视频', href: 'pixabay.com/zh/videos', pay: '', vpn: '', adult: '', info: '免费正版高清视频素材库'},
					{site: '新CG儿', href: 'newcger.com', pay: '', vpn: '', adult: '', info: 'AE素材和工程文件'},
					{site: 'CG资源网', href: 'cgown.com', pay: 'ture', vpn: '', adult: '', info: '各种CG资源大部分收费'},
					{site: 'MixKit', href: 'mixkit.co/free-stock-video', pay: '', vpn: '', adult: '', info: '大部分免费专业资源跳转到ENVATO收费'},
					{site: 'Free Stock Video Footage', href: 'coverr.co', pay: '', vpn: '', adult: '', info: '免费专业视频资源'},
					{site: 'Free Stock Video', href: 'mazwai.com', pay: '', vpn: '', adult: '', info: '免费专业视频资源'},
					{site: 'Videvo', href: 'videvo.net', pay: '', vpn: '', adult: '', info: '英国免费视频素材'},
					{site: '潮点视频', href: 'shipin520.com', pay: '', vpn: '', adult: '', info: '版权高清视频素材下载'},
					{site: 'Distill', href: 'wedistill.io', pay: '', vpn: '', adult: '', info: '小众高清视频素材网站'},
				],},
				{connect: '其他素材', href: 'material-other',web: [
					{site: 'Shapefest free 3D', href: 'shapefest.com', pay: '', vpn: '', adult: '', info: '免费的3D图样素材内容少'},
					{site: 'C4D之家', href: 'c4d.cn', pay: 'ture', vpn: '', adult: '', info: '提供一些C4D素材但收费'},
					{site: '阿里图标', href: 'iconfont.cn', pay: '', vpn: '', adult: '', info: '打包下载限制20个产品经理是脑残么'},
					{site: 'IconFinder', href: 'iconfinder.com', pay: 'ture', vpn: '', adult: '', info: '大部分收费'},
					{site: 'Remix Icon', href: 'remixicon.com', pay: '', vpn: '', adult: '', info: '一个开源的图标库'},
					{site: 'Flaticon', href: 'flaticon.com', pay: 'ture', vpn: '', adult: '', info: '图标搜索平台有点贵'},
					{site: 'Uigg Ico', href: 'ui.gg/ico.php', pay: '', vpn: '', adult: '', info: 'UI框架中的免费图标'},
					{site: 'Pixelsquid 3D', href: 'pixelsquid.com', pay: 'ture', vpn: '', adult: '', info: '可以用于PS的3D素材收费'},
					{site: 'CSS ICO', href: 'css.gg', pay: '', vpn: '', adult: '', info: '基于CSS的图标库'},
					{site: 'Wannathis', href: 'wannathis.one', pay: 'ture', vpn: '', adult: '', info: '高质量低格3D素材'},
					{site: 'Free customizable 3D icons', href: 'vertex.im', pay: '', vpn: '', adult: '', info: '免费的3D图标库'},
					{site: 'Health Icons', href: 'healthicons.org', pay: '', vpn: '', adult: '', info: '医疗行业图标'},
					{site: 'ICO.IM', href: 'ico.im', pay: '', vpn: '', adult: '', info: '图标中心'},
				],},
			],},
			{classfly: '开发', href: 'develop', ico: 'ico-alone-verification', link: [
				{connect: '前端', href: 'develop-frontend',web: [
					{site: 'Bootstrap', href: 'v5.bootcss.com', pay: '', vpn: '', adult: '', info: 'Twitter的前端框架'},
					{site: 'npm 中文网', href: 'npmjs.cn', pay: '', vpn: '', adult: '', info: 'NPM中文内容'},
					{site: 'Vue 渐进式框架', href: 'v3.cn.vuejs.org', pay: '', vpn: '', adult: '', info: 'VUEV3的官网'},
					{site: 'React 中文文档', href: 'react.docschina.org', pay: '', vpn: '', adult: '', info: 'Facebook的前端框架'},
					{site: 'Angular 中文文档', href: 'angular.cn', pay: '', vpn: '', adult: '', info: 'Google的前端框架'},
					{site: 'Svelte 中文文档', href: 'sveltejs.cn', pay: '', vpn: '', adult: '', info: '构建Web应用程序的一种新方法'},
					{site: 'UIGG', href: 'ui.gg', pay: '', vpn: '', adult: '', info: 'WEB原生框架'},
					{site: 'Node 中文文档', href: 'nodeapp.cn', pay: '', vpn: '', adult: '', info: 'NODE中文文档'},
					{site: 'GreenSock', href: 'greensock.com', pay: '', vpn: 'ture', adult: '', info: '最健全的web动画库'},
					{site: 'Swiper 中文网', href: 'swiper.com.cn', pay: '', vpn: '', adult: '', info: '轮播图幻灯片JS插件'},
					{site: 'Anime 中文网', href: 'www.animejs.cn', pay: '', vpn: '', adult: '', info: '动画JS插件'},
					{site: 'Element', href: 'element-plus.gitee.io', pay: '', vpn: '', adult: '', info: '基于VUE的界面组件'},
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
				],},
				{connect: '编程', href: 'develop-program',web: [
					{site: 'Codepen', href: 'codepen.io', pay: '', vpn: '', adult: '', info: '在线代码编辑器'},
					{site: 'Github', href: 'github.com', pay: '', vpn: 'ture', adult: '', info: 'GIT开源分享平台'},
					{site: 'Gitee', href: 'gitee.com', pay: 'ture', vpn: '', adult: '', info: '国内GIT开源分享平台'},
					{site: 'CodeGen', href: 'codegen.cc', pay: '', vpn: '', adult: '', info: '面向开发人员的工具箱'},
				],},
				{connect: '游戏', href: 'develop-game',web: [
					{site: 'GGAC', href: 'ggac.com', pay: '', vpn: '', adult: '', info: 'CG艺术创作分享平台'},
					{site: 'GAMEUI', href: 'gameui.cn', pay: '', vpn: '', adult: '', info: '游戏设计圈聚集地'},
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
					{site: 'Figma', href: 'figma.com', pay: 'ture', vpn: '', adult: '', info: '三大UI设计器之一可在线使用'},
					{site: '开发者搜索', href: 'kaifa.baidu.com', pay: '', vpn: '', adult: '', info: '百度出品开发者搜索'},
					{site: '腾讯问卷', href: 'wj.qq.com', pay: 'ture', vpn: '', adult: '', info: '腾讯问卷生成工具'},
					{site: 'TeamBition 协作', href: 'teambition.com', pay: 'ture', vpn: '', adult: '', info: '阿里办公流程协作平台'},
					{site: '属性兼容搜索', href: 'caniuse.com', pay: '', vpn: '', adult: '', info: '属性兼容性搜索工具'},
					{site: 'Gitmind 脑图', href: 'gitmind.cn', pay: 'ture', vpn: '', adult: '', info: '一款好看的脑图工具但收费'},
					{site: 'Phcode 代码编辑器', href: 'phcode.dev', pay: '', vpn: '', adult: '', info: '在线前端编写工具'},
					{site: '腾讯兔小巢', href: 'support.qq.com', pay: '', vpn: '', adult: '', info: '收集用户留言的工具'},
					{site: '看得见协作的远程会议', href: 'teamind.co', pay: 'ture', vpn: '', adult: '', info: '看得见协作的远程互动会议'},
					{site: '知犀思维导图', href: 'zhixi.com', pay: '', vpn: '', adult: '', info: '完全免费好看的思维导图'},
					{site: 'Pixelart', href: 'pixelart.liveblocks.app', pay: '', vpn: '', adult: '', info: '像素画多人协作绘画'},
					{site: '智能PPT', href: 'aippt.wps.cn', pay: '', vpn: '', adult: '', info: '自动美化的在线PPT工具'},
					{site: 'iiisometric', href: 'fffuel.co/iiisometric', pay: '', vpn: '', adult: '', info: '快速绘制方块矢量插图'},
					{site: '金数据', href: 'jinshuju.net', pay: 'ture', vpn: '', adult: '', info: '数据表单收集工具'},
					{site: 'Billfish', href: 'billfish.cn', pay: '', vpn: '', adult: '', info: '素材管理工具'},
				],},
				{connect: '图文处理', href: 'tool-image',web: [
					{site: 'PhotoKit', href: 'photokit.com', pay: '', vpn: '', adult: '', info: '抠图工具'},
					{site: 'Tinypng 图片压缩', href: 'tinypng.com', pay: 'ture', vpn: '', adult: '', info: 'PNG压缩专业插件收费'},
					{site: '智能图像压缩', href: 'img.top', pay: 'ture', vpn: '', adult: '', info: '图片压缩'},
					{site: '压缩图', href: 'yasuotu.com', pay: 'ture', vpn: '', adult: '', info: '图片压缩付费才能超过60张'},
					{site: 'Squoosh 图片压缩', href: 'squoosh.app', pay: '', vpn: '', adult: '', info: '又一个图片压缩'},
					{site: '在线抠图', href: 'clippingmagic.com', pay: 'ture', vpn: '', adult: '', info: '在线抠图'},
					{site: '快速抠图', href: 'backgrounderaser.io', pay: '', vpn: '', adult: '', info: '又一个在线抠图'},
					{site: 'Base64 编码', href: 'tool.css-js.com/base64.html', pay: '', vpn: '', adult: '', info: '将图片转换成base64编码'},
					{site: 'Vectary 3D', href: 'vectary.com', pay: 'ture', vpn: '', adult: '', info: '生成3D广告图收费'},
					{site: 'WeaveSilk', href: 'weavesilk.com', pay: '', vpn: '', adult: '', info: '对称波纹线条生成器'},
					{site: '纸张艺术', href: 'pissang.github.io/paper-quilling-art', pay: '', vpn: '', adult: '', info: '纸张艺术生成器'},
					{site: '飞行光点', href: 'wangyasai.github.io/Stars-Emmision', pay: '', vpn: '', adult: '', info: '飞行光点生成器'},
					{site: '语雀', href: 'yuque.com', pay: 'ture', vpn: '', adult: '', info: '帮助文档内容组织器'},
					{site: '在线PPT', href: 'pptist.gitee.io', pay: '', vpn: '', adult: '', info: '简单在线PPT制作'},
					{site: '照片擦除元素', href: 'cleanup.pictures', pay: 'ture', vpn: '', adult: '', info: '照片擦除元素小工具'},
					{site: 'Blob Animation', href: 'blobanimation.com', pay: '', vpn: '', adult: '', info: 'SVG球动画生成器'},
					{site: 'Vector Halftone Maker', href: 'halftone.xoihazard.com', pay: '', vpn: '', adult: '', info: '点状图生成器'},
					{site: 'Toonme', href: 'toonme.com', pay: '', vpn: '', adult: '', info: '卡通化照片'},
					{site: 'VANCE AI', href: 'colorize.digital', pay: '', vpn: '', adult: '', info: '智能照片上色'},
					{site: 'Imagetosketch', href: 'imagetosketch.com', pay: '', vpn: '', adult: '', info: '素描化你的照片'},
					{site: 'Image to Cartoon', href: 'imagetocartoon.com', pay: '', vpn: '', adult: '', info: '照片转卡通'},
					{site: 'ANIMATED DRAWINGS', href: 'sketch.metademolab.com/canvas', pay: '', vpn: '', adult: '', info: '将你作品中的角色动画化'},
					{site: 'PhotoMosh', href: 'photomosh.com', pay: '', vpn: '', adult: '', info: '赛博朋克图片生成器'},
					{site: 'Mesh gradients', href: 'meshgradient.in', pay: '', vpn: '', adult: '', info: '一键生成弥散渐变'},
					{site: 'SVG Waves', href: 'svgwave.in', pay: '', vpn: '', adult: '', info: 'SVG 波浪生成器'},
					{site: 'SVG generator', href: 'fffuel.co', pay: '', vpn: '', adult: '', info: 'SVG 图形生成器'},
					{site: 'Tartan Designer', href: 'tartanmaker.com', pay: '', vpn: '', adult: '', info: '布纹生成器'},
					{site: 'UPDF', href: 'updf.cn', pay: 'ture', vpn: '', adult: '', info: '免费的PDF编辑器'},
					{site: 'BgSub', href: 'bgsub.cn', pay: '', vpn: '', adult: '', info: '消除或者替换图像背景'},
					{site: 'ilovePDF', href: 'ilovepdf.com', pay: '', vpn: '', adult: '', info: 'PDF全格式转换'},
					{site: 'PDFlux', href: 'pdflux.com', pay: '', vpn: '', adult: '', info: 'PDF文档内容识别提取'},
				],},
				{connect: '音视频处理', href: 'tool-media',web: [
					{site: '分秒帧', href: 'mediatrack.cn', pay: 'ture', vpn: '', adult: '', info: '音视频生产协作平台'},
					{site: 'Clipchamp 视频编辑器', href: 'app.clipchamp.com', pay: 'ture', vpn: 'ture', adult: '', info: '视频在线编辑'},
					{site: '智影', href: 'zenvideo.qq.com', pay: '', vpn: '', adult: '', info: '多媒体处理平台'},
					{site: 'AE动画预览', href: 'lottiefiles.com/preview', pay: '', vpn: '', adult: '', info: 'AE动画预览'},
					{site: '网易天音', href: 'tianyin.163.com', pay: '', vpn: '', adult: '', info: '网易AI编曲工具'},
					{site: '新片场', href: 'xinpianchang.com', pay: 'ture', vpn: '', adult: '', info: '发现全球优质视频与创作人'},
					{site: '人声音乐分离', href: 'lalal.ai', pay: 'ture', vpn: '', adult: '', info: '人声音乐分离收费'},
					{site: '闪电分镜', href: 'mediastory.cc', pay: 'ture', vpn: '', adult: '', info: '分镜绘制通告制作场景管理'},
					{site: '快剪辑', href: 'kuaijianji.com', pay: 'ture', vpn: '', adult: '', info: '强大的在线视频剪辑'},
					{site: '必剪', href: 'bcut.drawyoo.com', pay: '', vpn: '', adult: '', info: 'B站剪辑软件'},
					{site: '剪映', href: 'lv.ulikecam.com', pay: '', vpn: '', adult: '', info: '抖音剪辑软件'},
					{site: 'OBS Studio', href: 'obsproject.com', pay: '', vpn: '', adult: '', info: '免费的录屏和直播软件'},
				],},
				{connect: '小工具', href: 'tool-min',web: [
					{site: '草料二维码', href: 'cli.im', pay: 'ture', vpn: '', adult: '', info: '老牌二维码创意工具'},
					{site: '押韵助手', href: 'yayun.la', pay: '', vpn: '', adult: '', info: '在线查询押韵字词诗歌'},
					{site: '字体CDN', href: 'cdnfonts.com', pay: '', vpn: '', adult: '', info: '字体CDN服务资源只有英文字体'},
					{site: '字体格式转换', href: 'everythingfonts.com/font-face', pay: '', vpn: '', adult: '', info: '讲电脑文字转换成WEB文字'},
					{site: 'Google字体中文版', href: 'googlefonts.cn', pay: '', vpn: '', adult: '', info: 'Google字体中文镜像'},
					{site: '字体识别搜索', href: 'qiuziti.com', pay: 'ture', vpn: '', adult: '', info: '识别图片上的字体下载收费'},
					{site: '酷家乐', href: 'kujiale.com', pay: 'ture', vpn: '', adult: '', info: '在线室内设计工具高级功能收费'},
					{site: '油条工具箱', href: 'utils.fun', pay: '', vpn: '', adult: '', info: '在线工具箱'},
					{site: '文本转语音', href: 'toolb.cn/textspeech', pay: '', vpn: '', adult: '', info: '微软AI语音'},
					{site: 'ToolB在线工具', href: 'toolb.cn', pay: '', vpn: '', adult: '', info: '在线工具箱'},
					{site: '在线工具', href: 'tools.fun', pay: '', vpn: '', adult: '', info: '在线工具要你命3000'},
					{site: '自由钢琴', href: 'autopiano.cn', pay: '', vpn: '', adult: '', info: '在线钢琴'},
					{site: '计算器套件', href: 'geogebra.org/calculator', pay: '', vpn: '', adult: '', info: '超级科学计算器'},
					{site: '知春在线工具箱', href: 'zhichun.xyz', pay: '', vpn: '', adult: '', info: '保护隐私的在线工具'},
					{site: 'Ele Types', href: 'eletypes.com', pay: '', vpn: '', adult: '', info: '在线打字练习工具'},
				],},
			],},
			{classfly: '摸鱼', href: 'idle', ico: 'ico-fish', link: [
				{connect: '瞎搞', href: 'idle-around',web: [
					{site: '共创世界', href: 'ccw.site', pay: '', vpn: '', adult: '', info: 'Scratch编程社区'},
					{site: '找到牛', href: 'findtheinvisiblecow.com', pay: '', vpn: '', adult: '', info: '找到隐藏的牛'},
					{site: '不会百度么', href: 'buhuibaidu.me', pay: '', vpn: '', adult: '', info: '教别人百度'},
					{site: '千亿像素看世界', href: 'bigpixel.cn', pay: '', vpn: '', adult: '', info: '360全景视野'},
					{site: '绘画和绘画', href: 'gallerix.asia', pay: 'ture', vpn: '', adult: '', info: '加勒里克斯在线博物馆'},
					{site: 'Aggie', href: 'Aggie.io', pay: '', vpn: '', adult: '', info: '与世界其他人一起画画'},
					{site: 'Everyone Draw', href: 'everyonedraw.com', pay: '', vpn: '', adult: '', info: '公共点击像素画'},
				],},
				{connect: '博客', href: 'idle-blog',web: [
					{site: 'CSDN', href: 'blog.csdn.net', pay: 'ture', vpn: '', adult: '', info: '专业IT技术发表平台'},
					{site: '掘金', href: 'juejin.cn', pay: '', vpn: '', adult: '', info: '代码不止掘金不停'},
					{site: '不会笑青年', href: 'buhuixiao.com', pay: '', vpn: '', adult: '', info: '以程序员为主题的漫画'},
				],},
				{connect: '资讯', href: 'idle-news',web: [
					{site: 'THE.TOP', href: 'the.top', pay: '', vpn: '', adult: '', info: '每日TOP热点资讯聚合'},
					{site: '抽屉新热榜', href: 'dig.chouti.com', pay: '', vpn: '', adult: '', info: '聚合每日热门搞笑有趣资讯'},
					{site: '多摸鱼', href: 'duomoyu.com', pay: '', vpn: '', adult: '', info: '全网资讯一站式浏览'},
					{site: '摸摸鱼', href: 'momoyu.cc', pay: '', vpn: '', adult: '', info: '摸摸鱼热榜'},
				],},
			],},
		],
		link: [
			{site: 'LLL导航', href: 'lll.cm', info: '及时行乐'},
			{site: 'mixice', href: 'mixice.com', info: '众里寻他千百度'},
			{site: 'UIGG', href: 'ui.gg', info: '静态前端框架'},
			{site: '秒速科技', href: 'mssay.com', info: '网络服务供应商'},
			{site: 'SVG 背景', href: 'svg.ee', info: '提供10KB以内的SVG背景'},
			{site: 'MIX', href: 'mix.vc', info: '客户服务'},
			{site: 'ICO', href: 'ico.im', info: '图标中心'},
		],
	}
})

export default app












