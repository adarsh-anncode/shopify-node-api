import User from "../../models/user.models.js";

const deleteAddress = async (req, res) => {
    const { id } = req.params
        try {
        const user = await User.findOne({ id });
        // if (!user) {
        //     return res.status(404).json({ message: "User not found" });
        // }
        // else
        //     return res.status(200).json({ message: "Address deleted successfully", data: user })
        console.log(user, 'main user');
        delete user["addresses"]
        console.log(user, 'after delete');
        console.log(user.addresses, 'after delete');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error deleting address" });
    }
}

export default deleteAddress;

