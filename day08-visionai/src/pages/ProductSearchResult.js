import React from "react";

function ProductSearchResult({result}){

    const searchKeyword = [
        result.type,
        ...result.features
    ].join(" ")

    console.log("검색어 : " + searchKeyword)

    //상품을 여러개로 수정
    const product = [
        {
            brand: "Nike",
            name: "Nike Air Force 1",
            price: 89000,
            description: "깔끔한 화이트 컬러의 대표적인 스니커즈입니다.",
            keywords: ["운동화", "흰색", "스포츠화", "스니커즈"]
        },
        {
            brand: "Adidas",
            name: "Adidas Superstar",
            price: 79000,
            description: "클래식한 디자인의 화이트 스니커즈입니다.",
            keywords: ["운동화", "흰색", "스니커즈"]
        },
        {
            brand: "New Balance",
            name: "New Balance 530",
            price: 119000,
            description: "편안한 착화감이 특징인 인기 러닝화입니다.",
            keywords: ["운동화", "회색", "스포츠화", "러닝화"]
        },
        {
            brand: "Converse",
            name: "Chuck Taylor All Star",
            price: 69000,
            description: "캐주얼하게 활용하기 좋은 클래식 스니커즈입니다.",
            keywords: ["운동화", "흰색", "스니커즈", "캐주얼"]
        }
    ];

    //map을 통해서 product배열에 담긴 내용을 하나씩 꺼내옴
    const matchProducts = product.map(product => {
        //"운동화 흰색 스포츠화 스니커즈"와 같은 형식의 키워드를 가진 항목이 있는지
        //조회해서 일치하는 항목의 갯수를 .length로 구한다
        const score = product.keywords.filter(keyboard => 
            searchKeyword.includes(keyboard)
        ).length;

        return{
            ...product,
            score:score
        }

    })

    //임시로 매칭결과를 조회
    matchProducts.forEach(product => {
        console.log(
            product.brand,
            product.name,
            "score :" + product.score
        )
    })

    return(
        <div className="product-search-result">
            <h2>상품 검색 결과</h2>
            <div className="product-info">
                <p>브랜드 : {product.brand}</p>
                <p>상품명 : {product.name}</p>
                <p>예상가격 : {product.price}</p>
                <p>상품설명 : {product.description}</p>
            </div>
        </div>
    )
}

export default ProductSearchResult