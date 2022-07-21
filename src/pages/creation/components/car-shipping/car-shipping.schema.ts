import { StyleSheet, Font } from '@react-pdf/renderer';
export interface IShippingFirstPage {
  companyData: string;
  truckDriverData: string;
  carData: string;
  city: string;
}

export interface IShippingSecondPage {
  companyName: string;
  companyAddress: string;
  companyAddressTwo: string;
  companyAddressThree: string;
  carVin: string;
  managerName: string;
  addressLineOne: string;
  addressLineTwo: string;
  addressLineThree: string;
}

export const firstPagePlaceholder = {
  companyData: 'Údaje v hlavičke',
  truckDriverData: 'Údaje o dopravcovi',
  carData: 'Údaje o aute',
  city: 'Miesto pri podpise',
};

export const secondPagePlaceholder = {
  companyName: 'Názov firmy',
  companyAddress: 'Adresa firmy riadok 1',
  companyAddressTwo: 'Adresa firmy riadok 2',
  companyAddressThree: 'Adresa firmy riadok 3',
  carVin: 'VIN',
  managerName: 'Meno manažéra',
  addressLineOne: 'Adresa riadok 1',
  addressLineTwo: 'Adresa riadok 2',
  addressLineThree: 'Adresa riadok 3',
};

export const initialFirstPage = {
  companyData: '',
  truckDriverData: '',
  carData: '',
  city: '',
};

export const initialSecondPage = {
  companyName: '',
  companyAddress: '',
  companyAddressTwo: '',
  companyAddressThree: '',
  carVin: '',
  managerName: '',
  addressLineOne: '',
  addressLineTwo: '',
  addressLineThree: '',
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
      ? '/documents-gen/assets/fonts/Roboto-BoldItalic.ttf'
      : '/assets/fonts/Roboto-BoldItalic.ttf',
});

export const styles = StyleSheet.create({
  body: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 45,
  },
  title: {
    fontSize: '24px',
    textAlign: 'center',
    fontFamily: 'Times-Bold',
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 600,
  },
  titledynamic: {
    fontSize: '24px',
    textAlign: 'left',
    fontFamily: 'Times-Bold',
    marginTop: 70,
    fontWeight: 600,
  },
  textgeneratedunderline: {
    fontSize: '11px',
    textAlign: 'center',
    fontFamily: 'Roboto-bold',
    marginTop: 25,
    marginBottom: 15,
    textDecoration: 'underline',
    fontWeight: 600,
  },
  dynamicunderlinetitle: {
    fontSize: '15px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    textDecoration: 'underline',
  },
  dynamicunderline: {
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    textDecoration: 'underline',
  },

  dynamic: {
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationThickness: '1px',
  },

  textcenteredsmall: {
    fontSize: '8px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 25,
  },

  textcentered: {
    fontSize: '12px',
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    marginBottom: 25,
  },
  textleft: {
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Times-Roman',
    marginTop: 40,
  },

  textleftbottom: {
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Times-Roman',
    marginTop: 100,
  },

  textleftnomargin: {
    fontSize: '12px',
    textAlign: 'left',
    fontFamily: 'Times-Roman',
  },
  textleftspecial: {
    fontSize: '14px',
    textAlign: 'left',
    fontFamily: 'Times-Roman',
    marginTop: 50,
  },
  textleftspecialunderline: {
    fontSize: '14px',
    textAlign: 'left',
    fontFamily: 'Times-Roman',
    textDecoration: 'underline',
    textDecorationThickness: '1px',
    marginTop: 50,
  },
  flextexsignatureone: {
    flex: 1,
    fontSize: '10px',
    paddingRight: 200,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
  },
  flextexsignaturetwo: {
    flex: 2,
    fontSize: '10px',
    paddingRight: 0,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
  },
  flexviewsignature: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginTop: 130,
  },
});
