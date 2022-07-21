import React, { useEffect, useState } from 'react';
import { Page, Text, Document, PDFViewer, View, usePDF } from '@react-pdf/renderer';
import { CarShippingEditSC, CarShippingViewSC, CarShippingWrapSC } from './car-shipping.styled';
import {
  firstPagePlaceholder,
  initialFirstPage,
  initialSecondPage,
  IShippingFirstPage,
  IShippingSecondPage,
  secondPagePlaceholder,
  styles,
} from './car-shipping.schema';
import { BodyText, H2 } from '@components/ui/typography';
import Input from '@components/ui/input';

// Create Document Component
const CarShipping = () => {
  const [firstPage, setFirstPage] = useState<IShippingFirstPage>(initialFirstPage);
  const [temporaryFirstPage, setTemporaryFirstPage] = useState<IShippingFirstPage>(firstPage);

  const [secondPage, setSecondPage] = useState<IShippingSecondPage>(initialSecondPage);
  const [temporarySecondPage, setTemporarySecondPage] = useState<IShippingSecondPage>(secondPage);

  const handleFirstPageChange = (field: string, value: string) => {
    setTemporaryFirstPage({ ...temporaryFirstPage, [field]: value });
  };

  const handleSecondPageChange = (field: string, value: string) => {
    setTemporarySecondPage({ ...temporarySecondPage, [field]: value });
  };

  const onUpdateClick = () => {
    setFirstPage(temporaryFirstPage);
    setSecondPage(temporarySecondPage);
  };

  const Vyzdvihnutievozidla = (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.textgeneratedunderline}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {firstPage.companyData}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text style={styles.title}>
          Vollmacht{'\n'}zur{'\n'}Fahrzeugabholung
        </Text>
        <Text style={styles.dynamic}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{firstPage.truckDriverData}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Text>
        <Text style={styles.textcenteredsmall}>(Bevollmächtigter)</Text>
        <Text style={styles.textcentered}>
          Fahrzeug (FIN / VIN):{' '}
          <Text style={styles.dynamicunderline}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {firstPage.carData}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        </Text>
        <Text style={styles.textcentered}>
          Ich bevollmächtigte oben benannte Person, in meinen Namen und für mich das oben
          bezeichnete{'\n'}
          Fahrzeug(Fahrzeugpapiere/Schlüsseln) abzuholen und nach Slowakische Republik überführen.
          {'\n'}
          {'\n'}
          Der dazugehörige Kaufvertag wurde bereits geschlossen.{'\n'}
          {'\n'}
          Die Vollmacht is gültig bis zur Abholung des Fahrzeugs und kann zudem von mir bei Bedarf
          widerrufen werden.
        </Text>
        <View style={styles.flexviewsignature}>
          <Text style={styles.flextexsignatureone}>
            ort{'\n'}
            {firstPage.city}
          </Text>
          <Text style={styles.flextexsignaturetwo}>
            Unterschrift vom{'\n'}Vollmachtgeber / Firmenstempel
          </Text>
        </View>
      </Page>
      <Page style={styles.body} size="A4">
        <Text style={styles.textleft}>
          {secondPage.companyName}
          {'\n'}
          {secondPage.companyAddress}
          {'\n'}
          {secondPage.companyAddressTwo}
          {'\n'}
          {secondPage.companyAddressThree}
        </Text>
        <Text style={styles.titledynamic}>
          Fahrzeug(VIN/FIN):{' '}
          <Text style={styles.dynamicunderlinetitle}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {secondPage.carVin}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        </Text>
        <Text style={styles.textleft}>
          Sehr geehrte Damen und Herren,{'\n'}
          {'\n'}
          hiermit senden wir alle gesprochene Unterlagen (CMR/Gelangenbestätigung) und wir möchten
          Sie{'\n'}
          bitten, die Fahrzeugpapiere auf unten genannte Adresse zu senden.
        </Text>

        <Text style={styles.textleftspecial}>
          Manager:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Text style={styles.textleftspecialunderline}>{secondPage.managerName}</Text>
          {'\n'}
          {'\n'}
          Adresse:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <Text style={styles.textleftspecialunderline}>{secondPage.addressLineOne}</Text>
          {'\n'}
          {'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <Text style={styles.textleftspecialunderline}>{secondPage.addressLineTwo}</Text>
          {'\n'}
          {'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
          <Text style={styles.textleftspecialunderline}>{secondPage.addressLineThree}</Text>
        </Text>
        <Text style={styles.textleftbottom}>
          Mit freundlichen Grüßen
          {'\n'} {'\n'}
          {secondPage.companyName}
        </Text>
      </Page>
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: Vyzdvihnutievozidla });

  useEffect(() => {
    updateInstance();
  }, [firstPage, secondPage, updateInstance]);

  return (
    <CarShippingWrapSC>
      <CarShippingViewSC>
        <PDFViewer
          height="100%"
          width="100%"
          showToolbar={false}
          style={{ border: 'none', backgroundColor: '#222222' }}
        >
          {Vyzdvihnutievozidla}
        </PDFViewer>
      </CarShippingViewSC>
      <CarShippingEditSC>
        <>
          <div className="input-wrap">
            <H2>Prvá strana</H2>
            {Object.keys(firstPage).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporaryFirstPage[item as keyof IShippingFirstPage]}
                  placeholder={firstPagePlaceholder[item as keyof IShippingFirstPage]}
                  onChange={(e) => handleFirstPageChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>

          <div className="input-wrap">
            <H2>Druhá strana</H2>
            {Object.keys(secondPage).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporarySecondPage[item as keyof IShippingSecondPage]}
                  placeholder={secondPagePlaceholder[item as keyof IShippingSecondPage]}
                  onChange={(e) => handleSecondPageChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>

          <div className="action-wrap">
            <button onClick={() => onUpdateClick()}>
              <BodyText>Aktualizovať</BodyText>
            </button>
            <a
              href={instance.url ? instance.url : ''}
              download={`Vyzdvihnutie-vozidla-${firstPage.carData}.pdf`}
              className="doc-link"
            >
              <BodyText>Stiahnuť</BodyText>
            </a>
          </div>
        </>
      </CarShippingEditSC>
    </CarShippingWrapSC>
  );
};

export default CarShipping;
