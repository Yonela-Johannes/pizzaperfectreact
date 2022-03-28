import Product from "./Product"

function Products({products, addOrder }) {
    return (
        <div className='products'>
            {products.map((product)=> (
                <Product key={product.key} id={product.id} addOrder={addOrder} product={product} />
            ))}
        </div>
    )
}

export default Products