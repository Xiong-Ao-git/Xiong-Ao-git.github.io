// 获取所有拖拽容器
const boxList = document.querySelectorAll(".dropBox");

boxList.forEach(box=>{
  // 当前容器专属存储标识
  const storeKey = box.dataset.store;

  // 页面加载恢复当前容器图片
  const loadImg = ()=>{
    const pic = localStorage.getItem(storeKey);
    if(!pic) return;
    box.innerHTML = "";
    const img = document.createElement("img");
    img.className = "scheduleImg";
    img.src = pic;
    box.appendChild(img);
  }
  loadImg();

  // 允许拖拽悬浮
  box.ondragover = e=>e.preventDefault();

  // 拖拽图片
  box.ondrop = e=>{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if(!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = res=>{
      box.innerHTML = "";
      const img = document.createElement("img");
      img.className = "scheduleImg";
      img.src = res.target.result;
      box.appendChild(img);
      // 存入当前容器独立存储空间，互不干扰
      localStorage.setItem(storeKey, res.target.result);
    }
    reader.readAsDataURL(file);
  }
})
