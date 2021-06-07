import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import styles from "./Home.module.scss";

import { addOutline, arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipseOutline, ellipsisHorizontal, ellipsisHorizontalOutline, imageOutline, pencilOutline, personAddOutline, sendOutline } from "ionicons/icons";

const Home = () => {
	return (
		<IonPage className={ styles.home }>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">

						<IonButton color="light">
							<IonIcon icon={ arrowBackOutline } />
						</IonButton>
					</IonButtons>

					<IonButtons slot="end">

						<IonButton color="light">
							<IonIcon icon={ ellipsisHorizontal } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>

				<div className={ styles.topHeader }></div>

				<IonGrid>
					<IonRow className="ion-justify-content-center">
						<IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
							<IonCard className={ styles.profileHeader }>

								<IonCardContent>

									<IonRow>
										<IonCol size="4">
											<img src="/assets/alan.jpg" alt="avatar" className={ styles.avatar } />
										</IonCol>

										<IonCol size="8">
											<IonRow className={ styles.profileInfo }>
												<IonCol size="12">
													<IonText color="dark" className={ styles.profileName }>
														<p>Alan Montgomery</p>
													</IonText>
													<IonText color="medium">
														<p>Mobile Team Lead</p>
													</IonText>
												</IonCol>
											</IonRow>

											<IonRow className={ styles.profileStats }>

												<IonCol className={ styles.profileStat }>
													
													<IonCardTitle>109</IonCardTitle>
													<IonCardSubtitle>Followinig</IonCardSubtitle>
												</IonCol>

												<IonCol className={ styles.profileStat }>
													
													<IonCardTitle>1.2k</IonCardTitle>
													<IonCardSubtitle>Followers</IonCardSubtitle>
												</IonCol>
											</IonRow>
										</IonCol>
									</IonRow>

									<IonRow>
										<IonCol size="6">
											<IonButton fill="outline" expand="block">
												Message
											</IonButton>
										</IonCol>

										<IonCol size="6">
											<IonButton color="primary" expand="block">
												<IonIcon icon={ personAddOutline } size="small" />&nbsp;
												Follow
											</IonButton>
										</IonCol>
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className={ styles.profileStatusContainer }>
						<IonCol size="12">
							<IonCard className={ styles.profileCard }>

								<IonCardHeader>
									<IonRow className={ styles.profileStatus }>
										<IonIcon icon={ chatboxEllipsesOutline } />
										<IonCardSubtitle>Status</IonCardSubtitle>
									</IonRow>
								</IonCardHeader>
								<IonCardContent>
									<IonText>
										<p>I love posting content related to Ionic React! Make sure to check out the Ionic React Hub!</p>
									</IonText>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="6">
							<IonCard className={ styles.profileCard }>
								<IonCardContent>
									<IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Photos</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>

						<IonCol size="6">
							<IonCard className={ styles.profileCard }>
								<IonCardContent>
									<IonIcon icon={ bookmarkOutline } />
									<IonCardTitle>63</IonCardTitle>
									<IonCardSubtitle>Bookmarks</IonCardSubtitle>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>

					<IonRow className={ styles.profileActionContainer }>
						<IonCol size="12">
							<IonCard className={ styles.profileActionCard }>
								<IonCardContent>
									<IonRow className="ion-justify-content-between">
										<IonCardSubtitle>View latest project</IonCardSubtitle>
										<IonIcon icon={ arrowForward } />
									</IonRow>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
				
			</IonContent>
		</IonPage>
	);
};

export default Home;