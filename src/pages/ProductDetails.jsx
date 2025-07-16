import React from "react";
import { Helmet } from "react-helmet";
import { PhotoView } from "react-photo-view";
import { useParams } from "react-router-dom";
import NotFound from "../components/404Page";
import Loader from "../components/loader";
import { useCart } from "../context/CartContext";
import { useQueryData } from "../hooks/useQuery";

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { data, isLoading, isError } = useQueryData(`/products/${id}`, "en", `product-${id}`);

    if (isLoading) return <Loader />;
    if (!data || isError) return <NotFound />;


    return (
        <main>
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.category} />
            </Helmet>
            <section className="mt-5 container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center justify-center">
                        <PhotoView src={data.image}>
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full lg:h-[600px] cursor-zoom-in h-full object-contain"
                            />
                        </PhotoView>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
                        <p className="text-gray-600 mb-4">{data.description}</p>
                        <p className="text-xl text-green-600 font-semibold mb-4">${data.price}</p>
                        <button
                            onClick={() => addToCart(data)}
                            className="bg-black hover:cursor-pointer hover:bg-gray-800 duration-200 text-white px-4 py-2 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
