"use strict"; // 使用严格模式

// 根据滚动距离更新导航栏的透明度
function updateNavbarOpacity(navbar, scrollThreshold) {
    const scrollTop = window.scrollY;
    const opacity = Math.min(1, Math.max(0, scrollTop / scrollThreshold)); // 计算透明度
    navbar.style.backgroundImage = `linear-gradient(to bottom, rgba(221, 213, 202, ${opacity}) 10%, transparent 90%)`;
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const displayCarousel = document.getElementById("DisplayCarousel");
    const slideContents = document.querySelectorAll('.slide-content');
    const scrollThreshold = 100; // 设置滚动多远开始不透明

    if (navbar) {
        window.addEventListener("scroll", function () {
            updateNavbarOpacity(navbar, scrollThreshold); // 监听滚动事件
        });
    }

  
    // 设置 carousel 中的元素复制逻辑
    const items = document.querySelectorAll(".carousel .carousel-item");
    items.forEach(el => {
        const minPerSlide = 3; // 每个幻灯片的最小子元素数量
        let next = el.nextElementSibling;
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0]; // 如果没有下一个元素，则循环回第一个
            }
            const cloneChild = next.cloneNode(true); // 克隆子元素
            el.appendChild(cloneChild.children[0]); // 添加到当前幻灯片
            next = next.nextElementSibling;
        }
    });
});


$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        if ($(".back-top").hasClass("hide")) {
          $(".back-top").toggleClass("hide");
        }
      } else {
        $(".back-top").addClass("hide");
      }
    });
  
    // 點擊按鈕回頂部
    $(".back-top").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500 // 回頂部時間為 500 毫秒
      );
    });
  });
  

// 產品JS
function changeContent(flowerType) {
    const freshFlower = document.getElementById('freshFlower');
    const eternalFlower = document.getElementById('eternalFlower');
    const productListFresh = document.getElementById('productListFresh');
    const productListEternal = document.getElementById('productListEternal');
    const backButton = document.querySelector('.back-button');
    const freshFlowerText = document.querySelector('.freshFlower-text');
    const eternalFlowerText = document.querySelector('.eternalFlower-text');

    if (freshFlower && eternalFlower) {
        // 切换内容
        removeFlowerTypeText();
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0);

        freshFlower.style.display = 'none';
        eternalFlower.style.display = 'none';
        freshFlowerText.style.display = 'none';
        eternalFlowerText.style.display = 'none';

        if (flowerType === 'freshFlower') {
            productListFresh.style.display = 'flex';
            productListEternal.style.display = 'none';
        } else {
            productListFresh.style.display = 'none';
            productListEternal.style.display = 'flex';
        }

        if (backButton) {
            backButton.style.display = 'block'; // 显示返回按钮
        }

        // 为商品清单添加淡入效果
        if (flowerType === 'freshFlower') {
            productListFresh.classList.add('fade-in');
        } else {
            productListEternal.classList.add('fade-in');
        }

        showFlowerTypeText(flowerType === 'freshFlower' ? 'Fresh Flower' : 'Eternal Flower');
    }
}

function removeFlowerTypeText() {
    const flowerTypeTextElement = document.querySelector('.flower-type-text');
    if (flowerTypeTextElement) {
        flowerTypeTextElement.parentNode.removeChild(flowerTypeTextElement); // 删除花卉类型文字元素
    }
}

function showFlowerTypeText(text) {
    const flowerTypeTextElement = document.createElement('div');
    flowerTypeTextElement.textContent = text;
    flowerTypeTextElement.classList.add('flower-type-text');
    const flowerTypeInfo = document.querySelector('.flower-type-info');
    if (flowerTypeInfo) {
        flowerTypeInfo.appendChild(flowerTypeTextElement); // 添加花卉类型文字
    }
}

// 返回功能
function goBack() {
    const freshFlower = document.getElementById('freshFlower');
    const eternalFlower = document.getElementById('eternalFlower');
    const productListFresh = document.getElementById('productListFresh');
    const productListEternal = document.getElementById('productListEternal');
    const backButton = document.querySelector('.back-button');
    const freshFlowerText = document.querySelector('.freshFlower-text');
    const eternalFlowerText = document.querySelector('.eternalFlower-text');

    if (freshFlower && eternalFlower && backButton) {
        freshFlower.style.display = 'block';
        eternalFlower.style.display = 'block';
        productListFresh.style.display = 'none';
        productListEternal.style.display = 'none';
        backButton.style.display = 'none';
        freshFlowerText.style.display = 'block';
        eternalFlowerText.style.display = 'block';

        removeFlowerTypeText(); // 删除花卉类型文字元素
    }
}

// 清單相片轉換
function changeProductImage(element) {
    const hoverImage = element.querySelector('.hover-image');
    if (hoverImage) {
        hoverImage.style.opacity = '0';
    }
}

function restoreProductImage(element) {
    const hoverImage = element.querySelector('.hover-image');
    if (hoverImage) {
        hoverImage.style.opacity = '1';
    }
}
