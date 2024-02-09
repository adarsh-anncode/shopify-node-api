import Shopify from "shopify-api-node";

let API_Key = "aee3fc2220400e330cbacb7723ae4085";
let API_Secret_Key = "1df7295d8590b2bb539b6754bb21f2b7";
let Admin_API_Access_Token = "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";
let Store_Name = "anncodefirststore.myshopify.com";
let end_point = "products";

const shopify = new Shopify({
  shopName: Store_Name,
  apiKey: API_Key,
  password: Admin_API_Access_Token,
});

export default shopify;
