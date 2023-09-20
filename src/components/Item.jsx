export default function Item({ product }) {
    return(
        <div className="item">
            <h2>{product.title}</h2>
            <img src={product.image} width={130} alt=""/>
            <span>{product.description}</span>
        </div>
    );
}