import axios from "axios";
import React, {useEffect, useState} from "react";

/*------------ CSS -------------*/
import './css/partner.scss';

export default () => {
    const [partners, setPartner] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/partners")
        .then((response) => {
            setPartner(response.data);
        });
    }, []);

    return (
        <>
            {
                partners.map((partner) => (
                    <div className="partner fade-in">
                        <img src={partner.image} alt="Partner" />
                    </div>
                    )
                )
            }
        </>
    );
}