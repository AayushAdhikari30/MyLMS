import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
    //Handle user inputs from frontend
    const { Username, Name, Password, Kuid } = req.body;
    console.log(`Name : ${Name}`);

    // validating user
    if (
        [Username, Name, Password, Kuid].some((userinfo) => userinfo?.trim() == "")
    ) {
        console.log('Error in data sending format')
    }

    // recheck user existance
    const userCreated = await User.findOne({
        Kuid
    })

    if (userCreated) {
        console.log('Already user with same id')
    }


    // data entry in database as object

    const user = await User.create({
        Username,
        Name,
        Kuid,
        Password
    })


    return res.status(200).json({
        message:"User Created sucessfully"
    })





});
export {registerUser}














































export default registerUser;
