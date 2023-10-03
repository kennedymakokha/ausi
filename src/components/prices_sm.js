import React, { useEffect, useState } from "react";
import { getApiData } from '../redux/actions/data.action'
import { connect } from 'react-redux'
const style = {
    container: {
        display: "flex", justifyItems: "center", justifycontent: "center",
        alignItems: 'center', height: 'auto', paddingTop: '10px', width: "100%"
        // md:flex hidden items-center w-full h-1/2   
    }
}
function PriceCard(props) {

    return (
        (<div className='col-lg-3  ratesContainer' >

            <div style={{ display: "flex", flexDirection: 'column' }}>

                <div style={{ gap: "10px", display: "flex", fontSize: "14px", justifyItems: 'space-between', justifyContent: "space-between", fontWeight: 'bolder', margin: '1px', color: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '10px', }}>
                    {props.title}
                    <div style={{ backgroundColor: 'lightgreen', paddingTop: '5px', paddingBottom: '5px', paddingRight: '10px', paddingLeft: '10px', borderRadius: '5px', }}>{props.value !== undefined ? props.value : "00.00"}
                    </div>
                    <div className='col' style={{ display: "flex", justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: "red" }}>
                        {props.variations ? props.variations : "00.00"}
                        {/* <img src={arrowDown} className="h-4 w-4 mt-1" style={{ height: "13px", width: "12px",scrollSnapMarginTop:"1px",paddingLeft:'1px' }} alt="" /> */}
                    </div>
                </div>

            </div>
        </div>)
    )
}
function PriceCardSM(props) {
    return (
        (<div className='col-sm-3  ratesContainer' >
            {/* <div className='col-2' style={{}}>
                <img src={kilo} />
            </div> */}
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <div style={{ display: "flex", fontSize: "10px", justifyItems: 'space-between', justifyContent: "space-between", fontWeight: 'bolder', margin: '1px', color: 'black', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '1px', }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {props.title}
                        <div style={{ backgroundColor: 'lightgreen', paddingTop: '1px', paddingBottom: '1px', paddingRight: '2px', paddingLeft: '2px', borderRadius: '5px', }}>{props.value ? props.value : "000.00"}
                        </div>
                        <div className='col' style={{ display: "flex", justifyContent: 'center', alignContent: 'center', alignItems: 'center', color: "red" }}>
                            {props?.variations !== undefined || props.variations !== NaN ? props.variations : "0.00"}
                            {/* <img src={arrowDown} className="h-4 w-4 mt-1" style={{ height: "13px", width: "12px",scrollSnapMarginTop:"1px",paddingLeft:'1px' }} alt="" /> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>)
    )
}
const Prices = (props) => {
    // const { data } = props
    const [data, setPrices] = useState({});
    const [up, setUp] = useState(false);
    // const getApiData = async () => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("x-access-token", "goldapi-1pgf6rlmylsbqq-io");
    //     myHeaders.append("Content-Type", "application/json");

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
    //         .then(response => response.text())
    //         .then(result => {

    //             setPrices(JSON.parse(result))
    //         })
    //         .catch(error => console.log('error', error));

    //     // update the state
    //     // setStatus(response.success)
    //     // setPrices(response.rates);
    // };

    useEffect(() => {
        setPrices(props.data1)
        props.getApiData();
    }, [props.data1]);
    useEffect(() => {

        //Implementing the setInterval method
        const interval = setInterval(() => {
            setUp((prevState) => !prevState);
            props.getApiData();
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [up]);

    return (
        <div className="flex col-lg-12 col-sm-12" style={style.container}>

            {props.small ? <PriceCardSM title="SPOT GOLD" value={data?.price} variations={(data?.price - data?.high_price).toFixed(2)} /> :
                <PriceCard title="SPOT GOLD" value={data?.price} variations={(data?.price - data?.high_price).toFixed(2)} />}
            {props.small ? <PriceCardSM title=" PER GRAM" value={data?.price_gram_24k} variations={data?.ch} /> : <PriceCard title=" PER GRAM" value={data?.price_gram_24k} variations={data?.ch} />}
            {props.small ? <PriceCardSM title="PER KG" value={(data?.price_gram_24k * 1000).toFixed(2)} variations={data?.chp} /> : <PriceCard title="PER KG" value={(data?.price_gram_24k * 1000).toFixed(2)} variations={data?.chp} />}
            {props.small ? <PriceCardSM title="PER TOLA" value={(data?.price_gram_24k / 0.085735260233307).toFixed(2)} variations={data?.ch} /> : <PriceCard title="PER TOLA" value={(data?.price_gram_24k / 0.085735260233307).toFixed(2)} variations={data?.ch} />}


        </div>

    );
}

 export const PriceSmall = (props) => {

    const [data, setPrices] = useState({});
    const [up, setUp] = useState(false);


    useEffect(() => {
        setPrices(props.data1)
        props.getApiData();
    }, []);
    useEffect(() => {

        //Implementing the setInterval method
        const interval = setInterval(() => {
            setUp((prevState) => !prevState);
            props.getApiData();
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [up]);




    return (
        <div className="flex " style={{ display: "flex", height: '60px', backgroundColor: '#d2ac67', width: '100%' }} >

            <div className="flex " style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center' }} >
                <PriceCardSM title="SPOT GOLD" value={data?.price} variations={(data?.price - data?.high_price).toFixed(2)} />
            </div>
            <div className="flex " style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center' }} >
                <PriceCardSM title=" PER GRAM" value={data?.price_gram_24k} variations={data?.ch} />
            </div>
            <div className="flex " style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center' }} >

                <PriceCardSM title="PER KG" value={(data?.price_gram_24k * 1000).toFixed(2)} variations={data?.chp} />
            </div>
            <div className="flex " style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center' }} >
                <PriceCardSM title="PER TOLA" value={(data?.price_gram_24k / 0.085735260233307).toFixed(2)} variations={data?.ch} />
            </div>
        </div>

    );
}


const mapStateToProps = (state) => {
    return {

        loading: state.userDetails.loading,

        error: state.userDetails.error,

    };
};

export default connect(mapStateToProps, { getApiData })(Prices)

