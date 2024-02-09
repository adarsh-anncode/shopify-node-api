import shopify from "../../../config/config.js";
import User from "../../models/user.models.js";

const getCustomer = async (req, res) => {
  let params = { limit: 10 };
  try {
    const customer = await shopify.customer.list(params);
    res.status(200).json({ customers: customer });
    for (const cust of customer) {
      const { id, email, first_name, last_name, phone, addresses } = cust;

      const existingUser = await User.findOne( {id} );
      if (!existingUser) {
        const newUser = new User({
          id,
          first_name,
          last_name,
          email,
          phone,
          addresses
        });
        await newUser.save();
      }
    }

    params = customer.nextPageParameters;
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export default getCustomer;
