import React, { useEffect, useState } from "react";
import products from "../data/product";

function ProductSearchResult({result}){

    const[products, setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState("")

    //result에 변경이 있을때만 useEffect가 사용
    useEffect(()=>{
        const searchProducts = async () => {

            setLoading(true);
            setError("");

            const searchKeywords = [
                result.type,
                ...result.features,
                result.text,
                result.keyword
            ];

            const searchKeyword = searchKeywords.join(" ");

            console.log("상품 검색어:", searchKeyword);

            try {
      
                const response = await fetch(
                    `https://real-time-product-search.p.rapidapi.com/search?q=${encodeURIComponent(searchKeyword)}&limit=40&page=1&country=us&language=en&sort_by=BEST_MATCH&product_condition=ANY&return_filters=true`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "x-rapidapi-host": "real-time-product-search.p.rapidapi.com",
                            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
                        }
                    }
                );
            
                const data = await response.json();
            
                console.log("RapidAPI 상품 검색 결과:", data);
            
                setProducts(data.data.products || []);
            
            } catch (error) {
                console.error("상품 검색 오류:", error);
                setError("상품 검색 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        searchProducts();
    }, {result})

    //일치하는 상품이 없는 경우
    if(products.length === 0){
        return(
            <div className="product-search-result">
                <h2>상품 검색 결과</h2>
                <p>일치하는 상품을 찾을 수 없습니다</p>
            </div>
        )
    }

    return(
        <div className="product-search-result">
            <h2>상품 검색 결과</h2>
            
            {
                products.slice(0, 5).map((product)=>(
                    <div className="product-info" key={product.product_id}>
                        <img src={product.product_photos} width="200"/>
                        <p>상품명 : {product.product_title}</p>
                        <p>가격 : {product.price}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductSearchResult