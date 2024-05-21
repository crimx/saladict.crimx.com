hexo.extend.helper.register('get_intro_images', function () {
  return [
    {
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://tvax4.sinaimg.cn/large/6e3591e5gy1gc295dv2feg20lx0hynpd.gif',
        'https://tvax4.sinaimg.cn/large/6e3591e5gy1gc295dv2feg20lx0hynpd.gif',
        this.url_for('images/pin.gif'),
      ],
    },
    {
      // page translation
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3v2r9fbng20sx0pz7bf.gif',
        'https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3v2r9fbng20sx0pz7bf.gif',
        this.url_for('images/page-translation.gif'),
      ],
    },
    {
      // anki
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://wx3.sinaimg.cn/large/6e3591e5gy1gj3u9l683mj20sf0qrjud.jpg',
        'https://wx3.sinaimg.cn/large/6e3591e5gy1gj3u9l683mj20sf0qrjud.jpg',
        this.url_for('images/anki.png'),
      ],
    },
    {
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://tvax4.sinaimg.cn/large/6e3591e5gy1gc294s0jc6g20hb0if7fx.gif',
        'https://tvax4.sinaimg.cn/large/6e3591e5gy1gc294s0jc6g20hb0if7fx.gif',
        this.url_for('images/waveform.gif'),
      ],
    },
    {
      // youtube
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3u1ti54xj20xo0m5dmf.jpg',
        'https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3u1ti54xj20xo0m5dmf.jpg',
        'https://user-images.githubusercontent.com/6882794/94327912-0122be00-ffe1-11ea-982a-6e1f628146b7.jpg',
      ],
    },
    {
      // pdf
      srcs: [
        'https://image.baidu.com/search/down?tn=download&url=https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3tjfo5dbg21h20r77wl.gif',
        'https://tvax4.sinaimg.cn/large/6e3591e5gy1gj3tjfo5dbg21h20r77wl.gif',
        'https://user-images.githubusercontent.com/38676455/68393366-db14e500-01a6-11ea-96fb-edeb2bc4a39c.gif',
      ],
    },
  ]
})
