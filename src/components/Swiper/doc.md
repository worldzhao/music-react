该组件已经上传npm

[npm](https://www.npmjs.com/package/react-tiny-swiper)

[git地址:react-tiny-swiper](https://github.com/worldzhao/react-tiny-swiper)

最前面插入最后一张图，最后面插一张第一张图，组成新的图片数组

left = -index \* imgWidth

index 为图片数组下标，初始值为 1（即新图片数组第二张图，原图片数组第一张图）

1. 箭头模式

2. 自动模式

3. dot 模式

✨ 年轻人的第一个轮播图组件

💗 开发/测试/发布流程见该文章：[简书](https://www.jianshu.com/p/db6113c94dbc)

😊 本项目仓库地址[Github](https://github.com/worldzhao/react-tiny-swiper)

第一次封装组件，肯定有许多边界问题没有考虑到，如果出现问题，欢迎给我提 issue。

## API
| Property         | Description                               | Type   | Default   | Optional                      |
| ---------------- | ----------------------------------------- | ------ | --------- | ----------------------------- |
| width            | container width                           | number | 730       |
| height           | container height                          | number | 336       |
| autoplay         | switch automatically                      | bool   | true      | true,false                    |
| autoplayInterval | automatic switch interval(ms)             | number | 3000      |
| dots             | whether to show the page button below     | bool   | true      | true,false                    |
| dotsColor        | page button color                         | string | '#31A896' | any css color value in string |
| dotsSize         | page button size                          | string | 'normal'  | 'normal','small' , 'large'    |
| arrows           | whether to show flip button on both sides | bool   | true      | true, false                   |
| arrowsType       | flip button color                         | string | 'light'   | 'dark' , 'light'              |
| onChange         | switch callback                           |

## 可选参数：

```js
static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    autoplay: PropTypes.bool,
    autoplayInterval: PropTypes.number,
    dots: PropTypes.bool,
    dotsColor: PropTypes.string,
    dotsSize: PropTypes.oneOf(['normal', 'small', 'large']),
    arrows: PropTypes.bool,
    arrowsType: PropTypes.oneOf(['dark', 'light']),
    onChange: PropTypes.func,
  };
```

## 基本使用：

* npm

```
npm install react-tiny-swiper
```

```js
import toolbox from "react-tiny-swiper";
const { Swiper } = toolbox;
const renderSwiper = items => {
  const setting = {
    width: 730,
    height: 336,
    autoplay: true,
    autoplayInterval: 3000,
    arrows: true,
    arrowsType: "light",
    dots: true,
    dotsColor: "red",
    dotsSize: "normal"
  };
  return (
    <Swiper {...setting}>
      {items.map(item => (
        <div key={item.imgurl}>
          <img src={item.imgurl} alt="swiper" />
        </div>
      ))}
    </Swiper>
  );
};
```
