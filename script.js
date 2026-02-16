document.addEventListener("DOMContentLoaded", function() {
  "use strict";

  function byId(id) {
    return document.getElementById(id) || null;
  }

  function bySelector(sel, root) {
    root = root || document;
    return root.querySelector(sel);
  }

  function bySelectorAll(sel, root) {
    root = root || document;
    return root.querySelectorAll(sel);
  }

  // ---------- 3-dot menu ----------
  var menuBtn = byId("menu-dots-btn");
  var menuDropdown = byId("menu-dots-dropdown");

  if (menuBtn && menuDropdown) {
    menuBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      var isOpen = menuDropdown.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuDropdown.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });

    document.addEventListener("click", function() {
      if (menuDropdown.classList.contains("is-open")) {
        menuDropdown.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuDropdown.setAttribute("aria-hidden", "true");
      }
    });

    menuDropdown.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }

  // ---------- Text protection: only inside .content-area ----------
  var contentAreas = bySelectorAll(".content-area");
  contentAreas.forEach(function(area) {
    area.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    });
    area.addEventListener("keydown", function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      var key = (e.key || e.code || "").toLowerCase();
      if (key === "c" || key === "keyc" || key === "u" || key === "keyu" || key === "a" || key === "keya") {
        e.preventDefault();
      }
    });
  });

  // ---------- Sidebar toggle (academy) ----------
  var sidebarToggle = byId("sidebar-toggle");
  var sidebar = byId("sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.toggle("is-open");
    });
  }

  // ---------- Anchor links smooth scroll (same page) ----------
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    var href = link.getAttribute("href");
    if (href === "#") return;
    link.addEventListener("click", function(e) {
      var targetId = href.slice(1);
      var target = byId(targetId);
      if (target && document.contains(target)) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (sidebar && sidebar.classList.contains("is-open")) {
          sidebar.classList.remove("is-open");
        }
      }
    });
  });
});
