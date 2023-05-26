import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "utils/urls";

export const Main = () => {
    const thoughtItems = useSelector((store) => store.thoughts.items);
    const dispatch = useDispatch();

    useEffect(() => {
        const options = {
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(API_URL("thoughts"), options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    })
    return (
        <p> I am the main component yao</p>
    );
}

