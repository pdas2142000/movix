import React, { useState } from 'react';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../Components/Switch/switchTabs';
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../Components/carousel/Carousel';

function Trending() {

    const [endPoint , setEndpoint] = useState("day")

    const {data , loading} = useFetch(`/trending/all/${endPoint}`);

 
    const onTabChange = (tab) =>{

        setEndpoint(tab === "Day" ? "day" :  "week");

    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day" ,"Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data = {data?.results} loading = {loading} />
        
        </div>
    );  
}

export default Trending;
