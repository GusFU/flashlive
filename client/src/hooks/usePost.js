import { response } from "express";
import React, { useState } from "react";

 export default function usePost() {
    const [postData, updateData] = useState({
        pending: false,
        data: undefined,
        error: undefined,
    });
    const execute = ({ data, endPoint }) => {
        updateData({
            pending: true,
            data: undefined,
            error: undefined
        })
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        };
        fetch(endPoint, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                updateData({
                    pending:false,
                    data:response.data,
                    error:undefined,
                });
            })
            .catch(error => {
                updateData({
                    pending: false,
                    data: undefined,
                    error: error.message,
                })
            })
    };
    return {...postData, execute}
}