const importAll = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((item) => {
      const imageName = item.replace("./", "").replace(/\s+/g, "").toLowerCase(); // Normalize filename
      images[imageName] = requireContext(item);
    });
    return images;
  };
  
  const productImages = importAll(require.context("../assets/products", false, /\.(jpg|jpeg|png|gif)$/));
  
  export default productImages;
  