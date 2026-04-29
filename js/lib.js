<script>
function addProduct(nameText, priceText, imgLink) {

    // tạo khung sản phẩm
     cost productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item");

    // tạo ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");

    const img = document.createElement("img");
    img.setAttribute("src", imgLink);
    img.setAttribute("alt", nameText);

    productImage.appendChild(img);
    productItem.appendChild(productImage);

    // tạo info
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");

    // tên sản phẩm
    const name = document.createElement("p");
    name.appendChild(document.createTextNode(nameText));

    // giá
    const price = document.createElement("p");
    price.appendChild(document.createTextNode(priceText));

    // link mua
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.appendChild(document.createTextNode("MUA LIỀN TAY"));

    // gắn vào info
    productInfo.appendChild(name);
    productInfo.appendChild(price);
    productInfo.appendChild(link);

    productItem.appendChild(productInfo);

    // hiển thị ra web
    document.body.appendChild(productItem);
}

// gọi function để hiển thị sản phẩm
addProduct("Áo đẹp", "1.000đ", "./accset/imagne/hoa.jpg");
</script>