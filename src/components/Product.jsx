import { BsFillCartPlusFill } from "react-icons/bs";

function Product({product, addOrder}) {

  return (
    <div className='productMainContainer'>
         <p className='nametag'>{product.name}</p>
         <div className='top'>
            <p className="productName">{product.name}</p>
         </div>
            <div className="productContainer">
                <img src={product.image} alt="product" className="productImage" />
            </div>
        <div className='bottom'>
             <p className="price">R {product.price}</p>
             <p className='text'>{product.items.map((item) => (
                 item.desc
             ))}</p>
             <div className='buttonContainer'>
                <p className="button" onClick={() => addOrder(product)} >{product.button}<BsFillCartPlusFill /></p>
             </div>
            
        </div>
    </div>
  )
}

export default Product