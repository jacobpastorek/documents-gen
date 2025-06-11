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
        <Text style={styles.title}>KÚPNA ZMLUVA</Text>
        <Text style={styles.textcentered}>
          V súlade s ustanovením §409 a následne zákona č. 513/1991 Zb. Obchodný zákonník v{'\n'}
          platnom znení uzavretá nižšie uvedeného dňa, mesiaca a roku medzi:
        </Text>

        <View style={styles.flexview}>
          <Text style={styles.flextextone}>
            Meno a priezvisko: {firstPerson.name}
            {'\n'} Trvale bytom: {firstPerson.address}
            {'\n'} Číslo OP: {firstPerson.identificationCard}
            {'\n'} (Ďalej len Predávajúci)
          </Text>
          {isSellerCompany && (
            <Text style={styles.flextexttwo}>
              Názov firmy: {firstCompany.name}
              {'\n'} Adresa: {firstCompany.address}
              {'\n'} IČO: {firstCompany.ico}
              {'\n'} IČ DPH: {firstCompany.icDph}
            </Text>
          )}
        </View>

        <View style={styles.flexview}>
          <Text style={styles.flextextone}>
            Meno a priezvisko: {secondPerson.name}
            {'\n'} Trvale bytom: {secondPerson.address}
            {'\n'} Číslo OP: {secondPerson.identificationCard}
            {'\n'} (Ďalej len Kupujúci)
          </Text>
          {isBuyerCompany && (
            <Text style={styles.flextexttwo}>
              Názov firmy: {secondCompany.name}
              {'\n'} Adresa: {secondCompany.address}
              {'\n'} IČO: {secondCompany.ico}
              {'\n'} IČ DPH: {secondCompany.icDph}
            </Text>
          )}
        </View>
        <Text style={styles.splittext}>1. Úvodné ustanovenia</Text>
        <Text style={styles.textbold}>1.1.</Text>
        <Text style={styles.text}>Predávajúci je právnickou alebo fyzickou osobou</Text>
        <Text style={styles.textbold}>1.2.</Text>
        <Text style={styles.text}>
          Predávajúci prehlasuje, že je vlastníkom ďalej popisovaného automobilu:
          {'\n'}
          a) Typ: {car.type}
          {'\n'}
          b) Model Rok: {car.year}
          {'\n'}
          c) Farba: {car.color}
          {'\n'}
          d) VIN: {car.vin}
          {'\n'}
          (ďalej len Automobil)
        </Text>
        <Text style={styles.splittext}>2. Predmet kúpy</Text>
        <Text style={styles.textbold}>2.1.</Text>
        <Text style={styles.textjustified}>
          Predávajúci týmto predáva Kupujúcemu vyššie uvedený automobil spolu s jeho súčasťami a
          {'\n'}
          príslušenstvom za dohodnutú kúpnu cenu a Kupujúci ho týmto od Predávajúceho za{'\n'}
          dohodnutú kúpnu cenu kupuje a prijíma do vlastníctva.
        </Text>
        <Text style={styles.splittext}>3. Právny stav predávaného vozidla</Text>
        <Text style={styles.textbold}>3.1.</Text>
        <Text style={styles.textjustified}>
          Predávajúci prehlasuje, že Automobil nemá žiadne právne vady a neviaznu na ňom žiadne
          finančné záväzky, ktoré by bránili alebo obmedzovali Kupujúceho vo voľnej dispozícií s
          Automobilom a ktoré by bolo treba touto zmluvou zvlášť vysporiadať, či na ktoré by
          kupujúci musel byť upozornený.
        </Text>
        <Text style={styles.textbold}>3.2.</Text>
        <Text style={styles.textjustified}>
          Predávajúci poskytne touto zmluvou Kupujúcemu právnu záruku, že automobil nepochádza z
          trestnej činnosti (tzn. Predovšetkým, že nebol ukradnutý alebo spreneverený), že pred jeho
          {'\n'}
          predajom Kupujúcemu nedošlo k neoprávnenému pozmeneniu, resp. k neoprávnenej manipulácii s
          číslom podvozku a číslom motora, že v dobe tejto zmluvy na Automobile neviezne záložné
          alebo zádržné právo, a že Automobil v dobe uzavretia tejto zmluvy nie je predmetom
          laesingu podľa v dobe uzavretia tejto zmluvy platnej, účinnej a doposiaľ neukončenej
          leasingovej zmluvy.{'\n'}V opačnom prípade je Kupujúci oprávnený od tejto zmluvy odstúpiť.
          V prípade odstúpenia odstúpenia od zmluvy Kupujúcim vráti Predávajúci Kupujúcemu kúpnu
          cenu Automobilu, a to oproti vráteniu Automobilu Kupujúcim predávajúcemu do jeho
          prevádzkarne uvedenej v čl. IX. Všeobecných obchodných podmienok v stave v akom ho od
          Predávajúceho prevzal spolu so všetkým príslušenstvom a súčasťami, s prihliadnutím na
          obvyklé opotrebenie, prípadne ak došlo k odobratiu Automobilu orgánom Policajného zboru SR
          oproti odovzdaniu originálu alebo úradne overenej kópie protokolu a odobraní/odovzdaní
          Automobilu, resp. iného protokolu, na základe ktorého orgán Policajného zboru SR potvrdí
          prevzatie vozidla v súlade s platným právnym predpisom (trestný poriadok). V prípade
          odstúpenia od zmluvy nemá Kupujúci voči Predávajúcemu nárok na náhradu vzniknutej škody,
          či na úhradu nákladov s vrátením Automobilu. Kupujúci nemá nárok na úroky z peňažnej
          čiastky vrátenej mu Predávajúcim.
        </Text>
        <Text style={styles.textbold}>3.3.</Text>
        <Text style={styles.textjustified}>
          Právnu záruku uvedenú v ods. 3.2 tohto článku poskytuje Predávajúci po celú dobu
          životnosti {'\n'} Automobilu. Práva z tejto záruky nie sú prevoditeľné na tretie osoby a
          voči Predávajúcemu je oprávnený ich uplatňovať len a výhradne Kupujúci. Táto záruka sa
          nevzťahuje na Automobil, u ktorého pri uzavretí tejto zmluvy došlo k neopevnenému
          pozmeneniu, resp. k neoprávnenej manipulácií s číslom motora a/alebo s číslom podvozku, či
          akémukoľvek zásahu do motora Automobilu, či akýchkoľvek iných agregátov alebo súčastí
          Automobilu. V prípade, že Kupujúci kupuje Automobil od Predávajúceho za účelom jeho
          laesingového prenájmu tretej osobe na základe laesingovej zmluvy uzavretej pred uzavretím
          tejto zmluvy, nepovažuje sa táto laesingová zmluva v zmysle ods. 3.2. tohto článku za
          porušenie záruky Predvajúceho a Kupujúci nie je oprávnený od tejto zmluvy z tohto dôvodu
          odstúpiť.
        </Text>
        <Text style={styles.textbold}>3.4.</Text>
        <Text style={styles.textjustified}>
          V prípade že po uzavretí tejto zmluvy a prevzatí Automobilu Kupujúcim dôjde k poškodeniu
          či zničeniu Automobilu, je Kupujúci za predpokladu vzniku nároku vyplývajúceho zo záruky
          podľa ods. 3.2. tohto článku oprávnený od tejto zmluvy odstúpiť len v prípade, že pred
          odstúpením od zmluvy uvedie Automobil na svoje náklady do pôvodného stavu, v ktorom mu bol
          Automobil Predávajúcim odovzdaný, s prihliadnutím na obvyklé opotrebovanie, a v tomto
          stave ho Predávajúcemu vráti oproti vráteniu kúpnej ceny. V opačnom prípade ako aj v
          prípade, že uvedenie Automobilu do pôvodného stavu nie je z dôvodu odobratia Automobilu
          orgánom policajného zboru SR možné, je Kupujúci oprávnený od zmluvy odstúpiť s tým, že
          Predávajúci je povinný vrátiť Kupujúcemu oproti Automobilu, resp. odovzdaniu originálu či
          úradne overenej kópie protokolu o odovzdaní/odobratí Automobilupodľa ods. 3.2. tohto
          článku kúpnu cenu zníženú o náklady na uvedenie Automobilu do pôvodného stavu, v ktorom
          bol Automobil Predávajúcim Kupujúcemu odovzdaný, s prihliadnutím na obvyklé opotrebenie.
          Výšku nákladov na uvedenie automobilu do pôvodného stavu určije Predávajúci. V prípade že
          Kupujúci vznesie námietky voči výške nákladov na uvedenie Automobilu do pôvodného stavu
          určených predávajúcim, bude aktuálna cena Automobilu resp. hodnota týchto nákladov určená
          autorizovaným servisom určeným Predávajúcim , a to na náklady Kupujúceho.
        </Text>
        <Text style={styles.splittext}>
          4. Faktický stav prevádzaného Automobilu, prevzatie Automobilu
        </Text>
        <Text style={styles.textbold}>4.1.</Text>
        <Text style={styles.textjustified}>
          Kupujúci prehlasuje, že si Automobil a jeho príslušenstvo a súčasti pred ich prevzatím od
          Predávajúceho dôkladne prehliadol a absolvoval s Automobilom skúšobnú jazdu v dĺžke nie
          kratšej ako päť kilometrov. Skúšobnú jazdu je oprávnený Kupujúci vykonať v ľubovolnej dĺžke
          tak, aby s funkčnosťou Automobilu a s jeho technickým stavom mohol riadne zoznámiť.
          Automobil kupuje Kupujúci v stave, ako si ho osobne či prostredníctvom ním určenej osoby
          prehliadol, s vedomím, že sa jedná o automobil použitý, opotrebovaný úmerne veku a
          najazdeným kilometrom. Na kontrole originality existuje záznam o poškodení vozidla, 
          kupujúci bol o tom oboznámený, laky na aute neprevyšujú hodnotu 130UM.
        </Text>
        <Text style={styles.textbold}>4.2.</Text>
        <Text style={styles.textjustified}>
          Prevzatím Automobilu prechádzajú na Kupujúceho všetky riziká spojené s nebezpečenstvom
          náhodnej škody a náhodného zhoršenia Automobilu. Kupujúci ďalej podpisom tejto zmluvy
          potvrdzuje, že bol v súvislosti so skúšobnou jazdou Predávajúcim riadne oboznámený s
          obsluhou predávaného Automobilu, t.j. najmä mu boli poskytnuté informácie týkajúce sa
          užívania a údržby Automobilu.
        </Text>
        <Text style={styles.splittext}>5. Kúpna cena a platobné podmienky</Text>
        <Text style={styles.textbold}>5.1.</Text>
        <Text style={styles.textjustified}>
          Kúpna cena za Automobil bola stanovená dohodou zmluvných strán a je vo výške{' '}
          {price.byNumber} EUR s DPH slovom {price.byWord} EUR s DPH.
        </Text>
        <Text style={styles.textbold}>5.2.</Text>
        <Text style={styles.textjustified}>Kúpna cena bude zaplatená v hotovosti alebo prevodom na bankový účet.</Text>
        <Text style={styles.textbold}>5.3.</Text>
        <Text style={styles.textjustified}>
          Kupujúci nadobúda vlastnícke právo k Automobilu okamihom zaplatenia kúpnej ceny,
        </Text>
        <Text style={styles.splittext}>6. Ďalšie dojednania</Text>
        <Text style={styles.textbold}>6.1.</Text>
        <Text style={styles.textjustified}>
          Zmluvné strany sa týmto v zmysle§ 262 ods. 1 zákona č. 513/1991 Zb. Obchodný zákonník, v
          platnom znení výslovne dohodli, že sa ich zmluvný vzťah založený touto zmluvou bude riadiť
          Obchodným zákonníkom.
        </Text>

        <Text style={styles.textbold}>
          {' '}
          {'\n'}
          {'\n'}6.2.
        </Text>
        <Text style={styles.textjustified}>
          Zmluvné strany sa dohodli, že Kupujúci od okamihu prevzatia Automobilu od Predávajpceho
          bude Automobil vlastným menom prevádzkovať na pozemných komunikáciach. Kupujúci nesie od
          tohto okamihu plnú zodpovednosť za dodržiavanie všetkých právných predpisov týkajúcich sa
          premávky a prevádzky vozidiel na pozemných komunikáciach.
        </Text>
        <Text style={styles.textbold}>6.3.</Text>
        <Text style={styles.textjustified}>
          Kupujúci sa zaväzuje bezprostredne ku dňu podpisu tejto zmluvy a prevzatia Automobilu
          uzavrieť na svoje náklady poistnú zmluvu o povinnom zmluvnom poistení zodpovednosti za
          škodu spôsobenú prevádzkou motorového vozidla. V Prípade porušenia tejto povinnosti je
          Kupujúci povinný nahradiť Predávajúcemu všetku škodu vzniknutú mu v dôsledku nepoistenia
          Automobilu vrátane pokút uložených mu príslušným správnym orgánom.
        </Text>
        <Text style={styles.splittext}>7. Záverečné ustanovenia</Text>
        <Text style={styles.textbold}>7.1.</Text>
        <Text style={styles.textjustified}>
          Táto zmluva je vyhotovená v 2 vyhotoveniach, z ktorých po jednom obdrží každá zo zmluvných
          strán.
        </Text>
        <Text style={styles.textbold}>7.2.</Text>
        <Text style={styles.textjustified}>
          Zmluvné strany prehlasujú, že si túto zmluvu prečítali a že jej rozumejú. Ďalej
          prehlasujú, že táto zmluva je výrazom ich pravej a slobodnej vôle a že nie je uzatvorená v
          tiesni, ani za nápadne nevýhodných podmienok. Na dôkaz toho pripájajú svoje podpisy.
        </Text>
        <Text style={styles.textbold}>7.3.</Text>
        <Text style={styles.textjustified}>
          Vzťahy touto zmluvou bližšie neupravené sa riadia príslušnými ustanoveniami obchodného
          zákonníka a prípadne ďalšími všeobecne záväznými podpismi.
        </Text>
        <Text style={styles.signatures}>Dňa .......................</Text>
        <View style={styles.flexviewsignature}>
          <Text style={styles.flextexsignatureone}>
            .................................{'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Predávajúci
          </Text>
          <Text style={styles.flextexsignaturetwo}>..............................Kupujúci</Text>
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
              Predávajúci je firma
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => setIsBuyerCompany(!isBuyerCompany)}
                className={isBuyerCompany ? 'checkbox active' : 'checkbox'}
                checked={isBuyerCompany}
              />
              kupujúci je firma
            </label>
          </div>
          <div className="input-wrap">
            <H2>
              Údaje osoba <span>(Predávajúci)</span>
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
                  Údaje Firma <span>(Predávajúci)</span>
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
              Údaje osoba <span>(Kupujúci)</span>
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
                  Údaje Firma <span>(Kupujúci)</span>
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
            <H2>Údaje o Aute</H2>
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
              <BodyText>Aktualizovať</BodyText>
            </button>
            <a
              href={instance.url ? instance.url : ''}
              download={`kupna-zmluva-${firstPerson.name}.pdf`}
              className="doc-link"
            >
              <BodyText>Stiahnuť</BodyText>
            </a>
          </div>
        </>
      </SaleContractEditSC>
    </SaleContractWrapSC>
  );
};

export default SaleContract;
