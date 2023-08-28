function populateProducts() {
    const category = document.getElementById("category").value;
    const productDropdown = document.getElementById("product");
  
    productDropdown.innerHTML = "";
  
    if (category === "electronics") {
      addOption(productDropdown, "laptop");
      addOption(productDropdown, "smartphone");
      addOption(productDropdown, "Cameras");
    } else if (category === "clothing") {
      addOption(productDropdown, "Shirt");
      addOption(productDropdown, "Pants");
      addOption(productDropdown, "Dress");
    } else if (category === "stationary") {
      addOption(productDropdown, "Pens");
      addOption(productDropdown, "Notebooks");
      addOption(productDropdown, "Books");
      addOption(productDropdown, "Colors");
    } else if (category === "home") {
      addOption(productDropdown, "Rugs");
      addOption(productDropdown, "Curtains");
      addOption(productDropdown, "Bedsheets");
      addOption(productDropdown, "Cushions");
    } else if(category === "music") {
        addOption(productDropdown,"K-Pop");
        addOption(productDropdown,"Rock");
        addOption(productDropdown,"Jazz");
        addOption(productDropdown,"Classical");
        addOption(productDropdown,"Country");
    }
  }
  
  function addOption(selectElement, value) {
    const option = document.createElement("option");
    option.textContent = value;
    selectElement.appendChild(option);
  }
  
  
  function addItem() {
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const tbl = document.getElementById("enquiries");
    // tbl ==enquiryList
  
    const listItem = document.createElement("li");
    listItem.textContent = `${quantity} x ${product}`;           //variables but X is string
    tbl.appendChild(listItem);
  }
  
