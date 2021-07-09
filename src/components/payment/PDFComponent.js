import React from 'react';
import {Document, Page, Text, View, StyleSheet,Image,Font } from "@react-pdf/renderer";
import {excursionData} from "../../json/excursionData";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import {getDayExcursion, getMonthExcursion, time} from "../../utils/constants";
import {FaClock, FaMapMarkerAlt, FaUserFriends} from "react-icons/fa";
import {guideInfo} from "../../json/guideInfo";
Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        fontFamily: "Roboto"
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        },
    info_inner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    info:{
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        fontSize: 35,
        fontWeight: 900,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 900,
        marginTop: 20
    },
    text: {
        fontSize: 15,
        marginTop: 10
    },
    QRimage:{
        width: '25%',
        marginTop: 20
    }
});
const PdfComponent = ({keyExcursion}) => {
    const canvas = document.getElementById('qrcode');
    const dataURL = canvas.toDataURL();
    console.log(canvas);
    console.log(dataURL);
    const date = new Date(excursionData[keyExcursion].date);
    const timeFull = excursionData[keyExcursion].timeTo - excursionData[keyExcursion].timeFrom;


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Поздравляем, Вам понравится</Text>
                    <Image src={dataURL} style={styles.QRimage}/>
                    <Text style={styles.title}>{excursionData[keyExcursion].title}</Text>
                    <View style={styles.info}>
                        <View style={[styles.info_inner, {marginRight: 70}]}>
                            <Text style={styles.text}>{date.getDate()} {getMonthExcursion(date)}</Text>
                            <Text style={styles.text}>{getDayExcursion(date)}</Text>
                        </View>
                        <View style={[styles.info_inner, {marginLeft: 70}]}>
                            <Text style={styles.text}>{excursionData[keyExcursion].city}</Text>
                            <Text style={styles.text}>{excursionData[keyExcursion].timeFrom} - {excursionData[keyExcursion].timeTo} ({timeFull} {time(timeFull)})</Text>
                        </View>
                    </View>
                    <View style={styles.info_inner}>
                        <Text style={styles.text}>Количество участников:</Text>
                        <Text >1 человек</Text>
                        <Text style={[styles.text, {marginTop:10}]}>Ваш гид:</Text>
                        <Text >{guideInfo[excursionData[keyExcursion].guide].name} {guideInfo[excursionData[keyExcursion].guide].surname}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PdfComponent;