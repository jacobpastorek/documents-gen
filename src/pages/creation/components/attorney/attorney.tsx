import React, { useEffect, useState } from 'react';
import { Page, Text, Document, PDFViewer, View, usePDF } from '@react-pdf/renderer';
import { AttorneyEditSC, AttorneyViewSC, AttorneyWrapSC } from './attorney.styled';
import { IAttorneyProps, initalState, styles } from './attorney.schema';

// Create Document Component
const Attorney = () => {
  const [doc, setDoc] = useState<IAttorneyProps>(initalState);

  const handleChange = (field: string, value: string) => {
    setDoc({ ...doc, [field]: value });
  };

  const Splnomocnenie = (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.title}>Splnomocnenie</Text>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Podpísaný (á) .......... <Text style={styles.dynamic}>{doc.firstPersonName}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            Rodné číslo .......... <Text style={styles.dynamic}>{doc.firstPersonBirthNum}</Text>{' '}
            ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Dátum narodenia ..........{' '}
            <Text style={styles.dynamic}>{doc.firstPersonBirthDate}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            bytom .......... <Text style={styles.dynamic}>{doc.firstPersonAddress}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Číslo OP .......... <Text style={styles.dynamic}>{doc.firstPersonOP}</Text> ..........
          </Text>
          <Text style={styles.flextext}></Text>
        </View>

        <Text style={styles.splittext}>týmto splnomocňujem:</Text>

        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Meno a priezvisko .......... <Text style={styles.dynamic}>{doc.secondPersonName}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            Rodné číslo .......... <Text style={styles.dynamic}>{doc.secondPersonBirthNum}</Text>{' '}
            ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Dátum narodenia ..........{' '}
            <Text style={styles.dynamic}>{doc.secondPersonBirthDate}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            bytom .......... <Text style={styles.dynamic}>{doc.secondPersonAddress}</Text>{' '}
            ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            Číslo OP .......... <Text style={styles.dynamic}>{doc.secondPersonOP}</Text> ..........
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
            druh .......... <Text style={styles.dynamic}>{doc.carCategory}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            typ .......... <Text style={styles.dynamic}>{doc.carType}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            číslo motora .......... <Text style={styles.dynamic}>{doc.carEngineNum}</Text>{' '}
            ..........
          </Text>
          <Text style={styles.flextext}>
            číslo karosérie .......... <Text style={styles.dynamic}>{doc.carVin}</Text> ..........
          </Text>
        </View>
        <View style={styles.flexview}>
          <Text style={styles.flextext}>
            ŠPZ .......... <Text style={styles.dynamic}>{doc.carPlateNum}</Text> ..........
          </Text>
          <Text style={styles.flextext}>
            farba.......... <Text style={styles.dynamic}>{doc.carColor}</Text> ..........
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
  }, [doc, updateInstance]);

  return (
    <AttorneyWrapSC>
      <AttorneyViewSC>
        <PDFViewer height="100%" width="100%" showToolbar={false} style={{ border: 'none' }}>
          {Splnomocnenie}
        </PDFViewer>
      </AttorneyViewSC>
      <AttorneyEditSC>
        <>
          {Object.keys(doc).map((item: string) => {
            return (
              <input
                key={item}
                value={doc[item as keyof IAttorneyProps]}
                placeholder={item}
                onChange={(e) => handleChange(item, e.target.value)}
              />
            );
          })}

          <a
            href={instance.url ? instance.url : ''}
            download={`splnomocnennie-${doc.firstPersonName}.pdf`}
          >
            Stiahnuť
          </a>
        </>
      </AttorneyEditSC>
    </AttorneyWrapSC>
  );
};

export default Attorney;
