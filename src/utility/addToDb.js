const getStoredProductList = ()=>{
    const storedListstr = localStorage.getItem('product-list');
    if(storedListstr){
        const storedList = JSON.parse(storedListstr)
        return storedList;
    }
    else{
        return [];
    }
}
const addToStoredProductList = (id)=>{
    const storedList = getStoredProductList();
    if(storedList.includes(id)){
        console.log(id, 'already exist in the list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('product-list', storedListStr)
    }
}
const getStoredWishList = ()=>{
    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList;
    }
    else{
        return[];
    }
}
const addToWishList = (anotherid)=>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(anotherid)){
        console.log(anotherid, 'already exists in WISH LIST')
    }
    else{
        storedWishList.push(anotherid);
        const storedWishListStr =JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}
export {addToStoredProductList, addToWishList, getStoredProductList, getStoredWishList}