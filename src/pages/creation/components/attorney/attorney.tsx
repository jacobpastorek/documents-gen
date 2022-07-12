import React, { useEffect, useState } from 'react';
import { Page, Text, Document, PDFViewer, View, usePDF } from '@react-pdf/renderer';
import { AttorneyEditSC, AttorneyViewSC, AttorneyWrapSC } from './attorney.styled';
import {
  ISplnoCar,
  ISplnoPerson,
  styles,
  initialFirstPerson,
  initialSecondPerson,
  initialCar,
  personPlaceholder,
  carPlaceholder,
} from './attorney.schema';
import { BodyText, H2 } from '@components/ui/typography';

// Create Document Component
const Attorney = () => {
  const [firstPerson, setFirstPerson] = useState<ISplnoPerson>(initialFirstPerson);
  const [secondPerson, setSecondPerson] = useState<ISplnoPerson>(initialSecondPerson);
  const [car, setCar] = useState<ISplnoCar>(initialCar);

  const handleFirstPersonChange = (field: string, value: string) => {
    setFirstPerson({ ...firstPerson, [field]: value });
  };

  const handleSecondPersonChange = (field: string, value: string) => {
    setSecondPerson({ ...secondPerson, [field]: value });
  };

  const handleCarChange = (field: string, value: string) => {
    setCar({ ...car, [field]: value });
  };

  const Splnomocnenie = (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.title}>Splnomocnenie</Text>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Podpísaný (á) .......... <Text style={styles.dynamic}>{firstPerson.name}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            Rodné číslo .......... <Text style={styles.dynamic}>{firstPerson.birthNum}</Text>{' '}
            ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Dátum narodenia .......... <Text style={styles.dynamic}>{firstPerson.birthDate}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            bytom .......... <Text style={styles.dynamic}>{firstPerson.address}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Číslo OP .......... <Text style={styles.dynamic}>{firstPerson.identificationCard}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}></Text>
        </View>

        <Text style={styles.splittext}>týmto splnomocňujem:</Text>

        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Meno a priezvisko .......... <Text style={styles.dynamic}>{secondPerson.name}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            Rodné číslo .......... <Text style={styles.dynamic}>{secondPerson.birthNum}</Text>{' '}
            ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Dátum narodenia .......... <Text style={styles.dynamic}>{secondPerson.birthDate}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            bytom .......... <Text style={styles.dynamic}>{secondPerson.address}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Číslo OP ..........{' '}
            <Text style={styles.dynamic}>{secondPerson.identificationCard}</Text> ..........
          </Text>
          <Text style={styles.flextext}></Text>
        </View>

        <Text style={styles.text}>
          <Text style={styles.textbold}>
            K zriadeniu všetkých potrebných právnych úkonov a zmeny v evidencii na Dopravnom {'\n'}
            inšpektoráte Polície SR
          </Text>{' '}
          (odhláseniu, prihláseniu a iné zmeny vykoonané na uvedenom{'\n'} motorovom vozidle) na
          mojom motorovom vozidle:
        </Text>

        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            druh .......... <Text style={styles.dynamic}>{car.category}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            typ .......... <Text style={styles.dynamic}>{car.type}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            číslo motora .......... <Text style={styles.dynamic}>{car.engineNum}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            číslo karosérie .......... <Text style={styles.dynamic}>{car.vin}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            ŠPZ .......... <Text style={styles.dynamic}>{car.plateNum}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            farba.......... <Text style={styles.dynamic}>{car.color}</Text> ..........
          </Text>
        </View>

        <Text style={styles.placetext}>
          V ................................ dňa ................................
        </Text>

        <Text style={styles.signtext}>
          ...................................................................{'\n'}
          vlastnoručný podpis splnomocniteľa
        </Text>
      </Page>
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: Splnomocnenie });

  useEffect(() => {
    updateInstance();
  }, [firstPerson, updateInstance]);

  return (
    <AttorneyWrapSC>
      <AttorneyViewSC>
        <PDFViewer
          height="100%"
          width="100%"
          showToolbar={false}
          style={{ border: 'none', backgroundColor: '#222222' }}
        >
          {Splnomocnenie}
        </PDFViewer>
      </AttorneyViewSC>
      <AttorneyEditSC>
        <>
          <div className="input-wrap first">
            <H2>Údaje osoba 1</H2>
            {Object.keys(firstPerson).map((item: string) => {
              return (
                <input
                  key={item}
                  value={firstPerson[item as keyof ISplnoPerson]}
                  placeholder={personPlaceholder[item as keyof ISplnoPerson]}
                  onChange={(e) => handleFirstPersonChange(item, e.target.value)}
                />
              );
            })}
          </div>

          <div className="input-wrap second">
            <H2>Údaje osoba 2</H2>
            {Object.keys(secondPerson).map((item: string) => {
              return (
                <input
                  key={item}
                  value={secondPerson[item as keyof ISplnoPerson]}
                  placeholder={personPlaceholder[item as keyof ISplnoPerson]}
                  onChange={(e) => handleSecondPersonChange(item, e.target.value)}
                />
              );
            })}
          </div>

          <div className="input-wrap car">
            <H2>Údaje o aute</H2>
            {Object.keys(car).map((item: string) => {
              return (
                <input
                  key={item}
                  value={car[item as keyof ISplnoCar]}
                  placeholder={carPlaceholder[item as keyof ISplnoCar]}
                  onChange={(e) => handleCarChange(item, e.target.value)}
                />
              );
            })}
          </div>

          <a
            href={instance.url ? instance.url : ''}
            download={`splnomocnennie-${firstPerson.name}.pdf`}
            className="doc-link"
          >
            <BodyText>Stiahnuť</BodyText>
          </a>
        </>
      </AttorneyEditSC>
    </AttorneyWrapSC>
  );
};

export default Attorney;
