import shopify from "../../../config/config.js";


const accountActivationURL = async (req, res) => {
  const {id} = req.body;
  try {
    const customer = await shopify.customer.accountActivationUrl(id)
    res.status(200).json({"message": customer})
  } catch (error) {
    res.status(500).json(('message', 'Error in creating URL'))
    console.error(error.message);
  }
}

export default accountActivationURL