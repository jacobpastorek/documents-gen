import { StyleSheet, Font } from '@react-pdf/renderer';

export interface IAttorneyProps {
  firstPersonName: string;
  firstPersonBirthNum: string;
  firstPersonBirthDate: string;
  firstPersonAddress: string;
  firstPersonOP: string;
  secondPersonName: string;
  secondPersonBirthNum: string;
  secondPersonBirthDate: string;
  secondPersonAddress: string;
  secondPersonOP: string;
  carCategory: string;
  carType: string;
  carEngineNum: string;
  carVin: string;
  carPlateNum: string;
  carColor: string;
}

export const initalState = {
  firstPersonName: '',
  firstPersonBirthNum: '',
  firstPersonBirthDate: '',
  firstPersonAddress: '',
  firstPersonOP: '',
  secondPersonName: '',
  secondPersonBirthNum: '',
  secondPersonBirthDate: '',
  secondPersonAddress: '',
  secondPersonOP: '',
  carCategory: '',
  carType: '',
  carEngineNum: '',
  carVin: '',
  carPlateNum: '',
  carColor: '',
};

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

Font.register({
  family: 'Roboto-bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
});

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 45,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    marginBottom: 50,
  },
  text: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Roboto',
    marginVertical: 30,
  },
  signtext: {
    fontSize: 12,
    textAlign: 'right',
    fontFamily: 'Roboto',
    marginTop: 100,
  },
  placetext: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Roboto',
    marginTop: 100,
  },
  textbold: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Roboto-bold',
  },
  splittext: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Roboto-bold',
    marginVertical: 20,
  },
  flextext: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  flexview: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginVertical: 5,
  },
  dynamic: {
    fontSize: 12,
    fontFamily: 'Roboto-bold',
  },
});
