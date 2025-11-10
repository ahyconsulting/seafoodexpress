// toggle search box in navbar

function openSearch() {
  let searchBox = document.getElementById('search-box')
  if (searchBox.classList.contains('lg:inline')) {
    searchBox.classList.remove("lg:inline")
  }
  else{
    searchBox.classList.add("lg:inline")
  }
}


document.addEventListener("DOMContentLoaded", () => {
  function highlightActiveLink() {
    const navbar = document.querySelector("#navbar");
    if (!navbar) {
      setTimeout(highlightActiveLink, 100); // Wait a bit if it's dynamically loaded
      return;
    }

    const currentPath = window.location.pathname;

    // Select all links inside the header (covers all screen sizes)
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname;


      if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
        link.classList.remove("text-white", "text-[#007B8F]", "font-semibold");
        link.classList.add("underline");
      }
    });
  }

  highlightActiveLink();
});

      function searchComponent() {
        return {
          query: '',
          products: [
            { name: 'Scampi', url: '/pages/product.html?product=scampi-1', page: 1 },
            { name: 'Black Tiger Shrimp', url: '/pages/product.html?product=black-tiger-shrimp-2', page: 1 },
            { name: 'Vannamei Shrimp', url: '/pages/product.html?product=vannamei-shrimp-3', page: 1 },
            { name: 'Queen Fish (Frozen)', url: '/pages/product.html?product=queen-fish-frozen-4', page: 1 },
            { name: 'Cuttle Fish', url: '/pages/product.html?product=cuttle-fish-5', page: 1 },
            { name: 'Semi Needle Squid', url: '/pages/product.html?product=semi-needle-squid-6', page: 1 },
            { name: 'Loligo Squid', url: '/pages/product.html?product=loligo-squid-7', page: 1 },
            { name: 'Ribbon Fish', url: '/pages/product.html?product=ribbon-fish-8', page: 1 },
            { name: 'Yellowfin Tuna', url: '/pages/product.html?product=yellowfin-tuna-9', page: 1 },
            { name: 'Tuna Long Tail', url: '/pages/product.html?product=tuna-long-tail-10', page: 1 },
            { name: 'Tuna Bonito', url: '/pages/product.html?product=tuna-bonito-11', page: 1 },
            { name: 'SkipJack Tuna', url: '/pages/product.html?product=skipjack-tuna-12', page: 1 },
            { name: 'Lobster (Panulirus Polyphagus)', url: '/pages/product.html?product=lobster-panulirus-polyphagus-13', page: 1 },
            { name: 'Catfish (Frozen)', url: '/pages/product.html?product=catfish-frozen-14', page: 1 },
            { name: 'Dorab (Wolf Herring)', url: '/pages/product.html?product=dorab-wolf-herring-15', page: 1 },
            { name: 'Seawater Shrimps', url: '/pages/product.html?product=seawater-shrimps-16', page: 1 },
            { name: 'Raw Black Tiger Shrimp', url: '/pages/product.html?product=raw-black-tiger-shrimp-17', page: 2 },
            { name: 'Cooked Black Tiger Shrimp (peeled)', url: '/pages/product.html?product=cooked-black-tiger-shrimp-peeled-18', page: 2 },
            { name: 'Cooked Black Tiger Shrimp (shellon)', url: '/pages/product.html?product=cooked-black-tiger-shrimp-shellon-19', page: 2 },
            { name: 'Raw Vannamei Shrimp', url: '/pages/product.html?product=raw-vannamei-shrimp-20', page: 2 },
            { name: 'Cooked Vannamei Shrimp P&D/PUD', url: '/pages/product.html?product=cooked-vannamei-shrimp-pdpud-21', page: 2 },
            { name: 'Cooked Vannamei Shrimp (shellon)', url: '/pages/product.html?product=cooked-vannamei-shrimp-shellon-22', page: 2 },
            { name: 'Brown Shrimp', url: '/pages/product.html?product=brown-shrimp-31', page: 2 },
            { name: 'Deep Sea Shrimp', url: '/pages/product.html?product=deep-sea-shrimp-32', page: 2 },
            { name: 'Flower Shrimp', url: '/pages/product.html?product=flower-shrimp-33', page: 2 },
            { name: 'Karikkadi (Tiny Shrimps)', url: '/pages/product.html?product=karikkadi-tiny-shrimps-34', page: 2 },
            { name: 'Choodan (Pink Shrimps)', url: '/pages/product.html?product=choodan-pink-shrimps-35', page: 2 },
            { name: 'Poovalan (Pink Brown shrimp)', url: '/pages/product.html?product=poovalan-pink-brown-shrimp-36', page: 2 },
            { name: 'Naran (White Shrimp)', url: '/pages/product.html?product=naran-white-shrimp-37', page: 2 },
            { name: 'Cooked Spiny lobster whole', url: '/pages/product.html?product=cooked-spiny-lobster-whole-38', page: 2 },
            { name: 'Green Mud Crab', url: '/pages/product.html?product=green-mud-crab-39', page: 2 },
            { name: 'Catla', url: '/pages/product.html?product=catla-40', page: 2 },
            { name: 'Pearl Spot Fish', url: '/pages/product.html?product=pearl-spot-fish-41', page: 3 },
            { name: 'Rohu', url: '/pages/product.html?product=rohu-42', page: 3 },
            { name: 'Tilapia', url: '/pages/product.html?product=tilapia-43', page: 3 },
            { name: 'Tilapia Fillet', url: '/pages/product.html?product=tilapia-fillet-44', page: 3 },
            { name: 'Silver Pomfret', url: '/pages/product.html?product=silver-pomfret-45', page: 3 },
            { name: 'Black Pomfret', url: '/pages/product.html?product=black-pomfret-46', page: 3 },
            { name: 'Chinese Pomfret', url: '/pages/product.html?product=chinese-pomfret-47', page: 3 },
            { name: 'Croacker Silver', url: '/pages/product.html?product=croacker-silver-48', page: 3 },
            { name: 'Indian Mackerel', url: '/pages/product.html?product=indian-mackerel-49', page: 3 },
            { name: 'Horse Mackerel', url: '/pages/product.html?product=horse-mackerel-50', page: 3 },
            { name: 'Spanish Mackerel', url: '/pages/product.html?product=spanish-mackerel-51', page: 3 },
            { name: 'Kingfish', url: '/pages/product.html?product=kingfish-52', page: 3 },
            { name: 'Yellow Croaker (Frozen)', url: '/pages/product.html?product=yellow-croaker-frozen-53', page: 3 },
            { name: 'Crab', url: '/pages/product.html?product=crab-54', page: 3 },
            { name: 'Baracuda', url: '/pages/product.html?product=baracuda-55', page: 3 },
            { name: 'Reefcod', url: '/pages/product.html?product=reefcod-56', page: 3 },
            { name: 'Red Snapper', url: '/pages/product.html?product=red-snapper-57', page: 4 },
            { name: 'Leather Jacket', url: '/pages/product.html?product=leather-jacket-58', page: 4 },
            { name: 'Indian Oil Sardine', url: '/pages/product.html?product=indian-oil-sardine-59', page: 4 },
            { name: 'Dolphin Fish', url: '/pages/product.html?product=dolphin-fish-60', page: 4 },
            { name: 'Octopus', url: '/pages/product.html?product=octopus-61', page: 4 },
            { name: 'Itoyori surimi', url: '/pages/product.html?product=itoyori-surimi-62', page: 4 },
            { name: 'Cooked scampi', url: '/pages/product.html?product=cooked-scampi-63', page: 4 },
            { name: 'Baby Octopus', url: '/pages/product.html?product=baby-octopus-64', page: 4 },
            { name: 'Grouper Fish', url: '/pages/product.html?product=grouper-fish-65', page: 4 },
            { name: 'Bombay Duck Fish', url: '/pages/product.html?product=bombay-duck-fish-66', page: 4 }
          ], 

          filtered: [],
          highlightedIndex: -1,

          filterProducts() {
            const q = this.query.toLowerCase();
            if (!q) {
              this.filtered = [];
              this.highlightedIndex = -1;
              return;
            }
            // Filter products by includes query text
            this.filtered = this.products.filter(p => p.name.toLowerCase().includes(q));
            this.highlightedIndex = -1;
          },

          clearResults() {
            this.filtered = [];
            this.highlightedIndex = -1;
          },

          goToProduct(product) {
            sessionStorage.setItem('selectedProduct', product.name);
            sessionStorage.setItem('productPage', product.page);
            window.location.href = product.url;  // Use product.url dynamically
          },

          highlightNext() {
            if (this.highlightedIndex < this.filtered.length - 1) {
              this.highlightedIndex++;
            }
          },

          highlightPrev() {
            if (this.highlightedIndex > 0) {
              this.highlightedIndex--;
            }
          },

          selectHighlighted() {
            if (this.highlightedIndex >= 0) {
              this.goToProduct(this.filtered[this.highlightedIndex]);
            }
          }
        }
      }