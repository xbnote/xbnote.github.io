(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{635:function(a,r,t){"use strict";t.r(r);var e=t(1),s=Object(e.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"一、spring-boot与缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、spring-boot与缓存"}},[a._v("#")]),a._v(" 一、Spring Boot与缓存")]),a._v(" "),r("h3",{attrs:{id:"jsr-107"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jsr-107"}},[a._v("#")]),a._v(" JSR-107")]),a._v(" "),r("p",[a._v("Java Caching定义了5个核心接口，分别是CachingProvider、CacheManager、Cache、Entry 和 Expiry。")]),a._v(" "),r("ul",[r("li",[a._v("CachingProvider定义了创建、配置、获取、管理和控制多个CacheManager。一个应用可以在运行期访问多个CachingProvider。")]),a._v(" "),r("li",[a._v("CacheManager定义了创建、配置、获取、管理和控制多个唯一命名的Cache，这些 Cache 存在于 CacheManager 的上下文中。一个CacheManager仅被一个CachingProvider所拥有。")]),a._v(" "),r("li",[a._v("Cache是一个类似Map的数据结构并临时存储以Key为索引的值。一个Cache仅被一个 CacheManager 所拥有。")]),a._v(" "),r("li",[a._v("Entry是一个存储在Cache中的key-value对。")]),a._v(" "),r("li",[a._v("Expiry 每一个存储在Cache中的条目有一个定义的有效期。一旦超过这个时间，条目为过期的状态。一旦过期，条目将不可访问、更新和删除。缓存有效期可以通过ExpiryPolicy设置。")])]),a._v(" "),r("h3",{attrs:{id:"spring缓存抽象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring缓存抽象"}},[a._v("#")]),a._v(" Spring缓存抽象")]),a._v(" "),r("p",[a._v("pring从3.1开始定义了org.springframework.cache.Cache\n和org.springframework.cache.CacheManager接口来统一不同的缓存技术；\n并支持使用JCache（JSR-107）注解简化我们开发；\n• Cache接口为缓存的组件规范定义，包含缓存的各种操作集合；\n• Cache接口下Spring提供了各种xxxCache的实现；如RedisCache，EhCacheCache ,\nConcurrentMapCache等；\n• 每次调用需要缓存功能的方法时，Spring会检查检查指定参数的指定的目标方法是否\n已经被调用过；如果有就直接从缓存中获取方法调用后的结果，如果没有就调用方法\n并缓存结果后返回给用户。下次调用直接从缓存中获取。\n• 使用Spring缓存抽象时我们需要关注以下两点；\n1、确定方法需要被缓存以及他们的缓存策略\n2、从缓存中读取之前缓存存储的数据")]),a._v(" "),r("h3",{attrs:{id:"整合redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#整合redis"}},[a._v("#")]),a._v(" 整合Redis")]),a._v(" "),r("ol",[r("li",[a._v("引入spring-boot-starter-data-redis")]),a._v(" "),r("li",[a._v("application.yml配置redis连接地址")]),a._v(" "),r("li",[a._v("使用RestTemplate操作redis")]),a._v(" "),r("li",[a._v("redisTemplate.opsForValue();//操作字符串")]),a._v(" "),r("li",[a._v("redisTemplate.opsForHash();//操作hash")]),a._v(" "),r("li",[a._v("redisTemplate.opsForList();//操作list")]),a._v(" "),r("li",[a._v("redisTemplate.opsForSet();//操作set")]),a._v(" "),r("li",[a._v("redisTemplate.opsForZSet();//操作有序set")]),a._v(" "),r("li",[a._v("配置缓存、CacheManagerCustomizers")]),a._v(" "),r("li",[a._v("测试使用缓存、切换缓存、 CompositeCacheManager")])]),a._v(" "),r("h2",{attrs:{id:"二、spring-boot与消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、spring-boot与消息"}},[a._v("#")]),a._v(" 二、Spring Boot与消息")]),a._v(" "),r("ol",[r("li",[a._v("大多应用中，可通过消息服务中间件来提升系统异步通信、扩展解耦能力")]),a._v(" "),r("li",[a._v("消息服务中两个重要概念：\n消息代理（message broker）和目的地（destination）\n当消息发送者发送消息以后，将由消息代理接管，消息代理保证消息传递到指定目\n的地。")]),a._v(" "),r("li",[a._v("消息队列主要有两种形式的目的地")]),a._v(" "),r("li",[a._v("队列（queue）：点对点消息通信（point-to-point）")]),a._v(" "),r("li",[a._v("主题（topic）：发布（publish）/订阅（subscribe）消息通信")])]),a._v(" "),r("h2",{attrs:{id:"三、spring-boot与检索"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、spring-boot与检索"}},[a._v("#")]),a._v(" 三、Spring Boot与检索")]),a._v(" "),r("h2",{attrs:{id:"四、spring-boot与任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、spring-boot与任务"}},[a._v("#")]),a._v(" 四、Spring Boot与任务")]),a._v(" "),r("h2",{attrs:{id:"五、spring-boot与安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、spring-boot与安全"}},[a._v("#")]),a._v(" 五、Spring Boot与安全")]),a._v(" "),r("h2",{attrs:{id:"六、spring-boot与分布式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、spring-boot与分布式"}},[a._v("#")]),a._v(" 六、Spring Boot与分布式")]),a._v(" "),r("h2",{attrs:{id:"七、spring-boot与监控管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#七、spring-boot与监控管理"}},[a._v("#")]),a._v(" 七、Spring Boot与监控管理")]),a._v(" "),r("h2",{attrs:{id:"八、spring-boot与部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#八、spring-boot与部署"}},[a._v("#")]),a._v(" 八、Spring Boot与部署")])])}),[],!1,null,null,null);r.default=s.exports}}]);