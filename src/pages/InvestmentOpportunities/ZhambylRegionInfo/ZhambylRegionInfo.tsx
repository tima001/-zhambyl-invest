import React from 'react'
import { Box, useTheme } from '@mui/material'
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const ZhambylRegionInfo: React.FC = () => {
    const theme = useTheme()

    const styles = {
        mainContainer: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#FFF',
            position: 'relative',
        },
        header: {
            width: '100%',
            height: '64px',
            backgroundColor: '#FFF',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.13)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '0 40px',
        },
        navItem: {
            display: 'flex',
            padding: '0 30px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            cursor: 'pointer',
        },
        languageSection: {
            display: 'flex',
            padding: '0 30px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            height: '100%',
            borderLeft: '1px solid #ECECEC',
            cursor: 'pointer',
        },
        infoCard: {
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        sectionTitle: {
            fontSize: '26px',
            fontWeight: 700,
            color: '#000',
            textTransform: 'uppercase',
            marginBottom: '20px',
        },
        statItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px',
        },
        statIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: theme.palette.grey[300],
        },
        statContent: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        statTitle: {
            fontSize: '22px',
            fontWeight: 700,
            color: '#000',
        },
        statValue: {
            fontSize: '20px',
            fontWeight: 400,
            color: '#000',
        },
        climateCard: {
            width: '715px',
            height: '270px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '584px',
            top: '1052px',
            padding: '40px',
        },
        populationCard: {
            width: '715px',
            height: '278px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '584px',
            top: '1347px',
            padding: '40px',
        },
        territoryCard: {
            width: '419px',
            height: '573px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '141px',
            top: '1052px',
            padding: '53px',
        },
        transitCard: {
            width: '1158px',
            height: '498px',
            borderRadius: '18.611px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '141px',
            top: '1661px',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
        },
        mapSection: {
            width: '540px',
            height: '415px',
            position: 'relative',
        },
        transitInfo: {
            width: '476px',
            height: '339px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        borderItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
        },
        borderFlag: {
            width: '64px',
            height: '39px',
            borderRadius: '5.976px',
            border: '0 solid #CFCFCF',
            boxShadow: '0 -0.854px 3.415px 0 rgba(0, 0, 0, 0.25)',
        },
        borderInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        borderCountry: {
            fontSize: '17.846px',
            fontWeight: 400,
            color: '#000',
        },
        borderDistance: {
            fontSize: '33.214px',
            fontWeight: 400,
            color: '#000',
        },
        airportCard: {
            width: '706px',
            height: '127px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '141px',
            top: '2195px',
            padding: '19.5px 32px 18px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
        },
        airportIcon: {
            width: '88px',
            height: '89px',
            borderRadius: '11px',
            backgroundColor: theme.palette.grey[300],
        },
        agricultureCard: {
            width: '651px',
            height: '696px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '146px',
            top: '2358px',
            padding: '30px',
        },
        livestockCard: {
            width: '467px',
            height: '426px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            position: 'absolute',
            left: '837px',
            top: '2358px',
            padding: '30px',
        },
        mineralCard: {
            width: '346px',
            height: '346px',
            borderRadius: '18.771px',
            backgroundColor: '#F7F7F7',
            padding: '28px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        mineralItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
        },
        mineralIcon: {
            width: '71px',
            height: '48px',
            backgroundColor: theme.palette.grey[300],
        },
        mineralInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        mineralName: {
            fontSize: '22.31px',
            fontWeight: 700,
            color: '#000',
        },
        mineralAmount: {
            fontSize: '20px',
            fontWeight: 400,
            color: '#000',
        },
        freeDepositsCard: {
            width: '1158px',
            height: '281px',
            borderRadius: '18.771px',
            backgroundColor: '#F2F5FB',
            left: '146px',
            top: '3090px',
            padding: '30px',
            position: 'relative',
        },
        footer: {
            width: '100%',
            height: '301px',
            backgroundColor: '#F3BF78',
            position: 'absolute',
            left: '0px',
            top: '4031px',
            padding: '75px 121.5px 22.5px 121.5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '37.5px',
        },
        footerContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        footerLogo: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
        footerLogoImg: {
            width: '83px',
            height: '83px',
            borderRadius: '11px',
            backgroundColor: theme.palette.grey[300],
        },
        footerContactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '4.5px',
            marginBottom: '15px',
        },
        socialButtons: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '13.962px',
        },
        socialButton: {
            display: 'flex',
            padding: '12px',
            borderRadius: '7.978px',
            border: '0.997px solid #000',
            backgroundColor: 'rgba(255, 255, 255, 0.30)',
            cursor: 'pointer',
        },
        regionInfoBox: {
            width: '746px',
            height: '127px',
            borderRadius: '12.541px',
            backgroundColor: '#F2F5FB',
            position: 'absolute',
            left: '408px',
            top: '132px',
            padding: '12.541px 16.722px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        regionIcon: {
            width: '80px',
            height: '82px',
            backgroundColor: theme.palette.grey[300],
        },
        regionText: {
            fontSize: '20px',
            fontWeight: 400,
            color: '#000',
            lineHeight: 'normal',
        },
        mapBackground: {
            width: '1075px',
            height: '540px',
            position: 'absolute',
            left: '257px',
            top: '313px',
            backgroundColor: theme.palette.grey[200],
            borderRadius: '8px',
        },
        transportInfo: {
            width: '376px',
            fontSize: '16px',
            fontWeight: 400,
            color: '#000',
            position: 'absolute',
            left: '187px',
            top: '930px',
            textAlign: 'center',
        },
        railwayInfo: {
            width: '322px',
            fontSize: '16px',
            fontWeight: 400,
            color: '#000',
            position: 'absolute',
            left: '680px',
            top: '930px',
            textAlign: 'center',
        },
        railwayConnectionBox: {
            width: '239px',
            height: '42px',
            borderRadius: '5.359px',
            backgroundColor: '#4083E5',
            position: 'absolute',
            left: '1058px',
            top: '921px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '7.146px 2.382px',
        },
        railwayConnectionText: {
            color: '#FFF',
            fontSize: '14px',
            fontWeight: 400,
            textAlign: 'center',
        },
        blueTransportLine: {
            width: '17px',
            height: '8px',
            backgroundColor: '#00A2FF',
            position: 'absolute',
            left: '162px',
            top: '936px',
        },
        blackTransportLine: {
            width: '31px',
            height: '8px',
            backgroundColor: '#000',
            position: 'absolute',
            left: '634px',
            top: '936px',
            background: 'repeating-linear-gradient(to right, #000 0, #000 7px, transparent 7px, transparent 14px)',
        },
    }

    return (
        <Box sx={styles.mainContainer}>

            {/* Map Background */}
            <Box sx={styles.mapBackground} />

            {/* Region Info Box */}
            <Box sx={styles.regionInfoBox}>
                <Box sx={styles.regionIcon} />
                <Box sx={styles.regionText}>
                    <span style={{ fontWeight: 400 }}>• </span>
                    <span style={{ fontWeight: 700 }}>10</span>
                    <span style={{ fontWeight: 400 }}> районов<br/>• </span>
                    <span style={{ fontWeight: 700 }}>367</span>
                    <span style={{ fontWeight: 400 }}> населенных пункта<br/>• 3 города районного подчинения: </span>
                    <span style={{ fontWeight: 700 }}>Каратау, Жанатас, Шу</span>
                    <span style={{ fontWeight: 400 }}><br/>• </span>
                    <span style={{ fontWeight: 700 }}>Тараз</span>
                    <span style={{ fontWeight: 400 }}> – административный центр</span>
                </Box>
            </Box>

            {/* Transport Lines and Info */}
            <Box sx={styles.blueTransportLine} />
            <Box sx={styles.blackTransportLine} />
            <Box sx={styles.transportInfo}>
                МЕЖДУНАРОДНЫЙ АВТОМОБИЛЬНЫЙ КОРИДОР<br/>
                «ЗАПАДНАЯ ЕВРОПА - ЗАПАДНЫЙ КИТАЙ»
            </Box>
            <Box sx={styles.railwayInfo}>
                МЕЖДУНАРОДНЫЙ ЖЕЛЕЗНОДОРОЖНЫЙ<br/>
                ПРОЕКТ «ТРАСЕКА»
            </Box>
            <Box sx={styles.railwayConnectionBox}>
                <Box sx={styles.railwayConnectionText}>
                    25 ЖД соединений<br/>
                    с 50 станциями
                </Box>
            </Box>

            {/* Territory Card */}
            <Box sx={styles.territoryCard}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Box sx={{ width: '78px', height: '78px', backgroundColor: theme.palette.grey[300] }} />
                    <Box sx={{ textAlign: 'center' }}>
                        <Body2 style={{ fontSize: '17px', fontWeight: 400, color: '#000', marginBottom: '8px' }}>
                            ТЕРРИТОРИЯ
                        </Body2>
                        <H1 style={{ fontSize: '34px', fontWeight: 400, color: '#000' }}>
                            144 264 км²
                        </H1>
                    </Box>
                </Box>

                <Box sx={{ marginTop: '40px' }}>
                    <H3 sx={styles.sectionTitle}>Земельные ресурсы</H3>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
                        <Box sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>Орошаемые</Box>
                                <Box sx={styles.statValue}>181,8 га</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>Сенокосы</Box>
                                <Box sx={styles.statValue}>31,4 тыс. га</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>Пашня</Box>
                                <Box sx={styles.statValue}>786,6 тыс. га</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>Пастбища</Box>
                                <Box sx={styles.statValue}>3 620,3 тыс. га</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Climate Card */}
            <Box sx={styles.climateCard}>
                <H3 sx={styles.sectionTitle}>Климат</H3>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Осадки</Box>
                            <Box sx={styles.statValue}>140 – 220 мм. в год</Box>
                        </Box>
                    </Box>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Лето</Box>
                            <Box sx={styles.statValue}>+21, +25° С</Box>
                        </Box>
                    </Box>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Зима</Box>
                            <Box sx={styles.statValue}>-8, -12° С</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Population Card */}
            <Box sx={styles.populationCard}>
                <H3 sx={styles.sectionTitle}>Население</H3>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '20px' }}>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Область</Box>
                            <Box sx={styles.statValue}>1 222,5 тыс. человек</Box>
                        </Box>
                    </Box>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Город</Box>
                            <Box sx={styles.statValue}>531,6 тыс. человек</Box>
                        </Box>
                    </Box>
                    <Box sx={styles.statItem}>
                        <Box sx={styles.statIcon} />
                        <Box sx={styles.statContent}>
                            <Box sx={styles.statTitle}>Трудоспособное население</Box>
                            <Box sx={styles.statValue}>540 тыс. человек</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Transit Potential Card */}
            <Box sx={styles.transitCard}>
                <Box sx={styles.mapSection}>
                    <Box sx={{ width: '100%', height: '100%', backgroundColor: theme.palette.grey[200], borderRadius: '8px' }} />
                </Box>
                <Box sx={styles.transitInfo}>
                    <H3 sx={styles.sectionTitle}>ТРАНЗИТНЫЙ ПОТЕНЦИАЛ</H3>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <Box sx={styles.borderItem}>
                            <Box sx={styles.borderFlag} />
                            <Box sx={styles.borderInfo}>
                                <Box sx={styles.borderCountry}>до границы Кыргызстана</Box>
                                <Box sx={styles.borderDistance}>20 км</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.borderItem}>
                            <Box sx={styles.borderFlag} />
                            <Box sx={styles.borderInfo}>
                                <Box sx={styles.borderCountry}>до границы Китая</Box>
                                <Box sx={styles.borderDistance}>750 км</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.borderItem}>
                            <Box sx={styles.borderFlag} />
                            <Box sx={styles.borderInfo}>
                                <Box sx={styles.borderCountry}>до границы России</Box>
                                <Box sx={styles.borderDistance}>1300 км</Box>
                            </Box>
                        </Box>
                        <Box sx={styles.borderItem}>
                            <Box sx={styles.borderFlag} />
                            <Box sx={styles.borderInfo}>
                                <Box sx={styles.borderCountry}>до границы Узбекистана</Box>
                                <Box sx={styles.borderDistance}>200 км</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Airport Card */}
            <Box sx={styles.airportCard}>
                <Box sx={styles.airportIcon} />
                <Box>
                    <H5 style={{ marginBottom: '8px' }}>МЕЖДУНАРОДНЫЙ АЭРОПОРТ «АУЛИЕ-АТА»:</H5>
                    <Body1>
                        -проектная мощность – 650 тысяч пассажиров в год;<br/>
                        -пропускная способность воздушно-грузового комплекса<br/>
                        составляет 100 тысяч тонн в год.
                    </Body1>
                </Box>
            </Box>

            {/* EAEU Trade Card */}
            <Box sx={{
                width: '422px',
                height: '127px',
                borderRadius: '11.096px',
                backgroundColor: '#F7F7F7',
                position: 'absolute',
                left: '877px',
                top: '2195px',
                padding: '34px 35px 34px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
            }}>
                <Box sx={{ width: '78px', height: '58px', backgroundColor: theme.palette.grey[300] }} />
                <Box sx={{ textAlign: 'center' }}>
                    <H5 style={{ fontWeight: 700, marginBottom: '4px' }}>Свободная торговля</H5>
                    <Body1>в рамках ЕАЭС</Body1>
                </Box>
            </Box>

            {/* Agriculture Card */}
            <Box sx={styles.agricultureCard}>
                <H3 sx={styles.sectionTitle}>РАСТЕНИЕВОДСТВО</H3>
                <Body1 style={{ fontSize: '24px', fontWeight: 400, color: '#000', marginBottom: '20px' }}>
                    валовый Сбор основных С/Х культур
                </Body1>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    {[
                        { title: 'Лук репчатый', value: '780,6 тыс. тонн' },
                        { title: 'Чеснок', value: '35,5 тыс. тонн' },
                        { title: 'Свекла сахарная', value: '650 тыс. тонн' },
                        { title: 'Масличные культуры', value: '50,6 тыс. тонн' },
                        { title: 'Картофель', value: '285,2 тыс. тонн' },
                        { title: 'Овощи открытого грунта', value: '1, 3 млн тонн' },
                        { title: 'Зернобобовые', value: '470 тыс. тонн' },
                    ].map((item, index) => (
                        <Box key={index} sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>{item.title}</Box>
                                <Box sx={styles.statValue}>{item.value}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Livestock Card */}
            <Box sx={styles.livestockCard}>
                <H3 sx={styles.sectionTitle}>Животноводство</H3>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
                    {[
                        { title: 'КРС', value: '548,2 тыс. голов' },
                        { title: 'Лошади', value: '175 тыс. голов' },
                        { title: 'Овец и коз', value: '4,0 млн голов' },
                        { title: 'Птицы', value: '1,9 млн голов' },
                    ].map((item, index) => (
                        <Box key={index} sx={styles.statItem}>
                            <Box sx={styles.statIcon} />
                            <Box sx={styles.statContent}>
                                <Box sx={styles.statTitle}>{item.title}</Box>
                                <Box sx={styles.statValue}>{item.value}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Livestock Processing Card */}
            <Box sx={{
                width: '467px',
                height: '245px',
                borderRadius: '18.771px',
                backgroundColor: '#F7F7F7',
                position: 'absolute',
                left: '837px',
                top: '2809px',
                padding: '30px',
            }}>
                <H3 sx={{ ...styles.sectionTitle, fontSize: '30px' }}>Основные направления</H3>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    {[
                        'Переработка молока',
                        'Переработка мяса',
                        'Переработка шкур и шерсти',
                    ].map((item, index) => (
                        <Box key={index} sx={{ textAlign: 'center', width: '140px' }}>
                            <Box sx={{ ...styles.statIcon, margin: '0 auto 12px auto' }} />
                            <Body1 sx={{ fontSize: '19px', fontWeight: 400, color: '#000' }}>{item}</Body1>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Free Deposits Card */}
            <Box sx={styles.freeDepositsCard}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <H4 sx={{ fontSize: '22px', fontWeight: 700, color: '#FFF', textTransform: 'uppercase', marginBottom: '8px' }}>
                        Свободные месторождения
                    </H4>
                    <Body1 sx={{ fontSize: '20px', fontWeight: 400, color: '#FFF', textTransform: 'uppercase', marginBottom: '20px' }}>
                        В Жамбылской области
                    </Body1>
                    <H1 sx={{ fontSize: '182px', fontWeight: 700, color: '#FFF' }}>31</H1>
                </Box>
            </Box>

            {/* Mineral Resources Cards */}
            <Box sx={{ position: 'absolute', left: '146px', top: '3447px', display: 'flex', gap: '24px' }}>
                {/* First Mineral Card */}
                <Box sx={styles.mineralCard}>
                    {[
                        { name: 'ФОСФОРИТЫ', amount: 'от 3,8 млрд. тонн' },
                        { name: 'МИНЕРАЛЬНАЯ СОЛЬ', amount: 'от 10 млн. тонн' },
                        { name: 'КАМЕННАЯ СОЛЬ', amount: 'от 2,6 млрд. тонн' },
                        { name: 'ПЛАВИКОВЫЙ ШПАТ (ФЛЮОРИТ)', amount: '24,9 млн. тонн' },
                    ].map((item, index) => (
                        <Box key={index} sx={styles.mineralItem}>
                            <Box sx={styles.mineralIcon} />
                            <Box sx={styles.mineralInfo}>
                                <Box sx={styles.mineralName}>{item.name}</Box>
                                <Box sx={styles.mineralAmount}>{item.amount}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Second Mineral Card */}
                <Box sx={styles.mineralCard}>
                    {[
                        { name: 'ЗОЛОТО', amount: 'от 300-350 тонн' },
                        { name: 'МЕДЬ', amount: 'от 1,75 млн. тонн' },
                        { name: 'СВИНЕЦ И ЦИНК', amount: 'от 3,8 млн. тонн' },
                        { name: 'ОЛОВО', amount: 'от 101 тыс. тонн' },
                    ].map((item, index) => (
                        <Box key={index} sx={styles.mineralItem}>
                            <Box sx={styles.mineralIcon} />
                            <Box sx={styles.mineralInfo}>
                                <Box sx={styles.mineralName}>{item.name}</Box>
                                <Box sx={styles.mineralAmount}>{item.amount}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Third Mineral Card */}
                <Box sx={styles.mineralCard}>
                    {[
                        { name: 'БАРИТ', amount: 'от 12,0 млн. тонн' },
                        { name: 'ГИПС И АНГИДРИТ', amount: 'от 50,3 млн. тонн' },
                        { name: 'ГАЗ', amount: 'около 89 млрд. м3' },
                        { name: 'УГОЛЬ', amount: 'от 4,3 млрд. тонн' },
                    ].map((item, index) => (
                        <Box key={index} sx={styles.mineralItem}>
                            <Box sx={styles.mineralIcon} />
                            <Box sx={styles.mineralInfo}>
                                <Box sx={styles.mineralName}>{item.name}</Box>
                                <Box sx={styles.mineralAmount}>{item.amount}</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Footer Ornament */}
            <Box sx={{
                position: 'absolute',
                left: '1px',
                top: '4002px',
                width: '1438px',
                height: '29px',
                display: 'flex',
                alignItems: 'center',
            }}>
                {[...Array(7)].map((_, index) => (
                    <Box key={index} sx={{
                        width: '205.408px',
                        height: '28.779px',
                        backgroundColor: theme.palette.grey[300]
                    }} />
                ))}
            </Box>

            {/* Footer */}
            <Box sx={styles.footer}>
                <Box sx={styles.footerContainer}>
                    <Box sx={{ width: '294px' }}>
                        <Box sx={styles.footerLogo}>
                            <Box sx={styles.footerLogoImg} />
                            <Box>
                                <H5 style={{ fontSize: '21px', fontWeight: 700, color: '#000', textTransform: 'uppercase' }}>
                                    ZHAMBYL<br/>INVEST
                                </H5>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: '30px' }}>
                            <Box sx={styles.footerContactItem}>
                                <Box sx={{ width: '24px', height: '24px' }}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M21.5 5.46533H3.5C3.30109 5.46533 3.11032 5.54435 2.96967 5.685C2.82902 5.82565 2.75 6.01642 2.75 6.21533V18.9653C2.75 19.3632 2.90804 19.7447 3.18934 20.026C3.47064 20.3073 3.85218 20.4653 4.25 20.4653H20.75C21.1478 20.4653 21.5294 20.3073 21.8107 20.026C22.092 19.7447 22.25 19.3632 22.25 18.9653V6.21533C22.25 6.01642 22.171 5.82565 22.0303 5.685C21.8897 5.54435 21.6989 5.46533 21.5 5.46533ZM9.75312 12.9653L4.25 18.0091V7.92158L9.75312 12.9653ZM10.8594 13.9872L11.9937 15.0185C12.132 15.1449 12.3126 15.2151 12.5 15.2151C12.6874 15.2151 12.868 15.1449 13.0062 15.0185L14.1406 13.9872L19.5687 18.9653H5.43125L10.8594 13.9872ZM15.2469 12.9653L20.75 7.92158V18.0091L15.2469 12.9653Z" fill="black"/>
                                    </svg>
                                </Box>
                                <Body1 style={{ color: '#000' }}>zhambyl.invest@gmail.com</Body1>
                            </Box>
                            <Box sx={styles.footerContactItem}>
                                <Box sx={{ width: '24px', height: '24px' }}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M12.5 15.9653C14.1569 15.9653 15.5 14.6222 15.5 12.9653C15.5 11.3085 14.1569 9.96533 12.5 9.96533C10.8431 9.96533 9.5 11.3085 9.5 12.9653C9.5 14.6222 10.8431 15.9653 12.5 15.9653Z" fill="black"/>
                                        <path d="M16.625 3.59033H8.375C6.98261 3.59033 5.64726 4.14346 4.66269 5.12802C3.67812 6.11259 3.125 7.44795 3.125 8.84033V17.0903C3.125 18.4827 3.67812 19.8181 4.66269 20.8026C5.64726 21.7872 6.98261 22.3403 8.375 22.3403H16.625C18.0174 22.3403 19.3527 21.7872 20.3373 20.8026C21.3219 19.8181 21.875 18.4827 21.875 17.0903V8.84033C21.875 7.44795 21.3219 6.11259 20.3373 5.12802C19.3527 4.14346 18.0174 3.59033 16.625 3.59033ZM12.5 17.4653C11.61 17.4653 10.74 17.2014 9.99993 16.7069C9.25991 16.2125 8.68314 15.5097 8.34254 14.6874C8.00195 13.8651 7.91283 12.9603 8.08647 12.0874C8.2601 11.2145 8.68868 10.4127 9.31802 9.78335C9.94736 9.15402 10.7492 8.72543 11.6221 8.5518C12.495 8.37817 13.3998 8.46728 14.2221 8.80787C15.0443 9.14847 15.7471 9.72524 16.2416 10.4653C16.7361 11.2053 17 12.0753 17 12.9653C17 14.1588 16.5259 15.3034 15.682 16.1473C14.8381 16.9912 13.6935 17.4653 12.5 17.4653ZM17.375 9.21533C17.1525 9.21533 16.935 9.14935 16.75 9.02574C16.565 8.90212 16.4208 8.72642 16.3356 8.52085C16.2505 8.31528 16.2282 8.08908 16.2716 7.87086C16.315 7.65263 16.4222 7.45217 16.5795 7.29484C16.7368 7.1375 16.9373 7.03036 17.1555 6.98695C17.3738 6.94354 17.6 6.96582 17.8055 7.05097C18.0111 7.13612 18.1868 7.28031 18.3104 7.46532C18.434 7.65032 18.5 7.86783 18.5 8.09033C18.5 8.3887 18.3815 8.67485 18.1705 8.88583C17.9595 9.09681 17.6734 9.21533 17.375 9.21533Z" fill="black"/>
                                    </svg>
                                </Box>
                                <Body1 style={{ color: '#000' }}>zhambyl_invest</Body1>
                            </Box>
                            <Box sx={styles.footerContactItem}>
                                <Box sx={{ width: '24px', height: '24px' }}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M12.5 2.46533C10.3127 2.46781 8.21575 3.3378 6.66911 4.88444C5.12247 6.43108 4.25248 8.52806 4.25 10.7153C4.25 17.7747 11.75 23.1091 12.0688 23.3341C12.1965 23.4191 12.3465 23.4645 12.5 23.4645C12.6535 23.4645 12.8035 23.4191 12.9313 23.3341C13.25 23.1091 20.75 17.7747 20.75 10.7153C20.7475 8.52806 19.8775 6.43108 18.3309 4.88444C16.7843 3.3378 14.6873 2.46781 12.5 2.46533ZM12.5 7.71533C13.0933 7.71533 13.6734 7.89128 14.1667 8.22092C14.6601 8.55057 15.0446 9.0191 15.2716 9.56728C15.4987 10.1155 15.5581 10.7187 15.4424 11.3006C15.3266 11.8825 15.0409 12.4171 14.6213 12.8367C14.2018 13.2562 13.6672 13.5419 13.0853 13.6577C12.5033 13.7734 11.9001 13.714 11.3519 13.487C10.8038 13.2599 10.3352 12.8754 10.0056 12.382C9.67595 11.8887 9.5 11.3087 9.5 10.7153C9.5 9.91968 9.81607 9.15662 10.3787 8.59401C10.9413 8.0314 11.7044 7.71533 12.5 7.71533Z" fill="black"/>
                                    </svg>
                                </Box>
                                <Body1 style={{ color: '#000' }}>Жамбылская область, г. Тараз, проспект Абая 127</Body1>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10.5px' }}>
                        <BoldText style={{ textAlign: 'right', fontSize: '16px', fontWeight: 700, color: '#000', textTransform: 'lowercase' }}>
                            Zhambyl Invest<br/>в социальных сетях:
                        </BoldText>
                        <Box sx={styles.socialButtons}>
                            <Box sx={styles.socialButton}>
                                <Box sx={{ width: '28px', height: '28px' }}>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <path d="M14.576 18C16.509 18 18.076 16.433 18.076 14.5C18.076 12.567 16.509 11 14.576 11C12.6431 11 11.076 12.567 11.076 14.5C11.076 16.433 12.6431 18 14.576 18Z" fill="black"/>
                                        <path d="M19.3885 3.5625H9.76355C8.1391 3.5625 6.58118 4.20781 5.43252 5.35647C4.28386 6.50513 3.63855 8.06305 3.63855 9.6875V19.3125C3.63855 20.937 4.28386 22.4949 5.43252 23.6435C6.58118 24.7922 8.1391 25.4375 9.76355 25.4375H19.3885C21.013 25.4375 22.5709 24.7922 23.7196 23.6435C24.8682 22.4949 25.5135 20.937 25.5135 19.3125V9.6875C25.5135 8.06305 24.8682 6.50513 23.7196 5.35647C22.5709 4.20781 21.013 3.5625 19.3885 3.5625ZM14.576 19.75C13.5377 19.75 12.5227 19.4421 11.6593 18.8652C10.7959 18.2883 10.123 17.4684 9.72568 16.5091C9.32832 15.5498 9.22436 14.4942 9.42693 13.4758C9.6295 12.4574 10.1295 11.5219 10.8637 10.7877C11.598 10.0535 12.5334 9.55345 13.5518 9.35088C14.5702 9.14831 15.6258 9.25227 16.5851 9.64963C17.5444 10.047 18.3644 10.7199 18.9413 11.5833C19.5181 12.4466 19.826 13.4616 19.826 14.5C19.826 15.8924 19.2729 17.2277 18.2884 18.2123C17.3038 19.1969 15.9684 19.75 14.576 19.75ZM20.2635 10.125C20.004 10.125 19.7502 10.048 19.5344 9.9038C19.3185 9.75958 19.1503 9.5546 19.051 9.31477C18.9516 9.07494 18.9256 8.81104 18.9763 8.55644C19.0269 8.30184 19.1519 8.06798 19.3355 7.88442C19.519 7.70087 19.7529 7.57586 20.0075 7.52522C20.2621 7.47458 20.526 7.50057 20.7658 7.59991C21.0056 7.69925 21.2106 7.86748 21.3549 8.08331C21.4991 8.29915 21.576 8.55291 21.576 8.8125C21.576 9.1606 21.4378 9.49444 21.1916 9.74058C20.9455 9.98672 20.6116 10.125 20.2635 10.125Z" fill="black"/>
                                    </svg>
                                </Box>
                            </Box>
                            <Box sx={styles.socialButton}>
                                <Box sx={{ width: '28px', height: '28px' }}>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <path d="M25.913 14.4998C25.9073 17.2789 24.8874 19.9604 23.0447 22.0407C21.202 24.1211 18.6632 25.4572 15.9051 25.7983C15.8436 25.8043 15.7815 25.7976 15.7226 25.7784C15.6638 25.7593 15.6096 25.7282 15.5634 25.6871C15.5172 25.6461 15.4799 25.5959 15.454 25.5397C15.4282 25.4835 15.4142 25.4226 15.413 25.3608V17.1248H18.038C18.1576 17.1251 18.276 17.1008 18.3859 17.0534C18.4958 17.0061 18.5948 16.9367 18.6768 16.8495C18.7588 16.7624 18.8221 16.6594 18.8627 16.5468C18.9033 16.4343 18.9204 16.3146 18.913 16.1951C18.8936 15.9689 18.7891 15.7584 18.6206 15.6062C18.4522 15.4539 18.2322 15.3712 18.0051 15.3748H15.413V12.7498C15.413 12.2857 15.5973 11.8406 15.9255 11.5124C16.2537 11.1842 16.6988 10.9998 17.163 10.9998H18.913C19.0326 11.0001 19.151 10.9758 19.2609 10.9284C19.3708 10.8811 19.4698 10.8117 19.5518 10.7245C19.6338 10.6374 19.6971 10.5344 19.7377 10.4218C19.7783 10.3093 19.7954 10.1896 19.788 10.0701C19.7686 9.84389 19.6641 9.6334 19.4956 9.48115C19.3272 9.3289 19.1072 9.24624 18.8801 9.24983H17.163C16.2347 9.24983 15.3445 9.61858 14.6881 10.275C14.0317 10.9313 13.663 11.8216 13.663 12.7498V15.3748H11.038C10.9183 15.3746 10.7999 15.3989 10.69 15.4463C10.5801 15.4936 10.4811 15.563 10.3991 15.6501C10.3171 15.7373 10.2538 15.8403 10.2132 15.9529C10.1726 16.0654 10.1555 16.1851 10.163 16.3045C10.1823 16.5308 10.2868 16.7413 10.4553 16.8935C10.6237 17.0458 10.8437 17.1284 11.0708 17.1248H13.663V25.3608C13.6633 25.4221 13.6507 25.4828 13.626 25.539C13.6013 25.5951 13.5651 25.6454 13.5198 25.6867C13.4744 25.7279 13.4208 25.7592 13.3626 25.7784C13.3043 25.7976 13.2427 25.8044 13.1817 25.7983C7.4067 25.0983 2.9442 20.078 3.17389 14.0733C3.30282 11.1079 4.58576 8.31034 6.74885 6.27779C8.91194 4.24525 11.7838 3.13872 14.7515 3.19439C17.7192 3.25006 20.5475 4.46352 22.6329 6.57576C24.7182 8.688 25.8953 11.5317 25.913 14.4998Z" fill="black"/>
                                    </svg>
                                </Box>
                            </Box>
                            <Box sx={styles.socialButton}>
                                <Box sx={{ width: '28px', height: '28px' }}>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <g clipPath="url(#clip0_206_545)">
                                            <path d="M26.4273 0.500488H2.56719C1.42422 0.500488 0.5 1.40283 0.5 2.51846V26.477C0.5 27.5927 1.42422 28.5005 2.56719 28.5005H26.4273C27.5703 28.5005 28.5 27.5927 28.5 26.4825V2.51846C28.5 1.40283 27.5703 0.500488 26.4273 0.500488ZM8.80703 24.3606H4.65078V10.995H8.80703V24.3606ZM6.72891 9.17393C5.39453 9.17393 4.31719 8.09658 4.31719 6.76768C4.31719 5.43877 5.39453 4.36143 6.72891 4.36143C8.05781 4.36143 9.13516 5.43877 9.13516 6.76768C9.13516 8.09111 8.05781 9.17393 6.72891 9.17393ZM24.3602 24.3606H20.2094V17.8638C20.2094 16.3161 20.182 14.32 18.0492 14.32C15.8891 14.32 15.5609 16.0099 15.5609 17.7544V24.3606H11.4156V10.995H15.3969V12.8216H15.4516C16.0039 11.7716 17.3602 10.6614 19.3781 10.6614C23.5836 10.6614 24.3602 13.4286 24.3602 17.0271V24.3606V24.3606Z" fill="black"/>
                                        </g>
                                    </svg>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '1197px', height: '0.75px', backgroundColor: '#717171' }} />
            </Box>
        </Box>
    )
}

export default ZhambylRegionInfo


// Заголовки
export const H1 = styled(Typography)({
    fontSize: "2.5rem",
    fontWeight: 700,
});

export const H2 = styled(Typography)({
    fontSize: "2rem",
    fontWeight: 600,
});

export const H3 = styled(Typography)({
    fontSize: "1.75rem",
    fontWeight: 600,
});

export const H4 = styled(Typography)({
    fontSize: "1.5rem",
    fontWeight: 500,
});

export const H5 = styled(Typography)({
    fontSize: "1.25rem",
    fontWeight: 500,
});

export const H6 = styled(Typography)({
    fontSize: "1rem",
    fontWeight: 500,
});

// Текст
export const Body1 = styled(Typography)({
    fontSize: "1rem",
    lineHeight: 1.5,
});

export const Body2 = styled(Typography)({
    fontSize: "0.875rem",
    lineHeight: 1.4,
});

// Жирный
export const BoldText = styled(Typography)({
    fontWeight: 700,
});
