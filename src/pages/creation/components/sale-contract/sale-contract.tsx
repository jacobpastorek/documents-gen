import React, { useEffect, useState } from 'react';
import { Page, Text, Document, PDFViewer, View, usePDF } from '@react-pdf/renderer';
import { SaleContractEditSC, SaleContractViewSC, SaleContractWrapSC } from './sale-contract.styled';
import {
  styles,
  initialFirstPerson,
  personPlaceholder,
  IKupnaPerson,
  IKupnaCompany,
  initialFirstCompany,
  companyPlaceholder,
  initialSecondPerson,
  initialSecondCompany,
  IKupnaCar,
  initialCar,
  carPlaceholder,
  IKupnaPrice,
  initialPrice,
  pricePlaceholder,
} from './sale-contract.schema';
import { BodyText, H2 } from '@components/ui/typography';
import Input from '@components/ui/input';

// Create Document Component
const SaleContract = () => {
  const [firstPerson, setFirstPerson] = useState<IKupnaPerson>(initialFirstPerson);
  const [firstCompany, setFirstCompany] = useState<IKupnaCompany>(initialFirstCompany);

  const [temporaryFirstPerson, setTemporaryFirstPerson] = useState<IKupnaPerson>(firstPerson);
  const [temporaryFirstCompany, setTemporaryFirstCompany] = useState<IKupnaCompany>(firstCompany);

  const [secondPerson, setSecondPerson] = useState<IKupnaPerson>(initialSecondPerson);
  const [secondCompany, setSecondCompany] = useState<IKupnaCompany>(initialSecondCompany);

  const [temporarySecondPerson, setTemporarySecondPerson] = useState<IKupnaPerson>(secondPerson);
  const [temporarySecondCompany, setTemporarySecondCompany] =
    useState<IKupnaCompany>(secondCompany);

  const [car, setCar] = useState<IKupnaCar>(initialCar);
  const [price, setPrice] = useState<IKupnaPrice>(initialPrice);

  const [temporaryPrice, setTemporaryPrice] = useState<IKupnaPrice>(price);
  const [temporaryCar, setTemporaryCar] = useState<IKupnaCar>(car);

  const [isSellerCompany, setIsSellerCompany] = useState(false);
  const [isBuyerCompany, setIsBuyerCompany] = useState(false);

  const handleFirstPersonChange = (field: string, value: string) => {
    setTemporaryFirstPerson({ ...temporaryFirstPerson, [field]: value });
  };
  const handleFirstCompanyChange = (field: string, value: string) => {
    setTemporaryFirstCompany({ ...temporaryFirstCompany, [field]: value });
  };

  const handleSecondPersonChange = (field: string, value: string) => {
    setTemporarySecondPerson({ ...temporarySecondPerson, [field]: value });
  };
  const handleSecondCompanyChange = (field: string, value: string) => {
    setTemporarySecondCompany({ ...temporarySecondCompany, [field]: value });
  };

  const handleCarChange = (field: string, value: string) => {
    setTemporaryCar({ ...temporaryCar, [field]: value });
  };

  const handlePriceChange = (field: string, value: string) => {
    setTemporaryPrice({ ...temporaryPrice, [field]: value });
  };

  const onUpdateClick = () => {
    setFirstPerson(temporaryFirstPerson);
    setFirstCompany(temporaryFirstCompany);
    setSecondPerson(temporarySecondPerson);
    setSecondCompany(temporarySecondCompany);
    setPrice(temporaryPrice);
    setCar(temporaryCar);
  };

  const Kupnazmluva = (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.title}>K??PNA ZMLUVA</Text>
        <Text style={styles.textcentered}>
          V s??lade s ustanoven??m ??409 a n??sledne z??kona ??. 513/1991 Zb. Obchodn?? z??konn??k v{'\n'}
          platnom znen?? uzavret?? ni????ie uveden??ho d??a, meisaca a roku medzi:
        </Text>

        <View style={styles.flexview}>
          <Text style={styles.flextextone}>
            Meno a priezvisko: {firstPerson.name}
            {'\n'} Trvale bytom: {firstPerson.address}
            {'\n'} ????slo OP: {firstPerson.identificationCard}
            {'\n'} (??alej len Pred??vaj??ci)
          </Text>
          {isSellerCompany && (
            <Text style={styles.flextexttwo}>
              N??zov firmy: {firstCompany.name}
              {'\n'} Adresa: {firstCompany.address}
              {'\n'} I??O: {firstCompany.ico}
              {'\n'} I?? DPH: {firstCompany.icDph}
            </Text>
          )}
        </View>

        <View style={styles.flexview}>
          <Text style={styles.flextextone}>
            Meno a priezvisko: {secondPerson.name}
            {'\n'} Trvale bytom: {secondPerson.address}
            {'\n'} ????slo OP: {secondPerson.identificationCard}
            {'\n'} (??alej len Kupuj??ci)
          </Text>
          {isBuyerCompany && (
            <Text style={styles.flextexttwo}>
              N??zov firmy: {secondCompany.name}
              {'\n'} Adresa: {secondCompany.address}
              {'\n'} I??O: {secondCompany.ico}
              {'\n'} I?? DPH: {secondCompany.icDph}
            </Text>
          )}
        </View>
        <Text style={styles.splittext}>1. ??vodn?? ustanovenia</Text>
        <Text style={styles.textbold}>1.1.</Text>
        <Text style={styles.text}>Pred??vaj??ci je pr??vnickou osobou</Text>
        <Text style={styles.textbold}>1.2.</Text>
        <Text style={styles.text}>
          Pred??vaj??ci prehlasuje ??e je vlastn??kom ??alej popisovan??ho automobilu:
          {'\n'}
          a) Typ: {car.type}
          {'\n'}
          b) Model Rok: {car.year}
          {'\n'}
          c) Farba: {car.color}
          {'\n'}
          d) VIN: {car.vin}
          {'\n'}
          (??alej len Automobil)
        </Text>
        <Text style={styles.splittext}>2. Predmet k??py</Text>
        <Text style={styles.textbold}>2.1.</Text>
        <Text style={styles.textjustified}>
          Pred??vaj??ci t??mto pred??va Kupuj??cemu vy????ie uveden?? automobil spolu s jeho s????as??amia
          {'\n'}
          pr??slu??enstvom za dohodnut?? k??pnu cenu a Kupuj??ci ho t??mto od Pred??vaj??ceho za{'\n'}
          dohodnut?? k??pnu cenu kupuje a pr??jma do vlastn??ctva.
        </Text>
        <Text style={styles.splittext}>3. Pr??vny stav pred??van??ho vozidla</Text>
        <Text style={styles.textbold}>3.1.</Text>
        <Text style={styles.textjustified}>
          Pred??vaj??ci prehlasuje ??e Automobil nem?? ??iadne pr??vne vady a neviaznu na ??om ??iadne
          finan??n?? z??v??zky, ktor?? by br??nili alebo obmedzovali Kupuj??ceho vo vo??nej dispoz??ci?? s
          Automobilom a ktor?? by bolo treba touto zmluvou zvl?????? vysporiada??, ??i na ktor?? by
          kupuj??ci musel by?? upozornen??.
        </Text>
        <Text style={styles.textbold}>3.2.</Text>
        <Text style={styles.textjustified}>
          Pred??vaj??ci poskytne touto zmluvou Kupuj??cemu pr??vnu z??ruku, ??e automobil nepoch??dza z
          trestnej ??innosti (tzn. Predov??etk??m, ??e nebol ukradnut?? alebo spreneveren??), ??e pred jeho
          {'\n'}
          predajom Kupuj??cemu nedo??lo k neopr??vnen??mu pozmeneniu, resp. k neopr??vnenej manipul??cii s
          ????slom podvozku a ????slom motora, ??e v dobe tejto zmluvy na Automobile neviezne z??lo??n??
          alebo z??dr??n?? pr??vo, a ??e Automobil v dobe uzavretia tejto zmluvy nie je predmetom
          laesingu pod??a v dobe uzavretia tejto zmluvy platnej, ????innej a doposia?? neukon??enej
          laesingovej zmluvy.{'\n'}V opa??nom pr??pade je Kupuj??ci opr??vnen?? od tejto zmluvy odst??pi??.
          V pr??pade odst??penia odst??penia od zmluvy Kupuj??cim vr??ti Pred??vaj??ci Kupuj??cemu k??pnu
          cenu Automobilu, a to oproti vr??teniu Automobilu Kupujpcim pred??vaj??cemu do jeho
          prev??dzkarne uvedenej v ??l. IX. V??eobecn??ch obchodn??ch podmienok v stave v akom ho od
          Pred??vaj??ceho prevzal spolu so v??etk??m pr??slu??enstvom a s????as??ami, s prihliadnut??m na
          obvykl?? opotrebenie, pr??padne ak do??lo k odobratiu Automobilu org??nom Policajn??ho zboru SR
          oproti odovzdaniu origin??lu alebo ??radne overenej k??pie protokolu a odobran??/odovzdan??
          Automobilu, resp. in??ho protokolu, na z??klade ktor??ho org??n Policajn??ho zboru SR potvrd??
          prevzatie vozidla v s??lade s platn??m pr??vnym predpisom (trestn?? poriadok). V pr??pade
          odst??penia od zmluvy nem?? Kupuj??ci vo??i Pred??vaj??cemu n??rok na n??hradu vzniknutej ??kody,
          ??i na ??hradu n??kladov s vr??ten??m Automobilu. Kupuj??ci nem?? n??rok na ??roky z pe??a??nej
          ??iastky vr??tenej mu Pred??vaj??cim.
        </Text>
        <Text style={styles.textbold}>3.3.</Text>
        <Text style={styles.textjustified}>
          Pr??vnu z??ruku uveden?? v ods. 3.2 tohto ??l??nku poskytuje Pred??vaj??ci po cel?? dobu
          ??ivotnosti {'\n'} Automobilu. Pr??va z tejto z??ruky nie s?? prevodite??n?? na tretie osoby a
          vo??i Pred??vaj??cemu je opr??vnen?? ich uplat??ova?? len a v??hradne Kupuj??ci. T??to z??ruka sa
          nevz??ahuje na Automobil, u ktor??ho pri uzavret?? tejto zmluvy do??lo k neopevnen??mu
          pozmeneniu, resp. k neopr??vnenej manipul??ci?? s ????slom motora a/alebo s ????slom podvozku, ??i
          ak??muko??vek z??sahu do motora Automobilu, ??i ak??chko??vek in??ch agreg??tov alebo s????ast??
          Automobilu. V pr??pade, ??e Kupuj??ci kupuje Automobil od Pred??vaj??ceho za ????elom jeho
          laesingov??ho pren??jmu tretej osobe na z??klade laesingovej zmluvy uzavretej pred uzavret??m
          tejto zmluvy, nepova??uje sa t??to laesingov?? zmluva v zmysle ods. 3.2. tohto ??l??nku za
          poru??enie z??ruky Predvaj??ceho a Kupuj??ci nie je opr??vnen?? od tejto zmluvy z tohto d??vodu
          odst??pi??.
        </Text>
        <Text style={styles.textbold}>3.4.</Text>
        <Text style={styles.textjustified}>
          V pr??pade ??e po uzavret?? tejto zmluvy a prevzat?? Automobilu Kupuj??cim d??jde k po??kodeniu
          ??i zni??eniu Automobilu, je Kupuj??ci za predpokladu vzniku n??roku vypl??vaj??ceho zo z??ruky
          pod??a ods. 3.2. tohto ??l??nku opr??vnen?? od tejto zmluvy odst??pi?? len v pr??pade, ??e pred
          odst??pen??m od zmluvy uvedie Automobil na svoje n??klady do p??vodn??ho stavu, v ktorom mu bol
          Automobil Pred??vaj??cim odovzdan??, s prihliadnut??m na obvykl?? opotrebovanie, a v tomto
          stave ho Pred??vaj??cemu vr??ti oproti vr??teniu k??pnej ceny. V opa??nom pr??pade ako aj v
          pr??pade, ??e uvedenie Automobilu do p??vodn??ho stavu nie je z d??vodu odobratia Automobilu
          org??nom policajn??ho zboru SR mo??n??, je Kupuj??ci opr??vnen?? od zmluvy odst??pi?? s t??m, ??e
          Pred??vaj??ci je povinn?? vr??ti?? Kupuj??cemu oproti Automobilu, resp. odovzdaniu origin??lu ??i
          ??radne overenej k??pie protokolu o odovzdan??/odobrat?? Automobilupod??a ods. 3.2. tohto
          ??l??nku k??pnu cenu zn????en?? o n??klady na uvedenie Automobilu do p??vodn??ho stavu, v ktorom
          bol Automobil Pred??vaj??cim Kupuj??cemu odovzdan??, s prihliadnut??m na obvykl?? opotrebenie.
          V????ku n??kladov na uvedenie automobilu do p??vodn??ho stavu ur??ije Pred??vaj??ci. V pr??pade ??e
          Kupuj??ci vznesie n??mietky vo??i v????ke n??kladov na uvedenie Automobilu do p??vodn??ho stavu
          ur??en??ch pred??vaj??cim, bude aktu??lna cena Automobilu resp. hodnota t??chto n??kladov ur??en??
          autorizovan??m servisom ur??en??m Pred??vaj??cim , a to na n??klady Kupuj??ceho.
        </Text>
        <Text style={styles.splittext}>
          4. Faktick?? stav prev??dzan??ho Automobilu, prevzatie Automobilu
        </Text>
        <Text style={styles.textbold}>4.1.</Text>
        <Text style={styles.textjustified}>
          Kupuj??ci prehlasuje, ??e si Automobil a jeho pr??slu??enstvo a s????asti pred ich prevzat??m od
          Pred??vaj??ceho d??kladne prehliadol a absolvoval s Automobilom sk????obn?? jazdu v d????ke nie
          krat??ej ako p???? kilometro. Sk????obn?? jazdu je p??r??vnen?? Kupuj??ci vykona?? v ??ubovolnej d????ke
          tak, aby s funk??nos??ou Automobilu a s jeho technick??m stavom mohol riadne zozn??mi??.
          Automobil kupuje Kupuj??ci v stave, ako si ho osobne ??i prostredn??ctvom n??m ur??enej osoby
          prehliadol, s vedom??m, ??e sa jedn?? o automobil pou??it??, opotrebovan?? ??merne veku a
          najazden??m kilometrom.
        </Text>
        <Text style={styles.textbold}>4.2.</Text>
        <Text style={styles.textjustified}>
          Prevzat??m Automobilu prech??dzaj?? na Kupuj??ceho v??etky rizik?? spojen?? s nebezpe??enstvom
          n??hodnej ??kody a n??hodn??ho zhor??enia Automobilu. Kupuj??ci ??alej podpisom tejto zmluvy
          potvrdzuje, ??e bol v s??vislosti so sk????obnou jazdou Pred??vaj??cim riadne obozn??men?? s
          obsluhou pred??van??ho Automobilu, t.j. najm?? mu boli poskytnut?? inform??cie t??kaj??ce sa
          u????vania a ??dr??by Automobilu.
        </Text>
        <Text style={styles.textbold}>4.3.</Text>
        <Text style={styles.textjustified}>
          Pr??lohou ??. 2 tejto zmluvy a jej neoddelite??nou s????as??ou s?? jej V??eobecn?? obchodn??
          podmienky
        </Text>
        <Text style={styles.textbold}>4.4.</Text>
        <Text style={styles.textjustified}>
          Pr??lohou ??. 3 tejto zmluvy a jej neoddelite??nou s????as??ou je fakt??ra.
        </Text>
        <Text style={styles.splittext}>5. K??pna cena a platobn?? podmienky</Text>
        <Text style={styles.textbold}>5.1.</Text>
        <Text style={styles.textjustified}>
          K??pna cena za Automobil bola stanoven?? dohodou zmluvn??ch str??n a je vo v????ke{' '}
          {price.byNumber} EUR s DPH slovom {price.byWord} EUR s DPH.
        </Text>
        <Text style={styles.textbold}>5.2.</Text>
        <Text style={styles.textjustified}>K??pna cena bude zaplaten?? v hotovosti.</Text>
        <Text style={styles.textbold}>5.3.</Text>
        <Text style={styles.textjustified}>
          Kupuj??ci nadob??da vlastn??cke pr??vo k Automobilu okamihom zaplatenia k??pnej ceny,
        </Text>
        <Text style={styles.splittext}>6. ??al??ie dojednania</Text>
        <Text style={styles.textbold}>6.1.</Text>
        <Text style={styles.textjustified}>
          Zmluvn?? strany sa t??mto v zmysle?? 262 ods. 1 z??kona ??. 513/1991 Zb. Obchodn?? z??konn??k, v
          platnom znen?? v??slovne dohodli, ??e sa ich zmluvn?? vz??ah zalo??en?? touto zmluvou bude riadi??
          Obchodn??m z??konn??kom.
        </Text>

        <Text style={styles.textbold}>
          {' '}
          {'\n'}
          {'\n'}6.2.
        </Text>
        <Text style={styles.textjustified}>
          Zmluvn?? strany sa dohodli, ??e Kupuj??ci od okamihu prevzatia Automobilu od Pred??vajpceho
          bude Automobil vlastn??m menom prev??dzkova?? na pozemn??ch komunik??ciach. Kupuj??ci nesie od
          tohto okamihu pln?? zodpovednos?? za dodr??iavanie v??etk??ch pr??vn??ch predpisov t??kaj??cich sa
          prem??vky a prev??dzky vozidiel na pozemn??ch komunik??ciach.
        </Text>
        <Text style={styles.textbold}>6.3.</Text>
        <Text style={styles.textjustified}>
          Kupuj??ci sa zav??zuje bezprostredne ku d??u podpisu tejto zmluvy a prevzatia Automobilu
          uzavrie?? na svoje n??klady poistn?? zmluvu o povinnom zmluvnom poisten?? zodpovednosti za
          ??kodu sp??soben?? prev??dzkou motorov??ho vozidla. V Pr??pade poru??enia tejto povinnosti je
          Kupuj??ci povinn?? nahradi?? Pred??vaj??cemu v??etku ??kodu vzniknut?? mu v d??sledku nepoistenia
          Automobilu vr??tane pok??t ulo??en??ch mu pr??slu??n??m spr??vnym org??nom.
        </Text>
        <Text style={styles.splittext}>7. Z??vere??n?? ustanovenia</Text>
        <Text style={styles.textbold}>7.1.</Text>
        <Text style={styles.textjustified}>
          T??to zmluva je vyhotoven?? v 2 vyhotoveniach, z ktor??ch po jednom obdr???? ka??d?? zo zmluvn??ch
          str??n. Majtel d??va z??ruku na p??vod vozidla v dobe jedn??ho roka, ??e automobil nebol b??ran??,
          ani neboli sto??en?? kilometre.
        </Text>
        <Text style={styles.textbold}>7.2.</Text>
        <Text style={styles.textjustified}>
          Zmluvn?? strany prehlasuj??p ??e si t??to zmluvu pre????tali a ??e jej rozumej??. ??alej
          prehlasuj??, ??e t??to zmluva je v??razom ich pravej a slobodnej v??le a ??e nie ke uzatvoren?? v
          tiesni, ani za n??padne nev??hodn??ch podmienok. Na d??kaz toho prip??jaj?? svoje podpisy.
        </Text>
        <Text style={styles.textbold}>7.3.</Text>
        <Text style={styles.textjustified}>
          Vz??ahy touto zmluvou bli????ie neupraven?? sa riadia pr??slu??n??mi ustanoveniami obchodn??ho
          z??konn??ka a pr??padne ??al????mi v??eobecne z??v??zn??mi podpismi.
        </Text>
        <Text style={styles.signatures}>D??a .......................</Text>
        <View style={styles.flexviewsignature}>
          <Text style={styles.flextexsignatureone}>
            .................................{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pred??vaj??ci
          </Text>
          <Text style={styles.flextexsignaturetwo}>..............................Kupuj??ci</Text>
        </View>
      </Page>
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: Kupnazmluva });

  useEffect(() => {
    updateInstance();
  }, [firstPerson, firstCompany, secondPerson, secondCompany, price, car, updateInstance]);

  return (
    <SaleContractWrapSC>
      <SaleContractViewSC>
        <PDFViewer
          height="100%"
          width="100%"
          showToolbar={false}
          style={{ border: 'none', backgroundColor: '#222222' }}
        >
          {Kupnazmluva}
        </PDFViewer>
      </SaleContractViewSC>
      <SaleContractEditSC>
        <>
          <div className="input-wrap full">
            <H2>Nastavenie zmluvy</H2>
            <label>
              <input
                type="checkbox"
                onChange={() => setIsSellerCompany(!isSellerCompany)}
                className={isSellerCompany ? 'checkbox active' : 'checkbox'}
                checked={isSellerCompany}
              />
              Pred??vaj??ci je firma
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => setIsBuyerCompany(!isBuyerCompany)}
                className={isBuyerCompany ? 'checkbox active' : 'checkbox'}
                checked={isBuyerCompany}
              />
              kupuj??ci je firma
            </label>
          </div>
          <div className="input-wrap">
            <H2>
              ??daje osoba <span>(Pred??vaj??ci)</span>
            </H2>
            {Object.keys(firstPerson).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporaryFirstPerson[item as keyof IKupnaPerson]}
                  placeholder={personPlaceholder[item as keyof IKupnaPerson]}
                  onChange={(e) => handleFirstPersonChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>
          <div className={isSellerCompany ? 'input-wrap' : 'input-wrap not-active'}>
            {isSellerCompany && (
              <>
                <H2>
                  ??daje Firma <span>(Pred??vaj??ci)</span>
                </H2>
                {Object.keys(firstCompany).map((item: string) => {
                  return (
                    <Input
                      key={item}
                      value={temporaryFirstCompany[item as keyof IKupnaCompany]}
                      placeholder={companyPlaceholder[item as keyof IKupnaCompany]}
                      onChange={(e) => handleFirstCompanyChange(item, e.target.value)}
                      className="input-wrap__item"
                    />
                  );
                })}
              </>
            )}
          </div>

          <div className="input-wrap">
            <H2>
              ??daje osoba <span>(Kupuj??ci)</span>
            </H2>
            {Object.keys(secondPerson).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporarySecondPerson[item as keyof IKupnaPerson]}
                  placeholder={personPlaceholder[item as keyof IKupnaPerson]}
                  onChange={(e) => handleSecondPersonChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>

          <div className={isBuyerCompany ? 'input-wrap' : 'input-wrap not-active'}>
            {isBuyerCompany && (
              <>
                <H2>
                  ??daje Firma <span>(Kupuj??ci)</span>
                </H2>
                {Object.keys(secondCompany).map((item: string) => {
                  return (
                    <Input
                      key={item}
                      value={temporarySecondCompany[item as keyof IKupnaCompany]}
                      placeholder={companyPlaceholder[item as keyof IKupnaCompany]}
                      onChange={(e) => handleSecondCompanyChange(item, e.target.value)}
                      className="input-wrap__item"
                    />
                  );
                })}
              </>
            )}
          </div>

          <div className="input-wrap">
            <H2>??daje o Aute</H2>
            {Object.keys(car).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporaryCar[item as keyof IKupnaCar]}
                  placeholder={carPlaceholder[item as keyof IKupnaCar]}
                  onChange={(e) => handleCarChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>

          <div className="input-wrap">
            <H2>Cena</H2>
            {Object.keys(price).map((item: string) => {
              return (
                <Input
                  key={item}
                  value={temporaryPrice[item as keyof IKupnaPrice]}
                  placeholder={pricePlaceholder[item as keyof IKupnaPrice]}
                  onChange={(e) => handlePriceChange(item, e.target.value)}
                  className="input-wrap__item"
                />
              );
            })}
          </div>

          <div className="action-wrap">
            <button onClick={() => onUpdateClick()}>
              <BodyText>Aktualizova??</BodyText>
            </button>
            <a
              href={instance.url ? instance.url : ''}
              download={`kupna-zmluva-${firstPerson.name}.pdf`}
              className="doc-link"
            >
              <BodyText>Stiahnu??</BodyText>
            </a>
          </div>
        </>
      </SaleContractEditSC>
    </SaleContractWrapSC>
  );
};

export default SaleContract;
