const { default: Layout } = require("@/components/Layout");

const NewProduct = () => {
  return (
    <Layout>
      <h1 className="text-xl text-blue-900 mb-2">New Product</h1>
      <input placeholder="Product name" />
      <textarea placeholder="Description"></textarea>
    </Layout>
  );
};

export default NewProduct;
