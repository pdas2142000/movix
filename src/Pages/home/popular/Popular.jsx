import React, { useState } from 'react';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../Components/Switch/switchTabs';
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../Components/carousel/Carousel';

function Popular() {

    const [endPoint , setEndpoint] = useState("movie")

    const {data , loading} = useFetch(`/${endPoint}/popular`);

 
    const onTabChange = (tab) =>{

        setEndpoint(tab === "Movies" ? "movie" :  "tv");

    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
            <span className="carouselTitle">What's popular</span>
            <SwitchTabs data={["Movies" ,"TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data = {data?.results} loading = {loading} endpoint={endPoint} />
        
        </div>
    );  
}

export default Popular;
