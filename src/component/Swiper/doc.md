最前面插入最后一张图，最后面插一张第一张图，组成新的图片数组

left = -index \* imgWidth

index 为图片数组下标，初始值为 1（即新图片数组第二张图，原图片数组第一张图）

箭头模式

自动模式

dot 模式

可选参数：

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

基本使用：

```js
const renderSwiper = (items) => {
  const setting = {
    width: 730,
    height: 336,
    autoplay: true,
    autoplayInterval: 3000,
    arrows: true,
    arrowsType: 'light',
    dots: true,
    dotsColor: 'red',
    dotsSize: 'normal',
  }
  return (
    <Swiper {...setting}>
      {items.map(item => (
        <div key={item.imgurl}>
          <img src={item.imgurl} alt="slick" />
        </div>
    ))}
    </Swiper>
  )
}
```
