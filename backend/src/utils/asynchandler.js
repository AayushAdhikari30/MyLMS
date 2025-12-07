const asyncHandler = (HandleRequest)=>{
    return (req,res,next)=>{
        Promise.resolve(HandleRequest(req,res,next)).catch(next)
    }
}

export {asyncHandler}