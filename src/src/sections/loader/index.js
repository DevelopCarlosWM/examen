import React from 'react'
const Loader = ({ loading }) => {
    return(
        <>
            {loading ? (
                <div style={{ dislpay:'block' }}>
                    <div className="conte_loader_MyStyle" style={{ display:'flex' }}>
                        <div className="loader_MyStyle"></div>
                    </div>
                </div>
            ): (
                null
            )}
        </>
    )
}
export default Loader