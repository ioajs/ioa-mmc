## @ioa/mmc

路由模型组件，集成模型、字段、数据类型校验的REST API。

在api开发过程中，经常需要向客户端提供一些纯数据库操作的CRUD接口，这些接口的共同特征是除访问权限外的其它业务逻辑几乎是相同的。为了避免编写重复的接口代码，减少接口数量，@ioa/mmc通过在数据模型与用户api之间加入权限控制中间件，实现安全、快捷的抽象api。

api设计借鉴于postgrest简约的url查询表达式，@ioa/mmc废除了原来臃肿的json方案，使用更为扁平化、更简洁、更易于读写的函数表达式替换。

### 查询示例

#### select

```
http://localhost:80/user?select=title,age,name
```

#### select! 反选

```
http://localhost:80/user?select!=title,age,name
```

#### where

```
http://localhost:80/user?where=name.eq(Wilburn);email.eq(Janae.Kiehn95@yahoo.com)|age.eq(94580)
```

### 逻辑分隔符


#### “;”字段分隔符

用于隔离多个字段，字段之间是and关系

```js
where=name.eq(Wilburn);email.eq(Janae.Kiehn95@yahoo.com)
```

#### “|”字段分隔符

竖线表示逻辑or，匹配多个条件中的一个即可

```js
name.eq(a)|name.eq(b)
```


### ormv库运算符

@ioa/mmc支持ormv中的所有运算符

参考链接：[https://github.com/xiangle/ormv](https://github.com/xiangle/ormv)

### 编码转换

由于url参数存在保留关键字限制，当输入参数值中包含类似于&=()的保留关键字时需要使用encodeURIComponent()进行编码转换

(：%28

)：%29

#### 示例
```
// 错误，赋值中包含非法的保留字()
http://localhost:80/user?where=phone.eq((559)-150-5961)

// 正确，()被转换为对应的url编码
http://localhost:80/user?where=phone.eq(%28559%29-150-5961)
```

### query查询参数

支持Ormv中的所有运算符和查询语句。除此之外@ioa/mmc还扩展了一部分专用选项，用于简化查询语句。以下凡标注为“扩展参数”的选项均为@ioa/mmc私有。

#### 通用参数

* where 逻辑条件过滤表达式

#### 查列表可用参数

* select 选择字段，select=name,title,email

* select! 反选字段，select!=uid,password

* order 限定排序条件，order=name.desc;title.desc;

* page 限定当前第几页

* limit 限制单页最大条数

* count 是否显示总量

#### 查详情可用参数

* select 选择字段，select=name,title,email

* select! 反选字段，select!=uid,password