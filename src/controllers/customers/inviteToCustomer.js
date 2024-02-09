import shopify from "../../../config/config.js";

const inviteToCustomer = async (req, res) => {
  const { id, to, from, bcc, subject, custom_message } = req.body;
  try {
    const customer = await shopify.customer.sendInvite({
        id,
        "customer_invite" : {
            to,
            from,
            bcc,
            subject,
            custom_message
        }
    });
    res.status(200).json({ message: customer });
  } catch (error) {
    console.error(error);
  }
};

export default inviteToCustomer;
