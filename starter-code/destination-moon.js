  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".insideMenuItems");

    menuItems.forEach(function (item) {
      const link = item.querySelector("a");
      link.addEventListener("click", function (event) {
        menuItems.forEach(function (otherItem) {
          otherItem.querySelector("a").classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  });

