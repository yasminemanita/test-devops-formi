import "./FormLogin.css"
import React,{useEffect} from "react"
import {IonInput,IonCard,IonCardContent,IonRow,IonCol,IonCardHeader,IonCardTitle,IonNote,IonIcon,IonButton} from "@ionic/react"
import { useForm } from "../logic/FormLoginLogic";
//import eye from "../assets/images/eye-outline.svg";
//import eyeOff from "../assets/images/eye-off-outline.svg";
import circleAlert from "../assets/images/alert-circle-outline.svg"
import {eye,eyeOff} from "ionicons/icons"
interface ContainerProps { }
const FormLogin: React.FC<ContainerProps> = () => {
  const {username,password,onChangeUserName,onChangePassword,handleSubmit, handleClickShowPassword,handleMouseDownPassword,inputRef,showPassword,token}=useForm()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <IonCard className="card" id="my-form">
    <IonCardHeader>
      <IonCardTitle className="title">Connectez-vous</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonRow>
        <IonCol>
          <IonInput
            //className="ionIput"
            type="text"
            required
            value={username}
            onIonInput={onChangeUserName} 
            label="Identifiant*"
            labelPlacement="stacked"
            placeholder="saisissez votre identifiant"
            data-testid="identifiant"
          />
        </IonCol>
      </IonRow>
      
      <IonRow>
        <IonCol size="10.5">
          <IonInput
            className="ionIput"
            //type="password"
            label="Mot de passe*"
            value={password}
            type={showPassword ? 'text' : 'password'}
            //ref={inputRef}
            autocomplete="off"
            onIonInput={onChangePassword} 
            required
            labelPlacement="stacked"
            placeholder="saisissez votre mot de passe" 
            data-testid="password"

          />
        </IonCol>
        <IonCol size="1">
          <div>
            <IonIcon
              slot="end"
              onClick={handleClickShowPassword}
              className="iconEye"
              onMouseDown={handleMouseDownPassword}
              icon={showPassword ? eye : eyeOff}
            />
          </div>
        </IonCol>
      </IonRow>
    
      <IonRow>
        {
          (token==="undefined"||token==="null") && 
          <IonNote  color="danger">
            <IonIcon src={circleAlert} />
            verifier les champs remplis
          </IonNote>
        }
      </IonRow>

      <IonRow>
        <IonCol size-xs="12">
          <IonButton color="primary"  data-testid="button" onClick={(e)=>handleSubmit(e)}>Se connecter</IonButton>
        </IonCol>
      </IonRow>
    </IonCardContent>

  </IonCard>

   
  );
};

export default FormLogin;

