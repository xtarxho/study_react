import React from "react";

function ProductResult({result}) {
    return (
        <div className="result-container">
            <h2>
                분석결과
            </h2>

            <div className="result-item">
                <span>상품 종류</span>
                <strong>{result.type}</strong>
            </div>

            <div className="result-item">
                <span>인식된 특징</span>

                <ul>
                    {
                        result.features.map((feature, index) => (
                            <li>
                                {feature}
                            </li>
                        ))
                    }
                </ul>

            </div>

            <div className="result-item">
                <span>유사도</span>
                <strong>{result.similarity}</strong>
            </div>

        </div>
    )
}

export default ProductResult