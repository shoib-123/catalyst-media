export function modifyResponse(productArr, colorArr, materialArr) {
  for (let i = 0; i < productArr.length; i++) {
    for (let j = 0; j < colorArr.length; j++) {
      if (productArr[i].colorId == colorArr[j].id) {
        productArr[i]["color"] = colorArr[j].name.toUpperCase();
        break;
      } else {
        productArr[i]["color"] = "N.A.";
      }
    }
    for (let j = 0; j < materialArr.length; j++) {
      if (productArr[i].materialId == materialArr[j].id) {
        productArr[i]["material"] = materialArr[j].name.toUpperCase();
        break;
      } else {
        productArr[i]["material"] = "N.A.";
      }
    }
  }
  return productArr;
}

export function filterResponse(products, args) {
  let filteredArr = [];
  let uniqueArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (products[j][args[i]["type"]] == args[i].id) {
        filteredArr.push(products[j]);
      }
    }
  }
  if (filteredArr.length > 0) {
    uniqueArr = [
      ...new Map(filteredArr.map((item) => [item.id, item])).values(),
    ];
  }
  return uniqueArr;
}

export function modifyObject(obj, modifyObj) {
  if (modifyObj.length == 1) {
    if (modifyObj[0]["type"] == obj["type"]) {
      modifyObj[0]["id"] = obj["id"];
    } else {
      modifyObj.push(obj);
    }
  } else if (modifyObj.length > 1) {
    for (let i = 0; i < modifyObj.length; i++) {
      if (modifyObj[i]["type"] == obj["type"]) {
        modifyObj[i]["id"] = obj["id"];
      }
    }
  }
  return modifyObj;
}

export function featuredProducts(featured, products) {
  let newArr = [];
  for (let i = 0; i < featured.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (featured[i]["productId"] == products[j]["id"]) {
        newArr.push(products[j]);
      }
    }
  }
  return newArr;
}
