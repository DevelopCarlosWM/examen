export const type='findCurrentOrder'
const findCurrentOrder=( order ) =>({
    type,
    payload: order
})
export default findCurrentOrder