# django-VUE-blog
记录我写一个django VUE博客的过程
一、阿里云的申请和设置
1、首先申请了一个阿里云服务器
2、开放阿里云安全列表，不然后面启动nginx访问不了
二、在机器上搭环境
1、先搭python
①打开anaconda的官网查看想下的版本
②wget 地址下载
③傻瓜式安装：一路回车，有的yes就yes
④vi /etc/proflie 添加环境变量
2、搭nginx
①系统环境安装  yum -y install gcc pcre-devel zlib-devel openssl openssl-devel
②下载nginx wget 
③解压tar -zxvf
④检查配置./configure --prefix=/usr/local/nginx
⑤# make
make
make install
⑥发现etc/地下没有nginx
3、第二次装nginx：参照外链https://my.oschina.net/shootercn/blog/1596098
4、搭uwsgi
①pip installuwsgi
三、配置文件
1、uwsgi.ini：启动配置项，与django交互
2、django的setting.py：静态文件配置，页面加载静态文件
3、/etc/nginx/conf.d/defult：nginx配置监听端口服务，转到uwsgi页面，nginx配置静态文件服务
