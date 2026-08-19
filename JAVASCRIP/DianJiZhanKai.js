// 点击文字(.click-text)，控制对应拖拽框(.hide-box)切换显示隐藏
document.querySelectorAll('.click-text').forEach(textItem => {
  textItem.onclick = () => {
    // 获取当前文字绑定的标识
    const mark = textItem.dataset.tag;
    // 找到同标识的拖拽框
    const dragBox = document.querySelector(`.hide-box[data-tag="${mark}"]`);
    // 切换active类，控制显示/隐藏
    dragBox.classList.toggle('active');
  }
})
