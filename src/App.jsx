import React, {useEffect, useState} from "react";import "./assets/style.css";import {Form} from "./components/Form/Form";import {QRCodeList} from "./components/QrCode/QRCodeList";import {handleFileUpload} from "./helpers/file.helper";export default function App() {    const [hashKeys, setHashKeys] = useState([]);    const [sizeX, setSizeX] = useState(0)    const [sizeY, setSizeY] = useState(0)    const [color, setColor] = useState('')    const [barcode, setBarcode] = useState('')    const [name, setName] = useState('')    const [date, setDate] = useState('')    const [loading, setLoading] = useState(false)    const handleChangeSizeX = (e) => {        setSizeX(e.target.value);    };    const handleChangeSizeY = (e) => {        setSizeY(e.target.value);    };    const handleChangeColor = (e) => {        setColor(e.target.value);    };    const handleChangeBarcode = (e) => {        setBarcode(e.target.value);    };    const handleChangeDate = (e) => {        setDate(e.target.value);    };    const handleChangeName = (e) => {        setName(e.target.value);    };    useEffect(() => {        document.getElementById('fileInput').addEventListener('change', (event) => handleFileUpload(event, setLoading, setHashKeys));        return () => {            document.getElementById('fileInput').removeEventListener('change', (event) => handleFileUpload(event, setLoading, setHashKeys));        };    }, []);    return (        <div className="App">            <Form                handleChangeDate={handleChangeDate}                handleChangeName={handleChangeName}                handleChangeSizeX={handleChangeSizeX}                handleChangeSizeY={handleChangeSizeY}                handleChangeColor={handleChangeColor}                handleChangeBarcode={handleChangeBarcode}                date={date}                barcode={barcode}                sizeX={sizeX}                sizeY={sizeY}                color={color}                name={name}            />            {loading ? <div style={{                position: 'absolute',                left: '50%',                transform: 'translateX(-50%)',                zIndex: 1            }}>LOADING.....</div> : <QRCodeList                hashKeys={hashKeys}                sizeX={sizeX}                sizeY={sizeY}                color={color}                name={name}                barcode={barcode}                date={date}            />            }        </div>    );}