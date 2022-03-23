// use local storage to manage cart data
const addToDb=id=>{
    
    let shoppinCard={};
    // getItems
    const storageItems=localStorage.getItem('shopping-card');
   if(storageItems){
    shoppinCard=JSON.parse(storageItems);
   }

    // add item
    const quantity=shoppinCard[id];
    if(quantity){
        const newQuantity=parseInt(quantity)+1;
        shoppinCard[id]=newQuantity;
    }
    else{
        shoppinCard[id]=1
    }
    localStorage.setItem('shopping-card',JSON.stringify(shoppinCard));

}
        // get stroge card
        const getStorageCard=()=>{
            let shoppinCard={};
                // getItems
                const storageItems=localStorage.getItem('shopping-card');
                if(storageItems){
                shoppinCard=JSON.parse(storageItems);
            }
            return shoppinCard;
        }


  // remove card
  const removeToCard=id=>{
    const storageItems=localStorage.getItem('shopping-card');
    if(storageItems){
        const shoppinCard=JSON.parse(storageItems);
        if(id in shoppinCard){
            delete shoppinCard[id];
            localStorage.setItem('shopping-card',JSON.stringify(shoppinCard));
        }
    }
}
export {
    addToDb,
    getStorageCard,
};