import "./order-body.css"

const OrderBody = ()=>{
    return(
        <>
        <div className="navbar">
            <div className="order-count"><u>order | 0</u></div>
            <div className="search"></div>
        </div>
        <div className="center-body">
            <div></div>
            <div>
                <form action="" >
                    <button type="submit"> Create </button>
                </form>
            </div>
        </div>
        </>
    )
}
 export default OrderBody;