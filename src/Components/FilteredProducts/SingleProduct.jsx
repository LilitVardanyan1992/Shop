import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Tooltip, Button } from "@material-tailwind/react";

const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct);
    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color ? product[0].color[0] : "";


    const { id } = useParams();
    const [size, setSize] = useState(productSize);
    const [color, setColor] = useState(productColor);
    console.log(color);

    return (
        <div>
            {product
                .filter((product) => product.id === id)
                .map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center py-10">
                            <div className="pl-44 grow-[2]">
                                <img className="h-[550px] rounded-lg object-cover" src={item.img} alt={item.name} />
                            </div>
                            <div className="grow-[3] pl-10">
                                <div className="max-w-lg">
                                    <h5 className="text-2xl font-bold pb-4">{item.name}</h5>
                                    <p className="text-orange-800 text-xl pb-4">15% Off</p>
                                    <p className="text-gray-800 text-xl pb-4">${item.text}</p>
                                    <div className="pb-4">
                                        {item.size ? (<div>
                                            <label
                                                htmlFor="size"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Pick a size
                                            </label>
                                            <select
                                                id="size"
                                                name="size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {item.size.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>) : (<div>
                                            <label
                                                htmlFor="size"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Pick a size
                                            </label>
                                            <select
                                                id="size"
                                                name="size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                disabled={true}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {item?.size?.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        )}
                                    </div>
                                    
                                    <div className="pb-10">
                                            <label
                                                htmlFor="color"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Pick a size
                                            </label>
                                            <select
                                                id="color"
                                                name="color"
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                {item.color.map((color, index) => {
                                                    return (
                                                        <option key={index} value={color}>{color}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <Tooltip content="Add to Card" placement="bottom">
                                            <Button color="gray" size="lg" variant="outlined" ripple={true}>
                                                Add to Card
                                            </Button>
                                        </Tooltip>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleProduct