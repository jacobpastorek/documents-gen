import { StyleSheet, Font } from '@react-pdf/renderer';
export interface IKupnaPerson {
  name: string;
  address: string;
  identificationCard: string;
}

export interface IKupnaCompany {
  name: string;
  address: string;
  ico: string;
  icDph: string;
}

export interface IKupnaCar {
  type: string;
  year: string;
  vin: string;
  color: string;
}

export interface IKupnaPrice {
  byNumber: string;
  byWord: string;
}

export const pricePlaceholder = {
  byNumber: 'Suma v číslach',
  byWord: 'Suma slovne',
};

export const personPlaceholder = {
  name: 'Meno a priezvisko',
  address: 'Trvale bytom',
  identificationCard: 'Číslo občianskeho preukazu',
};

export const companyPlaceholder = {
  name: 'Názov firmy',
  address: 'Adresa',
  ico: 'IČO',
  icDph: 'IČ DPH',
};

export const carPlaceholder = {
  type: 'Typ',
  vin: 'Číslo karosérie (VIN)',
  year: 'Modelový rok',
  color: 'Farba',
};

export const initialFirstPerson = {
  name: '',
  address: '',
  identificationCard: '',
};

export const initialFirstCompany = {
  name: '',
  address: '',
  ico: '',
  icDph: '',
};

export const initialSecondPerson = {
  name: '',
  address: '',
  identificationCard: '',
};

export const initialSecondCompany = {
  name: '',
  address: '',
  ico: '',
  icDph: '',
};

export const initialCar = {
  type: '',
  year: '',
  vin: '',
  color: '',
};

export const initialPrice = {
  byNumber: '',
  byWord: '',
};

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

Font.register({
  family: 'Roboto-bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

Font.register({
  family: 'Roboto-italic',
  src:
    process.env.NODE_ENV === 'production'
      ? "'/documents-gen/assets/fonts/Roboto-BoldItalic.ttf'"
      : "'/assets/fonts/Roboto-BoldItalic.ttf'",
});

export const styles = StyleSheet.create({
  body: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 45,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-bold',
  },
  textjustified: {
    fontSize: '12px',
    textAlign: 'justify',
    fontFamily: 'Roboto',
  },
  textcentered: {
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginVertical: 20,
  },
  text: {
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Roboto',
  },
  textbold: {
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Roboto-bold',
    marginTop: 10,
  },
  splittext: {
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: 'Roboto-italic',
    marginTop: 25,
    marginBottom: 15,
    textDecoration: 'underline',
    fontWeight: 600,
  },
  flextextone: {
    flex: 1,
    fontSize: '12px',
    paddingRight: 15,
    fontFamily: 'Roboto',
  },
  flextexttwo: {
    flex: 1,
    fontSize: '12px',
    paddingLeft: 15,
    fontFamily: 'Roboto',
  },
  flexview: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginVertical: 5,
    marginTop: 15,
  },
  signatures: {
    fontSize: '12px',
    paddingTop: 50,
    fontFamily: 'Roboto',
  },

  flextexsignatureone: {
    flex: 1,
    fontSize: '12px',
    paddingRight: 15,
    fontFamily: 'Roboto',
  },
  flextexsignaturetwo: {
    flex: 1,
    fontSize: '12px',
    paddingLeft: 15,
    fontFamily: 'Roboto',
    textAlign: 'right',
  },
  flexviewsignature: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginTop: 130,
  },
});
