import shopify from "../../../config/config.js";

const createCustomer = async (req, res) => {
  const {first_name, last_name, email, phone, address1, city, province, zip, country, accepts_marketing} = req.body;
  if(!first_name)return res.send({message : "Please enter following"})
  try {
    const customer = await shopify.customer.create({
      first_name,
      last_name,
      email,
      phone,
      accepts_marketing,
      "addresses" : [
        {
          address1,
          city,
          province,
          zip,
          country
        }
      ]
    });

    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating customer" });
  }
};

export default createCustomer;
