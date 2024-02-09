import express from "express";
import createCustomer from "../controllers/customers/createCustomer.js";
import accountActivationURL from "../controllers/customers/account_activation_url.js";
import getCustomer from "../controllers/customers/getCustomers.js";
import inviteToCustomer from "../controllers/customers/inviteToCustomer.js";
import deleteAddress from "../controllers/customers/deleteAddress.js";

const router = express.Router();

router.post("/create", createCustomer);
router.post("/account-activation-url/", accountActivationURL);
router.post("/invite/", inviteToCustomer);
router.get("/get", getCustomer);
router.put("/delete/:id", deleteAddress);

export default router;
