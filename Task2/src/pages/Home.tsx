import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>Welcome to My App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequatur incidunt officia officiis aspernatur alias minima veritatis. Minus hic nobis doloribus cumque ex sapiente soluta ullam ipsam voluptatum reiciendis.</p>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
