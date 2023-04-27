import { IonPage,IonImg,IonContent,IonRow,IonCol,IonGrid } from '@ionic/react';
import './Login.css';
import img from "../assets/images/logo-OnSite.png"
import FormLogin from '../components/FormLogin';
const Login: React.FC = () => {
  return (
      <IonContent className="IonContent1">
     <IonGrid fixed>
        <IonRow  className="rowLogin">
          <IonCol   size="6" size-xl="2.4" size-md="5" size-xs="6" size-sm="6"  ><IonImg className="img" src={img} ></IonImg></IonCol>
        </IonRow>
        <IonRow  className="rowLogin">
          <IonCol   size="6" size-xl="3.2" size-md="7.5" size-xs="12" size-sm="7.6"  ><FormLogin/></IonCol>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
        </IonRow>
      </IonGrid>
      </IonContent> 
    
  );
};

export default Login;
