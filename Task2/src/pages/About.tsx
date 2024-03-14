import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            </IonHeader>
            <IonContent className='ion-padding'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, consequuntur aliquam. Voluptatum natus veritatis tenetur at expedita explicabo, ut repellendus earum, quaerat sequi eligendi vitae, iusto corporis tempore voluptatem modi?</p>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Lorem ipsum...</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default About;
